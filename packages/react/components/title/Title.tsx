import { getDirective } from '@/context/directiveProvider/providerDirective'
import React, { forwardRef, LegacyRef } from 'react'
import { TitleProps } from './TitleProps'
import TitleBase from './web/TitleBase'

interface IProps extends TitleProps {
  useClient?: boolean
}

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
 * - --------------- WEB PROPERTIES ----------------------------------
 * @param markup {string} h1 | h2 | h3 | h4 | h5 | h6 | p | span | div
 * @param className {string} Additionnal css classes
 * @param subtitle {boolean} Subtitle below title
 * @param overline {boolean} Overline above title
 * - --------------- NATIVE PROPERTIES ----------------------------------
 * @param style {object} Additional styles
 */
const Title = forwardRef(({ useClient, ...others }: IProps, ref: LegacyRef<any>) => {
  const directive = getDirective()
  switch (true) {
    case directive === 'client':
      const TitleClient = React.lazy(() => import('./web/TitleClient'))

      return (
        <React.Suspense fallback={<TitleBase />}>
          <TitleClient {...others} ref={ref as any} />
        </React.Suspense>
      )

    default:
      return <TitleBase {...others} />
  }
})

export default Title
