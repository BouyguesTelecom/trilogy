import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconSize } from '@/components/icon'
import { RadioTileProps } from '@/components/radio/tiles/tile/RadioTileProps'
import { SpacerSize } from '@/components/spacer'
import { Text, TextLevels } from '@/components/text'
import { getColorStyle, TrilogyColor, TypographyAlign, TypographyColor } from '@/objects'
import { TypographyBold } from '@/objects/Typography/TypographyBold'
import React, { useMemo } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import shortid from 'shortid'

const RadioTile = ({
  checked,
  className,
  disabled,
  readonly,
  id = shortid.generate(),
  label,
  onChange,
  name,
  value,
  description,
  icon,
  horizontal,
  ...others
}: RadioTileProps): JSX.Element => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: horizontal ? 'row' : 'column',
      width: horizontal ? '100%' : undefined,
      borderWidth: 1,
      alignItems: 'center',
      gap: SpacerSize.TWO,
      borderRadius: 6,
      padding: SpacerSize.FOUR,
      maxWidth: horizontal ? undefined : '50%',
      borderColor:
        (disabled && getColorStyle(TrilogyColor.DISABLED)) ||
        (checked && getColorStyle(TrilogyColor.MAIN)) ||
        getColorStyle(TrilogyColor.NEUTRAL),
      backgroundColor:
        (disabled && getColorStyle(TrilogyColor.DISABLED_FADE)) || getColorStyle(TrilogyColor.BACKGROUND),
    },
    icon: {
      width: 'auto',
    },
    content: {
      width: 'auto',
      gap: SpacerSize.ONE,
      maxWidth: horizontal ? '80%' : undefined,
    },
  })

  const typoTitle = useMemo(() => {
    const typos: string[] = [TypographyBold.TEXT_WEIGHT_SEMIBOLD]
    if (!horizontal) typos.push(TypographyAlign.TEXT_CENTERED)
    if (disabled) typos.push(TypographyColor.TEXT_DISABLED)
    return typos
  }, [disabled, horizontal])

  const typoText = useMemo(() => {
    const typos: string[] = []
    if (!horizontal) typos.push(TypographyAlign.TEXT_CENTERED)
    if (disabled) typos.push(TypographyColor.TEXT_DISABLED)
    return typos
  }, [horizontal, disabled])

  return (
    <TouchableOpacity disabled={disabled} style={[styles.container]} {...others}>
      {!horizontal && <InputRadio checked={checked} disabled={disabled} />}

      {icon && (
        <View style={[styles.icon]}>
          <Icon size={IconSize.SMALL} name={icon} />
        </View>
      )}

      <View style={[styles.content]}>
        {label && (
          <Text level={TextLevels.ONE} typo={typoTitle}>
            {String(label)}
          </Text>
        )}
        {description && typeof description.valueOf() === 'string' ? (
          <Text level={TextLevels.TWO} typo={typoText}>
            {String(description)}
          </Text>
        ) : (
          description
        )}
      </View>

      {horizontal && <InputRadio checked={checked} disabled={disabled} />}
    </TouchableOpacity>
  )
}

const InputRadio = ({ checked, disabled }: { checked?: boolean; disabled?: boolean }): JSX.Element => {
  const styles = StyleSheet.create({
    input: {
      marginLeft: 'auto',
    },
    inputRadio: {
      width: 18,
      height: 18,
      borderWidth: 1,
      borderRadius: 18,
      borderColor:
        (disabled && getColorStyle(TrilogyColor.DISABLED)) ||
        (checked && getColorStyle(TrilogyColor.MAIN)) ||
        getColorStyle(TrilogyColor.NEUTRAL),
    },
  })
  return (
    <View style={[styles.input]}>
      <View style={[styles.inputRadio]} />
    </View>
  )
}

RadioTile.displayName = ComponentName.RadioTile
export default RadioTile
