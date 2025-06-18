import type { Meta, StoryObj } from '@storybook/react'
import { Column, Columns, Section, Spacer, SpacerSize, Text, TrilogyColor, TypographyBold } from '../../lib'

const meta: Meta<typeof Text> = {
  component: Text,
  argTypes: {
    className: {
      control: { type: 'text' },
    },
    children: {
      control: { type: 'text' },
    },
    level: {
      options: [1, 2, 3],
      control: { type: 'inline-radio' },
    },
    markup: {
      options: ['p', 'span'],
      control: { type: 'inline-radio' },
    },
    typo: {
      options: [
        TypographyBold.TEXT_WEIGHT_NORMAL,
        TypographyBold.TEXT_WEIGHT_MEDIUM,
        TypographyBold.TEXT_WEIGHT_SEMIBOLD,
        TypographyBold.TEXT_WEIGHT_BOLD,
      ],
      control: { type: 'inline-radio' },
    },
    inverted: {
      control: { type: 'boolean' },
    },
    marginless: {
      control: { type: 'boolean' },
    },
    numberOfLines: {
      control: { type: 'range', min: 1, max: 5, step: 1 },
    },
  },
}

export default meta

type Story = StoryObj<typeof Text>

export const Example: Story = {
  render: () => (
    <Section>
      <Columns multiline>
        <Column size={12}>
          <Text accessibilityLabel='Ceci est un paragraphe' level={1} markup='p' typo='has-text-weight-semibold'>
            {' '}
            Ceci est mon paragraphe semibold level 1
          </Text>
        </Column>
        <Spacer size={SpacerSize.THREE} />
        <Column size={12}>
          <Text accessibilityLabel='Ceci est un paragraphe' level={2} markup='p' typo='has-text-weight-semibold'>
            {' '}
            Ceci est mon paragraphe semibold level 2
          </Text>
        </Column>
        <Spacer size={SpacerSize.THREE} />
        <Column size={12}>
          <Text accessibilityLabel='Ceci est un paragraphe' level={3} markup='p' typo='has-text-weight-semibold'>
            {' '}
            Ceci est mon paragraphe semibold level 3
          </Text>
        </Column>
        <Spacer size={SpacerSize.SEVEN} />
        <Column size={12}>
          <Text
            accessibilityLabel='Ceci est un paragraphe'
            level={1}
            markup='p'
            typo={TypographyBold.TEXT_WEIGHT_MEDIUM}
          >
            {' '}
            Ceci est mon paragraphe weight medium level 1
          </Text>
        </Column>
        <Spacer size={SpacerSize.THREE} />
        <Column size={12}>
          <Text
            accessibilityLabel='Ceci est un paragraphe'
            level={2}
            markup='p'
            typo={TypographyBold.TEXT_WEIGHT_MEDIUM}
          >
            {' '}
            Ceci est mon paragraphe weight medium level 2
          </Text>
        </Column>
        <Spacer size={SpacerSize.THREE} />
        <Column size={12}>
          <Text
            accessibilityLabel='Ceci est un paragraphe'
            level={3}
            markup='p'
            typo={TypographyBold.TEXT_WEIGHT_MEDIUM}
          >
            {' '}
            Ceci est mon paragraphe weight medium level 3
          </Text>
        </Column>
      </Columns>
    </Section>
  ),
}

export const Sandbox: Story = {
  render: (args) => (
    <>
      <Section>
        <Columns>
          <Column>
            <Text {...args} />
          </Column>
        </Columns>
      </Section>
      <Section backgroundColor={TrilogyColor.MAIN_FADE}>
        <Columns>
          <Column>
            <Text {...args} />
          </Column>
        </Columns>
      </Section>
      <Section backgroundColor={TrilogyColor.MAIN} className={"has-text-white"}>
        <Columns>
          <Column>
            <Text {...args} />
          </Column>
        </Columns>
      </Section>
    </>
  ),
  args: {
    accessibilityLabel: 'Ceci est un paragraphe',
    level: 1,
    markup: 'p',
    typo: TypographyBold.TEXT_WEIGHT_MEDIUM,
    children: 'Ceci est mon paragraphe',
    inverted: false,
    marginless: false,
    numberOfLines: 1,
    skeleton: false,
  },
}
