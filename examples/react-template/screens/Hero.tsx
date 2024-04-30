import React from "react";
import {
  Box,
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
import {TypographyColor, VariantState} from "@trilogy-ds/react/objects";
import {TitleMarkup, TrilogyColor} from "@trilogy-ds/react";

export const HeroScreen = (): JSX.Element => {
  return (
    <Section>
      <Hero overlap>
        <Container>
          <Title markup={TitleMarkup.H1} level={TitleLevels.TWO}>
            Hero Overlapped
          </Title>
          <Text
            inverted
            className={"is-inverted"}
            level={TextLevels.TWO}
            typo={TypographyColor.TEXT_GREY_DARK}
          >
            Profitez dInternet dès labonnement et même en cas de coupure grâce à
            une clé 4G dans les nouvelles offres Bbox.
          </Text>
        </Container>
      </Hero>
      <Section>
        <Container>
          <Box background={{color:TrilogyColor.INFO, fade: false }} inverted>
            <Title level={TitleLevels.TWO}>Hero Overlapped</Title>
          </Box>
        </Container>
      </Section>
      <Divider />
      <Hero backgroundSrc={"https://picsum.photos/id/1/1500/600"} inverted>
        <Container>
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
      <Hero background={TrilogyColor.MAIN} inverted>
        <Container>
          <Text>Welcome Message</Text>
          <Title level="TWO">
            Hero with Background Color
          </Title>
          {/* <button className='button'>Click me !</button> */}
          <Button
            markup={ButtonMarkup.BUTTON}
            variant={ButtonVariant.ACCENT}
            onClick={() => alert("Click on hero btn")}
          >
            Click me !
          </Button>
        </Container>
      </Hero>
    </Section>
  );
};
