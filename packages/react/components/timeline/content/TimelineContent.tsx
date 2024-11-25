import clsx from 'clsx'
import * as React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { Link } from '@/components/link'
import { Text, TextMarkup } from '@/components/text'
import { TimelineContentWebProps } from '@/components/timeline/content/TimelineContentProps'
import { hashClass } from '@/helpers/hashClassesHelpers'

/**
 * Timeline Content Component
 * @param children {ReactNode} Use it if you want custom children for content
 * @param content {string} Text content
 * @param contentLink {string} Text for content link
 * @param heading {string} Text heading
 * @param link {string} Url link
 * @param Onclick {string} Provide event onCLick
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const TimelineContent = React.forwardRef(
  (
    { children, className, heading, content, link, contentLink, onClick, ...others }: TimelineContentWebProps,
    ref: React.Ref<HTMLDivElement>,
  ): JSX.Element => {
    const classes = hashClass(clsx('timeline-content', className))

    if (children) {
      return (
        <div className={classes} {...others}>
          {children}
        </div>
      )
    }

    return (
      <div ref={ref} className={classes} {...others} onClick={onClick}>
        {heading && <Text markup={TextMarkup.P}>{heading}</Text>}
        {content && (
          <Text className='main-content' markup={TextMarkup.P}>
            {content}
          </Text>
        )}
        {link && <Link href={link}>{contentLink || link}</Link>}
      </div>
    )
  },
)

TimelineContent.displayName = ComponentName.TimelineContent
export default TimelineContent
