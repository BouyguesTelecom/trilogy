import React from 'react'

import { Meta, Story } from '@storybook/react'

import { Tabs, TabsItem } from './index'
import { TabsProps } from './TabsProps'
import { IconName } from '../icon'

export default {
  title: 'Components/Tabs',
  component: Tabs,
  subcomponents: { TabsItem },
} as Meta

export const Base: Story<TabsProps> = (args) => (
  /* L'utilisation des Tabs nécessite l'injection de Trilogy-Vanilla pour fonctioner :
<script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script>
*/
  <Tabs {...args}>
    <TabsItem disabled>
      One
    </TabsItem>
    <TabsItem>Two</TabsItem>
    <TabsItem>Three</TabsItem>
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
    <TabsItem disabled>
      One
    </TabsItem>
    <TabsItem disabled>Two</TabsItem>
    <TabsItem disabled>Three</TabsItem>
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
    <TabsItem disabled iconName={IconName.BELL}>
      One
    </TabsItem>
    <TabsItem iconName={IconName.BELL}>Two</TabsItem>
    <TabsItem iconName={IconName.BELL}>Three</TabsItem>
  </Tabs>
)
AvecIcone.args = {
  activeIndex: 2,
}

export const Inversé: Story<TabsProps> = (args) => (
  <Tabs {...args}>
    <TabsItem disabled iconName={IconName.BELL}>
      One
    </TabsItem>
    <TabsItem iconName={IconName.BELL}>Two</TabsItem>
    <TabsItem iconName={IconName.BELL}>Three</TabsItem>
  </Tabs>
)
Inversé.args = {
  activeIndex: 2,
  inverted: true,
}
