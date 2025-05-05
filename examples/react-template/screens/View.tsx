import * as React from "react";
import {Button, ButtonVariant, Section, Text, Title, TitleLevels, View,} from "@trilogy-ds/react/components";
import {ViewMarkup} from "@trilogy-ds/react/components/view/ViewProps";
import {Alignable, Justifiable} from "@trilogy-ds/react/objects";

export const ViewScreen = (): JSX.Element => {
  return (
    <Section>
      <View justify={"JUSTIFIED_END"} markup={ViewMarkup.LABEL}>
        <Text>Click here to check the checkbox.</Text>
      </View>
      <View markup={ViewMarkup.SPAN}></View>
      <View
        markup={ViewMarkup.DIV}
        flexable
        justify={Justifiable.SPACE_BETWEEN}
        align={Alignable.ALIGNED_CENTER}
      >
        <Button variant={ButtonVariant.SECONDARY}>CLick on me</Button>
        <Title level={TitleLevels.THREE}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa
          dolorum error et ex exercitationem, explicabo fugiat fugit, id impedit
          iste libero modi, molestiae nisi nobis quis sapiente ut voluptas?
        </Title>
      </View>
    </Section>
  );
};
