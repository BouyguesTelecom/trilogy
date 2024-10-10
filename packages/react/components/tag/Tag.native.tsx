import React, { useEffect, useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { TagClickEvent, TagProps } from "./TagProps"
import { Icon, IconName, IconSize } from "@/components/icon"
import { getColorStyle, TrilogyColor } from "@/objects/facets/Color"
import { ComponentName } from "@/components/enumsComponentsName"
import { getStatusStyle } from "@/objects/facets/Status"

/**
 * Tag Component
 * @param children {ReactNode} Add childrens for tag
 * @param variant {TagVariant} Available tag variants
 * @param deletable {boolean} Adding delete icon
 * @param onClick {Function} OnClick Event
 * @param inverted
 * @param iconName
 * @param small
 * @param others
 */
const Tag = ({
  children,
  variant,
  deletable,
  onClick,
  inverted,
  iconName,
  small,
  testId,
  ...others
}: TagProps): JSX.Element => {
  const [display, setDisplay] = useState<boolean>(deletable || false)

  useEffect(() => {
    setDisplay(deletable || false)
  }, [deletable])

  const textColor = inverted
    ? getColorStyle(variant as TrilogyColor)
    : getColorStyle(TrilogyColor.MAIN)

  const backgroundColor = variant && getStatusStyle(variant).backgroundColor

  const styles = StyleSheet.create({
    tag: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "baseline",
      borderRadius: 15,
      paddingHorizontal: 8,
      paddingVertical: 4,
      backgroundColor:
        (inverted && getColorStyle(TrilogyColor.BACKGROUND)) ||
        (variant && (backgroundColor as TrilogyColor)) ||
        getColorStyle(TrilogyColor.NEUTRAL_FADE),
    },
    text: {
      alignSelf: "center",
      alignItems: "center",
      fontWeight: "500",
      justifyContent: "center",
      color: textColor,
      fontSize: small ? 12 : 16,
    },
    icon: {
      marginTop: 1,
    },

    iconLeft: {
      marginRight: small ? 4 : 8,
    },

    button: {
      flexDirection: "row",
    },
  })

  const onClickHandle = (e: TagClickEvent) => {
    setDisplay(!display)
    if (onClick) {
      onClick(e)
    }
  }

  // Deletable tag
  if (deletable && display) {
    return (
      <View style={styles.tag} {...others}>
        <Text style={styles.text}>{children}</Text>
        <Icon
          style={styles.icon}
          size={IconSize.SMALL}
          color={textColor}
          name={IconName.TIMES}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onClick={(e: any) => onClickHandle(e)}
        />
      </View>
    )
  }

  if (!deletable && !display) {
    if (onClick) {
      return (
        <View style={styles.tag} {...others}>
          <TouchableOpacity style={styles.button} onPress={(e) => onClick(e)}>
            {iconName && (
              <Icon
                size={small ? IconSize.SMALLER : IconSize.SMALL}
                style={styles.iconLeft}
                name={iconName}
              />
            )}
            <Text style={styles.text}>{children}</Text>
          </TouchableOpacity>
        </View>
      )
    }
    return (
      <View style={styles.tag} {...others}>
        {iconName && (
          <Icon
            size={small ? IconSize.SMALLER : IconSize.SMALL}
            style={styles.iconLeft}
            name={iconName}
            testId={`${testId}-icon`}
          />
        )}
        <Text style={styles.text}>{children}</Text>
      </View>
    )
  }

  return <View />
}

Tag.displayName = ComponentName.Tag

export default Tag
