import type { Meta, StoryObj } from '@storybook/react'
import List from './List'
import { Text } from '../text'
import { Column, Columns, ListItem, Row, Rows, Title } from '../../lib'
import { IconName } from '../icon'

const meta: Meta<typeof List> = {
  component: List,
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
          <ListItem iconName="tri-alert">
            <Text>
              <b> Ceci est un titre </b>
            </Text>
            <Text> Ceci est la description </Text>
          </ListItem>
          <ListItem iconName="tri-alert">
            <Text>
              <b> Ceci est un titre </b>
            </Text>
            <Text> Ceci est la description </Text>
          </ListItem>
          <ListItem iconName="tri-alert">
            <Text>
              <b> Ceci est un titre </b>
            </Text>
            <Text> Ceci est la description </Text>
          </ListItem>
        </List>
      </Column>
    </Columns>
  ),
};

export const With_Divider: Story = {
  render: () => (
    <Columns gap={8} multiline>
      <Column size={6}>
        <Title level={6}> Liste avec divider </Title>
        <List divider>
          <ListItem iconName="tri-alert" status="ERROR">
            <Text>
              <b> Ceci est un titre </b>
            </Text>
            <Text> Ceci est la description </Text>
          </ListItem>
          <ListItem iconName="tri-alert" status="SUCCESS">
            <Text>
              <b> Ceci est un titre </b>
            </Text>
            <Text> Ceci est la description </Text>
          </ListItem>
          <ListItem iconName="tri-alert">
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
