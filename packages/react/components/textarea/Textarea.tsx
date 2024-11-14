import clsx from 'clsx'
import React from 'react'

import { Icon } from '@/components/icon'
import { Text, TextLevels, TextMarkup } from '@/components/text'
import { useTextarea } from '@/components/textarea/hook/useTextarea'
import { TextareaProps } from '@/components/textarea/TextareaProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { TypographyColor } from '@/objects/Typography/TypographyColor'
import { has, is } from '@/services/classify'

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
const Textarea = (
  {
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
    label,
    maxLength,
    minLength,
    iconName,
    typo,
    testId,
    value,
    ...others
  }: TextareaProps,
  ref: React.Ref<HTMLTextAreaElement>,
): JSX.Element => {
  const { inputValue, handleChange } = useTextarea({ inputValue: value, onChange })

  const wrapperClasses = hashClass(clsx('textarea-wrapper', className, status && is(status)))
  const classes = hashClass(clsx('textarea', dynamicPlaceholder && has('dynamic-label'), iconName && has('icon')))
  const helpClasses = clsx('help')
  const counterClasses = hashClass(clsx('counter', maxLength))

  return (
    <div className={wrapperClasses}>
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
        data-testid={testId}
        minLength={minLength}
        disabled={disabled}
        ref={ref}
        className={classes}
        value={inputValue}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        required={required}
        onChange={handleChange}
        defaultValue={defaultValue}
        {...others}
      />
      {dynamicPlaceholder && <label>{label}</label>}
      {iconName && <Icon name={iconName} size='small' />}
      {statusIconName && <Icon name={statusIconName} size='small' />}
      {help && (
        <Text typo={typo} className={helpClasses}>
          {help}
        </Text>
      )}
      {maxLength && <div className={counterClasses}>{`${value?.length}/${maxLength?.toString()}`}</div>}
    </div>
  )
}

export default React.forwardRef(Textarea)
