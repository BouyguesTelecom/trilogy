import React from 'react'
import {
  Section,
  Divider,
  Box,
  BoxContent,
  InfoBlock,
  InfoBlockHeader,
  InfoBlockContent,
  TextLevels,
  ButtonList,
  InfoBlockStatus,
  InfoBlockAction,
  Icon,
  IconName,
  IconColor,
  IconSize,
  Spacer,
  SpacerSize,
  Text,
  Button,
} from '@trilogy-ds/react/components'
import { TypographyAlign, TypographyBold, VariantState } from '@trilogy-ds/react/objects'

export const InfoBlockScreen = (): JSX.Element => {
  return (
    <Section>
      <Box shadowless>
        <BoxContent>
          <InfoBlock>
            <InfoBlockHeader
              customIcon={<Icon name={IconName.ARROW_RIGHT} color={IconColor.PRIMARY} size={IconSize.MEDIUM} />}
            >
              Infos Title
            </InfoBlockHeader>
            <InfoBlockContent>
              <Text level={TextLevels.TWO} typo={[TypographyBold.TEXT_WEIGHT_NORMAL, TypographyAlign.TEXT_CENTERED]}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem enim ipsam iste maxime minus modi nihil,
                nisi officia perferendis porro, quam recusandae similique sint totam voluptate. Cupiditate, quos veniam!
                Quis!
              </Text>
            </InfoBlockContent>

            <ButtonList centered>
              <Button variant={VariantState.SECONDARY} onClick={() => console.log('toto')} fullwidth>
                CTA info
              </Button>
            </ButtonList>
          </InfoBlock>
        </BoxContent>
      </Box>
      <Spacer size={SpacerSize.LARGE} />
      <Divider />
      <Spacer size={SpacerSize.LARGE} />

      <Box shadowless>
        <BoxContent>
          <InfoBlock>
            <InfoBlockHeader status={InfoBlockStatus.SUCCESS}>Infos Title</InfoBlockHeader>
            <InfoBlockContent>
              <Text level={TextLevels.TWO} typo={[TypographyBold.TEXT_WEIGHT_NORMAL, TypographyAlign.TEXT_CENTERED]}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem enim ipsam iste maxime minus modi nihil,
                nisi officia perferendis porro, quam recusandae similique sint totam voluptate. Cupiditate, quos veniam!
                Quis!
              </Text>
            </InfoBlockContent>

            <ButtonList centered>
              <Button variant={VariantState.SECONDARY} onClick={() => console.log('toto')} fullwidth>
                CTA info
              </Button>
            </ButtonList>
          </InfoBlock>
        </BoxContent>
      </Box>

      <Spacer size={SpacerSize.LARGE} />
      <Divider />
      <Spacer size={SpacerSize.LARGE} />

      <Box shadowless>
        <BoxContent>
          <InfoBlock>
            <InfoBlockHeader status={InfoBlockStatus.ERROR}>Infos Title</InfoBlockHeader>
            <InfoBlockContent>
              <Text level={TextLevels.TWO} typo={[TypographyBold.TEXT_WEIGHT_NORMAL, TypographyAlign.TEXT_CENTERED]}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem enim ipsam iste maxime minus modi nihil,
                nisi officia perferendis porro, quam recusandae similique sint totam voluptate. Cupiditate, quos veniam!
                Quis!
              </Text>
            </InfoBlockContent>

            <ButtonList centered>
              <Button variant={VariantState.SECONDARY} onClick={() => console.log('toto')} fullwidth>
                CTA info
              </Button>
            </ButtonList>
          </InfoBlock>
        </BoxContent>
      </Box>

      <Spacer size={SpacerSize.LARGE} />
      <Divider />
      <Spacer size={SpacerSize.LARGE} />

      <Box shadowless>
        <BoxContent>
          <InfoBlock>
            <InfoBlockHeader status={InfoBlockStatus.SUCCESS}>Infos Title</InfoBlockHeader>
            <InfoBlockContent>
              <Text level={TextLevels.TWO} typo={[TypographyBold.TEXT_WEIGHT_NORMAL, TypographyAlign.TEXT_CENTERED]}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem enim ipsam iste maxime minus modi nihil,
                nisi officia perferendis porro, quam recusandae similique sint totam voluptate. Cupiditate, quos veniam!
                Quis!
              </Text>
            </InfoBlockContent>

            <ButtonList centered>
              <Button variant={VariantState.SECONDARY} onClick={() => console.log('toto')} fullwidth>
                CTA info
              </Button>
            </ButtonList>
          </InfoBlock>
        </BoxContent>
      </Box>

      <Box shadowless>
        <BoxContent>
          <InfoBlock>
            <InfoBlockHeader
              status={InfoBlockStatus.WARNING}
              customIcon={<Icon name={IconName.INFOS_CIRCLE} size={IconSize.LARGE} />}
            >
              Infos Title Here
            </InfoBlockHeader>
            <InfoBlockContent>
              <Text level={TextLevels.TWO} typo={[TypographyBold.TEXT_WEIGHT_NORMAL, TypographyAlign.TEXT_CENTERED]}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem enim ipsam iste maxime minus modi nihil,
                nisi officia perferendis porro, quam recusandae similique sint totam voluptate. Cupiditate, quos veniam!
                Quis!
              </Text>
            </InfoBlockContent>

            <ButtonList centered>
              <Button variant={VariantState.SECONDARY} onClick={() => console.log('toto')}>
                CTA info
              </Button>
            </ButtonList>
          </InfoBlock>
        </BoxContent>
      </Box>

      <InfoBlock boxed>
        <InfoBlockHeader status={InfoBlockStatus.WARNING}>An error has occurred</InfoBlockHeader>
        <InfoBlockContent>
          <Text>The page you are trying to access is temporarily unavailable</Text>
          <Text>Please retry later</Text>
        </InfoBlockContent>
        <InfoBlockAction>
          <Button variant={'PRIMARY'} onClick={() => alert('test')}>
            Button
          </Button>
        </InfoBlockAction>
      </InfoBlock>

      <Divider />

      <InfoBlock boxed>
        <InfoBlockHeader status={InfoBlockStatus.ERROR}>An error has occurred</InfoBlockHeader>
        <InfoBlockContent>
          <Text>The page you are trying to access is temporarily unavailable</Text>
          <Text>Please retry later</Text>
        </InfoBlockContent>
        <InfoBlockAction>
          <Button variant={'PRIMARY'} onClick={() => alert('test')}>
            Button
          </Button>
        </InfoBlockAction>
      </InfoBlock>

      <Divider />

      <InfoBlock boxed>
        <InfoBlockHeader status={InfoBlockStatus.SUCCESS}>Treatment successfully completed</InfoBlockHeader>
        <InfoBlockContent>
          <Text>The message has been sent</Text>
        </InfoBlockContent>
        <InfoBlockAction>
          <Button variant={'PRIMARY'} onClick={() => alert('test')}>
            Button
          </Button>
        </InfoBlockAction>
      </InfoBlock>
    </Section>
  )
}
