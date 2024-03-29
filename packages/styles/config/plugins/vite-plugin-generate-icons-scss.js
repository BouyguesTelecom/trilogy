import fs from 'fs'
import path from 'path'

export const generateIconsScss = (options) => {
  return {
    name: 'generate-icons-scss',
    order:'pre',
    configResolved: () => {
      const scssOutputPath = options.scssOutputPath
      const iconsDir = options.iconsDir // Moved this line inside generateBundle
      const iconScss = fs
        .readdirSync(iconsDir)
        .filter((fileName) => fileName.endsWith('.svg'))
        .map((fileName) => {
          const iconName = path.basename(fileName, '.svg')
          return `.icon .tri-${options.prefix}${iconName} ${options.prefix ? `, icon .tri-${iconName}` : '' } {${
                options.sizeAuto
                  ? `  -webkit-mask-size: auto !important;
  mask-size: auto !important;` : ''}
  -webkit-mask-image: url('./assets/icons/${options.directory}/${iconName}.svg');
  mask-image: url('./assets/icons/${options.directory}/${iconName}.svg');
}`})
        .join('\n\n')

      fs.writeFileSync(scssOutputPath, iconScss)
    },
  }
}
