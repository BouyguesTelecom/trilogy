/* eslint-disable @typescript-eslint/no-unused-vars */
import { Icon } from '@/components/icon'
import { Text, TextLevels, TextMarkup } from '@/components/text'
import { hashClass } from '@/helpers'
import { TypographyColor } from '@/objects'
import { has, is } from '@/services'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { useTextarea } from './hooks/useTextarea'
import { TextareaProps, TextareaRef } from './TextareaProps'

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
const Textarea = React.forwardRef<TextareaRef, TextareaProps>(
  (
    {
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
    },
    ref,
  ): JSX.Element => {
    const { handleChange, value } = useTextarea({ onChange, defaultValue })

    const wrapperClasses = hashClass(clsx('textarea-wrapper', className, status && is(status)))
    const classes = hashClass(clsx('textarea', dynamicPlaceholder && has('dynamic-label'), iconNameLeft && has('icon')))
    const helpClasses = clsx('help', status && is(status))
    const counterClasses = hashClass(clsx('counter', maxLength))

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
          onChange={handleChange}
          placeholder={placeholder}
          rows={rows}
          maxLength={maxLength}
          required={required}
        />
        {dynamicPlaceholder && <label>{label}</label>}
        {iconNameLeft && <Icon name={iconNameLeft} size='small' />}
        {iconNameRight && <Icon name={iconNameRight} size='small' />}
        {help && <Text className={helpClasses}>{help}</Text>}
        {maxLength && <div className={counterClasses}>{`${value?.length}/${maxLength?.toString()}`}</div>}
      </div>
    )
  },
)

Textarea.displayName = ComponentName.Textarea
export default Textarea
