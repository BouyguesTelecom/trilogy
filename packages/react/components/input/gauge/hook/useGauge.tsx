import React, { useEffect, useMemo } from 'react'

import { IconColor } from '@/components/icon'
import { IValidationRules } from '@/components/input/InputProps'
import { TrilogyColor, getColorStyle } from '@/objects'

interface IParams {
  validationRules?: IValidationRules
  inputValue: string
}

export const useGauge = ({ validationRules, inputValue }: IParams) => {
  const [points, setPoints] = React.useState<number>(0)
  const initStateVerifies = { isVerify: false, color: IconColor.NEUTRAL }
  const [isLengthVerify, setIsLengthVerify] = React.useState(initStateVerifies)
  const [isSpecialCharsVerify, setIsSpecialCharsVerify] = React.useState(initStateVerifies)
  const [isNumberVerify, setIsNumberVerify] = React.useState(initStateVerifies)
  const [isUppercaseVerify, setIsUppercaseVerify] = React.useState(initStateVerifies)
  const [isLowerercaseVerify, setisLowerercaseVerify] = React.useState(initStateVerifies)

  const nbAllVerifies = React.useMemo(
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

  const colorGauge = () => {
    const calc = Number(((points / nbAllVerifies) * 100).toFixed(0))
    if (calc <= 50 && calc > 0) return getColorStyle(TrilogyColor.ERROR)
    if (calc <= 99 && calc > 50) return getColorStyle(TrilogyColor.WARNING)
    if (calc === 100) return getColorStyle(TrilogyColor.SUCCESS)
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
  }
}
