import type { Meta, StoryObj } from '@storybook/react'
import { Sticker, Step, Section, Rows, Row, Columns, Column, VariantState } from '../../lib'

const meta: Meta<typeof Sticker> = {
  component: Sticker,
  argTypes:{
    className: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    small: {
      control: { type: 'boolean' },
    },
    variant: {
      options: [VariantState.MAIN, VariantState.ACCENT, VariantState.INFO],
      control: { type: 'inline-radio' },
    },
  }
}

export default meta

type Story = StoryObj<typeof Sticker>

export const Example: Story = {
  render: () => (
    <Section>
      <Rows>
        <Row>
          <Columns align='ALIGNED_CENTER' mobile>
            <Column className='is-flex is-aligned-center' narrow>
              <Sticker label='Information' variant='MAIN' />
            </Column>
            <Column className='is-flex is-aligned-center' narrow>
              <Sticker label='Information' small variant='MAIN' />
            </Column>
          </Columns>
        </Row>
        <Row>
          <Columns align='ALIGNED_CENTER' mobile>
            <Column className='is-flex is-aligned-center' narrow>
              <Sticker label='Code Promo' variant='ACCENT' />
            </Column>
            <Column className='is-flex is-aligned-center' narrow>
              <Sticker label='Code Promo' small variant='ACCENT' />
            </Column>
          </Columns>
        </Row>
      </Rows>
    </Section>
  ),
}

export const Sandbox: Story = {
  render: (args) => (
    <Section>
      <Columns align='ALIGNED_CENTER' mobile>
        <Column className='is-flex is-aligned-center' narrow>
          <Sticker label='Information' variant='MAIN' />
        </Column>
        <Column className='is-flex is-aligned-center' narrow>
          <Sticker {...args} />
        </Column>
      </Columns>
    </Section>
  ),
  args: {
    label: 'Information',
    variant: 'MAIN',
    small: false,
    className: '',
  },
}
