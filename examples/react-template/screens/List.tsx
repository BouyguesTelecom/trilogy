import {
  AutoLayout,
  IconName,
  List,
  ListIconStatus,
  ListItem,
  Section,
  Text,
  TextLevels,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'
import * as React from 'react'

export const ListScreen = (): JSX.Element => {
  return (
    <Section>
      <AutoLayout>
        <Title level={TitleLevels.THREE}>List simple</Title>
        <List>
          <ListItem>
            <Text level={TextLevels.ONE}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, architecto aliquam neque minima impedit,
              doloremque magni eveniet sapiente asperiores dolor aspernatur numquam voluptates vitae molestias porro
              suscipit praesentium totam odio.
            </Text>
          </ListItem>
          <ListItem>
            <Text level={TextLevels.ONE}>Ceci est la description</Text>
          </ListItem>
          <ListItem>
            <Text level={TextLevels.ONE}>Ceci est la description</Text>
          </ListItem>
        </List>

        <List ordered>
          <ListItem>
            <Text level={TextLevels.ONE}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, architecto aliquam neque minima impedit,
              doloremque magni eveniet sapiente asperiores dolor aspernatur numquam voluptates vitae molestias porro
              suscipit praesentium totam odio.
            </Text>
          </ListItem>
          <ListItem>
            <Text level={TextLevels.ONE}>Ceci est la description</Text>
          </ListItem>
          <ListItem>
            <Text level={TextLevels.ONE}>Ceci est la description</Text>
          </ListItem>
        </List>

        <Title level={TitleLevels.THREE}>List with icons</Title>
        <List>
          <ListItem iconName={IconName.ALERT}>
            <Text level={TextLevels.ONE}>
              <Text>Ceci est un titre</Text>
            </Text>
            <Text level={TextLevels.ONE}>Ceci est la description</Text>
          </ListItem>
          <ListItem iconName={IconName.ALERT}>
            <Text level={TextLevels.ONE}>
              <Text>Ceci est un titre</Text>
            </Text>
            <Text level={TextLevels.ONE}>Ceci est la description</Text>
          </ListItem>
          <ListItem iconName={IconName.ALERT}>
            <Text level={TextLevels.ONE}>
              <Text>Ceci est un titre</Text>
            </Text>
            <Text level={TextLevels.ONE}>Ceci est la description</Text>
          </ListItem>
        </List>

        <Title level={TitleLevels.THREE}>List with divider</Title>
        <List divider>
          <ListItem iconName={IconName.ALERT} status={ListIconStatus.ERROR}>
            <Text level={TextLevels.ONE}>
              <Text>Ceci est un titre</Text>
            </Text>
            <Text level={TextLevels.ONE}>Ceci est la description</Text>
          </ListItem>
          <ListItem iconName={IconName.ALERT} status={ListIconStatus.SUCCESS}>
            <Text level={TextLevels.ONE}>
              <Text>Ceci est un titre</Text>
            </Text>
            <Text level={TextLevels.ONE}>Ceci est la description</Text>
          </ListItem>
          <ListItem iconName={IconName.ALERT}>
            <Text level={TextLevels.ONE}>
              <Text>Ceci est un titre</Text>
            </Text>
            <Text level={TextLevels.ONE}>Ceci est la description</Text>
          </ListItem>
        </List>
      </AutoLayout>
    </Section>
  )
}
