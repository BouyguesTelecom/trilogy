import * as React from 'react'
import clsx from 'clsx'
import { TimelineContentRef, TimelineContentWebProps } from './TimelineContentProps'
import { Text, TextMarkup } from '@/components/text'
import { Link } from '@/components/link'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Timeline Content Component
 * @param children {ReactNode} Use it if you want custom children for content
 * @param content {string} Text content
 * @param contentLink {string} Text for content link
 * @param heading {string} Text heading
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 */
const TimelineContent = React.forwardRef<TimelineContentRef, TimelineContentWebProps>(({
  children,
  className,
  id,
  heading,
  content,
  linkLabel,
  linkTo,
  ...others
}, ref): JSX.Element => {
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
})

TimelineContent.displayName = ComponentName.TimelineContent
export default TimelineContent
