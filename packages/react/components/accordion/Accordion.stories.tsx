import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import AccordionComponent from './Accordion'
import type { AccordionProps } from './AccordionProps'
import AccordionItem from './item'
import AccordionBody from './item/body'
import AccordionHeader from './item/header'

AccordionComponent.displayName = 'Accordion'

const Accordion = (props: AccordionProps): JSX.Element => <AccordionComponent {...props} />
Accordion.displayName = 'Accordion'

interface AccordionStoryArgs {
  item_open: boolean
  item_disabled: boolean
  header_children: string
  body_children: string
}

const meta: Meta<AccordionStoryArgs> = {
  title: 'Components/Accordion',
  component: Accordion,
  subcomponents: { AccordionItem, AccordionHeader, AccordionBody },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    item_open: {
      control: 'boolean',
      name: 'open',
      description: 'Open accordion item by default',
      table: { category: 'AccordionItem' },
    },
    item_disabled: {
      control: 'boolean',
      name: 'disabled',
      description: 'Disable interaction',
      table: { category: 'AccordionItem' },
    },
    header_children: {
      control: 'text',
      name: 'children',
      description: 'Header text',
      table: { category: 'AccordionHeader' },
    },
    body_children: {
      control: 'text',
      name: 'children',
      description: 'Body content',
      table: { category: 'AccordionBody' },
    },
  },
  args: {
    item_open: false,
    item_disabled: false,
    header_children: 'Accordion title',
    body_children: 'Detailed content of this accordion item.',
  },
  render: ({ item_open, item_disabled, header_children, body_children }) => (
    <AccordionComponent>
      <AccordionItem open={item_open} disabled={item_disabled}>
        <AccordionHeader>{header_children}</AccordionHeader>
        <AccordionBody>{body_children}</AccordionBody>
      </AccordionItem>
    </AccordionComponent>
  ),
}

export default meta
type Story = StoryObj<AccordionStoryArgs>
export const Default: Story = {}

export const OpenByDefault: Story = {
  name: 'Open by default',
  args: { item_open: true },
}

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    item_disabled: true,
    header_children: 'Disabled accordion',
  },
}

export const MultipleItems: Story = {
  name: 'Multiple items',
  render: ({ item_open, item_disabled, header_children, body_children }) => (
    <AccordionComponent>
      <AccordionItem open={item_open} disabled={item_disabled}>
        <AccordionHeader>{header_children}</AccordionHeader>
        <AccordionBody>{body_children}</AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader>Second item</AccordionHeader>
        <AccordionBody>Content of the second item.</AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader>Third item</AccordionHeader>
        <AccordionBody>Content of the third item.</AccordionBody>
      </AccordionItem>
    </AccordionComponent>
  ),
}
