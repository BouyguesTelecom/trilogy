import { forwardRef } from 'react'
import { ProductTourNativeRef, ProductTourProps } from '@/components/product-tour/ProductTourProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { View } from 'react-native'

/**
 * Product Tour Component
 * @param children {React.ReactNode} Title child
 */
const ProductTour = forwardRef<ProductTourNativeRef, ProductTourProps>(({ children }, ref): JSX.Element => {
  return <View ref={ref}>{children}</View>
})

ProductTour.displayName = ComponentName.ProductTour

export default ProductTour
