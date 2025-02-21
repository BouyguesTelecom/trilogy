import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Select, SelectOption } from './index'
import { SelectProps } from './SelectProps'
import { SegmentControlProps } from '../segment-control/SegmentControlProps'
import { SegmentControl } from '../segment-control'
import SegmentControlItem from '../segment-control/item'
import { IconName } from '../icon'

const meta = {
  title: 'Components/Select',
  component: Select,
  subcomponents: { SelectOption },
  argTypes:{
    iconName: {
      options: Object.values(IconName),
      table: {
        type: { summary: 'IconName' },
      },
    },
  }
} satisfies Meta<SelectProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: SelectProps) => (
  // L'utilisation du select nécessite l'injection de Trilogy-Vanilla pour fonctioner :
  // <script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script>
  <Select {...args}>
    <SelectOption iconName={IconName.ARROW_DOWN} id='id_one' value='opt_one' label='option1'>
      option 1
    </SelectOption>
    <SelectOption iconName={IconName.ARROW_UP} id='id_two' value='opt_two' label='option2'>
      option 2
    </SelectOption>
    <SelectOption iconName={IconName.ARROW_LEFT} disabled id='id_three' value='opt_three' label='option3'>
      option 3
    </SelectOption>
  </Select>
)

export const Base: Story = {
  render: Template,
  args: {
    label: 'Choisir une option',
    onFocus: (e) => console.log('OUVERT', e),
    onBlur: (e) => console.log('FERMÉ', e),
    onChange: (e) => console.log(e),
    iconName: IconName.ARROW_RIGHT,
  },
}

export const Disabled: Story = {
  render: Template,
  args: {
    disabled: true,
    label: 'Choisir une option',
    onFocus: (e) => console.log('OUVERT', e),
    onBlur: (e) => console.log('FERMÉ', e),
    onChange: (e) => console.log(e),
    iconName: IconName.ALERT,
  },
}

export const Multiple: Story = {
  render: Template,
  args: {
    label: 'Choisir plusieurs option',
    id: 'option',
    name: 'option',
    onFocus: () => console.log('Focus'),
    onBlur: () => console.log('Blur'),
    onChange: () => console.log('onchange'),
    iconName: IconName.TIMES,
    multiple: true,
  },
}
