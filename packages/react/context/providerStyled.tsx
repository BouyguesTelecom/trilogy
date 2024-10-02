'use client'

import * as React from 'react'
import { TrilogyContext } from './index'

interface TrilogyProviderStyledProps {
  children: React.ReactNode
  theme?: 'default' | 'mangled'
}

/**
 * Trilogy Provider With Style
 * @param children App
 * @param theme (optionnal) Url of stylesheet customisation
 */
const TrilogyProviderStyled = ({ children, theme = 'default' }: TrilogyProviderStyledProps): JSX.Element => {
  const [styled, setStyled] = React.useState<boolean>(false)

  const StyleComponent = React.useMemo(() => {
    switch (true) {
      case theme === 'mangled':
        setStyled(true)
        return React.lazy(() => import('./styleComponent/styleComponentMangled'))
      default:
        return React.lazy(() => import('./styleComponent/styleComponent'))
    }
  }, [theme])

  return (
    <TrilogyContext.Provider value={{ styled, setStyled }}>
      <React.Suspense fallback={null}>
        <StyleComponent>{children}</StyleComponent>
      </React.Suspense>
    </TrilogyContext.Provider>
  )
}

export { TrilogyProviderStyled }
