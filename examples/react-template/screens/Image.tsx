import * as React from "react";
import { Image, Section } from "@trilogy-ds/react/components";
import { Divider, Title, TitleLevels } from "@trilogy-ds/react";

export const ImageScreen = (): JSX.Element => {
  return (
    <Section>
      <Title level={TitleLevels.THREE}>Image simple</Title>
      <Image
        width={150}
        height={150}
        src="https://picsum.photos/id/1/1500/600"
      />
      <Image
        width={1000}
        height={250}
        src="https://picsum.photos/id/1/1500/600"
      />
      <Divider />
      <Title level={TitleLevels.THREE}>Image rounded</Title>
      <Image
        rounded
        width={150}
        height={150}
        src="https://picsum.photos/id/1/1500/600"
      />
    </Section>
  );
};
