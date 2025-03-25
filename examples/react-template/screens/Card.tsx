import { Column, Columns, TrilogyColor } from '@trilogy-ds/react'
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
  Section,
  Spacer,
  SpacerSize,
  Text,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'
import * as React from 'react'

export const CardScreen = (): JSX.Element => {
  const [skeleton, setSkeleton] = React.useState<boolean>(false)

  return (
    <Section backgroundColor={TrilogyColor.NEUTRAL_FADE}>
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
        <CardImage src='https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg' />
        <CardContent>
          <Title overline level={TitleLevels.FIVE}>
            Markup {'<p>'} - level FIVE
          </Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate vera.
          </Text>
          <Button variant={ButtonVariant.PRIMARY} onClick={() => setSkeleton(skeleton)}>
            Skeleton toogle click
          </Button>
        </CardContent>
      </Card>

      <Title level={TitleLevels.TWO}>Flat </Title>
      <Spacer size={SpacerSize.THREE} />
      <Card flat>
        <CardImage src='https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg' />
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
                  <CardImage src='https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg' />
                  <CardContent>
                    <Text>Exemple de Card sans titre</Text>
                    <Button
                      variant={ButtonVariant.PRIMARY}
                      onClick={() => window.open('https://fr.wikipedia.org/wiki/Shiba_(chien)', '_blank')}
                    >
                      Enabled
                    </Button>
                  </CardContent>
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
