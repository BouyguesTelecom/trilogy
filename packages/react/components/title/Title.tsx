import React, { forwardRef, LegacyRef } from 'react'
import { TitleProps } from './TitleProps'
import TitleBase from './web/TitleBase'

/**
 * Title component
 * @param children {ReactNode} Title child
 * @param level {TitleLevels | TitleLevel | number} Title size : 1-3
 * @param inverted {Boolean} Title white color
 * @param typo {TypographyColor | TypographyTransform | TypographyBold | TypographyAlign} Typos
 * @param onClick {Function} onClick Event
 * @param skeleton {Boolean} Title Skeleton
 * @param accessibilityLabel {string} Accessibility label
 * @param testId {string} Test Id for Test Integration
 * @param subtitle {boolean} Subtitle below title
 * @param overline {boolean} Overline above title
 * - --------------- WEB PROPERTIES ----------------------------------
 * @param markup {string} h1 | h2 | h3 | h4 | h5 | h6 | p | span | div
 * @param className {string} Additionnal css classes
 * @param marginless {boolean} delete margin
 * @param htmlContent {string} Content Html In Title Component
 * - --------------- NATIVE PROPERTIES ----------------------------------
 * @param style {object} Additional styles
 */

const TitleClient = React.lazy(() => import('./web/TitleClient'))

export default typeof process !== 'undefined' && process?.env.TRILOGY_SERVER_COMPONENTS === 'true'
  ? TitleBase
  : forwardRef((props: TitleProps, ref: LegacyRef<any>) => {
      return (
        <React.Suspense fallback={<TitleBase />}>
          <TitleClient {...props} ref={ref as any} />
        </React.Suspense>
      )
    })
