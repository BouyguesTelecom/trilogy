import * as React from "react"
import { ProductTourNativeRef, ProductTourProps } from "./ProductTourProps"
import { ComponentName } from "@/components/enumsComponentsName"
import { View } from "react-native"

/**
 * Product Tour Component
 * @param children {React.ReactNode} Title child
 */
const ProductTour = React.forwardRef<ProductTourNativeRef, ProductTourProps>(({ children }, ref): JSX.Element => {
  return <View ref={ref}>{children}</View>
})

ProductTour.displayName = ComponentName.ProductTour

export default ProductTour
