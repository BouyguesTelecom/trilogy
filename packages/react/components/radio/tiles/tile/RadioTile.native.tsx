import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconSize } from '@/components/icon'
import { RadioTileProps } from '@/components/radio/tiles/tile/RadioTileProps'
import { SpacerSize } from '@/components/spacer'
import { Text, TextLevels } from '@/components/text'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { TypographyAlign, TypographyColor } from '@/objects/Typography'
import { TypographyBold } from '@/objects/Typography/TypographyBold'
import React, { useCallback, useMemo } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

/**
 * radioTile Component
 * @param checked {boolean} Checked radio
 * @param disabled {boolean} Disabled
 * @param readOnly {boolean} readonly radio
 * @param id {string} Id for button, by default id is generate
 * @param label {string} Label for radio
 * @param description {ReactNode} Description for radio
 * @param onChange {ChangeEvent}
 * @param name {string} Name for radio
 * @param value {string} Value for radio
 * @param icon {IconName} icon for radio
 * @param horizontal Horizontal radio
 */
const RadioTile = ({
  checked,
  disabled,
  id = React.useId(),
  label,
  onChange,
  name,
  value,
  description,
  icon,
  horizontal,
  readonly,
  ...others
}: RadioTileProps): JSX.Element => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: horizontal ? 'row' : 'column',
      width: horizontal ? '100%' : undefined,
      borderWidth: checked ? 2 : 1,
      alignItems: 'center',
      gap: SpacerSize.TWO,
      borderRadius: 6,
      padding: !checked ? SpacerSize.FOUR : SpacerSize.FOUR - 1,
      maxWidth: horizontal ? undefined : '50%',
      backgroundColor: getColorStyle(disabled ? TrilogyColor.DISABLED_FADE : TrilogyColor.BACKGROUND),
      borderColor: getColorStyle(disabled ? TrilogyColor.DISABLED : checked ? TrilogyColor.MAIN : TrilogyColor.NEUTRAL),
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

  const handleChange = useCallback(() => {
    if (onChange && !readonly && !disabled)
      onChange({
        radioValue: value || '',
        radioName: name || '',
        radioChecked: true,
        radioId: id,
      })
  }, [value, name, id, disabled, readonly, onChange])

  return (
    <TouchableOpacity disabled={disabled} style={[styles.container]} onPress={handleChange} {...others}>
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
      width: 18,
      height: 18,
      borderWidth: 1,
      borderRadius: 18,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: getColorStyle(disabled ? TrilogyColor.DISABLED : checked ? TrilogyColor.MAIN : TrilogyColor.NEUTRAL),
    },
    inputRadio: {
      width: 12,
      height: 12,
      borderRadius: 12,
      backgroundColor: getColorStyle(
        disabled && checked
          ? TrilogyColor.DISABLED
          : disabled && !checked
          ? TrilogyColor.DISABLED_FADE
          : checked
          ? TrilogyColor.MAIN
          : TrilogyColor.BACKGROUND,
      ),
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
