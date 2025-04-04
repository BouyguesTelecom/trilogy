import type { Meta, StoryObj } from '@storybook/react'
import { Column, Columns, Container } from '../../lib'
import Fab from './Fab'

const meta: Meta<typeof Fab> = {
  component: Fab,
}

export default meta

type Story = StoryObj<typeof Fab>


export const Example: Story = {
  render: () => (
    <Container>
      <Columns align="ALIGNED_CENTER">
        <Column narrow>
          <Fab iconName="tri-check"> Ecrire </Fab>
        </Column>
        <Column narrow>
          <Fab extended iconName="tri-bell"> Extended fab </Fab>
        </Column>
      </Columns>
      <Fab bottom={1} iconName="tri-bell" > Fab - bottom</Fab>
      <Fab left={1} iconName="tri-bell" > Fab - left </Fab>
      <Fab right={1} iconName="tri-bell" > Fab - right</Fab>
    </Container>
  ),
}
