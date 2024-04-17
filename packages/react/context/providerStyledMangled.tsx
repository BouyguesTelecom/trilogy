"use client"

import * as React from "react"
import { TrilogyContext } from "./index"
import "@trilogy-ds/styles/dist/default/trilogy-mangled.css"

/**
 * Trilogy Provider With Mangled Style
 * @param children App
 */
const TrilogyProviderStyledMangled = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [styled, setStyled] = React.useState<boolean>(true)
  return (
    <TrilogyContext.Provider value={{ styled, setStyled }}>
      {children}
    </TrilogyContext.Provider>
  )
}

export { TrilogyProviderStyledMangled }
