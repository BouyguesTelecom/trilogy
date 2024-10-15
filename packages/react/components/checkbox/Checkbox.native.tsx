import React, { useEffect, useState } from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { IconName } from "@/components/icon/IconNameEnum"
import { CheckboxProps } from "./CheckboxProps"
import shortid from "shortid"
import { getColorStyle, TrilogyColor } from "@/objects/facets/Color"
import { Text, TextLevels } from "@/components/text"
import { View } from "@/components/view"
import { Icon, IconSize } from "@/components/icon"
import { TypographyAlign, TypographyBold } from "@/objects"
import { ComponentName } from "@/components/enumsComponentsName"

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
                    tile,
                    description,
                    iconTile,
                    horizontalTile,
                    testId
                  }: CheckboxProps): JSX.Element => {
  const [_checked, setChecked] = useState(checked || false)

  useEffect(() => {
    setChecked(checked || false)
  }, [checked])

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      paddingBottom: 5,
      justifyContent: "flex-start",
    },
    checkBox: {
      alignItems: "center",
      justifyContent: horizontalTile ? "center" : "flex-start",
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
        "transparent",
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
      textAlign: "center",
      alignItems: "center",
      backgroundColor: disabled
        ? getColorStyle(TrilogyColor.DISABLED_FADE)
        : "transparent",
    },
    tileDescription: {
      color: disabled
        ? getColorStyle(TrilogyColor.DISABLED_FADE)
        : getColorStyle(TrilogyColor.MAIN),
      alignSelf: horizontalTile ? "flex-start" : "center",
    },
    horizontalTile: {
      paddingVertical: _checked ? 17 : 18,
      paddingHorizontal: _checked ? 5 : 6,
      width: "100%",
      height: "auto",
      borderWidth: (_checked && 2) || 1,
      borderColor:
        (disabled && getColorStyle(TrilogyColor.DISABLED_FADE)) ||
        (_checked && getColorStyle(TrilogyColor.MAIN)) ||
        getColorStyle(TrilogyColor.MAIN_FADE),
      borderRadius: 6,
      backgroundColor: disabled
        ? getColorStyle(TrilogyColor.DISABLED_FADE)
        : "transparent",
    },
  })

  const handleClick = () => {
    if (!readonly) {
      setChecked(!_checked)
      if (onClick) {
        onClick({
          checkboxId: id,
          checkboxValue: "",
          checkboxName: name || "",
          checkboxChecked: !_checked,
        })
      }
      if (onChange) {
        onChange({
          checkboxId: id,
          checkboxValue: "",
          checkboxName: name || "",
          checkboxChecked: !_checked,
        })
      }
    }
  }

  if (horizontalTile) {
    return (
      <TouchableOpacity
        testID={testId}
        disabled={disabled}
        style={styles.horizontalTile}
        onPress={() => handleClick()}
      >
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              width: "10%",
              height: "auto",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            {iconTile && (
              <View>
                <Icon
                  size={IconSize.SMALL}
                  name={iconTile}
                  color={disabled ? TrilogyColor.DISABLED : TrilogyColor.MAIN}
                />
              </View>
            )}
          </View>
          <View
            style={{
              width: "78%",
              flexDirection: "row",
              alignSelf: "stretch",
              flexWrap: "wrap",
              height: "auto",
            }}
          >
            <View>
              {label && typeof label.valueOf() === "string" && (
                <Text
                  style={styles.label}
                  level={TextLevels.TWO}
                  typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}
                >
                  {String(label)}
                </Text>
              )}
              {description && typeof description.valueOf() === "string" ? (
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
              width: "12%",
              alignItems: "flex-end",
              justifyContent: "center",
              paddingRight: 10,
            }}
          >
            <TouchableOpacity
              style={styles.checkBox}
              disabled={disabled}
              testID={id}
              onPressIn={() => handleClick()}
            >
              {_checked && (
                <Icon
                  size={IconSize.SMALLER}
                  color={TrilogyColor.BACKGROUND}
                  name={IconName.CHECK}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  if (tile) {
    return (
      <TouchableOpacity
        testID={testId}
        disabled={disabled}
        style={horizontalTile ? styles.horizontalTile : styles.tile}
        onPress={() => handleClick()}
      >
        <TouchableOpacity
          style={[{ alignSelf: "flex-end", marginTop: 10 }, styles.checkBox]}
          disabled={disabled}
          testID={id}
          onPressIn={() => handleClick()}
        >
          {_checked && (
            <Icon
              size={IconSize.SMALLER}
              color={TrilogyColor.BACKGROUND}
              name={IconName.CHECK}
            />
          )}
        </TouchableOpacity>
        <View style={{ width: "70%" }}>
          {iconTile && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 5,
              }}
            >
              <Icon
                size={IconSize.MEDIUM}
                color={disabled ? TrilogyColor.DISABLED : TrilogyColor.MAIN}
                name={iconTile}
              />
            </View>
          )}
          {label && typeof label.valueOf() === "string" && (
            <Text
              level={TextLevels.TWO}
              typo={[
                TypographyBold.TEXT_WEIGHT_SEMIBOLD,
                TypographyAlign.TEXT_CENTERED,
              ]}
              style={styles.label}
            >
              {String(label)}
            </Text>
          )}
          {description && typeof description.valueOf() === "string" && (
            <Text
              level={TextLevels.THREE}
              typo={[
                TypographyBold.TEXT_WEIGHT_SEMIBOLD,
                TypographyAlign.TEXT_CENTERED,
              ]}
            >
              {String(description)}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity
      testID={testId}
      disabled={disabled}
      style={styles.container}
      onPress={() => handleClick()}
    >
      <TouchableOpacity
        style={styles.checkBox}
        disabled={disabled}
        testID={id}
        onPressIn={() => handleClick()}
      >
        {_checked && (
          <Icon
            size={IconSize.SMALLER}
            color={TrilogyColor.BACKGROUND}
            name={IconName.CHECK}
          />
        )}
      </TouchableOpacity>
      {label && typeof label.valueOf() === "string" ? (
        <Text style={styles.label}>{String(label)}</Text>
      ) : (
        label
      )}
    </TouchableOpacity>
  )
}

Checkbox.displayName = ComponentName.Checkbox

export default Checkbox
