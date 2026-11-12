import { DEFAULT_THEME_TRILOGY } from "@trilogy-react/theme"

const { fontFamilyPrimary, fontFamilySecondary } = DEFAULT_THEME_TRILOGY.fonts

// Les clés sont les familles du thème : elles doivent correspondre à fontFamily dans les styles générés
export const nativeThemeFonts = {
  [fontFamilyPrimary]: require("../../assets/fonts/Roboto/static/Roboto-Regular.ttf"),
  [fontFamilySecondary]: require("../../assets/fonts/Alatsi/Alatsi-Regular.ttf"),
}
