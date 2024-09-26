import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import { CardImageProps } from './CardImageProps'
import { CardContext } from '@/components/card/Card.native'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Card Image Component
 * @param src Image source
 * @param size Image Card size on horizontal align
 * @param alt Alt attribute
 * @param onClick {Function} onClick Event
 * @param horizontal {boolean} Horizontal Card orientation
 * @param contain {boolean} Resize mode contain
 */
const CardImage = ({ src, size, alt, onClick, contain, ...others }: CardImageProps): JSX.Element => {
  const { horizontal } = useContext(CardContext)
  const maxSize = horizontal ? '50%' : '100%'
  const [ratio, setRatio] = useState(1)
  const cardContextValues = useContext(CardContext)

  const styles = StyleSheet.create({
    cardImage: {
      width: size ? `${size}0%` : maxSize,
      aspectRatio: ratio,
      resizeMode: contain ? 'contain' : 'cover',
      alignSelf: contain ? 'flex-end' : 'auto',
      marginBottom: 0,
      borderBottomRightRadius: (cardContextValues.horizontal && 1) || (cardContextValues.reversed && 8) || 0,
      borderBottomLeftRadius: (cardContextValues.horizontal && 8) || (cardContextValues.reversed && 8) || 0,
      borderTopRightRadius: (cardContextValues.horizontal && 1) || (cardContextValues.reversed && 1) || (cardContextValues.active && 5) || 8,
      borderTopLeftRadius: (cardContextValues.horizontal && 1) || (cardContextValues.reversed && 1) || (cardContextValues.active && 5) || 8,
    },
  })

  useEffect(() => {
    if (!cardContextValues.horizontal) {
      typeof src === 'string'
        ? Image.getSize(
            src,
            (w, h) => {
              h && setRatio(w / h)
            },
            () => setRatio(1),
          )
        : setRatio(1)
    }
  }, [src])

  const image = (
    <Image
      accessibilityLabel={alt}
      style={styles.cardImage}
      source={typeof src === 'number' ? src : { uri: src }}
      {...others}
    />
  )

  return onClick ? (
    <View>
      <TouchableOpacity onPress={onClick} activeOpacity={0.85}>
        {image}
      </TouchableOpacity>
    </View>
  ) : (
    image
  )
}

CardImage.displayName = ComponentName.CardImage

export default CardImage
