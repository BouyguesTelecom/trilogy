import { Fragment, useEffect, useRef, useState } from 'react'
import {
  Align,
  Alignable,
  BoxContent,
  ButtonVariant,
  Container,
  DirectionEnum,
  Image,
  Justify,
  TrilogyColor,
  TypographyBold,
  View,
  isMobile,
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
  Switch,
  Text,
  TextLevels,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'

const summaryOffers = [
  { title: 'Bbox WiFi 7', description: 'Avec TV et répéteur inclus', price: 'Prix seul : 43,99 €/mois', symbol: '⌁' },
  {
    title: 'Forfait 250 Go',
    description: '40 Go inclus dans plus de 160 destinations',
    price: 'Prix seul : 29,99 €/mois',
    symbol: '5G',
  },
  {
    title: 'prime',
    description: 'Streaming en illimité et livraisons en accéléré',
    price: 'Prix seul : 6,99 €/mois',
    symbol: '✓',
  },
]

const PackSummaryExample = (): JSX.Element => {
  const [requestedWidth, setRequestedWidth] = useState(820)
  const [containerWidth, setContainerWidth] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const observer = new ResizeObserver(() => setContainerWidth(Math.round(container.getBoundingClientRect().width)))
    const updateViewport = () => setViewportWidth(window.innerWidth)
    observer.observe(container)
    window.addEventListener('resize', updateViewport)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateViewport)
    }
  }, [])

  return (
    <Section backgroundColor={TrilogyColor.MAIN_FADE}>
      <Title level={TitleLevels.THREE}>Pack One — reproduction de l’alignement responsive</Title>
      <Text>
        Page : {viewportWidth} px · Container : {containerWidth} px. Sous 1024 px de container, les offres doivent
        rester en colonne et centrées, même sur une page desktop.
      </Text>
      <label htmlFor='pack-summary-width'>Largeur du container : {requestedWidth} px</label>
      <input
        id='pack-summary-width'
        type='range'
        min={360}
        max={1200}
        step={10}
        value={requestedWidth}
        onChange={(event) => setRequestedWidth(Number(event.target.value))}
        style={{ display: 'block', width: '100%', maxWidth: 480, marginBottom: 24 }}
      />
      <div
        ref={containerRef}
        className='query-container_410'
        id='pack-summary-container'
        style={{ width: requestedWidth, maxWidth: '100%', margin: '0 auto' }}
      >
        <Box padding='lg' shadowless>
          <BoxContent>
            <FlexBox
              gap={GapSize.FIVE}
              className='is-fullwidth'
              justify={Justify.CENTER}
              direction={{ mobile: DirectionEnum.COLUMN, tablet: DirectionEnum.COLUMN, desktop: DirectionEnum.ROW }}
            >
              <FlexBox
                id='pack-summary-offers'
                gap={{ mobile: GapSize.FOUR, tablet: GapSize.FOUR, desktop: GapSize.FIVE }}
                align={{ mobile: Align.CENTER, tablet: Align.CENTER, desktop: Align.END }}
                direction={{ mobile: DirectionEnum.COLUMN, tablet: DirectionEnum.COLUMN, desktop: DirectionEnum.ROW }}
              >
                {summaryOffers.map((offer, index) => (
                  <Fragment key={offer.title}>
                    {index > 0 && (
                      <span aria-label='plus' style={{ fontSize: 32, alignSelf: 'center' }}>
                        ⊕
                      </span>
                    )}
                    <div style={{ width: 150, minHeight: index === 1 ? 144 : 120 }}>
                      <Text marginless>{offer.symbol}</Text>
                      <Title level={TitleLevels.FIVE}>{offer.title}</Title>
                      <Text level={TextLevels.THREE} marginless>
                        {offer.description}
                      </Text>
                      <Text level={TextLevels.THREE} marginless>
                        {offer.price}
                      </Text>
                    </div>
                  </Fragment>
                ))}
              </FlexBox>
              <FlexBox
                gap={GapSize.FIVE}
                align={Align.CENTER}
                direction={{ mobile: DirectionEnum.COLUMN, tablet: DirectionEnum.COLUMN, desktop: DirectionEnum.ROW }}
              >
                <span aria-label='égal' style={{ fontSize: 32 }}>
                  ⊜
                </span>
                <FlexBox direction={DirectionEnum.COLUMN} align={Align.CENTER} gap={GapSize.FOUR}>
                  <Text marginless>
                    <s>80,97 €</s> <strong style={{ fontSize: 32 }}>54,99 €</strong>/mois
                  </Text>
                  <Button variant={ButtonVariant.CONVERSION}>Choisir le pack One</Button>
                </FlexBox>
              </FlexBox>
            </FlexBox>
          </BoxContent>
        </Box>
      </div>
    </Section>
  )
}

