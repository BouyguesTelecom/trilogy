import React from 'react'
import { View } from 'react-native'

import { ComponentName } from '@/components/enumsComponentsName'
import { ProductTourProps } from '@/components/product-tour/ProductTourProps'

/**
 * Product Tour Component
 * @param children {React.ReactNode} Title child
 */
const ProductTour = ({ children }: ProductTourProps, ref: React.Ref<View>): JSX.Element => {
  return <View ref={ref}>{children}</View>
}

ProductTour.displayName = ComponentName.ProductTour

export default React.forwardRef(ProductTour)
