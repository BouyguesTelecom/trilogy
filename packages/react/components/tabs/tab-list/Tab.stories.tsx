import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import Tabs from '../Tabs'
import { TabsProps } from '../TabsProps'
import { StepProps } from '../../stepper/step/StepProps'
import { StepperProps } from '../../stepper/StepperProps'
import { Stepper } from '../../stepper'
import Step from '../../stepper/step'
import { TabProps } from './tab/TabProps'
import { Tab, TabList, TabPanel, TabPanels } from '../index'
import { IconName } from '../../icon'

const meta = {
  title: 'Components/Tabs/Tab',
  component: Tab,
  subcomponents: { Tabs, TabList, TabPanel, TabPanels },
} satisfies Meta<TabsProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: TabProps) => (
  // L'utilisation des Tabs nécessite l'injection de Trilogy-Vanilla pour fonctioner :
  // <script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script>
  <Tabs activeIndex={2}>
    <TabList>
      <Tab {...args}>Controled</Tab>
      <Tab iconName={IconName.CHECK_CIRCLE}>Two</Tab>
      <Tab iconName={IconName.TIMES_CIRCLE}>Three</Tab>
    </TabList>
  </Tabs>
)

export const Disabled: Story = {
  render: Template,
  args: {
    disabled: true,
  },
}

export const AvecIcone: Story = {
  render: Template,
  args: {
    iconName: IconName.BELL,
  },
}
