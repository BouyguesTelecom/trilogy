import { getColorStyle, IconColor, Image, TrilogyColor, View } from '@trilogy-ds/react'
import {
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
import { Icon } from '../../../packages/react/components'

export const ListScreen = (): JSX.Element => {
  return (
    <Section>
      <Title level={TitleLevels.THREE}>List simple</Title>
      <List>
        <ListItem>
          <Text level={TextLevels.ONE}>
            <span>Hello</span>
            <span>Ceci est la description</span>
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
            <b>Ceci est un titre</b>
          </Text>
          <Text level={TextLevels.ONE}>Ceci est la description</Text>
        </ListItem>
        <ListItem iconName={IconName.ALERT}>
          <Text level={TextLevels.ONE}>
            <b>Ceci est un titre</b>
          </Text>
          <Text level={TextLevels.ONE}>Ceci est la description</Text>
        </ListItem>
        <ListItem iconName={IconName.ALERT}>
          <Text level={TextLevels.ONE}>
            <b>Ceci est un titre</b>
          </Text>
          <Text level={TextLevels.ONE}>Ceci est la description</Text>
        </ListItem>
      </List>

      <Title level={TitleLevels.THREE}>List with divider</Title>
      <List divider>
        <ListItem iconName={IconName.ALERT} status={ListIconStatus.ERROR}>
          <Text level={TextLevels.ONE}>
            <b>Ceci est un titre</b>
          </Text>
          <Text level={TextLevels.ONE}>Ceci est la description</Text>
        </ListItem>
        <ListItem iconName={IconName.ALERT} status={ListIconStatus.SUCCESS}>
          <Text level={TextLevels.ONE}>
            <b>Ceci est un titre</b>
          </Text>
          <Text level={TextLevels.ONE}>Ceci est la description</Text>
        </ListItem>
        <ListItem iconName={IconName.ALERT}>
          <Text level={TextLevels.ONE}>
            <b>Ceci est un titre</b>
          </Text>
          <Text level={TextLevels.ONE}>Ceci est la description</Text>
        </ListItem>
      </List>
    </Section>
  )
}

const Dot = () => {
  return (
    <View
      style={{
        width: 8,
        height: 8,
        borderRadius: 8,
        backgroundColor: getColorStyle(TrilogyColor.MAIN),
      }}
    />
  )
}

const Avatar = () => {
  return (
    <Image
      src='https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg'
      width={40}
      height={40}
      circled
    />
  )
}

const CustomIcon = () => {
  return <Icon size='small' name='tri-alert' color={IconColor.INFO} />
}
