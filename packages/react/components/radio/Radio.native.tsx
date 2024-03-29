import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { RadioProps } from './RadioProps'
import shortid from 'shortid'
import { getColorStyle, TrilogyColor, TypographyBold } from '../../objects'
import { Icon, IconSize } from '../icon'
import { Text, TextLevels } from '../text'
import { View } from '../view'
import { ComponentName } from '../enumsComponentsName'

/**
 * Radio Native Component
 * @param checked {boolean} Checked Checkbox
 * @param disabled {boolean} Disabled
 * @param readOnly {boolean} readonly Checkbox
 * @param id {string} Id for button, by default id is generate
 * @param label {string} Label for Checkbox
 * @param onClick {ClickEvent}
 * @param onChange {ChangeEvent}
 * @param name {string} Name for checkbox
 * @param value {string} Value for checkbox
 * @param inverted {boolean} Inveted Checkbox color
 * @param spaced {boolean} Spaced Label
 * @param reversed {boolean} Reversed Radio Input with Label
 * @param iconTile {IconName} Icon for Radio
 * @param narrow {boolean} Apply narrow
 * @param children {React.ReactNode} If Children is provided, don't use label / Icon / Description
 */
const Radio = ({
  id = shortid.generate(),
  checked,
  name,
  onClick,
  onChange,
  disabled,
  readonly,
  label,
  inverted,
  value,
  spaced,
  reversed,
  horizontalTile,
  tile,
  description,
  iconTile,
  children,
  narrow,
}: RadioProps): JSX.Element => {
  const [_checked, setChecked] = useState<boolean>(checked || false)

  useEffect(() => {
    setChecked(checked || false)
  }, [checked])

  const styles = StyleSheet.create({
    container: {
      flexDirection: reversed ? 'row-reverse' : 'row',
      paddingBottom: 5,
      justifyContent: spaced ? 'space-between' : 'flex-start',
    },
    radio: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: !inverted ? getColorStyle(TrilogyColor.TERTIARY) : getColorStyle(TrilogyColor.WHITE),
      borderWidth: 0.6,
      width: 19,
      height: 19,
      borderRadius: 10,
      marginRight: (!spaced && reversed && 0) || (spaced && reversed && 0) || (!spaced && !reversed && 10) || 0,
      marginLeft: !spaced && reversed ? 10 : 0,
    },
    icon: {
      position: 'absolute',
      left: 2,
      borderRadius: 30,
      width: 13,
      height: 13,
      backgroundColor: !inverted ? getColorStyle(TrilogyColor.INFO) : getColorStyle(TrilogyColor.WHITE),
    },
    label: {
      color: (inverted && getColorStyle(TrilogyColor.WHITE)) || getColorStyle(TrilogyColor.TERTIARY),
    },
    tile: {
      paddingBottom: 8,
      maxWidth: 140,
      width: 100,
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
      width: narrow ? 'auto' : '100%',
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (value: any) => {
    if (!readonly) {
      setChecked(value)
      if (onClick) {
        onClick({
          radioId: id,
          radioValue: value,
          radioName: name || '',
          radioChecked: !_checked,
        })
      }
      if (onChange) {
        onChange({
          radioId: id,
          radioValue: value,
          radioName: name || '',
          radioChecked: !_checked,
        })
      }
    }
  }

  if (horizontalTile) {
    return (
      <TouchableOpacity style={styles.horizontalTile} onPress={() => handleClick(value || false)}>
        <View style={{ flexDirection: 'row' }}>
          {children ? (
            <View
              style={{
                flexDirection: 'row',
                width: '88%',
                height: 'auto',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginLeft: 10,
              }}
            >
              {children}
            </View>
          ) : (
            <>
              <View
                style={{
                  width: iconTile ? '12%' : '6%',
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
                  width: iconTile ? '76%' : '82%',
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
                  ) : (
                    description
                  )}
                </View>
              </View>
            </>
          )}
          <View
            style={{
              width: '10%',
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingRight: 10,
            }}
          >
            <TouchableOpacity
              style={styles.radio}
              disabled={disabled}
              testID={id}
              onPressIn={() => handleClick(value || false)}
            >
              {_checked && !disabled && <View style={styles.icon} />}
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  if (tile) {
    return (
      <TouchableOpacity
        style={horizontalTile ? styles.horizontalTile : styles.tile}
        onPress={() => handleClick(value || false)}
      >
        <TouchableOpacity
          style={[{ alignSelf: 'flex-end', marginTop: 10 }, styles.radio]}
          disabled={disabled}
          testID={id}
          onPressIn={() => handleClick(value || false)}
        >
          {_checked && !disabled && <View style={styles.icon} />}
        </TouchableOpacity>
        <View style={{ width: '70%', alignItems: 'center' }}>
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
          {description && typeof description.valueOf() === 'string' ? <Text>{String(description)}</Text> : description}
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => handleClick(value || false)}>
      <TouchableOpacity
        style={styles.radio}
        disabled={disabled}
        testID={id}
        onPress={() => handleClick(value || false)}
      >
        {_checked && <View style={styles.icon} />}
      </TouchableOpacity>
      {label && typeof label.valueOf() === 'string' ? <Text style={styles.label}>{String(label)}</Text> : label}
    </TouchableOpacity>
  )
}

Radio.displayName = ComponentName.Radio

export default Radio
