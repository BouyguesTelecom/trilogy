import * as React from 'react'

import { AutoLayoutProps } from '@/components/autolayout/AutoLayoutProps'

/**
 * AutoLayout Component - Automatic layout wrapper with edge insets and spacing
 * @param children {React.ReactNode} Child components to layout
 * @param edges {EdgeType[]} Edges to apply spacing to ('top' | 'bottom')
 * @param edgeSize {SpacerSize} Spacing size for safe area edges
 * @param noSpace {boolean} Disable automatic spacing
 */
const AutoLayout: React.FC<AutoLayoutProps> = ({ children }): JSX.Element => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <div className={'autolayout'}>{children}</div>
}

export default AutoLayout
