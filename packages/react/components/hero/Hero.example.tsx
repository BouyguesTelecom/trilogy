import React from 'react'
import { Hero } from './index'
import { Container } from '@/components/container'
import { Title } from '@/components/title'
import { Box, Columns, ColumnsItem, Section, Text } from '@/lib'

const HeroExample: React.ReactNode = (
  <Columns multiline>
      <ColumnsItem>
        <Hero overlap className='has-pattern-dark'>
          <Container>
            <Title
              inverted
              level='TWO'
              markup='h1'
            >
              Internet garanti
            </Title>
            <Text
              className='is-inverted has-text-weight-bold'
              inverted
            >
              Profitez dInternet dès labonnement et même en cas de coupure grâce à une clé 4G dans
              les nouvelles offres Bbox.
            </Text>
          </Container>
        </Hero>
        <Section>
          <Container>
            <Box>
              <Title level='TWO'>
                Internet garanti
              </Title>
            </Box>
          </Container>
        </Section>
      </ColumnsItem>
    </Columns>
)
export default HeroExample
