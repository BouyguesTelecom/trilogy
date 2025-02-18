import {
  AutoLayout,
  Box,
  BoxContent,
  Column,
  Columns,
  Divider,
  Icon,
  IconName,
  Input,
  ScrollView,
  Section,
  Text,
  TextLevels,
  Title,
  TitleLevels,
  View,
} from '@trilogy-ds/react/components'
import { TypographyAlign } from '@trilogy-ds/react/objects'
import * as React from 'react'
import * as Screens from './screens'
import { SafeAreaView } from 'react-native'
import { isMobile } from '@trilogy-ds/react/helpers'
import { Spacer, SpacerSize } from '@trilogy-ds/react'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const MenuScreen = ({ navigation }: any): JSX.Element => {
  const [list, setList] = React.useState(Object.keys(Screens))

  const handleSearch = React.useCallback((e: string) => {
    const l = { ...Object.keys(Screens) }
    Object.keys(l).forEach((composant: any) => {
      if (!l[composant].toLocaleLowerCase().includes(e.toLocaleLowerCase())) {
        delete l[composant]
      }
    })
    setList(l)
  }, [])

  return (
    <View markup='main' className='main-content'>
      <AutoLayout>
        <ScrollView>
          <Section inverted>
            {isMobile ? (
              <SafeAreaView>
                <Title level={TitleLevels.ONE} typo={[TypographyAlign.TEXT_CENTERED]}>
                  You need to test components in other screens
                </Title>
              </SafeAreaView>
            ) : (
              <Title level={TitleLevels.ONE} typo={[TypographyAlign.TEXT_CENTERED]}>
                You need to test components in other screens
              </Title>
            )}
            {isMobile && <Spacer size={SpacerSize.THREE} />}
            <Text level={TextLevels.ONE} typo={[TypographyAlign.TEXT_CENTERED]}>
              This home screen is only for navigation
            </Text>
            {isMobile && <Spacer size={SpacerSize.THREE} />}
            <Input placeholder='Rechercher un composant' onChange={(e) => handleSearch(e.inputValue)} />
            <Divider />
            <Title level={TitleLevels.THREE} typo={[TypographyAlign.TEXT_CENTERED]}>
              Screens
            </Title>
            <AutoLayout>
              {Object.keys(list).map((name, index) => {
                const [pathName] = list[name].split('Screen')
                return (
                  <Box
                    key={index}
                    onClick={() => {
                      if (navigation) {
                        navigation.navigate(pathName)
                      }
                    }}
                  >
                    <BoxContent>
                      <Columns verticalAlign='ALIGNED_CENTER' gap={0}>
                        <Column>
                          <Title level={TitleLevels.THREE}>{pathName}</Title>
                        </Column>
                        <Column narrow>
                          <Icon name={IconName.ARROW_RIGHT} />
                        </Column>
                      </Columns>
                    </BoxContent>
                  </Box>
                )
              })}
            </AutoLayout>
          </Section>
        </ScrollView>
      </AutoLayout>
    </View>
  )
}
