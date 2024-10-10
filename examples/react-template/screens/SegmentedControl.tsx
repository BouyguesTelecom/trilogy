import React from "react";
import {
  Section,
  SegmentControl,
  SegmentControlItem,
} from "@trilogy-ds/react/components";
import { TrilogyColor } from "@trilogy-ds/react";

export const SegmentedControlScreen = (): JSX.Element => {
  return (
    <Section backgroundColor={TrilogyColor.BACKGROUND}>
      <SegmentControl>
        <SegmentControlItem active onClick={() => alert("Appels")}>
          Item 1
        </SegmentControlItem>
        <SegmentControlItem onClick={() => alert("SMS")}>
          Item 2
        </SegmentControlItem>
        <SegmentControlItem onClick={() => alert("Équipements")}>
          Item 3
        </SegmentControlItem>
        <SegmentControlItem disabled>Item 4</SegmentControlItem>
      </SegmentControl>
    </Section>
  );
};
