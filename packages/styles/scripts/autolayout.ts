import fs from 'fs';
import { INSERT_SPACE_BETWEEN } from "@trilogy-ds/react/components/autolayout/DefaultSpacingMatrix";
import { SpacerSize } from "@trilogy-ds/react/lib/components/spacer";
import { SpacingMatrixMode } from "@trilogy-ds/react/components/autolayout/SpacingMatrix";

// @ts-ignore
type DefaultSpacingMatrix = ((SpacingMatrixMode | string | SpacerSize.MEDIUM)[] | (SpacingMatrixMode | string | SpacerSize.SMALL)[])[]

const { HUGE, LARGE, MEDIUM, SMALL } = SpacerSize

const DEFAULT_SPACING_MATRIX: DefaultSpacingMatrix = [
  [INSERT_SPACE_BETWEEN, 'Box', MEDIUM],
  [INSERT_SPACE_BETWEEN, 'Box', 'default', MEDIUM],
  [INSERT_SPACE_BETWEEN, 'default', 'Box', SMALL],
  [INSERT_SPACE_BETWEEN, 'Text', SMALL],
  [INSERT_SPACE_BETWEEN, 'Card', MEDIUM],
  [INSERT_SPACE_BETWEEN, 'Button', MEDIUM],
  [INSERT_SPACE_BETWEEN, 'Accordions', MEDIUM],
  [INSERT_SPACE_BETWEEN, 'Alert', MEDIUM],
  [INSERT_SPACE_BETWEEN, 'Field', SMALL],
  [INSERT_SPACE_BETWEEN, 'Chips-list', MEDIUM],
  [INSERT_SPACE_BETWEEN, 'Tags', MEDIUM],
  [INSERT_SPACE_BETWEEN, 'Chips-list', MEDIUM],
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

const getSpacingValue = (spacingValue:any): number => {
  switch (spacingValue) {
    case SMALL:
      return SMALL.valueOf();
    case MEDIUM:
      return MEDIUM.valueOf();
    case LARGE:
      return LARGE.valueOf();
    case HUGE:
      return HUGE.valueOf();
    default:
      return SMALL.valueOf();
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
