const fs = require('fs')
const path = require('path')
const glob = require('glob')

function fixImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')

  content = content.replace(/require\("\.\/([^"]+)"\)/g, (match, moduleName) => {
    if (moduleName.includes('.') || moduleName.startsWith('@')) {
      return match
    }

    const fullPath = path.join(path.dirname(filePath), moduleName)
    if (fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory()) {
      return `require("./${moduleName}/index.js")`
    }

    return `require("./${moduleName}.js")`
  })

  fs.writeFileSync(filePath, content)
  console.log(`Fixed imports in: ${filePath}`)
}

const jsFiles = glob.sync('lib/**/*.js', { cwd: __dirname + '/..' })

jsFiles.forEach((file) => {
  const fullPath = path.join(__dirname, '..', file)
  fixImports(fullPath)
})

console.log('Import fixing completed!')
