import React, { useContext } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { AutoLayout } from '@/components/autolayout'
import { ComponentName } from '@/components/enumsComponentsName'
import { Link } from '@/components/link'
import { Text, TextLevels } from '@/components/text'
import { TimelineContentProps } from '@/components/timeline/content/TimelineContentProps'
import { TimelineItemContext } from '@/components/timeline/item/TimelineItem.native'
import { TypographyColor } from '@/objects/Typography/TypographyColor'

/**
 * Timeline Content Component
 * @param children {ReactNode} Use it if you want custom children for content
 * @param content {string} Text content
 * @param contentLink {string} Text for content link
 * @param heading {string} Text heading
 * @param link {string} Url link
 * @param Onclick {string} Provide event onCLick
 */
const TimelineContent = React.forwardRef(
  (
    { content, contentLink, heading, link, onClick, children }: TimelineContentProps,
    ref: React.Ref<View>,
  ): JSX.Element => {
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
      <View style={styles.container} ref={ref}>
        <AutoLayout>{children}</AutoLayout>
      </View>
    ) : (
      <View style={styles.container} ref={ref}>
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
        {(link || onClick) && (
          <TouchableOpacity onPress={(e?) => onClick?.(e)} testID='click-id'>
            <View style={styles.link}>
              <Link to={link}>{contentLink || link}</Link>
            </View>
          </TouchableOpacity>
        )}
      </View>
    )
  },
)

TimelineContent.displayName = ComponentName.TimelineContent
export default TimelineContent
