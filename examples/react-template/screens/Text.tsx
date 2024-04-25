import * as React from "react";
import {
  Box,
  BoxContent,
  Button,
  ButtonList,
  ButtonVariant,
  Columns,
  ColumnsItem,
  Section,
  Text,
  TextLevels,
} from "@trilogy-ds/react/components";

export const TextScreen = (): JSX.Element => {
  return (
    <Section>
      <Text numberOfLines={3}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
        obcaecati quia voluptatum! Assumenda blanditiis dignissimos eligendi
        excepturi facere facilis, fuga incidunt necessitatibus non obcaecati
        praesentium quam quia soluta veniam vero. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Accusamus aliquam amet asperiores autem
        dicta esse et id, incidunt ipsa magni molestiae nesciunt non pariatur
        quasi, quia reiciendis repudiandae tempora voluptatibus.
      </Text>
      <Text level={TextLevels.ONE}>my super text 1</Text>
      <Text level={TextLevels.TWO}>my super text 2</Text>
      <Text level={TextLevels.THREE}>my super text 3</Text>
      <Text level={TextLevels.FOUR}>my super text 4</Text>
      <Text level={TextLevels.TWO}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at
        deleniti doloremque ea, earum explicabo illo inventore minima optio
        pariatur ratione similique suscipit vero. Accusamus dicta impedit
        laudantium neque nulla!
        <Text link onClick={(e) => console.log(e)}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          consectetur consequuntur dicta esse eum inventore, ipsum magnam minima
          modi nobis nulla placeat quas qui saepe voluptate voluptates
          voluptatibus. Doloribus, unde?
        </Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa,
        dignissimos distinctio, eum in ipsum magni nihil officia pariatur
        perferendis, recusandae rem reprehenderit. Aliquid eius expedita quasi
        quia reiciendis, sint.
      </Text>
      <Columns>
        <ColumnsItem centered>
          <Text>Mon texte</Text>
          <ButtonList>
            <Button variant={ButtonVariant.PRIMARY}>Centered button</Button>
          </ButtonList>
          <Box>
            <BoxContent>
              <Text>Centered box</Text>
            </BoxContent>
          </Box>
        </ColumnsItem>
      </Columns>
    </Section>
  );
};
