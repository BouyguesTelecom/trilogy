"use client"

import * as React from "react"
import { TrilogyContext } from "./index"

interface TrilogyProviderStyledProps {
  children: React.ReactNode;
  theme?: string;
}

/**
 * Trilogy Provider With Style
 * @param children App
 * @param theme (optionnal) Url of stylesheet customisation
 */
const TrilogyProviderStyled = ({
  children,
  theme,
}: TrilogyProviderStyledProps): JSX.Element => {
  const [styled, setStyled] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (theme) {
      const link = document.createElement("link")
      link.href = theme
      link.rel = "stylesheet"
      link.type = "text/css"

      document.head.appendChild(link)

      return () => {
        document.head.removeChild(link)
      }
    } else if (!theme) {
      import("@trilogy-ds/styles/dist/default/trilogy.css")
    }
  }, [theme])

  return (
    <TrilogyContext.Provider value={{ styled, setStyled }}>
      {children}
    </TrilogyContext.Provider>
  )
}

export { TrilogyProviderStyled }
