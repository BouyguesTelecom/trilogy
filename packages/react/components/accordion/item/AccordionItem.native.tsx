import React, { useEffect, useRef, useState } from 'react'
import { Animated, Easing, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { AccordionItemProps } from './AccordionItemProps'
import { getColorStyle, TrilogyColor } from '../../../objects/facets/Color'
import { hasDisplayName } from './AccordionItem.helper'
import { IconName } from '../../icon/IconNameEnum'
import { Spacer, SpacerSize } from '../../spacer'
import { Icon, IconSize } from '../../icon'
import { ComponentName } from '../../enumsComponentsName'

interface AccordionChild {
  header?: React.ReactNode
  body?: React.ReactNode
}

/**
 * Accordion Item Component
 * @param active {boolean} Active Accordion Item
 * @param id {string} id for accordion item
 * @param onClick {ClickEvent} onClick Event
 * @param onOpen {Function} onOpen Accordion Item Function
 * @param onClose {Function} onClose Accordion Item Function
 * @param disabled {boolean} Disabled AccordionItem
 * @param children
 */
const AccordionItem = ({
                         active,
                         id,
                         onClick,
                         disabled,
                         onOpen,
                         onClose,
                         children,
                         ...others
                       }: AccordionItemProps): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(Boolean(typeof active !== 'undefined' ? active : false))
  const animatedController = useRef(new Animated.Value(0)).current
  const [bodySectionHeight, setBodySectionHeight] = useState<number>(0)
  const [childs, setChilds] = useState<AccordionChild>({ header: undefined, body: undefined })

  const styles = StyleSheet.create({
    item: {
      width: '100%',
      padding: 5,
      borderRadius: 6,
      backgroundColor: getColorStyle(TrilogyColor.WHITE),
      borderWidth: 1,
      borderColor: isActive ? getColorStyle(TrilogyColor.MAIN) : getColorStyle(TrilogyColor.GREY_LIGHT),
    },
    bodyBackground: {
      borderRadius: 6,
      backgroundColor: getColorStyle(TrilogyColor.WHITE),
      overflow: 'hidden',
    },
    titleContainer: {
      minWidth: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 5,
      paddingBottom: 5,
      borderColor: getColorStyle(TrilogyColor.WHITE),
    },
    bodyContainer: {
      padding: 10,
      paddingLeft: 10,
      paddingRight: 10,
      position: 'absolute',
      bottom: 0,
      borderRadius: 6,
    },
  })

  const bodyHeight = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, bodySectionHeight],
  })

  const arrowAngle = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0rad', `${Math.PI}rad`],
  })

  useEffect(() => {
    setIsActive(active || false)
  }, [active])

  const toggleListItem = () => {
    if (isActive) {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 0,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start()
    } else {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 1,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start()
    }
    setIsActive(!isActive)
  }

  useEffect(() => {
    active ? animatedController.setValue(1) : animatedController.setValue(0)
  }, [active])

  useEffect(() => {
    const newChilds: AccordionChild = {}
    if (Array.isArray(children)) {
      children.forEach((child) => {
        if (
          child &&
          typeof child === 'object' &&
          'type' in child &&
          typeof child.type === 'function' &&
          hasDisplayName(child.type)
        ) {
          switch (child.type.displayName) {
            case 'AccordionHeader':
              newChilds.header = child
              break
            case 'AccordionBody':
              newChilds.body = child
              break
            default:
              break
          }
        }
      })
      setChilds(newChilds)
    }
  }, [children])

  return (
    <>
      <View style={styles.item}>
        <TouchableWithoutFeedback
          style={styles.item}
          testID={id || ''}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onPress={(e: any) => {
            if (!disabled) {
              toggleListItem()
              if (onOpen && !isActive) onOpen(e)
              if (onClose && isActive) onClose(e)
              if (onClick) onClick(e)
            }
          }}
          {...others}
        >
          <View style={styles.titleContainer}>
            {childs.header && <View>{childs.header}</View>}
            <Animated.View style={{ transform: [{ rotateZ: arrowAngle }] }}>
              <Icon
                name={IconName.ARROW_DOWN}
                size={IconSize.SMALLER}
                color={isActive ? TrilogyColor.MAIN : TrilogyColor.GREY_DARK}
              />
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
        <Animated.View style={[styles.bodyBackground, { height: bodyHeight }]}>
          <View
            style={styles.bodyContainer}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onLayout={(e: any) => {
              setBodySectionHeight(e.nativeEvent.layout.height)
            }}
          >
            {childs.body && <View>{childs.body}</View>}
          </View>
        </Animated.View>
      </View>
      <Spacer size={SpacerSize.SMALL}/>
    </>
  )
}

AccordionItem.displayName = ComponentName.AccordionItem

export default AccordionItem
