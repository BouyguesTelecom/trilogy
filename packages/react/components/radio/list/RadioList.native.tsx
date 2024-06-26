import * as React from "react"
import { AutoLayoutWrapper } from "@/components/autolayout"
import { SpacerSize } from "@/components/spacer"
import { SpacingMatrixMode } from "@/components/autolayout/SpacingMatrix"

// eslint-disable-next-line no-duplicate-imports
import type { SpacingMatrix } from "@/components/autolayout/SpacingMatrix"
import type { RadioListProps } from "./RadioListProps"
import { ComponentName } from "@/components/enumsComponentsName"

const { MEDIUM, SMALL } = SpacerSize
const { INSERT_SPACE_BETWEEN } = SpacingMatrixMode

const SPACING_MATRIX: SpacingMatrix = [
  [INSERT_SPACE_BETWEEN, "Radio", "Divider", SMALL],
  [INSERT_SPACE_BETWEEN, "Divider", "Radio", SMALL],
  [INSERT_SPACE_BETWEEN, "Radio", "Radio", MEDIUM],
]

/**
 * RadioList Native Component
 * @param children {ReactNode} RadioList children
 * @param autolayout {boolean} Apply auto-layout rules
 */
const RadioList = ({
  autolayout = SPACING_MATRIX,
  children,
}: RadioListProps): JSX.Element => {
  return <AutoLayoutWrapper {...{ autolayout, children }} />
}

RadioList.displayName = ComponentName.RadioList

export default RadioList
