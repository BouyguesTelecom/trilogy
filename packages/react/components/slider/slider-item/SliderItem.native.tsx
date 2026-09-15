import { ComponentName } from '@/components/enumsComponentsName'
import { SliderItemProps } from '@/components/slider/SliderProps'
import React from 'react'
import { View } from 'react-native'

/**
 * Slider Item Component (native)
 *
 * Wraps a single slide's content. The parent `<Slider>` sizes each page, so this
 * component just renders its children inside a full-width View.
 *
 * @param children {ReactNode} Slide content
 */
const SliderItem = ({ children }: SliderItemProps): JSX.Element => {
  return <View style={{ width: '100%' }}>{children}</View>
}

SliderItem.displayName = ComponentName.SliderItem
export default SliderItem
