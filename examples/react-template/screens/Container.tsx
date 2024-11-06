import * as React from "react";
import {
  Box,
  Section,
  Title,
  TitleLevels,
  Divider,
  Container,
  Text,
  BoxContent,
} from "@trilogy-ds/react/components";

export const ContainerScreen = (): JSX.Element => {
  return (
    <>
      <Section verticalPaddingless>
        <Container>
          <Box>
            <BoxContent>
              <Text>Container</Text>
              <Title level={TitleLevels.THREE}>Conteneur simple</Title>
            </BoxContent>
          </Box>
        </Container>
        <Divider />
      </Section>
      <Section>
        <Title level={TitleLevels.THREE}>Conteneur</Title>
        <Divider />
        <Container>
          <Box>
            <BoxContent>
              <Text>Container content</Text>
            </BoxContent>
          </Box>
        </Container>
      </Section>
      <Section>
        <Title level={TitleLevels.THREE}>Conteneur medium</Title>
        <Divider />
        <Container medium>
          <Box>
            <BoxContent>
              <Text>Fullwidth content</Text>
            </BoxContent>
          </Box>
        </Container>
      </Section>
      <Section>
        <Title level={TitleLevels.THREE}>fullwidth</Title>
        <Divider />
        <Container >
          <Box>
            <BoxContent>
              <Text>Fullwidth content</Text>
            </BoxContent>
          </Box>
        </Container>
      </Section>
      <Section>
        <Title level={TitleLevels.THREE}>centré</Title>
        <Divider />
        <Container >
          <Box>
            <BoxContent>
              <Text>content centered</Text>
            </BoxContent>
          </Box>
        </Container>
      </Section>
    </>
  );
};
