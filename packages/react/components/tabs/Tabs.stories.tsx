import * as React from 'react'

import { Meta, Story } from '@storybook/react'

import { Tab, TabList, TabPanel, TabPanels, Tabs } from './index'
import { TabsProps } from './TabsProps'
import { IconName } from '../icon'

export default {
  title: 'Components/Tabs',
  component: Tabs,
  subcomponents: { Tab, TabList, TabPanels, TabPanel },
} as Meta

export const Base: Story<TabsProps> = (args) => (
  /* L'utilisation des Tabs nécessite l'injection de Trilogy-Vanilla pour fonctioner :
<script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script>
*/
  <Tabs {...args}>
    <TabList>
      <Tab disabled>One</Tab>
      <Tab>Two</Tab>
      <Tab>Three</Tab>
    </TabList>
  </Tabs>
)
Base.args = {
  activeIndex: 2,
}

export const Disabled: Story<TabsProps> = (args) => (
  /* L'utilisation des Tabs nécessite l'injection de Trilogy-Vanilla pour fonctioner :
<script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script>
*/
  <Tabs {...args}>
    <TabList>
      <Tab disabled>One</Tab>
      <Tab disabled>Two</Tab>
      <Tab disabled>Three</Tab>
    </TabList>
  </Tabs>
)
Disabled.args = {
  activeIndex: 2,
}

export const AvecIcone: Story<TabsProps> = (args) => (
  /* L'utilisation des Tabs nécessite l'injection de Trilogy-Vanilla pour fonctioner :
<script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script>
*/
  <Tabs {...args}>
    <TabList>
      <Tab disabled iconName={IconName.BELL}>
        One
      </Tab>
      <Tab iconName={IconName.BELL}>Two</Tab>
      <Tab iconName={IconName.BELL}>Three</Tab>
    </TabList>
  </Tabs>
)
AvecIcone.args = {
  activeIndex: 2,
}

export const Inversé: Story<TabsProps> = (args) => (
  <Tabs {...args}>
    <TabList>
      <Tab disabled iconName={IconName.BELL}>
        One
      </Tab>
      <Tab iconName={IconName.BELL}>Two</Tab>
      <Tab iconName={IconName.BELL}>Three</Tab>
    </TabList>
  </Tabs>
)
Inversé.args = {
  activeIndex: 2,
  inverted: true,
}


export const AvecPanel: Story<TabsProps> = (args) => (
  <Tabs {...args}>
    <TabList>
      <Tab disabled iconName={IconName.BELL}>
        One
      </Tab>
      <Tab iconName={IconName.BELL}>Two</Tab>
      <Tab iconName={IconName.BELL}>Three</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>Panel One</TabPanel>
      <TabPanel>Panel Two</TabPanel>
      <TabPanel>Panel Three</TabPanel>
    </TabPanels>
  </Tabs>
)
AvecPanel.args = {}
