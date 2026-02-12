import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Box,
  BoxContent,
  BoxHeader,
  Button,
  ButtonVariant,
  Card,
  CardContent,
  CardImage,
  Column,
  Columns,
  Section,
  Spacer,
  SpacerSize,
  Text,
  Title,
  TitleLevels,
  TrilogyColor,
} from '@trilogy-ds/react'
import * as React from 'react'

export const CardScreen = (): JSX.Element => {
  const [skeleton, setSkeleton] = React.useState<boolean>(false)

  return (
    <Section backgroundColor={TrilogyColor.NEUTRAL_FADE}>
      <Columns multiline>
        <Column size={6}>
          <Card horizontal href='https://google.com'>
            <CardContent>
              <Title level={TitleLevels.FIVE} markup='h5'>
                Markup H5 - level FOUR
              </Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate
                vera.
              </Text>
              <Button
                variant={ButtonVariant.PRIMARY}
                onClick={() => window.open('https://fr.wikipedia.org/wiki/Shiba_(chien)', '_blank')}
              >
                Enabled
              </Button>
            </CardContent>
            <CardImage
              size={'3'}
              src='https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg'
            />
          </Card>
        </Column>
        <Column size={6}>
          <Card horizontal href='https://google.com'>
            <CardImage
              size={'3'}
              src='https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg'
            />
            <CardContent>
              <Title level={TitleLevels.FIVE} markup='h5'>
                Markup H5 - level FOUR
              </Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate
                vera.
              </Text>
              <Button
                variant={ButtonVariant.PRIMARY}
                onClick={() => window.open('https://fr.wikipedia.org/wiki/Shiba_(chien)', '_blank')}
              >
                Enabled
              </Button>
            </CardContent>
          </Card>
        </Column>
      </Columns>

      <Columns>
        <Column size={6}>
          <Card>
            <CardContent>
              <Title level={TitleLevels.TWO} markup='h2'>
                Markup H2 - level TWO
              </Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate
                vera. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu,
                vulputate vera.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque
                eu, vulputate vera.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at
                neque eu, vulputate vera.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam
                at neque eu, vulputate vera.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex,
                aliquam at neque eu, vulputate vera.
              </Text>
            </CardContent>
          </Card>
        </Column>
        <Column size={6}>
          <Card>
            <CardContent>
              <Title level={TitleLevels.THREE} markup='h3'>
                Markup H3 - level THREE
              </Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate
                vera. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu,
                vulputate vera.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque
                eu, vulputate vera.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at
                neque eu, vulputate vera.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam
                at neque eu, vulputate vera.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex,
                aliquam at neque eu, vulputate vera.
              </Text>
            </CardContent>
          </Card>
        </Column>
      </Columns>
      <Title level={TitleLevels.TWO}>CardImage & markup </Title>
      <Spacer size={SpacerSize.FOUR} />
      <Card active>
        <CardContent>
          <Title level={TitleLevels.FOUR} markup='h4'>
            Markup H4 - level FOUR
          </Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate vera.
          </Text>
          <Button variant={ButtonVariant.PRIMARY} onClick={() => setSkeleton(skeleton)}>
            Skeleton toogle click
          </Button>
        </CardContent>
        <CardImage src='https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg' />
      </Card>

      <Title level={TitleLevels.TWO}>CardImage & markup </Title>
      <Spacer size={SpacerSize.FOUR} />
      <Card>
        <CardContent>
          <Title level={TitleLevels.FIVE}>Markup {'<p>'} - level FIVE</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate vera.
          </Text>
          <Button variant={ButtonVariant.PRIMARY} onClick={() => setSkeleton(skeleton)}>
            Skeleton toogle click
          </Button>
        </CardContent>
        <CardImage src='https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg' />
      </Card>

      <Title level={TitleLevels.TWO}>Reversed </Title>
      <Spacer size={SpacerSize.FOUR} />
      <Card reversed>
        <CardContent>
          <Title level={TitleLevels.FIVE}>Markup {'<p>'} - level FIVE</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate vera.
          </Text>
          <Button variant={ButtonVariant.PRIMARY} onClick={() => setSkeleton(skeleton)}>
            Skeleton toogle click
          </Button>
        </CardContent>
        <CardImage src='https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg' />
      </Card>

      <Title level={TitleLevels.TWO}>Flat </Title>
      <Spacer size={SpacerSize.THREE} />
      <Card flat>
        <CardContent>
          <Title level={TitleLevels.THREE}>Markup {'<p>'} - level THREE</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate vera.
          </Text>
          <Button
            variant={ButtonVariant.PRIMARY}
            onClick={() => window.open('https://fr.wikipedia.org/wiki/Shiba_(chien)', '_blank')}
          >
            Enabled
          </Button>
        </CardContent>
        <CardImage src='https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg' />
      </Card>

      <Title level={TitleLevels.TWO}>Horizontal </Title>
      <Spacer size={SpacerSize.THREE} />
      <Spacer size={SpacerSize.THREE} />
      <Card horizontal>
        <CardImage
          size={'3'}
          src='https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg'
        />
        <CardContent>
          <Title level={TitleLevels.FIVE} markup='h5'>
            Markup H5 - level FOUR
          </Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate vera.
          </Text>
          <Button
            variant={ButtonVariant.PRIMARY}
            onClick={() => window.open('https://fr.wikipedia.org/wiki/Shiba_(chien)', '_blank')}
          >
            Enabled
          </Button>
        </CardContent>
      </Card>

      <Title level={TitleLevels.TWO}>Horizontal reversed </Title>
      <Spacer size={SpacerSize.SIX} />
      <Card horizontal reversed>
        <CardContent>
          <Title level={TitleLevels.FIVE} markup='h5'>
            Markup H5 - level FOUR
          </Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate vera.
          </Text>
          <Button
            variant={ButtonVariant.PRIMARY}
            onClick={() => window.open('https://fr.wikipedia.org/wiki/Shiba_(chien)', '_blank')}
          >
            Enabled
          </Button>
        </CardContent>
        <CardImage
          size={'1'}
          src='https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg'
        />
      </Card>

      <Title level={TitleLevels.TWO}>Floating (inside component)</Title>
      <Spacer size={SpacerSize.THREE} />
      <Box>
        <BoxHeader>Floating (inside component)</BoxHeader>
        <BoxContent>
          <Accordion className='is-marginless'>
            <AccordionItem>
              <AccordionHeader>
                <Text>Card floating (inside component)</Text>
              </AccordionHeader>
              <AccordionBody>
                <Card floating>
                  <CardContent>
                    <Text>Exemple de Card sans titre</Text>
                    <Button
                      variant={ButtonVariant.PRIMARY}
                      onClick={() => window.open('https://fr.wikipedia.org/wiki/Shiba_(chien)', '_blank')}
                    >
                      Enabled
                    </Button>
                  </CardContent>
                  <CardImage src='https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg' />
                </Card>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </BoxContent>
      </Box>

      <Columns>
        <Column size={4}>
          <Card flat fullheight>
            <CardContent>
              <Title level={TitleLevels.ONE} markup='h2'>
                Markup H2 - level ONE
              </Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate
                vera.
              </Text>
            </CardContent>
          </Card>
        </Column>
        <Column size={4}>
          <Card>
            <CardContent>
              <Title level={TitleLevels.SIX} markup='h6'>
                Markup H6 - level SIX
              </Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate
                vera. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu,
                vulputate vera.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque
                eu, vulputate vera.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at
                neque eu, vulputate vera.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam
                at neque eu, vulputate vera.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex,
                aliquam at neque eu, vulputate vera.
              </Text>
            </CardContent>
          </Card>
        </Column>
        <Column size={4}>
          <Card>
            <CardContent>
              <Title level={TitleLevels.SIX} markup='h3'>
                Markup H3 - level SIX
              </Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate
                vera. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu,
                vulputate vera.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque
                eu, vulputate vera.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at
                neque eu, vulputate vera.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam
                at neque eu, vulputate vera.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex,
                aliquam at neque eu, vulputate vera.
              </Text>
            </CardContent>
          </Card>
        </Column>
      </Columns>
    </Section>
  )
}
