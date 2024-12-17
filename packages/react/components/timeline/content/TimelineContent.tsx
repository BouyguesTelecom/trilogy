import { Link } from '@/components/link'
import { Text, TextMarkup } from '@/components/text'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import * as React from 'react'
import { TimelineContentWebProps } from './TimelineContentProps'

/**
 * Timeline Content Component
 * @param children {ReactNode} Use it if you want custom children for content
 * @param content {string} Text content
 * @param contentLink {string} Text for content link
 * @param heading {string} Text heading
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const TimelineContent = ({
  children,
  className,
  id,
  heading,
  content,
  linkLabel,
  linkTo,
  ...others
}: TimelineContentWebProps): JSX.Element => {
  const classes = hashClass(clsx('timeline-content', className))

  if (children) {
    return (
      <div id={id} className={classes} {...others}>
        {children}
      </div>
    )
  }

  return (
    <div id={id} className={classes} {...others}>
      {heading && <Text markup={TextMarkup.P}>{heading}</Text>}
      {content && (
        <Text className='main-content' markup={TextMarkup.P}>
          {content}
        </Text>
      )}
      {linkTo && linkLabel && <Link href={linkTo}>{linkLabel}</Link>}
    </div>
  )
}

export default TimelineContent
