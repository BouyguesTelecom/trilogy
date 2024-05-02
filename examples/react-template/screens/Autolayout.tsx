import * as React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Alert,
  AutoComplete,
  AutoLayout,
  Box,
  BoxContent,
  BoxHeader,
  Button,
  IconName,
  Text,
  TextLevels,
  Title,
  TitleLevels,
} from "@trilogy-ds/react/components";
import { AlertState, TrilogyColor } from "@trilogy-ds/react";

export const AutolayoutScreen = (): JSX.Element => {
  return (
    <AutoLayout>
      <Title level={TitleLevels.TWO}>Elements : </Title>
      <Box>
        <BoxHeader>Simple</BoxHeader>
        <BoxContent>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            maximus tellus sed erat maximus porta. Etiam non ex in dolor
            faucibus tempor. Sed ullamcorper, ligula sit amet dictum posuere,
            urna tortor vulputate justo, ut luctus justo eros sed erat. Fusce
            finibus dolor ex.
          </Text>
        </BoxContent>
      </Box>
      <Box background={TrilogyColor.MAIN} inverted>
        <BoxContent>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            maximus tellus sed erat maximus porta. Etiam non ex in dolor
            faucibus tempor. Sed ullamcorper, ligula sit amet dictum posuere,
            urna tortor vulputate justo, ut luctus justo eros sed erat. Fusce
            finibus dolor ex.
          </Text>
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
