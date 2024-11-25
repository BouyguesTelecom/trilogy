import clsx from 'clsx'
import React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import Icon from '@/components/icon/Icon'
import { IconPosition, TextIconMarkup, TextIconMarkupValues } from '@/components/icon/IconEnum'
import { IconProps } from '@/components/icon/IconProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

interface Props extends IconProps {
  textId?: string
  textAriaLevel?: number
  textRole?: string
}

const TextIcon = React.forwardRef(
  (
    { className, textClassName, name, content, position, markup, textId, textAriaLevel, textRole, ...others }: Props,
    ref: React.Ref<HTMLDivElement>,
  ): JSX.Element => {
    const isCorrectMarkup = (stringMarkup: TextIconMarkup | TextIconMarkupValues) => {
      if (stringMarkup in TextIconMarkup || Object.values(TextIconMarkup).includes(stringMarkup as TextIconMarkup))
        return true
    }
    const Tag = markup && isCorrectMarkup(markup) ? markup : 'span'

    if (position) {
      return (
        <span
          ref={ref}
          className={hashClass(
            clsx(
              'icon-and-text',
              (position === IconPosition.UP || position === IconPosition.DOWN) && is('stacked'),
              className,
            ),
          )}
        >
          {
            (position === IconPosition.RIGHT || position === IconPosition.DOWN) &&
              content &&
              (content && typeof content.valueOf() === 'string' ? (
                <Tag className={hashClass(clsx(textClassName))} id={textId} aria-level={textAriaLevel} role={textRole}>
                  {String(content)}
                </Tag>
              ) : (
                content
              ))
            // <Tag className={textClassName}>{content}</Tag>
          }
          <Icon name={name} className={className} {...others} />
          {
            (position === IconPosition.UP || position === IconPosition.LEFT) &&
              content &&
              (content && typeof content.valueOf() === 'string' ? (
                <Tag className={hashClass(clsx(textClassName))} id={textId} aria-level={textAriaLevel} role={textRole}>
                  {String(content)}
                </Tag>
              ) : (
                content
              ))
            // <Tag className={textClassName}>{content}</Tag>
          }
        </span>
      )
    }

    return (
      <span className={hashClass(clsx('icon-and-text', className))} ref={ref}>
        <Icon name={name} {...others} />
        {content && typeof content.valueOf() === 'string' ? (
          <Tag className={hashClass(clsx(textClassName))} id={textId} aria-level={textAriaLevel} role={textRole}>
            {String(content)}
          </Tag>
        ) : (
          content
        )}
        {/* {content && <Tag className={textClassName}>{content}</Tag>} */}
      </span>
    )
  },
)

TextIcon.displayName = ComponentName.TextIcon
export default TextIcon
