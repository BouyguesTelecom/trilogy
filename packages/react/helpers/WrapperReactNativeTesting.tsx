import React from 'react'

import { TrilogyThemeProvider, defaultTheme } from '@/context/providerTheme.native'
import { SVGicons } from '@trilogy-ds/assets'

export const WrapperReactNativeTesting = ({ children }: { children: React.ReactNode }) => (
  <TrilogyThemeProvider theme={{ ...defaultTheme, icons: SVGicons }}>{children}</TrilogyThemeProvider>
)
