import {
  Alignable,
  Box,
  Button,
  ButtonVariant,
  Justifiable,
  Section,
  Text,
  Title,
  TitleLevels,
  TrilogyProvider,
  View,
  ViewMarkup,
} from '@trilogy-ds/react'
import { TrilogyProviderStyled } from '@trilogy-ds/react/lib/context/providerStyled'
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
