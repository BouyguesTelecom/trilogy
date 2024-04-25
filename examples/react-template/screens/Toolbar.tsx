import * as React from "react";
import {
  Columns,
  ColumnsItem,
  Divider,
  IconName,
  Select,
  SelectOption,
  Tabs,
  TabsItem,
  Text,
  View,
} from "@trilogy-ds/react/components";
import { TypographyAlign } from "@trilogy-ds/react/objects";

export const ToolbarScreen = (): JSX.Element => {
  return (
    <View color={"WHITE"}>
      <Columns marginless className={"is-aligned-center"}>
        <ColumnsItem size={1}>
          <Text typo={TypographyAlign.TEXT_CENTERED}>Ligne :</Text>
        </ColumnsItem>
        <ColumnsItem size={3}>
          <Select
            label="Choisir une option"
            onFocus={(e) => console.log("OUVERT", e)}
            onBlur={(e) => console.log("FERMÉ", e)}
            onChange={(e) => console.log(e)}
            iconName={IconName.BELL}
          >
            <SelectOption
              iconName={IconName.BELL}
              id="id_one"
              value="opt_one"
              label="option1"
            >
              option 1
            </SelectOption>
            <SelectOption
              iconName={IconName.CHECK}
              id="id_two"
              value="opt_two"
              label="option2"
            >
              option 2
            </SelectOption>
            <SelectOption
              iconName={IconName.TRASH}
              disabled
              id="id_three"
              value="opt_three"
              label="option3"
            >
              option 3
            </SelectOption>
          </Select>
        </ColumnsItem>
        <ColumnsItem>
          <Tabs shadowless>
            <TabsItem>Tab 1</TabsItem>
            <TabsItem>Tab 2</TabsItem>
            <TabsItem>Tab 3</TabsItem>
          </Tabs>
        </ColumnsItem>
      </Columns>
      <Divider marginless />
    </View>
  );
};
