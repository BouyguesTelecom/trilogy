import React, { useContext } from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { TimelineContentProps } from "./TimelineContentProps"
import { Text, TextLevels } from "@/components/text"
import { Link } from "@/components/link"
import { TypographyColor } from "@/objects"
import { TimelineItemContext } from "@/components/timeline/item/TimelineItem.native"
import { AutoLayout } from "@/components/autolayout"
import { ComponentName } from "@/components/enumsComponentsName"

/**
 * TimelineContent Native Component
 * @param children {ReactNode} Text child
 * @param content {string} Text content
 * @param contentLink {string} Text for link
 * @param heading {string} Text heading
 * @param link {string} Url link
 * @param Onclick {string} Provide event onCLick
 */
const TimelineContent = ({
  content,
  contentLink,
  heading,
  link,
  onClick,
  children,
}: TimelineContentProps): JSX.Element => {
  const timelineContextValues = useContext(TimelineItemContext)

  const styles = StyleSheet.create({
    container: {
      flex: 6,
      marginBottom: 8,
      marginLeft: 4,
    },
    heading: {
      marginBottom: 4,
      marginTop: 8,
    },
    content: {
      fontWeight: timelineContextValues.active ? "600" : "400",
      marginBottom: 4,
    },
    link: {
      marginTop: 6,
    },
  })

  return children ? (
    <View style={styles.container}>
      <AutoLayout>{children}</AutoLayout>
    </View>
  ) : (
    <View style={styles.container}>
      {!!heading && (
        <Text
          level={TextLevels.THREE}
          style={styles.heading}
          typo={TypographyColor.TEXT_MAIN}
        >
          {heading}
        </Text>
      )}
      {!!content && (
        <Text level={TextLevels.TWO} style={styles.content}>
          {content}
        </Text>
      )}
      {(link || onClick) && (
        <TouchableOpacity onPress={(e?) => onClick?.(e)} testID='click-id'>
          <View style={styles.link}>
            <Link to={link}>{contentLink || link}</Link>
          </View>
        </TouchableOpacity>
      )}
    </View>
  )
}

TimelineContent.displayName = ComponentName.TimelineContent

export default TimelineContent
