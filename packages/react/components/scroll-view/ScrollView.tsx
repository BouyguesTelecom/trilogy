import clsx from 'clsx'
import React from 'react'

import { ScrollViewProps } from '@/components/scroll-view/ScrollViewProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { ScrollDirectionEnum } from '@/objects/facets/ScrollDirection'
import { is } from '@/services/classify'

/**
 * Scroll View Component
 * @param children {React.ReactNode} ScrollView child
 * @param id {string} Id for Web / TestID for Native
 * @param scrollDirection {Direction} Scroll vertically or horizontally
 * - -------------- WEB PROPERTIES -----------------
 * @param className {string} Additionnal css classes
 * - -------------- NATIVE PROPERTIES ---------------
 * @param footer {React.ReactNode} ScrollView footer
 * @param bounce {boolean} Bounce effect on scroll
 * @param centerContent {boolean} center content in scrollView
 * @param refresh {boolean} Is Refreshable ScrollView
 * @param refreshControlColor {TrilogyColor} Color Of Refresh Control
 * @param scrollDirection {Direction} Scroll vertically in default
 * @param onRefresh {void} On Refreshing ScrollView
 */
const ScrollView = (
  { id, scrollDirection, children }: ScrollViewProps,
  ref: React.Ref<HTMLDivElement>,
): JSX.Element => {
  const scrollDirectionClassName = () => {
    switch (scrollDirection) {
      case ScrollDirectionEnum?.HORIZONTAL:
        return is('horizontal')
      case ScrollDirectionEnum?.VERTICAL:
        return is('vertical')
      default:
        return ''
    }
  }

  const classes = hashClass(clsx('scroll-view', scrollDirection && scrollDirectionClassName()))
  return (
    <div ref={ref} className={classes} id={id}>
      {children}
    </div>
  )
}

ScrollView.displayName = 'ScrollView'

export default React.forwardRef(ScrollView)
