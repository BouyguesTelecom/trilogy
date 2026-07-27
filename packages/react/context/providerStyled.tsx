'use client'

import * as React from 'react'
import versionJSON from '../version.json'
import { TrilogyContext } from './index'

interface TrilogyProviderStyledProps {
  children: React.ReactNode
  theme?: 'default' | 'mangled' | 'none'
  hash?: string
}

/**
 * Trilogy Provider With Style
 * @param children App
 * @param hash (optionnal) hash for html class
 */
const TrilogyProviderStyled = ({
  children,
  hash: HASH = versionJSON.VERSION,
}: TrilogyProviderStyledProps): JSX.Element => {
  const [styled, setStyled] = React.useState<boolean>(false)
  const [hash, setHash] = React.useState<string | undefined>(HASH)

  return <TrilogyContext.Provider value={{ styled, setStyled, hash, setHash }}>{children}</TrilogyContext.Provider>
}

export { TrilogyProviderStyled }
