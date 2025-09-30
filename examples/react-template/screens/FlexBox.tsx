import {
  Align,
  BoxContent,
  ButtonVariant,
  DirectionEnum,
  Justify,
  TrilogyColor,
  TypographyBold,
} from '@trilogy-ds/react'
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
  Text,
  TextLevels,
  Title,
  Switch,
  TitleLevels,
} from '@trilogy-ds/react/components'

export const FlexBoxScreen = (): JSX.Element => {
  return (
    <Section backgroundColor={TrilogyColor.NEUTRAL_FADE}>
      <Title level={TitleLevels.FIVE}>Align elements</Title>

      <FlexBox direction={DirectionEnum.COLUMN} gap={GapSize.EIGHT}>
        <FlexBox>
          <Icon name={IconName.INFOS_CIRCLE} />
          <Icon name={IconName.INFOS_CIRCLE} />
          <Icon name={IconName.INFOS_CIRCLE} size={IconSize.HUGE} />
        </FlexBox>

        <div>
          <Title level={TitleLevels.FIVE}>Align elements with gap</Title>
          <FlexBox gap={GapSize.FOUR}>
            <Icon name={IconName.INFOS_CIRCLE} />
            <Icon name={IconName.INFOS_CIRCLE} />
            <Icon name={IconName.INFOS_CIRCLE} />
          </FlexBox>
        </div>

        <div>
          <Title level={TitleLevels.FIVE}>Align elements space between</Title>
          <FlexBox justify={Justify.SPACE_BETWEEN}>
            <FlexItem narrow>
              <Box>
                <BoxContent></BoxContent>
              </Box>
            </FlexItem>
            <FlexItem narrow>
              <Box>
                <BoxContent></BoxContent>
              </Box>
            </FlexItem>
            <FlexItem narrow>
              <Box>
                <BoxContent></BoxContent>
              </Box>
            </FlexItem>
          </FlexBox>
        </div>

        <div>
          <Title level={TitleLevels.FIVE}>Align elements with flex none (used to be Columns)</Title>
          <FlexBox direction={DirectionEnum.ROW}>
            <FlexItem narrow>
              <Box>
                <BoxContent></BoxContent>
              </Box>
            </FlexItem>
            <FlexItem>
              <Box>
                <BoxContent></BoxContent>
              </Box>
            </FlexItem>
            <FlexItem>
              <Box>
                <BoxContent></BoxContent>
              </Box>
            </FlexItem>
          </FlexBox>
        </div>

        <div>
          <Title level={TitleLevels.FIVE}>Align elements with size (used to be Columns)</Title>
          <FlexBox>
            <FlexItem size={{ tablet: 4, mobile: 4 }}>
              <Box>
                <BoxContent></BoxContent>
              </Box>
            </FlexItem>
            <FlexItem size={{ tablet: 4, mobile: 4 }}>
              <Box>
                <BoxContent></BoxContent>
              </Box>
            </FlexItem>
            <FlexItem size={{ tablet: 4, mobile: 4 }}>
              <Box>
                <BoxContent></BoxContent>
              </Box>
            </FlexItem>
            <FlexItem size={{ tablet: 4, mobile: 4 }}>
              <Box>
                <BoxContent></BoxContent>
              </Box>
            </FlexItem>
          </FlexBox>
        </div>

        <div>
          <Title level={TitleLevels.FIVE}>Scollable</Title>
          <FlexBox direction={DirectionEnum.ROW} gap={GapSize.FOUR}>
            <FlexItem size={{ tablet: 4, mobile: 12 }}>
              <Box>
                <BoxContent></BoxContent>
              </Box>
            </FlexItem>
            <FlexItem size={{ tablet: 4, mobile: 12 }}>
              <Box>
                <BoxContent></BoxContent>
              </Box>
            </FlexItem>
            <FlexItem size={{ tablet: 4, mobile: 12 }}>
              <Box>
                <BoxContent></BoxContent>
              </Box>
            </FlexItem>
          </FlexBox>
          <Box>
            <FlexBox direction={DirectionEnum.ROW} scrollable gap={GapSize.FOUR}>
              <FlexItem size={10}>
                <Box>
                  <BoxContent></BoxContent>
                </Box>
              </FlexItem>
              <FlexItem size={10}>
                <Box>
                  <BoxContent></BoxContent>
                </Box>
              </FlexItem>
              <FlexItem size={10}>
                <Box>
                  <BoxContent></BoxContent>
                </Box>
              </FlexItem>
            </FlexBox>
          </Box>
        </div>

        <div>
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
        </div>

        <div>
          <Title level={TitleLevels.FIVE}>Flex direction reverse</Title>
          <FlexBox direction={DirectionEnum.ROW}>
            <FlexBox direction={DirectionEnum.COLUMN_REVERSE}>
              <Button variant={ButtonVariant.CONVERSION}>Top</Button>
              <Button variant={ButtonVariant.PRIMARY}>Bottom</Button>
            </FlexBox>
            <FlexBox direction={{ tablet: DirectionEnum.ROW_REVERSE, mobile: DirectionEnum.ROW }}>
              <Button variant={ButtonVariant.GHOST}>Left</Button>
              <Button variant={ButtonVariant.PRIMARY}>Right</Button>
            </FlexBox>
          </FlexBox>
        </div>

        <div>
          <Title level={TitleLevels.FIVE}>Align and justify responsive</Title>
          <FlexBox
            direction={DirectionEnum.ROW}
            align={{ desktop: Align.START, mobile: Align.CENTER }}
            justify={{ tablet: Justify.SPACE_BETWEEN, mobile: Justify.START }}
          >
            <FlexBox>
              <Button variant={ButtonVariant.CONVERSION}>Top</Button>
              <Button variant={ButtonVariant.PRIMARY}>Bottom</Button>
            </FlexBox>
            {/*// @ts-ignore*/}
            <Box style={{ height: '300px' }} />
          </FlexBox>
        </div>

        <div>
          <Title level={TitleLevels.FIVE}>Complex example</Title>
          <Box>
            <BoxContent backgroundColor={TrilogyColor.MAIN_FADE}>
              <FlexBox justify={Justify.CENTER} align={{ tablet: Align.CENTER, mobile: Align.START }}>
                <FlexBox
                  direction={{ mobile: DirectionEnum.COLUMN_REVERSE, tablet: DirectionEnum.ROW }}
                  align={Align.CENTER}
                >
                  <Text level={TextLevels.ONE} marginless typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}>
                    BIG
                  </Text>
                  <Switch />
                </FlexBox>
                <FlexBox justify={Justify.CENTER} align={Align.CENTER}>
                  <FlexBox direction={{ mobile: DirectionEnum.COLUMN, tablet: DirectionEnum.ROW }}>
                    <Text level={TextLevels.TWO} typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD} marginless markup='span'>
                      Voir les prix avec forfait mobile
                    </Text>
                    <Text level={TextLevels.TWO} marginless markup='span'>
                      Si vous avez ou prenez un forfait Bouygues Telecom.
                    </Text>
                  </FlexBox>
                  <Icon name={IconName.INFOS_CIRCLE} size='small' />
                </FlexBox>
              </FlexBox>
            </BoxContent>
          </Box>
        </div>
      </FlexBox>
    </Section>
  )
}
