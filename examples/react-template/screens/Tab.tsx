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

<div className="tabs">
  <input type="radio" name="tabs-group1" id="tab1" defaultChecked={true} />
  <label htmlFor="tab1">Tab 1</label>
  <div className="tab-panels">
    <h2>Tab 1 Content</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
  </div>

  <input type="radio" name="tabs-group1" id="tab2" />
  <label htmlFor="tab2">Tab 2</label>
  <div className="tab-panels">
    <h2>Tab 2 Content</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
  </div>

  <input type="radio" name="tabs-group1" id="tab3" />
  <label htmlFor="tab3">Tab 3</label>
  <div className="tab-panels">
    <h2>Tab 3 Content</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </div>
</div>

<div className="tabs">
  <input type="radio" name="tabs-group2" id="tab4" defaultChecked={true} />
  <label htmlFor="tab4">Tab 4</label>
  <div className="tab-panels">
    <h2>Tab 4 Content</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
  </div>

  <input type="radio" name="tabs-group2" id="tab5" />
  <label htmlFor="tab5">Tab 5</label>
  <div className="tab-panels">
    <h2>Tab 5 Content</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
  </div>

  <input type="radio" name="tabs-group2" id="tab6" />
  <label htmlFor="tab6">Tab 6</label>
  <div className="tab-panels">
    <h2>Tab 6 Content</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </div>
