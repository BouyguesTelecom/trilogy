import type { TrilogyComponents } from '@/components'
import { ReactChild, ReactNode } from 'react'

export type HandleBetweenChildren = {
  /**
   * List of previously accumulated elements prior to current step
   */
  accumulator: JSX.Element[]

  /**
   * The previous child element
   */
  previousChild: ReactChild

  /**
   * The next child element
   */
  nextChild: ReactChild

  /**
   * The previous child type
   */
  previousChildType: TrilogyComponents | undefined

  /**
   * The next child type
   */
  nextChildType: TrilogyComponents | undefined

  /**
   * Child index from the original children list
   */
  childIndex: number
}

export type ParseChildren = {
  children: ReactNode

  /**
   * Decide what to do when facing two particular elements
   */
  handleBetweenChildren: (props: HandleBetweenChildren) => void
}
