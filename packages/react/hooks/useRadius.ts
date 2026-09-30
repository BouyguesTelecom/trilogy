import { TrilogyThemeContext } from '@/context/providerTheme'
import { useContext } from 'react'
import { DEFAULT_TRILOGY_RADIUS } from '@/interfaces/defaultRadius'
import { type Radius } from '@/interfaces/Radius'

export const useRadius = (_radius: Radius) => {
  const { theme } = useContext(TrilogyThemeContext)
  const radiusStyle = theme?.radius || DEFAULT_TRILOGY_RADIUS
  return radiusStyle[_radius] ?? DEFAULT_TRILOGY_RADIUS[_radius]
}
