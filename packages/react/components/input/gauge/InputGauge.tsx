import clsx from 'clsx'
import React from 'react'

import { hashClass } from '../../../helpers'
import { Icon, IconName, IconSize } from '../../icon'
import { IValidationRules } from '../InputProps'
import { useGauge } from './hook/useGauge'

interface InputGaugeProps {
  validationRules?: IValidationRules
  styled: boolean
  inputValue: string
}

interface DataVerifyProps {
  dataAttribute: { [key: string]: boolean }
  type?: string
  display: boolean
  color: string
  iconName: IconName
  classes: string
  styled?: boolean
}

const InputGauge = ({ validationRules, styled, inputValue }: InputGaugeProps): JSX.Element => {
  const {
    widthGauge,
    colorGauge,
    LengthvalidationRulesText,
    isLengthVerify,
    isLowerercaseVerify,
    isNumberVerify,
    isSpecialCharsVerify,
    isUppercaseVerify,
  } = useGauge({ validationRules, inputValue })

  return (
    <div data-testid='security-gauge' className={hashClass(styled, clsx('security-gauge-container'))}>
      <div className={hashClass(styled, clsx('security-gauge'))}>
        <div
          data-gauge
          style={{ width: widthGauge, backgroundColor: colorGauge }}
          className={hashClass(styled, clsx('gauge'))}
        />
      </div>
      <div className={hashClass(styled, clsx('security-gauge-verifies'))}>
        <div>
          <DataVerify
            display={!!validationRules?.length}
            dataAttribute={{ 'data-security-special-chars': true }}
            type={LengthvalidationRulesText}
            classes='security-length'
            data-length-min={validationRules?.length?.min}
            data-length-max={validationRules?.length?.max}
            color={isLengthVerify.color}
            iconName={isLengthVerify.isVerify ? IconName.CHECK_CIRCLE : IconName.TIMES}
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
            display={!!validationRules?.number}
            dataAttribute={{ 'data-security-number': true }}
            classes='security-number'
            type='Chiffre'
            color={isNumberVerify.color}
            iconName={isNumberVerify.isVerify ? IconName.CHECK_CIRCLE : IconName.TIMES}
            styled={styled}
          />
        </div>

        <div>
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
            display={!!validationRules?.lowercase}
            dataAttribute={{ 'data-security-lowercase': true }}
            classes='security-lowercase'
            type='Minuscule'
            color={isLowerercaseVerify.color}
            iconName={isLowerercaseVerify.isVerify ? IconName.CHECK_CIRCLE : IconName.TIMES}
            styled={styled}
          />
        </div>
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
