import clsx from 'clsx'
import React, { useEffect, useMemo } from 'react'

import { hashClass } from '../../../helpers'
import { TrilogyColor, getColorStyle } from '../../../objects'
import { Icon, IconColor, IconName, IconSize } from '../../icon'
import { IValidationRules } from '../InputProps'

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
  const [points, setPoints] = React.useState<number>(0)
  const initStateVerifies = { isVerify: false, color: IconColor.NEUTRAL }

  const [isLengthVerify, setIsLengthVerify] = React.useState(initStateVerifies)
  const [isSpecialCharsVerify, setIsSpecialCharsVerify] = React.useState(initStateVerifies)
  const [isNumberVerify, setIsNumberVerify] = React.useState(initStateVerifies)
  const [isUppercaseVerify, setIsUppercaseVerify] = React.useState(initStateVerifies)
  const [isLowerercaseVerify, setisLowerercaseVerify] = React.useState(initStateVerifies)

  const nbAllVerifies = useMemo(
    () => (validationRules && Object.values(validationRules).filter((rule) => rule).length) || 0,
    [validationRules],
  )

  const widthGauge = React.useMemo(() => {
    const calc = Number(((points / nbAllVerifies) * 100).toFixed(0))
    if (calc <= 50 && calc > 0) return '50%'
    if (calc <= 99 && calc > 50) return '75%'
    if (calc === 100) return '100%'
    return '0%'
  }, [points, nbAllVerifies])

  const colorGauge = React.useMemo(() => {
    const calc = Number(((points / nbAllVerifies) * 100).toFixed(0))
    if (calc <= 50 && calc > 0) return getColorStyle(TrilogyColor.ERROR)
    if (calc <= 99 && calc > 50) return getColorStyle(TrilogyColor.WARNING)
    if (calc === 100) return getColorStyle(TrilogyColor.SUCCESS)
    return getColorStyle(TrilogyColor.NEUTRAL_LIGHT)
  }, [points, nbAllVerifies])

  const LengthvalidationRulesText = useMemo(() => {
    switch (true) {
      case validationRules?.length?.min !== undefined && validationRules?.length?.max !== undefined:
        return `Entre ${validationRules?.length?.min} et ${validationRules?.length?.max} caractères`
      case validationRules?.length?.min && !validationRules?.length?.max:
        return `Minimum ${validationRules?.length?.min} caractères`
      case validationRules?.length?.max && !validationRules?.length?.min:
        return `Maximum ${validationRules?.length?.max} caractères`
    }
  }, [validationRules?.length?.min, validationRules?.length?.max])

  useEffect(() => {
    const min = validationRules?.length?.min || 0
    const max = validationRules?.length?.max || ''
    const regex = new RegExp(`^.{${min},${max}}$`)
    const validations = []

    validationRules?.specialChars &&
      validations.push({ test: /[^\w\*]/.test(inputValue), setState: setIsSpecialCharsVerify })
    validationRules?.number && validations.push({ test: /[0-9]/.test(inputValue), setState: setIsNumberVerify })
    validationRules?.uppercase && validations.push({ test: /[A-Z]/.test(inputValue), setState: setIsUppercaseVerify })
    validationRules?.lowercase && validations.push({ test: /[a-z]/.test(inputValue), setState: setisLowerercaseVerify })
    validationRules?.length && validations.push({ test: regex.test(inputValue), setState: setIsLengthVerify })

    validations.forEach(({ test, setState }) => {
      if (test) return setState({ isVerify: true, color: IconColor.SUCCESS })
      return setState(initStateVerifies)
    })

    setPoints(validations.filter((item) => item.test).length)
  }, [inputValue, validationRules])

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
  console.log(color)

  return (
    <div {...dataAttribute} className={hashClass(styled, clsx('security', classes))}>
      <Icon color={color} name={iconName} size={IconSize.SMALLER} />
      <span>{type}</span>
    </div>
  )
}

export default InputGauge
