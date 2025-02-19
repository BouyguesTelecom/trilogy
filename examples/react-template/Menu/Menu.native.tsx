import { Spacer, SpacerSize } from '@trilogy-ds/react'
import {
  Box,
  BoxContent,
  Column,
  Columns,
  Divider,
  Icon,
  IconName,
  Input,
  Text,
  TextLevels,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'
import { TypographyAlign } from '@trilogy-ds/react/objects'
import * as React from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import * as Screens from '../screens'

const initialList = Object.keys(Screens)
/* eslint-disable @typescript-eslint/no-explicit-any */
export const MenuScreen = ({ navigation }: any): JSX.Element => {
  const [list, setList] = React.useState(initialList)

  const handleSearch = React.useCallback((e: string) => {
    Object.keys(initialList).forEach((composant: any) => {
      if (!initialList[composant].toLocaleLowerCase().includes(e.toLocaleLowerCase())) {
        delete initialList[composant]
      }
    })
    setList(initialList)
  }, [])

  const renderItem = React.useCallback(
    ({ item }) => {
      const pathName = item.split('Screen')

      return (
        <>
          <Box
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
          <Spacer size={SpacerSize.THREE} />
        </>
      )
    },
    [list],
  )

  return (
    <SafeAreaView>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <Title level={TitleLevels.ONE} typo={[TypographyAlign.TEXT_CENTERED]}>
              You need to test components in other screens
            </Title>
            <Spacer size={SpacerSize.THREE} />
            <Text level={TextLevels.ONE} typo={[TypographyAlign.TEXT_CENTERED]}>
              This home screen is only for navigation
            </Text>
            <Spacer size={SpacerSize.THREE} />
            <Input placeholder='Rechercher un composant' onChange={(e) => handleSearch(e.inputValue)} />
            <Divider />
            <Title level={TitleLevels.THREE} typo={[TypographyAlign.TEXT_CENTERED]}>
              Screens
            </Title>
          </>
        }
        renderItem={renderItem}
        data={list}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  )
}
