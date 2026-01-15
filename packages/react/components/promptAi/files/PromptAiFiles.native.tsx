import { Box, BoxContent } from '@/components/box'
import { Card, CardContent } from '@/components/card'
import { Column, Columns } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import { FlexBox } from '@/components/flex-box'
import { Icon } from '@/components/icon'
import { Image, RadiusValues } from '@/components/image'
import { Text, TextLevels } from '@/components/text'
import { Align } from '@/objects/facets/Alignable'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { TypographyBold } from '@/objects/Typography'
import React, { useCallback, useContext } from 'react'
import { View } from 'react-native'
import { PromptAiContext } from '../context'

const PromptAiFiles = () => {
  const { files, setFiles } = useContext(PromptAiContext)
  const backgroundTimes = getColorStyle(TrilogyColor.BACKGROUND)

  const handleDelete = useCallback((index: number) => {
    setFiles((prev) => {
      const copy = [...prev]
      copy.splice(index, 1)
      return copy
    })
  }, [])

  if (!files.length) return

  return (
    <Columns scrollable>
      {files.map((file, key) => {
        if (file.type === 'image') {
          return (
            <Column
              key={key}
              narrow
              {...{
                style: {
                  paddingLeft: key === 0 ? 16 : undefined,
                  paddingTop: 16,
                },
              }}
            >
              <View>
                <Image src={file.src} alt={file.name} height={60} width={60} radius={RadiusValues.SMALL} />
                <View
                  style={{
                    position: 'absolute',
                    right: 4,
                    top: 4,
                    backgroundColor: backgroundTimes,
                    borderRadius: 100,
                  }}
                >
                  <Icon
                    name='tri-times'
                    className='prompt_ai-files-delete prompt_ai-files-delete-img'
                    onClick={() => handleDelete(key)}
                  />
                </View>
              </View>
            </Column>
          )
        }

        return (
          <Column key={key} narrow>
            <Card flat>
              <CardContent>
                <FlexBox align={Align.CENTER}>
                  <Box backgroundColor='MAIN_FADE'>
                    <BoxContent>
                      <Icon name='tri-file-attached' />
                    </BoxContent>
                  </Box>
                  <FlexBox direction='column'>
                    <FlexBox align={Align.CENTER}>
                      <Text typo={[TypographyBold.TEXT_WEIGHT_BOLD]} level={TextLevels.THREE}>
                        {file.name}
                      </Text>
                      <Icon name='tri-times' onClick={() => handleDelete(key)} />
                    </FlexBox>
                    <Text level={TextLevels.FOUR}>{file.type}</Text>
                  </FlexBox>
                </FlexBox>
              </CardContent>
            </Card>
          </Column>
        )
      })}
    </Columns>
  )
}

PromptAiFiles.displayName = ComponentName.PromptAiFiles
export default PromptAiFiles
