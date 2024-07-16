import * as React from "react"
import { AutoLayoutWrapper } from "@/components/autolayout"
import { SpacerSize } from "@/components/spacer"
import { SpacingMatrixMode } from "@/components/autolayout/SpacingMatrix"

// eslint-disable-next-line no-duplicate-imports
import type { SpacingMatrix } from "@/components/autolayout/SpacingMatrix"
import type { ButtonListProps } from "./ButtonListProps"
import { ComponentName } from "@/components/enumsComponentsName"

const { MEDIUM, SMALL } = SpacerSize
const { INSERT_SPACE_BETWEEN } = SpacingMatrixMode

const SPACING_MATRIX: SpacingMatrix = [
  [INSERT_SPACE_BETWEEN, "Button", "Divider", SMALL],
  [INSERT_SPACE_BETWEEN, "Divider", "Button", SMALL],
  [INSERT_SPACE_BETWEEN, "Button", "Button", MEDIUM],
]

/**
 * ButtonList Native Component
 * @param children {ReactNode} ButtonList children
 * @param autolayout {boolean} Apply auto-layout rules
 */

/**
 * @deprecated
 */
const ButtonList = ({
  autolayout = SPACING_MATRIX,
  children,
}: ButtonListProps): JSX.Element => {
  return <AutoLayoutWrapper {...{ autolayout, children }} />
}

ButtonList.displayName = ComponentName.ButtonList

export default ButtonList
