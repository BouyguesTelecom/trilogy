import React from 'react'
import { NativeScrollEvent, NativeSyntheticEvent, type ScrollView } from 'react-native'

export interface ModalContextProps {
  scrollViewRef: React.Ref<ScrollView>
  handleOnScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  isFooter: boolean
  setIsFooter: React.Dispatch<React.SetStateAction<boolean>>
}
