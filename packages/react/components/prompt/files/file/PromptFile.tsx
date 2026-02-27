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
import { PromptFileProps, PromptFileRef } from './PromptFileProps'

/**
 * PromptFile component - Displays an individual file attachment with preview and delete option
 * @param src {string} Source URL for the file (required for images)
 * @param name {string} Display name of the file
 * @param type {string} File type (e.g., 'image', 'pdf', 'doc')
 * @param onDelete {Function} Callback function when delete button is clicked
 * @param className {string} Additional CSS classes (ONLY FOR WEB)
 * @param testId {string} Test Id for Test Integration
 */
const PromptFile = React.forwardRef<PromptFileRef, PromptFileProps>(({ onDelete, src, name, type }, ref) => {
  const { styled } = useTrilogyContext()
  const classesImgContainer = hashClass(styled, clsx('prompt-files-file'))
  const classesImg = clsx('prompt-files-img')

  if (type === 'image') {
    return (
      <div className={classesImgContainer} ref={ref}>
        <Image src={src} alt={name} className={classesImg} />
        <Icon name='tri-times' className='prompt-files-delete prompt-files-delete-img' onClick={onDelete} />
      </div>
    )
  }

  return (
    <Column narrow ref={ref}>
      <Card flat className='prompt-files-doc prompt-files-file'>
        <CardContent className='prompt-files-doc-card-content'>
          <FlexBox align={Align.CENTER}>
            <Box backgroundColor='MAIN_FADE' className='prompt-files-doc-preview'>
              <BoxContent>
                <Icon name='tri-file-attached' />
              </BoxContent>
            </Box>
            <FlexBox direction='column' className='prompt-files-doc-preview-content'>
              <FlexBox align={Align.CENTER}>
                <Text
                  typo={[TypographyBold.TEXT_WEIGHT_BOLD]}
                  level={TextLevels.THREE}
                  className='prompt-files-file-name'
                >
                  {name}
                </Text>
                <Icon name='tri-times' className='prompt-files-delete' onClick={onDelete} />
              </FlexBox>
              <Text level={TextLevels.FOUR}>{type}</Text>
            </FlexBox>
          </FlexBox>
        </CardContent>
      </Card>
    </Column>
  )
})

PromptFile.displayName = ComponentName.PromptFile
export default PromptFile
