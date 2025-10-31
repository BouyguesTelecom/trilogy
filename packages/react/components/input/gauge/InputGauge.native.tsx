import React, { useId } from 'react'

import { Icon, IconColor, IconName, IconSize } from '@/components/icon'
import { ISecurityRules, IValidationRules } from '@/components/input/InputProps'
import { Text } from '@/components/text'
import { TrilogyColor, getColorStyle } from '@/objects'
import { DimensionValue, StyleSheet, View } from 'react-native'
import { useGauge } from './hook/useGauge'

interface InputGaugeProps {
  validationRules?: IValidationRules
  inputValue: string
  securityRules?: ISecurityRules[]
}

interface DataVerifyProps {
  type?: string
  display: boolean
  color: string
  iconName: IconName
  index: number
}

const InputGauge = ({ validationRules, inputValue, securityRules }: InputGaugeProps): JSX.Element => {
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
    <View>
      <View style={[styles.containerGauge, { backgroundColor: getColorStyle(TrilogyColor.MAIN_FADE) }]}>
        <View style={[styles.gauge, { width: widthGauge as DimensionValue, backgroundColor: colorGauge() }]} />
      </View>
      <View style={styles.verifies}>
        {validationRules && (
          <>
            <DataVerify
              display={!!validationRules?.length}
              color={isLengthVerify.color}
              iconName={isLengthVerify.isVerify ? IconName.CHECK_CIRCLE : IconName.TIMES}
              type={LengthvalidationRulesText}
              index={1}
            />
            <DataVerify
              display={!!validationRules?.uppercase}
              color={isUppercaseVerify.color}
              iconName={isUppercaseVerify.isVerify ? IconName.CHECK_CIRCLE : IconName.TIMES}
              type='Majuscule'
              index={2}
            />
            <DataVerify
              display={!!validationRules?.specialChars}
              color={isSpecialCharsVerify.color}
              iconName={isSpecialCharsVerify.isVerify ? IconName.CHECK_CIRCLE : IconName.TIMES}
              type='Caractères spéciaux'
              index={3}
            />
            <DataVerify
              display={!!validationRules?.lowercase}
              color={isLowerercaseVerify.color}
              iconName={isLowerercaseVerify.isVerify ? IconName.CHECK_CIRCLE : IconName.TIMES}
              type='Minuscule'
              index={4}
            />
            <DataVerify
              display={!!validationRules?.number}
              color={isNumberVerify.color}
              iconName={isNumberVerify.isVerify ? IconName.CHECK_CIRCLE : IconName.TIMES}
              type='Chiffre'
              index={5}
            />
          </>
        )}
        {securityRules &&
          rules &&
          rules.map((rule, index) => (
            <DataVerify
              index={index + 1}
              key={`${id}_${rule.label}`}
              display={true}
              type={rule.label}
              color={rule.validate ? IconColor.SUCCESS : IconColor.NEUTRAL}
              iconName={rule.validate ? IconName.CHECK_CIRCLE : IconName.TIMES}
            />
          ))}
      </View>
    </View>
  )
}

const DataVerify = ({ color, iconName, display, type, index }: DataVerifyProps): JSX.Element | null => {
  if (!display) return null
  return (
    <View style={[styles.verify, index % 2 === 0 ? styles.even : undefined]}>
      <Icon color={color} name={iconName} size={IconSize.SMALLER} />
      <Text style={styles.textVerify}>{type}</Text>
    </View>
  )
}

export default InputGauge

const styles = StyleSheet.create({
  even: {
    justifyContent: 'flex-end',
  },
  verify: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    flexBasis: '50%',
    flexGrow: 0,
    flexShrink: 1,
  },
  textVerify: {
    marginLeft: 8,
  },
  verifies: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
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
