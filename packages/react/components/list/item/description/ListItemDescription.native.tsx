import * as React from "react"
import { Text } from "@/components/text"
import { View } from "@/components/view"
import { ListItemDescriptionNativeRef, ListItemDescriptionProps } from "./ListItemDescriptionProps"
import { ComponentName } from "@/components/enumsComponentsName"

/**
 * ListItemDescription Component
 * @param children {React.ReactNode}
 */
const ListItemDescription = React.forwardRef<ListItemDescriptionNativeRef, ListItemDescriptionProps>(({
  children,
}, ref): JSX.Element => {
  if (["string", "number"].includes(typeof children)) {
    return <Text>{children}</Text>
  }

  return <View ref={ref}>{children}</View>
})

ListItemDescription.displayName = ComponentName.ListItemDescription

export default ListItemDescription
