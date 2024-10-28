import React from 'react'
import { Card, CardImage, CardContent } from './index'
import { Title, TitleLevels } from '@/components/title'
import { Text, TextLevels } from '@/components/text'
import { Button } from '@/components/button'
import { Rows, RowItem } from '@/components/rows'

const CardExample: React.ReactNode =
  <Rows>
    <RowItem>
      <Card>
        <CardImage src='https://design.bouyguestelecom.fr/v1/card-sample.200bd9f7.png' />
        <CardContent>
          <Title>
            Présentation
          </Title>
          <Title level={TitleLevels.ONE}>
            Title lorem
          </Title>
          <Text level={TextLevels.ONE}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, neque eu,
            vulputate vera.
          </Text>
          <Button
            variant='SECONDARY'
          >
            Voir plus...
          </Button>
        </CardContent>
      </Card>
    </RowItem>
    <RowItem>
      <Card horizontal>
        <CardImage src='https://design.bouyguestelecom.fr/v1/card-sample.200bd9f7.png' />
        <CardContent>
          <Title>
            Présentation
          </Title>
          <Title level={TitleLevels.ONE}>
            Title lorem
          </Title>
          <Text level={TextLevels.ONE}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, neque eu,
            vulputate vera.
          </Text>
          <Button
            variant='SECONDARY'
          >
            Voir plus...
          </Button>
        </CardContent>
      </Card>
    </RowItem>
  </Rows>

export default CardExample
