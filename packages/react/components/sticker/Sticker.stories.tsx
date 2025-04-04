import type { Meta, StoryObj } from '@storybook/react'
import { Sticker, Step, Section, Rows, Row, Columns, Column } from '../../lib'

const meta: Meta<typeof Sticker> = {
  component: Sticker,
  subcomponents: { Step },
}

export default meta

type Story = StoryObj<typeof Sticker>


// @ts-ignore
export const Example: Story = {
  render: () => (
    <Section>
      <Rows>
        <Row>
          <Columns align="ALIGNED_CENTER" mobile>
            <Column className="is-flex is-aligned-center" narrow>
              <Sticker label="Information" variant="MAIN" />
            </Column>
            <Column className="is-flex is-aligned-center" narrow>
              <Sticker label="Information" small variant="MAIN" />
            </Column>
          </Columns>
        </Row>
        <Row>
          <Columns align="ALIGNED_CENTER" mobile>
            <Column className="is-flex is-aligned-center" narrow>
              <Sticker label="Code Promo" variant="ACCENT" />
            </Column>
            <Column className="is-flex is-aligned-center" narrow>
              <Sticker label="Code Promo" small variant="ACCENT" />
            </Column>
          </Columns>
        </Row>
      </Rows>
    </Section>
  ),
}
