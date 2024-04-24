import React, { useEffect, useMemo, useState } from "react"
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native"
import { SelectProps } from "./SelectProps"
import { Text, TextLevels } from "../text"
import { Icon, IconName, IconSize } from "../icon"
import { Picker } from "@react-native-picker/picker"
import { getColorStyle, TrilogyColor, TypographyColor } from "../../objects"
import { ComponentName } from "../enumsComponentsName"
import { Modal } from "../modal"

/**
 * Select Component
 * @param id {string} Select id
 * @param name {string} Select name
 * @param selected {string} Selected value
 * @param children {React.ReactNode} Children for Select
 * @param label {string} label for select
 * @param iconName {IconName} icon for left of selector
 * @param placeholder {string} Select Placeholder
 */
const Select = ({
  children,
  name,
  id,
  selected,
  label,
  iconName,
  onChange,
  placeholder,
  disabled,
  ...others
}: SelectProps): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState<string | number>(
    selected || ""
  )
  const [display, setDisplay] = useState<boolean>(false)

  useEffect(() => {
    setSelectedValue(selected || "")
  }, [selected])

  const styles = StyleSheet.create({
    select: {
      width: "100%",
      backgroundColor: getColorStyle(
        disabled ? TrilogyColor.GREY_LIGHT : TrilogyColor.WHITE
      ),
      borderColor: disabled
        ? getColorStyle(TrilogyColor.DISABLED, 1)
        : getColorStyle(TrilogyColor.FONT, 1),
      borderWidth: 1,
      borderRadius: 4,
      zIndex: 3, // works on ios
      overflow: "hidden",
      flexDirection: "row",
      alignItems: "center",
      height: 50,
    },
    iconLeft: {
      left: 10,
      color: getColorStyle(TrilogyColor.MAIN),
      paddingRight: 8,
      paddingLeft: 8,
      marginRight: 25,
    },
    text: {
      fontSize: 16,
      lineHeight: 20,
      color: getColorStyle(
        disabled ? TrilogyColor.DISABLED : TrilogyColor.MAIN
      ),
    },
  })

  const selectedOptionName = useMemo(() => {
    const selectedChild = React.Children.toArray(children).find((child) => {
      return (
        React.isValidElement(child) &&
        (child.props.value === selected || child.props.selected === true)
      )
    })
    if (React.isValidElement(selectedChild))
      return selectedChild.props.children || selectedChild.props.label
    return undefined
  }, [selectedValue, children])

  if (Platform.OS === "ios") {
    return (
      <>
        <TouchableOpacity
          disabled={disabled}
          onPress={() => setDisplay((prev) => !prev)}
          style={styles.select}
        >
          {iconName && (
            <View>
              <Icon
                name={iconName}
                size={IconSize.SMALL}
                color={disabled ? TrilogyColor.NEUTRAL_DARK : TrilogyColor.MAIN}
                style={styles.iconLeft}
              />
            </View>
          )}
          <View style={{ width: "75%" }}>
            {label && (
              <Text
                level={selectedOptionName && TextLevels.THREE}
                typo={[TypographyColor.TEXT_GREY_DARK]}
                style={{
                  fontSize: selectedOptionName ? undefined : 16,
                  lineHeight: 20,
                }}
              >
                {label}
              </Text>
            )}
            {selectedOptionName && (
              <Text style={{ ...styles.text }} numberOfLines={1}>
                {selectedOptionName}
              </Text>
            )}
          </View>

          <View
            style={{
              marginLeft: "auto",
              paddingRight: 10,
            }}
          >
            <Icon
              name={IconName.ARROW_DOWN}
              size={IconSize.SMALL}
              color={disabled ? TrilogyColor.NEUTRAL_DARK : TrilogyColor.MAIN}
            />
          </View>
        </TouchableOpacity>
        <Modal
          active={display}
          onClose={() => setDisplay(false)}
          bottom
          closeIcon
          swipable={false}
        >
          <Picker
            itemStyle={{ color: getColorStyle(TrilogyColor.MAIN) }}
            style={{ width: "100%" }}
            nativeID={`${`${id}_${name}`}`}
            selectedValue={selectedValue}
            onValueChange={(itemValue: number | string) => {
              if (onChange) onChange(itemValue)
              setSelectedValue(itemValue)
              setDisplay(false)
            }}
            {...others}
          >
            {children}
          </Picker>
        </Modal>
      </>
    )
  }

  return (
    <View style={styles.select}>
      <Picker
        placeholder={placeholder}
        selectedValue={selectedValue}
        style={{ width: "100%", height: "100%" }}
        onValueChange={(itemValue: number | string) => {
          if (onChange) {
            onChange(itemValue)
          }
          setSelectedValue(itemValue)
          setDisplay(false)
        }}
        mode={"dialog"}
      >
        {children}
      </Picker>
    </View>
  )
}

Select.displayName = ComponentName.Select

export default Select
