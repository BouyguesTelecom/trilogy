import fs from 'fs';
import { INSERT_SPACE_BETWEEN } from "@trilogy-ds/react/components/autolayout/DefaultSpacingMatrix";
import { SpacerSize } from "@trilogy-ds/react/components/spacer";
import { SpacingMatrixMode } from "@trilogy-ds/react/components/autolayout/SpacingMatrix";

type DefaultSpacingMatrix = Array<Array<SpacingMatrixMode | string | SpacerSize>>;

const { NINE, EIGHT, SEVEN, SIX, FIVE, FOUR, THREE, TWO, ONE } = SpacerSize;

const DEFAULT_SPACING_MATRIX: DefaultSpacingMatrix = [
  [INSERT_SPACE_BETWEEN, 'Box', FIVE],
  [INSERT_SPACE_BETWEEN, 'Box', 'default', FIVE],
  [INSERT_SPACE_BETWEEN, 'default', 'Box', THREE],
  [INSERT_SPACE_BETWEEN, 'Title', 'Button', THREE],
  [INSERT_SPACE_BETWEEN, 'Text', THREE],
  [INSERT_SPACE_BETWEEN, 'Card', FIVE],
  [INSERT_SPACE_BETWEEN, 'Button', FIVE],
  [INSERT_SPACE_BETWEEN, 'Accordions', FIVE],
  [INSERT_SPACE_BETWEEN, 'Alert', FIVE],
  [INSERT_SPACE_BETWEEN, 'Field', THREE],
  [INSERT_SPACE_BETWEEN, 'Chips-list', FIVE],
  [INSERT_SPACE_BETWEEN, 'Tags', FIVE],
  [INSERT_SPACE_BETWEEN, 'Chips-list', FIVE],
];

const createBodyAutolayoutSCSS = (spacingMatrix: DefaultSpacingMatrix): string => {
  let scssContent = 'body:not(.is-tight) {\n';

  for (const entry of spacingMatrix) {
    const [insertType, component, component2, spacingValue] = entry;
    let selector = '';
    const spacingVal = spacingValue as SpacerSize || component2 as SpacerSize;

    if (insertType === INSERT_SPACE_BETWEEN) {
      if (!component2) {
        // Si une seule composante est donnée, générer une règle simple
        selector = `.${component.toLowerCase()}`;
      } else {
        if (typeof component === 'string' && component2 === 'default') {
          selector = `.${component.toLowerCase()} + *`;
        } else if (component === 'default' && typeof component2 === 'string') {
          selector = `* + .${component2.toLowerCase()}`;
        } else if (typeof component === 'string' && typeof component2 === 'string') {
          selector = `.${component.toLowerCase()} + .${component2.toLowerCase()}`;
        } else if (typeof component === 'string' && typeof component2 === 'number') {
          selector = `.${component.toLowerCase()}`;
        }
      }

      const marginProperty = `margin-top`;

      console.log(`Processing: ${selector}, ${marginProperty}, ${getSpacingValue(spacingVal)}px`);

      scssContent += `  ${selector} {\n`;
      scssContent += `    ${marginProperty}: ${getSpacingValue(spacingVal)}px;\n`;
      scssContent += '  }\n';
    }
  }

  scssContent += `}\n`;

  return scssContent;
}

const getSpacingValue = (spacingValue: any): number => {
  switch (spacingValue) {
    case THREE:
      return 8;
    case FOUR:
      return 16;
    case FIVE:
      return 16;
    case EIGHT:
      return 32;
    default:
      return 8;
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
