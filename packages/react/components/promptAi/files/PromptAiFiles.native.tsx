import { GapSize } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import { Image, RadiusValues } from '@/components/image'
import { SpacerSize } from '@/components/spacer'
import { Text, TextLevels } from '@/components/text'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { getRadiusStyle } from '@/objects/facets/Radius'
import { TypographyBold } from '@/objects/Typography'
import React, { useCallback, useContext } from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { PromptAiContext } from '../context'

const HEIGHT_ITEM = 60

const PromptAiFiles = () => {
  const { files, setFiles } = useContext(PromptAiContext)
  const backgroundTimes = getColorStyle(TrilogyColor.BACKGROUND)

  const styles = StyleSheet.create({
    cardImg: {
      backgroundColor: getColorStyle(TrilogyColor.MAIN_FADE),
      borderRadius: getRadiusStyle(RadiusValues.SMALL),
      width: 40,
      height: 40,
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
      maxWidth: Dimensions.get('screen').width / 1.5,
      gap: GapSize.TEN,
      height: HEIGHT_ITEM,
    },
    icon: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: 40,
    },
    times: {
      position: 'absolute',
      right: 4,
      top: 4,
      backgroundColor: backgroundTimes,
      borderRadius: 100,
      padding: 2,
    },
    scrollViewContainer: { flexDirection: 'row', gap: GapSize.EIGHT, padding: GapSize.EIGHT },
  })

  const handleDelete = useCallback((index: number) => {
    setFiles((prev) => {
      const copy = [...prev]
      copy.splice(index, 1)
      return copy
    })
  }, [])

  if (!files.length) return

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.scrollViewContainer}>
        {files.map((file, key) => {
          if (file.type === 'image') {
            return (
              <View key={key}>
                <Image
                  src={file.src}
                  alt={file.name}
                  height={HEIGHT_ITEM}
                  width={HEIGHT_ITEM}
                  radius={RadiusValues.SMALL}
                />
                <View style={styles.times}>
                  <Icon
                    name='tri-times'
                    className='prompt_ai-files-delete prompt_ai-files-delete-img'
                    onClick={() => handleDelete(key)}
                    size='smaller'
                  />
                </View>
              </View>
            )
          }

          return (
            <View key={key} style={styles.fileItem}>
              <View style={styles.cardImg}>
                <Icon name='tri-file-attached' {...{ style: styles.icon }} />
              </View>
              <View style={{ flexShrink: 1 }}>
                <Text typo={[TypographyBold.TEXT_WEIGHT_BOLD]} level={TextLevels.THREE} numberOfLines={1}>
                  {file.name}
                </Text>
                <Text level={TextLevels.FOUR} numberOfLines={1}>
                  {file.type}
                </Text>
              </View>
              <Icon name='tri-times' onClick={() => handleDelete(key)} />
            </View>
          )
        })}
      </View>
    </ScrollView>
  )
}

PromptAiFiles.displayName = ComponentName.PromptAiFiles
export default PromptAiFiles
