import * as React from "react"
import { StyleSheet, View } from "react-native"
import { AccordionBodyProps } from "./AccordionBodyProps"
import { ComponentName } from "@/components/enumsComponentsName"

/**
 * Accordion Body Component
 * @param children {React.ReactNode} Children for Accordion body
 */
const AccordionBody = ({
  children,
  ...others
}: AccordionBodyProps): JSX.Element => {
  const styles = StyleSheet.create({
    accordionBody: {},
  })

  return (
    <View style={[styles.accordionBody]} {...others}>
      {children}
    </View>
  )
}

AccordionBody.displayName = ComponentName.AccordionBody

export default AccordionBody
