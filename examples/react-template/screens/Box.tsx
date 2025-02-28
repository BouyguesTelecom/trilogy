import { IconSize, Spacer, SpacerSize, TextLevels, TypographyBold, View } from '@trilogy-ds/react'
import {
  Box,
  BoxContent,
  BoxFooter,
  BoxHeader,
  Button,
  ButtonVariant,
  Column,
  Columns,
  Divider,
  Icon,
  IconName,
  Link,
  Price,
  Section,
  Text,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'
import { Alignable, TrilogyColor, TypographyAlign } from '@trilogy-ds/react/objects'
import * as React from 'react'

export const BoxScreen = (): JSX.Element => {
  const [active, setActive] = React.useState(false)
  const data = [1, 2, 3, 4, 5]

  return (
    <Section>
      <Box fullheight {...{ style: { alignItems: 'center' } }}>
        <BoxContent>
          <Columns verticalAlign={Alignable.ALIGNED_CENTER}>
            <Column narrow>
              <View id='homeNotificationIcon'>
                <Icon name='tri-eye' size={IconSize.SMALL} />
              </View>
            </Column>
            <Column>
              <Text level={TextLevels.THREE} numberOfLines={2} typo={[TypographyBold.TEXT_WEIGHT_NORMAL]}>
                Mon text
              </Text>
            </Column>
            <Column narrow>
              <View>
                <Icon name={IconName.TIMES} size={IconSize.SMALL} />
              </View>
            </Column>
          </Columns>
        </BoxContent>
      </Box>

      <Box>
        <BoxContent backgroundSrc='https://www.bouyguestelecom.fr/assets/media/original/image/CMS/ecommerce/byou/nbg.webp'>
          <Columns>
            {data.map((item, index) => (
              <Column key={index}>
                <Text>Test column in other component</Text>
              </Column>
            ))}
          </Columns>
        </BoxContent>
      </Box>

      <Spacer size={SpacerSize.FOUR} />

      <Box>
        <BoxHeader>
          <Title level={TitleLevels.FIVE}>Box active</Title>
        </BoxHeader>
        <BoxContent>
          <Text>Click on this box to see the active state.</Text>
        </BoxContent>
      </Box>
      <Columns multiline>
        <Column size={6}></Column>
        <Column size={10}>
          <Box flat>
            <BoxHeader>Box with Header and Content</BoxHeader>
            <BoxContent>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus tellus sed erat maximus porta.
                Etiam non ex in dolor faucibus tempor. Sed ullamcorper, ligula sit amet dictum posuere, urna tortor
                vulputate justo, ut luctus justo eros sed erat. Fusce finibus dolor ex. Duis vel velit in lectus
                placerat aliquam nec at elit. Aenean metus neque, accumsan id ipsum sodales, fermentum lacinia eros. Ut
                gravida aliquet magna, id efficitur magna ultrices a. In quis bibendum tortor. Nam quam lacus, suscipit
                a vehicula ac, vehicula eget risus.
              </Text>
            </BoxContent>
            <BoxFooter>
              <Button variant={ButtonVariant.PRIMARY}>Check out</Button>
            </BoxFooter>
          </Box>
        </Column>
        <Column size={10}>
          <Box>
            <BoxContent>
              <Title level={TitleLevels.FOUR}>Simple box</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus tellus sed erat maximus porta.
                Etiam non ex in dolor faucibus tempor. Sed ullamcorper, ligula sit amet dictum posuere, urna tortor
                vulputate justo, ut luctus justo eros sed erat. Fusce finibus dolor ex. Duis vel velit in lectus
                placerat aliquam nec at elit. Aenean metus neque, accumsan id ipsum sodales, fermentum lacinia eros. Ut
                gravida aliquet magna, id efficitur magna ultrices a. In quis bibendum tortor. Nam quam lacus, suscipit
                a vehicula ac, vehicula eget risus.
              </Text>
            </BoxContent>
          </Box>
        </Column>
        <Column size={10}>
          <Box flat>
            <BoxContent>
              <Title level={TitleLevels.FOUR}>Flat box</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus tellus sed erat maximus porta.
                Etiam non ex in dolor faucibus tempor. Sed ullamcorper, ligula sit amet dictum posuere, urna tortor
                vulputate justo, ut luctus justo eros sed erat. Fusce finibus dolor ex. Duis vel velit in lectus
                placerat aliquam nec at elit. Aenean metus neque, accumsan id ipsum sodales, fermentum lacinia eros. Ut
                gravida aliquet magna, id efficitur magna ultrices a. In quis bibendum tortor. Nam quam lacus, suscipit
                a vehicula ac, vehicula eget risus.
              </Text>
            </BoxContent>
          </Box>
        </Column>
      </Columns>
      <Divider />

      <Box active={active} backgroundColor={TrilogyColor.MAIN} inverted>
        <BoxHeader>Box active</BoxHeader>
        <BoxContent>
          <Text>Background : Main Color.</Text>
          <Price amount={100} />
        </BoxContent>
      </Box>

      <Box backgroundColor={TrilogyColor.MAIN_FADE}>
        <BoxHeader>Box with Header and Content</BoxHeader>
        <BoxContent>
          <Text>Background color is faded.</Text>
        </BoxContent>
        <BoxFooter>
          <Button variant={ButtonVariant.PRIMARY}>Check out</Button>
        </BoxFooter>
      </Box>

      <Box backgroundColor={TrilogyColor.SUCCESS_FADE}>
        <BoxContent>
          <Title level={TitleLevels.FOUR}>Simple box</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus tellus sed erat maximus porta. Etiam
            non ex in dolor faucibus tempor. Sed ullamcorper, ligula sit amet dictum posuere, urna tortor vulputate
            justo, ut luctus justo eros sed erat. Fusce finibus dolor ex. Duis vel velit in lectus placerat aliquam nec
            at elit. Aenean metus neque, accumsan id ipsum sodales, fermentum lacinia eros. Ut gravida aliquet magna, id
            efficitur magna ultrices a. In quis bibendum tortor. Nam quam lacus, suscipit a vehicula ac, vehicula eget
            risus.
          </Text>
        </BoxContent>
      </Box>

      <Box backgroundColor={TrilogyColor.INFO} flat inverted>
        <BoxContent>
          <Icon name={IconName.EYE} />
          <Text>Background color is not faded.</Text>
          <Title level={TitleLevels.FOUR}>Simple box</Title>
          <Text>Background color is not faded.</Text>
        </BoxContent>
      </Box>

      <Box backgroundColor={TrilogyColor.INFO} flat inverted>
        <BoxContent>
          <Title level={TitleLevels.FOUR}>Flat box</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus tellus sed erat maximus porta. Etiam
            non ex in dolor faucibus tempor. Sed ullamcorper, ligula sit amet dictum posuere, urna tortor vulputate
            justo, ut luctus justo eros sed erat. Fusce finibus dolor ex. Duis vel velit in lectus placerat aliquam nec
            at elit. Aenean metus neque, accumsan id ipsum sodales, fermentum lacinia eros. Ut gravida aliquet magna, id
            efficitur magna ultrices a. In quis bibendum tortor. Nam quam lacus, suscipit a vehicula ac, vehicula eget
            risus.
          </Text>
          <Box backgroundColor={TrilogyColor.BACKGROUND} flat>
            <BoxContent>
              <Title level={TitleLevels.FOUR}>Simple box</Title>
              <Columns>
                <Column size={5}>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus tellus sed erat maximus porta.
                    Etiam non ex in dolor faucibus tempor. Sed ullamcorper, ligula sit amet dictum posuere, urna tortor
                    vulputate justo, ut luctus justo eros sed erat. Fusce finibus dolor ex. Duis vel velit in lectus
                    placerat aliquam nec at elit. Aenean metus neque, accumsan id ipsum sodales, fermentum lacinia eros.
                    Ut gravida aliquet magna, id efficitur magna ultrices a. In quis bibendum tortor. Nam quam lacus,
                    suscipit a vehicula ac, vehicula eget risus.
                  </Text>
                </Column>
                <Column size={5}>
                  <Box backgroundColor={TrilogyColor.MAIN} flat inverted>
                    <BoxContent>
                      <Title level={TitleLevels.FOUR}>Simple box</Title>
                      <Text>Background color is not faded.</Text>
                    </BoxContent>
                  </Box>
                </Column>
              </Columns>
            </BoxContent>
          </Box>
        </BoxContent>
      </Box>
      <Divider />
      <Columns mobile>
        <Column size={6}>
          <Box highlighted={TrilogyColor.ERROR} className='is-fullheight'>
            <BoxHeader>Test</BoxHeader>
            <BoxContent>
              <Title level={TitleLevels.FOUR}>Highlited box</Title>
              <Text>
                Eget tincidunt tincidunt id massa sollicitudin. Egestas felis dolor neque nunc. Eget suscipit enim velit
                ultricies justo ultrices sed leo cras.
              </Text>
              <Text>
                Eget tincidunt tincidunt id massa sollicitudin. Egestas felis dolor neque nunc. Eget suscipit enim velit
                ultricies justo ultrices sed leo cras.
              </Text>
            </BoxContent>
            <BoxFooter>
              <Button variant={ButtonVariant.CONVERSION}>Test</Button>
            </BoxFooter>
          </Box>
        </Column>
        <Column size={6}>
          <Box highlighted={TrilogyColor.WARNING} className='is-fullheight' headerOffset>
            <BoxContent backgroundColor={'NEUTRAL_FADE'}>
              <Title level={TitleLevels.FOUR}>Highlited box</Title>
              <Text>
                Eget tincidunt tincidunt id massa sollicitudin. Egestas felis dolor neque nunc. Eget suscipit enim velit
                ultricies justo ultrices sed leo cras.
              </Text>
            </BoxContent>
            <BoxContent>
              <Title level={TitleLevels.FOUR}>Highlited box</Title>
            </BoxContent>
            <BoxFooter backgroundColor={TrilogyColor.SUCCESS}>
              <Button variant={ButtonVariant.CONVERSION}>Test</Button>
            </BoxFooter>
          </Box>
        </Column>
      </Columns>
      <Divider />
      <Box>
        <BoxHeader variant={TrilogyColor.MAIN}>Box is-unboxed</BoxHeader>
        <BoxContent>
          <Text>
            Eget tincidunt tincidunt id massa sollicitudin. Egestas felis dolor neque nunc. Eget suscipit enim velit
            ultricies justo ultrices sed leo cras.
          </Text>
          <Divider unboxed />
          <Text>
            Eget tincidunt tincidunt id massa sollicitudin. Egestas felis dolor neque nunc. Eget suscipit enim velit
            ultricies justo ultrices sed leo cras.
          </Text>
        </BoxContent>
      </Box>
      <Divider />
      <Columns>
        <Column size={10}>
          <Box>
            <BoxHeader variant={TrilogyColor.ACCENT}>Box with Header , Content and Footer</BoxHeader>
            <BoxContent>
              <Text>
                Eget tincidunt tincidunt id massa sollicitudin. Egestas felis dolor neque nunc. Eget suscipit enim velit
                ultricies justo ultrices sed leo cras.
              </Text>
            </BoxContent>
            <BoxFooter>
              <Link>Link here</Link>
            </BoxFooter>
          </Box>
        </Column>
        <Column size={10}>
          <Box>
            <BoxContent>
              <Title level={TitleLevels.FOUR}>Simple Box with footer</Title>
              <Text>
                Eget tincidunt tincidunt id massa sollicitudin. Egestas felis dolor neque nunc. Eget suscipit enim velit
                ultricies justo ultrices sed leo cras.
              </Text>
            </BoxContent>
            <BoxFooter>
              <Link>Link here</Link>
            </BoxFooter>
          </Box>
        </Column>
      </Columns>
      <Divider />
      <Columns>
        <Column size={10}>
          <Box>
            <BoxContent>
              <Title level={TitleLevels.THREE} typo={[TypographyAlign.TEXT_CENTERED]}>
                Clickable box
              </Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus tellus sed erat maximus porta.
                Etiam non ex in dolor faucibus tempor. Sed ullamcorper, ligula sit amet dictum posuere, urna tortor
                vulputate justo, ut luctus justo eros sed erat.
              </Text>
            </BoxContent>
          </Box>
        </Column>
        <Column size={10}>
          <Box backgroundSrc={'https://picsum.photos/id/1/1500/600'} inverted>
            <Title level={TitleLevels.THREE} typo={[TypographyAlign.TEXT_CENTERED]}>
              Box with background image
            </Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra venenatis neque, ac fringilla mauris
              fermentum vel. Maecenas viverra, erat id condimentum ultricies, enim enim lacinia sem, sed blandit nisi
              metus suscipit elit. Phasellus magna risus, mattis sed consectetur at, rhoncus vitae quam. Vivamus varius
              nisl a nibh finibus, non laoreet eros ornare. Phasellus dignissim ullamcorper tortor ut iaculis. Fusce
              tincidunt finibus fermentum. Praesent pulvinar sapien a turpis faucibus, et semper quam scelerisque. Morbi
              interdum nec ipsum eu facilisis.
            </Text>
          </Box>
        </Column>
        <Column size={10}>
          <Box backgroundSrc={'https://picsum.photos/seed/picsum/1500/600'}>
            <Title level={TitleLevels.THREE} typo={[TypographyAlign.TEXT_CENTERED]}>
              Box with background image
            </Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra venenatis neque, ac fringilla mauris
              fermentum vel. Maecenas viverra, erat id condimentum ultricies, enim enim lacinia sem, sed blandit nisi
              metus suscipit elit. Phasellus magna risus, mattis sed consectetur at, rhoncus vitae quam. Vivamus varius
              nisl a nibh finibus, non laoreet eros ornare. Phasellus dignissim ullamcorper tortor ut iaculis. Fusce
              tincidunt finibus fermentum. Praesent pulvinar sapien a turpis faucibus, et semper quam scelerisque. Morbi
              interdum nec ipsum eu facilisis.
            </Text>
          </Box>
        </Column>
      </Columns>
    </Section>
  )
}
