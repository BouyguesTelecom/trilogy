import {
  AutoLayout,
  Box,
  BoxContent,
  Columns,
  ColumnsItem,
  Container,
  Divider,
  Icon,
  IconName,
  Input,
  ScrollView,
  Text,
  TextLevels,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'
import React from 'react'
import * as Screens from './screens'
import { TypographyAlign } from '@trilogy-ds/react/objects'

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
    <ScrollView>
      <Container>
        <AutoLayout>
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
                  <Columns>
                    <ColumnsItem size={11}>
                      <Title level={TitleLevels.THREE}>{pathName}</Title>
                    </ColumnsItem>
                    <ColumnsItem verticalCenter size={1}>
                      <Icon name={IconName.ARROW_RIGHT} />
                    </ColumnsItem>
                  </Columns>
                </BoxContent>
              </Box>
            )
          })}
        </AutoLayout>
      </Container>
    </ScrollView>
  )
}
