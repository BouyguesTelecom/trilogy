"use client"

import React, { useLayoutEffect } from 'react'
import { TrilogyContext } from '../index'
import { version } from '../../version'
import versionJSON from '../../version.json'

const getHrefFromAssetUri = (assetUrl: string, theme: string, mangled: boolean) =>  {
  return (assetUrl)
            .replace('%VERSION%', version)
            .replace('%THEME%', theme)
    .replace('%MANGLED%', mangled?'-mangled':'')
}

const injectTrilogy = (mangled: boolean, id: string, theme: string, assetUrl: string) => {
  const link = document.createElement("link")
  link.type = "text/css"
  link.rel = "stylesheet"
  link.href = getHrefFromAssetUri(assetUrl, theme, mangled)
  link.id = id
  document?.head.appendChild(link)
}

/**
 * Trilogy Provider Without Styles
 * @param children App
 * @param mangled Mangled Css Classes
 * @param injectTrilogyAssets Inject CSS Styles from Assets
 * @param id Id of Trilogy Provider
 * @param theme Theme css style
 * @param assetUrl URL to the file with some possible replacement (%VERSION%, %THEME%, %MANGLED%)
 */
const TrilogyProvider = ({
                           children,
                           mangled = false,
                           injectTrilogyAssets = false,
                           id = 'trilogy',
                           theme = '',
                           hash: HASH=versionJSON.VERSION,
                           assetUrl = ''
                         }: {
  children: React.ReactNode
  mangled?: boolean
  injectTrilogyAssets?: boolean
  id?: string
  theme?: string,
  hash?: string,
  assetUrl?: string
}): JSX.Element => {
  const [styled, setStyled] = React.useState<boolean>(mangled)
  const [hash, setHash] = React.useState<string|undefined>( HASH )

  useLayoutEffect(() => {
    injectTrilogyAssets && injectTrilogy(mangled, id, theme, assetUrl)
  }, [])
  return <TrilogyContext.Provider value={{ styled, setStyled, hash, setHash }}>{children}</TrilogyContext.Provider>
}

export { TrilogyProvider }
