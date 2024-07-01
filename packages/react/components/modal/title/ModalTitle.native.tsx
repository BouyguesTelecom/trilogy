import * as React from "react"
import { ModalTitleProps } from "./ModalTitleProps"
import { ComponentName } from "@/components/enumsComponentsName"
import { View } from "@/components/view"
import { Icon } from "@/components/icon"
import { Title, TitleLevels } from "@/components/title"

const styles = {
  padding: 8,
  position: "sticky",
  top: "0px",
  width: "100%",

}

const ModalTitle = ({ children, iconName, iconColor, ...others }: ModalTitleProps): JSX.Element => {
  return <View style={styles} {...others}>
    { typeof children === "string" && (
    <Title level={TitleLevels.THREE}>
      {iconName && <Icon
        color={iconColor}
        size={"large"}
        name={iconName}
      /> }
      {children}
    </Title>
      ) || (
      children
      )
  }</View>
}

ModalTitle.displayName = ComponentName.ModalTitle

export default ModalTitle
