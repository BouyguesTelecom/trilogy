import { Box, BoxContent } from '@/components/box'
import { Card, CardContent } from '@/components/card'
import { GapSize } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import { FlexBox } from '@/components/flex-box'
import { Icon } from '@/components/icon'
import { Text, TextLevels } from '@/components/text'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { Align } from '@/objects'
import { TypographyBold } from '@/objects/Typography'
import clsx from 'clsx'
import React, { useContext } from 'react'
import { PromptAiContext } from '../../PromptAi'

const PromptAiFiles = () => {
  const { styled } = useTrilogyContext()
  const { files } = useContext(PromptAiContext)
  const classesFiles = hashClass(styled, clsx('prompt_ai-files', !files.length && 'empty'))
  const classesImg = hashClass(styled, clsx('prompt_ai-files-img prompt_ai-files-file'))

  return (
    <FlexBox className={classesFiles} gap={{ desktop: GapSize.FOUR }} scrollable>
      {files.map((file, key) => {
        if (file.type === 'image') {
          return <img src={file.src} alt={file.name} key={key} className={classesImg} />
        }

        return (
          <Card key={key} flat className='prompt_ai-files-doc prompt_ai-files-file'>
            <CardContent className='prompt_ai-files-doc-card-content'>
              <FlexBox align={Align.CENTER}>
                <Box backgroundColor='MAIN_FADE' className='prompt_ai-files-doc-preview'>
                  <BoxContent>
                    <Icon name='tri-file-attached' />
                  </BoxContent>
                </Box>
                <FlexBox direction='column'>
                  <Text typo={[TypographyBold.TEXT_WEIGHT_BOLD]} level={TextLevels.THREE}>
                    {file.name}
                  </Text>
                  <Text level={TextLevels.FOUR}>{file.type}</Text>
                </FlexBox>
              </FlexBox>
            </CardContent>
          </Card>
        )
      })}
    </FlexBox>
  )
}

PromptAiFiles.displayName = ComponentName.PromptAiFiles
export default PromptAiFiles
