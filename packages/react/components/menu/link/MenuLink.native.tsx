import * as React from "react"
import { MenuLinkProps } from "./MenuLinkProps"
import { Linking, StyleSheet, TouchableOpacity } from "react-native"
import { Icon, IconColor, IconName, IconSize } from "../../icon"
import { Title, TitleLevels } from "../../title"
import { ComponentName } from "../../enumsComponentsName"

/**
 * Menu Link Component
 * @param children {string} Menu Link Text Content
 * @param arrow {boolean} Adding Right Arrow For Menu Link
 * @param onClick {Function} onClick Event
 */
const MenuLink = ({
  children,
  arrow,
  onClick,
  to,
  ...others
}: MenuLinkProps): JSX.Element => {
  const styles = StyleSheet.create({
    menuLink: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    menuIcon: {
      justifyContent: "center",
      alignItems: "center",
    },
  })
  return (
    <TouchableOpacity
      style={styles.menuLink}
      onPress={(e) => {
        if (to) {
          Linking.openURL(to || "")
        }
        if (onClick) {
          onClick(e)
        }
      }}
      {...others}
    >
      <Title level={TitleLevels.THREE}>{children}</Title>
      {arrow && (
        <Icon
          style={styles.menuIcon}
          color={IconColor.GREY}
          size={IconSize.SMALL}
          name={IconName.ARROW_RIGHT}
        />
      )}
    </TouchableOpacity>
  )
}

MenuLink.displayName = ComponentName.MenuLink

export default MenuLink
