import * as React from 'react'
import { Box, BoxContent, Divider, IconName, Section, Text } from '@trilogy-ds/react/components'
import { TrilogyColor } from '@trilogy-ds/react/objects'
import { RowItem, Rows, Spacer, SpacerSize } from '@trilogy-ds/react'
import { GapSize } from '@trilogy-ds/react/lib/components/columns/ColumnsTypes'

export const DividerScreen = (): JSX.Element => {
  return (
    <Section>
      <Rows gap={GapSize.EIGHT}>
        <RowItem>
          <Divider />
        </RowItem>
        <RowItem>
          <Divider />
        </RowItem>
      </Rows>

      <Spacer size={SpacerSize.EIGHT} />

      <Box>
        <Divider
          color={TrilogyColor.MAIN}
          backgroundColor={TrilogyColor.MAIN}
          textColor={TrilogyColor.BACKGROUND}
          iconName={IconName.EYE_SLASH}
        />
        <Text>Lorem ipsum dolor sit amet</Text>
      </Box>
      <Box>
        <Text>Lorem ipsum dolor sit amet</Text>

        <Divider
          color={TrilogyColor.MAIN}
          textColor={TrilogyColor.MAIN}
          backgroundColor={TrilogyColor.BACKGROUND}
          content={'New Message'}
        />
        <Text>Lorem ipsum dolor sit amet</Text>
      </Box>
      <Box>
        <BoxContent>
          <Divider unboxed />
        </BoxContent>
      </Box>
      <Divider />
    </Section>
  )
}
