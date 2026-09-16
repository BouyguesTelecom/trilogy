import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconSize } from '@/components/icon'
import { IconName } from '@/components/icon/IconNameEnum'
import { Spacer, SpacerSize } from '@/components/spacer'
import { isValidElement, useCallback, useEffect, useMemo, useRef, useState, forwardRef } from 'react'
import { Animated, Easing, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { AccordionItemNativeRef, AccordionItemProps } from '@/components/accordion/item/AccordionItemProps'
import { TrilogyColor } from '@/interfaces/Color'
import { useTheme } from '@/hooks/useTheme'
import { THEME_TRILOGY } from '@trilogy-ds/react/theme'

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
 * @param children {React.ReactNode} Accordion item content (AccordionHeader and AccordionContent components)
 * @param testId {string} Test Id for Test Integration
 * @param open {boolean} Open state of the AccordionItem (for controlled behavior)
 */
const AccordionItem = forwardRef<AccordionItemNativeRef, AccordionItemProps>(
  ({ open, id, onClick, disabled, children, testId, ...others }, ref): JSX.Element => {
    const { theme, mode } = useTheme()
    const colorStyle = mode === 'dark' ? darkStyles : lightStyles

    const [isActive, setIsActive] = useState<boolean>(Boolean(typeof open !== 'undefined' ? open : false))
    const animatedController = useRef(new Animated.Value(0)).current
    const [bodySectionHeight, setBodySectionHeight] = useState<number>(0)
    const [childs, setChilds] = useState<AccordionChild>({
      header: undefined,
      body: undefined,
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

    const toggleListItem = useCallback(
      (e: any) => {
        if (disabled) return
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
        if (onClick) onClick(e)
        setIsActive((prev) => !prev)
      },
      [isActive, animatedController, disabled],
    )

    const onLayoutBody = useCallback((e: any) => {
      setBodySectionHeight(e.nativeEvent.layout.height)
    }, [])

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
        <View style={[styles.item, colorStyle.item, disabled && colorStyle.itemDisabled]} ref={ref}>
          <TouchableWithoutFeedback
            style={[styles.item, colorStyle.item, disabled && colorStyle.itemDisabled]}
            testID={id || testId || ''}
            onPress={toggleListItem}
            {...others}
          >
            <View style={[styles.titleContainer, colorStyle.titleContainer]}>
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
          <Animated.View style={[styles.bodyBackground, colorStyle.bodyBackground, { height: bodyHeight }]}>
            <View style={styles.bodyContainer} onLayout={onLayoutBody}>
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

const styles = StyleSheet.create({
  item: {
    width: '100%',
    padding: 5,
    borderWidth: 1,
    borderRadius: THEME_TRILOGY.radius.radiusSm,
  },
  bodyBackground: {
    borderRadius: THEME_TRILOGY.radius.radiusSm,
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
  },
  bodyContainer: {
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
    position: 'absolute',
    bottom: 0,
    borderRadius: THEME_TRILOGY.radius.radiusSm,
    left: 0,
    right: 0,
  },
})

const lightStyles = StyleSheet.create({
  item: {
    backgroundColor: THEME_TRILOGY.colors.light.bgPrimary,
    borderColor: THEME_TRILOGY.colors.light.border,
  },
  itemDisabled: {
    backgroundColor: THEME_TRILOGY.colors.light.bgDisabled,
    borderColor: THEME_TRILOGY.colors.light.borderDisabled,
  },
  bodyBackground: {
    backgroundColor: THEME_TRILOGY.colors.light.bgPrimary,
  },
  titleContainer: {
    borderColor: THEME_TRILOGY.colors.light.bgPrimary,
  },
})

const darkStyles = StyleSheet.create({
  item: {
    backgroundColor: THEME_TRILOGY.colors.dark.bgPrimary,
    borderColor: THEME_TRILOGY.colors.dark.border,
  },
  itemDisabled: {
    backgroundColor: THEME_TRILOGY.colors.dark.bgDisabled,
    borderColor: THEME_TRILOGY.colors.dark.borderDisabled,
  },
  bodyBackground: {
    backgroundColor: THEME_TRILOGY.colors.dark.bgPrimary,
  },
  titleContainer: {
    borderColor: THEME_TRILOGY.colors.dark.bgPrimary,
  },
})
