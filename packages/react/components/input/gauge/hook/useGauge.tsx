import React, { useEffect, useMemo } from 'react'

import { IconColor } from '@/components/icon'
import { ISecurityRules, IValidationRules } from '@/components/input/InputProps'
import { TrilogyColor, getColorStyle } from '@/objects'

interface IParams {
  validationRules?: IValidationRules
  inputValue: string
  securityRules?: ISecurityRules[]
}

export const useGauge = ({ validationRules, inputValue, securityRules }: IParams) => {
  const [points, setPoints] = React.useState<number>(0)
  const initStateVerifies = { isVerify: false, color: IconColor.NEUTRAL }
  const [isLengthVerify, setIsLengthVerify] = React.useState(initStateVerifies)
  const [isSpecialCharsVerify, setIsSpecialCharsVerify] = React.useState(initStateVerifies)
  const [isNumberVerify, setIsNumberVerify] = React.useState(initStateVerifies)
  const [isUppercaseVerify, setIsUppercaseVerify] = React.useState(initStateVerifies)
  const [isLowerercaseVerify, setisLowerercaseVerify] = React.useState(initStateVerifies)

  const nbAllVerifies = React.useMemo(
    () =>
      (validationRules && Object.values(validationRules).filter((rule) => rule).length) ||
      (securityRules && securityRules.length) ||
      0,
    [validationRules, securityRules],
  )

  const rules = React.useMemo(
    () =>
      securityRules &&
      securityRules.map(({ label, patternValidator, dataAttribute }) => ({
        label,
        validate: !!patternValidator?.test(inputValue),
        dataAttribute,
      })),
    [inputValue],
  )

  const calcPoints = React.useMemo(() => {
    if (validationRules) {
      return Number(((points / nbAllVerifies) * 100).toFixed(0))
    }
    if (securityRules) {
      const pts = rules?.filter((rule) => rule.validate).length || 0
      return Number(((pts / nbAllVerifies) * 100).toFixed(0))
    }

    return 0
  }, [points, nbAllVerifies, rules])

  const widthGauge = React.useMemo(() => {
    if (calcPoints <= 50 && calcPoints > 0) return '50%'
    if (calcPoints <= 99 && calcPoints > 50) return '75%'
    if (calcPoints === 100) return '100%'
    return '0%'
  }, [calcPoints, nbAllVerifies])

  const colorGauge = () => {
    if (calcPoints <= 50 && calcPoints > 0) return getColorStyle(TrilogyColor.ERROR)
    if (calcPoints <= 99 && calcPoints > 50) return getColorStyle(TrilogyColor.WARNING)
    if (calcPoints === 100) return getColorStyle(TrilogyColor.SUCCESS)
    return getColorStyle(TrilogyColor.NEUTRAL_FADE)
  }

  const LengthvalidationRulesText = useMemo(() => {
    switch (true) {
      case validationRules?.length?.min !== undefined && validationRules?.length?.max !== undefined:
        return `Entre ${validationRules?.length?.min} et ${validationRules?.length?.max} caractères`
      case validationRules?.length?.min && !validationRules?.length?.max:
        return `Minimum ${validationRules?.length?.min} caractères`
      case validationRules?.length?.max && !validationRules?.length?.min:
        return `Maximum ${validationRules?.length?.max} caractères`
      default:
        return ''
    }
  }, [validationRules?.length?.min, validationRules?.length?.max])

  useEffect(() => {
    const min = validationRules?.length?.min || 0
    const max = validationRules?.length?.max || ''
    const regex = new RegExp(`^.{${min},${max}}$`)
    const validations = []

    validationRules?.specialChars &&
      validations.push({ test: /[^\w]/.test(inputValue), setState: setIsSpecialCharsVerify })
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

  return {
    LengthvalidationRulesText,
    colorGauge,
    widthGauge,
    isLengthVerify,
    isLowerercaseVerify,
    isNumberVerify,
    isSpecialCharsVerify,
    isUppercaseVerify,
    rules,
  }
}
