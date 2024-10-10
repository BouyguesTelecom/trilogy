import { IconName, IconNameValues } from "@/components/icon"
import { Accessibility, Clickable } from "@/objects"
import { DimensionValue } from "react-native"

/**
 * Fab Interface
 */
export interface FabProps extends Accessibility, Clickable {
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
