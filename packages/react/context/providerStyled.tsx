'use client'

import { ReactNode, Suspense, lazy, useMemo, useState } from 'react'
import versionJSON from '../version.json'
import { TrilogyContext } from './index'

interface TrilogyProviderStyledProps {
  children: ReactNode
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
  hash: HASH = versionJSON.VERSION,
}: TrilogyProviderStyledProps): JSX.Element => {
  const [styled, setStyled] = useState<boolean>(false)
  const [hash, setHash] = useState<string|undefined>(HASH)

  const StyleComponent = useMemo(() => {
    switch (true) {
      case theme === 'mangled' && hash === versionJSON.VERSION:
        setStyled(true)
        return lazy(() => import('@/components/styleComponent/mangled/styleComponentMangled'))

      case theme === 'mangled' && hash !== versionJSON.VERSION:
        setStyled(true)
        return undefined

      case theme === 'default':
        return lazy(() => import('@/components/styleComponent/default/styleComponent'))

      default:
        return undefined
    }
  }, [theme, hash])

  return (
    <TrilogyContext.Provider value={{ styled, setStyled, hash, setHash }}>
      {StyleComponent ? (
        <Suspense fallback={null}>
          <StyleComponent>{children}</StyleComponent>
        </Suspense>
      ) : (
        children
      )}
    </TrilogyContext.Provider>
  )
}

export { TrilogyProviderStyled }
