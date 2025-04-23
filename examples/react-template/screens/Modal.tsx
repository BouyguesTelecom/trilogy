import { IconColor, isMobile } from '@trilogy-ds/react'

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Button,
  ButtonList,
  ButtonVariant,
  Column,
  Columns,
  Divider,
  Icon,
  IconName,
  IconSize,
  Modal,
  ModalBody,
  ModalFooter,
  ModalSize,
  Section,
  Text,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'
import { useTrilogyContext } from '@trilogy-ds/react/context'
import * as React from 'react'
import { useState } from 'react'

export const ModalScreen = (): JSX.Element => {
  const { hash } = useTrilogyContext()
  const [openModal1, setOpenModal1] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)
  const [openModal3, setOpenModal3] = useState(false)

  function AccessibilityElm() {
    if (isMobile) return <></>
    return <span className={`sr-only${hash ? '_' + hash : ''}`}>Menu</span>
  }
  return (
    <>
      <Section>
        <Title level={TitleLevels.THREE}>Modal</Title>

        <Modal
          hideCloseButton
          unClosable
          title='Détail du panier'
          size={ModalSize.SMALL}
          active
          // onClose={onClose}
          data-cy='cart-modal'
        >
          <ModalBody>
              <Text data-cy='text-customer-fullName'>Acheteur : </Text>
              <Text data-cy='text-cart-createdAt'>Date de création</Text>
            <Text data-cy='text-cart-title'>Contenu du panier :</Text>
              <Columns multiline marginless>
                <Column size={1}></Column>
                <Column>
                  <Text data-cy='text-product-label'>- product label</Text>
                </Column>
              </Columns>
          </ModalBody>
          {<ModalFooter>footer</ModalFooter>}
        </Modal>

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

            <Text>Modal content</Text>
            <Accordion id='accordion-1'>
              <AccordionItem id='ONE' open>
                <AccordionHeader>
                  <Title level={6}>Hello World 1</Title>
                </AccordionHeader>
                <AccordionBody data-id='totooooo-test-id'>
                  <Columns>
                    <Column>
                      <Text>Accordion Body 1</Text>
                    </Column>
                  </Columns>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem id='TWO'>
                <AccordionHeader>
                  <Title level={6}>Hello World 2</Title>
                </AccordionHeader>
                <AccordionBody>
                  <Text>Accordion Body 2</Text>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem id='THREE'>
                <AccordionHeader>
                  <Title level={6}>Hello World 3</Title>
                </AccordionHeader>
                <AccordionBody>
                  <Text>Accordion Body 3</Text>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem disabled id='FOUR'>
                <AccordionHeader>
                  <Title level={6}>Hello World 4</Title>
                </AccordionHeader>
                <AccordionBody>
                  <Text>Accordion Body 4</Text>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </ModalBody>
          <ModalFooter>
            <ButtonList>
              <Button variant={ButtonVariant.SECONDARY} onClick={() => setOpenModal1(false)}>
                Fermer
              </Button>
              <Button variant={ButtonVariant.CONVERSION} onClick={() => setOpenModal1(false)}>
                Ajouter
              </Button>
            </ButtonList>
          </ModalFooter>
        </Modal>
        <Divider />

        <Modal
          title='Hello'
          trigger={
            <Button onClick={() => setOpenModal2(true)}>
              <Icon name={IconName.EYE} size={IconSize.LARGE} color={IconColor.MAIN} />
              <AccessibilityElm />
            </Button>
          }
          active={openModal2}
          onClose={() => setOpenModal2(false)}
        >
          <ModalBody>
            <Text>Modal content</Text>
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
          trigger={
            <Button onClick={() => setOpenModal3(true)}>
              <Icon name={IconName.EYE} size={IconSize.LARGE} color={IconColor.MAIN} />
              <AccessibilityElm />
            </Button>
          }
          active={openModal3}
          onClose={() => setOpenModal3(false)}
          panel
        >
          <ModalBody>
            <Text>Modal content</Text>
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
