import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { CheckboxTileProps } from './CheckboxTileProps'
import { Text, TextLevels } from '@/components/text'
import { ComponentName } from '@/components/enumsComponentsName'
import shortid from "shortid"
import { Icon, IconName, IconSize } from "@/components/icon"
import { getColorStyle, TrilogyColor, TypographyAlign, TypographyBold } from "@/objects"
import { View } from "@/components/view"

const CheckboxTile = ({
                        disabled,
                        checked,
                        readonly,
                        id = shortid.generate(),
                        label,
                        onChange,
                        name,
                        value,
                        description,
                        icon,
                        horizontal,
                        ...others }: CheckboxTileProps): JSX.Element => {

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
      marginRight: 10,
      marginLeft: 0,
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
      padding: _checked ? 3 : 4,
      paddingBottom: _checked ? 7 : 8,
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
      paddingVertical: _checked ? 17 : 18,
      paddingHorizontal: _checked ? 5 : 6,
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
          <View
            style={{
              width: '10%',
              height: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
            }}
          >
            {icon && (
              <View>
                <Icon
                  size={IconSize.SMALL}
                  name={icon}
                  color={disabled ? TrilogyColor.DISABLED : TrilogyColor.MAIN}
                />
              </View>
            )}
          </View>
          <View
            style={{
              width: '78%',
              flexDirection: 'row',
              alignSelf: 'stretch',
              flexWrap: 'wrap',
              height: 'auto',
            }}
          >
            <View>
              {label && typeof label.valueOf() === 'string' && (
                <Text style={styles.label} level={TextLevels.TWO} typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}>
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
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingRight: 10,
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
      onPress={() => handleClick()}
      {...others}
    >
      <TouchableOpacity
        style={[{ alignSelf: 'flex-end', marginTop: 10 }, styles.checkBox]}
        disabled={disabled}
        testID={id}
        onPressIn={() => handleClick()}
      >
        {_checked && <Icon size={IconSize.SMALLER} color={TrilogyColor.BACKGROUND} name={IconName.CHECK} />}
      </TouchableOpacity>
      <View style={{ width: '70%' }}>
        {icon && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 5,
            }}
          >
            <Icon
              size={IconSize.MEDIUM}
              color={disabled ? TrilogyColor.DISABLED : TrilogyColor.MAIN}
              name={icon}
            />
          </View>
        )}
        {label && typeof label.valueOf() === 'string' && (
          <Text
            level={TextLevels.TWO}
            typo={[TypographyBold.TEXT_WEIGHT_SEMIBOLD, TypographyAlign.TEXT_CENTERED]}
            style={styles.label}
          >
            {String(label)}
          </Text>
        )}
        {description && typeof description.valueOf() === 'string' && (
          <Text level={TextLevels.THREE} typo={[TypographyBold.TEXT_WEIGHT_SEMIBOLD, TypographyAlign.TEXT_CENTERED]}>
            {String(description)}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  )
}

CheckboxTile.displayName = ComponentName.CheckboxTiles

export default CheckboxTile
