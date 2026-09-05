import { ComponentName } from '@/components/enumsComponentsName'
import { SliderItemProps } from '@/components/slider/SliderProps'
import React from 'react'

/**
 * Slider Item Component
 *
 * Wraps a single slide's content. The parent `<Slider>` provides the
 * positioning wrapper, so this component renders its children directly.
 *
 * @param children {ReactNode} Slide content
 */
const SliderItem = ({ children }: SliderItemProps): React.ReactNode => {
  return children
}

SliderItem.displayName = ComponentName.SliderItem
export default SliderItem
