import { SpacerSize } from '@/components/spacer'
import { SpacingMatrix, SpacingMatrixMode } from './SpacingMatrix'

const { SIX, FIVE, FOUR, THREE, TWO, ONE, ZERO } = SpacerSize

export const { INSERT_SPACE_BETWEEN } = SpacingMatrixMode

/**
 * Spacing matrix for defining spacings between component types
 */
export const DEFAULT_SPACING_MATRIX: SpacingMatrix = [
  [INSERT_SPACE_BETWEEN, 'Title', 'Icon', TWO],
  [INSERT_SPACE_BETWEEN, 'Title', 'Box', FOUR],
  [INSERT_SPACE_BETWEEN, 'Title', 'Card', FOUR],
  [INSERT_SPACE_BETWEEN, 'Title', 'Text', ONE],
  [INSERT_SPACE_BETWEEN, 'Title', 'Rows', FIVE],
  [INSERT_SPACE_BETWEEN, 'Title', 'Button', FIVE],
  [INSERT_SPACE_BETWEEN, 'Title', 'Input', FIVE],
  [INSERT_SPACE_BETWEEN, 'Title', 'default', FIVE],
  [INSERT_SPACE_BETWEEN, 'Title', 'Text', THREE],
  [INSERT_SPACE_BETWEEN, 'Title', 'Title', ZERO],
  [INSERT_SPACE_BETWEEN, 'Title', 'Section', SIX],
  [INSERT_SPACE_BETWEEN, 'Title', 'Text', SIX],
  [INSERT_SPACE_BETWEEN, 'List', 'List', FOUR],
  [INSERT_SPACE_BETWEEN, 'Card', 'Card', FOUR],
  [INSERT_SPACE_BETWEEN, 'Section', 'Section', SIX],
  [INSERT_SPACE_BETWEEN, 'Input', 'Input', FIVE],
  [INSERT_SPACE_BETWEEN, 'Rows', 'Rows', FIVE],
  [INSERT_SPACE_BETWEEN, 'Button', 'Button', THREE],
  [INSERT_SPACE_BETWEEN, 'Checkbox', 'Checkbox', TWO],
  [INSERT_SPACE_BETWEEN, 'Link', 'Link', FOUR],
  [INSERT_SPACE_BETWEEN, 'Switch', 'Text', FOUR],
  [INSERT_SPACE_BETWEEN, 'Radio', 'Radio', TWO],
  [INSERT_SPACE_BETWEEN, 'Box', 'Title', FIVE],
  [INSERT_SPACE_BETWEEN, 'Accordion', 'Accordion', TWO],
  [INSERT_SPACE_BETWEEN, 'Accordion', 'Link', FIVE],
  [INSERT_SPACE_BETWEEN, 'Box', 'Box', FOUR],
  [INSERT_SPACE_BETWEEN, 'Box', 'Link', FIVE],
  [INSERT_SPACE_BETWEEN, 'Box', 'Button', FIVE],
  [INSERT_SPACE_BETWEEN, 'Text', 'Box', FIVE],
  [INSERT_SPACE_BETWEEN, 'Text', 'default', FIVE],
  [INSERT_SPACE_BETWEEN, 'Text', 'Text', FOUR],
  [INSERT_SPACE_BETWEEN, 'Text', 'Text', TWO],
  [INSERT_SPACE_BETWEEN, 'Text', 'Text', ONE],
  [INSERT_SPACE_BETWEEN, 'Text', 'Section', SIX],
  [INSERT_SPACE_BETWEEN, 'Text', 'Button', FIVE],
];
