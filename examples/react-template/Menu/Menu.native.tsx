import { Box, BoxContent, Column, Columns } from '@trilogy-ds/react/components'
import * as React from 'react'
import { FlatList, SafeAreaView, View } from 'react-native'
import * as Screens from '../screens'

const initialList = Object.keys(Screens)
/* eslint-disable @typescript-eslint/no-explicit-any */
export const MenuScreen = ({ navigation }: any): JSX.Element => {
  const [list, setList] = React.useState(initialList)

  const handleSearch = React.useCallback((e: string) => {
    const newList = [...initialList].filter((screen) => screen.toLocaleLowerCase().includes(e.toLocaleLowerCase()))
    setList(newList)
  }, [])

  const renderItem = React.useCallback(
    ({ item }) => {
      const [pathName] = item.split('Screen')

      return (
        <View>
          <Box
            onClick={() => {
              if (navigation) navigation.navigate(pathName)
            }}
          >
            <BoxContent>
              <Columns verticalAlign='ALIGNED_CENTER' gap={0}>
                <Column></Column>
                <Column narrow></Column>
              </Columns>
            </BoxContent>
          </Box>
        </View>
      )
    },
    [list],
  )

  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        data={list}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  )
}
