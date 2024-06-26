import * as React from "react"
import { ProductTourProps } from "./ProductTourProps"
import { ComponentName } from "@/components/enumsComponentsName"
import { View } from "react-native"

/**
 * Product Tour Component
 * @param children {React.ReactNode} Title child
 */
const ProductTour = ({ children }: ProductTourProps): JSX.Element => {
  return <View>{children}</View>
}

ProductTour.displayName = ComponentName.ProductTour

export default ProductTour
