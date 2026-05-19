import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import StepComponent from './step'
import StepperComponent from './Stepper'
import type { StepperProps } from './StepperProps'

StepperComponent.displayName = 'Stepper'
StepComponent.displayName = 'Step'
Object.defineProperty(StepperComponent, 'name', { value: 'Stepper' })
Object.defineProperty(StepComponent, 'name', { value: 'Step' })

const Stepper = (props: StepperProps): JSX.Element => <StepperComponent {...props} />
Stepper.displayName = 'Stepper'

interface StepperStoryArgs {
  stepper_id: string
  stepper_className: string
  stepper_testId: string
  step_one_label: string
  step_one_active: boolean
  step_one_current: boolean
  step_one_done: boolean
  step_one_error: boolean
  step_two_label: string
  step_two_active: boolean
  step_two_current: boolean
  step_two_done: boolean
  step_two_error: boolean
  step_three_label: string
  step_three_active: boolean
  step_three_current: boolean
  step_three_done: boolean
  step_three_error: boolean
}

const meta: Meta<StepperStoryArgs> = {
  title: 'Components/Stepper',
  component: Stepper,
  subcomponents: { Step: StepComponent },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ' ',
      },
    },
  },
  argTypes: {
    stepper_id: {
      control: 'text',
      name: 'id',
      description: 'Custom html id',
      table: { category: 'Stepper' },
    },
    stepper_className: {
      control: 'text',
      name: 'className',
      description: 'Additional CSS classes',
      table: { category: 'Stepper' },
    },
    stepper_testId: {
      control: 'text',
      name: 'testId',
      description: 'Testing identifier',
      table: { category: 'Stepper' },
    },
    step_one_label: {
      control: 'text',
      name: 'label',
      description: 'First step label',
      table: { category: 'Step 1' },
    },
    step_one_active: {
      control: 'boolean',
      name: 'active',
      description: 'First step active state',
      table: { category: 'Step 1' },
    },
    step_one_current: {
      control: 'boolean',
      name: 'current',
      description: 'First step current state',
      table: { category: 'Step 1' },
    },
    step_one_done: {
      control: 'boolean',
      name: 'done',
      description: 'First step done state',
      table: { category: 'Step 1' },
    },
    step_one_error: {
      control: 'boolean',
      name: 'error',
      description: 'First step error state',
      table: { category: 'Step 1' },
    },
    step_two_label: {
      control: 'text',
      name: 'label',
      description: 'Second step label',
      table: { category: 'Step 2' },
    },
    step_two_active: {
      control: 'boolean',
      name: 'active',
      description: 'Second step active state',
      table: { category: 'Step 2' },
    },
    step_two_current: {
      control: 'boolean',
      name: 'current',
      description: 'Second step current state',
      table: { category: 'Step 2' },
    },
    step_two_done: {
      control: 'boolean',
      name: 'done',
      description: 'Second step done state',
      table: { category: 'Step 2' },
    },
    step_two_error: {
      control: 'boolean',
      name: 'error',
      description: 'Second step error state',
      table: { category: 'Step 2' },
    },
    step_three_label: {
      control: 'text',
      name: 'label',
      description: 'Third step label',
      table: { category: 'Step 3' },
    },
    step_three_active: {
      control: 'boolean',
      name: 'active',
      description: 'Third step active state',
      table: { category: 'Step 3' },
    },
    step_three_current: {
      control: 'boolean',
      name: 'current',
      description: 'Third step current state',
      table: { category: 'Step 3' },
    },
    step_three_done: {
      control: 'boolean',
      name: 'done',
      description: 'Third step done state',
      table: { category: 'Step 3' },
    },
    step_three_error: {
      control: 'boolean',
      name: 'error',
      description: 'Third step error state',
      table: { category: 'Step 3' },
    },
  },
  args: {
    stepper_id: '',
    stepper_className: '',
    stepper_testId: '',
    step_one_label: 'Step 1',
    step_one_active: false,
    step_one_current: false,
    step_one_done: false,
    step_one_error: false,
    step_two_label: 'Step 2',
    step_two_active: false,
    step_two_current: false,
    step_two_done: false,
    step_two_error: false,
    step_three_label: 'Step 3',
    step_three_active: false,
    step_three_current: false,
    step_three_done: false,
    step_three_error: false,
  },
  render: ({
    stepper_id,
    stepper_className,
    stepper_testId,
    step_one_label,
    step_one_active,
    step_one_current,
    step_one_done,
    step_one_error,
    step_two_label,
    step_two_active,
    step_two_current,
    step_two_done,
    step_two_error,
    step_three_label,
    step_three_active,
    step_three_current,
    step_three_done,
    step_three_error,
  }) => (
    <StepperComponent
      id={stepper_id || undefined}
      className={stepper_className || undefined}
      testId={stepper_testId || undefined}
    >
      <StepComponent
        label={step_one_label}
        active={step_one_active}
        current={step_one_current}
        done={step_one_done}
        error={step_one_error}
      />
      <StepComponent
        label={step_two_label}
        active={step_two_active}
        current={step_two_current}
        done={step_two_done}
        error={step_two_error}
      />
      <StepComponent
        label={step_three_label}
        active={step_three_active}
        current={step_three_current}
        done={step_three_done}
        error={step_three_error}
      />
    </StepperComponent>
  ),
}

export default meta

type Story = StoryObj<StepperStoryArgs>

export const Default: Story = {}

export const AllDone: Story = {
  args: {
    step_one_done: true,
    step_one_active: true,
    step_one_current: false,
    step_two_done: true,
    step_two_active: true,
    step_two_current: false,
    step_three_done: true,
    step_three_active: true,
    step_three_current: false,
  },
}

export const WithError: Story = {
  args: {
    step_two_error: true,
    step_two_done: false,
    step_two_current: true,
  },
}

export const FirstStep: Story = {
  args: {
    step_one_done: false,
    step_one_active: true,
    step_one_current: true,
    step_two_done: false,
    step_two_active: false,
    step_two_current: false,
    step_three_done: false,
    step_three_active: false,
    step_three_current: false,
  },
}

export const Playground: Story = {}
