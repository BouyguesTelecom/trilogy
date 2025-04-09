import type { Meta, StoryObj } from '@storybook/react'
import { Accordion, AccordionBody, AccordionHeader } from './index'
import AccordionItem from './item'

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  subcomponents: { AccordionItem, AccordionHeader, AccordionBody },
}
export default meta;

type Story = StoryObj<typeof Accordion>;

const AccordionTemplate: Story = {
  render: ({ ...args }) => {
    return (
      <Accordion>
        {args.map((arg) => (
          <AccordionItem {...arg}>
            <AccordionHeader>{arg.header}</AccordionHeader>
            <AccordionBody>{arg.body}</AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    );
  },
};

export const Default: Story = {
  ...AccordionTemplate,
  args: {
    items: [
      {
        header: 'Header 1',
        body: 'Body 1',
      },
      {
        header: 'Header 2',
        body: 'Body 2',
      },
      {
        header: 'Header 3',
        body: 'Body 3',
      },
    ],
  },
};
