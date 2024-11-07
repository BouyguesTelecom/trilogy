import * as React from 'react'
import { useState } from 'react'
import {
  Button,
  ButtonVariant,
  Divider,
  Icon,
  IconName,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalSize,
  Section,
  Title,
  TitleLevels,
} from '@trilogy-ds/react'

function Buttons() {
  return null
}

export const ModalScreen = (): JSX.Element => {
  const [openModal1, setOpenModal1] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)
  return (
    <>
      <Section>
        <Title level={TitleLevels.THREE}>Modal</Title>
        <Divider />

        <Modal
          size={ModalSize.SMALL}
          trigger={
            <Button variant={ButtonVariant.CONVERSION} onClick={() => setOpenModal1(true)}>
              Click to open modal
            </Button>
          }
          hideCloseButton
          active={openModal1}
          onClose={() => setOpenModal1(false)}
        >
          <ModalHeader>
            <Icon name={IconName.ARROW_RIGHT} />
            <Title>Hello</Title>
          </ModalHeader>
          <ModalBody>
            <Icon name={IconName.ARROW_RIGHT} onClick={() => setOpenModal1(true)} />
            <p>Modal content</p>
          </ModalBody>
          <ModalFooter>
            <Button variant={ButtonVariant.CONVERSION} onClick={() => setOpenModal1(false)}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
        <Divider />

        <Modal
          trigger={<Icon name={IconName.ARROW_RIGHT} onClick={() => setOpenModal2(true)} />}
          active={openModal2}
          onClose={() => setOpenModal2(false)}
        >
          <ModalHeader>
            <Title>Hello</Title>
          </ModalHeader>
          <ModalBody>
            <p>Modal content</p>
          </ModalBody>
          <ModalFooter>
            <Button variant={ButtonVariant.CONVERSION} onClick={() => setOpenModal2(false)}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </Section>
    </>
  )
}
