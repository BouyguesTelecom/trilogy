import fs from 'fs';
import { INSERT_SPACE_BETWEEN } from "@trilogy-ds/react/components/autolayout/DefaultSpacingMatrix";
import { SpacerSize } from "@trilogy-ds/react/components/spacer";
import { SpacingMatrixMode } from "@trilogy-ds/react/components/autolayout/SpacingMatrix";

// @ts-ignore
type DefaultSpacingMatrix = ((SpacingMatrixMode | string | SpacerSize.FOUR)[] | (SpacingMatrixMode | string | SpacerSize.THREE)[])[]

const { NINE, EIGHT, SEVEN, SIX, FIVE, FOUR, THREE, TWO, ONE } = SpacerSize

const DEFAULT_SPACING_MATRIX: DefaultSpacingMatrix = [
  [INSERT_SPACE_BETWEEN, 'Box', FOUR],
  [INSERT_SPACE_BETWEEN, 'Box', 'default', FOUR],
  [INSERT_SPACE_BETWEEN, 'default', 'Box', THREE],
  [INSERT_SPACE_BETWEEN, 'Text', THREE],
  [INSERT_SPACE_BETWEEN, 'Card', FOUR],
  [INSERT_SPACE_BETWEEN, 'Button', FOUR],
  [INSERT_SPACE_BETWEEN, 'Accordions', FOUR],
  [INSERT_SPACE_BETWEEN, 'Alert', FOUR],
  [INSERT_SPACE_BETWEEN, 'Field', THREE],
  [INSERT_SPACE_BETWEEN, 'Chips-list', FOUR],
  [INSERT_SPACE_BETWEEN, 'Tags', FOUR],
  [INSERT_SPACE_BETWEEN, 'Chips-list', FOUR],
]

const createBodyAutolayoutSCSS = (spacingMatrix: DefaultSpacingMatrix): string => {
  let scssContent = 'body:not(.is-tight) {\n';

  for (const entry of spacingMatrix) {
    const [insertType, component, component2, spacingValue] = entry;
    let selector = ''

    if (insertType === INSERT_SPACE_BETWEEN) {
      if (typeof component === 'string' && typeof component2 === 'number') {
        selector = '.' + component.toLowerCase();
      }

      if ((typeof component && typeof component2) === 'string' && component === 'default') {
        selector = `* + ${typeof component2 === 'string' ? '.' + component2.toLowerCase() : ''}`;
      }

      if ((typeof component && typeof component2) === 'string' && component2 === 'default') {
        // @ts-ignore
        selector = `.${component.toLowerCase() + ':not(:first-child)'} + *`;
      }

      const marginProperty = `margin-top`;

      console.log(`Processing: ${selector}, ${marginProperty}, ${getSpacingValue(spacingValue)}px`);

      scssContent += ``;
      scssContent += `  ${selector} {\n`;
      scssContent += `    ${marginProperty}: ${getSpacingValue(spacingValue || component2)}px;\n`;
      scssContent += '  }\n';
    }
  }

  scssContent += `}\n`;

  return scssContent;
}

const getSpacingValue = (spacingValue: any): number => {
  switch (spacingValue) {
    case THREE:
      return THREE.valueOf();
    case FOUR:
      return FOUR.valueOf();
    case FIVE:
      return FIVE.valueOf();
    case EIGHT:
      return EIGHT.valueOf();
    default:
      return THREE.valueOf();
  }
}

const scssContent = createBodyAutolayoutSCSS(DEFAULT_SPACING_MATRIX);

const scssFilePath = './framework/src/components/_autolayout.scss';

fs.writeFile(scssFilePath, scssContent, (err) => {
  if (err) {
    console.error('Error writing SCSS file:', err);
  } else {
    console.log(`SCSS file '${scssFilePath}' updated successfully.`);
  }
});
