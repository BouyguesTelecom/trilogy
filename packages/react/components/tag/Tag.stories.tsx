import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Alignable } from '../../objects/facets/Alignable'
import TagComponent from './Tag'
import { TagVariant } from './TagEnum'
import type { TagProps } from './TagProps'
import TagList from './list'

TagComponent.displayName = 'Tag'
TagList.displayName = 'TagList'

const Tag = (props: TagProps): JSX.Element => <TagComponent {...props} />
Tag.displayName = 'Tag'

interface TagStoryArgs {
  tag_label: string
  tag_variant?: TagVariant
  tag_inverted: boolean
  tag_small: boolean
  tag_id: string
  tag_className: string
  tag_testId: string
  list_align?: Alignable
  list_marginless: boolean
}

const meta: Meta<TagStoryArgs> = {
  title: 'Components/Tag',
  component: Tag,
  subcomponents: { TagList },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ' ',
      },
    },
  },
  argTypes: {
    tag_label: {
      control: 'text',
      name: 'label',
      description: 'Tag text content',
      table: { category: 'Tag' },
    },
    tag_variant: {
      control: 'select',
      options: [undefined, ...Object.values(TagVariant)],
      name: 'variant',
      description: 'Color variant',
      table: { category: 'Tag' },
    },
    tag_inverted: {
      control: 'boolean',
      name: 'inverted',
      description: 'Inverted color scheme',
      table: { category: 'Tag' },
    },
    tag_small: {
      control: 'boolean',
      name: 'small',
      description: 'Compact size',
      table: { category: 'Tag' },
    },
    tag_id: {
      control: 'text',
      name: 'id',
      description: 'Custom html id',
      table: { category: 'Tag' },
    },
    tag_className: {
      control: 'text',
      name: 'className',
      description: 'Additional CSS classes',
      table: { category: 'Tag' },
    },
    tag_testId: {
      control: 'text',
      name: 'testId',
      description: 'Testing identifier',
      table: { category: 'Tag' },
    },
    list_align: {
      control: 'select',
      options: [undefined, Alignable.ALIGNED_START, Alignable.ALIGNED_CENTER, Alignable.ALIGNED_END],
      name: 'align',
      description: 'Alignment of tags in TagList',
      table: { category: 'TagList' },
    },
    list_marginless: {
      control: 'boolean',
      name: 'marginless',
      description: 'Remove margin between tags',
      table: { category: 'TagList' },
    },
  },
  args: {
    tag_label: 'Tag',
    tag_variant: undefined,
    tag_inverted: false,
    tag_small: false,
    tag_id: '',
    tag_className: '',
    tag_testId: '',
    list_align: undefined,
    list_marginless: false,
  },
  render: ({ tag_label, tag_variant, tag_inverted, tag_small, tag_id, tag_className, tag_testId }) => (
    <TagComponent
      label={tag_label}
      variant={tag_variant}
      inverted={tag_inverted}
      small={tag_small}
      id={tag_id || undefined}
      className={tag_className || undefined}
      testId={tag_testId || undefined}
    />
  ),
}

export default meta

type Story = StoryObj<TagStoryArgs>

export const Default: Story = {}

export const Success: Story = {
  args: { tag_variant: TagVariant.SUCCESS },
}

export const Info: Story = {
  args: { tag_variant: TagVariant.INFO },
}

export const Warning: Story = {
  args: { tag_variant: TagVariant.WARNING },
}

export const Error: Story = {
  args: { tag_variant: TagVariant.ERROR },
}

export const Small: Story = {
  args: { tag_small: true },
}

export const Inverted: Story = {
  args: { tag_inverted: true, tag_variant: TagVariant.INFO },
}

export const WithTagList: Story = {
  render: ({ tag_variant, tag_inverted, tag_small, list_align, list_marginless }) => (
    <TagList align={list_align} marginless={list_marginless}>
      <TagComponent label='Tag 1' variant={tag_variant} inverted={tag_inverted} small={tag_small} />
      <TagComponent label='Tag 2' variant={TagVariant.INFO} inverted={tag_inverted} small={tag_small} />
      <TagComponent label='Tag 3' variant={TagVariant.SUCCESS} inverted={tag_inverted} small={tag_small} />
    </TagList>
  ),
}

export const Playground: Story = {}
