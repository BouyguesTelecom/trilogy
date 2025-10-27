import clsx from 'clsx'
import React, { useId } from 'react'

import { Icon, IconColor, IconName, IconSize } from '@/components/icon'
import { ISecurityRules, IValidationRules } from '@/components/input/InputProps'
import { hashClass } from '@/helpers'
import { useGauge } from './hook/useGauge'

interface InputGaugeProps {
  /** @deprecated use securityRules instead */
  validationRules?: IValidationRules
  styled: boolean
  inputValue: string
  securityRules?: ISecurityRules[]
}

interface DataVerifyProps {
  dataAttribute?: { [key: string]: string | boolean | number }
  type?: string
  display: boolean
  color: string
  iconName: IconName
  classes?: string
  styled?: boolean
}

const InputGauge = ({ validationRules, styled, inputValue, securityRules }: InputGaugeProps): JSX.Element => {
  const id = useId()
  const {
    widthGauge,
    colorGauge,
    LengthvalidationRulesText,
    isLengthVerify,
    isLowerercaseVerify,
    isNumberVerify,
    isSpecialCharsVerify,
    isUppercaseVerify,
    rules,
  } = useGauge({ validationRules, inputValue, securityRules })

  return (
    <div data-testid='security-gauge' className={hashClass(styled, clsx('security-gauge-container'))}>
      <div className={hashClass(styled, clsx('security-gauge'))}>
        <div
          data-gauge
          style={{ width: widthGauge, backgroundColor: colorGauge() }}
          className={hashClass(styled, clsx('gauge'))}
        />
      </div>
      <div className={hashClass(styled, clsx('security-gauge-verifies'))}>
        {validationRules && (
          <>
            <DataVerify
              display={!!validationRules?.length}
              dataAttribute={{ 'data-security-length': true }}
              type={LengthvalidationRulesText}
              classes='security-length'
              color={isLengthVerify.color}
              iconName={isLengthVerify.isVerify ? IconName.CHECK_CIRCLE : IconName.TIMES}
              styled={styled}
            />
            <DataVerify
              display={!!validationRules?.uppercase}
              dataAttribute={{ 'data-security-uppercase': true }}
              classes='security-uppercase'
              type='Majuscule'
              color={isUppercaseVerify.color}
              iconName={isUppercaseVerify.isVerify ? IconName.CHECK_CIRCLE : IconName.TIMES}
              styled={styled}
            />
            <DataVerify
              display={!!validationRules?.specialChars}
              dataAttribute={{ 'data-security-special-chars': true }}
              classes='security-special-chars'
              type='Caractères spéciaux'
              color={isSpecialCharsVerify.color}
              iconName={isSpecialCharsVerify.isVerify ? IconName.CHECK_CIRCLE : IconName.TIMES}
              styled={styled}
            />
            <DataVerify
              display={!!validationRules?.lowercase}
              dataAttribute={{ 'data-security-lowercase': true }}
              classes='security-lowercase'
              type='Minuscule'
              color={isLowerercaseVerify.color}
              iconName={isLowerercaseVerify.isVerify ? IconName.CHECK_CIRCLE : IconName.TIMES}
              styled={styled}
            />
            <DataVerify
              display={!!validationRules?.number}
              dataAttribute={{ 'data-security-number': true }}
              classes='security-number'
              type='Chiffre'
              color={isNumberVerify.color}
              iconName={isNumberVerify.isVerify ? IconName.CHECK_CIRCLE : IconName.TIMES}
              styled={styled}
            />
          </>
        )}
        {securityRules &&
          rules &&
          rules.map((rule) => (
            <DataVerify
              key={`${id}_${rule.label}`}
              display={true}
              type={rule.label}
              color={rule.validate ? IconColor.SUCCESS : IconColor.NEUTRAL}
              iconName={rule.validate ? IconName.CHECK_CIRCLE : IconName.TIMES}
              styled={styled}
              dataAttribute={rule.dataAttribute}
            />
          ))}
      </div>
    </div>
  )
}

const DataVerify = ({
  dataAttribute,
  type,
  display,
  color,
  iconName,
  classes,
  styled,
}: DataVerifyProps): JSX.Element | null => {
  if (!display) return null

  return (
    <div {...dataAttribute} className={hashClass(styled, clsx('security', classes))}>
      <Icon color={color} name={iconName} size={IconSize.SMALLER} />
      <span>{type}</span>
    </div>
  )
}

export default InputGauge
