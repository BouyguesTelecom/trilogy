import React from 'react'
import { Hero } from './index'
import { Container } from '@/components/container'
import { Title, TitleLevels } from '@/components/title'
import { Columns, ColumnsItem } from '@/components/columns'
import { Section } from '@/components/section'
import { Box, BoxContent } from '@/components/box'
import { Text } from '@/components/text'

const HeroExample: React.ReactNode = (
  <Columns multiline>
    <ColumnsItem>
      <Hero overlap className='has-pattern-dark'>
        <Container>
          <Title inverted level={TitleLevels.TWO} markup='h1'>
            Internet garanti
          </Title>
          <Text className='is-inverted has-text-weight-bold' inverted>
            Profitez dInternet dès labonnement et même en cas de coupure grâce à une clé 4G dans les nouvelles offres
            Bbox.
          </Text>
        </Container>
      </Hero>
      <Section>
        <Container>
          <Box>
            <BoxContent>
              <Title level={TitleLevels.TWO}>Internet garanti</Title>
            </BoxContent>
          </Box>
        </Container>
      </Section>
    </ColumnsItem>
  </Columns>
)
export default HeroExample
