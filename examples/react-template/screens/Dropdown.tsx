import * as React from "react";
import {
  Dropdown,
  DropdownDivider,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Section,
  Text,
  TextLevels,
} from "@trilogy-ds/react/components";
import { Platform } from "react-native";

export const DropdownScreen = (): JSX.Element => {
  const [itemDropdown, setItemDropdown] = React.useState<
    Array<string | undefined>
  >([]);

  const platform = Platform.OS;

  if (platform === "web") {
    return (
      <Section {...{ style: { minHeight: 500 } }}>
        {/* N EXISTE PAS EN MOBILE */}
        <Dropdown>
          <DropdownTrigger
            value={itemDropdown}
            label="Dropdown label"
            placeholder="Dropdown placeholder"
          />
          <DropdownMenu>
            <DropdownItem
              label="Item label 1Item"
              name="item1"
              value="Value 1"
              // eslint-disable-next-line no-console
              onChange={(e) => {
                setItemDropdown((curr) => {
                  if (curr.includes(e.itemLabel))
                    return curr.filter((item) => item !== e.itemLabel);
                  return [...curr, e.itemLabel];
                });
              }}
            />
            <DropdownItem
              label="Item label 2Item"
              name="item2"
              value="Value 2"
              // eslint-disable-next-line no-console
              onChange={(e) => {
                setItemDropdown((curr) => {
                  if (curr.includes(e.itemLabel))
                    return curr.filter((item) => item !== e.itemLabel);
                  return [...curr, e.itemLabel];
                });
              }}
            />
            <DropdownDivider />
            <DropdownItem
              label="Item label 3Item"
              name="item3"
              value="Value 3"
              onChange={(e) => {
                setItemDropdown((curr) => {
                  if (curr.includes(e.itemLabel))
                    return curr.filter((item) => item !== e.itemLabel);
                  return [...curr, e.itemLabel];
                });
              }}
            />
          </DropdownMenu>
        </Dropdown>
      </Section>
    );
  } else {
    <Text level={TextLevels.ONE}>Mobile unavailable</Text>;
  }
};
