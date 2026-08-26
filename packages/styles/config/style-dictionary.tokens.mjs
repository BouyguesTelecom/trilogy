export default {
  source: ['framework/src/tokens/output/figma.tokens.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'framework/src/tokens/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
            selector: ':root',
          },
        },
      ],
    },
  },
}
