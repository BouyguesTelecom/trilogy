import React from 'react'
import {
  Section,
  Title,
  TitleLevels,
  Timeline,
  TimelineItem,
  TimelineMarker,
  TimelineContent,
  TextLevels,
  Text,
  IconName,
  Spacer,
  Link,
} from '@trilogy-ds/react/components'

export const TimelineScreen = (): JSX.Element => {
  return (
    <Section>
      {/* TIMELINE WITH 4 ITEMSS */}
      <Timeline horizontal>
        <TimelineItem cancel>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading='20 Septembre'
            content='Modification de votre identifiant de connexion'
            link={'https://google.fr'}
            contentLink="Voir l'email"
            onClick={(e) => console.log(e)}
          />
        </TimelineItem>

        <TimelineItem done>
          <TimelineMarker iconColor={'WHITE'} iconName={IconName.CHECK} />
          <TimelineContent
            heading='08 Juillet'
            content='SMS Bon voyage avec seuil usage inclus'
            link='link'
            contentLink='Voir le SMS'
          />
        </TimelineItem>
        <TimelineItem active>
          <TimelineMarker iconColor={'WHITE'} iconName={IconName.CHECK} />
          <TimelineContent
            heading='08 Juillet'
            content='SMS Bon voyage avec seuil usage inclus'
            link='link'
            contentLink='Voir le SMS'
          />
        </TimelineItem>
        <TimelineItem undone>
          <TimelineMarker iconColor={'WHITE'} iconName={IconName.CHECK} />
          <TimelineContent
            heading='08 Juillet'
            content='SMS Bon voyage avec seuil usage inclus'
            link='link'
            contentLink='Voir le SMS'
          />
        </TimelineItem>
      </Timeline>

      <Spacer size={50} />

      <Spacer size={50} />

      <Timeline>
        <TimelineItem cancel>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent>
            <Title level={TitleLevels.THREE}>20 septembre</Title>
            <Text level={TextLevels.FOUR}>Modification de votre identifiant de connexion</Text>
            <Link>Voir lemail</Link>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem done>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent>
            <Title level={TitleLevels.THREE}>20 septembre</Title>
            <Text level={TextLevels.FOUR}>Modification de votre identifiant de connexion</Text>
            <Link>Voir lemail</Link>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem active>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent>
            <Title level={TitleLevels.THREE}>20 septembre</Title>
            <Text level={TextLevels.FOUR}>Modification de votre identifiant de connexion</Text>
            <Link>Voir lemail</Link>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem undone>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent>
            <Title level={TitleLevels.THREE}>20 septembre</Title>
            <Text level={TextLevels.FOUR}>Modification de votre identifiant de connexion</Text>
            <Text level={TextLevels.FOUR}>Modification de votre identifiant de connexion</Text>
            <Link>Voir lemail</Link>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Section>
  )
}
