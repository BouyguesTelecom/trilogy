import React from 'react'
import { Card, CardImage, CardContent } from './index'
import { Title } from '@/components/title'
import { Text } from '@/components/text'
import { Button } from '@/components/button'

const CardExample: React.ReactNode = <Card onClick={function noRefCheck(){}}>
  <CardImage src="https://design.bouyguestelecom.fr/v1/card-sample.200bd9f7.png" />
  <CardContent>
    <Title>
      Présentation
    </Title>
    <Title level="ONE">
      Title lorem
    </Title>
    <Text level="ONE">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, neque eu, vulputate vera.
    </Text>
    <Button
      onClick={function noRefCheck(){}}
      variant="SECONDARY"
    >
      Voir plus...
    </Button>
  </CardContent>
</Card>

export default CardExample
