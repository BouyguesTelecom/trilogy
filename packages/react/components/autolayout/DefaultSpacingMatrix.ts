import { SpacerSize } from '@/components/spacer'
import { SpacingMatrix, SpacingMatrixMode } from './SpacingMatrix'

const { EIGHT, SEVEN, SIX, FIVE, FOUR, THREE, TWO, ONE } = SpacerSize

export const { INSERT_SPACE_BETWEEN } = SpacingMatrixMode

/**
 * Spacing matrix for defining spacings between component types
 */
export const DEFAULT_SPACING_MATRIX: SpacingMatrix = [
  [INSERT_SPACE_BETWEEN, 'Box', 'Box', TWO],
  [INSERT_SPACE_BETWEEN, 'Box', 'Button', SEVEN],
  [INSERT_SPACE_BETWEEN, 'Box', 'Title', THREE],

  [INSERT_SPACE_BETWEEN, 'Button', 'Button', THREE],
  [INSERT_SPACE_BETWEEN, 'Title', 'Button', THREE],
  [INSERT_SPACE_BETWEEN, 'Button', 'Divider', TWO],
  [INSERT_SPACE_BETWEEN, 'Button', 'Link', SEVEN],
  [INSERT_SPACE_BETWEEN, 'Button', 'Title', EIGHT],
  [INSERT_SPACE_BETWEEN, 'Text', 'Button', THREE],
  [INSERT_SPACE_BETWEEN, 'Text', 'Title', TWO],

  [INSERT_SPACE_BETWEEN, 'default', 'Divider', SEVEN],
  [INSERT_SPACE_BETWEEN, 'Divider', 'Button', TWO],
  [INSERT_SPACE_BETWEEN, 'Divider', 'default', SEVEN],

  [INSERT_SPACE_BETWEEN, 'Image', 'Title', SEVEN],

  [INSERT_SPACE_BETWEEN, 'Input', 'Input', SEVEN],
  [INSERT_SPACE_BETWEEN, 'Input', 'Progress', THREE],

  [INSERT_SPACE_BETWEEN, 'Link', 'Button', SEVEN],
  [INSERT_SPACE_BETWEEN, 'Link', 'Link', SEVEN],

  [INSERT_SPACE_BETWEEN, 'Progress', 'Progress', TWO],

  [INSERT_SPACE_BETWEEN, 'ProgressRadial', 'ProgressRadial', TWO],

  [INSERT_SPACE_BETWEEN, 'Radio', 'Button', THREE],

  [INSERT_SPACE_BETWEEN, 'Sticker', 'Sticker', TWO],

  [INSERT_SPACE_BETWEEN, 'Text', 'Radio', EIGHT],
  [INSERT_SPACE_BETWEEN, 'Text', 'Box', TWO],
  [INSERT_SPACE_BETWEEN, 'Text', 'Title', SEVEN],

  [INSERT_SPACE_BETWEEN, 'Title', 'Box', TWO],
  [INSERT_SPACE_BETWEEN, 'Title', 'Text', TWO],
  [INSERT_SPACE_BETWEEN, 'Title', 'Card', THREE],
  [INSERT_SPACE_BETWEEN, 'Title', 'Icon', THREE],
  [INSERT_SPACE_BETWEEN, 'Title', 'Title', TWO],
  [INSERT_SPACE_BETWEEN, 'Title', 'Tag', SEVEN],
  [INSERT_SPACE_BETWEEN, 'Title', 'default', THREE],
  [INSERT_SPACE_BETWEEN, 'Title', 'Text', TWO],

  [INSERT_SPACE_BETWEEN, 'Tag', 'Text', THREE],
  [INSERT_SPACE_BETWEEN, 'Tag', 'Title', SEVEN],

  [INSERT_SPACE_BETWEEN, 'AutoLayout', 'default', ONE],
  [INSERT_SPACE_BETWEEN, 'default', 'AutoLayout', ONE],

  [INSERT_SPACE_BETWEEN, 'Container', 'default', ONE],
  [INSERT_SPACE_BETWEEN, 'default', 'Container', ONE],

  [INSERT_SPACE_BETWEEN, 'Spacer', 'default', ONE],
  [INSERT_SPACE_BETWEEN, 'default', 'Spacer', ONE],

  [INSERT_SPACE_BETWEEN, 'View', 'default', ONE],
  [INSERT_SPACE_BETWEEN, 'default', 'View', ONE],

  [INSERT_SPACE_BETWEEN, 'Radio', 'default', EIGHT],
  [INSERT_SPACE_BETWEEN, 'default', 'Radio', EIGHT],

  [INSERT_SPACE_BETWEEN, 'Checkbox', 'default', EIGHT],
  [INSERT_SPACE_BETWEEN, 'default', 'Checkbox', EIGHT],

  [INSERT_SPACE_BETWEEN, 'default', 'Otp', EIGHT],

  [INSERT_SPACE_BETWEEN, 'Checkbox', 'default', EIGHT],
  [INSERT_SPACE_BETWEEN, 'default', 'Checkbox', EIGHT],

  [INSERT_SPACE_BETWEEN, 'Columns', 'Columns', TWO],
  [INSERT_SPACE_BETWEEN, 'Columns', 'default', THREE],
  [INSERT_SPACE_BETWEEN, 'default', 'Columns', THREE],

  [INSERT_SPACE_BETWEEN, 'Link', 'default', THREE],
  [INSERT_SPACE_BETWEEN, 'default', 'Link', THREE],

  [INSERT_SPACE_BETWEEN, 'Input', 'default', THREE],
  [INSERT_SPACE_BETWEEN, 'default', 'Input', THREE],

  [INSERT_SPACE_BETWEEN, 'Text', 'default', THREE],
  [INSERT_SPACE_BETWEEN, 'default', 'Text', THREE],

  [INSERT_SPACE_BETWEEN, 'Icon', 'default', THREE],

  [INSERT_SPACE_BETWEEN, 'Button', 'default', THREE],
  [INSERT_SPACE_BETWEEN, 'default', 'Button', THREE],

  [INSERT_SPACE_BETWEEN, 'default', 'default', TWO],

  [INSERT_SPACE_BETWEEN, 'Image', 'Text', THREE],
  [INSERT_SPACE_BETWEEN, 'Image', 'Title', THREE],

  [INSERT_SPACE_BETWEEN, 'View', 'Card', THREE],
  [INSERT_SPACE_BETWEEN, 'Card', 'View', THREE],

  [INSERT_SPACE_BETWEEN, 'Radio', 'Divider', TWO],
  [INSERT_SPACE_BETWEEN, 'Divider', 'Radio', TWO],
  [INSERT_SPACE_BETWEEN, 'Radio', 'Radio', THREE],

  [INSERT_SPACE_BETWEEN, 'Checkbox', 'Divider', TWO],
  [INSERT_SPACE_BETWEEN, 'Divider', 'Checkbox', TWO],
  [INSERT_SPACE_BETWEEN, 'Checkbox', 'Checkbox', TWO],
]
