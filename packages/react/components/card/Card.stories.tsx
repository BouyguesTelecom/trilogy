import type { Meta, StoryObj } from '@storybook/react'
import { Columns } from '../columns'
import { Button, Column } from '../../lib'
import Card from './Card'
import CardImage from './image'
import { CardContent } from './index'
import { Title } from '../title'
import { Text } from '../text'

const meta: Meta<typeof Card> = {
  component: Card,
  subcomponents: { CardImage, CardContent, Text, Title },
}

export default meta

type Story = StoryObj<typeof Card>


export const Example: Story = {
  render: () => (
    <Columns multiline>
      <Column size={6}>
        <Card>
          <CardImage src="https://design.bouyguestelecom.fr/v1/card-sample.200bd9f7.png" />
          <CardContent>
            <Title level={4}> Présentation </Title>
            <Title level={5}> Title lorem </Title>
            <Text level={1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, neque eu, vulputate vera.</Text>
            <Button variant="PRIMARY"> Voir plus... </Button>
          </CardContent>
        </Card>
      </Column>
      <Column size={6}>
        <Card reversed>
          <CardImage src="https://design.bouyguestelecom.fr/v1/card-sample.200bd9f7.png" />
          <CardContent className="has-text-tertiary">
            <Title level={4}> Présentation </Title>
            <Title level={5}> Title lorem </Title>
            <Text level={1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, neque eu, vulputate vera.
            </Text>
            <Button variant="PRIMARY"> Voir plus... </Button>
          </CardContent>
        </Card>
      </Column>
      <Column size={12}>
        <Card horizontal>
          <CardImage src="https://design.bouyguestelecom.fr/v1/card-sample.200bd9f7.png" />
          <CardContent>
            <Title level={4}> Horizontal </Title>
            <Title level={5}> Title lorem </Title>
            <Text level={1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, neque eu, vulputate vera.
            </Text>
            <Button variant="PRIMARY"> Voir plus... </Button>
          </CardContent>
        </Card>
      </Column>
      <Column size={12}>
        <Card horizontal reversed>
          <CardImage src="https://design.bouyguestelecom.fr/v1/card-sample.200bd9f7.png" />
          <CardContent>
            <Title level={4}> Horizontal inverted </Title>
            <Title level={5}> Title lorem </Title>
            <Text level={1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, neque eu, vulputate vera.
            </Text>
            <Button variant="PRIMARY"> Voir plus... </Button>
          </CardContent>
        </Card>
      </Column>
    </Columns>
  ),
}
