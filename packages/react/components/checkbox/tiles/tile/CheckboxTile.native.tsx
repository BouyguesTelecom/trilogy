import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName, IconSize } from '@/components/icon'
import { SpacerSize } from '@/components/spacer'
import { Text, TextLevels } from '@/components/text'
import { View } from '@/components/view'
import { getColorStyle, TrilogyColor, TypographyAlign, TypographyBold } from '@/objects'
import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import shortid from 'shortid'
import { CheckboxTileProps } from './CheckboxTileProps'

const CheckboxTile = ({
  disabled,
  checked,
  readonly,
  id = shortid.generate(),
  label,
  onChange,
  name,
  description,
  icon,
  horizontal,
  ...others
}: CheckboxTileProps): JSX.Element => {
  const [_checked, setChecked] = useState<boolean>(checked || false)

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingBottom: 5,
      justifyContent: 'flex-start',
    },
    checkBox: {
      alignItems: 'center',
      justifyContent: horizontal ? 'center' : 'flex-start',
      borderColor: getColorStyle(TrilogyColor.FONT),
      borderWidth: 0.6,
      width: 19,
      height: 19,
      borderRadius: 4,
      backgroundColor:
        (disabled && getColorStyle(TrilogyColor.DISABLED_FADE)) ||
        (_checked && getColorStyle(TrilogyColor.MAIN)) ||
        'transparent',
    },
    label: {
      color:
        (disabled && getColorStyle(TrilogyColor.DISABLED)) ||
        (_checked && getColorStyle(TrilogyColor.MAIN)) ||
        getColorStyle(TrilogyColor.MAIN),
    },
    tile: {
      padding: _checked ? SpacerSize.FOUR - 1 : SpacerSize.FOUR,
      maxWidth: 140,
      borderWidth: (_checked && 2) || 1,
      width: 126,
      borderColor:
        (disabled && getColorStyle(TrilogyColor.DISABLED_FADE)) ||
        (_checked && getColorStyle(TrilogyColor.MAIN)) ||
        getColorStyle(TrilogyColor.NEUTRAL),
      borderRadius: 6,
      textAlign: 'center',
      alignItems: 'center',
      backgroundColor: disabled ? getColorStyle(TrilogyColor.DISABLED_FADE) : 'transparent',
    },
    tileDescription: {
      color: disabled ? getColorStyle(TrilogyColor.DISABLED_FADE) : getColorStyle(TrilogyColor.MAIN),
      alignSelf: horizontal ? 'flex-start' : 'center',
    },
    horizontal: {
      padding: _checked ? SpacerSize.FOUR - 1 : SpacerSize.FOUR,
      width: '100%',
      height: 'auto',
      borderWidth: (_checked && 2) || 1,
      borderColor:
        (disabled && getColorStyle(TrilogyColor.DISABLED_FADE)) ||
        (_checked && getColorStyle(TrilogyColor.MAIN)) ||
        getColorStyle(TrilogyColor.MAIN_FADE),
      borderRadius: 6,
      backgroundColor: disabled ? getColorStyle(TrilogyColor.DISABLED_FADE) : 'transparent',
    },
  })

  const handleClick = () => {
    if (!readonly) {
      setChecked(!_checked)
      if (onChange) {
        onChange({
          checkboxId: id,
          checkboxValue: '',
          checkboxName: name || '',
          checkboxChecked: !_checked,
        })
      }
    }
  }

  if (horizontal) {
    return (
      <TouchableOpacity disabled={disabled} style={styles.horizontal} onPress={() => handleClick()}>
        <View style={{ flexDirection: 'row' }}>
          {icon && (
            <View
              style={{
                width: '10%',
                height: 'auto',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View>
                <Icon size={IconSize.SMALL} name={icon} color={disabled ? TrilogyColor.DISABLED : TrilogyColor.MAIN} />
              </View>
            </View>
          )}

          <View
            style={{
              width: icon ? '78%' : '88%',
              flexDirection: 'row',
              alignSelf: 'stretch',
              flexWrap: 'wrap',
              height: 'auto',
            }}
          >
            <View style={{ gap: SpacerSize.ONE }}>
              {label && typeof label.valueOf() === 'string' && (
                <Text style={styles.label} level={TextLevels.ONE} typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}>
                  {String(label)}
                </Text>
              )}
              {description && typeof description.valueOf() === 'string' ? (
                <Text level={TextLevels.TWO} style={styles.tileDescription}>
                  {String(description)}
                </Text>
              ) : (
                description
              )}
            </View>
          </View>
          <View
            style={{
              width: '12%',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            <TouchableOpacity style={styles.checkBox} disabled={disabled} testID={id} onPressIn={() => handleClick()}>
              {_checked && <Icon size={IconSize.SMALLER} color={TrilogyColor.BACKGROUND} name={IconName.CHECK} />}
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      style={horizontal ? styles.horizontal : styles.tile}
      onPress={handleClick}
      {...others}
    >
      <View style={{ gap: SpacerSize.TWO }}>
        <TouchableOpacity
          style={[{ alignSelf: 'flex-end' }, styles.checkBox]}
          disabled={disabled}
          testID={id}
          onPressIn={handleClick}
        >
          {_checked && <Icon size={IconSize.SMALLER} color={TrilogyColor.BACKGROUND} name={IconName.CHECK} />}
        </TouchableOpacity>
        {icon && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon size={IconSize.SMALL} color={disabled ? TrilogyColor.DISABLED : TrilogyColor.MAIN} name={icon} />
          </View>
        )}
        {label && typeof label.valueOf() === 'string' && (
          <Text
            level={TextLevels.ONE}
            typo={[TypographyBold.TEXT_WEIGHT_SEMIBOLD, TypographyAlign.TEXT_CENTERED]}
            style={[styles.label]}
          >
            {String(label)}
          </Text>
        )}
        {description && typeof description.valueOf() === 'string' && (
          <Text level={TextLevels.TWO} typo={[TypographyAlign.TEXT_CENTERED]}>
            {String(description)}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  )
}

CheckboxTile.displayName = ComponentName.CheckboxTiles

export default CheckboxTile
