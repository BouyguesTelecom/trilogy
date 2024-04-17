import React from 'react'
import {
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
} from '@trilogy-ds/react/components'
import {TypographyColor, VariantState} from '@trilogy-ds/react/objects'
import {Box, TitleMarkup} from '@trilogy-ds/react'

export const HeroScreen = (): JSX.Element => {
  return (
    <Section>
      <Hero overlap>
        <Container>
          <Title markup={TitleMarkup.H1} level={TitleLevels.TWO}>Hero Overlapped</Title>
          <Text inverted className={'is-inverted'} level={TextLevels.TWO} typo={TypographyColor.TEXT_GREY_DARK}>Profitez
            dInternet dès labonnement et même en cas de coupure grâce à une clé 4G dans les nouvelles offres
            Bbox.</Text>
        </Container>
      </Hero>
      <Section>
        <Container>
          <Box>
            <Title level={TitleLevels.TWO}>Hero Overlapped</Title>
          </Box>
        </Container>
      </Section>
      <Divider/>
      <Hero backgroundSrc={'https://picsum.photos/id/1/1500/600'}>
        <Container>
          <Text>Welcome Message</Text>
          <Title level="ONE">Hero with image background</Title>
          {/* <button className='button'>Click me !</button> */}
          <Button markup={ButtonMarkup.BUTTON} variant={'PRIMARY'} onClick={() => alert('Click on hero btn')}>
            Click me !
          </Button>
        </Container>
      </Hero>
      <Divider/>
      <Hero variant={VariantState.PRIMARY}>
        <Container>
          <Text inverted>Welcome Message</Text>
          <Title level="TWO" inverted>
            Hero with Background Color
          </Title>
          {/* <button className='button'>Click me !</button> */}
          <Button markup={ButtonMarkup.BUTTON} variant={ButtonVariant.ACCENT}
                  onClick={() => alert('Click on hero btn')}>
            Click me !
          </Button>
        </Container>
      </Hero>

    </Section>
  )
}
