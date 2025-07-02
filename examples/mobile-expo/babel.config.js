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
    ],
  }
}
