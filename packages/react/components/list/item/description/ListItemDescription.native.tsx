import * as React from "react"
import { Text } from "@/components/text"
import { View } from "@/components/view"
import { ListItemDescriptionProps } from "./ListItemDescriptionProps"
import { ComponentName } from "@/components/enumsComponentsName"

const ListItemDescription = ({
  children,
}: ListItemDescriptionProps): JSX.Element => {
  if (["string", "number"].includes(typeof children)) {
    return <Text>{children}</Text>
  }

  return <View>{children}</View>
}

ListItemDescription.displayName = ComponentName.ListItemDescription

export default ListItemDescription
