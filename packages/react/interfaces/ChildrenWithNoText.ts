export type ReactElementWithNoText = Exclude<React.ReactElement, string> | boolean | null | undefined
export type ArrayOfReactElementWithNoText = ReactElementWithNoText[]

export type ReactElementsWithNoText = ReactElementWithNoText | ArrayOfReactElementWithNoText
export interface ChildrenWithNoText {
  children?: ReactElementsWithNoText
}
