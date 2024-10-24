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
    <>
      {/* TIMELINE WITH 4 ITEMSS */}
      <Timeline horizontal>
        <TimelineItem cancel>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading="20 September"
            content="loremp ipsum dolor sit amet"
            link={"https://google.fr"}
            contentLink="Check the email"
            onClick={(e) => console.log(e)}
          />
        </TimelineItem>

        <TimelineItem done>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading="20 September"
            content="loremp ipsum dolor sit amet"
            link="link"
            contentLink="Check the email"
          />
        </TimelineItem>
        <TimelineItem active>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading="20 September"
            content="loremp ipsum dolor sit amet"
            link="link"
            contentLink="Check the email"
          />
        </TimelineItem>
        <TimelineItem undone>
          <TimelineMarker iconName={IconName.CHECK} />
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
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading="20 September"
            content="Modification de votre identifiant de connexion"
            link="link"
            contentLink="Check the email"
          />
        </TimelineItem>
        <TimelineItem done>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading="20 September"
            content="Modification de votre identifiant de connexion"
            link="link"
            contentLink="Check the email"
          />
        </TimelineItem>
        <TimelineItem active>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading="20 September"
            content="Modification de votre identifiant de connexion"
            link="link"
            contentLink="Check the email"
          />
        </TimelineItem>
        <TimelineItem undone>
          <TimelineMarker iconName={IconName.CHECK} />
          <TimelineContent
            heading="20 September"
            content="Modification de votre identifiant de connexion"
            link="link"
            contentLink="Check the email"
          />
        </TimelineItem>
      </Timeline>
    </>
  );
};
