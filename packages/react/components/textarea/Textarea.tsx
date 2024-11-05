/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Text, TextLevels, TextMarkup } from '@/components/text'
import { TextareaProps } from './TextareaProps'
import { has, is } from '@/services'
import { Icon } from '@/components/icon'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'
import { TypographyColor } from '@/objects'

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
 * @param testId {string} Test Id for Test Integration
 * @param dynamicPlaceholder {boolean}
 * @param status {InputStatus} Textarea with status - (SUCCESS|WARNING|ERROR|DEFAULT)
 * @param required {boolean} Required
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param minLength {number} Textarea min length
 * @param typo {TypographyColor | TypographyColorValues} change help typo
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 * @param keyboardStyle {InputKeyboardAppearance} Custom appearance for keyboard
 * @param autoCapitalize {InputAutoCapitalize} Capitalize => NONE | SENTENCES | WORDS | CHARS
 * @param autoCorrect {boolean} Auto correct sentence
 * @param autoCompleteType {InputAutoCompleteType} Auto complete input type
 * @param textContentType {InputTextContentType} Give the keyboard and the system information
 * @param keyboardType {InputKeyboardType} Keybaord type
 * @param value {string} Value for textarea
 * @param customHeight {number} custom textarea height
 */
const Textarea = ({
  className,
  sample,
  required,
  disabled,
  onChange,
  placeholder,
  defaultValue,
  help,
  status,
  statusIconName,
  dynamicPlaceholder = true,
  rows,
  ref,
  label,
  maxLength,
  minLength,
  iconName,
  typo,
  ...others
}: TextareaProps): JSX.Element => {
  const [value, setValue] = useState(defaultValue || '')
  const { styled } = useTrilogyContext()

  useEffect(() => {
    setValue(defaultValue || '')
  }, [defaultValue])

  const wrapperClasses = hashClass(styled, clsx('textarea-wrapper', className, status && is(status)))
  const classes = hashClass(
    styled,
    clsx('textarea', dynamicPlaceholder && has('dynamic-label'), iconName && has('icon')),
  )

  const helpClasses = clsx('help')
  const counterClasses = hashClass(styled, clsx('counter', maxLength))

  return (
    <div className={wrapperClasses}>
      {!dynamicPlaceholder && <label className='textarea-label'>{label} {label && required && <Text markup={TextMarkup.SPAN} typo={TypographyColor.TEXT_ERROR}>*</Text>}</label>}
      {!dynamicPlaceholder && label && sample && <Text className='textarea-sample' level={TextLevels.TWO} typo={TypographyColor.TEXT_DISABLED}>{sample}</Text>}

      <textarea
        minLength={minLength}
        disabled={disabled}
        ref={ref}
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
      {iconName && <Icon name={iconName} size='small' />}
      {statusIconName && <Icon name={statusIconName} size='small' />}
      {help && (
        <Text typo={typo} className={helpClasses}>
          {help}
        </Text>
      )}
      {maxLength && <div className={counterClasses}>{`${value.length}/${maxLength?.toString()}`}</div>}
    </div>
  )
}

export default Textarea
