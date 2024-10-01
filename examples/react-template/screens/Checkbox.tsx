import * as React from "react";
import {
  AutoLayout,
  Checkbox,
  Columns,
  ColumnsItem,
  Container,
  IconName,
  Spacer,
  SpacerSize,
  Text,
} from "@trilogy-ds/react/components";
import { TypographyAlign } from "@trilogy-ds/react/objects";

export const CheckboxScreen = (): JSX.Element => {
  return (
    <AutoLayout>
      <Container>
        <Text typo={TypographyAlign.TEXT_CENTERED}>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
        </Text>
        <Columns>
          <ColumnsItem size={6} centered>
            <Checkbox
              tile
              iconTile={IconName.CHECK_CIRCLE}
              label="Lorem ipsum dolor"
              name="radio1"
              value="default value 1"
              // eslint-disable-next-line no-console
              onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
              checked
            />
          </ColumnsItem>
          <ColumnsItem size={6}>
            <Checkbox
              iconTile={IconName.CHECK_CIRCLE}
              tile
              label="Lorem ipsum dolor"
              name="radio1"
              value="default value 1"
              // eslint-disable-next-line no-console
              onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
            />
          </ColumnsItem>
        </Columns>
        <Spacer size={SpacerSize.MEDIUM} />
        <Columns>
          <ColumnsItem size={6} centered>
            <Checkbox
              tile
              iconTile={IconName.CHECK_CIRCLE}
              label="Lorem ipsum dolor"
              name="radio1"
              value="default value 1"
              // eslint-disable-next-line no-console
              onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
            />
          </ColumnsItem>
          <ColumnsItem size={6}>
            <Checkbox
              disabled
              iconTile={IconName.CHECK_CIRCLE}
              tile
              label="Lorem ipsum dolor"
              name="radio1"
              value="default value 1"
              // eslint-disable-next-line no-console
              onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
            />
          </ColumnsItem>
        </Columns>
        <Spacer size={20} />

        <Checkbox
          checked
          iconTile={IconName.EYE}
          horizontalTile
          tile
          label="Checkbox checked"
        />
        <Checkbox disabled horizontalTile tile label="Checkbox Disabled" />
        <Checkbox
          description={"lorem kenenf"}
          tile
          horizontalTile
          label="Checkbox simple"
        />

        <Checkbox checked label="Checkbox checked" />
        <Checkbox disabled label="Checkbox Disabled" />
        <Checkbox description={"lorem kenenf"} label="Checkbox simple" />
      </Container>
    </AutoLayout>
  );
};
