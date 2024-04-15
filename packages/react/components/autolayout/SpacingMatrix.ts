import type { TrilogyComponents } from '../index.d'
import { SpacerSize } from '../spacer/SpacerEnum'

export enum SpacingMatrixMode {
  /**
   * Insert space between two elements.
   */
  INSERT_SPACE_BETWEEN,

  /**
   * Insert an element between two elements.
   */
  INSERT_ELEMENT_BETWEEN,
}

export type SpacingRule =
  // Insert space between
  | [
      typeof SpacingMatrixMode.INSERT_SPACE_BETWEEN,
      TrilogyComponents | undefined | 'default',
      TrilogyComponents | undefined | 'default',
      SpacerSize,
    ]
  // Insert element between
  | [
      typeof SpacingMatrixMode.INSERT_ELEMENT_BETWEEN,
      TrilogyComponents | undefined | 'default',
      TrilogyComponents | undefined | 'default',
      JSX.Element,
    ]

export type SpacingMatrix = SpacingRule[]
