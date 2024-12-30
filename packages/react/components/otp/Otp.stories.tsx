import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Otp } from './index'
import { OtpProps } from './OtpProps'

const meta = {
  title: 'Components/Otp',
  component: Otp,
} satisfies Meta<OtpProps>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    onChange: (code) => console.log(code),
    onCompleted: (code) => console.log(code),
    label: 'Saisir votre otp',
  },
}

export const EnErreur: Story = {
  args: {
    error: true,
    help: 'Ceci est un message  derreur',
    onChange: (code) => console.log(code),
    onCompleted: (code) => console.log(code),
    label: 'Saisir votre otp',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    onChange: (code) => console.log(code),
    onCompleted: (code) => console.log(code),
    label: 'Saisir votre otp',
  },
}

export const CodeSize: Story = {
  args: {
    length: 3,
    onChange: (code) => console.log(code),
    onCompleted: (code) => console.log(code),
    label: 'Saisir votre otp',
  },
}
