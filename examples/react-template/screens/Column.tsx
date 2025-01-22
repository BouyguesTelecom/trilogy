import { Alignable, IconName, IconSize, Spacer, SpacerSize, Text, Title } from '@trilogy-ds/react'
import { Box, BoxContent, Column, Columns, GapSize, Icon, Section } from '@trilogy-ds/react/components'
import * as React from 'react'
import { View } from 'react-native'

export const ColumnScreen = (): JSX.Element => {
  const refColumn = React.useRef<any>([])

  return (
    <Section>
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

      <Columns scrollable>
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
    </Section>
  )
}
