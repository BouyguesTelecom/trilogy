import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxContent, Column, Columns, Container, Divider, Section, Text, Title } from '../../lib'
import Hero from './Hero'
import { TrilogyColor } from '../../objects'

const meta: Meta<typeof Hero> = {
  component: Hero,
  argTypes:{
    backgroundColor: {
      options: Object.values(TrilogyColor),
      control: { type: 'select' },
    },
    overlap: {
      control: { type: 'boolean' },
    },
    backgroundHeight: {
      control: { type: 'number' },
    }
  }
}

export default meta

type Story = StoryObj<typeof Hero>


export const Example: Story = {
  render: () => (
    <Columns multiline>
      <Column>
        <Hero backgroundColor={TrilogyColor.MAIN}>
          <Container>
            <Title inverted level={2} markup="h1"> Hero - Background MAIN </Title>
            <Text className="is-inverted has-text-weight-bold" inverted> Profitez dInternet dès l'abonnement et même en cas de
              coupure grâce à une clé 4G dans les nouvelles offres Bbox. </Text>
          </Container>
        </Hero>
        <Section>
          <Container>
            <Box>
              <BoxContent>
                <Title level={2}> Internet garanti </Title>
              </BoxContent>
            </Box>
          </Container>
        </Section>
      </Column>
      <Column size={12}>
        <Divider/>
      </Column>
      <Column>
        <Hero backgroundColor={TrilogyColor.MAIN_FADE}>
          <Container>
            <Title level={2} markup="h1"> Hero - Background MAIN_FADE </Title>
            <Text className="has-text-weight-bold"> Profitez dInternet dès l'abonnement et même en cas de
              coupure grâce à une clé 4G dans les nouvelles offres Bbox. </Text>
          </Container>
        </Hero>
        <Section>
          <Container>
            <Box>
              <BoxContent>
                <Title level={2}> Internet garanti </Title>
              </BoxContent>
            </Box>
          </Container>
        </Section>
      </Column>
      <Column size={12}>
        <Divider/>
      </Column>
      <Column>
        <Hero backgroundColor={TrilogyColor.INFO}>
          <Container>
            <Title level={2} markup="h1" inverted> Hero - Background INFO </Title>
            <Text className="has-text-weight-bold" inverted> Profitez dInternet dès l'abonnement et même en cas de
              coupure grâce à une clé 4G dans les nouvelles offres Bbox. </Text>
          </Container>
        </Hero>
        <Section>
          <Container>
            <Box>
              <BoxContent>
                <Title level={2}> Internet garanti </Title>
              </BoxContent>
            </Box>
          </Container>
        </Section>
      </Column>
      <Column size={12}>
        <Divider/>
      </Column>
      <Column>
        <Hero backgroundColor={TrilogyColor.INFO_FADE}>
          <Container>
            <Title level={2} markup="h1"> Hero - Background INFO_FADE </Title>
            <Text className="has-text-weight-bold"> Profitez dInternet dès l'abonnement et même en cas de
              coupure grâce à une clé 4G dans les nouvelles offres Bbox. </Text>
          </Container>
        </Hero>
        <Section>
          <Container>
            <Box>
              <BoxContent>
                <Title level={2}> Internet garanti </Title>
              </BoxContent>
            </Box>
          </Container>
        </Section>
      </Column>
    </Columns>
  ),
}

export const Overlap: Story = {
  render: () => (
    <Columns multiline>
      <Column size={12}>
        <Hero backgroundColor={TrilogyColor.MAIN}>
          <Container>
            <Title inverted level={2} markup="h1"> Hero classic </Title>
            <Text className="is-inverted has-text-weight-bold" inverted> Profitez dInternet dès l'abonnement et même en cas de
              coupure grâce à une clé 4G dans les nouvelles offres Bbox. </Text>
          </Container>
        </Hero>
        <Section>
          <Container>
            <Box>
              <BoxContent>
                <Title level={2}> Internet garanti </Title>
              </BoxContent>
            </Box>
          </Container>
        </Section>
      </Column>
      <Column size={12}>
        <Divider/>
      </Column>
      <Column size={12}>
        <Hero backgroundColor={TrilogyColor.MAIN_FADE} overlap>
          <Container>
            <Title level={2} markup="h1"> Hero overlap</Title>
            <Text className="has-text-weight-bold"> Profitez dInternet dès l'abonnement et même en cas de
              coupure grâce à une clé 4G dans les nouvelles offres Bbox. </Text>
          </Container>
        </Hero>
        <Section>
          <Container>
            <Box>
              <BoxContent>
                <Title level={2}> Internet garanti </Title>
              </BoxContent>
            </Box>
          </Container>
        </Section>
      </Column>
    </Columns>
  ),
}

