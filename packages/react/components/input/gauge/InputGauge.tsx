import clsx from 'clsx'
import React, { ForwardedRef, forwardRef, useEffect, useMemo } from 'react'

import { hashClass } from '../../../helpers'
import { TrilogyColor, getColorStyle } from '../../../objects'
import { IValidationRules } from '../InputProps'

interface InputGaugeProps {
  validationRules?: IValidationRules
  styled: boolean
  inputValue: string
}

interface DataVerifyProps {
  dataAttribute: { [key: string]: boolean }
  styled: boolean
  type?: string
  display?: boolean
  classes: string
}

const InputGauge = ({ validationRules, styled, inputValue }: InputGaugeProps): JSX.Element => {
  const [points, setPoints] = React.useState<number>(0)

  const iconTimesClasse = hashClass(styled, clsx('tri-times'))
  const iconCheckClasse = hashClass(styled, clsx('tri-check-circle'))
  const successClasse = hashClass(styled, clsx('is-success'))

  const refLengthVerify = React.useRef<HTMLElement>(null)
  const refSpecialCharsVerify = React.useRef<HTMLElement>(null)
  const refNumberVerify = React.useRef<HTMLElement>(null)
  const refUppercaseVerify = React.useRef<HTMLElement>(null)
  const refLowerercaseVerify = React.useRef<HTMLElement>(null)

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
        return `Entre ${validationRules.length.min} et ${validationRules.length.max} caractères`
      case validationRules?.length?.min && !validationRules?.length?.max:
        return `Minimum ${validationRules.length.min} caractères`
      case validationRules?.length?.max && !validationRules?.length?.min:
        return `Maximum ${validationRules?.length.max} caractères`
    }
  }, [validationRules?.length?.min, validationRules?.length?.max])

  useEffect(() => {
    const min = validationRules?.length?.min || 0
    const max = validationRules?.length?.max || ''
    const validations = []

    validationRules?.specialChars && validations.push({ test: /[^\w\*]/.test(inputValue), ref: refSpecialCharsVerify })
    validationRules?.number && validations.push({ test: /[0-9]/.test(inputValue), ref: refNumberVerify })
    validationRules?.uppercase && validations.push({ test: /[A-Z]/.test(inputValue), ref: refUppercaseVerify })
    validationRules?.lowercase && validations.push({ test: /[a-z]/.test(inputValue), ref: refLowerercaseVerify })
    validationRules?.length &&
      validations.push({ test: new RegExp(`^.{${min},${max}}$`).test(inputValue), ref: refLengthVerify })

    validations.forEach(({ test, ref }) => {
      switch (test) {
        case true:
          ref.current?.classList.remove(iconTimesClasse)
          ref.current?.classList.add(iconCheckClasse, successClasse)
          break
        default:
          ref.current?.classList.remove(iconCheckClasse, successClasse)
          ref.current?.classList.add(iconTimesClasse)
          break
      }
    })

    setPoints(validations.filter((item) => item.test).length)
  }, [
    inputValue,
    validationRules,
    refLengthVerify,
    refLowerercaseVerify,
    refNumberVerify,
    refSpecialCharsVerify,
    refUppercaseVerify,
  ])

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
            ref={refLengthVerify}
            styled={styled}
            type={LengthvalidationRulesText}
            classes='security-length'
            data-length-min={validationRules?.length?.min}
            data-length-max={validationRules?.length?.max}
          />
          <DataVerify
            display={!!validationRules?.specialChars}
            dataAttribute={{ 'data-security-special-chars': true }}
            ref={refSpecialCharsVerify}
            styled={styled}
            type='Caractères spéciaux'
            classes='security-special-chars'
          />
          <DataVerify
            display={!!validationRules?.number}
            dataAttribute={{ 'data-security-number': true }}
            ref={refNumberVerify}
            styled={styled}
            type='Chiffre'
            classes='security-number'
          />
        </div>

        <div>
          <DataVerify
            display={!!validationRules?.uppercase}
            dataAttribute={{ 'data-security-uppercase': true }}
            ref={refUppercaseVerify}
            styled={styled}
            type='Majuscule'
            classes='security-uppercase'
          />
          <DataVerify
            display={!!validationRules?.lowercase}
            dataAttribute={{ 'data-security-lowercase': true }}
            ref={refLowerercaseVerify}
            styled={styled}
            type='Minuscule'
            classes='security-lowercase'
          />
        </div>
      </div>
    </div>
  )
}

const DataVerify = forwardRef(
  (
    { dataAttribute, styled, type, display, classes, ...others }: DataVerifyProps,
    ref: ForwardedRef<HTMLElement>,
  ): JSX.Element | null => {
    if (!display) return null
    const iconClasse = hashClass(styled, clsx('icon'))
    const iconTimesClasse = hashClass(styled, clsx('tri-times'))

    return (
      <div {...dataAttribute} className={hashClass(styled, clsx('security', classes))}>
        <span data-icon-securities className={iconClasse}>
          <i ref={ref} className={iconTimesClasse} {...others}></i>
        </span>
        <span>{type}</span>
      </div>
    )
  },
)

export default InputGauge
