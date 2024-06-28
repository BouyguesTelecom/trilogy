import {
  AlertProps,
  AlertState,
  AlertStateValues,
  AlignableProps,
} from "@/objects"
import * as React from "react"
import { ProgressRadialItemProps } from "./item/ProgressRadialItemProps"

/**
 * Progress Radial Interface
 */

export interface ProgressRadialProps extends AlertProps, AlignableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: React.ReactElement<ProgressRadialItemProps>;
  percent?: number;
  label?: string | React.ReactNode;
  description?: string | React.ReactNode;
  className?: string;
  full?: boolean;
  disk?: boolean;
  secondPercent?: number;
  secondAlert?: AlertState | AlertStateValues;
  skeleton?: boolean;

  stacked?: boolean;
}
