import * as React from 'react'

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Alignable,
  Badge,
  Box,
  BoxContent,
  BreadcrumbItem,
  Checkbox,
  Column,
  Columns,
  Container,
  Divider,
  Icon,
  IconColor,
  IconSize,
  Image,
  Input,
  Link,
  Pagination,
  Price,
  Row,
  Rows,
  Section,
  Select,
  SelectOption,
  Sticker,
  Tab,
  TabList,
  Tabs,
  TitleLevels,
  TitleMarkup,
  TypographyAlign,
  TypographyBold,
  VariantState,
  View,
  Breadcrumb,
  Text,
  Title,
} from '@trilogy-ds/react'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Page/Wall',
  tags: ['!autodocs'],
  parameters: {
    storysource: { disable: false },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  render: () => {
    const CardPhone = ({ model, priceAmount, priceDetails, imageSrc }) => {
      // @ts-ignore
      return (
        <Column size={6} fullhdSize={4} desktopSize={6}>
          <Box flat>
            <BoxContent>
              <Rows gap={3}>
                <Row>
                  <Title level={TitleLevels.SIX} marginless>
                    {model}
                  </Title>
                  <Columns mobile gap={1}>
                    <Column narrow>
                      <Icon name={'tri-star-filled'} color={IconColor.WARNING} />
                    </Column>
                    <Column narrow>
                      <Icon name={'tri-star-filled'} color={IconColor.WARNING} />
                    </Column>
                    <Column narrow>
                      <Icon name={'tri-star-filled'} color={IconColor.WARNING} />
                    </Column>
                    <Column narrow>
                      <Icon name={'tri-star-filled'} color={IconColor.WARNING} />
                    </Column>
                    <Column narrow>
                      <Icon name={'tri-star-filled'} color={IconColor.GREY} />
                    </Column>
                  </Columns>
                </Row>
                <Row>
                  <Columns mobile verticalAlign={Alignable.ALIGNED_CENTER} gap={1}>
                    <Column narrow>
                      <Rows gap={2}>
                        <Row narrow>
                          <Badge className={'is-block'} variant={VariantState.MAIN}></Badge>
                        </Row>
                        <Row narrow>
                          <Badge className={'is-block'} variant={VariantState.ACCENT}></Badge>
                        </Row>
                        <Row narrow>
                          <Badge className={'is-block'} variant={VariantState.INFO}></Badge>
                        </Row>
                      </Rows>
                    </Column>
                    <Column narrow>
                      <Image src={imageSrc} />
                    </Column>
                    <Column offset={1}>
                      <Price overline={'à partir de'} level={5} amount={priceAmount} />
                      <Text typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD} level={3}>
                        {priceDetails}
                      </Text>
                      <Image
                        src={'https://bouyguestelecom.fr/assets/media/full/image/CMS/Stamp/valeur-ancien-mob-150.webp'}
                        alt={''}
                        width={170}
                      />
                    </Column>
                  </Columns>
                </Row>
                <Row>
                  <Divider />
                </Row>
                <Row narrow>
                  <Columns align={Alignable.ALIGNED_CENTER}>
                    <Column narrow>
                      <Checkbox label={'Ajouter au comparateur'} />
                    </Column>
                  </Columns>
                </Row>
              </Rows>
            </BoxContent>
          </Box>
        </Column>
      )
    }

    return (
      <>
        <Section backgroundColor={'WHITE'}>
          <Container>
            <Title typo={TypographyAlign.TEXT_CENTERED} markup={TitleMarkup.H1} level={1}>
              Smartphone / téléphone
            </Title>
          </Container>
        </Section>
        <Tabs className={'is-marginless'} children={''}>
          <TabList children={''}>
            <Tab label={'Tous les téléphones'} active />
            <Tab label={'Click & Collect'} />
            <Tab label={'Bons plans'} />
            <Tab label={'iPhone'} />
            <Tab label={'Samsung'} />
          </TabList>
        </Tabs>
        <Section
          backgroundSrc={
            'https://www.bouyguestelecom.fr/static/wbm/media/banners/pc11-iphone16-241028-background-lame_desktop.webp'
          }
        >
          <Container className={'has-text-centered-mobile'}>
            <Columns>
              <Column size={5}>
                <Title level={2} inverted>
                  Super rapide. Ultra brillant. Giga promo.
                </Title>
              </Column>
              <Column></Column>
              <Column>
                <Box>
                  <BoxContent className={'has-text-centered-mobile'}>
                    <Sticker label={'-192€ de remise immédiate'} variant={'ACCENT'} />
                    <Price className={'is-justified-centered-mobile'} level={3} amount={250} overline={"jusqu'à"} />
                    <Text level={1}>Sur une selection de smartphones</Text>
                  </BoxContent>
                </Box>
              </Column>
            </Columns>
          </Container>
        </Section>
        <Section backgroundColor={'NEUTRAL_FADE'}>
          <Columns gap={10}>
            <Column size={3}>
              <View className={'is-sticky-top'}>
                <Columns mobile verticalAlign={Alignable.ALIGNED_CENTER}>
                  <Column narrow>
                    <Icon name={'tri-sliders'} />
                  </Column>
                  <Column narrow>
                    <Title level={4}>Filtres</Title>
                  </Column>
                </Columns>
                <Input placeholder={'Modèle, marque...'} iconNameRight={'tri-search'}></Input>
                <Divider />
                <Title level={5}>Mode de livraison</Title>
                <Checkbox label={'Click & Collect'} />
                <Divider />
                <Title level={5}>Marque</Title>
                <Checkbox label={'Apple'} />
                <Checkbox label={'Samsung'} />
                <Checkbox label={'Xiaomi'} />
                <Checkbox label={'Google'} />
                <Checkbox label={'iPhone reconditionné'} />
                <Link href={'#'}>+ de marque</Link>
                <Divider />
                <Title level={5}>Marque</Title>
                <Checkbox label={'Smartphone moins chère'} />
                <Checkbox label={'Samsung'} />
                <Checkbox label={'Xiaomi'} />
                <Checkbox label={'Google'} />
                <Checkbox label={'iPhone reconditionné'} />
                <Link href={'#'}>+ de marque</Link>
              </View>
            </Column>
            <Column size={9}>
              <Columns mobile verticalAlign={Alignable.ALIGNED_CENTER}>
                <Column verticalAlign={Alignable.ALIGNED_CENTER}>
                  <Text level={1}>167 téléphones</Text>
                </Column>
                <Column narrow>
                  <Select label={'Trier par'} native>
                    <SelectOption>Meilleures ventes</SelectOption>
                  </Select>
                </Column>
              </Columns>
              <Columns multiline>
                <CardPhone
                  model={'Apple iPhone 16'}
                  priceAmount={79.99}
                  priceDetails={'+ 22,99 €/mois pendant 24 mois'}
                  imageSrc={
                    'https://www.bouyguestelecom.fr/catalogue/image-resize/full/media/catalog/product/v/i/vig-samsung-galaxy-s23-fe-graphite-face_1.png'
                  }
                />
                <CardPhone
                  model={'Samsung Galaxy S23 FE'}
                  priceAmount={79.99}
                  priceDetails={'+ 22,99 €/mois pendant 24 mois'}
                  imageSrc={
                    'https://www.bouyguestelecom.fr/catalogue/image-resize/full/media/catalog/product/v/i/vig-apple-iphone-16-pro-titane-sable-face.png'
                  }
                />
                <CardPhone
                  model={'Apple iPhone 16'}
                  priceAmount={79.99}
                  priceDetails={'+ 22,99 €/mois pendant 24 mois'}
                  imageSrc={
                    'https://www.bouyguestelecom.fr/catalogue/image-resize/full/media/catalog/product/v/i/vig-samsung-galaxy-s23-fe-graphite-face_1.png'
                  }
                />
                <CardPhone
                  model={'Samsung Galaxy S23 FE'}
                  priceAmount={79.99}
                  priceDetails={'+ 22,99 €/mois pendant 24 mois'}
                  imageSrc={
                    'https://www.bouyguestelecom.fr/catalogue/image-resize/full/media/catalog/product/v/i/vig-apple-iphone-16-pro-titane-sable-face.png'
                  }
                />
                <CardPhone
                  model={'Apple iPhone 16'}
                  priceAmount={79.99}
                  priceDetails={'+ 22,99 €/mois pendant 24 mois'}
                  imageSrc={
                    'https://www.bouyguestelecom.fr/catalogue/image-resize/full/media/catalog/product/v/i/vig-samsung-galaxy-s23-fe-graphite-face_1.png'
                  }
                />
                <CardPhone
                  model={'Samsung Galaxy S23 FE'}
                  priceAmount={79.99}
                  priceDetails={'+ 22,99 €/mois pendant 24 mois'}
                  imageSrc={
                    'https://www.bouyguestelecom.fr/catalogue/image-resize/full/media/catalog/product/v/i/vig-apple-iphone-16-pro-titane-sable-face.png'
                  }
                />
                <CardPhone
                  model={'Apple iPhone 16'}
                  priceAmount={79.99}
                  priceDetails={'+ 22,99 €/mois pendant 24 mois'}
                  imageSrc={
                    'https://www.bouyguestelecom.fr/catalogue/image-resize/full/media/catalog/product/v/i/vig-samsung-galaxy-s23-fe-graphite-face_1.png'
                  }
                />
                <CardPhone
                  model={'Samsung Galaxy S23 FE'}
                  priceAmount={79.99}
                  priceDetails={'+ 22,99 €/mois pendant 24 mois'}
                  imageSrc={
                    'https://www.bouyguestelecom.fr/catalogue/image-resize/full/media/catalog/product/v/i/vig-apple-iphone-16-pro-titane-sable-face.png'
                  }
                />
                <CardPhone
                  model={'Apple iPhone 16'}
                  priceAmount={79.99}
                  priceDetails={'+ 22,99 €/mois pendant 24 mois'}
                  imageSrc={
                    'https://www.bouyguestelecom.fr/catalogue/image-resize/full/media/catalog/product/v/i/vig-samsung-galaxy-s23-fe-graphite-face_1.png'
                  }
                />
              </Columns>
              <Pagination length={10} pageSize={5} />
            </Column>
          </Columns>
        </Section>
        <Section>
          <Container>
            <Accordion children>
              <AccordionItem children open>
                <AccordionHeader>Quel smartphone choisir ?</AccordionHeader>
                <AccordionBody>
                  Chez Bouygues Telecom, nous vous accompagnons depuis plus de 25 ans dans le choix de votre téléphone
                  mobile. Notre but : tout faire pour que vous trouviez le smartphone le plus adapté à votre quotidien.
                  Besoin d'un téléphone pas cher pour aller avec votre forfait mobile ? Envie de craquer pour le
                  meilleur smartphone 5G du moment ou simplement de profiter d'un bon plan smartphone ? A la recherche
                  d'un smartphone reconditionné ? iPhone, Samsung, Xiaomi, OPPO, Huawei… Nous espérons que vous
                  trouverez votre bonheur parmi les dizaines de smartphones que nous avons sélectionnés au sein des plus
                  grandes marques.
                </AccordionBody>
              </AccordionItem>
              <AccordionItem children>
                <AccordionHeader>Quel smartphone choisir ?</AccordionHeader>
                <AccordionBody>
                  Chez Bouygues Telecom, nous vous accompagnons depuis plus de 25 ans dans le choix de votre téléphone
                  mobile. Notre but : tout faire pour que vous trouviez le smartphone le plus adapté à votre quotidien.
                  Besoin d'un téléphone pas cher pour aller avec votre forfait mobile ? Envie de craquer pour le
                  meilleur smartphone 5G du moment ou simplement de profiter d'un bon plan smartphone ? A la recherche
                  d'un smartphone reconditionné ? iPhone, Samsung, Xiaomi, OPPO, Huawei… Nous espérons que vous
                  trouverez votre bonheur parmi les dizaines de smartphones que nous avons sélectionnés au sein des plus
                  grandes marques.
                </AccordionBody>
              </AccordionItem>
              <AccordionItem children>
                <AccordionHeader>Quel smartphone choisir ?</AccordionHeader>
                <AccordionBody>
                  Chez Bouygues Telecom, nous vous accompagnons depuis plus de 25 ans dans le choix de votre téléphone
                  mobile. Notre but : tout faire pour que vous trouviez le smartphone le plus adapté à votre quotidien.
                  Besoin d'un téléphone pas cher pour aller avec votre forfait mobile ? Envie de craquer pour le
                  meilleur smartphone 5G du moment ou simplement de profiter d'un bon plan smartphone ? A la recherche
                  d'un smartphone reconditionné ? iPhone, Samsung, Xiaomi, OPPO, Huawei… Nous espérons que vous
                  trouverez votre bonheur parmi les dizaines de smartphones que nous avons sélectionnés au sein des plus
                  grandes marques.
                </AccordionBody>
              </AccordionItem>
              <AccordionItem children>
                <AccordionHeader>Quel smartphone choisir ?</AccordionHeader>
                <AccordionBody>
                  Chez Bouygues Telecom, nous vous accompagnons depuis plus de 25 ans dans le choix de votre téléphone
                  mobile. Notre but : tout faire pour que vous trouviez le smartphone le plus adapté à votre quotidien.
                  Besoin d'un téléphone pas cher pour aller avec votre forfait mobile ? Envie de craquer pour le
                  meilleur smartphone 5G du moment ou simplement de profiter d'un bon plan smartphone ? A la recherche
                  d'un smartphone reconditionné ? iPhone, Samsung, Xiaomi, OPPO, Huawei… Nous espérons que vous
                  trouverez votre bonheur parmi les dizaines de smartphones que nous avons sélectionnés au sein des plus
                  grandes marques.
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </Container>
        </Section>
        <Section>
          <Container>
            <Columns gap={2} mobile verticalAlign={Alignable.ALIGNED_CENTER}>
              <Column narrow>
                <Icon size={IconSize.SMALL} name={'tri-handsfree'} />
              </Column>
              <Column narrow>
                <Text level={1} typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}>
                  Kit mains libres recommandé
                </Text>
              </Column>
            </Columns>
            <Breadcrumb>
              <BreadcrumbItem href={'#'}>Accueil</BreadcrumbItem>
              <BreadcrumbItem href={'#'} active>
                téléphone mobile
              </BreadcrumbItem>
            </Breadcrumb>
            <Accordion children>
              <AccordionItem children>
                <AccordionHeader>Mentions légales</AccordionHeader>
                <AccordionBody>
                  Mentions légales Mentions légales Mentions légales Mentions légales Mentions légales
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </Container>
        </Section>
      </>
    )
  },
}
