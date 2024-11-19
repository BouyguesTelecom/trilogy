import clsx from 'clsx'
import React from 'react'

import { Button, ButtonMarkup } from '@/components/button'
import { CardContentProps } from '@/components/card/content/CardContentProps'
import { Text } from '@/components/text'
import { Title, TitleLevels } from '@/components/title'
import { hashClass } from '@/helpers/hashClassesHelpers'

/**
 * Card Content Component
 * @param children {React.ReactNode} Custom Card Content Children
 * @param titleSup {string} Add a sup title
 * @param titleSupLevel {TextLevels} Sup title level
 * @param title {string} Add a title
 * @param titleLevel {TitleLevels} Title level
 * @param buttonText {string} if textButton, it will add a Button with content text
 * @param buttonVariant {ButtonVariant} Add variant for Button - Default is primary
 * @param buttonClick {Function} Click event for Button
 * @param text {string} Content text of Card
 * @param textLevel {TextLevels} Text level
 * @param onClick {Function} onClick Event for all content
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param buttonMarkup {ButtonMarkup} if Button, can change the button tag
 * @param testId {string} Test Id for Test Integration
 */
const CardContent = (
  {
    children,
    className,
    titleSup,
    titleSupLevel,
    title,
    titleLevel,
    buttonText,
    buttonMarkup,
    buttonVariant,
    buttonClick,
    text,
    textLevel,
    onClick,
    testId,
    ...others
  }: CardContentProps,
  ref: React.Ref<HTMLDivElement>,
): JSX.Element => {
  if (children) {
    return (
      <div data-testid={testId} className={hashClass(clsx('card-content', className))} ref={ref} {...others}>
        {children}
      </div>
    )
  }

  return (
    <div
      ref={ref}
      data-testid={testId}
      onClick={onClick && onClick}
      className={hashClass(clsx('card-content', className))}
      {...others}
    >
      {titleSup && (
        <Text level={titleSupLevel} className={'suptitle'}>
          {titleSup}
        </Text>
      )}
      {title && (
        <Title testId={testId ? `${testId}-title` : undefined} level={titleLevel ? titleLevel : TitleLevels.THREE}>
          {title}
        </Title>
      )}
      {text && <Text level={textLevel}>{text}</Text>}
      {buttonText && (
        <Button
          testId={testId ? `${testId}-btn` : undefined}
          onClick={buttonClick}
          variant={buttonVariant ? buttonVariant : 'PRIMARY'}
          markup={buttonMarkup ? buttonMarkup : ButtonMarkup.BUTTON}
        >
          {buttonText}
        </Button>
      )}
    </div>
  )
}

export default React.forwardRef(CardContent)
