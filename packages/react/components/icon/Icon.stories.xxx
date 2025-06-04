import type { Meta, StoryObj } from '@storybook/react'
import Icon from './Icon'
import { Alignable, Column, Columns, Container, IconName, Spacer, SpacerSize } from '../../lib'
import { Title, TitleLevels } from '../title'
import { TrilogyColor } from '../../objects'
import { Text } from '../text'

const meta: Meta<typeof Icon> = {
  component: Icon,
  argTypes:{
    name: {
      options: Object.values(IconName),
      control: { type: 'select' },
    },
    size: {
      options: ['smaller', 'small', 'medium', 'large', 'huge'],
      control: { type: 'select' },
    },
    circled: {
      control: { type: 'boolean' },
    },
    color: {
      options: Object.values(TrilogyColor),
      control: { type: 'select' },
    },
    align:{
      options: Object.values(Alignable),
      control: { type: 'select' },
    },
    verticalAlign:{
      options: Object.values(Alignable),
      control: { type: 'select' },
    },
    backgroundColor: {
      options: Object.values(TrilogyColor),
      control: { type: 'select' },
    }
  }
}

export default meta

type Story = StoryObj<typeof Icon>

// @ts-ignore
export const Example: Story = {
  render: () => (
    <Container>
      <Columns multiline align={Alignable.ALIGNED_CENTER}>
        <Column size={12}>
          <Title level={TitleLevels.THREE}>Icons Sizes : </Title>
        </Column>
        <Column className={'has-text-centered'}>
          <Icon name={IconName.SEARCH} size='smaller' />
          <Text>SMALLER</Text>
        </Column>
        <Column className={'has-text-centered'}>
          <Icon name={IconName.SEARCH} size='small' />
          <Text>SMALL</Text>
        </Column>
        <Column className={'has-text-centered'}>
          <Icon name={IconName.SEARCH} size='medium' />
          <Text>MEDIUM</Text>
        </Column>
        <Column className={'has-text-centered'}>
          <Icon name={IconName.SEARCH} size='large' />
          <Text>LARGE</Text>
        </Column>
        <Column className={'has-text-centered'}>
          <Icon name={IconName.SEARCH} size='huge' />
          <Text>HUGE</Text>
        </Column>
      </Columns>
      <Columns multiline align={Alignable.ALIGNED_CENTER}>
        <Column size={12}>
          <Title level={TitleLevels.THREE}>Circled Icons Sizes : </Title>
        </Column>
        <Column className={'has-text-centered'}>
          <Icon circled name={IconName.BELL} size='smaller' />
          <Text>SMALLER</Text>
        </Column>
        <Column className={'has-text-centered'}>
          <Icon circled name={IconName.BELL} size='small' />
          <Text>SMALL</Text>
        </Column>
        <Column className={'has-text-centered'}>
          <Icon circled name={IconName.BELL} size='medium' />
          <Text>MEDIUM</Text>
        </Column>
        <Column className={'has-text-centered'}>
          <Icon circled name={IconName.BELL} size='large' />
          <Text>LARGE</Text>
        </Column>
        <Column className={'has-text-centered'}>
          <Icon circled name={IconName.BELL} size='huge' />
          <Text>HUGE</Text>
        </Column>
      </Columns>
    </Container>
  ),
}

export const Variants: Story = {
  render: () => (
    <Container>
      <Columns multiline align={Alignable.ALIGNED_CENTER}>
        <Column size={12}>
          <Title level={TitleLevels.THREE}>Variants Icons : </Title>
        </Column>
        <Column className={'has-text-centered'}>
          <Icon name={IconName.ALERT} size='medium' color={TrilogyColor.SUCCESS} />
          <Text>SUCCESS</Text>
        </Column>
        <Column className={'has-text-centered'}>
          <Icon name={IconName.ALERT} size='medium' color={TrilogyColor.ERROR} />
          <Text>ERROR</Text>
        </Column>
        <Column className={'has-text-centered'}>
          <Icon name={IconName.ALERT} size='medium' color={TrilogyColor.INFO} />
          <Text>INFO</Text>
        </Column>
        <Column className={'has-text-centered'}>
          <Icon name={IconName.ALERT} size='medium' color={TrilogyColor.WARNING} />
          <Text>WARNING</Text>
        </Column>
        <Column className={'has-text-centered'}>
          <Icon name={IconName.ALERT} size='medium' color={TrilogyColor.MAIN} />
          <Text>MAIN</Text>
        </Column>
        <Column className={'has-background-main has-text-centered'}>
          <Icon name={IconName.ALERT} size='medium' color={TrilogyColor.BACKGROUND} />
          <Text inverted>BACKGROUND</Text>
        </Column>
        <Column className={'has-text-centered'}>
          <Icon name={IconName.ALERT} size='medium' color={TrilogyColor.ACCENT} />
          <Text>ACCENT</Text>
        </Column>
        <Column className={'has-text-centered'}>
          <Icon name={IconName.ALERT} size='medium' color={TrilogyColor.NEUTRAL} />
          <Text>NEUTRAL</Text>
        </Column>
      </Columns>
      <Spacer size={SpacerSize.SEVEN} />
      <Columns multiline align={Alignable.ALIGNED_CENTER}>
        <Column size={12}>
          <Title level={TitleLevels.THREE}>Circled variants Icons : </Title>
        </Column>
        <Column className={'has-text-centered'}>
          <Icon circled name={IconName.CHECK} size='medium' color={TrilogyColor.SUCCESS} />
          <Text>SUCCESS</Text>
        </Column>
        <Column className={'has-text-centered'}>
          <Icon circled name={IconName.CHECK} size='medium' color={TrilogyColor.ERROR} />
          <Text>ERROR</Text>
        </Column>
        <Column className={'has-text-centered'}>
          <Icon circled name={IconName.CHECK} size='medium' color={TrilogyColor.INFO} />
          <Text>INFO</Text>
        </Column>
        <Column className={'has-text-centered'}>
          <Icon circled name={IconName.CHECK} size='medium' color={TrilogyColor.WARNING} />
          <Text>WARNING</Text>
        </Column>
        <Column className={'has-text-centered'}>
          <Icon circled name={IconName.CHECK} size='medium' color={TrilogyColor.MAIN} />
          <Text>MAIN</Text>
        </Column>
        <Column className={'has-background-main has-text-centered'}>
          <Icon circled name={IconName.CHECK} size='medium' color={TrilogyColor.BACKGROUND} />
          <Text inverted>BACKGROUND</Text>
        </Column>
        <Column className={'has-text-centered'}>
          <Icon circled name={IconName.CHECK} size='medium' color={TrilogyColor.ACCENT} />
          <Text>ACCENT</Text>
        </Column>
        <Column className={'has-text-centered'}>
          <Icon circled name={IconName.CHECK} size='medium' color={TrilogyColor.NEUTRAL} />
          <Text>NEUTRAL</Text>
        </Column>
      </Columns>
    </Container>
  ),
}


// @ts-ignore
export const Sandbox: Story = {
  render: (args) => (
    <Container>
      <Columns multiline align={Alignable.ALIGNED_CENTER}>
        <Column className={'has-text-centered'}>
          <Icon {...args} />
        </Column>
      </Columns>
    </Container>
  ),
  args:{
    name: IconName.SEARCH,
    size: 'medium',
    circled: false,
    color: TrilogyColor.MAIN,
    stacked: false,
    stretched: false,
    skeleton: false,
    backgroundColor: TrilogyColor.BACKGROUND,
    testId: 'icon',
    id: 'icon',
    onClick: () => {},
    accessibilityLabel: 'icon',
  }
}
