'use client'

import * as React from 'react'
import hashJSON from '../../hash.json'
import { TrilogyContext } from '../index'

interface TrilogyProviderStyledProps {
  theme?: 'default' | 'mangled' | 'none'
  hash?: string
}

/**
 * Trilogy Provider With Style
 * @param children App
 * @param theme (optionnal) 'default'| 'mangled' |'none' style
 * @param hash (optionnal) hash for html class
 */
const TrilogyProviderStyled = ({
  children,
  theme = 'default',
  hash: HASH = hashJSON.HASH,
}: React.PropsWithChildren<TrilogyProviderStyledProps>): JSX.Element => {
  const [styled, setStyled] = React.useState<boolean>(false)
  const [hash, setHash] = React.useState<string>(HASH)

  const StyleComponent = React.useMemo(() => {
    switch (true) {
      case theme === 'mangled' && hash === hashJSON.HASH:
        setStyled(true)
        return React.lazy(() => import('@/components/styleComponent/mangled/styleComponentMangled'))

      case theme === 'mangled' && hash !== hashJSON.HASH:
        setStyled(true)
        return undefined

      case theme === 'default':
        return React.lazy(() => import('@/components/styleComponent/default/styleComponent'))

      default:
        return undefined
    }
  }, [theme, hash])

  return (
    <TrilogyContext.Provider value={{ styled, setStyled, hash, setHash }}>
      {StyleComponent ? (
        <React.Suspense fallback={null}>
          <StyleComponent>{children}</StyleComponent>
        </React.Suspense>
      ) : (
        children
      )}
    </TrilogyContext.Provider>
  )
}

export { TrilogyProviderStyled }
