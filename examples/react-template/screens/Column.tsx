import * as React from 'react'
import {
  Box,
  BoxContent,
  Button,
  ButtonList,
  ButtonVariant,
  Card,
  CardContent,
  CardImage,
  Column,
  Columns,
  Divider,
  Price,
  Section,
  Text,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'
import { Alignable, GapSize } from '@trilogy-ds/react'

export const ColumnScreen = (): JSX.Element => {
  return (
    <Section>
      <Box>
        <Columns scrollable fullBleed gap={GapSize.FIVE}>
          <Column verticalAlign={Alignable.ALIGNED_CENTER}>
            <Text>Test hello</Text>
          </Column>
          <Column>
            <Text>Test</Text>
          </Column>
          <Column>
            <Text>Test</Text>
          </Column>
        </Columns>
      </Box>

      <Box>
        <Columns fullBleed>
          <Column size={4}>
            <Text>Test</Text>
          </Column>
          <Column size={4}>
            <Text>Test</Text>
          </Column>
          <Column size={4}>
            <Text>Test</Text>
          </Column>
        </Columns>
      </Box>

      <Box>
        <Columns>
          <Column>
            <Text>Test</Text>
          </Column>
          <Column>
            <Text>Test</Text>
          </Column>
          <Column>
            <Text>Test</Text>
          </Column>
        </Columns>
      </Box>

      <Box>
        <Columns multiline>
          <Column>
            <Text>Test</Text>
          </Column>
          <Column>
            <Text>Test</Text>
          </Column>
          <Column>
            <Text>Test</Text>
          </Column>
          <Column>
            <Text>Test</Text>
          </Column>
          <Column>
            <Text>Test</Text>
          </Column>
          <Column>
            <Text>Test</Text>
          </Column>
        </Columns>
      </Box>

      <Box>
        <Columns gap={0}>
          <Column>
            <Text>Test</Text>
          </Column>
          <Column>
            <Text>Test</Text>
          </Column>
          <Column>
            <Text>Test</Text>
          </Column>
        </Columns>
      </Box>

      <Divider />

      <Title level={TitleLevels.THREE}>Multiline</Title>

      <Columns multiline verticalAlign={Alignable.ALIGNED_END} align={Alignable.ALIGNED_CENTER}>
        <Column narrow>
          <Box>
            <BoxContent>
              <Text level={2} className="has-text-weight-bold">
                Overline
              </Text>
              <Title level={TitleLevels.ONE}>Card Title</Title>
              <Text>Lorem ipsum dolor sit amet</Text>
              <Price amount={22.99}></Price>
              <ButtonList>
                <Button variant={ButtonVariant.CONVERSION}>Skeleton toggle</Button>
              </ButtonList>
            </BoxContent>
          </Box>
        </Column>
        <Column size={6}>
          <Box>
            <BoxContent>
              <Text level={2} className="has-text-weight-bold">
                Overline
              </Text>
              <Title level={TitleLevels.ONE}>Card Title</Title>
              <Text>Lorem ipsum dolor sit amet.</Text>
              <Price amount={22.99}></Price>
              <ButtonList>
                <Button variant={ButtonVariant.CONVERSION}>Skeleton toggle</Button>
              </ButtonList>
            </BoxContent>
          </Box>
        </Column>
        <Column mobileSize={6} tabletSize={5} desktopSize={4} widescreenSize={3} fullhdSize={2}>
          <Box>
            <BoxContent>
              <Text level={2} className="has-text-weight-bold">
                Overline
              </Text>
              <Title level={TitleLevels.ONE}>Card Title</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate
                vera.
              </Text>
              <Price amount={22.99}></Price>
              <ButtonList>
                <Button variant={ButtonVariant.CONVERSION}>Skeleton toggle</Button>
              </ButtonList>
            </BoxContent>
          </Box>
        </Column>
        <Column mobileSize={6} tabletSize={5} desktopSize={4} widescreenSize={3} fullhdSize={2}>
          <Box>
            <BoxContent>
              <Text level={2} className="has-text-weight-bold">
                Overline
              </Text>
              <Title level={TitleLevels.ONE}>Card Title</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate
                vera.
              </Text>
              <Price amount={22.99}></Price>
              <ButtonList>
                <Button variant={ButtonVariant.CONVERSION}>Skeleton toggle</Button>
              </ButtonList>
            </BoxContent>
          </Box>
        </Column>
        <Column>
          <Box>
            <BoxContent>
              <Text level={2} className="has-text-weight-bold">
                Overline
              </Text>
              <Title level={TitleLevels.ONE}>Card Title</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate
                vera.
              </Text>
              <Price amount={22.99}></Price>
              <ButtonList>
                <Button variant={ButtonVariant.CONVERSION}>Skeleton toggle</Button>
              </ButtonList>
            </BoxContent>
          </Box>
        </Column>
      </Columns>
      <Title level={TitleLevels.THREE}>Columns : full-bleed</Title>
      <Columns scrollable mobile fullBleed>
        <Column size={9}>
          <Box>
            <BoxContent>
              <Text level={2} className="has-text-weight-bold">
                Overline
              </Text>
              <Title level={TitleLevels.ONE}>Card Title</Title>
              <Text>Lorem ipsum dolor sit amet.</Text>
              <Price amount={22.99}></Price>
              <ButtonList>
                <Button variant={ButtonVariant.CONVERSION}>Skeleton toggle</Button>
              </ButtonList>
            </BoxContent>
          </Box>
        </Column>
        <Column size={5}>
          <Box>
            <BoxContent>
              <Title level={TitleLevels.THREE}>size : 4</Title>
              <Price amount={22.99}></Price>
            </BoxContent>
          </Box>
        </Column>
        <Column size={8}>
          <Box>
            <BoxContent>
              <Text level={2} className="has-text-weight-bold">
                Overline
              </Text>
              <Title level={TitleLevels.ONE}>size=8</Title>
              <Text>4 + 8 = 12</Text>
              <Price amount={22.99}></Price>
              <ButtonList>
                <Button variant={ButtonVariant.CONVERSION}>Skeleton toggle</Button>
              </ButtonList>
            </BoxContent>
          </Box>
        </Column>
        <Column>
          <Box>
            <BoxContent>
              <Text level={2} className="has-text-weight-bold">
                Overline
              </Text>
              <Title level={TitleLevels.ONE}>Card Title</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate
                vera.
              </Text>
              <Price amount={22.99}></Price>
              <ButtonList>
                <Button variant={ButtonVariant.CONVERSION}>Skeleton toggle</Button>
              </ButtonList>
            </BoxContent>
          </Box>
        </Column>
        <Column>
          <Box shadowless>
            <BoxContent>
              <Text level={2} className="has-text-weight-bold">
                Overline
              </Text>
              <Title level={TitleLevels.ONE}>Card Title</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate
                vera.
              </Text>
              <Price amount={22.99}></Price>
              <ButtonList>
                <Button variant={ButtonVariant.CONVERSION}>Skeleton toggle</Button>
              </ButtonList>
            </BoxContent>
          </Box>
        </Column>
        <Column>
          <Box shadowless>
            <BoxContent>
              <Text level={2} className="has-text-weight-bold">
                Overline
              </Text>
              <Title level={TitleLevels.ONE}>Card Title</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate
                vera.
              </Text>
              <Price amount={22.99}></Price>
              <ButtonList>
                <Button variant={ButtonVariant.CONVERSION}>Skeleton toggle</Button>
              </ButtonList>
            </BoxContent>
          </Box>
        </Column>
        <Column>
          <Box shadowless>
            <BoxContent>
              <Text level={2} className="has-text-weight-bold">
                Overline
              </Text>
              <Title level={TitleLevels.ONE}>Card Title</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate
                vera.
              </Text>
              <Price amount={22.99}></Price>
              <ButtonList>
                <Button variant={ButtonVariant.CONVERSION}>Skeleton toggle</Button>
              </ButtonList>
            </BoxContent>
          </Box>
        </Column>
        <Column>
          <Box shadowless>
            <BoxContent>
              <Text level={2} className="has-text-weight-bold">
                Overline
              </Text>
              <Title level={TitleLevels.ONE}>Card Title</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate
                vera.
              </Text>
              <Price amount={22.99}></Price>
              <ButtonList>
                <Button variant={ButtonVariant.CONVERSION}>Skeleton toggle</Button>
              </ButtonList>
            </BoxContent>
          </Box>
        </Column>
      </Columns>
      <Columns mobile multiline>
        <Column>
          <Text level={1} className="has-background-warning">
            Column 1
          </Text>
        </Column>
        <Column>
          <Text level={1} className="has-background-warning">
            Column 2
          </Text>
        </Column>
        <Column>
          <Text level={1} className="has-background-warning">
            Column 3
          </Text>
        </Column>
        <Column>
          <Text level={1} className="has-background-warning">
            Column 4
          </Text>
        </Column>
        <Column>
          <Text level={1} className="has-background-warning">
            Column 5
          </Text>
        </Column>
      </Columns>

      <Divider />

      <Columns align={Alignable.ALIGNED_CENTER} mobile>
        <Column size={3}>
          <Box>
            <Title level={1}>Test</Title>
            <Text level={1}>Column size 3</Text>
          </Box>
        </Column>
        <Column size={5}>
          <Box>
            <Title level={1}>Test</Title>
            <Text level={1}>Column size 5</Text>
          </Box>
        </Column>
        <Column narrow>
          <Box>
            <Title level={1}>Test</Title>
            <Text level={1}>Column narrow</Text>
          </Box>
        </Column>
      </Columns>

      <Divider />

      <Columns mobile>
        <Column size={8}>
          <Box>
            <Title level={1}>Test</Title>
            <Text level={1}>Column size 8</Text>
          </Box>
        </Column>
        <Column narrow>
          <Box>
            <Title level={1}>Test</Title>
            <Text level={1}>Column narrow</Text>
          </Box>
        </Column>
      </Columns>

      <Columns>
        <Column size={3}>
          <Box>
            <Title level={1}>Test</Title>
            <Text level={1}>Colmumns size 3</Text>
          </Box>
        </Column>
      </Columns>
      <Divider />
      <Title level={TitleLevels.THREE}>Scrollable</Title>
      <Columns scrollable marginSize={3}>
        <Column desktopSize={3} tabletSize={6} size={12}>
          <Card>
            <CardImage src="https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg" />
            <CardContent>
              <Title overline>Desktop Card Vertical</Title>
              <Title level={TitleLevels.ONE}>Card Title</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate
                vera.
              </Text>
              <Button variant={ButtonVariant.CONVERSION}>Skeleton toggle</Button>
            </CardContent>
          </Card>
        </Column>
        <Column desktopSize={3} tabletSize={6} size={12}>
          <Card>
            <CardImage src="https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg" />
            <CardContent>
              <Title overline>Desktop Card Vertical</Title>
              <Title level={TitleLevels.ONE}>Card Title</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate
                vera.
              </Text>
              <Button variant={ButtonVariant.CONVERSION}>Skeleton toggle</Button>
            </CardContent>
          </Card>
        </Column>
        <Column desktopSize={3} tabletSize={6} size={12}>
          <Card>
            <CardImage src="https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg" />
            <CardContent>
              <Title overline>Desktop Card Vertical</Title>
              <Title level={TitleLevels.ONE}>Card Title</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate
                vera.
              </Text>
              <Button variant={ButtonVariant.CONVERSION}>Skeleton toggle</Button>
            </CardContent>
          </Card>
        </Column>
        <Column desktopSize={3} tabletSize={6} size={12}>
          <Card>
            <CardImage src="https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg" />
            <CardContent>
              <Title overline>Desktop Card Vertical</Title>
              <Title level={TitleLevels.ONE}>Card Title</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate
                vera.
              </Text>
              <Button variant={ButtonVariant.CONVERSION}>Skeleton toggle</Button>
            </CardContent>
          </Card>
        </Column>
      </Columns>
    </Section>
  )
}
