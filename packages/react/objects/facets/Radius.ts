import { RadiusValues } from '@/components/image/ImageProps'

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
