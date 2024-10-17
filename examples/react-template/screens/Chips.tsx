import * as React from "react";
import {
  Chips,
  ChipsList,
  Section,
  Title,
  TitleLevels,
} from "@trilogy-ds/react/components";

export const ChipsScreen = (): JSX.Element => {
  const [skeleton] = React.useState<boolean>(false);
  const [active, setActive] = React.useState(false);
  const [active2, setActive2] = React.useState(false);
  const [active3, setActive3] = React.useState(false);
  const [activeBis, setActiveBis] = React.useState(false);
  const [active2Bis, setActive2Bis] = React.useState(false);
  const [active3Bis, setActive3Bis] = React.useState(false);
  const [active4Bis, setActive4Bis] = React.useState(false);

  return (
    <Section>
      <Title level={TitleLevels.TWO}>Chips selection multiple </Title>

      <ChipsList multiple>
        <Chips
          id="1"
          onClick={() => {
            setActive(!active);
          }}
          active={active}
        >
          Chips 1
        </Chips>
        <Chips
          onClick={() => {
            setActive2(!active2);
          }}
          active={active2}
        >
          Chips 2
        </Chips>
        <Chips
          onClick={() => {
            setActive3(!active3);
          }}
          active={active3}
        >
          Chips 3
        </Chips>
        <Chips disabled>Chips 4</Chips>
      </ChipsList>

      <Title level={TitleLevels.TWO}>Chips selection unique </Title>
      <ChipsList>
        <Chips
          onClick={() => {
            setActiveBis(!activeBis);
          }}
          active={activeBis}
        >
          Chips 1
        </Chips>
        <Chips
          onClick={() => {
            setActive2Bis(!active2Bis);
          }}
          active={active2Bis}
        >
          Chips 2
        </Chips>
        <Chips
          onClick={() => {
            setActive3Bis(!active3Bis);
          }}
          active={active3Bis}
        >
          Chips 3
        </Chips>
        <Chips
          onClick={() => {
            setActive4Bis(!active4Bis);
          }}
          active={active4Bis}
        >
          Chips 4
        </Chips>
      </ChipsList>
    </Section>
  );
};
