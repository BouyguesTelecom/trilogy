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
        <Container fullwidth>
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
        <Container centered>
          <Box>
            <BoxContent>
              <Text>content centered</Text>
            </BoxContent>
          </Box>
        </Container>
      </Section>
      <Section>
        <Title level={TitleLevels.THREE}>pulled-right</Title>
        <Divider />
        <Container pulledRight>
          <Box>
            <BoxContent>
              <Text>pulledRight</Text>
            </BoxContent>
          </Box>
        </Container>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa
          est, tincidunt a metus vel, bibendum tempor lorem. Donec sit amet elit
          vel felis mattis faucibus et at nisi. Mauris vel lacinia diam. Integer
          convallis sit amet turpis at scelerisque. In suscipit enim turpis,
          vitae viverra urna pulvinar vel. Praesent rutrum ante id quam rhoncus,
          id elementum nulla bibendum. Integer suscipit lorem ut convallis
          aliquet. Mauris eget nibh tellus. In pretium cursus dignissim. Nam
          tincidunt consequat condimentum. Ut a arcu ultrices, luctus arcu eu,
          ullamcorper neque. Mauris sagittis pulvinar tempus. Pellentesque
          egestas eros turpis, eu fringilla sem convallis sit amet. Nam a nisi
          non sapien finibus aliquet bibendum sed est. Integer ullamcorper lorem
          sit amet leo mattis, eget ornare purus molestie. Proin mattis
          pellentesque gravida. Ut rutrum vel tellus ut pellentesque. Mauris ac
          turpis massa. Curabitur lectus diam, pharetra a lorem ac, ultricies
          auctor turpis. Ut posuere metus vel quam condimentum, nec sagittis
          erat vestibulum. Fusce id nulla nisi.
        </Text>
      </Section>
      <Section>
        <Title level={TitleLevels.THREE}>pulled-left</Title>
        <Divider />
        <Container pulledLeft>
          <Box>
            <BoxContent>
              <Text>pulledLeft</Text>
            </BoxContent>
          </Box>
        </Container>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          aliquid autem beatae debitis, ea earum incidunt, ipsa libero maxime
          necessitatibus nesciunt similique. Asperiores deserunt eligendi
          expedita numquam quisquam rem sunt!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          aliquid autem beatae debitis, ea earum incidunt, ipsa libero maxime
          necessitatibus nesciunt similique. Asperiores deserunt eligendi
          expedita numquam quisquam rem sunt!
        </Text>
      </Section>
    </>
  );
};
