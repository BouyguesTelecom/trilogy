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
  Container,
  Divider,
  Price,
  Section,
  Text,
  TextLevels,
  Title,
  TitleLevels
} from '@trilogy-ds/react/components'

export const ColumnScreen = (): JSX.Element => {
  return (
    <>
      <Container fluid>
        <Box>
          <Columns>
            <ColumnsItem><Text>Test</Text></ColumnsItem>
            <ColumnsItem><Text>Test</Text></ColumnsItem>
            <ColumnsItem><Text>Test</Text></ColumnsItem>
          </Columns>
        </Box>

        <Divider/>
        <Title level={TitleLevels.THREE}>Multiline</Title>

        <Columns multiline>
          <ColumnsItem mobileSize={6} tabletSize={5} desktopSize={4} widescreenSize={3} fullhdSize={2}>
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


        <Title level={TitleLevels.THREE}>Columns : nb-cols-1 peek and full-bleed</Title>
        <Columns nbCols={1} scrollable mobile fullBleed>
          <ColumnsItem>
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
                <Text level={2} className='has-text-weight-bold'>Overline</Text>
                <Title level={TitleLevels.ONE}>size : 4</Title>
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
          <ColumnsItem>
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
          <ColumnsItem>
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
          <ColumnsItem>
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
          <ColumnsItem>
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

        <Columns mobile multiline>
          <ColumnsItem>
            <Text level={1} className='has-background-warning'>Colonne 1</Text>
          </ColumnsItem>
          <ColumnsItem>
            <Text level={1} className='has-background-warning'>Colonne 1</Text>
          </ColumnsItem>
          <ColumnsItem>
            <Text level={1} className='has-background-warning'>Colonne 1</Text>
          </ColumnsItem>
          <ColumnsItem>
            <Text level={1} className='has-background-warning'>Colonne 1</Text>
          </ColumnsItem>
          <ColumnsItem>
            <Text level={1} className='has-background-warning'>Colonne 1</Text>
          </ColumnsItem>
        </Columns>
        <Columns mobile>
          <ColumnsItem>
            <Box>
              <Columns>
                <ColumnsItem size={6}>
                  <Box>
                    <Title level={1}>Test</Title>
                    <Text level={1}>Tehdghgfbnf bnvf</Text>
                  </Box>
                </ColumnsItem>
                <ColumnsItem>
                  <Box>
                    <Title level={1}>Test</Title>
                    <Text level={1}>Tehdghgfbnf bnvf</Text>
                  </Box>
                </ColumnsItem>
              </Columns>
            </Box>
          </ColumnsItem>
          <ColumnsItem>
            <Box>
              <Title level={1}>Test</Title>
              <Text level={1}>Tehdghgfbnf bnvf</Text>
            </Box>
          </ColumnsItem>
        </Columns>
        <Section>
        <Container>

          <Title level={TitleLevels.THREE}>Scollable</Title>
          <Divider/>

          <Columns scrollable marginSize={3}>
            <ColumnsItem desktopSize={3} mobileSize={12} tabletSize={6} size={12}>
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
            <ColumnsItem desktopSize={3} mobileSize={12} tabletSize={6} size={12}>
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
            <ColumnsItem desktopSize={3} mobileSize={12} tabletSize={6} size={12}>
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
            <ColumnsItem desktopSize={3} mobileSize={12} tabletSize={6} size={12}>
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
        </Container>
      </Section>
      </Container>
    </>
  );
};
