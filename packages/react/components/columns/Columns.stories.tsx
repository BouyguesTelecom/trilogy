import type { Meta, StoryObj } from '@storybook/react'
import { Box, Column, Row, Rows, Spacer, SpacerSize, Title } from '../../lib'
import Columns from './Columns'

const meta: Meta<typeof Columns> = {
  component: Columns,
  subcomponents: { Column },
  argTypes: {
    size: {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      control: { type: 'inline-radio' },
    },
    align: {
      control: { type: 'inline-radio' },
      options: [
        'ALIGNED_LEFT',
        'ALIGNED_CENTER',
        'ALIGNED_RIGHT',
        'ALIGNED_JUSTIFIED',
      ],
    },
    scrollable: {
      control: { type: 'boolean' },
    },
    multiline: {
      control: { type: 'boolean' },
    },
  }
}

export default meta

type Story = StoryObj<typeof Columns>


export const Example: Story = {
  render: () => (
    <Columns multiline>
      <Column align="ALIGNED_CENTER" narrow>
        <Rows>
          <Row>
            <Title level={6}> Nous sommes 2 colonnes simples </Title>
            <Columns className="is-fullwidth">
              <Column>
                <Box flat>
                  <Title level={2}> Column </Title>
                </Box>
              </Column>
              <Column>
                <Box flat>
                  <Title level={2}> Column </Title>
                </Box>
              </Column>
            </Columns>
          </Row>
          <Spacer size={SpacerSize.TEN}/>
          <Row>
            <Title level={6}> Nous sommes des colonnes multiline </Title>
            <Columns className="is-fullwidth" multiline>
              <Column size={7}>
                <Box flat>
                  <Title level={2}> Column </Title>
                </Box>
              </Column>
              <Column size={5}>
                <Box flat>
                  <Title level={2}> Column </Title>
                </Box>
              </Column>
              <Column size={4}>
                <Box flat>
                  <Title level={2}> Column </Title>
                </Box>
              </Column>
              <Column size={8}>
                <Box flat>
                  <Title level={2}> Column </Title>
                </Box>
              </Column>
            </Columns>
          </Row>
          <Spacer size={SpacerSize.TEN}/>
          <Row>
            <Title level={6}> Nous sommes des colonnes inlined </Title>
            <Columns className="is-fullwidth" scrollable>
              <Column size={5}>
                <Box flat>
                  <Title level={2}> Column </Title>
                </Box>
              </Column>
              <Column size={5}>
                <Box flat>
                  <Title level={2}> Column </Title>
                </Box>
              </Column>
              <Column size={5}>
                <Box flat>
                  <Title level={2}> Column </Title>
                </Box>
              </Column>
              <Column size={5}>
                <Box flat>
                  <Title level={2}> Column </Title>
                </Box>
              </Column>
              <Column size={5}>
                <Box flat>
                  <Title level={2}> Column </Title>
                </Box>
              </Column>
            </Columns>
          </Row>
        </Rows>
      </Column>
    </Columns>
  ),
}


export const Sandbox: Story = {
  render: (args) => (
    <Columns multiline>
      <Column align="ALIGNED_CENTER">
        <Rows>
          <Row>
            <Title level={6}> Je suis une colonne simple </Title>
            <Columns className="is-fullwidth">
              <Column {...args}>
                <Box flat>
                  <Title level={2}> Column </Title>
                </Box>
              </Column>
            </Columns>
          </Row>
        </Rows>
      </Column>
    </Columns>
  ),
  args: {
    size: 5,
    align: 'ALIGNED_CENTER',
    narrow: false,
    scrollable: false,
    multiline: false,
    className: undefined,
    testId: 'testId',
    id: 'id',
    accessibilityLabel: "accessibilityLabel",
  }
}
