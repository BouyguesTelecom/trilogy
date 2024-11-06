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
  Columns,
  ColumnsItem,
  Divider,
  Price,
  Section,
  Text,
  TextLevels,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'
import { GapSize } from '@trilogy-ds/react/lib/components/columns/ColumnsTypes'
import { Alignable } from '@trilogy-ds/react'

export const ColumnScreen = (): JSX.Element => {
  return (
    <Section>
      <Box>
        <Columns scrollable fullBleed gap={GapSize.FIVE}>
          <ColumnsItem size={4}>
            <Text>Test</Text>
          </ColumnsItem>
          <ColumnsItem size={4}>
            <Text>Test</Text>
          </ColumnsItem>
          <ColumnsItem size={4}>
            <Text>Test</Text>
          </ColumnsItem>
        </Columns>
      </Box>

      <Box>
        <Columns fullBleed>
          <ColumnsItem size={4}>
            <Text>Test</Text>
          </ColumnsItem>
          <ColumnsItem size={4}>
            <Text>Test</Text>
          </ColumnsItem>
          <ColumnsItem size={4}>
            <Text>Test</Text>
          </ColumnsItem>
        </Columns>
      </Box>

      <Box>
        <Columns>
          <ColumnsItem>
            <Text>Test</Text>
          </ColumnsItem>
          <ColumnsItem>
            <Text>Test</Text>
          </ColumnsItem>
          <ColumnsItem>
            <Text>Test</Text>
          </ColumnsItem>
        </Columns>
      </Box>

      <Box>
        <Columns multiline>
          <ColumnsItem>
            <Text>Test</Text>
          </ColumnsItem>
          <ColumnsItem>
            <Text>Test</Text>
          </ColumnsItem>
          <ColumnsItem>
            <Text>Test</Text>
          </ColumnsItem>
          <ColumnsItem>
            <Text>Test</Text>
          </ColumnsItem>
          <ColumnsItem>
            <Text>Test</Text>
          </ColumnsItem>
          <ColumnsItem>
            <Text>Test</Text>
          </ColumnsItem>
        </Columns>
      </Box>

      <Box>
        <Columns gap={0}>
          <ColumnsItem>
            <Text>Test</Text>
          </ColumnsItem>
          <ColumnsItem>
            <Text>Test</Text>
          </ColumnsItem>
          <ColumnsItem>
            <Text>Test</Text>
          </ColumnsItem>
        </Columns>
      </Box>

      <Divider />

      <Title level={TitleLevels.THREE}>Multiline</Title>

      <Columns multiline verticalAlign={Alignable.ALIGNED_END} align={Alignable.ALIGNED_CENTER}>
        <ColumnsItem narrow>
          <Box>
            <BoxContent>
              <Text level={2} className='has-text-weight-bold'>
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
        </ColumnsItem>
        <ColumnsItem size={6}>
          <Box>
            <BoxContent>
              <Text level={2} className='has-text-weight-bold'>
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
        </ColumnsItem>
        <ColumnsItem mobileSize={6} tabletSize={5} desktopSize={4} widescreenSize={3} fullhdSize={2}>
          <Box>
            <BoxContent>
              <Text level={2} className='has-text-weight-bold'>
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
        </ColumnsItem>
        <ColumnsItem mobileSize={6} tabletSize={5} desktopSize={4} widescreenSize={3} fullhdSize={2}>
          <Box>
            <BoxContent>
              <Text level={2} className='has-text-weight-bold'>
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
        </ColumnsItem>
        <ColumnsItem>
          <Box>
            <BoxContent>
              <Text level={2} className='has-text-weight-bold'>
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
        </ColumnsItem>
      </Columns>
      <Title level={TitleLevels.THREE}>Columns : full-bleed</Title>
      <Columns scrollable mobile fullBleed>
        <ColumnsItem size={9}>
          <Box>
            <BoxContent>
              <Text level={2} className='has-text-weight-bold'>
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
        </ColumnsItem>
        <ColumnsItem size={5}>
          <Box>
            <BoxContent>
              <Title level={TitleLevels.THREE}>size : 4</Title>
              <Price amount={22.99}></Price>
            </BoxContent>
          </Box>
        </ColumnsItem>
        <ColumnsItem size={8}>
          <Box>
            <BoxContent>
              <Text level={2} className='has-text-weight-bold'>
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
        </ColumnsItem>
        <ColumnsItem>
          <Box>
            <BoxContent>
              <Text level={2} className='has-text-weight-bold'>
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
        </ColumnsItem>
        <ColumnsItem>
          <Box shadowless>
            <BoxContent>
              <Text level={2} className='has-text-weight-bold'>
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
        </ColumnsItem>
        <ColumnsItem>
          <Box shadowless>
            <BoxContent>
              <Text level={2} className='has-text-weight-bold'>
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
        </ColumnsItem>
        <ColumnsItem>
          <Box shadowless>
            <BoxContent>
              <Text level={2} className='has-text-weight-bold'>
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
        </ColumnsItem>
        <ColumnsItem>
          <Box shadowless>
            <BoxContent>
              <Text level={2} className='has-text-weight-bold'>
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
        </ColumnsItem>
      </Columns>
      <Columns mobile multiline>
        <ColumnsItem>
          <Text level={1} className='has-background-warning'>
            Column 1
          </Text>
        </ColumnsItem>
        <ColumnsItem>
          <Text level={1} className='has-background-warning'>
            Column 2
          </Text>
        </ColumnsItem>
        <ColumnsItem>
          <Text level={1} className='has-background-warning'>
            Column 3
          </Text>
        </ColumnsItem>
        <ColumnsItem>
          <Text level={1} className='has-background-warning'>
            Column 4
          </Text>
        </ColumnsItem>
        <ColumnsItem>
          <Text level={1} className='has-background-warning'>
            Column 5
          </Text>
        </ColumnsItem>
      </Columns>

      <Divider />

      <Columns align={Alignable.ALIGNED_CENTER} mobile>
        <ColumnsItem size={3}>
          <Box>
            <Title level={1}>Test</Title>
            <Text level={1}>Column size 3</Text>
          </Box>
        </ColumnsItem>
        <ColumnsItem size={5}>
          <Box>
            <Title level={1}>Test</Title>
            <Text level={1}>Column size 5</Text>
          </Box>
        </ColumnsItem>
        <ColumnsItem narrow>
          <Box>
            <Title level={1}>Test</Title>
            <Text level={1}>Column narrow</Text>
          </Box>
        </ColumnsItem>
      </Columns>

      <Divider />

      <Columns mobile>
        <ColumnsItem size={8}>
          <Box>
            <Title level={1}>Test</Title>
            <Text level={1}>Column size 8</Text>
          </Box>
        </ColumnsItem>
        <ColumnsItem narrow>
          <Box>
            <Title level={1}>Test</Title>
            <Text level={1}>Column narrow</Text>
          </Box>
        </ColumnsItem>
      </Columns>

      <Columns>
        <ColumnsItem size={3}>
          <Box>
            <Title level={1}>Test</Title>
            <Text level={1}>Colmumns size 3</Text>
          </Box>
        </ColumnsItem>
      </Columns>
      <Divider />
      <Title level={TitleLevels.THREE}>Scrollable</Title>
      <Columns scrollable marginSize={3}>
        <ColumnsItem desktopSize={3} tabletSize={6} size={12}>
          <Card>
            <CardImage src='https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg' />
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
        </ColumnsItem>
        <ColumnsItem desktopSize={3} tabletSize={6} size={12}>
          <Card>
            <CardImage src='https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg' />
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
        </ColumnsItem>
        <ColumnsItem desktopSize={3} tabletSize={6} size={12}>
          <Card>
            <CardImage src='https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg' />
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
        </ColumnsItem>
        <ColumnsItem desktopSize={3} tabletSize={6} size={12}>
          <Card>
            <CardImage src='https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg' />
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
        </ColumnsItem>
      </Columns>
    </Section>
  )
}
