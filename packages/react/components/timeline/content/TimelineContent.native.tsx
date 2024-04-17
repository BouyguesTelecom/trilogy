import React, { useContext } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { TimelineContentProps } from './TimelineContentProps'
import { Text, TextLevels } from '../../text'
import { Link } from '../../link'
import { TypographyBold, TypographyColor } from '../../../objects'
import { TimelineItemContext } from '../item/TimelineItem.native'
import { AutoLayout } from '../../autolayout'
import { ComponentName } from '../../enumsComponentsName'

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
      marginLeft: 4
    },
    heading: {
      marginBottom: 4,
      marginTop: 8,
    },
    content: {
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
        <Text level={TextLevels.THREE} style={styles.heading} typo={TypographyColor.TEXT_GREY_DARK}>
          {heading}
        </Text>
      )}
      {!!content && (
        <Text
          level={TextLevels.TWO}
          style={styles.content}
          typo={timelineContextValues.active ? TypographyBold.TEXT_WEIGHT_SEMIBOLD : TypographyBold.TEXT_WEIGHT_NORMAL}
        >
          {content}
        </Text>
      )}
      {(link || onClick) && (
        <TouchableOpacity onPress={(e?) => onClick?.(e)}>
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
