import { Alignable, getColorStyle, Spacer, SpacerSize, TrilogyColor } from '@trilogy-ds/react'
import { Box, BoxContent, Column, Columns, GapSize, Section } from '@trilogy-ds/react/components'
import * as React from 'react'
import { View } from 'react-native'

export const ColumnScreen = (): JSX.Element => {
  return (
    <Section>
      <Columns gap={GapSize.THREE}>
        <Column size={6}>
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
          <View style={{ borderWidth: 1, borderColor: getColorStyle(TrilogyColor.NEUTRAL), borderRadius: 6 }}>
            <BoxContent>Column</BoxContent>
          </View>
        </Column>
        <Column size={6}>
          <View style={{ borderWidth: 1, borderColor: getColorStyle(TrilogyColor.NEUTRAL), borderRadius: 6 }}>
            <BoxContent>Column 2</BoxContent>
          </View>
        </Column>
        <Column>
          <View style={{ borderWidth: 1, borderColor: getColorStyle(TrilogyColor.NEUTRAL), borderRadius: 6 }}>
            <BoxContent>Column 2</BoxContent>
          </View>
        </Column>
      </Columns>
    </Section>
  )
}
