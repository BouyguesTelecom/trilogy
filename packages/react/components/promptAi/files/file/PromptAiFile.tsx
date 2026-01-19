import { Box, BoxContent } from '@/components/box'
import { Card, CardContent } from '@/components/card'
import { Column } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import { FlexBox } from '@/components/flex-box'
import { Icon } from '@/components/icon'
import { Image } from '@/components/image'
import { Text, TextLevels } from '@/components/text'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { Align } from '@/objects'
import { TypographyBold } from '@/objects/Typography'
import clsx from 'clsx'
import React from 'react'
import { PromptAiFileProps, PromptAiFileRef } from './PromptAiFileProps'

const PromptAiFile = React.forwardRef<PromptAiFileRef, PromptAiFileProps>(({ onDelete, src, name, type }, ref) => {
  const { styled } = useTrilogyContext()
  const classesImgContainer = hashClass(styled, clsx('prompt_ai-files-file'))
  const classesImg = hashClass(styled, clsx('prompt_ai-files-img'))

  if (type === 'image') {
    return (
      <div className={classesImgContainer} ref={ref}>
        <Image src={src} alt={name} className={classesImg} />
        <Icon name='tri-times' className='prompt_ai-files-delete prompt_ai-files-delete-img' onClick={onDelete} />
      </div>
    )
  }

  return (
    <Column narrow ref={ref}>
      <Card flat className='prompt_ai-files-doc prompt_ai-files-file'>
        <CardContent className='prompt_ai-files-doc-card-content'>
          <FlexBox align={Align.CENTER}>
            <Box backgroundColor='MAIN_FADE' className='prompt_ai-files-doc-preview'>
              <BoxContent>
                <Icon name='tri-file-attached' />
              </BoxContent>
            </Box>
            <FlexBox direction='column'>
              <FlexBox align={Align.CENTER}>
                <Text typo={[TypographyBold.TEXT_WEIGHT_BOLD]} level={TextLevels.THREE}>
                  {name}
                </Text>
                <Icon name='tri-times' className='prompt_ai-files-delete' onClick={onDelete} />
              </FlexBox>
              <Text level={TextLevels.FOUR}>{type}</Text>
            </FlexBox>
          </FlexBox>
        </CardContent>
      </Card>
    </Column>
  )
})

PromptAiFile.displayName = ComponentName.PromptAiFile
export default PromptAiFile
