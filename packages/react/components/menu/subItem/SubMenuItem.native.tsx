import * as React from "react"
import { View } from "react-native"
import { ComponentName } from "../../enumsComponentsName"
import { SubMenuItem as IProps } from "./SubMenuItemProps"

/**
 * Menu Component
 *  @param children {ReactNode} Menu Children
 */
const SubMenuItem = ({ children, ...others }: IProps): JSX.Element => {
  return <View {...others}>{children}</View>
}

SubMenuItem.displayName = ComponentName.SubMenuItem

export default SubMenuItem
