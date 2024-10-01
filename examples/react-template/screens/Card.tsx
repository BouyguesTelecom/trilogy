import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Box,
  BoxContent,
  BoxHeader,
  Button,
  ButtonVariant,
  Card,
  CardContent,
  CardImage,
  Divider,
  Section,
  Spacer,
  SpacerSize,
  Text,
  Title,
  TitleLevels,
} from "@trilogy-ds/react/components";
import * as React from "react";
import { CardMarkup } from "@trilogy-ds/react/components/card/CardProps";
import { TrilogyColor } from "@trilogy-ds/react/objects";
import { Columns, ColumnsItem } from "@trilogy-ds/react";

const Separator = () => {
  return (
    <>
      <Spacer size={10} />
      <Divider />
      <Spacer size={50} />
    </>
  );
};

export const CardScreen = (): JSX.Element => {
  const [skeleton, setSkeleton] = React.useState<boolean>(false);

  return (
    <Section>
      <Columns>
        <ColumnsItem>
          <Card inverted backgroundColor={TrilogyColor.SUCCESS}>
            <CardContent>
              <Title level={TitleLevels.ONE}>Title</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ligula ex, aliquam at neque eu, vulputate vera. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Sed ligula ex,
                aliquam at neque eu, vulputate vera.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu,
                vulputate vera.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate
                vera.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed ligula ex, aliquam at neque eu, vulputate vera.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Sed ligula ex,
                aliquam at neque eu, vulputate vera.
              </Text>
            </CardContent>
          </Card>
        </ColumnsItem>
        <ColumnsItem>
          <Card backgroundColor={TrilogyColor.SUCCESS_FADE}>
            <CardContent>
              <Title level={TitleLevels.ONE}>Title</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ligula ex, aliquam at neque eu, vulputate vera. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Sed ligula ex,
                aliquam at neque eu, vulputate vera.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu,
                vulputate vera.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate
                vera.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed ligula ex, aliquam at neque eu, vulputate vera.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Sed ligula ex,
                aliquam at neque eu, vulputate vera.
              </Text>
            </CardContent>
          </Card>
        </ColumnsItem>
      </Columns>
      <Title level={TitleLevels.TWO}>CardImage & markup </Title>
      <Spacer size={SpacerSize.MEDIUM} />
      <Card active backgroundColor={TrilogyColor.BACKGROUND}>
        <CardImage src="https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg" />
        <CardContent>
          <Title overline>Desktop Card Vertical Markup A</Title>
          <Title level={TitleLevels.ONE}>Card Title</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula
            ex, aliquam at neque eu, vulputate vera.
          </Text>
          <Button
            variant={ButtonVariant.PRIMARY}
            onClick={() => setSkeleton(skeleton)}
          >
            Skeleton toogle click
          </Button>
        </CardContent>
      </Card>

      <Title level={TitleLevels.TWO}>CardImage & markup </Title>
      <Spacer size={SpacerSize.MEDIUM} />
      <Card markup={CardMarkup.A} backgroundColor={TrilogyColor.BACKGROUND}>
        <CardImage src="https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg" />
        <CardContent>
          <Title overline>Desktop Card Vertical Markup A</Title>
          <Title level={TitleLevels.ONE}>Card Title</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula
            ex, aliquam at neque eu, vulputate vera.
          </Text>
          <Button
            variant={ButtonVariant.PRIMARY}
            onClick={() => setSkeleton(skeleton)}
          >
            Skeleton toogle click
          </Button>
        </CardContent>
      </Card>

      <Title level={TitleLevels.TWO}>Reversed </Title>
      <Spacer size={SpacerSize.MEDIUM} />
      <Card reversed>
        <CardImage src="https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg" />
        <CardContent>
          <Title overline>Desktop Card Vertical Reversed</Title>
          <Title level={TitleLevels.ONE}>Card Title</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula
            ex, aliquam at neque eu, vulputate vera.
          </Text>
          <Button
            variant={ButtonVariant.PRIMARY}
            onClick={() =>
              window.open(
                "https://fr.wikipedia.org/wiki/Shiba_(chien)",
                "_blank"
              )
            }
          >
            Enabled
          </Button>
        </CardContent>
      </Card>

      <Title level={TitleLevels.TWO}>Flat </Title>
      <Spacer size={SpacerSize.MEDIUM} />
      <Card flat>
        <CardImage src="https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg" />
        <CardContent>
          <Title level={TitleLevels.ONE}>Card flat</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula
            ex, aliquam at neque eu, vulputate vera.
          </Text>
          <Button
            variant={ButtonVariant.PRIMARY}
            onClick={() =>
              window.open(
                "https://fr.wikipedia.org/wiki/Shiba_(chien)",
                "_blank"
              )
            }
          >
            Enabled
          </Button>
        </CardContent>
      </Card>

      <Title level={TitleLevels.TWO}>Horizontal </Title>
      <Spacer size={SpacerSize.MEDIUM} />
      <Spacer size={SpacerSize.MEDIUM} />
      <Card horizontal>
        <CardImage
          size={"3"}
          src="https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg"
        />
        <CardContent backgroundColor={TrilogyColor.BACKGROUND}>
          <Title overline>Desktop Card Horizontal</Title>
          <Title level={TitleLevels.ONE}>Card Title</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula
            ex, aliquam at neque eu, vulputate vera.
          </Text>
          <Button
            variant={ButtonVariant.PRIMARY}
            onClick={() =>
              window.open(
                "https://fr.wikipedia.org/wiki/Shiba_(chien)",
                "_blank"
              )
            }
          >
            Enabled
          </Button>
        </CardContent>
      </Card>

      <Title level={TitleLevels.TWO}>Floating (inside component)</Title>
      <Spacer size={SpacerSize.MEDIUM} />
      <Box>
        <BoxHeader>Floating (inside component)</BoxHeader>
        <BoxContent>
          <Accordion className="is-marginless">
            <AccordionItem active>
              <AccordionHeader>
                <Text level={"ONE"}>Card floating (inside component)</Text>
              </AccordionHeader>
              <AccordionBody>
                <Card floating>
                  <CardImage src="https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg" />
                  <CardContent>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed ligula ex, aliquam at neque eu, vulputate vera.
                    </Text>
                    <Button
                      variant={ButtonVariant.PRIMARY}
                      onClick={() =>
                        window.open(
                          "https://fr.wikipedia.org/wiki/Shiba_(chien)",
                          "_blank"
                        )
                      }
                    >
                      Enabled
                    </Button>
                  </CardContent>
                </Card>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </BoxContent>
      </Box>

      <Columns>
        <ColumnsItem>
          <Card flat fullheight>
            <CardContent>
              <Title level={TitleLevels.ONE}>Card with fullheight props</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ligula ex, aliquam at neque eu, vulputate vera.
              </Text>
            </CardContent>
          </Card>
        </ColumnsItem>
        <ColumnsItem>
          <Card inverted backgroundColor={TrilogyColor.SUCCESS}>
            <CardContent>
              <Title level={TitleLevels.ONE}>Title</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ligula ex, aliquam at neque eu, vulputate vera. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Sed ligula ex,
                aliquam at neque eu, vulputate vera.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu,
                vulputate vera.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate
                vera.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed ligula ex, aliquam at neque eu, vulputate vera.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Sed ligula ex,
                aliquam at neque eu, vulputate vera.
              </Text>
            </CardContent>
          </Card>
        </ColumnsItem>
        <ColumnsItem>
          <Card backgroundColor={TrilogyColor.SUCCESS_FADE}>
            <CardContent>
              <Title level={TitleLevels.ONE}>Title</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ligula ex, aliquam at neque eu, vulputate vera. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Sed ligula ex,
                aliquam at neque eu, vulputate vera.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu,
                vulputate vera.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate
                vera.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed ligula ex, aliquam at neque eu, vulputate vera.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Sed ligula ex,
                aliquam at neque eu, vulputate vera.
              </Text>
            </CardContent>
          </Card>
        </ColumnsItem>
      </Columns>
    </Section>
  );
};
