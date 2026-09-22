import { Row, Rows, Spacer, SpacerSize } from '@trilogy-ds/react'
import { Box, BoxContent, Divider, IconName, Section, Text } from '@trilogy-ds/react/components'
import { GapSize } from '@trilogy-ds/react/lib/components/columns/ColumnsTypes'
import * as React from 'react'

export const DividerScreen = (): JSX.Element => {
  return (
    <Section>
      <Rows gap={GapSize.EIGHT}>
        <Row>
          <Divider />
        </Row>
        <Row>
          <Divider />
        </Row>
      </Rows>

      <Spacer size={SpacerSize.EIGHT} />

      <Box>
        <Divider iconName={IconName.EYE_SLASH} />
        <BoxContent>
          <Text>Lorem ipsum dolor sit amet</Text>
        </BoxContent>
      </Box>
      <Box>
        <BoxContent>
          <Text>Lorem ipsum dolor sit amet</Text>
        </BoxContent>

        <Divider content={'New Message'} />
        <BoxContent>
          <Text>Lorem ipsum dolor sit amet</Text>
        </BoxContent>
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
