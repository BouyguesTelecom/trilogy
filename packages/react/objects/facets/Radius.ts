import { TrilogyThemeContext } from '@/context/providerTheme'
import { useContext } from 'react'
import { DEFAULT_TRILOGY_RADIUS } from './defaultRadius'

export enum Radius {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  FULL = 'full',
}

export type RadiusValues = `${Radius}`

export const getRadiusStyle = (_radius: Radius) => {
  if (typeof navigator !== 'undefined' && navigator.userAgent === undefined) {
    const { theme } = useContext(TrilogyThemeContext)
    const radiusStyle = theme?.radius || DEFAULT_TRILOGY_RADIUS
    const radiusValue = radiusStyle[_radius] || radiusStyle.small
    return radiusValue
  }
}
