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
          <ListItem iconName={IconName.ALERT} status={ListIconStatus.WARNING}>
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

        <List>
          <ListItem iconName={IconName.ALERT}>
            <Text level={TextLevels.ONE}>
              Ceci est un titre eci est un titre eci est un titre eci est un titre eci est un titre eci est un titre eci
              est un titre eci est un titre eci est un titre eci est un titre eci est un titre eci est un titre eci est
              un titre eci est un titre eci est un titre eci est un titre
            </Text>
          </ListItem>
          <ListItem iconName={IconName.ALERT}>
            <Text level={TextLevels.ONE}>Ceci est un titre </Text>
          </ListItem>
          <ListItem iconName={IconName.ALERT}>
            <Text level={TextLevels.ONE}>Ceci est un titre </Text>
          </ListItem>
        </List>

        <Title level={TitleLevels.THREE}>List ul ol</Title>
        <List ordered>
          <ListItem>
            <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
          </ListItem>
          <ListItem>
            <List>
              <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
            </List>
          </ListItem>
          <ListItem>
            <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
          </ListItem>
          <ListItem>
            <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
            <List>
              <ListItem>
                <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
              </ListItem>
              <ListItem>
                <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
              </ListItem>
            </List>
          </ListItem>
          <ListItem>
            <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
          </ListItem>
          <ListItem>
            <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
          </ListItem>
        </List>
      </AutoLayout>
    </Section>
  )
}
