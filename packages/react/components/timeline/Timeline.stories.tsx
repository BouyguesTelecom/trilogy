import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { IconName } from '../icon'
import TimelineContent from './content'
import TimelineItem from './item'
import TimelineMarker from './marker'
import TimelineComponent from './Timeline'
import type { TimelineProps } from './TimelineProps'

TimelineComponent.displayName = 'Timeline'
TimelineItem.displayName = 'TimelineItem'
TimelineMarker.displayName = 'TimelineMarker'
TimelineContent.displayName = 'TimelineContent'
Object.defineProperty(TimelineComponent, 'name', { value: 'Timeline' })

const Timeline = (props: TimelineProps): JSX.Element => <TimelineComponent {...props} />
Timeline.displayName = 'Timeline'
Object.defineProperty(Timeline, 'name', { value: 'Timeline' })

interface TimelineStoryArgs {
  timeline_horizontal: boolean
  timeline_id: string
  timeline_className: string
  timeline_testId: string
  item_one_done: boolean
  item_one_active: boolean
  item_one_cancel: boolean
  marker_one_iconName: IconName
  content_one_heading: string
  content_one_content: string
  content_one_linkLabel: string
  content_one_linkTo: string
  item_two_done: boolean
  item_two_active: boolean
  item_two_cancel: boolean
  marker_two_iconName: IconName
  content_two_heading: string
  content_two_content: string
  content_two_linkLabel: string
  content_two_linkTo: string
  item_three_done: boolean
  item_three_active: boolean
  item_three_cancel: boolean
  marker_three_iconName: IconName
  content_three_heading: string
  content_three_content: string
  content_three_linkLabel: string
  content_three_linkTo: string
}

