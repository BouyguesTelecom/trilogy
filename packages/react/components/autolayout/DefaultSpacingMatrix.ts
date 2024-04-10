import { SpacerSize } from '../spacer'
import { SpacingMatrixMode, SpacingMatrix } from './SpacingMatrix'

const { HUGE, LARGE, MEDIUM, SMALL, NONE } = SpacerSize

export const { INSERT_SPACE_BETWEEN } = SpacingMatrixMode

/**
 * Spacing matrix for defining spacings between component types
 */
export const DEFAULT_SPACING_MATRIX: SpacingMatrix = [
  [INSERT_SPACE_BETWEEN, 'Box', 'Box', SMALL],
  [INSERT_SPACE_BETWEEN, 'Box', 'Button', LARGE],
  [INSERT_SPACE_BETWEEN, 'Box', 'Title', MEDIUM],

  [INSERT_SPACE_BETWEEN, 'Button', 'Button', MEDIUM],
  [INSERT_SPACE_BETWEEN, 'Title', 'Button', MEDIUM],
  [INSERT_SPACE_BETWEEN, 'Button', 'Divider', SMALL],
  [INSERT_SPACE_BETWEEN, 'Button', 'Link', LARGE],
  [INSERT_SPACE_BETWEEN, 'Button', 'Title', HUGE],
  [INSERT_SPACE_BETWEEN, 'Text', 'Button', MEDIUM],
  [INSERT_SPACE_BETWEEN, 'Text', 'Title', SMALL],

  [INSERT_SPACE_BETWEEN, 'default', 'Divider', LARGE],
  [INSERT_SPACE_BETWEEN, 'Divider', 'Button', SMALL],
  [INSERT_SPACE_BETWEEN, 'Divider', 'default', LARGE],

  [INSERT_SPACE_BETWEEN, 'Image', 'Title', LARGE],

  [INSERT_SPACE_BETWEEN, 'Input', 'Input', LARGE],
  // [INSERT_SPACE_BETWEEN, 'Input', 'Progress', MEDIUM],

  [INSERT_SPACE_BETWEEN, 'Link', 'Button', LARGE],
  [INSERT_SPACE_BETWEEN, 'Link', 'Link', LARGE],

  [INSERT_SPACE_BETWEEN, 'Notification', 'Notification', MEDIUM],

  // [INSERT_SPACE_BETWEEN, 'Progress', 'Progress', SMALL],

  // [INSERT_SPACE_BETWEEN, 'ProgressRadial', 'ProgressRadial', SMALL],

  [INSERT_SPACE_BETWEEN, 'Radio', 'Button', MEDIUM],

  [INSERT_SPACE_BETWEEN, 'Sticker', 'Sticker', SMALL],

  [INSERT_SPACE_BETWEEN, 'Text', 'Radio', HUGE],
  [INSERT_SPACE_BETWEEN, 'Text', 'Box', SMALL],
  [INSERT_SPACE_BETWEEN, 'Text', 'Title', LARGE],

  [INSERT_SPACE_BETWEEN, 'Title', 'Box', SMALL],
  [INSERT_SPACE_BETWEEN, 'Title', 'Text', SMALL],
  [INSERT_SPACE_BETWEEN, 'Title', 'Card', MEDIUM],
  [INSERT_SPACE_BETWEEN, 'Title', 'Icon', MEDIUM],
  [INSERT_SPACE_BETWEEN, 'Title', 'Notification', MEDIUM],
  [INSERT_SPACE_BETWEEN, 'Title', 'Title', SMALL],
  [INSERT_SPACE_BETWEEN, 'Title', 'Tag', LARGE],
  [INSERT_SPACE_BETWEEN, 'Title', 'default', MEDIUM],
  [INSERT_SPACE_BETWEEN, 'Title', 'Text', SMALL],

  [INSERT_SPACE_BETWEEN, 'Tag', 'Text', MEDIUM],
  [INSERT_SPACE_BETWEEN, 'Tag', 'Title', LARGE],

  [INSERT_SPACE_BETWEEN, 'AutoLayout', 'default', NONE],
  [INSERT_SPACE_BETWEEN, 'default', 'AutoLayout', NONE],

  [INSERT_SPACE_BETWEEN, 'Container', 'default', NONE],
  [INSERT_SPACE_BETWEEN, 'default', 'Container', NONE],

  [INSERT_SPACE_BETWEEN, 'Spacer', 'default', NONE],
  [INSERT_SPACE_BETWEEN, 'default', 'Spacer', NONE],

  [INSERT_SPACE_BETWEEN, 'View', 'default', NONE],
  [INSERT_SPACE_BETWEEN, 'default', 'View', NONE],

  [INSERT_SPACE_BETWEEN, 'Radio', 'default', HUGE],
  [INSERT_SPACE_BETWEEN, 'default', 'Radio', HUGE],

  [INSERT_SPACE_BETWEEN, 'Checkbox', 'default', HUGE],
  [INSERT_SPACE_BETWEEN, 'default', 'Checkbox', HUGE],

  [INSERT_SPACE_BETWEEN, 'default', 'Otp', HUGE],

  [INSERT_SPACE_BETWEEN, 'Checkbox', 'default', HUGE],
  [INSERT_SPACE_BETWEEN, 'default', 'Checkbox', HUGE],

  [INSERT_SPACE_BETWEEN, 'Columns', 'Columns', SMALL],
  [INSERT_SPACE_BETWEEN, 'Columns', 'default', MEDIUM],
  [INSERT_SPACE_BETWEEN, 'default', 'Columns', MEDIUM],

  [INSERT_SPACE_BETWEEN, 'Link', 'default', MEDIUM],
  [INSERT_SPACE_BETWEEN, 'default', 'Link', MEDIUM],

  [INSERT_SPACE_BETWEEN, 'Input', 'default', MEDIUM],
  [INSERT_SPACE_BETWEEN, 'default', 'Input', MEDIUM],

  [INSERT_SPACE_BETWEEN, 'Text', 'default', MEDIUM],
  [INSERT_SPACE_BETWEEN, 'default', 'Text', MEDIUM],

  [INSERT_SPACE_BETWEEN, 'Icon', 'default', MEDIUM],

  [INSERT_SPACE_BETWEEN, 'Button', 'default', MEDIUM],
  [INSERT_SPACE_BETWEEN, 'default', 'Button', MEDIUM],

  [INSERT_SPACE_BETWEEN, 'default', 'default', SMALL],

  [INSERT_SPACE_BETWEEN, 'Image', 'Text', MEDIUM],
  [INSERT_SPACE_BETWEEN, 'Image', 'Title', MEDIUM],

  [INSERT_SPACE_BETWEEN, 'View', 'Card', MEDIUM],
  [INSERT_SPACE_BETWEEN, 'Card', 'View', MEDIUM],
]
