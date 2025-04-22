import { IconName, IconNameValues } from "../../components/icon"
import { Accessibility, Clickable, Dev } from "../../objects"
import { DimensionValue, type TouchableOpacity } from "react-native"
import { CommonProps } from '../../objects/facets/CommonProps'

/**
 * Fab Interface
 */
export interface FabProps extends Accessibility, Clickable, Dev, CommonProps {
  children: string | React.ReactNode;
  extended?: boolean;
  iconName: IconName | IconNameValues;
  fixed?: boolean;
  top?: DimensionValue | number | undefined;
  bottom?: DimensionValue | number | undefined;
  left?: DimensionValue | number | undefined;
  right?: DimensionValue | number | undefined;
  disabled?: boolean;
}

export type FabRef = HTMLButtonElement
export type FabNativeRef = TouchableOpacity
