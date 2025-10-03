import * as React from 'react'

import { autoLayoutChildrenHandler, parseChildren } from '@/components/autolayout/AutoLayout.helpers'
import { AutoLayoutProps } from '@/components/autolayout/AutoLayoutProps'
import { DEFAULT_SPACING_MATRIX } from '@/components/autolayout/DefaultSpacingMatrix'
import { ComponentName } from '@/components/enumsComponentsName'
import { Spacer, SpacerSize } from '@/components/spacer/index.native'

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
