/* eslint-disable react-native/no-inline-styles */
import React from 'react'

import {
  AutoLayout,
  Box,
  BoxContent,
  Button,
  ButtonVariant,
  Column,
  Columns,
  Container,
  Divider,
  Hero,
  Icon,
  IconName,
  IconSize,
  Link,
  ScrollView,
  SpacerSize,
  Text,
  TextLevels,
  Title,
  TitleLevels,
  View,
} from '@trilogy-ds/react/components'

import { TrilogyColor, TypographyAlign, TypographyBold } from '@trilogy-ds/react'

export const TemplateOne = () => {
  return (
    <View backgroundColor={TrilogyColor.BACKGROUND} flexable>
      <ScrollView>
        <View flexable>
          <Hero
            backgroundColor={TrilogyColor.ACCENT}
            overlap={[
              <Container key={0}>
                <AutoLayout edgeSize={SpacerSize.TWO} edges={['bottom']} key={0}>
                  <Box shadowless>
                    <BoxContent>
                      <AutoLayout>
                        <Title
                          level={TitleLevels.THREE}
                          testId='interstitialTitle'
                          typo={TypographyAlign.TEXT_CENTERED}
                        >
                          Heureux de vous accueillir
                        </Title>
                        <Text level={TextLevels.ONE} testId='interstitialSubtitle' typo={TypographyAlign.TEXT_CENTERED}>
                          Connectez-vous pour accéder à votre espace client
                        </Text>
                        <Button testId='btnAccessMyCustomerArea' variant={ButtonVariant.CONVERSION}>
                          Me connecter
                        </Button>
                        <AutoLayout edgeSize={SpacerSize.FOUR} edges={['top', 'bottom']}>
                          <Divider content={'ou'} />
                        </AutoLayout>
                        <Text level={TextLevels.ONE} testId='interstitialSubtitle' typo={TypographyAlign.TEXT_CENTERED}>
                          Première connexion ?
                        </Text>
                        <Button testId='accountCreation' variant={ButtonVariant.PRIMARY}>
                          Créer mon mot de passe
                        </Button>
                      </AutoLayout>
                      <AutoLayout edgeSize={SpacerSize.THREE} edges={['bottom', 'top']}>
                        <Box flat>
                          <BoxContent>
                            <Columns>
                              <Column size={2}>
                                <Icon name={IconName.ARROW_RIGHT} />
                              </Column>
                              <Column size={8}>
                                <Text level={TextLevels.TWO} typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}>
                                  Obtenir de l'aide
                                </Text>
                              </Column>
                              <Column size={1}>
                                <Icon name={IconName.ARROW_RIGHT} size={IconSize.SMALL} />
                              </Column>
                            </Columns>
                          </BoxContent>
                        </Box>
                      </AutoLayout>
                      <AutoLayout edgeSize={SpacerSize.THREE} edges={['bottom']}>
                        <Box flat>
                          <BoxContent>
                            <Columns>
                              <Column size={2}>
                                <Icon name={IconName.ARROW_RIGHT} />
                              </Column>
                              <Column size={9}>
                                <Text level={TextLevels.ONE} typo={TypographyBold.TEXT_WEIGHT_BOLD}>
                                  Visiter la boutique en ligne
                                </Text>
                              </Column>
                              <Column size={1}>
                                <Icon name={IconName.ARROW_RIGHT} size={IconSize.SMALL} />
                              </Column>
                            </Columns>
                          </BoxContent>
                        </Box>
                      </AutoLayout>
                    </BoxContent>
                  </Box>
                </AutoLayout>
                <AutoLayout edgeSize={SpacerSize.ONE} edges={['bottom']}>
                  <Link testId='legalNotice'>Mention légales</Link>
                  <Text level={TextLevels.THREE} testId='versionSmall' typo={TypographyAlign.TEXT_CENTERED}>
                    V24.12.0
                  </Text>
                </AutoLayout>
              </Container>,
            ]}
          ></Hero>
        </View>
      </ScrollView>
    </View>
  )
}
