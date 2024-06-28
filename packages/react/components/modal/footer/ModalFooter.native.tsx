import * as React from "react"
import { ModalFooterProps } from "./ModalFooterProps"
import {ComponentName} from "@/components/enumsComponentsName"
import { View } from "@/components/view"
import {Title, TitleLevels} from "@/components/title"

const styles = {
  position: "sticky",
  bottom: 0,
  width:"100%",
  textAlign:'right',
  padding: 16,
}

const ModalFooter = ({ children, ...others }: ModalFooterProps): JSX.Element => {
  return <View {...others} style={styles}>
    { typeof children === "string" && (
    <Title level={TitleLevels.THREE}  style={{width:"100%", textAlign:'center'}}>{children}</Title>
    ) || (
    children
    )}</View>
}

ModalFooter.displayName = ComponentName.ModalFooter

export default ModalFooter
