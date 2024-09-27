import Icon from '@/components/icon/Icon'
import { IconPosition, TextIconMarkup, TextIconMarkupValues } from '@/components/icon/IconEnum'
import { IconProps } from '@/components/icon/IconProps'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { is } from '@/services'
import clsx from 'clsx'
import * as React from 'react'

interface Props extends IconProps {
  textId?: string
  textAriaLevel?: number
  textRole?: string
}

const TextIcon = ({
  className,
  textClassName,
  name,
  content,
  position,
  markup,
  textId,
  textAriaLevel,
  textRole,
  ...others
}: Props): JSX.Element => {
  const { styled } = useTrilogyContext()

  const isCorrectMarkup = (stringMarkup: TextIconMarkup | TextIconMarkupValues) => {
    if (stringMarkup in TextIconMarkup || Object.values(TextIconMarkup).includes(stringMarkup as TextIconMarkup))
      return true
  }
  const Tag = markup && isCorrectMarkup(markup) ? markup : 'span'

  if (position) {
    return (
      <span
        className={hashClass(
          styled,
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
              <Tag
                className={hashClass(styled, clsx(textClassName))}
                id={textId}
                aria-level={textAriaLevel}
                role={textRole}
              >
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
              <Tag
                className={hashClass(styled, clsx(textClassName))}
                id={textId}
                aria-level={textAriaLevel}
                role={textRole}
              >
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
    <span className={hashClass(styled, clsx('icon-and-text', className))}>
      <Icon name={name} {...others} />
      {content && typeof content.valueOf() === 'string' ? (
        <Tag className={hashClass(styled, clsx(textClassName))} id={textId} aria-level={textAriaLevel} role={textRole}>
          {String(content)}
        </Tag>
      ) : (
        content
      )}
      {/* {content && <Tag className={textClassName}>{content}</Tag>} */}
    </span>
  )
}

export default TextIcon
