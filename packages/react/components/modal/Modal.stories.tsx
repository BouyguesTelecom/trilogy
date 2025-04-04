import type { Meta, StoryObj } from '@storybook/react'
import Modal from './Modal'
import { Text } from '../text'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Button,
  ButtonVariant,
  Column,
  Columns,
  Divider,
  ModalBody,
  ModalFooter,
  ModalSize,
  Section,
  Title,
  TitleLevels,
} from '../../lib'
import { Icon, IconName } from '../icon'

const meta: Meta<typeof Modal> = {
  component: Modal,
}

export default meta

type Story = StoryObj<typeof Modal>

// @ts-ignore
export const Simples: Story = {
  render: () => (
    <>
      <Section>
        <Title level={TitleLevels.THREE}>Modal</Title>
        <Divider />

        <Modal
          title='Hello'
          size={ModalSize.SMALL}
          trigger={
            <Button variant={ButtonVariant.CONVERSION}>
              Click to open modal
            </Button>
          }
        >
          <ModalBody>
            <Icon name={IconName.ARROW_RIGHT}/>

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
            <Button variant={ButtonVariant.CONVERSION}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </Section>
    </>
  ),
}
