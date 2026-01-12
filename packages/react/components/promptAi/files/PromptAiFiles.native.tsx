import { Columns } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import React from 'react'

const PromptAiFiles = () => {
  return (
    <Columns scrollable>
      {/* {files.map((file, key) => {
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
      })} */}
    </Columns>
  )
}

PromptAiFiles.displayName = ComponentName.PromptAiFiles
export default PromptAiFiles
