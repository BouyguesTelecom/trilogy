import { IconName } from '@/components/icon'
import { Alignable } from '@/objects/facets/Alignable'
import type { Meta, StoryObj } from '@storybook/react'
import ButtonComponent from './Button'
import { ButtonMarkup, ButtonType, ButtonVariant } from './ButtonEnum'
import type { ButtonProps } from './ButtonProps'
import { ButtonList } from './list'
import { ButtonListDirectionEnum } from './list/ButtonListEnum'
import React from 'react'

ButtonComponent.displayName = 'Button'
Object.defineProperty(ButtonComponent, 'name', { value: 'Button' })

const Button = (props: ButtonProps): JSX.Element => <ButtonComponent {...props}>Click me</ButtonComponent>
Button.displayName = 'Button'

interface ButtonStoryArgs {
  button_children: string
  button_variant: ButtonVariant
  button_loading: boolean
  button_disabled: boolean
  button_fullwidth: boolean
  button_markup: ButtonMarkup
  button_type: ButtonType
  button_href: string
  button_iconName?: IconName
  wrapper_enabled: boolean
  wrapper_direction: ButtonListDirectionEnum
  wrapper_align: Alignable
}

const meta: Meta<ButtonStoryArgs> = {
  title: 'Components/Button',
  component: Button,
  subcomponents: { ButtonList },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    button_children: {
      control: 'text',
      name: 'children',
      description: 'Text displayed inside button',
      table: { category: 'Button' },
    },
    button_variant: {
      control: 'select',
      options: Object.values(ButtonVariant),
      name: 'variant',
      description: 'Button visual variant',
      table: { category: 'Button' },
    },
    button_loading: {
      control: 'boolean',
      name: 'loading',
      description: 'Loading state',
      table: { category: 'Button' },
    },
    button_disabled: {
      control: 'boolean',
      name: 'disabled',
      description: 'Disabled state',
      table: { category: 'Button' },
    },
    button_fullwidth: {
      control: 'boolean',
      name: 'fullwidth',
      description: 'Expand button width',
      table: { category: 'Button' },
    },
    button_markup: {
      control: 'select',
      options: Object.values(ButtonMarkup),
      name: 'markup',
      description: 'Rendered html element',
      table: { category: 'Button' },
    },
    button_type: {
      control: 'select',
      options: Object.values(ButtonType),
      name: 'type',
      description: 'Button native type',
      table: { category: 'Button' },
    },
    button_href: {
      control: 'text',
      name: 'href',
      description: 'Anchor target when markup is a',
      table: { category: 'Button' },
    },
    button_iconName: {
      control: 'select',
      options: [undefined, ...Object.values(IconName)],
      name: 'iconName',
      description: 'Optional icon in button',
      table: { category: 'Button' },
    },
    wrapper_enabled: {
      control: 'boolean',
      name: 'enabled',
      description: 'Use ButtonList wrapper (optional)',
      table: { category: 'ButtonList' },
    },
    wrapper_direction: {
      control: 'select',
      options: Object.values(ButtonListDirectionEnum),
      name: 'direction',
      description: 'ButtonList direction',
      table: { category: 'ButtonList' },
    },
    wrapper_align: {
      control: 'select',
      options: [Alignable.ALIGNED_START, Alignable.ALIGNED_CENTER, Alignable.ALIGNED_END],
      name: 'align',
      description: 'ButtonList alignment',
      table: { category: 'ButtonList' },
    },
  },
  args: {
    button_children: 'Click me',
    button_variant: ButtonVariant.PRIMARY,
    button_loading: false,
    button_disabled: false,
    button_fullwidth: false,
    button_markup: ButtonMarkup.BUTTON,
    button_type: ButtonType.BUTTON,
    button_href: '#',
    button_iconName: undefined,
    wrapper_enabled: false,
    wrapper_direction: ButtonListDirectionEnum.ROW,
    wrapper_align: Alignable.ALIGNED_START,
  },
  render: ({
    button_children,
    button_variant,
    button_loading,
    button_disabled,
    button_fullwidth,
    button_markup,
    button_type,
    button_href,
    button_iconName,
    wrapper_enabled,
    wrapper_direction,
    wrapper_align,
  }) => {
    const buttonNode = (
      <ButtonComponent
        variant={button_variant}
        loading={button_loading}
        disabled={button_disabled}
        fullwidth={button_fullwidth}
        markup={button_markup}
        type={button_type}
        href={button_markup === ButtonMarkup.A ? button_href : undefined}
        iconName={button_iconName}
      >
        {button_children}
      </ButtonComponent>
    )

    if (!wrapper_enabled) {
      return buttonNode
    }

    return (
      <ButtonList direction={wrapper_direction} align={wrapper_align}>
        {buttonNode}
      </ButtonList>
    )
  },
}

export default meta
type Story = StoryObj<ButtonStoryArgs>
const allButtonVariants = Object.values(ButtonVariant) as ButtonVariant[]

export const Default: Story = {}

export const Variants: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <ButtonList>
      {allButtonVariants.map((variant) => (
        <ButtonComponent key={variant} variant={variant}>
          {variant}
        </ButtonComponent>
      ))}
    </ButtonList>
  ),
}

export const WithButtonList: Story = {
  args: {
    wrapper_enabled: true,
  },
}

export const AsLink: Story = {
  args: {
    button_markup: ButtonMarkup.A,
    button_children: 'Go to page',
    button_href: '/hello',
  },
}

export const Loading: Story = {
  args: {
    button_loading: true,
  },
}

export const Disabled: Story = {
  args: {
    button_disabled: true,
  },
}

export const Fullwidth: Story = {
  args: {
    button_fullwidth: true,
  },
}

export const Playground: Story = {}
