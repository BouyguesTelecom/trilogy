import { Box, BoxContent } from '@/components/box'
import { Card, CardContent } from '@/components/card'
import { Column, Columns } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import { FlexBox } from '@/components/flex-box'
import { Icon } from '@/components/icon'
import { Text, TextLevels } from '@/components/text'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { Align } from '@/objects'
import { TypographyBold } from '@/objects/Typography'
import clsx from 'clsx'
import React, { useCallback, useContext, useEffect } from 'react'
import { IPromptAiFile, PromptAiContext } from '../context'

const PromptAiFiles = ({ files: FilesProps = [] }: { files?: IPromptAiFile[] }) => {
  const { styled } = useTrilogyContext()
  const { files, setFiles } = useContext(PromptAiContext)
  const classesFiles = hashClass(styled, clsx('prompt_ai-files'))
  const classesImgContainer = hashClass(styled, clsx('prompt_ai-files-file'))
  const classesImg = hashClass(styled, clsx('prompt_ai-files-img'))

  useEffect(() => {
    setFiles((prev) => [...prev, ...FilesProps])
  }, [FilesProps])

  const handleDelete = useCallback((index: number) => {
    setFiles((prev) => {
      const copy = [...prev]
      copy.splice(index, 1)
      return copy
    })
  }, [])

  if (!files.length) return

  return (
    <Columns className={classesFiles} scrollable>
      {files.map((file, key) => {
        if (file.type === 'image') {
          return (
            <div key={key} className={classesImgContainer}>
              <img src={file.src} alt={file.name} className={classesImg} />
              <Icon
                name='tri-times'
                className='prompt_ai-files-delete prompt_ai-files-delete-img'
                onClick={() => handleDelete(key)}
              />
            </div>
          )
        }

        return (
          <Column key={key} narrow>
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
                        {file.name}
                      </Text>
                      <Icon name='tri-times' className='prompt_ai-files-delete' onClick={() => handleDelete(key)} />
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
