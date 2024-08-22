import * as React from 'react'
import { Box, BoxContent, Button, ButtonList, ButtonVariant, Card, CardContent, CardImage, Columns, ColumnsItem, Container, Divider, Price, Section, Text, Title, TitleLevels } from '@trilogy-ds/react/components'

export const ColumnScreen = (): JSX.Element => {
  return (
    <>
      <Container fluid className='has-background-success'>


        <Columns multiline >
          <ColumnsItem mobileSize={6} tabletSize={5} desktopSize={4} widescreenSize={3} fullhdSize={2} >
            <Box>
              <BoxContent>
                <Text level="TWO" className='has-text-weight-bold'>Overline</Text>
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
          <ColumnsItem mobileSize={6} tabletSize={5} desktopSize={4} widescreenSize={3} fullhdSize={2} >
            <Box>
              <BoxContent>
                <Text level="TWO" className='has-text-weight-bold'>Overline</Text>
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
          <ColumnsItem mobileSize={6} tabletSize={5} desktopSize={4} widescreenSize={3} fullhdSize={2} >
            <Box>
              <BoxContent>
                <Text level="TWO" className='has-text-weight-bold'>Overline</Text>
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
          <ColumnsItem mobileSize={6} tabletSize={5} desktopSize={4} widescreenSize={3} fullhdSize={2} >
            <Box>
              <BoxContent>
                <Text level="TWO" className='has-text-weight-bold'>Overline</Text>
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
          <ColumnsItem mobileSize={6} tabletSize={5} desktopSize={4} widescreenSize={3} fullhdSize={2} >
            <Box>
              <BoxContent>
                <Text level="TWO" className='has-text-weight-bold'>Overline</Text>
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
          <ColumnsItem mobileSize={6} tabletSize={5} desktopSize={4} widescreenSize={3} fullhdSize={2} >
            <Box>
              <BoxContent>
                <Text level="TWO" className='has-text-weight-bold'>Overline</Text>
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
                <Text level="TWO" className='has-text-weight-bold'>Overline</Text>
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



        <Columns className='has-1-cols column-peek is-mobile is-inlined full-bleed'>
          <ColumnsItem>
            <Box shadowless>
              <BoxContent>
                <Text level="TWO" className='has-text-weight-bold'>Overline</Text>
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
          <ColumnsItem>
            <Box shadowless>
              <BoxContent>
                <Text level="TWO" className='has-text-weight-bold'>Overline</Text>
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
          <ColumnsItem>
            <Box shadowless>
              <BoxContent>
                <Text level="TWO" className='has-text-weight-bold'>Overline</Text>
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
              <BoxContent >
                <Text level="TWO" className='has-text-weight-bold'>Overline</Text>
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
            <Box shadowless fullheight>
              <BoxContent >
                <Text level="TWO" className='has-text-weight-bold'>Overline</Text>
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
              <BoxContent >
                <Text level="TWO" className='has-text-weight-bold'>Overline</Text>
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
              <BoxContent >
                <Text level="TWO" className='has-text-weight-bold'>Overline</Text>
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

        <Columns mobile>
          <ColumnsItem>
            <Text level='ONE' className='has-background-warning'>Colonne 1</Text>
          </ColumnsItem>
          <ColumnsItem>
            <Text level='ONE' className='has-background-warning'>Colonne 1</Text>
          </ColumnsItem>
          <ColumnsItem>
            <Text level='ONE' className='has-background-warning'>Colonne 1</Text>
          </ColumnsItem>
          <ColumnsItem>
            <Text level='ONE' className='has-background-warning'>Colonne 1</Text>
          </ColumnsItem>
          <ColumnsItem>
            <Text level='ONE' className='has-background-warning'>Colonne 1</Text>
          </ColumnsItem>
        </Columns>


        <Columns mobile>
          <ColumnsItem>
            <Box>
              <Columns>
                <ColumnsItem size={6}>
                  <Box>
                    <Title level='ONE'>Test</Title>
                    <Text level='ONE'>Tehdghgfbnf bnvf</Text>
                  </Box>
                </ColumnsItem>
                <ColumnsItem>
                  <Box>
                    <Title level='ONE'>Test</Title>
                    <Text level='ONE'>Tehdghgfbnf bnvf</Text>
                  </Box>
                </ColumnsItem>
              </Columns>
            </Box>
          </ColumnsItem>
          <ColumnsItem>
            <Box>
              <Title level='ONE'>Test</Title>
              <Text level='ONE'>Tehdghgfbnf bnvf</Text>
            </Box>
          </ColumnsItem>
        </Columns>

      </Container>

      <Section>
        <Container>

          <Title level={TitleLevels.THREE}>Inlined</Title>
          <Divider />

          <Columns inlined marginSize={3}>
            <ColumnsItem desktopSize={3} mobileSize={12} tabletSize={6} size={12}>
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
            <ColumnsItem desktopSize={3} mobileSize={12} tabletSize={6} size={12}>
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
            <ColumnsItem desktopSize={3} mobileSize={12} tabletSize={6} size={12}>
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
            <ColumnsItem desktopSize={3} mobileSize={12} tabletSize={6} size={12}>
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
        </Container>
      </Section>


    </>
  );
};
