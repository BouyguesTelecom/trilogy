import * as React from "react";
import {
  IconName,
  Link,
  Section,
  Text,
  TextLevels,
  Title,
  TitleLevels,
} from "@trilogy-ds/react/components";
import { AutoLayout } from "@trilogy-ds/react";

export const LinkScreen = (): JSX.Element => {
  return (
    <Section>
      <AutoLayout>
        <Title level={TitleLevels.THREE}>Links inline</Title>
        <Text>
          I'm in a paragraph and this is a <Link>standard link</Link> while this
          is a <Link plain> standard ununderlined link.</Link> If I want a
          tertiary colored link, I can also use this{" "}
          <Link>underlined link</Link>, or this{" "}
          <Link plain> ununderlined one.</Link>.
        </Text>
        <Title level={TitleLevels.THREE}>External links</Title>
        <Link href="https://google.com" blank>
          External link
        </Link>
        <Title level={TitleLevels.THREE}>Link with icon</Title>
        <Link
          href="https://google.com"
          blank
          iconName={IconName.ARROW_RIGHT}
        >
          External link
        </Link>
      </AutoLayout>
    </Section>
  );
};
