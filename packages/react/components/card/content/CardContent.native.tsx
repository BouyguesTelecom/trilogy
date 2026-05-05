import { CardContext } from '@/components/card/Card.native'
import { ComponentName } from '@/components/enumsComponentsName'
import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { CardContentNativeRef, CardContentProps } from './CardContentProps'

/**
 * Card Content Component
 * @param children {React.ReactNode} Custom Card Content Children
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 */
const CardContent = React.forwardRef<CardContentNativeRef, CardContentProps>(
  ({ children, testId, ...others }, ref): JSX.Element => {
    const cardContextValues = useContext(CardContext)

    const styles = StyleSheet.create({
      card: {
        padding: 16,
        minHeight: 10,
        flex: cardContextValues.horizontal ? 1 : 0,
      },
    })

    return (
      <View testID={testId} ref={ref} style={styles.card} {...others}>
        {children}
      </View>
    )
  },
)

CardContent.displayName = ComponentName.CardContent

export default CardContent
