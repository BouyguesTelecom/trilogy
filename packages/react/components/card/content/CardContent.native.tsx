import React, {useContext} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {CardContentProps} from './CardContentProps'
import {Title, TitleLevels} from '../../title'
import {Button} from '../../button'
import {getColorStyle, TrilogyColor} from '../../../objects/facets/Color'
import {CardContext} from '../Card.native'
import {ComponentName} from '../../enumsComponentsName'

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
 * @param floating
 * @param others
 */
const CardContent = ({
                       children,
                       titleSup,
                       title,
                       text,
                       buttonText,
                       buttonClick,
                       buttonVariant,
                       onClick,
                       ...others
                     }: CardContentProps): JSX.Element => {
  const cardContextValues = useContext(CardContext)

  const styles = StyleSheet.create({
    card: {
      paddingTop: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 16,
      minHeight: 10,
      backgroundColor:
        cardContextValues.backgroundColor === 'transparent' ? 'rgba(0, 0, 0, 0)' : getColorStyle(TrilogyColor.WHITE),
      borderBottomEndRadius: 6,
      borderBottomStartRadius: 6,
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
        <View style={styles.card}>
          <TouchableOpacity style={{width: '100%', paddingBottom: 16}} onPress={onClick}>
            {children}
          </TouchableOpacity>
        </View>
      )
    }
    return (
      <View style={styles.card} {...others}>
        {children}
      </View>
    )
  }

  const cardContent = (
    <View style={styles.card} {...others}>
      {titleSup && <Title overline>{titleSup}</Title>}
      {title && <Title level={TitleLevels.ONE}>{title}</Title>}
      {text && (
        <>
          <View style={{marginBottom: 16}}/>
          <Text style={styles.text}>{text}</Text>
        </>
      )}
      {buttonText && (
        <>
          <View style={{marginBottom: 16}}/>
          <Button variant={buttonVariant} onClick={buttonClick}>
            {buttonText}
          </Button>
        </>
      )}
    </View>
  )

  return onClick ? (
    <View style={styles.view}>
      <TouchableOpacity style={{width: '100%'}} onPress={onClick} activeOpacity={0.85}>
        {cardContent}
      </TouchableOpacity>
    </View>
  ) : (
    cardContent
  )
}

CardContent.displayName = ComponentName.CardContent

export default CardContent
