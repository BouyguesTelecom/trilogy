import { SpacingMatrix, SpacingMatrixMode } from '@/components/autolayout/SpacingMatrix'
import { SpacerSize } from '@/components/spacer'

const { FOUR, THREE, TWO, ONE } = SpacerSize

export const { INSERT_SPACE_BETWEEN } = SpacingMatrixMode

/**
 * Spacing matrix for defining spacings between component types
 */
export const DEFAULT_SPACING_MATRIX: SpacingMatrix = [
  [INSERT_SPACE_BETWEEN, 'Accordion', 'default', FOUR],
  [INSERT_SPACE_BETWEEN, 'Card', 'default', FOUR],
  [INSERT_SPACE_BETWEEN, 'Box', 'default', FOUR],
  [INSERT_SPACE_BETWEEN, 'Table', 'default', FOUR],
  [INSERT_SPACE_BETWEEN, 'List', 'default', FOUR],
  [INSERT_SPACE_BETWEEN, 'Timeline', 'default', FOUR],
  [INSERT_SPACE_BETWEEN, 'Stepper', 'default', FOUR],
  [INSERT_SPACE_BETWEEN, 'Pagination', 'default', FOUR],
  [INSERT_SPACE_BETWEEN, 'SegmentControl', 'default', FOUR],
  [INSERT_SPACE_BETWEEN, 'Tabs', 'default', FOUR],
  [INSERT_SPACE_BETWEEN, 'Range', 'default', FOUR],
  [INSERT_SPACE_BETWEEN, 'Price', 'default', TWO],
  [INSERT_SPACE_BETWEEN, 'Button', 'default', FOUR],
  [INSERT_SPACE_BETWEEN, 'Countdown', 'default', THREE],
  [INSERT_SPACE_BETWEEN, 'Chips', 'default', THREE],
  [INSERT_SPACE_BETWEEN, 'Text', 'default', TWO],
  [INSERT_SPACE_BETWEEN, 'Title', 'default', THREE],
  [INSERT_SPACE_BETWEEN, 'Progress', 'default', TWO],
  [INSERT_SPACE_BETWEEN, 'ProgressRadial', 'default', TWO],
  [INSERT_SPACE_BETWEEN, 'Radio', 'default', THREE],
  [INSERT_SPACE_BETWEEN, 'Checkbox', 'default', TWO],
  [INSERT_SPACE_BETWEEN, 'CheckboxTiles', 'default', THREE],
  [INSERT_SPACE_BETWEEN, 'Switch', 'default', THREE],
  [INSERT_SPACE_BETWEEN, 'Radio', 'default', FOUR],
  [INSERT_SPACE_BETWEEN, 'Checkbox', 'default', FOUR],
  [INSERT_SPACE_BETWEEN, 'Input', 'default', FOUR],
  [INSERT_SPACE_BETWEEN, 'Textarea', 'default', FOUR],
  [INSERT_SPACE_BETWEEN, 'Select', 'default', FOUR],
  [INSERT_SPACE_BETWEEN, 'Link', 'default', TWO],
  [INSERT_SPACE_BETWEEN, 'Sticker', 'default', TWO],
  [INSERT_SPACE_BETWEEN, 'Tag', 'default', TWO],
]
