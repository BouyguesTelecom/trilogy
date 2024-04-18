import * as React from "react";
import {
  Fab,
  IconName,
  Section,
  Title,
  View,
} from "@trilogy-ds/react/components";

export const FabScreen = (): JSX.Element => {
  return (
    <View style={{ height: "80rem" }}>
      <Section>
        <Title level={"TWO"}>FAB button</Title>
        <Fab iconName={IconName.INFOS_CIRCLE} right={20} bottom={15}>
          New Conversation
        </Fab>
      </Section>
    </View>
  );
};
