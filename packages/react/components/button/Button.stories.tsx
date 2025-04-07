import type { Meta, StoryObj } from '@storybook/react'
import { ButtonList, ButtonListDirectionEnum } from './list'
import { ButtonVariant } from './ButtonEnum'
import { Button } from './index'
import { Title, TitleLevels } from '../title'
import { Spacer, SpacerSize } from '../../lib'

const meta: Meta<typeof Button> = {
  component: ButtonList,
  subcomponents: { Button },
  argTypes:{
    variant: {
      control: { type: 'inline-radio' },
      options: [
        ButtonVariant.PRIMARY,
        ButtonVariant.SECONDARY,
        ButtonVariant.CONVERSION,
        ButtonVariant.GHOST,
      ],
    },
    iconName: {
      control: { type: 'text' },
    },
    markup: {
      control: { type: 'select' },
      options: ['a', 'button', 'input'],
    },
  }
}

export default meta;

type Story = StoryObj<typeof Button>;

export const ExampleVariants: Story = {
  render: () => (
    <ButtonList>
      <Button variant={ButtonVariant.PRIMARY} children={"Button primary"}/>
      <Button variant={ButtonVariant.SECONDARY} children={"Button secondary"}/>
      <Button variant={ButtonVariant.CONVERSION} children={"Button conversion"}/>
      <Button variant={ButtonVariant.GHOST} children={"Button ghost"}/>
      <Button variant={ButtonVariant.PRIMARY} disabled children={"Button disabled"}/>
      <Button variant={ButtonVariant.PRIMARY} loading children={"Button loading"}/>
    </ButtonList>
  ),
};

export const ExampleIcons: Story = {
  render: () => (
    <ButtonList>
      <Button variant={ButtonVariant.PRIMARY}  iconName={"tri-search"} children={"Button primary"}/>
      <Button variant={ButtonVariant.SECONDARY} iconName={"tri-football"} children={"Button secondary"}/>
      <Button variant={ButtonVariant.CONVERSION} iconName={"tri-nuclear"} children={"Button conversion"}/>
    </ButtonList>
  ),
};

export const ExampleSizes: Story = {
  render: () => (
    <ButtonList direction={ButtonListDirectionEnum.COLUMN}>
      <Button variant={ButtonVariant.PRIMARY} fullwidth children={"Classic button fullzise"}/>
      <Spacer size={SpacerSize.TEN}/>
      <Button variant={ButtonVariant.PRIMARY} children={<Title level={TitleLevels.ONE}>With title level 1</Title>}/>
      <Button variant={ButtonVariant.PRIMARY} children={<Title level={TitleLevels.TWO}>With title level 2</Title>}/>
      <Button variant={ButtonVariant.PRIMARY} children={<Title level={TitleLevels.THREE}>With title level 3</Title>}/>
      <Button variant={ButtonVariant.PRIMARY} children={<Title level={TitleLevels.FOUR}>With title level 4</Title>}/>
      <Button variant={ButtonVariant.PRIMARY} children={<Title level={TitleLevels.FIVE}>With title level 5</Title>}/>
      <Button variant={ButtonVariant.PRIMARY} children={<Title level={TitleLevels.SIX}>With title level 6</Title>}/>
      <Spacer size={SpacerSize.TEN}/>
      <Button variant={ButtonVariant.PRIMARY} children={"Classic button primary"}/>
    </ButtonList>
  ),
};

export const ExampleMarkup: Story = {
  render: () => (
    <ButtonList direction={ButtonListDirectionEnum.COLUMN}>
      <Button variant={ButtonVariant.PRIMARY} markup={"a"} href={"https://design.bouyguestelecom.fr/components/Button"} children={"Markup a"}/>
      <Button variant={ButtonVariant.PRIMARY} markup={"button"} href={"https://design.bouyguestelecom.fr/components/Button"} children={"Markup button"}/>
      <Button variant={ButtonVariant.PRIMARY} markup={"input"} href={"https://design.bouyguestelecom.fr/components/Button"} children={"Markup input"}/>
    </ButtonList>
  ),
};

export const Sandbox: Story = {
  render: (args) => (
    <ButtonList direction={ButtonListDirectionEnum.COLUMN}>
      <Button {...args}/>
    </ButtonList>
  ),
  args:{
    iconName: "tri-search",
    children: "Button",
    markup: "button",
    disabled: false,
    loading: false,
    fullwidth: false,
    variant: ButtonVariant.PRIMARY,
    id: "button",
    className: "button-class",
  }
};
