import * as React from "react";
import {
  Fab,
  IconName,
  Section,
  Title,
  View,
} from "@trilogy-ds/react/components";

export const FabScreen = (): JSX.Element => {
  const [active, setActive] = React.useState<boolean>(false);
  return (
    <Section>
      <View style={{height: "80rem"}}>

        <Title level={"TWO"}>FAB button</Title>
        <Fab
          extended={active}
          onClick={() => setActive(!active)}
          iconName={IconName.INFOS_CIRCLE}
          right={20}
          bottom={15}
        >
          New Conversation
        </Fab>
      </View>
    </Section>
  );
};
