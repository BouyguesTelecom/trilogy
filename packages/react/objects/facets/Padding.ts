export enum Padding {
  NONE = 'none',
  XXS = 'xxs',
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = 'xxl',
  XXXL = 'xxxl',
}

export const getPaddingStyle = (padding: Padding | `${Padding}`) => {
  switch (padding) {
    case Padding.NONE:
      return 0
    case Padding.XXS:
      return 4
    case Padding.XS:
      return 8
    case Padding.SM:
      return 12
    case Padding.MD:
      return 16
    case Padding.LG:
      return 24
    case Padding.XL:
      return 32
    case Padding.XXL:
      return 48
    case Padding.XXXL:
      return 64
    default:
      return 16
  }
}
