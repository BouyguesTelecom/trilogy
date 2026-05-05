import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { ScrollDirectionEnum } from '@/objects'
import { is } from '@/services'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { ScrollViewProps, ScrollViewRef } from './ScrollViewProps'

/**
 * ScrollView Component
 * @param children {React.ReactNode} ScrollView child
 * @param scrollDirection {ScrollDirectionEnum} Scroll direction (VERTICAL | HORIZONTAL)
 * @param id {string} Custom id attribute
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 * @param footer {React.ReactNode} Footer element fixed at the bottom
 * @param bounce {boolean} Bounce effect on scroll (iOS)
 * @param centerContent {boolean} Center content in scrollView
 * @param refresh {boolean} Enable pull-to-refresh
 * @param refreshControlColor {TrilogyColor} Color of the refresh control indicator
 * @param onRefresh {Function} Callback when user triggers a refresh
 */
const ScrollView = React.forwardRef<ScrollViewRef, ScrollViewProps>(
  ({ id, scrollDirection, children, testId }, ref): JSX.Element => {
    const { styled } = useTrilogyContext()

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

    const classes = hashClass(styled, clsx('scroll-view', scrollDirection && scrollDirectionClassName()))
    return (
      <div ref={ref} className={classes} id={id} data-testid={testId}>
        {children}
      </div>
    )
  },
)

ScrollView.displayName = ComponentName.ScrollView
export default ScrollView
