import { SVGicons } from '@trilogy-ds/assets/lib/iconsPath'
import * as React from 'react'

import { TrilogyThemeProvider, defaultTheme } from '../context/themeProvider/providerTheme.native'

export const WrapperReactNativeTesting = ({ children }: { children: React.ReactNode }) => (
  <TrilogyThemeProvider theme={{ ...defaultTheme, icons: SVGicons }}>{children}</TrilogyThemeProvider>
)
