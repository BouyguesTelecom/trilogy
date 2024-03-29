import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from './Button'
import { ButtonList } from './list'
import { ButtonColor } from './ButtonEnum'
import { Icon, IconName } from '../icon'

export default {
  title: 'Components/Button',
  component: Button,
  subcomponents: { ButtonList },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />
const TemplateMultiple: ComponentStory<typeof Button> = (args) => (
  <ButtonList>
    <Button variant={ButtonColor.PRIMARY} {...args} />
    <Button variant={ButtonColor.SECONDARY} {...args} />
    <Button variant={ButtonColor.TERTIARY} {...args} />
    <Button variant={ButtonColor.PRIMARY} disabled {...args} />
    <Button variant={ButtonColor.PRIMARY} loading {...args} />
  </ButtonList>
)

export const Base = TemplateMultiple.bind({})
Base.args = {
  children: 'Button',
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button primary',
  variant: ButtonColor.PRIMARY,
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Button secondary',
  variant: ButtonColor.SECONDARY,
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  children: 'Button tertiary',
  variant: ButtonColor.TERTIARY,
}

export const Group: ComponentStory<typeof ButtonList> = (args) => (
  <ButtonList {...args}>
    <Button variant={ButtonColor.PRIMARY}>Button 1</Button>
    <Button variant={ButtonColor.SECONDARY}>Button 2</Button>
    <Button variant={ButtonColor.TERTIARY}>Button 3</Button>
  </ButtonList>
)
Group.args = {}

export const WithIcon: ComponentStory<typeof Button> = (args) => <Button {...args}>Valider</Button>
WithIcon.args = {
  variant: ButtonColor.PRIMARY,
  iconName: IconName.CHECK_CIRCLE,
}

export const ButtonLoading: ComponentStory<typeof Button> = (args) => <Button {...args}>Loading</Button>
ButtonLoading.args = {
  loading: true,
  variant: ButtonColor.PRIMARY,
}
