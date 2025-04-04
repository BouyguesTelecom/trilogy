import type { Meta, StoryObj } from '@storybook/react'
import Alert from './Alert'
import { AlertMarkup } from './AlertEnum'
import { StatusState } from '../../objects'
import { Columns } from '../columns'
import { Column } from '../../lib'

const meta: Meta<typeof Alert> = {
  component: Alert,
}

export default meta;

type Story = StoryObj<typeof Alert>;

export const Status: Story = {
  render: () => (
    <Columns>
      <Column><Alert title={"Alert : information"} status={StatusState.INFO} /></Column>
      <Column><Alert title={"Alert : success"} status={StatusState.SUCCESS} /></Column>
      <Column><Alert title={"Alert : information"} status={StatusState.WARNING} /></Column>
      <Column><Alert title={"Alert : information"} status={StatusState.ERROR} /></Column>
    </Columns>
  ),
};

export const Descriptions: Story = {
  render: () => (
    <Columns>
      <Column><Alert
        markup={AlertMarkup.H2}
        title={"Alert 1 ligne"}
        status={StatusState.INFO}
        description={"Description : courte 1 ligne"}
      />
      </Column>
      <Column><Alert
        markup={AlertMarkup.H3}
        title={"Alert 2 lignes"}
        status={StatusState.INFO}
        description={"Description : Un peu plus longue, mais pas trop non plus, 2 lignes"}
      />
      </Column>
      <Column><Alert
        markup={AlertMarkup.H4}
        title={"Alert 3 lignes"}
        status={StatusState.INFO}
        description={"Description : Cette description est un peu plus longue, mais pas trop non plus, pour ne pas trop abuser, 3 lignes"}
      />
      </Column>
      <Column><Alert
        markup={AlertMarkup.H5}
        title={"Alert 4 lignes !"}
        status={StatusState.INFO}
        description={"Description : Cette description est bien plus longue, pour un peu abuser. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 4 lignes !"}
      />
      </Column>
    </Columns>
  ),
};
