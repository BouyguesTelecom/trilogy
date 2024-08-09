import * as React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Divider,
  Section,
  Spacer,
  Text,
  Title,
  TitleLevels,
} from "@trilogy-ds/react/components";
import {TypographyBold} from "@trilogy-ds/react/objects";

export const AccordionScreen = (): JSX.Element => {
  return (
    <Section>
      <Title level={TitleLevels.TWO}>Base</Title>
      <Spacer size={10} />
      <Accordion>
        <AccordionItem id="ONE" active={true}>
          <AccordionHeader>
            <Text >Hello World 1</Text>
          </AccordionHeader>
          <AccordionBody dataId="totooooo-test-id" testId="totooooo">
            <Text>Lorem ipsum dolor sit amet lorem</Text>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem active={true} id="TWO">
          <AccordionHeader>
            <Text>Hello World 2</Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>Lorem ipsum dolor sit amet</Text>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem id="THREE">
          <AccordionHeader>
            <Text>Hello World 2</Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>Collpased by default</Text>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem disabled id="FOUR">
          <AccordionHeader>
            <Text>Hello World 3</Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>Lorem ipsum dolor sit amet</Text>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
      <Divider />
    </Section>
  );
};
