import type { Meta, StoryObj } from '@storybook/react'
import { Columns } from '../columns'
import { Column, Divider } from '../../lib'
import Checkbox from './Checkbox'
import { Accordion, AccordionBody, AccordionHeader } from '../accordion'
import AccordionItem from '../accordion/item'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
}

export default meta

type Story = StoryObj<typeof Checkbox>


export const Example: Story = {
  render: () => (
    <Columns multiline>
      <Column align="ALIGNED_CENTER" narrow>
        <Checkbox checked id="checkbox1" label="Label 1" name="name-1" value="value" />
        <Checkbox id="checkbox2" label="Label 2" name="name-1" value="value" />
        <Checkbox disabled id="checkbox3" label="Label 3" name="name-1" value="value" />
        <Checkbox id="checkbox4" label="Label 4" name="name-1" readonly value="value" />
      </Column>
    </Columns>
  ),
}

export const Sandbox: Story = {
  render: (...args ) => {
    return (
      <>
        {args.map((arg) => (
          <Checkbox {...arg}/>
        ))}
        <Divider/>
        <Columns>
          <Column>
            <Checkbox {...args} />
          </Column>
        </Columns>
      </>
    );
  },
  args: {
    items: [
      {
        id: 'checkbox1',
        label: 'Label 1',
        name: 'name-1',
        value: 'value',
        checked: true,
      },
      {
        id: 'checkbox2',
        label: 'Label 2',
        name: 'name-1',
        value: 'value',
      },
      {
        id: 'checkbox3',
        label: 'Label 3',
        name: 'name-1',
        value: 'value',
        disabled: false,
      },
      {
        id: 'checkbox4',
        label: 'Label 4',
        name: 'name-1',
        value: 'value',
        readonly: true,
      },
    ],
    id: 'Solo checkbox',
    label: 'Solo checkbox',
    name: 'Solo checkbox',
    value: 'Solo checkbox',
    checked: true,
  },
}
