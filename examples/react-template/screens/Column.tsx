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
  TitleLevels
} from '@trilogy-ds/react/components'
import {GapSize} from "@trilogy-ds/react/lib/components/columns/ColumnsTypes";
import {Alignable, TrilogyColor} from "@trilogy-ds/react";

export const ColumnScreen = (): JSX.Element => {
  return (
    <Section>
      <Title level={TitleLevels.THREE}>Gap, size</Title>
      <Text> Columns with gap size 5 </Text>
      <Columns gap={GapSize.FIVE}>
        <ColumnsItem size={4} verticalAlign={'ALIGNED_CENTER'} >
          <Box backgroundColor={TrilogyColor.MAIN} inverted>
            <Text>Size=4</Text>
          </Box>
        </ColumnsItem>
        <ColumnsItem size={6}>
          <Box>
          <Text>Size=6</Text>
          </Box>
        </ColumnsItem>
        <ColumnsItem size={2}>
          <Box backgroundColor={TrilogyColor.MAIN} inverted>
            <Text>Size=2</Text>
          </Box></ColumnsItem>
      </Columns>

      <Divider/>
      <Text> Columns with gap size 0 (gapless). The first Item is narrow, the width depend of his content.</Text>
      <Columns gap={GapSize.ZERO}>
        <ColumnsItem narrow>
          <Box backgroundColor={TrilogyColor.MAIN} inverted>
            <Text>Is Narrow</Text>
          </Box>
        </ColumnsItem>
        <ColumnsItem size={6}>
          <Box>
            <Text>Size=6</Text>
          </Box>
        </ColumnsItem>
        <ColumnsItem size={2}>
          <Box backgroundColor={TrilogyColor.MAIN} inverted>
            <Text>Size=2</Text>
          </Box></ColumnsItem>
      </Columns>

      <Divider/>
      <Text> Mobile force column to stay in one row on mobile device. In this case, narrow take the maximum width left.</Text>
      <Columns gap={GapSize.ZERO} mobile>
        <ColumnsItem narrow>
          <Box backgroundColor={TrilogyColor.MAIN} inverted>
            <Text>Is Narrow</Text>
          </Box>
        </ColumnsItem>
        <ColumnsItem size={6}>
          <Box>
            <Text>Size=6</Text>
          </Box>
        </ColumnsItem>
        <ColumnsItem size={2}>
          <Box backgroundColor={TrilogyColor.MAIN} inverted>
            <Text>Size=2</Text>
          </Box></ColumnsItem>
      </Columns>

      <Divider/>
      <Title level={TitleLevels.THREE}>Multiline</Title>
      <Text> Columns is multiline </Text>
      <Columns multiline >
        {
          Object.values([1,2,3,4,5,6,7,8,9,10,11,12]).map( (colSize, index) => {
          return (
            <ColumnsItem size={colSize}>
              <Box backgroundColor={ (index % 2) && TrilogyColor.MAIN } inverted={ index % 2 } >
                <Text>Size : {colSize}</Text>
              </Box>
            </ColumnsItem>
          )}
        )}
      </Columns>

      <Divider/>
      <Title level={TitleLevels.THREE}> Scollable and Fullblead</Title>
      <Text> Columns is scrollable (Add mobile to force columns to stay in one row) </Text>
      <Columns scrollable mobile>
        {
          Object.values([1,2,3,4,5,6,7,8,9,10,11,12]).map( (colSize, index) => {
            return (
              <ColumnsItem size={colSize}>
                <Box backgroundColor={ (index % 2) && TrilogyColor.MAIN } inverted={ index % 2 } >
                  <Text>Size : {colSize}</Text>
                </Box>
              </ColumnsItem>
            )}
          )}
      </Columns>

      <Divider/>
      <Text> Columns is scrollable and fullbleed.</Text>
      <Columns scrollable mobile fullBleed>
        {
          Object.values([1,2,3,4,5,6,7,8,9,10,11,12]).map( (colSize, index) => {
            return (
              <ColumnsItem size={colSize}>
                <Box backgroundColor={ (index % 2) && TrilogyColor.MAIN } inverted={ index % 2 } >
                  <Text>Size : {colSize}</Text>
                </Box>
              </ColumnsItem>
            )}
          )}
      </Columns>

      <Divider/>
      <Title level={TitleLevels.THREE}>Sample with contents : Multiline</Title>


      <Columns multiline centered>
        <ColumnsItem mobileSize={6} tabletSize={5} desktopSize={4} widescreenSize={3} fullhdSize={2} verticalCentered>
          <Box>
            <BoxContent>
              <Text level={2} className='has-text-weight-bold'>Overline</Text>
              <Title level={TitleLevels.ONE}>Card Title</Title>
              <Text>
                Lorem ipsum dolor sit amet
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
              <Text level={2} className='has-text-weight-bold'>Overline</Text>
              <Title level={TitleLevels.ONE}>Card Title</Title>
              <Text>
                Lorem ipsum dolor sit amet.
              </Text>
              <Price amount={22.99}></Price>
              <ButtonList>
                <Button variant={ButtonVariant.CONVERSION}>Skeleton toggle</Button>
              </ButtonList>
            </BoxContent>
          </Box>
        </ColumnsItem>
      </Columns>


      <Columns multiline >
        <ColumnsItem mobileSize={6} tabletSize={5} desktopSize={4} widescreenSize={3} fullhdSize={2} verticalCentered>
          <Box>
            <BoxContent>
              <Text level={2} className='has-text-weight-bold'>Overline</Text>
              <Title level={TitleLevels.ONE}>Card Title</Title>
              <Text>
                Lorem ipsum dolor sit amet
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
              <Text level={2} className='has-text-weight-bold'>Overline</Text>
              <Title level={TitleLevels.ONE}>Card Title</Title>
              <Text>
                Lorem ipsum dolor sit amet.
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
              <Text level={TextLevels.TWO} className='has-text-weight-bold'>Overline</Text>
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
              <Text level={2} className='has-text-weight-bold'>Overline</Text>
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
              <Text level={2} className='has-text-weight-bold'>Overline</Text>
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
              <Text level={2} className='has-text-weight-bold'>Overline</Text>
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
              <Text level={2} className='has-text-weight-bold'>Overline</Text>
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

      <Divider/>
      <Title level={TitleLevels.THREE}>Sample with contents : Scrollable Fullbledd</Title>
      <Columns scrollable mobile fullBleed>
        <ColumnsItem size={12}>
          <Box>
            <BoxContent>
              <Text level={2} className='has-text-weight-bold'>Overline</Text>
              <Title level={TitleLevels.ONE}>Card Title</Title>
              <Text>
                Lorem ipsum dolor sit amet.
              </Text>
              <Price amount={22.99}></Price>
              <ButtonList>
                <Button variant={ButtonVariant.CONVERSION}>Skeleton toggle</Button>
              </ButtonList>
            </BoxContent>
          </Box>
        </ColumnsItem>
        <ColumnsItem size={4}>
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
              <Text level={2} className='has-text-weight-bold'>Overline</Text>
              <Title level={TitleLevels.ONE}>size=8</Title>
              <Text>
                4 + 8 = 12
              </Text>
              <Price amount={22.99}></Price>
              <ButtonList>
                <Button variant={ButtonVariant.CONVERSION}>Skeleton toggle</Button>
              </ButtonList>
            </BoxContent>
          </Box>
        </ColumnsItem>
        <ColumnsItem size={12}>
          <Box>
            <BoxContent>
              <Text level={2} className='has-text-weight-bold'>Overline</Text>
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
        <ColumnsItem size={12}>
          <Box shadowless>
            <BoxContent>
              <Text level={2} className='has-text-weight-bold'>Overline</Text>
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

      <Divider/>
      <Title level={TitleLevels.THREE}>Another example : 6 cards scrollable</Title>
      <Columns scrollable marginSize={3}>
        <ColumnsItem desktopSize={3} tabletSize={6} size={12}>
          <Card>
            <CardImage src='https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg'/>
            <CardContent>
              <Title overline>Desktop Card Vertical</Title>
              <Title level={TitleLevels.ONE}>Card Title</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu,
                vulputate
                vera.
              </Text>
              <Button variant={ButtonVariant.CONVERSION}>Skeleton toggle</Button>
            </CardContent>
          </Card>
        </ColumnsItem>
        <ColumnsItem desktopSize={3} tabletSize={6} size={12}>
          <Card>
            <CardImage src='https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg'/>
            <CardContent>
              <Title overline>Desktop Card Vertical</Title>
              <Title level={TitleLevels.ONE}>Card Title</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu,
                vulputate
                vera.
              </Text>
              <Button variant={ButtonVariant.CONVERSION}>Skeleton toggle</Button>
            </CardContent>
          </Card>
        </ColumnsItem>
        <ColumnsItem desktopSize={3} tabletSize={6} size={12}>
          <Card>
            <CardImage src='https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg'/>
            <CardContent>
              <Title overline>Desktop Card Vertical</Title>
              <Title level={TitleLevels.ONE}>Card Title</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu,
                vulputate
                vera.
              </Text>
              <Button variant={ButtonVariant.CONVERSION}>Skeleton toggle</Button>
            </CardContent>
          </Card>
        </ColumnsItem>
        <ColumnsItem desktopSize={3} tabletSize={6} size={12}>
          <Card>
            <CardImage src='https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg'/>
            <CardContent>
              <Title overline>Desktop Card Vertical</Title>
              <Title level={TitleLevels.ONE}>Card Title</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu,
                vulputate
                vera.
              </Text>
              <Button variant={ButtonVariant.CONVERSION}>Skeleton toggle</Button>
            </CardContent>
          </Card>
        </ColumnsItem>
        <ColumnsItem desktopSize={3} tabletSize={6} size={12}>
          <Card>
            <CardImage src='https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg'/>
            <CardContent>
              <Title overline>Desktop Card Vertical</Title>
              <Title level={TitleLevels.ONE}>Card Title</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu,
                vulputate
                vera.
              </Text>
              <Button variant={ButtonVariant.CONVERSION}>Skeleton toggle</Button>
            </CardContent>
          </Card>
        </ColumnsItem>
        <ColumnsItem desktopSize={3} tabletSize={6} size={12}>
          <Card>
            <CardImage src='https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg'/>
            <CardContent>
              <Title overline>Desktop Card Vertical</Title>
              <Title level={TitleLevels.ONE}>Card Title</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu,
                vulputate
                vera.
              </Text>
              <Button variant={ButtonVariant.CONVERSION}>Skeleton toggle</Button>
            </CardContent>
          </Card>
        </ColumnsItem>
      </Columns>
    </Section>
  );
};
