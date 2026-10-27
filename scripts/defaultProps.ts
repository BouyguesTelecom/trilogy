import * as fs from 'fs'
import * as glob from 'glob'
import * as path from 'path'
import { InterfaceDeclaration, Project, Type } from 'ts-morph'

const project = new Project({
  tsConfigFilePath: 'packages/react/tsconfig.json',
})

function getDefaultValue(type: Type): any[] {
  const enumValues = type.getUnionTypes().map((t) => {
    if (t.isEnumLiteral()) return t.getLiteralValue()
    return t.getText().split('.').pop()?.replace(/"/g, '') ?? ''
  })
  return enumValues
}

function getTypeOfProps(type: Type) {
  const isEnum = type.getUnionTypes().some((t) => t.isEnumLiteral())
  const isBoolean = type.getUnionTypes().some((t) => t.isBooleanLiteral())
  const isReactNode = type.getUnionTypes().some((t) => t.getText().includes('React.ReactElement'))
  const isFunc = type.getUnionTypes().some((t) => t.getCallSignatures().length > 0)

  switch (true) {
    case isReactNode:
      return 'react'
    case isEnum:
      return 'enum'
    case isBoolean:
      return 'boolean'
    case isFunc:
      return 'function'
    default:
      return 'string'
  }
}

function collectProperties(interfaceDec: InterfaceDeclaration): any[] {
  let properties = interfaceDec.getProperties()

  interfaceDec.getExtends().forEach((extendedType) => {
    const extendedSymbol = extendedType.getExpression().getType().getSymbol()
    if (extendedSymbol && extendedSymbol.getDeclarations()[0] instanceof InterfaceDeclaration) {
      const extendedInterface = extendedSymbol.getDeclarations()[0] as InterfaceDeclaration
      properties = properties.concat(collectProperties(extendedInterface))
    }
  })

  return properties
}

function generateDefaultObject(sourceFile: any, interfaceName: string): Record<string, any> {
  const interfaceDec = sourceFile.getInterfaceOrThrow(interfaceName)
  const properties = collectProperties(interfaceDec)
  const defaultObject: Record<string, any> = {}

  properties.forEach((prop) => {
    const propName = prop.getName()
    const propType = prop.getType()
    defaultObject[propName] = {
      type: getTypeOfProps(propType),
      values: getDefaultValue(propType),
    }
  })

  return defaultObject
}

function writeObjectToFile(filePath: string, obj: Record<string, any>): void {
  const content = `export default ${JSON.stringify(obj, null, 2)};`
  fs.writeFileSync(filePath, content, 'utf8')
}

function processFiles() {
  const files = glob.sync('packages/react/lib/components/**/*Props.d.ts', { ignore: 'node_modules/**' })

  files.forEach((file) => {
    const sourceFile = project.addSourceFileAtPath(file)
    const interfaceNames = sourceFile.getInterfaces().map((iface) => iface.getName())

    interfaceNames.forEach((interfaceName) => {
      const defaultObject = generateDefaultObject(sourceFile, interfaceName)
      const outputFilePath = path.join(path.dirname(sourceFile.getFilePath()), `${interfaceName}Defaults.js`)
      writeObjectToFile(outputFilePath, defaultObject)
    })
  })
}

processFiles()
