import {
  Button,
  ButtonVariant,
  Divider,
  Icon,
  IconName,
  IconSize,
  Modal,
  ModalBody,
  ModalFooter,
  ModalSize,
  Section,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'
import * as React from 'react'
import { useState } from 'react'

function Buttons() {
  return null
}

export const ModalScreen = (): JSX.Element => {
  const [openModal1, setOpenModal1] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)
  const [openModal3, setOpenModal3] = useState(false)
  return (
    <>
      <Section>
        <Title level={TitleLevels.THREE}>Modal</Title>
        <Divider />

        <Modal
          title='Hello'
          size={ModalSize.SMALL}
          trigger={
            <Button variant={ButtonVariant.CONVERSION} onClick={() => setOpenModal1(true)}>
              Click to open modal
            </Button>
          }
          active={openModal1}
          onClose={() => setOpenModal1(false)}
        >
          <ModalBody>
            <Icon name={IconName.ARROW_RIGHT} onClick={() => setOpenModal1(true)} />
            <p>Modal content</p>
            <p>Modal content</p>
            <p>Modal content</p>
            <p>Modal content</p>
            <p>Modal content</p>
            <p>Modal content</p>
            <p>Modal content</p>
            <p>Modal content</p>
            <p>Modal content</p>
            <p>Modal content</p>
            <p>Modal content</p>
            <p>Modal content</p>
            <p>Modal content</p>
            <p>Modal content</p>
            <p>Modal content</p>
            <p>Modal content</p>
            <p>Modal content</p>
            <p>Modal content</p>
            <p>Modal content</p>
            <p>Modal content</p>
            <p>Modal content</p>
            <p>Modal content</p>
            <p>Modal content</p>
            <p>Modal content</p>
            <p>Modal content</p>
            <p>Modal content</p>
            <p>Modal content</p>
            <p>Modal content</p>
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
          title='Hello'
          trigger={<Icon name={IconName.EYE} size={IconSize.LARGE} onClick={() => setOpenModal2(true)} />}
          active={openModal2}
          onClose={() => setOpenModal2(false)}
        >
          <ModalBody>
            <p>Modal content</p>
          </ModalBody>
          <ModalFooter>
            <Button variant={ButtonVariant.CONVERSION} onClick={() => setOpenModal2(false)}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
        <Divider />

        <Modal
          title='Hello'
          trigger={<Icon name={IconName.EYE} size={IconSize.LARGE} onClick={() => setOpenModal3(true)} />}
          active={openModal3}
          onClose={() => setOpenModal3(false)}
          panel
        >
          <ModalBody>
            <p>Modal content</p>
          </ModalBody>
          <ModalFooter>
            <Button variant={ButtonVariant.CONVERSION} onClick={() => setOpenModal3(false)}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </Section>
    </>
  )
}
