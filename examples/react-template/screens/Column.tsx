import * as React from 'react'
import { Box, BoxContent, Column, Columns, GapSize, Section } from '@trilogy-ds/react/components'
import { Alignable, Spacer, SpacerSize } from '@trilogy-ds/react'

export const ColumnScreen = (): JSX.Element => {
  return (
    <Section>
      <Columns gap={GapSize.THREE}>
        <Column size={2}>
          <Box flat>
            <BoxContent>Column 1</BoxContent>
          </Box>
        </Column>
        <Column>
          <Box flat>
            <BoxContent>Column 2</BoxContent>
          </Box>
        </Column>
        <Column size={2}>
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
        <Column narrow>
          <Box flat>
            <BoxContent>Column 2</BoxContent>
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
        <Column size={4}>
          <Box flat>
            <BoxContent>Column 3</BoxContent>
          </Box>
        </Column>
      </Columns>
    </Section>
  )
}
