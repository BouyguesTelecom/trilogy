import type { Meta, StoryObj } from '@storybook/react'
import { Columns } from '../columns'
import { Button, Column } from '../../lib'
import Card from './Card'
import CardImage from './image'
import { CardContent } from './index'
import { Title } from '../title'
import { Text } from '../text'
import { Alignable } from '../../objects'

const meta: Meta<typeof Card> = {
  component: Card,
  subcomponents: { CardImage, CardContent, Text, Title },
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    subtitle: {
      control: { type: 'text' },
    },
    text: {
      control: { type: 'text' },
    },
    buttonVariant: {
      options: ['PRIMARY', 'SECONDARY', 'CONVERSION', 'GHOST'],
      control: { type: 'inline-radio' },
    },
    textButton: {
      control: { type: 'text' },
    },
    imageSrc: {
      control: { type: 'text' },
    },
    horizontal: {
      control: { type: 'boolean' },
    },
    reversed: {
      control: { type: 'boolean' },
    },
    multiline: {
      control: { type: 'boolean' },
    },
    fullheight: {
      control: { type: 'boolean' },
    },
    skeleton: {
      control: { type: 'boolean' },
    }
  }
}

export default meta

type Story = StoryObj<typeof Card>

export const Example: Story = {
  render: () => (
    <Columns multiline>
      <Column size={6}>
        <Card>
          <CardImage src='https://design.bouyguestelecom.fr/v1/card-sample.200bd9f7.png' />
          <CardContent>
            <Title level={4}> Présentation </Title>
            <Title level={5}> Title lorem </Title>
            <Text level={1}>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, neque eu, vulputate vera.
            </Text>
            <Button variant='PRIMARY'> Voir plus... </Button>
          </CardContent>
        </Card>
      </Column>
      <Column size={6}>
        <Card reversed>
          <CardImage src='https://design.bouyguestelecom.fr/v1/card-sample.200bd9f7.png' />
          <CardContent className='has-text-tertiary'>
            <Title level={4}> Présentation </Title>
            <Title level={5}> Title lorem </Title>
            <Text level={1}>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, neque eu, vulputate vera.
            </Text>
            <Button variant='PRIMARY'> Voir plus... </Button>
          </CardContent>
        </Card>
      </Column>
      <Column size={12}>
        <Card horizontal>
          <CardImage src='https://design.bouyguestelecom.fr/v1/card-sample.200bd9f7.png' />
          <CardContent>
            <Title level={4}> Horizontal </Title>
            <Title level={5}> Title lorem </Title>
            <Text level={1}>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, neque eu, vulputate vera.
            </Text>
            <Button variant='PRIMARY'> Voir plus... </Button>
          </CardContent>
        </Card>
      </Column>
      <Column size={12}>
        <Card horizontal reversed>
          <CardImage src='https://design.bouyguestelecom.fr/v1/card-sample.200bd9f7.png' />
          <CardContent>
            <Title level={4}> Horizontal inverted </Title>
            <Title level={5}> Title lorem </Title>
            <Text level={1}>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, neque eu, vulputate vera.
            </Text>
            <Button variant='PRIMARY'> Voir plus... </Button>
          </CardContent>
        </Card>
      </Column>
    </Columns>
  ),
}

// export const Sandbox: Story = {
//   render: (...args) => (
//     <Columns multiline align={Alignable.ALIGNED_CENTER}>
//       <Column size={6}>
//         <Card>
//           <CardImage src={args.imagesrc} />
//           <CardContent>
//             <Title level={4}>{args.title}</Title>
//             <Title level={5}>{args.subtitle}</Title>
//             <Text level={1}>{args.text}</Text>
//             <Button variant={args.buttonVariant}>{args.textButton}</Button>
//           </CardContent>
//         </Card>
//       </Column>
//     </Columns>
//   ),
//   args: {
//     imageSrc: 'https://design.bouyguestelecom.fr/v1/card-sample.200bd9f7.png',
//     title: 'Titre de la carte',
//     subtitle: 'Sous-titre de la carte',
//     text: 'Texte de la carte',
//     buttonVariant: 'PRIMARY',
//     textButton: 'Voir plus...',
//     fullheight: false,
//     horizontal: false,
//     reversed: false,
//     multiline: false,
//     onClick: () => {},
//     className: '',
//     id: 'id',
//     accessibilityLabel: 'accessibilityLabel',
//     testId: 'testId',
//     children: undefined,
//     skeleton: false,
//     href: undefined,
//     active: false,
//     floating: false,
//     flat: false,
//   }
// }
