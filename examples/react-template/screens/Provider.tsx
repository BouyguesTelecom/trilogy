import { Box, Button, ButtonVariant, Section, Text, Title, TitleLevels, View } from '@trilogy-ds/react/components'
import { ViewMarkup } from '@trilogy-ds/react/components/view'
import { TrilogyProvider } from '@trilogy-ds/react/context/provider'
import { TrilogyProviderStyled } from '@trilogy-ds/react/context/providerStyled'
import { Alignable, Justifiable } from '@trilogy-ds/react/objects'
import * as React from 'react'
import '@trilogy-ds/styles/dist/default/trilogy-mangled.css'

export const ProviderScreen = (): JSX.Element => {
  return (
    <Section>
      <TrilogyProviderStyled>
        <Box>
          <View markup={ViewMarkup.LABEL}>
            <Text>TrilogyProviderStyledMangled.</Text>
          </View>
          <View markup={ViewMarkup.SPAN}></View>
          <View markup={ViewMarkup.DIV} flexable justify={Justifiable.SPACE_BETWEEN} align={Alignable.ALIGNED_CENTER}>
            <Button variant={ButtonVariant.SECONDARY}>CLick on me</Button>
            <Title level={TitleLevels.THREE}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa dolorum error et ex exercitationem,
              explicabo fugiat fugit, id impedit iste libero modi, molestiae nisi nobis quis sapiente ut voluptas?
            </Title>
          </View>
        </Box>
      </TrilogyProviderStyled>

      <TrilogyProvider mangled>
        <Box>
          <View markup={ViewMarkup.LABEL}>
            <Text>TrilogyProvider. Mangled</Text>
          </View>
          <View markup={ViewMarkup.SPAN}></View>
          <View markup={ViewMarkup.DIV} flexable justify={Justifiable.SPACE_BETWEEN} align={Alignable.ALIGNED_CENTER}>
            <Button variant={ButtonVariant.SECONDARY}>CLick on me</Button>
            <Title level={TitleLevels.THREE}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa dolorum error et ex exercitationem,
              explicabo fugiat fugit, id impedit iste libero modi, molestiae nisi nobis quis sapiente ut voluptas?
            </Title>
          </View>
        </Box>
      </TrilogyProvider>
    </Section>
  )
}
