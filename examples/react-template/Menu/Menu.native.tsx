import { Button, getColorStyle, TrilogyColor } from '@trilogy-ds/react'
import { SafeAreaView } from 'react-native'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const MenuScreen = ({ navigation }: any): JSX.Element => {
  return (
    <SafeAreaView style={{ backgroundColor: getColorStyle(TrilogyColor.BACKGROUND) }}>
      <Button>toto</Button>
    </SafeAreaView>
  )
}
