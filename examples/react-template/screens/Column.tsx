import * as React from "react";
import {
  Button,
  ButtonVariant,
  Card,
  CardContent,
  CardImage,
  Columns,
  ColumnsItem,
  Divider,
  Section,
  Text,
  Title,
  TitleLevels,
  View,
} from "@trilogy-ds/react/components";

export const ColumnScreen = (): JSX.Element => {
  return (
    <>
      <Section>
        <Columns marginSize={3}>
          <ColumnsItem size={1}>
            <Text {...{ style: { borderWidth: 1, borderColor: "red" } }}>
              Column #1
            </Text>
          </ColumnsItem>
          <ColumnsItem size={4}>
            <View {...{ style: { borderWidth: 1, borderColor: "red" } }}>
              <Text>Column #2</Text>
            </View>
          </ColumnsItem>
          <ColumnsItem size={4}>
            <View {...{ style: { borderWidth: 1, borderColor: "red" } }}>
              <Text>Column #3</Text>
            </View>
          </ColumnsItem>
        </Columns>
        <Columns marginSize={3}>
          <ColumnsItem size={4}>
            <View {...{ style: { borderWidth: 1, borderColor: "red" } }}>
              <Text>Column #4</Text>
            </View>
          </ColumnsItem>
          <ColumnsItem size={4}>
            <View {...{ style: { borderWidth: 1, borderColor: "red" } }}>
              <Text>Column #5</Text>
            </View>
          </ColumnsItem>
          <ColumnsItem size={4}>
            <View {...{ style: { borderWidth: 1, borderColor: "red" } }}>
              <Text>Column #6</Text>
            </View>
          </ColumnsItem>
        </Columns>
        <Title level={TitleLevels.THREE}>Column responsive</Title>
        <Divider />
        <Columns mobile>
          <ColumnsItem desktopSize={2} tabletSize={2} mobileSize={6}>
            <View {...{ style: { borderWidth: 1, borderColor: "red" } }}>
              <Text>Column #1</Text>
            </View>
          </ColumnsItem>
          <ColumnsItem desktopSize={10} tabletSize={10} mobileSize={6}>
            <View {...{ style: { borderWidth: 1, borderColor: "red" } }}>
              <Text>Column #2</Text>
            </View>
          </ColumnsItem>
        </Columns>
      </Section>
      <Section>
        <Title level={TitleLevels.THREE}>Column Inlined</Title>
        <Divider />
        <Columns inlined marginSize={3}>
          <ColumnsItem desktopSize={3} mobileSize={12} tabletSize={6} size={12}>
            <Card>
              <CardImage src="https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg" />
              <CardContent>
                <Title overline>Desktop Card Vertical</Title>
                <Title level={TitleLevels.ONE}>Card Title</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ligula ex, aliquam at neque eu, vulputate vera.
                </Text>
                <Button variant={ButtonVariant.PRIMARY}>Skeleton toggle</Button>
              </CardContent>
            </Card>
          </ColumnsItem>
          <ColumnsItem desktopSize={3} mobileSize={12} tabletSize={6} size={12}>
            <Card>
              <CardImage src="https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg" />
              <CardContent>
                <Title overline>Desktop Card Vertical</Title>
                <Title level={TitleLevels.ONE}>Card Title</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ligula ex, aliquam at neque eu, vulputate vera.
                </Text>
                <Button variant={ButtonVariant.PRIMARY}>Skeleton toggle</Button>
              </CardContent>
            </Card>
          </ColumnsItem>
          <ColumnsItem desktopSize={3} mobileSize={12} tabletSize={6} size={12}>
            <Card>
              <CardImage src="https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg" />
              <CardContent>
                <Title overline>Desktop Card Vertical</Title>
                <Title level={TitleLevels.ONE}>Card Title</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ligula ex, aliquam at neque eu, vulputate vera.
                </Text>
                <Button variant={ButtonVariant.PRIMARY}>Skeleton toggle</Button>
              </CardContent>
            </Card>
          </ColumnsItem>
          <ColumnsItem desktopSize={3} mobileSize={12} tabletSize={6} size={12}>
            <Card>
              <CardImage src="https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg" />
              <CardContent>
                <Title overline>Desktop Card Vertical</Title>
                <Title level={TitleLevels.ONE}>Card Title</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ligula ex, aliquam at neque eu, vulputate vera.
                </Text>
                <Button variant={ButtonVariant.PRIMARY}>Skeleton toggle</Button>
              </CardContent>
            </Card>
          </ColumnsItem>
          <ColumnsItem desktopSize={3} mobileSize={12} tabletSize={6} size={12}>
            <Card>
              <CardImage src="https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg" />
              <CardContent>
                <Title overline>Desktop Card Vertical</Title>
                <Title level={TitleLevels.ONE}>Card Title</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ligula ex, aliquam at neque eu, vulputate vera.
                </Text>
                <Button variant={ButtonVariant.PRIMARY}>Skeleton toggle</Button>
              </CardContent>
            </Card>
          </ColumnsItem>
          <ColumnsItem desktopSize={3} mobileSize={12} tabletSize={6} size={12}>
            <Card>
              <CardImage src="https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg" />
              <CardContent>
                <Title overline>Desktop Card Vertical</Title>
                <Title level={TitleLevels.ONE}>Card Title</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ligula ex, aliquam at neque eu, vulputate vera.
                </Text>
                <Button variant={ButtonVariant.PRIMARY}>Skeleton toggle</Button>
              </CardContent>
            </Card>
          </ColumnsItem>
          <ColumnsItem desktopSize={3} mobileSize={12} tabletSize={6} size={12}>
            <Card>
              <CardImage src="https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg" />
              <CardContent>
                <Title overline>Desktop Card Vertical</Title>
                <Title level={TitleLevels.ONE}>Card Title</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ligula ex, aliquam at neque eu, vulputate vera.
                </Text>
                <Button variant={ButtonVariant.PRIMARY}>Skeleton toggle</Button>
              </CardContent>
            </Card>
          </ColumnsItem>
        </Columns>
      </Section>
    </>
  );
};
