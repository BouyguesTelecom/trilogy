import * as React from "react"
import { View } from '@/components/view'
import type { ButtonListProps } from "./ButtonListProps"
import { ComponentName } from "@/components/enumsComponentsName"

/**
 * ButtonList Native Component
 * @param children {ReactNode} ButtonList children
 */
const ButtonList = ({
  children,
}: ButtonListProps): JSX.Element => {
  return <View {...{ children }} />
}

ButtonList.displayName = ComponentName.ButtonList

export default ButtonList
