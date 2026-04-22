const { getDefaultConfig } = require('expo/metro-config')
const path = require('path')
const { resolve } = require('node:path')

// Find the project and workspace directories
const projectRoot = __dirname
const monorepoRoot = path.resolve(projectRoot, '../..')
// This can be replaced with `find-yarn-workspace-root`
const monorepoPackages = {
  '@trilogy-ds/react-template': path.resolve(monorepoRoot, 'examples/react-template'),
  '@trilogy-ds/react': path.resolve(monorepoRoot, 'packages/react'),
  '@trilogy-ds/assets': path.resolve(monorepoRoot, 'packages/assets'),
  '@trilogy-ds/styles': path.resolve(monorepoRoot, 'packages/styles'),
  'react-native-reanimated': path.resolve(projectRoot, 'node_modules/react-native-reanimated'),
  'react-native-gesture-handler': path.resolve(
    monorepoRoot,
    'packages/react/node_modules/react-native-gesture-handler',
  ),
}

const config = getDefaultConfig(projectRoot)

// 1. Watch all files within the monorepo
config.watchFolders = [...Object.values(monorepoPackages)]
// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
  resolve(__dirname, '../../node_modules'),
  resolve(__dirname, '../../packages/react/node_modules/react-native-gesture-handler'),
  resolve(__dirname, 'node_modules'),
]

config.resolver.extraNodeModules = monorepoPackages

module.exports = config
