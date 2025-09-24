import { ComponentName } from '@/components/enumsComponentsName'
import { Link } from '@/components/link'
import { Text, TextMarkup } from '@/components/text'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/index'
import clsx from 'clsx'
import * as React from 'react'
import { TimelineContentRef, TimelineContentWebProps } from './TimelineContentProps'

/**
 * Timeline Content Component
 * @param children {ReactNode} Use it if you want custom children for content
 * @param content {string} Text content
 * @param heading {string} Text heading
 * @param linkLabel {string} Text for content link
 * @param linkTo {string} href of link
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param id {string} Custom id
 */
const TimelineContent = React.forwardRef<TimelineContentRef, TimelineContentWebProps>(
  ({ children, className, id, heading, content, linkLabel, linkTo, ...others }, ref): JSX.Element => {
    const { styled } = useTrilogyContext()
    const classes = hashClass(styled, clsx('timeline-content', className))

    if (children) {
      return (
        <div ref={ref} id={id} className={classes} {...others}>
          {children}
        </div>
      )
    }

    return (
      <div ref={ref} id={id} className={classes} {...others}>
        {heading && <Text markup={TextMarkup.P}>{heading}</Text>}
        {content && (
          <Text className='main-content' markup={TextMarkup.P}>
            {content}
          </Text>
        )}
        {linkTo && linkLabel && <Link href={linkTo}>{linkLabel}</Link>}
      </div>
    )
  },
)

TimelineContent.displayName = ComponentName.TimelineContent
export default TimelineContent