export const Size: Story = {
  render: () => (
    <Columns multiline>
      <Column size={12}>
        <Hero backgroundColor={TrilogyColor.MAIN} backgroundHeight={100} overlap>
          <Container>
            <Title inverted level={2} markup="h1"> Hero 100</Title>
            <Text className="is-inverted has-text-weight-bold" inverted> Profitez dInternet dès l'abonnement et même en cas de
              coupure grâce à une clé 4G dans les nouvelles offres Bbox. </Text>
          </Container>
        </Hero>
        <Section>
          <Container>
            <Box>
              <BoxContent>
                <Title level={2}> Internet garanti </Title>
              </BoxContent>
            </Box>
          </Container>
        </Section>
      </Column>
      <Column size={12}>
        <Divider/>
      </Column>
      <Column size={12}>
        <Hero backgroundColor={TrilogyColor.MAIN} backgroundHeight={150} overlap>
          <Container>
            <Title inverted level={2} markup="h1"> Hero 150</Title>
            <Text inverted className="has-text-weight-bold"> Profitez dInternet dès l'abonnement et même en cas de
              coupure grâce à une clé 4G dans les nouvelles offres Bbox. </Text>
          </Container>
        </Hero>
        <Section>
          <Container>
            <Box>
              <BoxContent>
                <Title level={2}> Internet garanti </Title>
              </BoxContent>
            </Box>
          </Container>
        </Section>
      </Column>
      <Column size={12}>
        <Divider/>
      </Column>
      <Column size={12}>
        <Hero backgroundColor={TrilogyColor.MAIN} backgroundHeight={200} overlap>
          <Container>
            <Title inverted level={2} markup="h1"> Hero 200</Title>
            <Text inverted className="has-text-weight-bold"> Profitez dInternet dès l'abonnement et même en cas de
              coupure grâce à une clé 4G dans les nouvelles offres Bbox. </Text>
          </Container>
        </Hero>
        <Section>
          <Container>
            <Box>
              <BoxContent>
                <Title level={2}> Internet garanti </Title>
              </BoxContent>
            </Box>
          </Container>
        </Section>
      </Column>
      <Column size={12}>
        <Divider/>
      </Column>
      <Column size={12}>
        <Hero backgroundColor={TrilogyColor.MAIN} backgroundHeight={300} overlap>
          <Container>
            <Title inverted level={2} markup="h1"> Hero 300</Title>
            <Text inverted className="has-text-weight-bold"> Profitez dInternet dès l'abonnement et même en cas de
              coupure grâce à une clé 4G dans les nouvelles offres Bbox. </Text>
          </Container>
        </Hero>
        <Section>
          <Container>
            <Box>
              <BoxContent>
                <Title level={2}> Internet garanti </Title>
              </BoxContent>
            </Box>
          </Container>
        </Section>
      </Column>
    </Columns>
  ),
}



export const Sandbox: Story = {
  render: (args) => (
    <Columns multiline>
      <Column>
        <Hero {...args}>
          <Container>
            <Title inverted level={2} markup="h1"> Hero - Background MAIN </Title>
            <Text className="is-inverted has-text-weight-bold" inverted> Profitez dInternet dès l'abonnement et même en cas de
              coupure grâce à une clé 4G dans les nouvelles offres Bbox. </Text>
          </Container>
        </Hero>
        <Section>
          <Container>
            <Box>
              <BoxContent>
                <Title level={2}> Internet garanti </Title>
              </BoxContent>
            </Box>
          </Container>
        </Section>
      </Column>
    </Columns>
  ),
  args:{
    backgroundColor: TrilogyColor.MAIN,
    backgroundSrc: 'https://www.trilogy.fr/wp-content/uploads/2023/10/hero.jpg',
    overlap: false,
    backgroundHeight: 100,
    className: undefined,
  }
}
