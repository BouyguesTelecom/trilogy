import type { Meta, StoryObj } from '@storybook/react'
import { Box, Column, Row, Rows, Spacer, SpacerSize, Title } from '../../lib'
import Columns from './Columns'

const meta: Meta<typeof Columns> = {
  component: Columns,
  subcomponents: { Column },
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
