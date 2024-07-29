import React from 'react'
import { Hero } from './index'
import { Container } from '@/components/container'
import { Title } from '@/components/title'
import { Button } from '@/components/button'

const HeroExample: React.ReactNode = <Hero
  backgroundSrc="https://picsum.photos/id/1/1500/600"
  onClick={function noRefCheck() {
  }}
>
  <Container>
    <Title
      inverted
      level="TWO"
      markup="h1"
    >
      Bonjour Michel
    </Title>
    <Title
      inverted
      markup="span"
      subtitle
    >
      Fugiat velit dolor ad adipisicing id quis enim cupidatat Lorem dolore aute excepteur tempor.
    </Title>
    <Button>
      Click me !{' '}
    </Button>
  </Container>
</Hero>

export default HeroExample
