'use client'

import {
  Divider,
  Modal,
  ModalBody,
  ModalFooter,
  ModalSize,
  Section,
  Text,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/lib/components'
import { useState } from 'react'

export default function ModalClient() {
  const [openModal1, setOpenModal1] = useState(false)

  return (
    <Section>
      <Title level={TitleLevels.THREE}>Modal</Title>
      <Divider />

      <Modal
        title='Hello'
        size={ModalSize.SMALL}
        trigger={
          <button className='button' onClick={() => setOpenModal1(true)}>
            Open modal
          </button>
        }
        active={openModal1}
        onClose={() => setOpenModal1(false)}
      >
        <ModalBody>
          <Text>Modal content</Text>
        </ModalBody>
        <ModalFooter>
          <button className='button is-primary' type='button' onClick={() => setOpenModal1(false)}>
            Close modal
          </button>
        </ModalFooter>
      </Modal>
    </Section>
  )
}
