import * as React from 'react'

import { autoLayoutChildrenHandler, parseChildren } from '@/components/autolayout/AutoLayout.helpers'
import { AutoLayoutProps } from '@/components/autolayout/AutoLayoutProps'
import { DEFAULT_SPACING_MATRIX } from '@/components/autolayout/DefaultSpacingMatrix'
import { ComponentName } from '@/components/enumsComponentsName'
import { Spacer, SpacerSize } from '@/components/spacer'

/**
 * AutoLayout Component - Automatic layout wrapper with edge insets and spacing
 * @param children {React.ReactNode} Child components to layout
 * @param edges {EdgeType[]} Edges to apply spacing to ('top' | 'bottom')
 * @param edgeSize {SpacerSize} Spacing size for safe area edges
 * @param noSpace {boolean} Disable automatic spacing
 * @param matrix {SpacingMatrix} Custom spacing matrix for between children spacing (overrides default matrix)
 */
const AutoLayout: React.FC<AutoLayoutProps> = ({
  children,
  matrix = DEFAULT_SPACING_MATRIX,
  edges,
  edgeSize = SpacerSize.TWO,
  noSpace,
}): JSX.Element => {
  const hasBottomEdge = edges?.includes('bottom')
  const hasTopEdge = edges?.includes('top')
  return (
    <>
      {hasTopEdge && <Spacer size={edgeSize} />}
      {noSpace
        ? children
        : parseChildren({
            children,
            handleBetweenChildren: (props) => autoLayoutChildrenHandler(matrix, props),
          })}
      {hasBottomEdge && <Spacer size={edgeSize} />}
    </>
  )
}

AutoLayout.displayName = ComponentName.AutoLayout

export default AutoLayout
