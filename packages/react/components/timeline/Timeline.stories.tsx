import type { Meta, StoryObj } from '@storybook/react'
import { Column, Columns, Section, Timeline, TimelineContent, TimelineItem, TimelineMarker } from '../../lib'

const meta: Meta<typeof Timeline> = {
  component: Timeline,
  subcomponents: {TimelineItem, TimelineMarker, TimelineContent},
}

export default meta

type Story = StoryObj<typeof Timeline>


// @ts-ignore
export const Example: Story = {
  render: () => (
    <Section>
      <Columns>
        <Column>
          <Timeline>
            <TimelineItem>
              <TimelineMarker iconName="tri-bell" />
              <TimelineContent content="Modification de votre identifiant de connexion" heading="20 Septembre"
                               linkLabel="Voir l'email" linkTo="link" />
            </TimelineItem>
            <TimelineItem active>
              <TimelineMarker iconName="tri-bell" />
              <TimelineContent content="SMS Bon voyage avec seuil usage inclus" heading="08 Juillet" linkLabel="Voir le SMS"
                               linkTo="link" />
            </TimelineItem>
            <TimelineItem done>
              <TimelineMarker iconName="tri-bell" />
              <TimelineContent content="Passage en boutique concernant un accessoire" heading="06 Juillet" />
            </TimelineItem>
            <TimelineItem done>
              <TimelineMarker iconName="tri-bell" />
              <TimelineContent content="Modification de votre adresse de facturation" heading="05 Mai" />
            </TimelineItem>
          </Timeline>
        </Column>
        <Column>
          <Timeline horizontal>
            <TimelineItem done>
              <TimelineMarker iconName="tri-bell" />
              <TimelineContent content="Modification de votre identifiant de connexion" heading="20 Septembre"
                               linkLabel="Voir l'email" linkTo="https://bouyguestelecom.fr" />
            </TimelineItem>
            <TimelineItem done>
              <TimelineMarker iconName="tri-bell" />
              <TimelineContent content="SMS Bon voyage avec seuil usage inclus" heading="08 Juillet" linkLabel="Voir le SMS"
                               linkTo="link" />
            </TimelineItem>
            <TimelineItem active>
              <TimelineMarker iconName="tri-bell" />
              <TimelineContent content="SMS Bon voyage avec seuil usage inclus" heading="08 Juillet" linkLabel="Voir le SMS"
                               linkTo="link" />
            </TimelineItem>
            <TimelineItem cancel>
              <TimelineMarker iconName="tri-bell" />
              <TimelineContent content="SMS Bon voyage avec seuil usage inclus" heading="08 Juillet" linkLabel="Voir le SMS"
                               linkTo="link" />
            </TimelineItem>
          </Timeline>
        </Column>
      </Columns>
    </Section>
  ),
}
