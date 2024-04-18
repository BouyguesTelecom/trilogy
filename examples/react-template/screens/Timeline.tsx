import React from "react";
import {
  IconName,
  Link,
  Section,
  Text,
  TextLevels,
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineMarker,
  Title,
  TitleLevels,
} from "@trilogy-ds/react/components";
import { Divider, TrilogyColor } from "@trilogy-ds/react";

export const TimelineScreen = (): JSX.Element => {
  return (
    <Section background={TrilogyColor.WHITE}>
      {/* TIMELINE WITH 4 ITEMSS */}
      <Timeline horizontal>
        <TimelineItem cancel>
          <TimelineMarker iconName={IconName.CHECK} iconColor={"WHITE"} />
          <TimelineContent
            heading="20 September"
            content="loremp ipsum dolor sit amet"
            link={"https://google.fr"}
            contentLink="Check the email"
            onClick={(e) => console.log(e)}
          />
        </TimelineItem>

        <TimelineItem done>
          <TimelineMarker iconColor={"WHITE"} iconName={IconName.CHECK} />
          <TimelineContent
            heading="20 September"
            content="loremp ipsum dolor sit amet"
            link="link"
            contentLink="Check the email"
          />
        </TimelineItem>
        <TimelineItem active>
          <TimelineMarker iconColor={"WHITE"} iconName={IconName.CHECK} />
          <TimelineContent
            heading="20 September"
            content="loremp ipsum dolor sit amet"
            link="link"
            contentLink="Check the email"
          />
        </TimelineItem>
        <TimelineItem undone>
          <TimelineMarker iconColor={"WHITE"} iconName={IconName.CHECK} />
          <TimelineContent
            heading="20 September"
            content="loremp ipsum dolor sit amet"
            link="link"
            contentLink="Check the email"
          />
        </TimelineItem>
      </Timeline>

      <Divider />

      <Timeline>
        <TimelineItem cancel>
          <TimelineMarker iconColor={"WHITE"} iconName={IconName.CHECK} />
          <TimelineContent>
            <Title level={TitleLevels.THREE}>20 septembre</Title>
            <Text level={TextLevels.FOUR}>
              Modification de votre identifiant de connexion
            </Text>
            <Link>Voir lemail</Link>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem done>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent>
            <Title level={TitleLevels.THREE}>20 septembre</Title>
            <Text level={TextLevels.FOUR}>
              Modification de votre identifiant de connexion
            </Text>
            <Link>Voir lemail</Link>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem active>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent>
            <Title level={TitleLevels.THREE}>20 septembre</Title>
            <Text level={TextLevels.FOUR}>
              Modification de votre identifiant de connexion
            </Text>
            <Link>Voir lemail</Link>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem undone>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent>
            <Title level={TitleLevels.THREE}>20 septembre</Title>
            <Text level={TextLevels.FOUR}>
              Modification de votre identifiant de connexion
            </Text>
            <Text level={TextLevels.FOUR}>
              Modification de votre identifiant de connexion
            </Text>
            <Link>Voir lemail</Link>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Section>
  );
};
