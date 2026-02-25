module.exports = function (api) {
  api.cache(true)
  return {
    presets: [['module:metro-react-native-babel-preset', { useTransformReactJSXExperimental: true }]],
    plugins: [
      [
        '@babel/plugin-transform-react-jsx',
        {
          runtime: 'automatic',
        },
      ],

      [
        '@babel/plugin-transform-private-methods',
        {
          loose: true,
        },
      ],

      // Plugin requis pour react-native-reanimated - DOIT ÊTRE LE DERNIER
      'react-native-reanimated/plugin',
    ],
  }
}