</div>




      {/* <Title level={TitleLevels.THREE}>Tabs with icons</Title>
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
      </Tabs> */}
      {/* <Title level={TitleLevels.THREE}>Event</Title>

      <Tabs activeIndex={activeIndexEventTab}>
        <TabsItem
          iconName={IconName.BELL}
          active={activeIndexEventTab === 0}
          onClick={() => setActivateIndexEventTab(0)}
        >
          One
        </TabsItem>
        <TabsItem
          iconName={IconName.BELL}
          active={activeIndexEventTab === 1}
          onClick={() => setActivateIndexEventTab(1)}
        >
          Two
        </TabsItem>
        <TabsItem
          iconName={IconName.BELL}
          active={activeIndexEventTab === 2}
          onClick={() => setActivateIndexEventTab(2)}
        >
          Three
        </TabsItem>
      </Tabs>

      <Tabs activeIndex={activeIndexEventTab} centered>
        <TabsItem
          iconName={IconName.BELL}
          active={activeIndexEventTab === 0}
          onClick={() => setActivateIndexEventTab(0)}
        >
          Centered
        </TabsItem>
        <TabsItem
          iconName={IconName.BELL}
          active={activeIndexEventTab === 1}
          onClick={() => setActivateIndexEventTab(1)}
        >
          Two
        </TabsItem>
        <TabsItem
          iconName={IconName.BELL}
          active={activeIndexEventTab === 2}
          onClick={() => setActivateIndexEventTab(2)}
        >
          Three
        </TabsItem>
      </Tabs>

      <Tabs activeIndex={activeIndexEventTab} inverted>
        <TabsItem
          iconName={IconName.BELL}
          active={activeIndexEventTab === 0}
          onClick={() => setActivateIndexEventTab(0)}
        >
          One
        </TabsItem>
        <TabsItem
          iconName={IconName.EYE_SLASH}
          active={activeIndexEventTab === 1}
          onClick={() => setActivateIndexEventTab(1)}
        >
          Two
        </TabsItem>
        <TabsItem
          iconName={IconName.BELL}
          active={activeIndexEventTab === 2}
          onClick={() => setActivateIndexEventTab(2)}
        >
          Three
        </TabsItem>
      </Tabs>

      <Tabs activeIndex={index}>
        <TabsItem
          iconName={IconName.BELL}
          active={index === 1}
          onClick={() => setIndex(1)}
        >
          Im the item 1
        </TabsItem>
        <TabsItem
          iconName={IconName.BELL}
          active={index === 2}
          onClick={() => setIndex(2)}
        >
          Im the item 2
        </TabsItem>
        <TabsItem
          iconName={IconName.BELL}
          active={index === 3}
          onClick={() => setIndex(3)}
        >
          Im the item 3
        </TabsItem>
        <TabsItem
          iconName={IconName.BELL}
          active={index === 4}
          onClick={() => setIndex(4)}
        >
          Im the item 4
        </TabsItem>
        <TabsItem
          iconName={IconName.BELL}
          active={index === 5}
          onClick={() => setIndex(5)}
        >
          Im the item 5
        </TabsItem>
        <TabsItem
          iconName={IconName.BELL}
          active={index === 5}
          onClick={() => setIndex(5)}
        >
          Im the item 5
        </TabsItem>
        <TabsItem
          iconName={IconName.BELL}
          active={index === 5}
          onClick={() => setIndex(5)}
        >
          Im the item 5
        </TabsItem>
        <TabsItem
          iconName={IconName.BELL}
          active={index === 5}
          onClick={() => setIndex(5)}
        >
          Im the item 5
        </TabsItem>
      </Tabs>

      <Tabs activeIndex={index} inverted>
        <TabsItem
          iconName={IconName.BELL}
          active={index === 1}
          onClick={() => setIndex(1)}
        >
          Im the item 1
        </TabsItem>
        <TabsItem
          iconName={IconName.BELL}
          active={index === 2}
          onClick={() => setIndex(2)}
        >
          Im the item 2
        </TabsItem>
        <TabsItem
          iconName={IconName.BELL}
          active={index === 3}
          onClick={() => setIndex(3)}
        >
          Im the item 3
        </TabsItem>
        <TabsItem
          iconName={IconName.BELL}
          active={index === 4}
          onClick={() => setIndex(4)}
        >
          Im the item 4
        </TabsItem>
        <TabsItem
          iconName={IconName.BELL}
          active={index === 5}
          onClick={() => setIndex(5)}
        >
          Im the item 5
        </TabsItem>
        <TabsItem
          iconName={IconName.BELL}
          active={index === 5}
          onClick={() => setIndex(5)}
        >
          Im the item 5
        </TabsItem>
        <TabsItem
          iconName={IconName.BELL}
          active={index === 5}
          onClick={() => setIndex(5)}
        >
          Im the item 5
        </TabsItem>
        <TabsItem
          iconName={IconName.BELL}
          active={index === 5}
          onClick={() => setIndex(5)}
        >
          Im the item 5
        </TabsItem>
      </Tabs>

      <Tabs activeIndex={index}>
        <TabsItem active={index === 1} onClick={() => setIndex(1)}>
          Im the item 1
        </TabsItem>
        <TabsItem active={index === 2} onClick={() => setIndex(2)}>
          Im the item 2
        </TabsItem>
        <TabsItem active={index === 3} onClick={() => setIndex(3)}>
          Im the item 3
        </TabsItem>
        <TabsItem active={index === 4} onClick={() => setIndex(4)}>
          Im the item 4
        </TabsItem>
        <TabsItem active={index === 5} onClick={() => setIndex(5)}>
          Im the item 5
        </TabsItem>
        <TabsItem active={index === 5} onClick={() => setIndex(5)}>
          Im the item 5
        </TabsItem>
      </Tabs>

      <Tabs activeIndex={index} inverted>
        <TabsItem active={index === 1} onClick={() => setIndex(1)}>
          Im the item 1
        </TabsItem>
        <TabsItem active={index === 2} onClick={() => setIndex(2)}>
          Im the item 2
        </TabsItem>
        <TabsItem active={index === 3} onClick={() => setIndex(3)}>
          Im the item 3
        </TabsItem>
        <TabsItem active={index === 4} onClick={() => setIndex(4)}>
          Im the item 4
        </TabsItem>
        <TabsItem active={index === 5} onClick={() => setIndex(5)}>
          Im the item 5
        </TabsItem>
        <TabsItem active={index === 5} onClick={() => setIndex(5)}>
          Im the item 5
        </TabsItem>
      </Tabs> */}
    </Section>
  );
};
