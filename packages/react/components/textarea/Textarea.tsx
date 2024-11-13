import React from 'react'

import { TextareaProps } from '@/components/textarea/TextareaProps'
import TextareaBase from '@/components/textarea/base/Textarea.base'
import { useTextarea } from '@/components/textarea/hook/useTextarea'
import { TypographyColor } from '@/objects/Typography/TypographyColor'

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
const Textarea = ({ value, onChange, ...props }: TextareaProps, ref: React.Ref<HTMLTextAreaElement>): JSX.Element => {
  const { inputValue, handleChange } = useTextarea({ inputValue: value, onChange })

  return <TextareaBase ref={ref} value={inputValue} onChange={handleChange} {...props} />
}

export default React.forwardRef(Textarea)
