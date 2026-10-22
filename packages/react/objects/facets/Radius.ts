import { RadiusValues } from '@/components/image/ImageProps'
import { Radius } from '@/interfaces/radius'
export { Radius } from '@/interfaces/radius'

export const getRadiusStyle = (radius?: RadiusValues) => {
  switch (radius) {
    case RadiusValues.LARGE:
      return 16
    case RadiusValues.MEDIUM:
      return 8
    case RadiusValues.SMALL:
      return 4
    default:
      return 0
  }
}

export const getRadius = (radius?: Radius | `${Radius}`) => {
  switch (radius) {
    case Radius.LG:
      return 24
    case Radius.MD:
      return 16
    case Radius.SM:
      return 8
    case Radius.XS:
      return 4
    case Radius.FULL:
      return 9999
    default:
      return 0
  }
}
