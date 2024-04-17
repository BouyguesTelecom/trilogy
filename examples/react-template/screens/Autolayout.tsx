import * as React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Alert,
  AutoComplete,
  Box,
  BoxContent,
  BoxHeader,
  Button,
  IconName,
  Text,
  TextLevels,
  Title,
  TitleLevels,
  AutoLayout,
} from "@trilogy-ds/react/components";
import { AlertState, TrilogyColor } from "@trilogy-ds/react";

export const AutolayoutScreen = (): JSX.Element => {
  return (
    <AutoLayout>
      <Title level={TitleLevels.TWO}>Elements : </Title>
      <Box background={"GREY_LIGHT"}>
        <BoxHeader variant={TrilogyColor.PRIMARY}>
          <Text>Simple</Text>
        </BoxHeader>
        <BoxContent background={"GREY_LIGHT"}>
          <Box>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              maximus tellus sed erat maximus porta. Etiam non ex in dolor
              faucibus tempor. Sed ullamcorper, ligula sit amet dictum posuere,
              urna tortor vulputate justo, ut luctus justo eros sed erat. Fusce
              finibus dolor ex. Duis vel velit in lectus placerat aliquam nec at
              elit. Aenean metus neque, accumsan id ipsum sodales, fermentum
              lacinia eros. Ut gravida aliquet magna, id efficitur magna
              ultrices a. In quis bibendum tortor. Nam quam lacus, suscipit a
              vehicula ac, vehicula eget risus.
            </Text>
          </Box>
        </BoxContent>
      </Box>
      <Box background={"GREY_LIGHT"}>
        <BoxHeader variant={TrilogyColor.PRIMARY}>
          <Text>Simple</Text>
        </BoxHeader>
        <BoxContent background={"GREY_LIGHT"}>
          <Box>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              maximus tellus sed erat maximus porta. Etiam non ex in dolor
              faucibus tempor. Sed ullamcorper, ligula sit amet dictum posuere,
              urna tortor vulputate justo, ut luctus justo eros sed erat. Fusce
              finibus dolor ex. Duis vel velit in lectus placerat aliquam nec at
              elit. Aenean metus neque, accumsan id ipsum sodales, fermentum
              lacinia eros. Ut gravida aliquet magna, id efficitur magna
              ultrices a. In quis bibendum tortor. Nam quam lacus, suscipit a
              vehicula ac, vehicula eget risus.
            </Text>
          </Box>
        </BoxContent>
      </Box>
      <Title level={TitleLevels.ONE}>Im a Title</Title>
      <Text level={TextLevels.ONE}>Lorem ipsum dolor sit amet</Text>
      <Button variant={"PRIMARY"}>Click</Button>
      <Accordion>
        <AccordionItem id="UN" active={true}>
          <AccordionHeader>
            <Text>Hello World 1</Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>Lorem ipsum dolor sit amet</Text>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem active={true} id="DEUX">
          <AccordionHeader>
            <Text>Hello World 2</Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>Lorem ipsum dolor sit amet</Text>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem disabled id="TROIS">
          <AccordionHeader>
            <Text>Hello World 3</Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>Lorem ipsum dolor sit amet</Text>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
      <Alert
        display
        alert={AlertState.SUCCESS}
        title={"Test alert"}
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <AutoComplete
        customIcon={IconName.ALERT}
        displayMenu={true}
        data={["1", "2"]}
      />
    </AutoLayout>
  );
};
