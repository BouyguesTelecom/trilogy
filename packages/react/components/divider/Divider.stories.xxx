import type { Meta, StoryObj } from '@storybook/react'
import { Box, Row, Rows, Title } from '../../lib'
import Divider from './Divider'
import { BoxContent } from '../box'

const meta: Meta<typeof Divider> = {
  component: Divider,
}

export default meta

type Story = StoryObj<typeof Divider>


export const Example: Story = {
  render: () => (
    <Box>
      <BoxContent>
        <Rows>
          <Row>
            <Title level={6}> Divider avec icon </Title>
            <Divider iconName="tri-times" />
          </Row>
          <Row>
            <Title level={6}> Divider simple </Title>
            <Divider />
          </Row>
          <Row>
            <Title level={6}> Divider sans marges </Title>
            <Divider marginless/>
          </Row>
        </Rows>
      </BoxContent>
    </Box>
  ),
}


export const Sandbox: Story = {
  render: (args) => (
    <Box>
      <BoxContent>
        <Rows>
          <Row>
            <Title level={6}> Divider avec icon </Title>
            <Divider {...args} />
          </Row>
          <Row>
            <Title level={6}> Divider simple </Title>
          </Row>
        </Rows>
      </BoxContent>
    </Box>
  ),
  args:{
    iconName: 'tri-times',
    marginless: false,
    className: undefined,
    testId: 'testId',
    id: 'id',
    accessibilityLabel: "accessibilityLabel",
  }
}
