/* eslint no-undef: 0*/
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = buildThemes = (name, partials) => {
  const outputName = partials && `trilogy-partials.css` || name === 'default' && 'trilogy.css' || `trilogy-${name}.css`
  const themeSCSS = `./src/trilogy-${partials ? 'partials' : name}.scss`

  return {
    entry: themeSCSS,
    output: {
      path: path.resolve(__dirname, `../dist`),
      publicPath: '',
    },
    name: `${name}Theme`,
    dependencies: ['framework'],
    resolve: {
      extensions: ['.scss'],
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'file-loader',
              options: { outputPath: `${name}`, name: outputName },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                sassOptions: {
                  outputStyle: 'compressed',
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: `./themes/${name}/assets`, to: `${name}/assets` },
          { from: './dist/fonts/common/assets/fonts', to: `${name}/assets/fonts` },
        ],
      }),
    ],
  }
}
