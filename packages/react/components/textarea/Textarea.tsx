/* eslint-disable @typescript-eslint/no-unused-vars */
import { Icon } from '@/components/icon'
import { Text, TextLevels, TextMarkup } from '@/components/text'
import { hashClass } from '@/helpers'
import { TypographyColor } from '@/objects'
import { has, is } from '@/services'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { TextareaProps, TextareaRef } from './TextareaProps'
import { useTextarea } from './hooks/useTextarea'

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
 * @param className {string} Additional CSS Classes
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
    const { value, handleChange } = useTextarea({ onChange, defaultValue })

    const wrapperClasses = hashClass(clsx('field textarea-wrapper', className, status && is(status)))
    const classes = hashClass(clsx('textarea'))
    const helpClasses = clsx('help', status && is(status))
    const counterClasses = hashClass(clsx('counter', maxLength))

    const controlClasses = hashClass(
      clsx('control', iconNameLeft && has('icons-left'), iconNameRight && has('icons-right')),
    )

    return (
      <div id={id} className={wrapperClasses}>
        {label && (
          <label className={hashClass('textarea-label')} htmlFor={id}>
            {label}{' '}
            {required && (
              <Text markup={TextMarkup.SPAN} typo={TypographyColor.TEXT_ERROR}>
                *
              </Text>
            )}
          </label>
        )}
        {sample && (
          <Text className='input-sample' level={TextLevels.TWO} id={id}>
            {sample}
          </Text>
        )}

        <div className={controlClasses}>
          <textarea
            ref={ref}
            minLength={minLength}
            disabled={disabled}
            className={classes}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            rows={rows}
            maxLength={maxLength}
            required={required}
            {...others}
          />
          {iconNameLeft && <Icon name={iconNameLeft} size='small' className='icon-left' />}
          {iconNameRight && <Icon name={iconNameRight} size='small' className='icon-right' />}
          {maxLength && <div className={counterClasses}>{`${value?.length}/${maxLength?.toString()}`}</div>}
        </div>

        {help && <Text className={helpClasses}>{help}</Text>}
      </div>
    )
  },
)

Textarea.displayName = ComponentName.Textarea
export default Textarea
