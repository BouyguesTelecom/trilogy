import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import ContainerComponent from './Container'
import type { ContainerProps } from './ContainerProps'

ContainerComponent.displayName = 'Container'

const Container = (props: ContainerProps & { children: React.ReactNode }): JSX.Element => (
  <ContainerComponent {...props} />
)
Container.displayName = 'Container'

interface ContainerStoryArgs extends ContainerProps {
  content: string
}

const meta: Meta<ContainerStoryArgs> = {
  title: 'Components/Container',
  component: Container,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    medium: {
      control: 'boolean',
      name: 'medium',
      description: 'Set medium container width',
      table: { category: 'Container' },
    },
    content: {
      control: 'text',
      name: 'children',
      description: 'Container content text',
      table: { category: 'Container' },
    },
  },
  args: {
    medium: false,
    content: 'This is container content',
  },
  render: ({ medium, content }) => (
    <ContainerComponent medium={medium}>
      <div style={{ padding: '24px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>{content}</div>
    </ContainerComponent>
  ),
}

export default meta

type Story = StoryObj<ContainerStoryArgs>

export const Default: Story = {}

export const Medium: Story = {
  args: {
    medium: true,
  },
}

export const WithContent: Story = {
  render: () => (
    <ContainerComponent>
      <div style={{ padding: '24px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <h2>Container Title</h2>
        <p>This is a standard width container with multiple lines of content to demonstrate the layout.</p>
      </div>
    </ContainerComponent>
  ),
}

export const MediumWithContent: Story = {
  render: () => (
    <ContainerComponent medium>
      <div style={{ padding: '24px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <h2>Medium Container Title</h2>
        <p>This is a medium width container with multiple lines of content to demonstrate the reduced width.</p>
      </div>
    </ContainerComponent>
  ),
}
