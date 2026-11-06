import { Spacing } from '@/objects/facets/Spacing'
import {
  AutoLayout,
  Column,
  Columns,
  IconName,
  List,
  ListIconStatus,
  ListItem,
  Section,
  Select,
  Text,
  TextLevels,
  Title,
  TitleLevels,
  SelectOption,
} from '@trilogy-ds/react/components'
import { useState } from 'react'

export const ListScreen = (): JSX.Element => {
  const [gap, setGap] = useState<Spacing | `${Spacing}`>('md')
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

        <List>
          <ListItem>
            <Columns>
              <Column>
                <Text>Test</Text>
              </Column>
            </Columns>
          </ListItem>
        </List>

        <Title level={TitleLevels.THREE}>List gap xxs</Title>

        <Select
          selected={gap}
          onChange={(e) => {
            setGap(e?.selectValue as Spacing)
          }}
        >
          <SelectOption value='none'>Gap none</SelectOption>
          <SelectOption value='xxs'>Gap xxs</SelectOption>
          <SelectOption value='xs'>Gap xs</SelectOption>
          <SelectOption value='sm'>Gap sm</SelectOption>
          <SelectOption value='md'>Gap md</SelectOption>
          <SelectOption value='lg'>Gap lg</SelectOption>
          <SelectOption value='xl'>Gap xl</SelectOption>
          <SelectOption value='xxl'>Gap xxl</SelectOption>
          <SelectOption value='xxxl'>Gap xxxl</SelectOption>
        </Select>
        <List gap={gap}>
          <ListItem>
            <Text level={TextLevels.ONE}>
              Ceci est un titre eci est un titre eci est un titre eci est un titre eci est un titre eci est un titre eci
              est un titre eci est un titre eci est un titre eci est un titre eci est un titre eci est un titre eci est
              un titre eci est un titre eci est un titre eci est un titre
            </Text>
          </ListItem>
          <ListItem>
            <Text level={TextLevels.ONE}>Lorem ipsum dolor sit, amet consectetur adipisicing elit</Text>
          </ListItem>
          <ListItem>
            <Text level={TextLevels.ONE}>test</Text>
          </ListItem>
        </List>
      </AutoLayout>
    </Section>
  )
}