export const FlexBoxScreen = (): JSX.Element => {
  return (
    <Section backgroundColor={TrilogyColor.NEUTRAL_FADE}>
      {!isMobile && <PackSummaryExample />}
      <Container className='container_410'>
        <Title level={TitleLevels.THREE}>Container Query Test</Title>
        <FlexBox wrap={{ fullhd: true }} gap={GapSize.FOUR} align={Alignable.ALIGNED_CENTER} scrollable>
          <FlexItem size={{ tablet: 10 }}>
            <Box>
              <Text>Size 10 desktop</Text>
              <Text>Size 10 desktop</Text>
              <Text>Size 10 desktop</Text>
            </Box>
          </FlexItem>
          <FlexItem size={{ tablet: 3 }}>
            <Box>
              <Text>Size 10 desktop</Text>
            </Box>
          </FlexItem>
          <FlexItem size={{ tablet: 3 }}>
            <Box>
              <Text>Size 10 desktop</Text>
              <Text>Size 10 desktop</Text>
              <Text>Size 10 desktop</Text>
              <Text>Size 10 desktop</Text>
            </Box>
          </FlexItem>
        </FlexBox>
        <Title level={TitleLevels.THREE}>Direction Column</Title>
        <FlexBox gap={GapSize.FOUR} fullheight justify={Justify.END}>
          <FlexItem size={4}>
            <Box fullheight backgroundColor={TrilogyColor.SUCCESS_FADE}>
              <FlexBox>
                <FlexItem narrow>
                  <Icon name='tri-alert' size={IconSize.MEDIUM} />
                </FlexItem>
                <FlexItem>
                  <Text>Content</Text>
                </FlexItem>
              </FlexBox>
            </Box>
          </FlexItem>
          <FlexItem size={4}>
            <Box fullheight backgroundColor={TrilogyColor.SUCCESS_FADE}></Box>
          </FlexItem>
        </FlexBox>
        <FlexBox>
          <FlexItem>
            <Box fullheight>
              <BoxContent>
                <FlexBox direction={DirectionEnum.COLUMN} fullheight>
                  <FlexItem>
                    <Box backgroundColor={TrilogyColor.MAIN_FADE} />
                    <Box backgroundColor={TrilogyColor.MAIN_FADE} />
                    <Box backgroundColor={TrilogyColor.MAIN_FADE} />
                    <Box backgroundColor={TrilogyColor.MAIN_FADE} />
                    <Box backgroundColor={TrilogyColor.MAIN_FADE} />
                  </FlexItem>
                  <FlexItem>
                    <Button variant='CONVERSION'>Button</Button>
                  </FlexItem>
                </FlexBox>
              </BoxContent>
            </Box>
          </FlexItem>
          <FlexItem>
            <Box fullheight>
              <BoxContent className='box-content_410'>
                <FlexBox fullheight direction={DirectionEnum.COLUMN}>
                  <FlexItem>
                    <Box backgroundColor={TrilogyColor.MAIN_FADE} />
                    <Box backgroundColor={TrilogyColor.MAIN_FADE} />
                    <Box backgroundColor={TrilogyColor.MAIN_FADE} />
                    <Box backgroundColor={TrilogyColor.MAIN_FADE} />
                  </FlexItem>
                  <FlexItem narrow>
                    <Button variant='CONVERSION'>Button</Button>
                  </FlexItem>
                </FlexBox>
              </BoxContent>
            </Box>
          </FlexItem>
        </FlexBox>
      </Container>
      <Title level={TitleLevels.THREE}>Props mobile</Title>
      <FlexBox mobile>
        <FlexItem size={4}>
          <Box backgroundColor={TrilogyColor.MAIN_FADE} />
        </FlexItem>
        <FlexItem size={4}>
          <Box backgroundColor={TrilogyColor.MAIN_FADE} />
        </FlexItem>
        <FlexItem size={4}>
          <Box backgroundColor={TrilogyColor.MAIN_FADE} />
        </FlexItem>
      </FlexBox>

      <Box backgroundColor={TrilogyColor.MAIN_FADE}>
        <BoxContent>
          <FlexBox align={Align.CENTER} justify={Justify.CENTER} mobile>
            <FlexItem narrow>
              <Image
                width={30}
                height={30}
                circled
                src={'https://www.bouyguestelecom.fr/assets/media/full/CMS/ACO-MCARE/add-box.webp'}
              />
            </FlexItem>
            <FlexItem>
              <Text typo={[TypographyBold.TEXT_WEIGHT_SEMIBOLD]}>titre</Text>
            </FlexItem>
            <FlexItem narrow>
              <Icon name={IconName.ARROW_RIGHT} />
            </FlexItem>
          </FlexBox>
        </BoxContent>
      </Box>

      <Title level={TitleLevels.FIVE}>Align elements</Title>

      <FlexBox direction={{ mobile: DirectionEnum.COLUMN, tablet: DirectionEnum.ROW, desktop: DirectionEnum.COLUMN }}>
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

      <FlexBox direction={DirectionEnum.COLUMN} gap={GapSize.EIGHT}>
        <FlexBox>
          <Icon name={IconName.INFOS_CIRCLE} />
          <Icon name={IconName.INFOS_CIRCLE} />
          <Icon name={IconName.INFOS_CIRCLE} size={IconSize.HUGE} />
        </FlexBox>

        <View>
          <Title level={TitleLevels.FIVE}>Align elements with gap</Title>
          <FlexBox gap={GapSize.FOUR}>
            <Icon name={IconName.INFOS_CIRCLE} />
            <Icon name={IconName.INFOS_CIRCLE} />
            <Icon name={IconName.INFOS_CIRCLE} />
          </FlexBox>
        </View>

        <View>
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
        </View>

        <View>
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
        </View>

        <View>
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
        </View>

        <View>
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
        </View>

        <View>
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
        </View>

        <View>
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
        </View>

        <View>
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
        </View>

        <View>
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
        </View>
      </FlexBox>
    </Section>
  )
}
