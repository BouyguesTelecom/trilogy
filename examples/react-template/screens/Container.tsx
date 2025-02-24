import { Box, BoxContent, Container, Divider, Section, Text, Title, TitleLevels } from '@trilogy-ds/react/components'
import * as React from 'react'

export const ContainerScreen = (): JSX.Element => {
  return (
    <>
      <Section>
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
        <Container>
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
        <Container>
          <Box>
            <BoxContent>
              <Text>content centered</Text>
            </BoxContent>
          </Box>
        </Container>
      </Section>
    </>
  )
}
