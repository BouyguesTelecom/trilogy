import { useContext } from 'react'
import { TrilogyThemeContext } from '@/context/providerTheme'
import { TypographyBold } from '@/interfaces/TypographyBold'

export const useTypographyBold = (typo?: string | string[]) => {
  const { theme } = useContext(TrilogyThemeContext)
  const currentTypo = Array.isArray(typo) ? typo : [typo]

  switch (true) {
    case typo && currentTypo.includes(TypographyBold.TEXT_WEIGHT_MEDIUM):
      return theme?.fontFamily?.medium || 'poppins-medium'

    case typo && currentTypo.includes(TypographyBold.TEXT_WEIGHT_SEMIBOLD):
      return theme?.fontFamily?.bold || 'poppins-semibold'

    case typo && currentTypo.includes(TypographyBold.TEXT_WEIGHT_BOLD):
      return theme?.fontFamily?.speak || 'poppins-semibold'

    default:
      return theme?.fontFamily?.regular || 'poppins-regular'
  }
}
