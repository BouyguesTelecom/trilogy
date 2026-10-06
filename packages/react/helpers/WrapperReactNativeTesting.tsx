import { SVGicons } from '@trilogy-ds/assets/lib/iconsPath'
import { ReactNode } from 'react'

import { TrilogyThemeProvider, defaultTheme } from '@/context/providerTheme.native'

export const WrapperReactNativeTesting = ({ children }: { children: ReactNode }) => (
  <TrilogyThemeProvider theme={{ ...defaultTheme, icons: SVGicons }}>{children}</TrilogyThemeProvider>
)
