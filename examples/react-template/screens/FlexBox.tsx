import {
  Box,
  Button,
  FlexBox,
  FlexItem,
  GapSize,
  Icon,
  IconName,
  IconSize,
  Section,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'
import { ButtonVariant, DirectionEnum, Justify, TrilogyColor } from '@trilogy-ds/react'

export const FlexBoxScreen = (): JSX.Element => {
  return (
    <Section backgroundColor={TrilogyColor.NEUTRAL_FADE}>
      <Title level={TitleLevels.FIVE}>Align elements</Title>

      <FlexBox>
        <Icon name={IconName.INFOS_CIRCLE} />
        <Icon name={IconName.INFOS_CIRCLE} />
        <Icon name={IconName.INFOS_CIRCLE} size={IconSize.HUGE} />
      </FlexBox>

      <Title level={TitleLevels.FIVE}>Align elements with gap</Title>
      <FlexBox gap={GapSize.FOUR}>
        <Icon name={IconName.INFOS_CIRCLE} />
        <Icon name={IconName.INFOS_CIRCLE} />
        <Icon name={IconName.INFOS_CIRCLE} />
      </FlexBox>

      <Title level={TitleLevels.FIVE}>Align elements space between</Title>
      <FlexBox justify={Justify.SPACE_BETWEEN}>
        <Box />
        <Box />
        <Box />
      </FlexBox>

      <Title level={TitleLevels.FIVE}>Align elements with flex none (used to be Columns)</Title>
      <FlexBox direction={DirectionEnum.ROW}>
        <FlexItem narrow>
          <Box />
        </FlexItem>
        <FlexItem>
          <Box />
        </FlexItem>
        <FlexItem>
          <Box />
        </FlexItem>
      </FlexBox>

      <Title level={TitleLevels.FIVE}>Align elements with size (used to be Columns)</Title>
      <FlexBox>
        <FlexItem size={{ tablet: 4 }}>
          <Box />
        </FlexItem>
        <FlexItem size={{ tablet: 4 }}>
          <Box />
        </FlexItem>
        <FlexItem size={{ tablet: 4 }}>
          <Box />
        </FlexItem>
      </FlexBox>

      <Title level={TitleLevels.FIVE}>Slider</Title>

      <FlexBox direction={DirectionEnum.ROW} gap={GapSize.FOUR}>
        <FlexItem size={{ tablet: 4, mobile: 12 }}>
          <Box />
        </FlexItem>
        <FlexItem size={{ tablet: 4, mobile: 12 }}>
          <Box />
        </FlexItem>
        <FlexItem size={{ tablet: 4, mobile: 12 }}>
          <Box />
        </FlexItem>
      </FlexBox>
      <Box>
        <FlexBox direction={DirectionEnum.ROW} slider gap={GapSize.FOUR}>
          <FlexItem size={10}>
            <Box />
          </FlexItem>
          <FlexItem size={10}>
            <Box />
          </FlexItem>
          <FlexItem size={10}>
            <Box />
          </FlexItem>
        </FlexBox>
      </Box>

      <Title level={TitleLevels.FIVE}>Flex into Flex</Title>
      <FlexBox direction={DirectionEnum.ROW} justify={Justify.SPACE_BETWEEN}>
        <FlexBox>
          <Button variant={ButtonVariant.CONVERSION}>Left</Button>
          <Button variant={ButtonVariant.PRIMARY}>Click</Button>
        </FlexBox>
        <FlexBox>
          <Button variant={ButtonVariant.GHOST}>Click</Button>
          <Button variant={ButtonVariant.PRIMARY}>Right</Button>
        </FlexBox>
      </FlexBox>
    </Section>
  )
}
