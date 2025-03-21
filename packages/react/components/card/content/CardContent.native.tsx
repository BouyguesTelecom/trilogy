import { Button } from '@/components/button'
import { CardContext } from '@/components/card/Card.native'
import { ComponentName } from '@/components/enumsComponentsName'
import { Title, TitleLevels } from '@/components/title'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CardContentNativeRef, CardContentProps } from './CardContentProps'

/**
 * Card Content Component
 * @param children {ReactNode} Card Content Children
 * @param titleSup {string} Add a sup title
 * @param title {string} Add a title
 * @param buttonText {string} if textButton, it will add a Button with content text
 * @param buttonVariant {ButtonVariant} Add variant for Button - Default is primary
 * @param buttonClick {Function} Click event for Button
 * @param text {string} Content text of Card
 * @param onClick {Function} onClick Event for all content
 * @param others
 */
const CardContent = React.forwardRef<CardContentNativeRef, CardContentProps>(
  ({ children, ...others }, ref): JSX.Element => {
    const cardContextValues = useContext(CardContext)

    const titleSup = 'titleSup'
    const title = 'title'
    const buttonText = 'buttonText'
    const buttonVariant = 'CONVERSION'
    const buttonClick = () => null
    const text = 'text'
    const onClick = () => null

    const styles = StyleSheet.create({
      card: {
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        minHeight: 10,
        flex: cardContextValues.horizontal ? 1 : 0,
      },
      view: {
        width: '100%',
      },
      text: {
        color: getColorStyle(TrilogyColor.MAIN),
        fontSize: 12,
      },
      padding: {
        marginBottom: 16,
      },
    })

    if (children) {
      if (onClick) {
        return (
          <View ref={ref} style={styles.card}>
            <TouchableOpacity style={{ width: '100%', paddingBottom: 16 }} onPress={onClick}>
              {children}
            </TouchableOpacity>
          </View>
        )
      }
      return (
        <View ref={ref} style={styles.card} {...others}>
          {children}
        </View>
      )
    }

    const cardContent = (
      <View ref={ref} style={styles.card} {...others}>
        {titleSup && (
          <Title overline testId='titleSup-id'>
            {titleSup}
          </Title>
        )}
        {title && (
          <Title level={TitleLevels.ONE} testId='title-id'>
            {title}
          </Title>
        )}
        {text && (
          <>
            <View style={{ marginBottom: 16 }} />
            <Text style={styles.text}>{text}</Text>
          </>
        )}
        {buttonText && (
          <>
            <View style={{ marginBottom: 16 }} />
            <Button variant={buttonVariant} onClick={buttonClick} testId='button-id'>
              {buttonText}
            </Button>
          </>
        )}
      </View>
    )

    return onClick ? (
      <View style={styles.view}>
        <TouchableOpacity style={{ width: '100%' }} onPress={onClick} activeOpacity={0.85}>
          {cardContent}
        </TouchableOpacity>
      </View>
    ) : (
      cardContent
    )
  },
)

CardContent.displayName = ComponentName.CardContent

export default CardContent
