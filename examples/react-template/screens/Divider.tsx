import React from 'react'
import {Section, Divider, Box, BoxContent, IconName, Text} from '@trilogy-ds/react/components'
import {TrilogyColor} from '@trilogy-ds/react/objects'

export const DividerScreen = (): JSX.Element => {
  return (
    <Section>
      <Box>
        <Divider
          iconName={IconName.EYE_SLASH}
        />
        <Text>Lorem ipsum dolor sit amet</Text>

        <Divider
          color={TrilogyColor.MAIN}
          backgroundColor={TrilogyColor.MAIN}
          textColor={TrilogyColor.WHITE}
          iconName={IconName.EYE_SLASH}
        />
        <Text>Lorem ipsum dolor sit amet</Text>

      </Box>
      <Box>
        <Text>Lorem ipsum dolor sit amet</Text>

        <Divider
          color={TrilogyColor.MAIN}
          textColor={TrilogyColor.MAIN}
          backgroundColor={TrilogyColor.WHITE}
          content={'New Message'}
        />
        <Text>Lorem ipsum dolor sit amet</Text>

      </Box>
      <Box>
        <BoxContent>
          <Divider unboxed/>
        </BoxContent>
      </Box>
      <Divider/>
    </Section>
  )
}
