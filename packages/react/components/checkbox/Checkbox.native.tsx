import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { IconName } from '../icon/IconNameEnum'
import { CheckboxProps } from './CheckboxProps'
import shortid from 'shortid'
import { getColorStyle, TrilogyColor } from '../../objects/facets/Color'
import { Text, TextLevels } from '../text'
import { View } from '../view'
import { Icon, IconSize } from '../icon'
import { TypographyBold } from '../../objects'
import { ComponentName } from '../enumsComponentsName'

/**
 * Checkbox Native Component
 * @param checked {boolean} Checked Checkbox
 * @param disabled {boolean} Disabled
 * @param readonly {boolean} readonly Checkbox
 * @param id {string} Id for button, by default id is generate
 * @param label {string} Label for Checkbox
 * @param onClick {ClickEvent}
 * @param onChange {ChangeEvent}
 * @param name {string} Name for checkbox
 * @param inverted {boolean} Inveted Checkbox color
 * @param spaced {boolean} Spaced Label
 * @param reversed {boolean} Reversed Checkbox Input with Label
 */
const Checkbox = ({
  id = shortid.generate(),
  checked,
  name,
  onClick,
  onChange,
  disabled,
  readonly,
  label,
  inverted,
  spaced,
  reversed,
  tile,
  description,
  iconTile,
  horizontalTile,
}: CheckboxProps): JSX.Element => {
  const [_checked, setChecked] = useState(checked || false)

  useEffect(() => {
    setChecked(checked || false)
  }, [checked])

  const styles = StyleSheet.create({
    container: {
      flexDirection: reversed ? 'row-reverse' : 'row',
      justifyContent: spaced ? 'space-between' : 'flex-start',
    },
    checkBox: {
      alignItems: 'center',
      justifyContent: horizontalTile ? 'center' : 'flex-start',
      borderColor: !inverted ? getColorStyle(TrilogyColor.TERTIARY) : getColorStyle(TrilogyColor.WHITE),
      borderWidth: 0.5,
      width: 19,
      height: 19,
      borderRadius: 4,
      marginRight: (!spaced && reversed && 0) || (spaced && reversed && 0) || (!spaced && !reversed && 10) || 0,
      marginLeft: !spaced && reversed ? 10 : 0,
      backgroundColor:
        (tile && disabled && '#4f4f4f') || (_checked && getColorStyle(TrilogyColor.SECONDARY)) || 'transparent',
    },
    label: {
      color: inverted ? getColorStyle(TrilogyColor.WHITE) : getColorStyle(TrilogyColor.TERTIARY),
      alignSelf: 'center',
    },
    tile: {
      paddingBottom: 8,
      maxWidth: 140,
      borderWidth: 2,
      borderColor:
        (disabled && '#e1e1e1') ||
        (_checked && getColorStyle(TrilogyColor.SECONDARY)) ||
        getColorStyle(TrilogyColor.GREY),
      borderRadius: 6,
      textAlign: 'center',
      alignItems: 'center',
      backgroundColor: disabled ? '#e1e1e1' : 'transparent',
    },
    tileLabel: {
      color: getColorStyle(TrilogyColor.TERTIARY),
      alignSelf: horizontalTile ? 'flex-start' : 'center',
    },
    tileDescription: {
      color: getColorStyle(TrilogyColor.TERTIARY),
      alignSelf: horizontalTile ? 'flex-start' : 'center',
    },
    horizontalTile: {
      paddingVertical: 16,
      width: '100%',
      height: 'auto',
      borderWidth: 2,
      borderColor:
        (disabled && '#e1e1e1') ||
        (_checked && getColorStyle(TrilogyColor.SECONDARY)) ||
        getColorStyle(TrilogyColor.GREY),
      borderRadius: 6,
      backgroundColor: disabled ? '#e1e1e1' : 'transparent',
    },
  })

  const handleClick = () => {
    if (!readonly) {
      setChecked(!_checked)
      if (onClick) {
        onClick({
          checkboxId: id,
          checkboxValue: '',
          checkboxName: name || '',
          checkboxChecked: !_checked,
        })
      }
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

  if (horizontalTile) {
    return (
      <TouchableOpacity style={styles.horizontalTile} onPress={() => handleClick()}>
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
            {iconTile && (
              <View>
                <Icon size={IconSize.SMALL} name={iconTile} />
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
                <Text level={TextLevels.ONE} typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}>
                  {String(label)}
                </Text>
              )}
              {description && typeof description.valueOf() === 'string' ? (
                <Text style={styles.tileDescription}>{String(description)}</Text>
              ) : description}
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
              {_checked && <Icon size={IconSize.SMALLER} color={TrilogyColor.WHITE} name={IconName.CHECK} />}
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  if (tile) {
    return (
      <TouchableOpacity style={horizontalTile ? styles.horizontalTile : styles.tile} onPress={() => handleClick()}>
        <TouchableOpacity
          style={[{ alignSelf: 'flex-end', marginTop: 10 }, styles.checkBox]}
          disabled={disabled}
          testID={id}
          onPressIn={() => handleClick()}
        >
          {_checked && <Icon size={IconSize.SMALLER} color={TrilogyColor.WHITE} name={IconName.CHECK} />}
        </TouchableOpacity>
        <View style={{ width: '70%' }}>
          {iconTile && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 5,
              }}
            >
              <Icon size={IconSize.SMALL} name={iconTile} />
            </View>
          )}
          {label && typeof label.valueOf() === 'string' && (
            <Text level={TextLevels.ONE} typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD} style={styles.label}>
              {String(label)}
            </Text>
          )}
          {description && typeof description.valueOf() === 'string' && <Text>{String(description)}</Text>}
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => handleClick()}>
      <TouchableOpacity style={styles.checkBox} disabled={disabled} testID={id} onPressIn={() => handleClick()}>
        {_checked && <Icon size={IconSize.SMALLER} color={TrilogyColor.WHITE} name={IconName.CHECK} />}
      </TouchableOpacity>
      {label && typeof label.valueOf() === 'string' ? <Text style={styles.label}>{String(label)}</Text> : label}
    </TouchableOpacity>
  )
}

Checkbox.displayName = ComponentName.Checkbox

export default Checkbox
