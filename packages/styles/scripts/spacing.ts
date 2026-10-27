import fs from 'fs';
const createSpacingVariables = (spacingValues: number[]): string => {
  let variablesContent = '';
  for (let i = 0; i < spacingValues.length; i++) {
    const variableName = `$spacing-${i+1}`;
    const variableValue = `${spacingValues[i]}px`;
    variablesContent += `${variableName}: ${variableValue};\n`;
  }
  return variablesContent;
}

const SPACING_VALUES = [4, 8, 12, 16, 24, 32, 40, 48, 56, 64];
const spacingVariables = createSpacingVariables(SPACING_VALUES);
const scssContent = `${spacingVariables}`;

const scssFilePath = './framework/src/utilities/_spacing.scss';

fs.writeFile(scssFilePath, scssContent, (err) => {
  if (err) {
    console.error('Error writing SCSS file:', err);
  } else {
    console.log(`SCSS file '${scssFilePath}' updated successfully.`);
  }
});
