import { INSERT_SPACE_BETWEEN } from '@trilogy-ds/react/components/autolayout/DefaultSpacingMatrix'
import { SpacingMatrixMode } from '@trilogy-ds/react/components/autolayout/SpacingMatrix'
import { SpacerSize } from '@trilogy-ds/react/components/spacer'
import fs from 'fs'

type DefaultSpacingMatrix = Array<[SpacingMatrixMode, string, (string | SpacerSize | null)?, SpacerSize?, SpacerSize?]>

const { THREE, FOUR, FIVE, TWO, ONE, SEVEN, ZERO, SIX } = SpacerSize

/*
 * @first component: string (can not be default)
 * @second component: string (can be default for *)
 * @desktop spacing: SpacerSize
 * @mobile spacing: SpacerSize
 * */
export const DEFAULT_SPACING_MATRIX: DefaultSpacingMatrix = [
  [INSERT_SPACE_BETWEEN, '.accordion', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.buttons', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.card', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.columns', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.flex-box', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.box', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.table', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.list', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.timeline', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.stepper', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.pagination', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.segmented-Control', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.tabs', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.range', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.stepper', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.price-container', 'default', THREE, TWO],
  [INSERT_SPACE_BETWEEN, ':not(.buttons) > .button', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.countdown', 'default', FOUR, THREE],
  [INSERT_SPACE_BETWEEN, '.countdown.is-small', 'default', THREE, THREE],
  [INSERT_SPACE_BETWEEN, '.chips-list', 'default', THREE, THREE],
  [INSERT_SPACE_BETWEEN, 'p.text', 'default', THREE, THREE],
  [INSERT_SPACE_BETWEEN, '.progress', 'default', TWO, TWO],
  [INSERT_SPACE_BETWEEN, '.progress-radial', 'default', TWO, TWO],
  [INSERT_SPACE_BETWEEN, '.radios', 'default', THREE, THREE],
  [INSERT_SPACE_BETWEEN, ':not(.radios) >.radios', 'default', THREE, THREE],
  [INSERT_SPACE_BETWEEN, '.checkbox', 'default', THREE, THREE],
  [INSERT_SPACE_BETWEEN, '.switch', 'default', THREE, THREE],
  [INSERT_SPACE_BETWEEN, '.radio-tiles', 'default', FOUR, THREE],
  [INSERT_SPACE_BETWEEN, ':not(.radio-tiles) > .radio-tile', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.checkbox-tiles', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, ':not(.checkbox-tiles) > .checkbox-tile', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.field', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.control', 'default', ONE, ONE],
  [INSERT_SPACE_BETWEEN, '.help', 'default', ONE, ONE],
  [INSERT_SPACE_BETWEEN, '.textarea', 'default', FOUR, FOUR],
  [INSERT_SPACE_BETWEEN, '.select', 'default', FOUR, FOUR],
  [INSERT_SPACE_BETWEEN, '.link', 'default', THREE, TWO],
  [INSERT_SPACE_BETWEEN, '.sticker', 'default', TWO, TWO],
  [INSERT_SPACE_BETWEEN, '.tags', 'default', FOUR, FOUR],
  [INSERT_SPACE_BETWEEN, ':not(.tags) > .tag', 'default', TWO, TWO],
  [INSERT_SPACE_BETWEEN, '.title.is-level-1', 'default', SEVEN, SIX],
  [INSERT_SPACE_BETWEEN, '.title.is-level-2', 'default', SEVEN, SIX],
  [INSERT_SPACE_BETWEEN, '.title.is-level-3', 'default', FIVE, FIVE],
  [INSERT_SPACE_BETWEEN, '.title.is-level-4', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.title.is-level-5', 'default', FOUR, THREE],
  [INSERT_SPACE_BETWEEN, '.title.is-level-6', 'default', TWO, THREE],
  [INSERT_SPACE_BETWEEN, '.overline', 'default', ZERO, ZERO],
  [INSERT_SPACE_BETWEEN, '.title:has(+.subtitle)', null, TWO, TWO],
  [INSERT_SPACE_BETWEEN, '.title.is-level-1 + .subtitle', null, SIX, SEVEN],
  [INSERT_SPACE_BETWEEN, '.title.is-level-2 + .subtitle', null, FIVE, SIX],
  [INSERT_SPACE_BETWEEN, '.title.is-level-3 + .subtitle', null, FIVE, SIX],
  [INSERT_SPACE_BETWEEN, '.title.is-level-4 + .subtitle', null, THREE, TWO],
  [INSERT_SPACE_BETWEEN, '.title.is-level-5 + .subtitle', null, THREE, TWO],
  [INSERT_SPACE_BETWEEN, '.title.is-level-6 + .subtitle', null, THREE, TWO],
]

const createBodyAutolayoutSCSS = (spacingMatrix: DefaultSpacingMatrix): string => {
  let scssContent = 'body:not(.is-tight) {\n'
  let mobileContent = ''

  for (const entry of spacingMatrix) {
    const [insertType, component, component2, spacingValue, mobileSpacingValue] = entry
    let selector = ''

    if (insertType === INSERT_SPACE_BETWEEN) {
      if (!component2 || typeof component2 === null) {
        selector = `${component.toLowerCase()}`
      } else {
        if (typeof component === 'string' && component2 === 'default') {
          selector = `${component.toLowerCase()}`
        } else if (typeof component === 'string' && typeof component2 === 'string') {
          selector = `${component.toLowerCase()} + ${component2.toLowerCase()}`
        }
      }

      const spacingVal = spacingValue as SpacerSize
      const mobileSpacingVal = mobileSpacingValue as SpacerSize | undefined

      let notSelector = selector
      if (selector.startsWith(':not')) {
        const parts = selector.split('>')
        if (parts.length > 1) notSelector = parts[parts.length - 1].trim()
      }

      scssContent += `  ${selector}:not(.flex-box > ${notSelector}):not(:last-child) {\n`
      scssContent += `    margin-bottom: ${spacingVal}px;\n`
      scssContent += '  }\n'

      if (mobileSpacingVal !== undefined) {
        mobileContent += `  ${selector}:not(.flex-box > ${notSelector}):not(:last-child) {\n`
        mobileContent += `      margin-bottom: ${mobileSpacingVal}px;\n`
        mobileContent += '    }\n'
      }
    }
  }

  scssContent += `}\n`

  if (mobileContent) {
    scssContent += `
@include mobile() {
  body:not(.is-tight) {
  ${mobileContent}
  }
}
`
  }

  return scssContent
}

const scssContent = createBodyAutolayoutSCSS(DEFAULT_SPACING_MATRIX)

const scssFilePath = './framework/src/components/_autolayout.scss'

fs.writeFile(scssFilePath, scssContent, (err) => {
  if (err) {
    console.error('Error writing SCSS file:', err)
  } else {
    console.log(`SCSS file '${scssFilePath}' updated successfully.`)
  }
})
