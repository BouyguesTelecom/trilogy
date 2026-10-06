const path = require('path')
const { Project, ts } = require('ts-morph')
const { structuredPatch } = require('diff')

const root = path.resolve(__dirname, '../packages/react')
const project = new Project({ tsConfigFilePath: path.join(root, 'tsconfig.json') })
project.addSourceFilesAtPaths([
  `${root}/**/*.{ts,tsx,js,jsx}`,
  `!${root}/node_modules/**`,
  `!${root}/lib/**`,
  `!${root}/coverage/**`,
])
const files = project.getSourceFiles().filter((file) => {
  const relative = path.relative(root, file.getFilePath())
  return !relative.startsWith('..') && !/(^|\/)(node_modules|lib|coverage|dist)\//.test(relative)
})
let checker = project.getTypeChecker().compilerObject
const prefix = process.argv[2] || ''
const mode = process.argv[3] || 'summary'
const offset = Number(process.argv[4] || 0)
const limit = Number(process.argv[5] || 20)
const plans = []
const tasks = []
const issues = []

function canonical(symbol) {
  const seen = new Set()
  while (symbol && symbol.flags & ts.SymbolFlags.Alias && !seen.has(symbol)) {
    seen.add(symbol)
    symbol = checker.getAliasedSymbol(symbol)
  }
  return symbol
}

function alias(file) {
  return '@/' + path.relative(root, file).replace(/\.(tsx?|jsx?)$/, '')
}

function findExport(file, symbol, preferred) {
  const moduleSymbol = checker.getSymbolAtLocation(file)
  if (!moduleSymbol) return undefined
  const matches = checker.getExportsOfModule(moduleSymbol).filter((entry) => canonical(entry) === symbol)
  return (matches.find((entry) => entry.name === preferred) || matches[0])?.name
}

