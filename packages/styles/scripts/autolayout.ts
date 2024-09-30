import fs from 'fs';
import { INSERT_SPACE_BETWEEN } from "@trilogy-ds/react/components/autolayout/DefaultSpacingMatrix";
import { SpacerSize } from "@trilogy-ds/react/components/spacer";
import { SpacingMatrixMode } from "@trilogy-ds/react/components/autolayout/SpacingMatrix";

type DefaultSpacingMatrix = Array<[SpacingMatrixMode, string, (string | SpacerSize)?, SpacerSize?, SpacerSize?]>;

const { THREE, FOUR, FIVE, TWO, ONE, SEVEN, ZERO, SIX, EIGHT } = SpacerSize;

export const DEFAULT_SPACING_MATRIX: DefaultSpacingMatrix = [
  [INSERT_SPACE_BETWEEN, 'default', 'Accordions', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, 'default', 'Card', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, 'default', 'Box', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, 'default', 'Table', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, 'default', 'List', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, 'default', 'Timeline', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, 'default', 'Stepper', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, 'default', 'Pagination', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, 'default', 'Segmented-Control', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, 'default', 'Tabs', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, 'default', 'Range', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, 'default', 'Stepper', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, 'default', 'Price', THREE, TWO],
  [INSERT_SPACE_BETWEEN, 'default', 'Button', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, 'default', 'Countdown', FOUR, THREE],
  [INSERT_SPACE_BETWEEN, 'default', 'countdown.is-small', THREE, THREE],
  [INSERT_SPACE_BETWEEN, 'default', 'Chips', THREE, THREE],
  [INSERT_SPACE_BETWEEN, 'default', 'Text', THREE, TWO],
  [INSERT_SPACE_BETWEEN, 'default', 'Progress', TWO, TWO],
  [INSERT_SPACE_BETWEEN, 'default', 'progress-radial', TWO, TWO],
  [INSERT_SPACE_BETWEEN, 'default', 'Radio', THREE, THREE],
  [INSERT_SPACE_BETWEEN, 'default', 'Checkbox', THREE, THREE],
  [INSERT_SPACE_BETWEEN, 'default', 'Switch', THREE, THREE],
  [INSERT_SPACE_BETWEEN, 'default', 'radio-tile', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, 'default', 'checkbox-tile', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, 'default', 'Input', FOUR, FOUR],
  [INSERT_SPACE_BETWEEN, 'default', 'Textarea', FOUR, FOUR],
  [INSERT_SPACE_BETWEEN, 'default', 'Select', FOUR, FOUR],
  [INSERT_SPACE_BETWEEN, 'default', 'Link', THREE, TWO],
  [INSERT_SPACE_BETWEEN, 'default', 'Sticker', TWO, TWO],
  [INSERT_SPACE_BETWEEN, 'default', 'Tag', TWO, TWO],
  [INSERT_SPACE_BETWEEN, 'default', 'title.is-level-1', SEVEN, SIX],
  [INSERT_SPACE_BETWEEN, 'default', 'title.is-level-2', SIX, FIVE],
  [INSERT_SPACE_BETWEEN, 'default', 'title.is-level-3', FOUR, THREE],
  [INSERT_SPACE_BETWEEN, 'default', 'title.is-level-4', THREE, TWO],
  [INSERT_SPACE_BETWEEN, 'default', 'title.is-level-5', THREE, TWO],
  [INSERT_SPACE_BETWEEN, 'default', 'title.is-level-6', THREE, TWO],
  [INSERT_SPACE_BETWEEN, 'default', 'overline', ZERO, ZERO],
  [INSERT_SPACE_BETWEEN, 'subtitle', 'title.is-level-1', TWO, TWO],
  [INSERT_SPACE_BETWEEN, 'subtitle', 'title.is-level-2', TWO, TWO],
  [INSERT_SPACE_BETWEEN, 'title.is-level-1', 'subtitle', SIX, SEVEN],
  [INSERT_SPACE_BETWEEN, 'title.is-level-2', 'subtitle', FIVE, SIX]
];


const createBodyAutolayoutSCSS = (spacingMatrix: DefaultSpacingMatrix): string => {
  let scssContent = 'body:not(.is-tight) {\n';
  let mobileContent = '';

  for (const entry of spacingMatrix) {
    const [insertType, component, component2, spacingValue, mobileSpacingValue] = entry;
    let selector = '';

    if (insertType === INSERT_SPACE_BETWEEN) {
      if (!component2 || typeof component2 === 'number') {
        selector = `.${component.toLowerCase()}`;
      } else {
        if (component === 'default' && typeof component2 === 'string') {
          selector = `* + .${component2.toLowerCase()}`;
        } else if (typeof component === 'string' && component2 === 'default') {
          selector = `.${component.toLowerCase()} + *`;
        } else if (typeof component === 'string' && typeof component2 === 'string') {
          selector = `.${component.toLowerCase()} + .${component2.toLowerCase()}`;
        }
      }

      const spacingVal = spacingValue as SpacerSize;
      const mobileSpacingVal = mobileSpacingValue as SpacerSize | undefined;

      scssContent += `  ${selector} {\n`;
      scssContent += `    margin-bottom: ${spacingVal}px;\n`;
      scssContent += '  }\n';

      if (mobileSpacingVal !== undefined) {
        mobileContent += `  ${selector} {\n`;
        mobileContent += `      margin-bottom: ${mobileSpacingVal}px;\n`;
        mobileContent += '    }\n';
      }
    }
  }

  scssContent += `}\n`;

  if (mobileContent) {
    scssContent += `
@include mobile() {
  body:not(.is-tight) {
  ${mobileContent}
  }
}
`;
  }

  return scssContent;
};

const scssContent = createBodyAutolayoutSCSS(DEFAULT_SPACING_MATRIX);

const scssFilePath = './framework/src/components/_autolayout.scss';

fs.writeFile(scssFilePath, scssContent, err => {
  if (err) {
    console.error('Error writing SCSS file:', err);
  } else {
    console.log(`SCSS file '${scssFilePath}' updated successfully.`);
  }
});