const meta: Meta<TimelineStoryArgs> = {
  title: 'Components/Timeline',
  component: Timeline,
  subcomponents: { TimelineItem, TimelineMarker, TimelineContent },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ' ',
      },
    },
  },
  argTypes: {
    timeline_horizontal: {
      control: 'boolean',
      name: 'horizontal',
      description: 'Display timeline horizontally',
      table: { category: 'Timeline' },
    },
    timeline_id: {
      control: 'text',
      name: 'id',
      description: 'Custom html id',
      table: { category: 'Timeline' },
    },
    timeline_className: {
      control: 'text',
      name: 'className',
      description: 'Additional CSS classes',
      table: { category: 'Timeline' },
    },
    timeline_testId: {
      control: 'text',
      name: 'testId',
      description: 'Testing identifier',
      table: { category: 'Timeline' },
    },
    item_one_done: {
      control: 'boolean',
      name: 'done',
      description: 'First timeline item done state',
      table: { category: 'TimelineItem 1' },
    },
    item_one_active: {
      control: 'boolean',
      name: 'active',
      description: 'First timeline item active state',
      table: { category: 'TimelineItem 1' },
    },
    item_one_cancel: {
      control: 'boolean',
      name: 'cancel',
      description: 'First timeline item cancel state',
      table: { category: 'TimelineItem 1' },
    },
    marker_one_iconName: {
      control: 'select',
      options: [IconName.CLOCK, IconName.CHECK, IconName.TIMES_CIRCLE, IconName.ALERT],
      name: 'iconName',
      description: 'First marker icon',
      table: { category: 'TimelineMarker 1' },
    },
    content_one_heading: {
      control: 'text',
      name: 'heading',
      description: 'First item heading',
      table: { category: 'TimelineContent 1' },
    },
    content_one_content: {
      control: 'text',
      name: 'content',
      description: 'First item content',
      table: { category: 'TimelineContent 1' },
    },
    content_one_linkLabel: {
      control: 'text',
      name: 'linkLabel',
      description: 'First item link label',
      table: { category: 'TimelineContent 1' },
    },
    content_one_linkTo: {
      control: 'text',
      name: 'linkTo',
      description: 'First item link url',
      table: { category: 'TimelineContent 1' },
    },
    item_two_done: {
      control: 'boolean',
      name: 'done',
      description: 'Second timeline item done state',
      table: { category: 'TimelineItem 2' },
    },
    item_two_active: {
      control: 'boolean',
      name: 'active',
      description: 'Second timeline item active state',
      table: { category: 'TimelineItem 2' },
    },
    item_two_cancel: {
      control: 'boolean',
      name: 'cancel',
      description: 'Second timeline item cancel state',
      table: { category: 'TimelineItem 2' },
    },
    marker_two_iconName: {
      control: 'select',
      options: [IconName.CLOCK, IconName.CHECK, IconName.TIMES_CIRCLE, IconName.ALERT],
      name: 'iconName',
      description: 'Second marker icon',
      table: { category: 'TimelineMarker 2' },
    },
    content_two_heading: {
      control: 'text',
      name: 'heading',
      description: 'Second item heading',
      table: { category: 'TimelineContent 2' },
    },
    content_two_content: {
      control: 'text',
      name: 'content',
      description: 'Second item content',
      table: { category: 'TimelineContent 2' },
    },
    content_two_linkLabel: {
      control: 'text',
      name: 'linkLabel',
      description: 'Second item link label',
      table: { category: 'TimelineContent 2' },
    },
    content_two_linkTo: {
      control: 'text',
      name: 'linkTo',
      description: 'Second item link url',
      table: { category: 'TimelineContent 2' },
    },
    item_three_done: {
      control: 'boolean',
      name: 'done',
      description: 'Third timeline item done state',
      table: { category: 'TimelineItem 3' },
    },
    item_three_active: {
      control: 'boolean',
      name: 'active',
      description: 'Third timeline item active state',
      table: { category: 'TimelineItem 3' },
    },
    item_three_cancel: {
      control: 'boolean',
      name: 'cancel',
      description: 'Third timeline item cancel state',
      table: { category: 'TimelineItem 3' },
    },
    marker_three_iconName: {
      control: 'select',
      options: [IconName.CLOCK, IconName.CHECK, IconName.TIMES_CIRCLE, IconName.ALERT],
      name: 'iconName',
      description: 'Third marker icon',
      table: { category: 'TimelineMarker 3' },
    },
    content_three_heading: {
      control: 'text',
      name: 'heading',
      description: 'Third item heading',
      table: { category: 'TimelineContent 3' },
    },
    content_three_content: {
      control: 'text',
      name: 'content',
      description: 'Third item content',
      table: { category: 'TimelineContent 3' },
    },
    content_three_linkLabel: {
      control: 'text',
      name: 'linkLabel',
      description: 'Third item link label',
      table: { category: 'TimelineContent 3' },
    },
    content_three_linkTo: {
      control: 'text',
      name: 'linkTo',
      description: 'Third item link url',
      table: { category: 'TimelineContent 3' },
    },
  },
  args: {
    timeline_horizontal: false,
    timeline_id: '',
    timeline_className: '',
    timeline_testId: '',
    item_one_done: true,
    item_one_active: false,
    item_one_cancel: false,
    marker_one_iconName: IconName.CHECK,
    content_one_heading: 'Order confirmed',
    content_one_content: 'Your order has been validated.',
    content_one_linkLabel: '',
    content_one_linkTo: '',
    item_two_done: false,
    item_two_active: true,
    item_two_cancel: false,
    marker_two_iconName: IconName.CLOCK,
    content_two_heading: 'Preparing shipment',
    content_two_content: 'We are preparing your package.',
    content_two_linkLabel: 'Track details',
    content_two_linkTo: '#',
    item_three_done: false,
    item_three_active: false,
    item_three_cancel: false,
    marker_three_iconName: IconName.CLOCK,
    content_three_heading: 'Delivered',
    content_three_content: 'Delivery is pending.',
    content_three_linkLabel: '',
    content_three_linkTo: '',
  },
  render: ({
    timeline_horizontal,
    timeline_id,
    timeline_className,
    timeline_testId,
    item_one_done,
    item_one_active,
    item_one_cancel,
    marker_one_iconName,
    content_one_heading,
    content_one_content,
    content_one_linkLabel,
    content_one_linkTo,
    item_two_done,
    item_two_active,
    item_two_cancel,
    marker_two_iconName,
    content_two_heading,
    content_two_content,
    content_two_linkLabel,
    content_two_linkTo,
    item_three_done,
    item_three_active,
    item_three_cancel,
    marker_three_iconName,
    content_three_heading,
    content_three_content,
    content_three_linkLabel,
    content_three_linkTo,
  }) => (
    <TimelineComponent
      horizontal={timeline_horizontal}
      id={timeline_id || undefined}
      className={timeline_className || undefined}
      testId={timeline_testId || undefined}
    >
      <TimelineItem done={item_one_done} active={item_one_active} cancel={item_one_cancel}>
        <TimelineMarker iconName={marker_one_iconName} />
        <TimelineContent
          heading={content_one_heading || undefined}
          content={content_one_content || undefined}
          linkLabel={content_one_linkLabel || undefined}
          linkTo={content_one_linkTo || undefined}
        />
      </TimelineItem>
      <TimelineItem done={item_two_done} active={item_two_active} cancel={item_two_cancel}>
        <TimelineMarker iconName={marker_two_iconName} />
        <TimelineContent
          heading={content_two_heading || undefined}
          content={content_two_content || undefined}
          linkLabel={content_two_linkLabel || undefined}
          linkTo={content_two_linkTo || undefined}
        />
      </TimelineItem>
      <TimelineItem done={item_three_done} active={item_three_active} cancel={item_three_cancel}>
        <TimelineMarker iconName={marker_three_iconName} />
        <TimelineContent
          heading={content_three_heading || undefined}
          content={content_three_content || undefined}
          linkLabel={content_three_linkLabel || undefined}
          linkTo={content_three_linkTo || undefined}
        />
      </TimelineItem>
    </TimelineComponent>
  ),
}

export default meta

type Story = StoryObj<TimelineStoryArgs>

export const Default: Story = {}

export const Horizontal: Story = {
  args: {
    timeline_horizontal: true,
  },
}

export const AllDone: Story = {
  args: {
    item_one_done: true,
    item_one_active: false,
    marker_one_iconName: IconName.CHECK,
    item_two_done: true,
    item_two_active: false,
    marker_two_iconName: IconName.CHECK,
    item_three_done: true,
    item_three_active: false,
    marker_three_iconName: IconName.CHECK,
  },
}

export const WithCancellation: Story = {
  args: {
    item_two_cancel: true,
    item_two_active: false,
    marker_two_iconName: IconName.TIMES_CIRCLE,
    content_two_heading: 'Order cancelled',
    content_two_content: 'This step has been cancelled by user request.',
  },
}

export const Playground: Story = {}
