import {
  BackgroundColor,
  Box,
  BoxContent,
  TitleMarkup,
  TrilogyColor,
  Button,
  ButtonMarkup,
  ButtonVariant,
  Container,
  Divider,
  Hero,
  Section,
  Text,
  TextLevels,
  Title,
  TitleLevels,
} from '@trilogy-ds/react'
import React from 'react'

export default function HeroScreen(): JSX.Element {
  return (
    <Section>
      <Hero
        backgroundColor={BackgroundColor.SECONDARY}
        overlap={[
          <Container>
            <Box backgroundColor={BackgroundColor.INFORMATION_SUBTLE}>
              <BoxContent>
                <Title level={TitleLevels.TWO}>Hero Overlapped</Title>
                <Text level={TextLevels.TWO}>
                  Profitez dInternet dès labonnement et même en cas de coupure grâce à une clé 4G dans les nouvelles
                  offres Bbox.
                </Text>
              </BoxContent>
            </Box>
          </Container>,
        ]}
        inverted
      >
        <Container>
          <Title markup={TitleMarkup.H1} level={TitleLevels.TWO}>
            Hero Overlapped
          </Title>
          <Text level={TextLevels.TWO}>
            Profitez dInternet dès labonnement et même en cas de coupure grâce à une clé 4G dans les nouvelles offres
            Bbox.
          </Text>
        </Container>
      </Hero>

      <Divider />
      <Hero backgroundSrc={'https://picsum.photos/id/1/1500/600'} inverted>
        <Container>
          <Text>Welcome Message</Text>
          <Title level={TitleLevels.ONE}>Hero with image background</Title>
          <Button markup={ButtonMarkup.BUTTON} onClick={() => alert('Click on hero btn')}>
            Click me !
          </Button>
        </Container>
      </Hero>
      <Divider />
      <Hero backgroundColor={BackgroundColor.ACCENT} inverted>
        <Container>
          <Text>Welcome Message</Text>
          <Title level={TitleLevels.TWO}>Hero with Background Color</Title>
          <Button
            markup={ButtonMarkup.BUTTON}
            variant={ButtonVariant.SECONDARY}
            onClick={() => alert('Click on hero btn')}
          >
            Click me !
          </Button>
        </Container>
      </Hero>
    </Section>
  )
}
