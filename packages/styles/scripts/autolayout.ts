import fs from 'fs';
import { INSERT_SPACE_BETWEEN } from "@trilogy-ds/react/components/autolayout/DefaultSpacingMatrix";
import { SpacerSize } from "@trilogy-ds/react/components/spacer";
import { SpacingMatrixMode } from "@trilogy-ds/react/components/autolayout/SpacingMatrix";

type DefaultSpacingMatrix = Array<[SpacingMatrixMode, string, (string | SpacerSize)?, SpacerSize?, SpacerSize?]>;

const { THREE, FOUR, FIVE, TWO, ONE, SEVEN, ZERO, SIX } = SpacerSize;

/*
* @first component: string (can not be default)
* @second component: string (can be default for *)
* @desktop spacing: SpacerSize
* @mobile spacing: SpacerSize
* */
export const DEFAULT_SPACING_MATRIX: DefaultSpacingMatrix = [
  [INSERT_SPACE_BETWEEN, '.Accordion', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.Card', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.Box', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.Table', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.List', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.Timeline', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.Stepper', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.Pagination', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.Segmented-Control', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.Tabs', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.Range', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.Stepper', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.Price-container', 'default', THREE, TWO],
  [INSERT_SPACE_BETWEEN, '.Buttons', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.Countdown', 'default', FOUR, THREE],
  [INSERT_SPACE_BETWEEN, '.countdown.is-small', 'default', THREE, THREE],
  [INSERT_SPACE_BETWEEN, '.Chips-list', 'default', THREE, THREE],
  [INSERT_SPACE_BETWEEN, 'P.Text', 'default', THREE, TWO],
  [INSERT_SPACE_BETWEEN, '.Progress', 'default', TWO, TWO],
  [INSERT_SPACE_BETWEEN, '.progress-radial', 'default', TWO, TWO],
  [INSERT_SPACE_BETWEEN, '.Radio', 'default', THREE, THREE],
  [INSERT_SPACE_BETWEEN, '.Checkbox', 'default', THREE, THREE],
  [INSERT_SPACE_BETWEEN, '.Switch', 'default', THREE, THREE],
  [INSERT_SPACE_BETWEEN, '.radio-tile', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.checkbox-tile', 'default', FIVE, FOUR],
  [INSERT_SPACE_BETWEEN, '.Input', 'default', FOUR, FOUR],
  [INSERT_SPACE_BETWEEN, '.Textarea', 'default', FOUR, FOUR],
  [INSERT_SPACE_BETWEEN, '.Select', 'default', FOUR, FOUR],
  [INSERT_SPACE_BETWEEN, '.Link', 'default', THREE, TWO],
  [INSERT_SPACE_BETWEEN, '.Sticker', 'default', TWO, TWO],
  [INSERT_SPACE_BETWEEN, '.Tag', 'default', TWO, TWO],
  [INSERT_SPACE_BETWEEN, '.title.is-level-1', 'default', SEVEN, SIX],
  [INSERT_SPACE_BETWEEN, '.title.is-level-2', 'default', SIX, FIVE],
  [INSERT_SPACE_BETWEEN, '.title.is-level-3', 'default', FOUR, THREE],
  [INSERT_SPACE_BETWEEN, '.title.is-level-4', 'default', THREE, TWO],
  [INSERT_SPACE_BETWEEN, '.title.is-level-5', 'default', THREE, TWO],
  [INSERT_SPACE_BETWEEN, '.title.is-level-6', 'default', THREE, TWO],
  [INSERT_SPACE_BETWEEN, '.overline', 'default', ZERO, ZERO],
  [INSERT_SPACE_BETWEEN, '.title.is-level-1', '.subtitle', TWO, TWO],
  [INSERT_SPACE_BETWEEN, '.title.is-level-2', '.subtitle', TWO, TWO],
  [INSERT_SPACE_BETWEEN, '.subtitle', '.title.is-level-1', SIX, SEVEN],
  [INSERT_SPACE_BETWEEN, '.subtitle', '.title.is-level-2', FIVE, SIX]
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
        if (typeof component === 'string' && component2 === 'default') {
          selector = `${component.toLowerCase()}`;
        } else if (typeof component === 'string' && typeof component2 === 'string') {
          selector = `${component.toLowerCase()} + ${component2.toLowerCase()}`;
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
