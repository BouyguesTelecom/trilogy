const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

const defaultConfig = getDefaultConfig(__dirname);
const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, '../..');

const monorepoPackages = {
  '@trilogy-ds/react-template': path.resolve(monorepoRoot, 'examples/react-template'),
  '@trilogy-ds/react': path.resolve(monorepoRoot, 'packages/react'),
  '@trilogy-ds/assets': path.resolve(monorepoRoot, 'packages/assets'),
  '@trilogy-ds/styles': path.resolve(monorepoRoot, 'packages/styles'),
};

const {
  resolver: {sourceExts, assetExts},
} = getDefaultConfig(__dirname);

const {
  getMetroAndroidAssetsResolutionFix,
} = require('react-native-monorepo-tools');
const {resolve} = require("node:path");

const androidAssetsResolutionFix = getMetroAndroidAssetsResolutionFix({
  depth: 3,
});

const config = {
  projectRoot: resolve(__dirname),
  watchFolders: [
    ...Object.values(monorepoPackages)
  ],
  transformer: {
    publicPath: androidAssetsResolutionFix.publicPath,
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  server: {
    enhanceMiddleware: middleware => {
      return androidAssetsResolutionFix.applyMiddleware(middleware);
    },
  },
  resolver: {
    nodeModulesPaths: [
      resolve(__dirname, '../../node_modules'),
      resolve(__dirname, 'node_modules')
    ],
    extraNodeModules: monorepoPackages
  },
};

module.exports = mergeConfig(defaultConfig, config);
