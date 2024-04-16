import type {ImageSourcePropType} from "react-native";

export interface ITrilogyTheme {
  icons?: { [key: string]: ImageSourcePropType }
  colors: { [key: string]: string }
}
