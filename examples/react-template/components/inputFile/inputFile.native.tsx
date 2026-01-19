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
import { usePickImage } from '../../hooks'

export default function InputFile() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { pickImage, pickFile } = usePickImage({ closeModal: () => setIsOpen(false) })

  return (
    <Modal
      title='Titre'
      size={ModalSize.SMALL}
      trigger={<PromptAiInputFile onClick={() => setIsOpen(true)} />}
      active={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <ModalBody>
        <FlexBox direction={DirectionEnum.COLUMN} gap={GapSize.FIVE}>
          <View onClick={pickFile}>
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

          <View onClick={pickImage}>
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
