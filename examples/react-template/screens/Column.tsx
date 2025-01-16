import { Alignable, Spacer, SpacerSize } from '@trilogy-ds/react'
import { Box, BoxContent, Column, Columns, GapSize, Section } from '@trilogy-ds/react/components'
import * as React from 'react'

export const ColumnScreen = (): JSX.Element => {
  const Custom = ({ style }) => {
    return (
      <Column style={style}>
        <Box flat>
          <BoxContent>Column </BoxContent>
        </Box>
      </Column>
    )
  }

  return (
    <Section>
      <Columns gap={GapSize.THREE}>
        <Custom />

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
        <Column>
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
        <Column>
          <Box>
            <BoxContent>Column</BoxContent>
          </Box>
        </Column>
        <Column narrow>
          <Box>
            <BoxContent>Column</BoxContent>
          </Box>
        </Column>
        <Column>
          <Box>
            <BoxContent>Column 2</BoxContent>
          </Box>
        </Column>
      </Columns>
    </Section>
  )
}
