import React from 'react'

import { Icon, IconName, IconSize } from '@/components/icon'
import { IValidationRules } from '@/components/input/InputProps'
import { useGauge } from '@/components/input/gauge/hook/useGauge'
import { Text } from '@/components/text'
import { TrilogyColor, getColorStyle } from '@/objects/facets/Color'
import { DimensionValue, StyleSheet, View } from 'react-native'

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
    <View>
      <View style={[styles.containerGauge, { backgroundColor: getColorStyle(TrilogyColor.MAIN_FADE) }]}>
        <View style={[styles.gauge, { width: widthGauge as DimensionValue, backgroundColor: colorGauge }]} />
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
