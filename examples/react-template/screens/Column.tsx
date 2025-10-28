import {
  Alignable,
  IconName,
  IconSize,
  Price,
  Spacer,
  SpacerSize,
  Sticker,
  Text,
  Title,
  TypographyAlign,
  List,
  ListItem,
  TextLevels
} from '@trilogy-ds/react'
import { Box, BoxContent, Column, Columns, GapSize, Icon, Section } from '@trilogy-ds/react/components'
import * as React from 'react'
import { View } from 'react-native'

export const ColumnScreen = (): JSX.Element => {
  const refColumn = React.useRef<any>([])

  return (
    <Section>
      <List>
        <Columns verticalAlign={Alignable.ALIGNED_CENTER}>
          <Column narrow>
            <ListItem>
              <Text level={TextLevels.TWO}>
                List item with Column
              </Text>
            </ListItem>
          </Column>
        </Columns>
        <Columns verticalAlign={Alignable.ALIGNED_CENTER}>
          <Column narrow>
            <ListItem>
              <Text level={TextLevels.TWO}>
                List item with Column
              </Text>
            </ListItem>
          </Column>
        </Columns>
      </List>
      <Columns>
        <Column>
          <Box fullheight>
            <Columns verticalAlign={'ALIGNED_CENTER'} fullheight>
              <Column>
                <Text>Box 1</Text>
              </Column>
            </Columns>
          </Box>
        </Column>
        <Column>
          <Box fullheight>
            <Text>Box 2</Text>
            <Text>Box 2</Text>
            <Text>Box 2</Text>
            <Text>Box 2</Text>
            <Text>Box 2</Text>
          </Box>
        </Column>
      </Columns>

      <Columns gap={GapSize.THREE}>
        <Column narrow>
          <Box flat>
            <BoxContent>Column </BoxContent>
          </Box>
        </Column>

        <Column>
          <Box flat>
            <BoxContent>Column </BoxContent>
          </Box>
        </Column>
        <Column>
          <Box flat>
            <BoxContent>Column 3</BoxContent>
          </Box>
        </Column>
      </Columns>

      <Spacer size={SpacerSize.FIVE} />

      <Columns gap={GapSize.THREE}>
        <Column size={2}>
          <Box flat>
            <BoxContent>Column 1</BoxContent>
          </Box>
        </Column>
        <Column>
          <Box flat>
            <BoxContent>Column 1</BoxContent>
          </Box>
        </Column>
      </Columns>

      <Spacer size={SpacerSize.FIVE} />

      <Columns align={Alignable.ALIGNED_CENTER} gap={GapSize.THREE} multiline>
        <Column size={8}>
          <Box flat>
            <BoxContent>Column 1</BoxContent>
          </Box>
        </Column>
        <Column size={4}>
          <Box flat>
            <BoxContent>Column 2</BoxContent>
          </Box>
        </Column>
        <Column>
          <Box flat>
            <BoxContent>Column 3</BoxContent>
          </Box>
        </Column>
      </Columns>

      <Spacer size={SpacerSize.FIVE} />

      <Columns align={Alignable.ALIGNED_CENTER} gap={GapSize.THREE} scrollable>
        <Column narrow>
          <Box flat>
            <BoxContent>Column</BoxContent>
          </Box>
        </Column>
        <Column size={6}>
          <Box flat>
            <BoxContent>
              <Icon name='tri-alert' />
            </BoxContent>
          </Box>
        </Column>
        <Column narrow>
          <Box flat>
            <BoxContent>
              <Columns verticalAlign='ALIGNED_CENTER'>
                <Column narrow>
                  <Icon name='tri-alert' />
                </Column>
                <Column>
                  <Text>toto</Text>
                </Column>
              </Columns>
            </BoxContent>
          </Box>
        </Column>
      </Columns>

      <Columns scrollable fullBleed>
        {[
          'Forfait mobile',
          'Forfait 5GO abonnement seulement',
          'Forfait internet 5g',
          'Forfait 70GO abonnement seulement',
        ].map((item, i) => {
          return (
            <Column
              narrow
              key={i}
              verticalAlign={Alignable.ALIGNED_CENTER}
              ref={(el) => el && (refColumn.current[i] = el)}
            >
              <View style={{ paddingTop: 4, paddingBottom: 4, paddingLeft: 10, paddingRight: 10 }}>
                <Box>
                  <BoxContent>
                    <Columns verticalAlign={Alignable.ALIGNED_CENTER}>
                      <Column>
                        <Icon size={IconSize.MEDIUM} name={IconName.BELL} />
                      </Column>
                      <Column>
                        <Title>{item}</Title>
                        <Text>0000000000</Text>
                      </Column>
                    </Columns>
                  </BoxContent>
                </Box>
              </View>
            </Column>
          )
        })}
      </Columns>

      <Columns scrollable fullBleed>
        <Column size={8}>
          <Box fullheight>
            <BoxContent>
              <Columns fullheight>
                <Column verticalAlign='ALIGNED_END'>
                  <Spacer size={12} />
                  <Columns align={Alignable.ALIGNED_CENTER}>
                    <Sticker label='BONUS REPRISE 200€' />
                  </Columns>
                  <Spacer size={12} />

                  <Title typo={[TypographyAlign.TEXT_CENTERED]}>Galaxy S25</Title>
                  <Spacer size={12} />
                  <View style={{ height: 200, width: 100, backgroundColor: 'red', alignSelf: 'center' }} />
                  <Spacer size={12} />
                  <Price align='ALIGNED_CENTER' amount={859.99} />
                  <Text typo={[TypographyAlign.TEXT_CENTERED]}>Après remboursement</Text>
                </Column>
              </Columns>
            </BoxContent>
          </Box>
        </Column>

        <Column size={8}>
          <Box fullheight>
            <BoxContent>
              <Columns fullheight>
                <Column verticalAlign='ALIGNED_END'>
                  <Title typo={[TypographyAlign.TEXT_CENTERED]}>Galaxy S25</Title>
                  <Spacer size={12} />
                  <View style={{ height: 200, width: 100, backgroundColor: 'red', alignSelf: 'center' }} />
                  <Spacer size={12} />
                  <Price align='ALIGNED_CENTER' amount={859.99} />
                  <Text typo={[TypographyAlign.TEXT_CENTERED]}>Après remboursement</Text>
                </Column>
              </Columns>
            </BoxContent>
          </Box>
        </Column>

        <Column size={8}>
          <Box fullheight>
            <BoxContent>
              <Columns fullheight>
                <Column verticalAlign='ALIGNED_END'>
                  <Title typo={[TypographyAlign.TEXT_CENTERED]}>Galaxy S25</Title>
                  <Spacer size={12} />
                  <View style={{ height: 200, width: 100, backgroundColor: 'red', alignSelf: 'center' }} />
                  <Spacer size={12} />
                  <Price align='ALIGNED_CENTER' amount={859.99} />
                  <Text typo={[TypographyAlign.TEXT_CENTERED]}></Text>
                </Column>
              </Columns>
            </BoxContent>
          </Box>
        </Column>
      </Columns>
    </Section>
  )
}
