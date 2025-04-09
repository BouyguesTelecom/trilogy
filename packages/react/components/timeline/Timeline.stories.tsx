import type { Meta, StoryObj } from '@storybook/react'
import { Column, Columns, Section, Timeline, TimelineContent, TimelineItem, TimelineMarker } from '../../lib'
import { IconName } from '../icon'

const meta: Meta<typeof Timeline> = {
  component: Timeline,
  subcomponents: { TimelineItem, TimelineMarker, TimelineContent },
  argTypes: {
    horizontal: {
      control: { type: 'boolean' },
    },
    className: {
      control: { type: 'text' },
    },
    iconName: {
      options:[
        IconName.ALERT,
        IconName.CHECK,
        IconName.BELL,
        IconName.EYE,
        IconName.INFOS_CIRCLE,
        IconName.SEARCH,
        IconName.TRASH,
      ],
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    linkTo: {
      control: { type: 'text' },
    }
  },
}

export default meta

type Story = StoryObj<typeof Timeline>

export const Example: Story = {
  render: () => (
    <Section>
      <Columns>
        <Column>
          <Timeline>
            <TimelineItem>
              <TimelineMarker iconName='tri-bell' />
              <TimelineContent
                content='Modification de votre identifiant de connexion'
                heading='20 Septembre'
                linkLabel="Voir l'email"
                linkTo='link'
              />
            </TimelineItem>
            <TimelineItem active>
              <TimelineMarker iconName='tri-bell' />
              <TimelineContent
                content='SMS Bon voyage avec seuil usage inclus'
                heading='08 Juillet'
                linkLabel='Voir le SMS'
                linkTo='link'
              />
            </TimelineItem>
            <TimelineItem done>
              <TimelineMarker iconName='tri-bell' />
              <TimelineContent content='Passage en boutique concernant un accessoire' heading='06 Juillet' />
            </TimelineItem>
            <TimelineItem done>
              <TimelineMarker iconName='tri-bell' />
              <TimelineContent content='Modification de votre adresse de facturation' heading='05 Mai' />
            </TimelineItem>
          </Timeline>
        </Column>
        <Column>
          <Timeline horizontal>
            <TimelineItem done>
              <TimelineMarker iconName='tri-bell' />
              <TimelineContent
                content='Modification de votre identifiant de connexion'
                heading='20 Septembre'
                linkLabel="Voir l'email"
                linkTo='https://bouyguestelecom.fr'
              />
            </TimelineItem>
            <TimelineItem done>
              <TimelineMarker iconName='tri-bell' />
              <TimelineContent
                content='SMS Bon voyage avec seuil usage inclus'
                heading='08 Juillet'
                linkLabel='Voir le SMS'
                linkTo='link'
              />
            </TimelineItem>
            <TimelineItem active>
              <TimelineMarker iconName='tri-bell' />
              <TimelineContent
                content='SMS Bon voyage avec seuil usage inclus'
                heading='08 Juillet'
                linkLabel='Voir le SMS'
                linkTo='link'
              />
            </TimelineItem>
            <TimelineItem cancel>
              <TimelineMarker iconName='tri-bell' />
              <TimelineContent
                content='SMS Bon voyage avec seuil usage inclus'
                heading='08 Juillet'
                linkLabel='Voir le SMS'
                linkTo='link'
              />
            </TimelineItem>
          </Timeline>
        </Column>
      </Columns>
    </Section>
  ),
}

export const SandboxTimelineItem: Story = {
  render: (args) => (
    <Section>
      <Columns>
        <Column>
          <Timeline>
            <TimelineItem {...args}>
              <TimelineMarker {...args}/>
              <TimelineContent {...args}/>
            </TimelineItem>
            <TimelineItem active>
              <TimelineMarker iconName='tri-bell' />
              <TimelineContent
                content='SMS Bon voyage avec seuil usage inclus'
                heading='08 Juillet'
                linkLabel='Voir le SMS'
                linkTo='link'
              />
            </TimelineItem>
            <TimelineItem>
              <TimelineMarker iconName='tri-bell' />
              <TimelineContent content='Passage en boutique concernant un accessoire' heading='06 Juillet' />
            </TimelineItem>
            <TimelineItem>
              <TimelineMarker iconName='tri-bell' />
              <TimelineContent content='Modification de votre adresse de facturation' heading='05 Mai' />
            </TimelineItem>
          </Timeline>
        </Column>
      </Columns>
    </Section>
  ),
  args: {
    active: false,
    done: true,
    cancel: false,
    iconName: 'tri-bell',
    heading: '20 Septembre',
    content: "Modification de de l'item sandbox",
    linkLabel: "Voir l'email",
    linkTo: undefined,
    horizontal: false,
  },
}
