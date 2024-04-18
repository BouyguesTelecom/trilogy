import { IconName, IconNameValues } from "../icon"
import { Accessibility, Clickable, Position } from "../../objects"
import { DimensionValue } from "react-native"

/**
 * Fab Interface
 */
export interface FabProps extends Accessibility, Clickable, Position {
  children: string | React.ReactNode;
  extended?: boolean;
  iconName: IconName | IconNameValues;
  className?: string;
  fixed?: boolean;
  top?: DimensionValue | number | undefined;
  bottom?: DimensionValue | number | undefined;
  left?: DimensionValue | number | undefined;
  right?: DimensionValue | number | undefined;
  disabled?: boolean;
}
