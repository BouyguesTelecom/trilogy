import { GapSize } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName, IconSize } from '@/components/icon'
import { Image, RadiusValues } from '@/components/image'
import { SpacerSize } from '@/components/spacer'
import { Text, TextLevels } from '@/components/text'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { getRadiusStyle } from '@/objects/facets/Radius'
import { TypographyBold } from '@/objects/Typography'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { PromptFileNativeRef, PromptFileProps } from './PromptFileProps'

const HEIGHT_ITEM = 64
const HEIGHT_IMG_FILE = 40
const MAX_WIDTH_FILE = 264

const PromptFile = React.forwardRef<PromptFileNativeRef, PromptFileProps>(({ onDelete, src, name, type }, ref) => {
  const backgroundTimes = getColorStyle(TrilogyColor.MAIN_FADE)

  const styles = StyleSheet.create({
    cardImg: {
      backgroundColor: getColorStyle(TrilogyColor.MAIN_FADE),
      borderRadius: getRadiusStyle(RadiusValues.SMALL),
      width: HEIGHT_IMG_FILE,
      height: HEIGHT_IMG_FILE,
      justifyContent: 'center',
      alignItems: 'center',
    },
    fileItem: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: getColorStyle(TrilogyColor.MAIN_FADE),
      borderRadius: getRadiusStyle(RadiusValues.SMALL),
      padding: SpacerSize.TWO,
      maxWidth: MAX_WIDTH_FILE,
      gap: GapSize.TEN,
      height: HEIGHT_ITEM,
    },
    icon: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: HEIGHT_IMG_FILE,
    },
    times: {
      position: 'absolute',
      right: 4,
      top: 4,
      backgroundColor: backgroundTimes,
      borderRadius: 100,
      padding: 2,
    },
    cardContent: { flexShrink: 1, gap: GapSize.EIGHT },
    timesFile: {
      backgroundColor: backgroundTimes,
      borderRadius: 100,
      padding: 2,
      alignSelf: 'flex-start',
    },
  })

  if (type === 'image') {
    return (
      <View ref={ref}>
        <Image src={src} alt={name} height={HEIGHT_ITEM} width={HEIGHT_ITEM} radius={RadiusValues.SMALL} />
        <View style={styles.times}>
          <Icon name={IconName.TIMES} onClick={onDelete} size={IconSize.SMALLER} />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.fileItem} ref={ref}>
      <View style={styles.cardImg}>
        <Icon name={IconName.FILE_ATTACHED} size={IconSize.SMALLER} {...{ style: styles.icon }} />
      </View>
      <View style={styles.cardContent}>
        <Text typo={[TypographyBold.TEXT_WEIGHT_BOLD]} level={TextLevels.THREE} numberOfLines={1}>
          {name}
        </Text>
        <Text level={TextLevels.FOUR} numberOfLines={1}>
          {type}
        </Text>
      </View>
      <View style={styles.timesFile}>
        <Icon name={IconName.TIMES} onClick={onDelete} size={IconSize.SMALLER} />
      </View>
    </View>
  )
})

PromptFile.displayName = ComponentName.PromptFile
export default PromptFile
