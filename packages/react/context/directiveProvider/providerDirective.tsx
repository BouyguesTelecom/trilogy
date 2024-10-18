import React, { PropsWithChildren } from 'react'

type IDirective = 'server' | 'client'

interface IDirectiveProvider {
  directiveRendering: IDirective
}

let directive: IDirective = 'client'

export const getDirective = () => directive
export const setDirective = (newDirective: IDirective) => (directive = newDirective)

export const DirectiveProvider = ({ children, directiveRendering }: PropsWithChildren<IDirectiveProvider>) => {
  setDirective(directiveRendering)

  return <>{children}</>
}
