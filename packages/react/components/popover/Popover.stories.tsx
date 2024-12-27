import * as React from 'react'
import { Meta, Story } from '@storybook/react'
import { PopoverProps } from './PopoverProps'
import { Popover, PopoverDirection } from '.'
import { Button } from '../button'

export default {
  title: 'Components/Popover',
  component: Popover,
} as Meta

export const Base: Story<PopoverProps> = (args) => <Popover {...args} />
Base.args = {
  children: 'Voici une simple popover',
  trigger: <Button variant={'PRIMARY'}>Simple Popover</Button>,
}

export const PopoverActive: Story<PopoverProps> = (args) => <Popover {...args} />
PopoverActive.args = {
  active: true,
  children: 'Popover active',
  trigger: <Button variant={'PRIMARY'}>Simple Popover</Button>,
}

export const PopoverDirections: Story<PopoverProps> = (args) => (
  <>
    <Popover {...args} trigger={<Button variant={'PRIMARY'}>Bottom</Button>} />
    <Popover trigger={<Button variant={'PRIMARY'}>top</Button>}>En haut</Popover>
    <Popover direction={PopoverDirection.RIGHT} trigger={<Button variant={'PRIMARY'}>Right</Button>}>
      A droite
    </Popover>
    <Popover direction={PopoverDirection.LEFT} trigger={<Button variant={'PRIMARY'}>Left</Button>}>
      A gauche
    </Popover>
  </>
)
PopoverDirections.args = {
  direction: PopoverDirection.BOTTOM,
  children: 'Bottom popover',
}
