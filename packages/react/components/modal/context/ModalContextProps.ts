import { Dispatch, Ref, SetStateAction } from 'react'
import { NativeScrollEvent, NativeSyntheticEvent, type ScrollView } from 'react-native'

export interface ModalContextProps {
  scrollViewRef: Ref<ScrollView>
  handleOnScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  isFooter: boolean
  setIsFooter: Dispatch<SetStateAction<boolean>>
}
