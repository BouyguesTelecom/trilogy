import * as React from "react";
import {
  Divider,
  Progress,
  ProgressItem,
  ProgressRadial,
  Section,
  Title,
  TitleLevels,
} from "@trilogy-ds/react/components";
import { AlertState } from "@trilogy-ds/react/objects";

export const ProgressScreen = (): JSX.Element => {
  return (
    <Section
      backgroundSrc={
        "https://images.pexels.com/photos/18254878/pexels-photo-18254878/free-photo-of-eau-desert-rochers-source-chaude.jpeg"
      }
    >
      <Section>
        <Title level={TitleLevels.THREE}>Progress Bar</Title>
        <Divider />

        <Progress percent={30} />

        <Progress percent={30} alert="INFO" />

        <Progress percent={30} alert="WARNING" />

        <Progress percent={30} alert="ERROR" />

        <Progress percent={30} alert="SUCCESS" />
      </Section>
      <Section>
        <Title level={TitleLevels.THREE}>Stacked progress bar</Title>
        <Divider />

        <Progress stacked>
          <ProgressItem percent={15} alert={AlertState.SUCCESS} />
          <ProgressItem percent={15} alert={AlertState.INFO} />
          <ProgressItem percent={15} alert={AlertState.WARNING} />
          <ProgressItem percent={15} alert={AlertState.ERROR} />
        </Progress>
      </Section>
      <Section>
        <Title level={TitleLevels.THREE}>Progress with single legend</Title>
        <Divider />

        <Progress percent={30} uniqueLegend="My unique legend" />
      </Section>
      <Section>
        <Title level={TitleLevels.THREE}>
          Progression with legends at the ends
        </Title>
        <Divider />

        <Progress
          percent={15}
          alert={AlertState.INFO}
          firstExtremLegend="0 Go"
          secondExtremLegend="5 Go"
        />
      </Section>
      <Section>
        <Title level={TitleLevels.THREE}>Circular progress bar</Title>
        <Divider />

        <ProgressRadial percent={0.5} />

        <Title level={TitleLevels.THREE}>
          Circular progress bar with label & description
        </Title>
        <Divider />

        <ProgressRadial
          alert={AlertState.WARNING}
          secondAlert={AlertState.SUCCESS}
          secondPercent={10}
          percent={25}
          label="02:00"
          description="/desc"
        />
        <ProgressRadial
          alert={AlertState.ERROR}
          percent={90}
          label="02:00"
          description="desc"
        />
      </Section>
    </Section>
  );
};
