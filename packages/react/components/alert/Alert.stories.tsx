import type { Meta, StoryObj } from '@storybook/react'
import Alert from './Alert'
import { AlertMarkup } from './AlertEnum'
import { StatusState } from '../../objects'
import { Columns } from '../columns'
import { Column } from '../../lib'

const meta: Meta<typeof Alert> = {
  component: Alert,
  argTypes: {
    status: {
      options:[StatusState.INFO, StatusState.WARNING, StatusState.ERROR, StatusState.SUCCESS],
      control: { type: 'inline-radio' },
    },
  },
}

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: (args) => (
    <Columns>
      <Column size={4}>
        <Alert {...args}/>
      </Column>
    </Columns>
  ),
  args:{
    markup: AlertMarkup.H2,
    title: "Alerte !",
    description: "Je suis dans une colonne de taille 4",
    id: "id",
    accessibilityLabel: "accessibilityLabel",
    testId: "testId",
    iconName: "tri-search",
    toaster: false,
    banner: false,
  }
};
