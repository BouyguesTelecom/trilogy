import type { Meta, StoryObj } from '@storybook/react'
import List from './List'
import { Text } from '../text'
import { Column, Columns, ListItem, Row, Rows, Title } from '../../lib'
import { IconName } from '../icon'
import { TitleLevels } from '../title'

const meta: Meta<typeof List> = {
  component: List,
  subcomponents: { ListItem },
  argTypes:{
    divider: {
      control: { type: 'boolean' },
    },
  }
}

export default meta

type Story = StoryObj<typeof List>

// @ts-ignore
export const Simples: Story = {
  render: () => (
    <Columns gap={8} multiline>
      <Column size={6}>
        <Title level={6}> Liste simple </Title>
        <List>
          <ListItem>
            <Text> Élement de liste </Text>
          </ListItem>
          <ListItem>
            <Text> Élement de liste </Text>
          </ListItem>
          <ListItem>
            <Text> Élement de liste </Text>
          </ListItem>
        </List>
      </Column>
      <Column size={6}>
        <Title level={6}> Liste simple numerotée </Title>
        <List ordered>
          <ListItem>
            <Text> Élement de liste </Text>
          </ListItem>
          <ListItem>
            <Text> Élement de liste </Text>
          </ListItem>
          <ListItem>
            <Text> Élement de liste </Text>
          </ListItem>
        </List>
      </Column>
    </Columns>
  ),
}

export const With_Icons: Story = {
  render: () => (
    <Columns gap={8} multiline>
      <Column size={6}>
        <Title level={6}> Liste avec icons </Title>
        <List>
          <ListItem iconName='tri-alert'>
            <Text>
              <b> Ceci est un titre </b>
            </Text>
            <Text> Ceci est la description </Text>
          </ListItem>
          <ListItem iconName='tri-alert'>
            <Text>
              <b> Ceci est un titre </b>
            </Text>
            <Text> Ceci est la description </Text>
          </ListItem>
          <ListItem iconName='tri-alert'>
            <Text>
              <b> Ceci est un titre </b>
            </Text>
            <Text> Ceci est la description </Text>
          </ListItem>
        </List>
      </Column>
    </Columns>
  ),
}

export const With_Divider: Story = {
  render: () => (
    <Columns gap={8} multiline>
      <Column size={6}>
        <Title level={6}> Liste avec divider </Title>
        <List divider>
          <ListItem iconName='tri-alert' status='ERROR'>
            <Text>
              <b> Ceci est un titre </b>
            </Text>
            <Text> Ceci est la description </Text>
          </ListItem>
          <ListItem iconName='tri-alert' status='SUCCESS'>
            <Text>
              <b> Ceci est un titre </b>
            </Text>
            <Text> Ceci est la description </Text>
          </ListItem>
          <ListItem iconName='tri-alert'>
            <Text>
              <b> Ceci est un titre </b>
            </Text>
            <Text> Ceci est la description </Text>
          </ListItem>
        </List>
      </Column>
    </Columns>
  ),
}

const ListTemplate: Story = {
  render: ({ items, ...args }) => {
    return (
      <Columns gap={8} multiline>
        <Column size={6}>
          <List {...args}>
            {items.map((item) => (
              <ListItem {...item}>
                <Title level={item.titleLevel}>{item.title}</Title>
                <Text>{item.text}</Text>
              </ListItem>
            ))}
          </List>
        </Column>
      </Columns>
    )
  },
}

export const Sandbox: Story = {
  ...ListTemplate,
  args: {
    items: [
      {
        iconName: 'tri-alert' as IconName,
        title: 'Ceci est un titre',
        text: 'Ceci est la description',
        titleLevel: 5,
      },
      {
        iconName: 'tri-alert' as IconName,
        title: 'Ceci est un titre',
        text: 'Ceci est la description',
        titleLevel: 5,
      },
      {
        iconName: 'tri-alert' as IconName,
        title: 'Ceci est un titre',
        text: 'Ceci est la description',
        titleLevel: 5,
      },
    ],
    divider: true,
  },
}
