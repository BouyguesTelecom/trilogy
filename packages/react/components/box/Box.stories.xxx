import type { Meta, StoryObj } from '@storybook/react'
import { Columns } from '../columns'
import { BoxContent, Column, Link, Title } from '../../lib'
import Box from './Box'
import { Text } from '../text'
import { BoxFooter } from './index'
import { TrilogyColor } from '../../objects'

const meta: Meta<typeof Box> = {
  component: Box,
  subcomponents: { BoxContent, BoxFooter },
  argTypes:{
    highlighted:{
      options: ['INFO', 'WARNING', 'ERROR', 'SUCCESS', 'MAIN', 'ACCENT'],
      control: { type: 'inline-radio' },
    }
  }
}

export default meta

type Story = StoryObj<typeof Box>


export const Example: Story = {
  render: () => (
    <Columns multiline>
      <Column size={4}>
        <Box>
          <BoxContent>
            <Title level={1}> Classic Box </Title>
            <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. </Text>
          </BoxContent>
        </Box>
      </Column>
      <Column size={4}>
        <Box flat>
          <BoxContent>
            <Title level={1}> Flat Box </Title>
            <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. </Text>
          </BoxContent>
        </Box>
      </Column>
      <Column size={4}>
        <Box highlighted="WARNING">
          <BoxContent>
            <Title level={1}> Warning Box </Title>
            <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. </Text>
          </BoxContent>
        </Box>
      </Column>
      <Column size={12}>
        <Box>
          <BoxContent>
            <Title level={1}> Classic Box with link</Title>
            <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. </Text>
          </BoxContent>
          <BoxFooter>
            <Link> Link </Link>
          </BoxFooter>
        </Box>
      </Column>
    </Columns>
  ),
}

// export const Sandbox: Story = {
//   render: (args) => (
//     <Columns multiline>
//       <Column size={4}>
//         <Box {...args}>
//           <BoxContent {...args}>
//             <Title level={1}>{args.title}</Title>
//             <Text>{args.text}</Text>
//           </BoxContent>
//         </Box>
//       </Column>
//     </Columns>
//   ),args:{
//     title: "Classic Box",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
//     flat: false,
//     backgroundColor: TrilogyColor.BACKGROUND,
//     backgroundSrc: "",
//     onClick: () => {},
//     fullheight: false,
//     skeleton: false,
//     headerOffset: false,
//     active: false,
//     inverted: false,
//     shadowless: false,
//   }
// }
