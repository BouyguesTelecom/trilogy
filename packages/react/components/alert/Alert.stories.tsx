import * as React from 'react'
import { Meta, Story } from '@storybook/react'
import Alert from './Alert'
import { StatusState } from '../../objects'
import { AlertProps } from './AlertProps'

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta

export const Base: Story<AlertProps> = (args) => <Alert {...args} />

Base.args = {
  display: true,
  status: StatusState.INFO,
  title: 'Alert information',
  description: 'Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book..',
}

export const Variant: Story<AlertProps> = () => (
  <>
    {' '}
    <Alert
      display
      status={StatusState.INFO}
      title='Alert information'
      description='Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book..'
    />{' '}
    <Alert
      display
      status={StatusState.WARNING}
      title='Alert information'
      description='Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book..'
    />
    <Alert
      display
      status={StatusState.SUCCESS}
      title='Alert information'
      description='Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book..'
    />
    <Alert
      display
      status={StatusState.ERROR}
      title='Alert information'
      description='Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book..'
    />{' '}
  </>
)
