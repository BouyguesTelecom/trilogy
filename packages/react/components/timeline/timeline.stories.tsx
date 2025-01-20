import * as React from "react";

import { Meta, Story } from "@storybook/react";

import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineMarker,
} from "./index";
import { TimelineProps } from "./TimelineProps";
import { TimelineItemProps } from "./item/TimelineItemProps";
import { IconName } from "../icon";

export default {
  title: "Components/Timeline",
  component: Timeline,
} as Meta;

export const Base: Story<TimelineProps> = (args) => (
  <Timeline {...args}>
    <TimelineItem cancel>
      <TimelineMarker iconName={IconName.CHECK} />
      <TimelineContent
        heading="20 Septembre"
        content="Modification de votre identifiant de connexion"
        linkTo="_blank"
        linkLabel="Voir l'email"
      />
    </TimelineItem>

    <TimelineItem active>
      <TimelineMarker iconName={IconName.CHECK} />
      <TimelineContent
        heading="08 Juillet"
        content="SMS Bon voyage avec seuil usage inclus"
        linkTo="_blank"
        linkLabel="Voir le SMS"
      />
    </TimelineItem>

    <TimelineItem done>
      <TimelineMarker iconName={IconName.CHECK} />
      <TimelineContent
        heading="06 Juillet"
        content="Passage en boutique concernant un accessoire"
      />
    </TimelineItem>

    <TimelineItem done>
      <TimelineMarker iconName={IconName.CHECK} />
      <TimelineContent
        heading="05 Mai"
        content="Modification de votre adresse de facturation"
      />
    </TimelineItem>
  </Timeline>
);
export const ItemUndone: Story<TimelineProps> = (args) => (
  <Timeline {...args}>
    <TimelineItem cancel>
      <TimelineMarker iconName={IconName.CHECK} />
      <TimelineContent
        heading="05 Mai"
        content="Modification de votre adresse de facturation"
      />
    </TimelineItem>
  </Timeline>
);
export const ItemActive: Story<TimelineProps> = (args) => (
  <Timeline {...args}>
    <TimelineItem active>
      <TimelineMarker iconName={IconName.CHECK} />
      <TimelineContent
        heading="08 Juillet"
        content="SMS Bon voyage avec seuil usage inclus"
        linkTo="_blank"
        linkLabel="Voir le SMS"
      />
    </TimelineItem>
  </Timeline>
);
export const ItemCancel: Story<TimelineItemProps> = (args) => (
  <Timeline {...args}>
    <TimelineItem cancel>
      <TimelineMarker iconName={IconName.CHECK} />
      <TimelineContent
        heading="05 Mai"
        content="Modification de votre adresse de facturation"
      />
    </TimelineItem>
  </Timeline>
);

export const ItemDone: Story<TimelineProps> = (args) => (
  <Timeline {...args}>
    <TimelineItem done>
      <TimelineMarker iconName={IconName.CHECK} />
      <TimelineContent
        heading="05 Mai"
        content="Modification de votre adresse de facturation"
      />
    </TimelineItem>
  </Timeline>
);

export const horizontal: Story<TimelineProps> = (args) => (
  <Timeline {...args}>
    <TimelineItem done>
      <TimelineMarker iconName={IconName.CHECK} />
      <TimelineContent
        heading="20 Septembre"
        content="Modification de votre identifiant de connexion"
        linkTo={"https://bouyguestelecom.fr"}
        linkLabel="Voir l'email"
      />
    </TimelineItem>

    <TimelineItem done>
      <TimelineMarker iconName={IconName.CHECK} />
      <TimelineContent
        heading="08 Juillet"
        content="SMS Bon voyage avec seuil usage inclus"
        linkTo="_blank"
        linkLabel="Voir le SMS"
      />
    </TimelineItem>
    <TimelineItem active>
      <TimelineMarker iconName={IconName.CHECK} />
      <TimelineContent
        heading="08 Juillet"
        content="SMS Bon voyage avec seuil usage inclus"
        linkTo="_blank"
        linkLabel="Voir le SMS"
      />
    </TimelineItem>
    <TimelineItem cancel>
      <TimelineMarker iconClassname={'is-success'} iconName={IconName.CHECK} />
      <TimelineContent
        heading="08 Juillet"
        content="SMS Bon voyage avec seuil usage inclus"
        linkTo="_blank"
        linkLabel="Voir le SMS"
      />
    </TimelineItem>
  </Timeline>
);
horizontal.args = {
  horizontal: true,
};
