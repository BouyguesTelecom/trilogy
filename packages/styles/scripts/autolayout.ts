import fs from 'fs';
import { INSERT_SPACE_BETWEEN } from "@trilogy-ds/react/components/autolayout/DefaultSpacingMatrix";
import { SpacerSize } from "@trilogy-ds/react/components/spacer";
import { SpacingMatrixMode } from "@trilogy-ds/react/components/autolayout/SpacingMatrix";

type DefaultSpacingMatrix = Array<[SpacingMatrixMode, string, (string | SpacerSize)?, SpacerSize?, SpacerSize?]>;

const { THREE, FOUR, FIVE, EIGHT } = SpacerSize;

const DEFAULT_SPACING_MATRIX: DefaultSpacingMatrix = [
  [INSERT_SPACE_BETWEEN, 'Box', '', THREE, FIVE],
  [INSERT_SPACE_BETWEEN, 'Box', 'default', FIVE],
  [INSERT_SPACE_BETWEEN, 'default', 'Box', THREE],
  [INSERT_SPACE_BETWEEN, 'Title', 'Button', THREE],
  [INSERT_SPACE_BETWEEN, 'Text', '', THREE, FOUR],
  [INSERT_SPACE_BETWEEN, 'Card', '', THREE, FIVE],
  [INSERT_SPACE_BETWEEN, 'Button', '', THREE],
  [INSERT_SPACE_BETWEEN, 'Accordions', '', THREE],
  [INSERT_SPACE_BETWEEN, 'Alert', '', THREE],
  [INSERT_SPACE_BETWEEN, 'Chips-list', '', THREE, FIVE],
  [INSERT_SPACE_BETWEEN, 'Tags', '', THREE],
  [INSERT_SPACE_BETWEEN, 'Chips-list', '', THREE],
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
          selector = `.${component.toLowerCase()}:not(:first-child) + *`;
        } else if (typeof component === 'string' && typeof component2 === 'string') {
          selector = `.${component.toLowerCase()} + .${component2.toLowerCase()}`;
        }
      }

      const spacingVal = spacingValue as SpacerSize;
      const mobileSpacingVal = mobileSpacingValue as SpacerSize | undefined;

      scssContent += `  ${selector} {\n`;
      scssContent += `    margin-top: ${getSpacingValue(spacingVal)}px;\n`;
      scssContent += '  }\n';

      console.log('mobileSpacingVal', mobileSpacingVal)

      if (mobileSpacingVal !== undefined) {
        mobileContent += `  ${selector} {\n`;
        mobileContent += `    margin-top: ${getSpacingValue(mobileSpacingVal)}px;\n`;
        mobileContent += '  }\n';
      }
    }
  }

  scssContent += `}\n`;

  if (mobileContent) {
    scssContent += `
  @media (max-width: 768px) {
    body:not(.is-tight) {
    ${mobileContent}
  }
}
`;
  }

  return scssContent;
};

const getSpacingValue = (spacingValue: SpacerSize): number => {
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
