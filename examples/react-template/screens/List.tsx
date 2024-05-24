import {
  Checkbox,
  IconColor,
  IconName,
  Image,
  ListIconStatus,
  Radio,
  Switch,
  TrilogyColor,
  View,
  getColorStyle,
} from '@trilogy-ds/react'
import { List, ListItem, Section, Title, TitleLevels } from '@trilogy-ds/react/components'
import * as React from 'react'
import { Icon } from '../../../packages/react/components'

export const ListScreen = (): JSX.Element => {
  return (
    <>
      <Section>
        <Title level={TitleLevels.THREE}>List with divider</Title>
        <List>
          <ListItem
            title='Ceci est le titre'
            description='Lorem ipsum dolor sit amet consectetur '
          ></ListItem>
          <ListItem
            title='Ceci est le titre'
            description='Lorem ipsum dolor sit amet consectetur '
          ></ListItem>
          <ListItem
            title='Ceci est le titre'
            description='Lorem ipsum dolor sit amet consectetur '
          ></ListItem>
          <ListItem>
            <Title level='SIX'>Ceci est le titre</Title>
            {/* <ListItemDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dignissimos
              voluptatibus velit rerum id maxime quod? Qui suscipit,{' '}
            </ListItemDescription> */}
          </ListItem>
        </List>

        <Title level={TitleLevels.THREE}>List with action & title & description</Title>

        <List>
          <ListItem
            action={<Icon name='tri-trash' />}
            title='Ceci est le titre'
            description='Lorem ipsum dolor sit amet consectetur '
          ></ListItem>
          <ListItem
            inputAction={<Switch name='switch' onChange={(e) => console.log(e.switchState)} />}
            title='Ceci est le titre'
            description='Lorem ipsum dolor sit amet consectetur '
          ></ListItem>
          <ListItem
            inputAction={<Radio description={'lorem kenenf ns k '} narrow marginless />}
            title='Ceci est le titre'
            description='Lorem ipsum dolor sit amet consectetur '
          ></ListItem>
          <ListItem inputAction={<Checkbox />}>
            <Title level='SIX'>Ceci est le titre</Title>
            {/* <ListItemDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dignissimos
              voluptatibus velit rerum id maxime quod? Qui suscipit,{' '}
            </ListItemDescription> */}
          </ListItem>
        </List>

        <Title level={TitleLevels.THREE}>List with customIcon</Title>

        <List>
          <ListItem
            status={ListIconStatus.ERROR}
            customIcon={IconName.TIMES}
            title='Ceci est le titre'
            description='Lorem ipsum dolor sit amet consectetur '
          />
          <ListItem
            customIcon={<CustomIcon />}
            title='Ceci est le titre'
            description='Lorem ipsum dolor sit amet consectetur '
          />
          <ListItem
            customIcon={<Dot />}
            title='Ceci est le titre'
            description='Lorem ipsum dolor sit amet consectetur '
          />
          <ListItem customIcon={<Avatar />}>
            <Title level='SIX'>Ceci est le titre</Title>
            {/* <ListItemDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dignissimos
              voluptatibus velit rerum id maxime quod? Qui suscipit,{' '}
            </ListItemDescription> */}
          </ListItem>
        </List>

        <Title level={TitleLevels.THREE}>
          List with action & title & description && customIcon
        </Title>

        <List>
          <ListItem
            status={ListIconStatus.ERROR}
            customIcon={IconName.TIMES}
            action={<Icon name='tri-trash' size='small' />}
            title='Ceci est le titre'
            description='Lorem ipsum dolor sit amet consectetur '
          ></ListItem>
          <ListItem
            customIcon={<Icon name='tri-trash' size='small' />}
            inputAction={<Switch name='switch' onChange={(e) => console.log(e.switchState)} />}
          >
            <Title level='SIX'>Ceci est le titre</Title>
            {/* <ListItemDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dignissimos
              voluptatibus velit rerum id maxime quod? Qui suscipit,{' '}
            </ListItemDescription> */}
          </ListItem>
        </List>
      </Section>
    </>
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
      rounded
    />
  )
}

const CustomIcon = () => {
  return <Icon size='small' name='tri-alert' color={IconColor.INFO} />
}
