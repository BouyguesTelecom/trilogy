export type ReactElementWithNoText = Exclude<React.ReactElement, string> | boolean | null | undefined
export type ArrayOfReactElementWithNoText = Array<ReactElementWithNoText>

export type ReactElementsWithNoText = ReactElementWithNoText | ArrayOfReactElementWithNoText
export interface ChildrenWithNoText {
  children?: ReactElementsWithNoText
}
