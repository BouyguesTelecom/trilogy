import * as React from 'react'

import AutoLayout from '@/components/autolayout/AutoLayout/AutoLayout.native'
import type { SpacingMatrix } from '@/components/autolayout/SpacingMatrix/index.native'

/**
 * Wrap children in an AutoLayout component.
 *
 * @param {autolayout} {boolean}  Activate/deactivate the autolayouting mechanism.
 */
const AutoLayoutWrapper: React.FC<{
  autolayout: boolean | SpacingMatrix
  children: React.ReactNode
}> = ({ autolayout = true, children }) => {
  if (autolayout === true) {
    return <AutoLayout>{children}</AutoLayout>
  } else if (autolayout) {
    return <AutoLayout matrix={autolayout}>{children}</AutoLayout>
  } else {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>
  }
}

export default AutoLayoutWrapper
