import { ReactElement } from 'react'
export type ReactElementWithNoText = Exclude<ReactElement, string> | boolean | null | undefined
export type ArrayOfReactElementWithNoText = ReactElementWithNoText[]

export type ReactElementsWithNoText = ReactElementWithNoText | ArrayOfReactElementWithNoText
export interface ChildrenWithNoText {
  children?: ReactElementsWithNoText
}
