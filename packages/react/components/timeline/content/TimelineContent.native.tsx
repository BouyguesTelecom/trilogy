import { AutoLayout } from '@/components/autolayout'
import { ComponentName } from '@/components/enumsComponentsName'
import { Link } from '@/components/link'
import { Text, TextLevels } from '@/components/text'
import { TimelineContentNativeRef, TimelineContentProps } from '@/components/timeline/content/TimelineContentProps'
import { TimelineItemContext } from '@/components/timeline/item/TimelineItem.native'
import { TypographyColor } from '@/objects/index.native'
import React, { useContext } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

/**
 * Timeline Content Component
 * @param children {ReactNode} Use it if you want custom children for content
 * @param content {string} Text content
 * @param heading {string} Text heading
 * @param linkLabel {string} Text for content link
 * @param linkTo {string} href of link
 */
const TimelineContent = React.forwardRef<TimelineContentNativeRef, TimelineContentProps>(
  ({ content, heading, linkLabel, linkTo, children }, ref): JSX.Element => {
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
        fontWeight: timelineContextValues.active ? '600' : '400',
        marginBottom: 4,
      },
      link: {
        marginTop: 6,
      },
    })

    return children ? (
      <View ref={ref} style={styles.container}>
        <AutoLayout>{children}</AutoLayout>
      </View>
    ) : (
      <View ref={ref} style={styles.container}>
        {!!heading && (
          <Text level={TextLevels.THREE} style={styles.heading} typo={TypographyColor.TEXT_MAIN}>
            {heading}
          </Text>
        )}
        {!!content && (
          <Text level={TextLevels.TWO} style={styles.content}>
            {content}
          </Text>
        )}
        {linkLabel && linkTo && (
          <TouchableOpacity testID='click-id'>
            <View style={styles.link}>
              <Link to={linkTo}>{linkLabel}</Link>
            </View>
          </TouchableOpacity>
        )}
      </View>
    )
  },
)

TimelineContent.displayName = ComponentName.TimelineContent

export default TimelineContent