for (const file of files) {
  const relative = path.relative(root, file.getFilePath())
  if (!prefix.split(',').some((part) => relative.startsWith(part))) continue
  const original = file.getFullText()
  const changes = []
  const native = /\.native\.(?:test\.)?[jt]sx?$/.test(relative)
  for (const declaration of file.getImportDeclarations()) {
    const specifier = declaration.getModuleSpecifierValue()
    const internal = specifier.startsWith('.') || specifier.startsWith('@/')
    if (!internal) continue
    const absolute = specifier.startsWith('.')
      ? path.resolve(path.dirname(file.getFilePath()), specifier)
      : path.resolve(root, specifier.slice(2))
    const normalized = '@/' + path.relative(root, absolute).replace(/\.(tsx?|jsx?)$/, '').replace(/\/index$/, '')
    const globalBarrel = /^@\/(?:components|objects|helpers|constants|context|events|services|types)?$/.test(normalized)
    if (!globalBarrel) {
      if (specifier.startsWith('.') && absolute.startsWith(root + '/')) {
        changes.push({
          declaration,
          text: declaration.getText().replace(declaration.getModuleSpecifier().getText(), `'${normalized}'`),
        })
      }
      continue
    }
    const moduleFile = declaration.getModuleSpecifierSourceFile()
    if (!moduleFile || !moduleFile.getFilePath().startsWith(root + '/')) {
      issues.push(`${relative}: unresolved ${specifier}`)
      continue
    }
    if (declaration.getNamespaceImport() || declaration.getImportClause() === undefined) {
      changes.push({
        declaration,
        text: declaration
          .getText()
          .replace(declaration.getModuleSpecifier().getText(), `'${alias(moduleFile.getFilePath())}'`),
      })
      if (declaration.getNamespaceImport() && /\/index\.[jt]sx?$/.test(moduleFile.getFilePath())) {
        issues.push(`${relative}: namespace barrel ${specifier}`)
      }
      continue
    }
    const bindings = []
    if (declaration.getDefaultImport())
      bindings.push({
        node: declaration.getDefaultImport(),
        imported: 'default',
        local: declaration.getDefaultImport().getText(),
        typeOnly: declaration.isTypeOnly(),
      })
    for (const named of declaration.getNamedImports()) {
      bindings.push({
        node: named.getNameNode(),
        imported: named.getName(),
        local: (named.getAliasNode() || named.getNameNode()).getText(),
        typeOnly: declaration.isTypeOnly() || named.isTypeOnly(),
      })
    }
    const groups = new Map()
    for (const binding of bindings) {
      const symbol = canonical(checker.getSymbolAtLocation(binding.node.compilerNode))
      let target = symbol?.declarations
        ?.find((node) => node.getSourceFile().fileName.startsWith(root + '/'))
        ?.getSourceFile()
      let exported = target && findExport(target, symbol, binding.imported)
      if (!target || !exported || target.fileName === file.getFilePath()) {
        target = moduleFile.compilerNode
        exported = binding.imported
        if (/\/index\.[jt]sx?$/.test(target.fileName))
          issues.push(`${relative}: cannot resolve ${binding.imported} from ${specifier}`)
      }
      let targetPath = target.fileName
      if (native && !/\.native\.[jt]sx?$/.test(targetPath)) {
        const candidate = targetPath.replace(/(\.[jt]sx?)$/, '.native$1')
        const nativeFile = project.getSourceFile(candidate)
        if (nativeFile) {
          const moduleSymbol = checker.getSymbolAtLocation(nativeFile.compilerNode)
          if (moduleSymbol && checker.getExportsOfModule(moduleSymbol).some((entry) => entry.name === exported))
            targetPath = candidate
        }
      }
      const key = `${targetPath}:${binding.typeOnly}`
      if (!groups.has(key)) groups.set(key, { targetPath, typeOnly: binding.typeOnly, bindings: [] })
      groups.get(key).bindings.push({ ...binding, exported })
    }
    const lines = []
    const semicolon = declaration.getText().endsWith(';') ? ';' : ''
    for (const group of groups.values()) {
      const defaultBinding = group.bindings.find((binding) => binding.exported === 'default')
      const namedBindings = group.bindings.filter((binding) => binding !== defaultBinding)
      const pieces = []
      if (defaultBinding) pieces.push(defaultBinding.local)
      if (namedBindings.length)
        pieces.push(
          `{ ${namedBindings
            .map((binding) =>
              binding.exported === binding.local ? binding.exported : `${binding.exported} as ${binding.local}`,
            )
            .join(', ')} }`,
        )
      lines.push(
        `import ${group.typeOnly ? 'type ' : ''}${pieces.join(', ')} from '${alias(group.targetPath)}'${semicolon}`,
      )
    }
    changes.push({ declaration, text: lines.join('\n') })
  }
  const exports = []
  tasks.push({ file, original, changes, exports })
}

for (const { file, original, changes, exports } of tasks) {
  for (const change of changes.reverse()) {
    if (change.declaration.getText() !== change.text) change.declaration.replaceWithText(change.text)
  }
  for (const { declaration, value } of exports) declaration.setModuleSpecifier(value)
  file.organizeImports()
  const updated = file.getFullText()
  if (updated !== original) plans.push({ file: file.getFilePath(), original, updated })
}

if (mode === 'patch') {
  console.log('*** Begin Patch')
  for (const plan of plans.slice(offset, offset + limit)) {
    const diff = structuredPatch(plan.file, plan.file, plan.original, plan.updated, '', '', { context: 3 })
    console.log(`*** Update File: ${plan.file}`)
    for (const hunk of diff.hunks) {
      console.log('@@')
      console.log(hunk.lines.filter((line) => !line.startsWith('\\ No newline')).join('\n'))
    }
  }
  console.log('*** End Patch')
} else {
  console.log(
    JSON.stringify(
      { count: plans.length, files: plans.map((plan) => path.relative(root, plan.file)), issues },
      null,
      2,
    ),
  )
}
