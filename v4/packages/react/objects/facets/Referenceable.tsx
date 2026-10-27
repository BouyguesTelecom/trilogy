import { Component, LegacyRef, RefObject } from 'react'

export interface Referenceable<T extends HTMLElement = HTMLDivElement> {
  ref?: RefObject<T>
}

export interface ReferenceableNative<T extends Component = Component> {
  ref?: LegacyRef<T>
}
