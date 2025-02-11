import { Container, Icon, IconName, List, ListIconStatus, ListItem, Section, Text, TextLevels, Title, TitleLevels } from '@trilogy-ds/react'
import * as React from 'react'

export const ListScreen = (): JSX.Element => {
  return (
    <Section>
      <Container>
        <Title level={TitleLevels.THREE}>List simple non ordonnée</Title>

        <List>
          <ListItem>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam augue turpis, scelerisque vel tempus congue, egestas in lorem. Donec vel pellentesque turpis.</Text>
          </ListItem>
          <ListItem>
            <Text level={TextLevels.ONE}>Ceci est la description</Text>
          </ListItem>
          <ListItem>
            <Text level={TextLevels.ONE}>Ceci est la description</Text>
          </ListItem>
        </List>
        <Title level={TitleLevels.THREE}>List simple ordonnée</Title>

        <ol className={'list'}>
          <li className={"list-item"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam augue turpis, scelerisque vel tempus congue</li>
          <li className={"list-item"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam augue turpis, scelerisque vel tempus congue</li>
          <li className={"list-item"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam augue turpis, scelerisque vel tempus congue</li>
          <li className={"list-item"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam augue turpis, scelerisque vel tempus congue</li>
          <li className={"list-item"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam augue turpis, scelerisque vel tempus congue</li>
        </ol>

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
      </Container>
    </Section>
  )
}
