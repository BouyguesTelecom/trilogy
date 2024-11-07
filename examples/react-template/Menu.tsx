import {
  AutoLayout,
  Box,
  BoxContent,
  Columns,
  ColumnsItem,
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
import * as React from 'react'
import * as Screens from './screens'
import { Alignable, TypographyAlign } from '@trilogy-ds/react/objects'

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
          <Section>
            <Title level={TitleLevels.ONE} typo={[TypographyAlign.TEXT_CENTERED]}>
              You need to test components in other screens
            </Title>
            <Text level={TextLevels.ONE} typo={[TypographyAlign.TEXT_CENTERED]}>
              This home screen is only for navigation
            </Text>
            <Input placeholder='Rechercher un composant' onChange={(e) => handleSearch(e.inputValue)} />
            <Divider />
            <Title level={TitleLevels.THREE} typo={[TypographyAlign.TEXT_CENTERED]}>
              Screens
            </Title>
            {Object.keys(list).map((name: any, index) => {
              const [pathName] = list[name].split('Screen')
              return (
                <Box
                  key={index}
                  onClick={() => {
                    console.log(navigation)
                    if (navigation) {
                      navigation.navigate(pathName)
                    }
                  }}
                >
                  <BoxContent>
                    <Columns verticalAlign={Alignable.ALIGNED_CENTER}>
                      <ColumnsItem>
                        <Title level={TitleLevels.THREE}>{pathName}</Title>
                      </ColumnsItem>
                      <ColumnsItem narrow>
                        <Icon name={IconName.ARROW_RIGHT} />
                      </ColumnsItem>
                    </Columns>
                  </BoxContent>
                </Box>
              )
            })}
          </Section>
        </ScrollView>
      </AutoLayout>
    </View>
  )
}
