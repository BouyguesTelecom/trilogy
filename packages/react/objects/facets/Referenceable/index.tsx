import * as React from 'react'

export interface Referenceable<T extends HTMLElement = HTMLDivElement> {
  ref?: React.RefObject<T>
}

export interface ReferenceableNative<T extends React.Component = React.Component> {
  ref?: React.LegacyRef<T>
}
