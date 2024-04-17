import * as React from "react"
import { StyleSheet } from "react-native"
import { InfoBlockHeaderProps } from "./InfoBlockHeaderProps"
import { View } from "../../view"
import { Title, TitleLevels } from "../../title"
import { IconName } from "../../icon/IconNameEnum"
import { TrilogyColor } from "../../../objects/facets/Color"
import { Icon, IconSize } from "../../icon"
import { Text } from "../../text"
import { ComponentName } from "../../enumsComponentsName"

/**
 * Info Block Header
 * @param children {string} Header title content
 * @param status {InfoBlockStatus} Icon status for header => SUCCESS|WARNING|ERROR
 * @param customIcon {IconName} Custom Icon for Info Block Header, if CustomIcon status props wont work */
const InfoBlockHeader = ({
  children,
  status,
  customIcon,
  ...others
}: InfoBlockHeaderProps): JSX.Element => {
  const styles = StyleSheet.create({
    infoBlock: {
      width: "100%",
      paddingBottom: 6,
    },
    icon: {
      paddingBottom: 6,
      alignSelf: "center",
    },
    title: {
      textAlign: "center",
      alignSelf: "center",
    },
  })

  return (
    <View style={styles.infoBlock} {...others}>
      {customIcon ? (
        <Text style={styles.icon}>{customIcon}</Text>
      ) : (
        <Text style={styles.icon}>
          <Icon
            name={
              (status === "warning" && IconName.EXCLAMATION_CIRCLE) ||
              (status === "success" && IconName.CHECK_CIRCLE) ||
              (status === "error" && IconName.TIMES) ||
              IconName.INFOS_CIRCLE
            }
            size={IconSize.SMALL}
            color={
              (status && status === "success" && TrilogyColor.SUCCESS) ||
              (status && status === "warning" && TrilogyColor.WARNING) ||
              (status && status === "error" && TrilogyColor.ERROR) ||
              TrilogyColor.MAIN
            }
          />
        </Text>
      )}

      <Title style={styles.title} level={TitleLevels.THREE}>
        {children}
      </Title>
    </View>
  )
}

InfoBlockHeader.displayName = ComponentName.InfoBlockHeader

export default InfoBlockHeader
