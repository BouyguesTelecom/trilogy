import * as React from 'react'
import clsx from 'clsx'
import { TimelineContentWebProps } from './TimelineContentProps'
import { Text, TextMarkup } from '@/components/text'
import { Link } from '@/components/link'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'

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
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('timeline-content', className))

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
