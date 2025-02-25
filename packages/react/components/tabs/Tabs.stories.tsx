import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import Tabs from './Tabs'
import { TabsProps } from './TabsProps'
import { StepProps } from '../stepper/step/StepProps'
import { StepperProps } from '../stepper/StepperProps'
import { Stepper } from '../stepper'
import Step from '../stepper/step'
import { TabProps } from './tab-list/tab/TabProps'
import { Tab, TabList, TabPanel, TabPanels } from './index'
import { IconName } from '../icon'
import { Alignable } from '../../objects'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  subcomponents: { Tab, TabList, TabPanel, TabPanels },
  argTypes: {
    align: {
      options: Object.values(Alignable),
      mapping: Object.assign({}, Alignable),
      table: {
        type: { summary: 'Alignable' },
      },
    },
    verticalAlign: {
      control: 'select',
      options: Object.values(Alignable),
      mapping: Object.assign({}, Alignable),
      table: {
        type: { summary: 'Alignable' },
      },
    },
  },
} satisfies Meta<TabsProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: TabsProps) => (
  // L'utilisation des Tabs nécessite l'injection de Trilogy-Vanilla pour fonctioner :
  // <script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script>
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

const TemplatePanel = (args: TabsProps) => (
  // L'utilisation des Tabs nécessite l'injection de Trilogy-Vanilla pour fonctioner :
  // <script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script>
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

export const Base: Story = {
  render: Template,
  args: {
    activeIndex: 2,
  },
}

export const Inversé: Story = {
  render: Template,
  args: {
    inverted: true,
  },
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
}

export const AvecPanel: Story = {
  render: TemplatePanel,
}
