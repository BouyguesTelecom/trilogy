import { ComponentName } from '@/components/enumsComponentsName'
import { SelectOption } from '@/components/select'
import { SelectOptionProps } from '@/components/select/option/SelectOptionProps'
import React from 'react'
import { PromptSelectOptionRef } from './PromptSelectOptionProps'

/**
 * PromptSelectOption component - Option item for PromptSelect dropdown
 * @param value {string} Option value
 * @param children {ReactNode} Option display text
 * @param disabled {boolean} Whether the option is disabled
 * @param className {string} Additional CSS classes (ONLY FOR WEB)
 * @param testId {string} Test Id for Test Integration
 */
const PromptSelectOption = React.forwardRef<PromptSelectOptionRef, SelectOptionProps>(({ ...others }, ref) => {
  return <SelectOption ref={ref} {...others} />
})

PromptSelectOption.displayName = ComponentName.PromptSelectOption
export default PromptSelectOption
