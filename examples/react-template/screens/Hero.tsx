import React from "react";
import {
  Box,
  BoxContent,
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
} from "@trilogy-ds/react/components";
import { TitleMarkup, TrilogyColor } from "@trilogy-ds/react";

export const HeroScreen = (): JSX.Element => {
  return (
    <Section>
      <Hero backgroundColor={TrilogyColor.MAIN} overlap inverted>
          <Title markup={TitleMarkup.H1} level={TitleLevels.TWO}>
            Hero Overlapped
          </Title>
          <Text level={TextLevels.TWO}>
            Profitez dInternet dès labonnement et même en cas de coupure grâce à
            une clé 4G dans les nouvelles offres Bbox.
          </Text>
      </Hero>
      <Section>
        <Container>
          <Box backgroundColor={TrilogyColor.INFO_FADE} >
            <BoxContent>
              <Title level={TitleLevels.TWO}>Hero Overlapped</Title>
              <Text level={TextLevels.TWO}>
                Profitez dInternet dès labonnement et même en cas de coupure
                grâce à une clé 4G dans les nouvelles offres Bbox.
              </Text>
            </BoxContent>
          </Box>
        </Container>
      </Section>
      <Divider />
      <Hero backgroundSrc={"https://picsum.photos/id/1/1500/600"} inverted>
        <Container >
          <Text>Welcome Message</Text>
          <Title level="ONE">Hero with image background</Title>
          {/* <button className='button'>Click me !</button> */}
          <Button
            markup={ButtonMarkup.BUTTON}
            variant={"PRIMARY"}
            onClick={() => alert("Click on hero btn")}
          >
            Click me !
          </Button>
        </Container>
      </Hero>
      <Divider />
      <Hero backgroundColor={TrilogyColor.MAIN} inverted>
        <Container >
          <Text>Welcome Message</Text>
          <Title level="TWO">Hero with Background Color</Title>
          {/* <button className='button'>Click me !</button> */}
          <Button
            markup={ButtonMarkup.BUTTON}
            variant={ButtonVariant.SECONDARY}
            onClick={() => alert("Click on hero btn")}
          >
            Click me !
          </Button>
        </Container>
      </Hero>
    </Section>
  );
};
