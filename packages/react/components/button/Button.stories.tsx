import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import Button from './Button'
import {ButtonList} from './list'
import {ButtonVariant} from './ButtonEnum'
import {Icon, IconName} from '../icon'

export default {
  title: 'Components/Button',
  component: Button,
  subcomponents: {ButtonList},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />
const TemplateMultiple: ComponentStory<typeof Button> = (args) => (
  <ButtonList>
    <Button variant={ButtonVariant.PRIMARY} {...args} />
    <Button variant={ButtonVariant.SECONDARY} {...args} />
    <Button variant={ButtonVariant.TERTIARY} {...args} />
    <Button variant={ButtonVariant.PRIMARY} disabled {...args} />
    <Button variant={ButtonVariant.PRIMARY} loading {...args} />
  </ButtonList>
)

export const Base = TemplateMultiple.bind({})
Base.args = {
  children: 'Button',
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button primary',
  variant: ButtonVariant.PRIMARY,
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Button secondary',
  variant: ButtonVariant.SECONDARY,
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  children: 'Button tertiary',
  variant: ButtonVariant.TERTIARY,
}

export const Group: ComponentStory<typeof ButtonList> = (args) => (
  <ButtonList {...args}>
    <Button variant={ButtonVariant.PRIMARY}>Button 1</Button>
    <Button variant={ButtonVariant.SECONDARY}>Button 2</Button>
    <Button variant={ButtonVariant.TERTIARY}>Button 3</Button>
  </ButtonList>
)
Group.args = {}

export const WithIcon: ComponentStory<typeof Button> = (args) => <Button {...args}>Valider</Button>
WithIcon.args = {
  variant: ButtonVariant.PRIMARY,
  iconName: IconName.CHECK_CIRCLE,
}

export const ButtonLoading: ComponentStory<typeof Button> = (args) => <Button {...args}>Loading</Button>
ButtonLoading.args = {
  loading: true,
  variant: ButtonVariant.PRIMARY,
}
