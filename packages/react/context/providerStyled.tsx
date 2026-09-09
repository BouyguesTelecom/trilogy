'use client'

import * as React from 'react'
import versionJSON from '@/version.json'
import { TrilogyContext } from '@/context'

interface TrilogyProviderStyledProps {
  children: React.ReactNode
  mangled?: boolean
  hash?: string
}

/**
 * Trilogy Provider With Style
 * @param children App
 * @param mangled (optionnal) boolean
 * @param hash (optionnal) hash for html class
 */
const TrilogyProviderStyled = ({
  children,
  mangled = false,
  hash: HASH = versionJSON.VERSION,
}: TrilogyProviderStyledProps): JSX.Element => {
  const [styled, setStyled] = React.useState<boolean>(mangled)
  const [hash, setHash] = React.useState<string | undefined>(HASH)

  return <TrilogyContext.Provider value={{ styled, setStyled, hash, setHash }}>{children}</TrilogyContext.Provider>
}

export { TrilogyProviderStyled }
