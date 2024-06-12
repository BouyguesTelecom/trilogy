import React, { useEffect, useMemo } from 'react'

import { StyleSheet, View } from 'react-native'
import { TrilogyColor, getColorStyle } from '../../../objects'
import { Icon, IconColor, IconName, IconSize } from '../../icon'
import { Text } from '../../text'
import { IValidationRules } from '../InputProps'

interface InputGaugeProps {
  validationRules?: IValidationRules
  inputValue: string
}

interface DataVerifyProps {
  type?: string
  display: boolean
  color: string
  iconName: IconName
}

const InputGauge = ({ validationRules, inputValue }: InputGaugeProps): JSX.Element => {
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
    <View>
      <View style={[styles.containerGauge, { backgroundColor: getColorStyle(TrilogyColor.FONT, 1) }]}>
        <View style={[styles.gauge, { width: widthGauge, backgroundColor: colorGauge }]} />
      </View>
      <View style={styles.verifies}>
        <View>
          <DataVerify
            display={!!validationRules?.length}
            color={isLengthVerify.color}
            iconName={isLengthVerify.isVerify ? IconName.CHECK_CIRCLE : IconName.TIMES}
            type={LengthvalidationRulesText}
          />
          <DataVerify
            display={!!validationRules?.specialChars}
            color={isSpecialCharsVerify.color}
            iconName={isSpecialCharsVerify.isVerify ? IconName.CHECK_CIRCLE : IconName.TIMES}
            type='Caractères spéciaux'
          />
          <DataVerify
            display={!!validationRules?.number}
            color={isNumberVerify.color}
            iconName={isNumberVerify.isVerify ? IconName.CHECK_CIRCLE : IconName.TIMES}
            type='Chiffre'
          />
        </View>

        <View>
          <DataVerify
            display={!!validationRules?.uppercase}
            color={isUppercaseVerify.color}
            iconName={isUppercaseVerify.isVerify ? IconName.CHECK_CIRCLE : IconName.TIMES}
            type='Majuscule'
          />
          <DataVerify
            display={!!validationRules?.lowercase}
            color={isLowerercaseVerify.color}
            iconName={isLowerercaseVerify.isVerify ? IconName.CHECK_CIRCLE : IconName.TIMES}
            type='Minuscule'
          />
        </View>
      </View>
    </View>
  )
}

const DataVerify = ({ color, iconName, display, type }: DataVerifyProps): JSX.Element | null => {
  if (!display) return null
  return (
    <View style={styles.verify}>
      <Icon color={color} name={iconName} size={IconSize.SMALLER} />
      <Text style={styles.textVerify}>{type}</Text>
    </View>
  )
}

export default InputGauge

const styles = StyleSheet.create({
  verify: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  textVerify: {
    marginLeft: 8,
  },
  verifies: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerGauge: {
    height: 4,
    width: '100%',
    borderRadius: 4,
    marginVertical: 8,
  },
  gauge: {
    height: 4,
    borderRadius: 4,
  },
})
