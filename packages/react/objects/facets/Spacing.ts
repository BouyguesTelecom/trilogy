export enum Spacing {
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

export const getSpacingStyle = (spacing: Spacing | `${Spacing}`) => {
  switch (spacing) {
    case Spacing.NONE:
      return 0
    case Spacing.XXS:
      return 4
    case Spacing.XS:
      return 8
    case Spacing.SM:
      return 12
    case Spacing.MD:
      return 16
    case Spacing.LG:
      return 24
    case Spacing.XL:
      return 32
    case Spacing.XXL:
      return 48
    case Spacing.XXXL:
      return 64
    default:
      return 16
  }
}
