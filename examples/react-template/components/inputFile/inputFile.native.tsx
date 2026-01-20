import {
  FlexBox,
  FlexItem,
  GapSize,
  Icon,
  Modal,
  ModalBody,
  ModalSize,
  PromptAiInputFile,
  Text,
  View,
} from '@trilogy-ds/react/components'
import { Align, DirectionEnum, TypographyBold } from '@trilogy-ds/react/objects'
import { useState } from 'react'
import { IInputFile } from './interface'

export default function InputFile({ pickFile, pickImage }: IInputFile) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handlePickFile = async () => {
    const result = await pickFile()
    if (result) setIsOpen(false)
  }

  const handlePickImage = async () => {
    const result = await pickImage()
    if (result) setIsOpen(false)
  }

  return (
    <Modal
      title='Titre'
      size={ModalSize.SMALL}
      trigger={<PromptAiInputFile onChange={() => setIsOpen(true)} />}
      active={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <ModalBody>
        <FlexBox direction={DirectionEnum.COLUMN} gap={GapSize.FIVE}>
          <View onClick={handlePickFile}>
            <FlexBox align={Align.CENTER} gap={GapSize.THREE}>
              <FlexItem narrow>
                <Icon name='tri-attachment' />
              </FlexItem>
              <FlexItem direction={DirectionEnum.COLUMN}>
                <Text typo={[TypographyBold.TEXT_WEIGHT_BOLD]}>Ajouter des fichiers</Text>
                <Text level={4}>Analyser ou résumer</Text>
              </FlexItem>
            </FlexBox>
          </View>

          <View onClick={handlePickImage}>
            <FlexBox align={Align.CENTER} gap={GapSize.THREE}>
              <FlexItem narrow>
                <Icon name='tri-eye' />
              </FlexItem>
              <FlexItem direction={DirectionEnum.COLUMN}>
                <Text typo={[TypographyBold.TEXT_WEIGHT_BOLD]}>Ajouter des images</Text>
                <Text level={4}>JPEG ou PNG</Text>
              </FlexItem>
            </FlexBox>
          </View>
        </FlexBox>
      </ModalBody>
    </Modal>
  )
}
