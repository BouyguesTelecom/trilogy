import { Component } from 'react'
export interface Referenceable<T extends HTMLElement = HTMLDivElement> {
  ref?: React.RefObject<T>
}

export interface ReferenceableNative<T extends Component = Component> {
  ref?: React.LegacyRef<T>
}
