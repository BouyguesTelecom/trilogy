import React from 'react'

import { IconColor } from '@/components/icon'
import { IValidationRules } from '@/components/input/InputProps'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'

interface IParams {
  validationRules?: IValidationRules
  inputValue?: string
}

export const useGauge = ({ validationRules, inputValue }: IParams) => {
  const initStateVerifies = { isVerify: false, color: IconColor.NEUTRAL }

  try {
    const [points, setPoints] = React.useState<number>(0)
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

    const colorGauge = React.useMemo(() => {
      const calc = Number(((points / nbAllVerifies) * 100).toFixed(0))
      if (calc <= 50 && calc > 0) return getColorStyle(TrilogyColor.ERROR)
      if (calc <= 99 && calc > 50) return getColorStyle(TrilogyColor.WARNING)
      if (calc === 100) return getColorStyle(TrilogyColor.SUCCESS)
      return getColorStyle(TrilogyColor.NEUTRAL_FADE)
    }, [points, nbAllVerifies])

    React.useEffect(() => {
      const min = validationRules?.length?.min || 0
      const max = validationRules?.length?.max || ''
      const regex = new RegExp(`^.{${min},${max}}$`)
      const validations = []

      validationRules?.specialChars &&
        validations.push({ test: inputValue ? /[^\w]/.test(inputValue) : false, setState: setIsSpecialCharsVerify })
      validationRules?.number &&
        validations.push({ test: inputValue ? /[0-9]/.test(inputValue) : false, setState: setIsNumberVerify })
      validationRules?.uppercase &&
        validations.push({ test: inputValue ? /[A-Z]/.test(inputValue) : false, setState: setIsUppercaseVerify })
      validationRules?.lowercase &&
        validations.push({ test: inputValue ? /[a-z]/.test(inputValue) : false, setState: setisLowerercaseVerify })
      validationRules?.length &&
        validations.push({ test: inputValue ? regex.test(inputValue) : false, setState: setIsLengthVerify })

      validations.forEach(({ test, setState }) => {
        if (test) return setState({ isVerify: true, color: IconColor.SUCCESS })
        return setState(initStateVerifies)
      })

      setPoints(validations.filter((item) => item.test).length)
    }, [inputValue, validationRules])

    return {
      LengthvalidationRulesText: LengthvalidationRulesText(validationRules),
      colorGauge,
      widthGauge,
      isLengthVerify,
      isLowerercaseVerify,
      isNumberVerify,
      isSpecialCharsVerify,
      isUppercaseVerify,
    }
  } catch {
    return {
      LengthvalidationRulesText: LengthvalidationRulesText(validationRules),
      colorGauge: getColorStyle(TrilogyColor.NEUTRAL_FADE),
      widthGauge: '0%',
      isLengthVerify: initStateVerifies,
      isLowerercaseVerify: initStateVerifies,
      isNumberVerify: initStateVerifies,
      isSpecialCharsVerify: initStateVerifies,
      isUppercaseVerify: initStateVerifies,
    }
  }
}

const LengthvalidationRulesText = (validationRules?: IValidationRules) => {
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
}
