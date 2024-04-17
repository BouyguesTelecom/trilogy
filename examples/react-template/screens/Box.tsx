import * as React from "react";
import {
  AutoLayout,
  Box,
  BoxContent,
  BoxFooter,
  BoxHeader,
  BoxMarkup,
  Divider,
  Link,
  Section,
  Text,
} from "@trilogy-ds/react/components";
import {
  TrilogyColor,
  TypographyAlign,
  TypographyColor,
} from "@trilogy-ds/react/objects";
import { Columns, ColumnsItem, Title, TitleLevels } from "@trilogy-ds/react";

export const BoxScreen = (): JSX.Element => {
  return (
    <Section>
      <AutoLayout>
        <Columns multiline>
          <ColumnsItem size={10}>
            <Box active>
              <BoxHeader>Box active</BoxHeader>
              <BoxContent>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  maximus tellus sed erat maximus porta. Etiam non ex in dolor
                  faucibus tempor. Sed ullamcorper, ligula sit amet dictum
                  posuere, urna tortor vulputate justo, ut luctus justo eros sed
                  erat. Fusce finibus dolor ex. Duis vel velit in lectus
                  placerat aliquam nec at elit. Aenean metus neque, accumsan id
                  ipsum sodales, fermentum lacinia eros. Ut gravida aliquet
                  magna, id efficitur magna ultrices a. In quis bibendum tortor.
                  Nam quam lacus, suscipit a vehicula ac, vehicula eget risus.
                </Text>
              </BoxContent>
            </Box>
          </ColumnsItem>
          <ColumnsItem size={10}>
            <Box>
              <BoxHeader>Box with Header and Content</BoxHeader>
              <BoxContent>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  maximus tellus sed erat maximus porta. Etiam non ex in dolor
                  faucibus tempor. Sed ullamcorper, ligula sit amet dictum
                  posuere, urna tortor vulputate justo, ut luctus justo eros sed
                  erat. Fusce finibus dolor ex. Duis vel velit in lectus
                  placerat aliquam nec at elit. Aenean metus neque, accumsan id
                  ipsum sodales, fermentum lacinia eros. Ut gravida aliquet
                  magna, id efficitur magna ultrices a. In quis bibendum tortor.
                  Nam quam lacus, suscipit a vehicula ac, vehicula eget risus.
                </Text>
              </BoxContent>
            </Box>
          </ColumnsItem>
          <ColumnsItem size={10}>
            <Box>
              <BoxContent>
                <Title level={TitleLevels.FOUR}>Simple box</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  maximus tellus sed erat maximus porta. Etiam non ex in dolor
                  faucibus tempor. Sed ullamcorper, ligula sit amet dictum
                  posuere, urna tortor vulputate justo, ut luctus justo eros sed
                  erat. Fusce finibus dolor ex. Duis vel velit in lectus
                  placerat aliquam nec at elit. Aenean metus neque, accumsan id
                  ipsum sodales, fermentum lacinia eros. Ut gravida aliquet
                  magna, id efficitur magna ultrices a. In quis bibendum tortor.
                  Nam quam lacus, suscipit a vehicula ac, vehicula eget risus.
                </Text>
              </BoxContent>
            </Box>
          </ColumnsItem>
          <ColumnsItem size={10}>
            <Box flat>
              <BoxContent>
                <Title level={TitleLevels.FOUR}>Flat box</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  maximus tellus sed erat maximus porta. Etiam non ex in dolor
                  faucibus tempor. Sed ullamcorper, ligula sit amet dictum
                  posuere, urna tortor vulputate justo, ut luctus justo eros sed
                  erat. Fusce finibus dolor ex. Duis vel velit in lectus
                  placerat aliquam nec at elit. Aenean metus neque, accumsan id
                  ipsum sodales, fermentum lacinia eros. Ut gravida aliquet
                  magna, id efficitur magna ultrices a. In quis bibendum tortor.
                  Nam quam lacus, suscipit a vehicula ac, vehicula eget risus.
                </Text>
              </BoxContent>
            </Box>
          </ColumnsItem>
        </Columns>
        <Divider />
        <Columns>
          <ColumnsItem size={10}>
            <Box leftBorder={TrilogyColor.ERROR}>
              <BoxContent>
                <Title level={TitleLevels.FOUR}>Highlited box</Title>
                <Text>
                  Eget tincidunt tincidunt id massa sollicitudin. Egestas felis
                  dolor neque nunc. Eget suscipit enim velit ultricies justo
                  ultrices sed leo cras.
                </Text>
              </BoxContent>
            </Box>
          </ColumnsItem>
          <ColumnsItem size={10}>
            <Box leftBorder={TrilogyColor.WARNING}>
              <BoxContent>
                <Title level={TitleLevels.FOUR}>Highlited box</Title>
                <Text>
                  Eget tincidunt tincidunt id massa sollicitudin. Egestas felis
                  dolor neque nunc. Eget suscipit enim velit ultricies justo
                  ultrices sed leo cras.
                </Text>
              </BoxContent>
            </Box>
          </ColumnsItem>
        </Columns>
        <Divider />
        <Box>
          <BoxHeader variant={TrilogyColor.MAIN}>Box is-unboxed</BoxHeader>
          <BoxContent>
            <Text>
              Eget tincidunt tincidunt id massa sollicitudin. Egestas felis
              dolor neque nunc. Eget suscipit enim velit ultricies justo
              ultrices sed leo cras.
            </Text>
            <Divider unboxed />
            <Text>
              Eget tincidunt tincidunt id massa sollicitudin. Egestas felis
              dolor neque nunc. Eget suscipit enim velit ultricies justo
              ultrices sed leo cras.
            </Text>
          </BoxContent>
        </Box>
        <Divider />
        <Columns>
          <ColumnsItem size={10}>
            <Box>
              <BoxHeader variant={TrilogyColor.ACCENT}>
                Box with Header , Content and Footer
              </BoxHeader>
              <BoxContent>
                <Text>
                  Eget tincidunt tincidunt id massa sollicitudin. Egestas felis
                  dolor neque nunc. Eget suscipit enim velit ultricies justo
                  ultrices sed leo cras.
                </Text>
              </BoxContent>
              <BoxFooter>
                <Link>Link here</Link>
              </BoxFooter>
            </Box>
          </ColumnsItem>
          <ColumnsItem size={10}>
            <Box>
              <BoxContent>
                <Title level={TitleLevels.FOUR}>Simple Box with footer</Title>
                <Text>
                  Eget tincidunt tincidunt id massa sollicitudin. Egestas felis
                  dolor neque nunc. Eget suscipit enim velit ultricies justo
                  ultrices sed leo cras.
                </Text>
              </BoxContent>
              <BoxFooter>
                <Link>Link here</Link>
              </BoxFooter>
            </Box>
          </ColumnsItem>
        </Columns>
        <Divider />
        <Columns>
          <ColumnsItem size={10}>
            <Box markup={BoxMarkup.A}>
              <BoxContent>
                <Title
                  level={TitleLevels.THREE}
                  typo={[TypographyAlign.TEXT_CENTERED]}
                >
                  Clickable box
                </Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  maximus tellus sed erat maximus porta. Etiam non ex in dolor
                  faucibus tempor. Sed ullamcorper, ligula sit amet dictum
                  posuere, urna tortor vulputate justo, ut luctus justo eros sed
                  erat.
                </Text>
              </BoxContent>
            </Box>
          </ColumnsItem>
          <ColumnsItem size={10}>
            <Box backgroundSrc={"https://picsum.photos/id/1/1500/600"}>
              <Title
                level={TitleLevels.THREE}
                typo={[
                  TypographyAlign.TEXT_CENTERED,
                  TypographyColor.TEXT_WHITE,
                ]}
              >
                Box with background image
              </Title>
              <Text typo={[TypographyColor.TEXT_WHITE]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                pharetra venenatis neque, ac fringilla mauris fermentum vel.
                Maecenas viverra, erat id condimentum ultricies, enim enim
                lacinia sem, sed blandit nisi metus suscipit elit. Phasellus
                magna risus, mattis sed consectetur at, rhoncus vitae quam.
                Vivamus varius nisl a nibh finibus, non laoreet eros ornare.
                Phasellus dignissim ullamcorper tortor ut iaculis. Fusce
                tincidunt finibus fermentum. Praesent pulvinar sapien a turpis
                faucibus, et semper quam scelerisque. Morbi interdum nec ipsum
                eu facilisis.
              </Text>
            </Box>
          </ColumnsItem>
        </Columns>
      </AutoLayout>
    </Section>
  );
};
