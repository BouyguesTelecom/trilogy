import * as React from "react";
import {
  IconName,
  Tabs,
  TabsItem,
  Title,
  TitleLevels,
  Section,
  Box,
  BoxHeader,
  BoxContent,
  Text,
  Button,
  View
} from "@trilogy-ds/react/components";
import { TrilogyColor } from "@trilogy-ds/react/objects";

export const TabScreen = (): JSX.Element => {
  return (
    <Section>
      <Title level={TitleLevels.THREE}>Tabs with icons</Title>
      <Tabs>
        <TabsItem groupName="group-one" id="tab-1" label="Tab 1" active iconName={IconName.BELL}>
          <p>Tab content 1</p>
        </TabsItem>
        <TabsItem groupName="group-one" id="tab-2" label="Tab 2" iconName={IconName.BELL}>
          <p>Tab content 2</p>
        </TabsItem>
        <TabsItem groupName="group-one" id="tab-3" label="Tab 3" iconName={IconName.BELL}>
          <p>Tab content 3</p>
        </TabsItem>
        <TabsItem groupName="group-one" id="tab-4" label="Tab 4" iconName={IconName.BELL}>
          <p>Tab content 4</p>
        </TabsItem>
      </Tabs>

      <Title level={TitleLevels.THREE}>Tabs without icon</Title>

      <Tabs>
        <TabsItem groupName="group-two" id="tab-5" label="Tab 5" active>
          <p>Tab content 5</p>
        </TabsItem>
        <TabsItem groupName="group-two" id="tab-6" label="Tab 6">
          <p>Tab content 6</p>
        </TabsItem>
        <TabsItem groupName="group-two" id="tab-7" label="Tab 7">
          <p>Tab content 7</p>
        </TabsItem>
        <TabsItem groupName="group-two" id="tab-8" label="Tab 8">
          <p>Tab content 8</p>
        </TabsItem>
      </Tabs>

      <Title level={TitleLevels.THREE}>Tabs inverted</Title>

      <Section backgroundColor={TrilogyColor.MAIN}>
        <Tabs>
          <TabsItem iconName={IconName.BELL} inverted groupName="group-three" id="tab-9" label="Tab 9" active>
            <p>Tab content 9</p>
          </TabsItem>
          <TabsItem iconName={IconName.BELL} inverted groupName="group-three" id="tab-10" label="Tab 10">
            <p>Tab content 10</p>
          </TabsItem>
          <TabsItem iconName={IconName.BELL} inverted groupName="group-three" id="tab-11" label="Tab 11">
            <p>Tab content 11</p>
          </TabsItem>
          <TabsItem iconName={IconName.BELL} inverted groupName="group-three" id="tab-12" label="Tab 12">
            <p>Tab content 12</p>
          </TabsItem>
        </Tabs>
      </Section>

      <Title level={TitleLevels.THREE}>Tabs with node children</Title>

      <Tabs>
        <TabsItem groupName="group-four" id="tab-13" label="Tab 13" active iconName={IconName.BELL}>
          <Box>
            <BoxHeader>Box active</BoxHeader>
            <BoxContent>
              <Text>Box content</Text>
            </BoxContent>
          </Box>
        </TabsItem>
        <TabsItem groupName="group-four" id="tab-14" label="Tab 14" iconName={IconName.BELL}>
          <View>
            <Text>Button with text</Text>
            <Button variant="PRIMARY">Button</Button>
          </View>
        </TabsItem>
        <TabsItem groupName="group-four" id="tab-15" label="Tab 15" iconName={IconName.BELL}>
          <p>Tab content 3</p>
        </TabsItem>
        <TabsItem groupName="group-four" id="tab-16" label="Tab 16" iconName={IconName.BELL}>
          <p>Tab content 4</p>
        </TabsItem>
      </Tabs>
    </Section>
  );
};
