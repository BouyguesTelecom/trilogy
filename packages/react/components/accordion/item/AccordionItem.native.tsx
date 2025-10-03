import { ComponentName } from '@/components/enumsComponentsName'
import { IconName } from '@/components/icon/IconNameEnum'
import { Icon, IconSize } from '@/components/icon/index.native'
import { Spacer, SpacerSize } from '@/components/spacer/index.native'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color/index.native'
import React, { isValidElement, useEffect, useRef, useState } from 'react'
import { Animated, Easing, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { AccordionItemNativeRef, AccordionItemProps } from './AccordionItemProps'

interface AccordionChild {
  header?: React.ReactNode
  body?: React.ReactNode
}

/**
 * Accordion Item Component
 * @param active {boolean} Active Accordion Item
 * @param id {string} id for accordion item
 * @param onClick {ClickEvent} onClick Event
 * @param disabled {boolean} Disabled AccordionItem
 * @param children
 */
const AccordionItem = React.forwardRef<AccordionItemNativeRef, AccordionItemProps>(
  ({ open, id, onClick, disabled, children, ...others }, ref): JSX.Element => {
    const [isActive, setIsActive] = useState<boolean>(Boolean(typeof open !== 'undefined' ? open : false))
    const animatedController = useRef(new Animated.Value(0)).current
    const [bodySectionHeight, setBodySectionHeight] = useState<number>(0)
    const [childs, setChilds] = useState<AccordionChild>({
      header: undefined,
      body: undefined,
    })

    const styles = StyleSheet.create({
      item: {
        width: '100%',
        padding: 5,
        borderRadius: 6,
        backgroundColor: disabled ? getColorStyle(TrilogyColor.DISABLED_FADE) : getColorStyle(TrilogyColor.BACKGROUND),
        borderWidth: 1,
        borderColor: (disabled && getColorStyle(TrilogyColor.DISABLED_FADE)) || getColorStyle(TrilogyColor.NEUTRAL),
      },
      bodyBackground: {
        borderRadius: 6,
        backgroundColor: getColorStyle(TrilogyColor.BACKGROUND),
        overflow: 'hidden',
      },
      titleContainer: {
        minWidth: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
        borderColor: getColorStyle(TrilogyColor.BACKGROUND),
      },
      bodyContainer: {
        padding: 10,
        paddingLeft: 10,
        paddingRight: 10,
        position: 'absolute',
        bottom: 0,
        borderRadius: 6,
        left: 0,
        right: 0,
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
      setIsActive(open || false)
    }, [open])

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
      open ? animatedController.setValue(1) : animatedController.setValue(0)
    }, [open])

    useEffect(() => {
      const newChilds: AccordionChild = {}
      if (Array.isArray(children)) {
        children.forEach((child) => {
          if (isValidElement(child) && child.type) {
            const childType = child.type as React.JSXElementConstructor<unknown> & {
              displayName?: string
              render?: { displayName?: string }
            }

            const childName = childType?.displayName || childType?.render?.displayName

            switch (childName) {
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
        <View style={styles.item} ref={ref}>
          <TouchableWithoutFeedback
            style={styles.item}
            testID={id || ''}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onPress={(e: any) => {
              if (!disabled) {
                toggleListItem()
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
                  color={disabled ? TrilogyColor.DISABLED : TrilogyColor.MAIN}
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
        <Spacer size={SpacerSize.TWO} />
      </>
    )
  },
)

AccordionItem.displayName = ComponentName.AccordionItem

export default AccordionItem
