import React from 'react'
import {
  Divider,
  IconName,
  Input,
  Menu,
  MenuItem,
  MenuScrolling,
  Section,
  SubMenuItem,
  Text,
  TextLevels,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'

export const MenuScreen = (): JSX.Element => {
  return (
    <>
      <Section>
        <Menu>
          <MenuItem onClick={() => alert('Click on item 1')} to='/'>
            <Text>Item 1</Text>
          </MenuItem>
          <MenuItem to='/' active>
            <Text>Item 2</Text>
          </MenuItem>
          <MenuItem>
            <SubMenuItem>
              <MenuItem to='/'>
                <Text>Item 3.1</Text>
              </MenuItem>
              <MenuItem to='/'>
                <Text>Item 3.2</Text>
              </MenuItem>
            </SubMenuItem>
          </MenuItem>
          <MenuItem to='/'>
            <Text>Item 3.3</Text>
          </MenuItem>
        </Menu>
      </Section>
      {/*
       * ##############
       * MENU DEROULANT
       * ##############
       */}
      <Section>
        <Title level={TitleLevels.THREE}>Menu Déroulant</Title>
        <Divider />
        <MenuScrolling hasBackgroundWhite>
          <Text level={TextLevels.ONE}>Miguel</Text>

          <Input placeholder='Search' hasIcon search />
          <Menu notASide>
            <MenuItem active arrow>
              Personnal information
            </MenuItem>
            <MenuItem arrow>About us</MenuItem>
            <MenuItem arrow badge={3}>
              <Text>Messagerie</Text>
            </MenuItem>
            <MenuItem arrow>
              <Text>Shopping</Text>
            </MenuItem>
          </Menu>
          <Menu notASide>
            <MenuItem arrow icon={IconName.INFOS_CIRCLE}>
              <Text>Help & Contact</Text>
            </MenuItem>
            <MenuItem arrow icon={IconName.BELL}>
              <Text>Shop inline</Text>
            </MenuItem>
          </Menu>
          <Menu notASide>
            <MenuItem icon={IconName.EXCLAMATION_CIRCLE}>
              <Text>Logout</Text>
            </MenuItem>
          </Menu>
        </MenuScrolling>
        <MenuScrolling pulled='right' hasBackgroundWhite>
          <Text level={TextLevels.ONE}>Miguel</Text>
          <Input placeholder='Search' hasIcon search />
          <Menu notASide>
            <MenuItem active arrow>
              Personnal information
            </MenuItem>
            <MenuItem arrow>About us</MenuItem>
            <MenuItem arrow badge={3}>
              <Text>Messagerie</Text>
            </MenuItem>
            <MenuItem arrow>
              <Text>Shopping</Text>
            </MenuItem>
          </Menu>
          <Menu notASide>
            <MenuItem arrow icon={IconName.INFOS_CIRCLE}>
              <Text>Help & Contact</Text>
            </MenuItem>
            <MenuItem arrow icon={IconName.BELL}>
              <Text>Shop inline</Text>
            </MenuItem>
          </Menu>
          <Menu notASide>
            <MenuItem icon={IconName.EXCLAMATION_CIRCLE}>
              <Text>Logout</Text>
            </MenuItem>
          </Menu>
        </MenuScrolling>
      </Section>
    </>
  )
}
