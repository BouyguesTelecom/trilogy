import clsx from 'clsx'
import React from 'react'

import { Icon, IconName, IconSize } from '@/components/icon'
import { useGauge } from '@/components/input/gauge/hook/useGauge'
import { IValidationRules } from '@/components/input/InputProps'
import { hashClass } from '@/helpers/hashClassesHelpers'

interface InputGaugeProps {
  validationRules?: IValidationRules
  inputValue?: string
}

interface DataVerifyProps {
  dataAttribute: { [key: string]: boolean }
  type?: string
  display: boolean
  color: string
  iconName: IconName
  classes: string
}

const InputGauge = ({ validationRules, inputValue }: InputGaugeProps): JSX.Element => {
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
    <div data-testid='security-gauge' className={hashClass(clsx('security-gauge-container'))}>
      <div className={hashClass(clsx('security-gauge'))}>
        <div
          data-gauge
          style={{ width: widthGauge, backgroundColor: colorGauge() }}
          className={hashClass(clsx('gauge'))}
        />
      </div>
      <div className={hashClass(clsx('security-gauge-verifies'))}>
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
          />
          <DataVerify
            display={!!validationRules?.specialChars}
            dataAttribute={{ 'data-security-special-chars': true }}
            classes='security-special-chars'
            type='Caractères spéciaux'
            color={isSpecialCharsVerify.color}
            iconName={isSpecialCharsVerify.isVerify ? IconName.CHECK_CIRCLE : IconName.TIMES}
          />
          <DataVerify
            display={!!validationRules?.number}
            dataAttribute={{ 'data-security-number': true }}
            classes='security-number'
            type='Chiffre'
            color={isNumberVerify.color}
            iconName={isNumberVerify.isVerify ? IconName.CHECK_CIRCLE : IconName.TIMES}
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
          />
          <DataVerify
            display={!!validationRules?.lowercase}
            dataAttribute={{ 'data-security-lowercase': true }}
            classes='security-lowercase'
            type='Minuscule'
            color={isLowerercaseVerify.color}
            iconName={isLowerercaseVerify.isVerify ? IconName.CHECK_CIRCLE : IconName.TIMES}
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
}: DataVerifyProps): JSX.Element | null => {
  if (!display) return null

  return (
    <div {...dataAttribute} className={hashClass(clsx('security', classes))}>
      <Icon color={color} name={iconName} size={IconSize.SMALLER} />
      <span>{type}</span>
    </div>
  )
}

export default InputGauge
