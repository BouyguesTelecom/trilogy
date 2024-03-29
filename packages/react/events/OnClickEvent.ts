export type OnClickEvent = React.MouseEvent<Element> | unknown

/**
 * Click Event Interface
 */
export interface ClickEvent {
  (e: OnClickEvent): void
}
