import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_600SemiBold,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto"
import { theme } from "@trilogy-react/theme"
import type { FontFamilyDefinition } from "expo-font"

const { fontFamilyPrimary, fontFamilySecondary } = theme.fonts

// Every weight must be loaded together under the same theme family name.
export const nativeThemeFonts: FontFamilyDefinition[] = [
  {
    fontFamily: fontFamilyPrimary,
    fontDefinitions: [
      { path: Roboto_400Regular, weight: 400 },
      { path: Roboto_500Medium, weight: 500 },
      { path: Roboto_600SemiBold, weight: 600 },
      { path: Roboto_700Bold, weight: 700 },
    ],
  },
  {
    fontFamily: fontFamilySecondary,
    fontDefinitions: [
      {
        path: require("../../assets/fonts/Alatsi/Alatsi-Regular.ttf"),
        weight: 400,
      },
    ],
  },
]
