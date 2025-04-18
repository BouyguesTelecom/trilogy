import { CardContext } from '@/components/card/Card.native'
import { ComponentName } from '@/components/enumsComponentsName'
import React, { useContext, useEffect, useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { CardImageNativeRef, CardImageProps } from './CardImageProps'

/**
 * Card Image Component
 * @param src Image source
 * @param size Image Card size on horizontal align
 * @param alt Alt attribute
 * @param onClick {Function} onClick Event
 * @param horizontal {boolean} Horizontal Card orientation
 * @param contain {boolean} Resize mode contain
 */
const CardImage = React.forwardRef<CardImageNativeRef, CardImageProps>(
  ({ src, size, alt, onClick, contain, ...others }, ref): JSX.Element => {
    const { horizontal } = useContext(CardContext)
    const maxSize = horizontal ? '50%' : '100%'
    const [ratio, setRatio] = useState(1)

    const styles = StyleSheet.create({
      cardImage: {
        width: size ? `${size}0%` : maxSize,
        aspectRatio: horizontal ? undefined : ratio,
        resizeMode: contain ? 'contain' : 'cover',
        alignSelf: contain ? 'flex-end' : 'auto',
        marginBottom: 0,
        height: horizontal ? 'auto' : undefined,
      },
    })

    useEffect(() => {
      if (!horizontal) {
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
    }, [src, horizontal])

    const image = (
      <Image
        ref={ref}
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
  },
)

CardImage.displayName = ComponentName.CardImage

export default CardImage
