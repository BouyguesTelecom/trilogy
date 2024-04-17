import * as React from "react"
import { DEFAULT_SPACING_MATRIX } from "./DefaultSpacingMatrix"
import { autoLayoutChildrenHandler, parseChildren } from "./AutoLayout.helpers"
import { Spacer, SpacerSize } from "../spacer"
import { AutoLayoutProps } from "./AutoLayoutProps"
import { ComponentName } from "../enumsComponentsName"

/**
 * AutoLayout Component
 * @param children
 * @param matrix
 * @param edges {EdgeType[]} ('bottom' | 'top'), add edge(s)
 * @param edgeSize {SpacerSize} Edge size if exist (default = SMALL)
 * @param noSpace {boolean} Set spaces between children to NONE
 */
const AutoLayout: React.FC<AutoLayoutProps> = ({
  children,
  matrix = DEFAULT_SPACING_MATRIX,
  edges,
  edgeSize = SpacerSize.SMALL,
  noSpace,
}): JSX.Element => {
  const hasBottomEdge = edges?.includes("bottom")
  const hasTopEdge = edges?.includes("top")
  return (
    <>
      {hasTopEdge && <Spacer size={edgeSize} />}
      {noSpace
        ? children
        : parseChildren({
            children,
            handleBetweenChildren: (props) =>
              autoLayoutChildrenHandler(matrix, props),
          })}
      {hasBottomEdge && <Spacer size={edgeSize} />}
    </>
  )
}

AutoLayout.displayName = ComponentName.AutoLayout

export default AutoLayout
