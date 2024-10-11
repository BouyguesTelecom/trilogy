import * as React from "react";
import {
  IconName,
  Section,
  Tabs,
  TabsItem,
  Title,
  TitleLevels,
} from "@trilogy-ds/react/components";

export const TabScreen = (): JSX.Element => {
  // const [activeIndexEventTab, setActivateIndexEventTab] =
  //   React.useState<number>(1);
  // const [index, setIndex] = React.useState<number>(2);

  return (
    <Section>
      <Tabs>
        <TabsItem id="tab-1" label="Onglet 1" defaultChecked>
          <p>Tab content 1</p>
        </TabsItem>
        <TabsItem id="tab-2" label="Onglet 2">
          <p>Tab content 2</p>
        </TabsItem>
        <TabsItem id="tab-3" label="Onglet 3">
          <p>Tab content 3</p>
        </TabsItem>
        <TabsItem id="tab-4" label="Onglet 4">
          <p>Tab content 4</p>
        </TabsItem>
      </Tabs>
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
