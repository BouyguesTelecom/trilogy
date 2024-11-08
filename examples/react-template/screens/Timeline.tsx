import * as React from 'react'
import {
  IconName,
  Section,
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineMarker,
} from '@trilogy-ds/react/components'
import { Divider } from '@trilogy-ds/react'

export const TimelineScreen = (): JSX.Element => {
  return (
    <Section>
      {/* TIMELINE WITH 4 ITEMSS */}
      <Timeline horizontal>
        <TimelineItem cancel>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading='20 September'
            content='loremp ipsum dolor sit amet'
            linkTo={'https://google.fr'}
            linkLabel='Check the email'
          />
        </TimelineItem>

        <TimelineItem done>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading='20 September'
            content='loremp ipsum dolor sit amet'
            linkTo='link'
            linkLabel='Check the email'
          />
        </TimelineItem>
        <TimelineItem active>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading='20 September'
            content='loremp ipsum dolor sit amet'
            linkTo='link'
            linkLabel='Check the email'
          />
        </TimelineItem>
        <TimelineItem>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading='20 September'
            content='loremp ipsum dolor sit amet'
            linkTo='link'
            linkLabel='Check the email'
          />
        </TimelineItem>
      </Timeline>

      <Divider />

      <Timeline>
        <TimelineItem cancel>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading='20 September'
            content='Modification de votre identifiant de connexion'
            linkTo='link'
            linkLabel='Check the email'
          />
        </TimelineItem>
        <TimelineItem done>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading='20 September'
            content='Modification de votre identifiant de connexion'
            linkTo='link'
            linkLabel='Check the email'
          />
        </TimelineItem>
        <TimelineItem active>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading='20 September'
            content='Modification de votre identifiant de connexion'
            linkTo='link'
            linkLabel='Check the email'
          />
        </TimelineItem>
        <TimelineItem>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading='20 September'
            content='Modification de votre identifiant de connexion'
            linkTo='link'
            linkLabel='Check the email'
          />
        </TimelineItem>
      </Timeline>
    </Section>
  )
}
