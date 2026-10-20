const path = require('node:path')
const { getDefaultConfig } = require('expo/metro-config')

const projectRoot = __dirname
const monorepoRoot = path.resolve(projectRoot, '../..')
const trilogyRoot = path.join(monorepoRoot, 'packages/react')
const config = getDefaultConfig(projectRoot)

config.watchFolders = [...new Set([...(config.watchFolders || []), trilogyRoot])]

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === '@trilogy-ds/react') {
    return context.resolveRequest(context, path.join(trilogyRoot, 'index.ts'), platform)
  }

  if (moduleName.startsWith('@/') && context.originModulePath.startsWith(`${trilogyRoot}${path.sep}`)) {
    return context.resolveRequest(context, path.join(trilogyRoot, moduleName.slice(2)), platform)
  }

  // Library dev dependencies must not introduce a second React/native runtime.
  if (/^(react|react-dom|react-native)(\/|$)/.test(moduleName)) {
    const appContext = { ...context, originModulePath: path.join(projectRoot, 'package.json') }
    return context.resolveRequest(appContext, moduleName, platform)
  }

  return context.resolveRequest(context, moduleName, platform)
}

module.exports = config
