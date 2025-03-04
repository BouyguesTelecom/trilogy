/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Text, TextLevels, TextMarkup } from '@/components/text'
import { TextareaProps, TextareaRef } from './TextareaProps'
import { has, is } from '@/services'
import { Icon } from '@/components/icon'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'
import { TypographyColor } from '@/objects'
import { ComponentName } from '../enumsComponentsName'

/**
 * Textarea Component
 * @param disabled {boolean} Disabled textarea
 * @param label {string} Label for textarea
 * @param sample {string} Sample for textarea (below label)
 * @param name {string} Textarea name
 * @param onChange {Function} OnChange textarea Event
 * @param placeholder {string} Placeholder textarea
 * @param defaultValue {string} Default Value for textarea
 * @param help {string} Help for textarea
 * @param ref Pass a ref for textarea
 * @param maxLength {number} Textarea max length
 * @param rows {number} Textarea rows
 * @param iconName {IconName | IconNameValues} display Icon
 * @param statusIconName {IconName | IconNameValues} display status Icon
 * @param dynamicPlaceholder {boolean}
 * @param status {InputStatus} Textarea with status - (SUCCESS|WARNING|ERROR|DEFAULT)
 * @param required {boolean} Required
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param minLength {number} Textarea min length
 * @param typo {TypographyColor | TypographyColorValues} change help typo
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 */
const Textarea = React.forwardRef<TextareaRef, TextareaProps>(({
  className,
  id,
  sample,
  required,
  disabled,
  onChange,
  placeholder,
  defaultValue,
  help,
  status,
  dynamicPlaceholder = true,
  rows,
  label,
  maxLength,
  minLength,
  iconNameLeft,
  iconNameRight,
  ...others
}, ref): JSX.Element => {
  const [value, setValue] = useState(defaultValue || '')
  const { styled } = useTrilogyContext()

  useEffect(() => {
    setValue(defaultValue || '')
  }, [defaultValue])

  const wrapperClasses = hashClass(styled, clsx('textarea-wrapper', className, status && is(status)))
  const classes = hashClass(
    styled,
    clsx('textarea', dynamicPlaceholder && has('dynamic-label'), iconNameLeft && has('icon')),
  )

  const helpClasses = clsx('help', status && is(status))
  const counterClasses = hashClass(styled, clsx('counter', maxLength))

  return (
    <div id={id} className={wrapperClasses}>
      {!dynamicPlaceholder && (
        <label className='textarea-label'>
          {label}{' '}
          {label && required && (
            <Text markup={TextMarkup.SPAN} typo={TypographyColor.TEXT_ERROR}>
              *
            </Text>
          )}
        </label>
      )}
      {!dynamicPlaceholder && label && sample && (
        <Text className='textarea-sample' level={TextLevels.TWO} typo={TypographyColor.TEXT_DISABLED}>
          {sample}
        </Text>
      )}

      <textarea
        ref={ref}
        minLength={minLength}
        disabled={disabled}
        {...others}
        className={classes}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          if (onChange) {
            onChange({
              textareaName: e.target.name,
              textareaValue: e.target.value,
            })
          }
        }}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        required={required}
      />
      {dynamicPlaceholder && <label>{label}</label>}
      {iconNameLeft && <Icon name={iconNameLeft} size='small' />}
      {iconNameRight && <Icon name={iconNameRight} size='small' />}
      {help && (
        <Text className={helpClasses}>
          {help}
        </Text>
      )}
      {maxLength && <div className={counterClasses}>{`${value.length}/${maxLength?.toString()}`}</div>}
    </div>
  )
})

Textarea.displayName = ComponentName.Textarea
export default Textarea
