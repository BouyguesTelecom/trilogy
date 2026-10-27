import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconColor, IconSize } from '@/components/icon'
import { IconName } from '@/components/icon/IconNameEnum'
import { Spacer, SpacerSize } from '@/components/spacer'
import {
  Children,
  isValidElement,
  useEffect,
  useMemo,
  useState,
  JSXElementConstructor,
  ReactNode,
  forwardRef,
  useCallback,
} from 'react'
import { GestureResponderEvent, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import Animated, {
  Easing,
  LinearTransition,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { AccordionItemNativeRef, AccordionItemProps } from '@/components/accordion/item/AccordionItemProps'
import { useBackgroundColor } from '@/hooks/useBackgroundColor'
import { useBorderColor } from '@/hooks/useBorderColor'
import { useInputBorderColor } from '@/hooks/useInputBorderColor'
import { useThemeSelector } from '@/hooks/useThemeSelector'
import { BackgroundColor, BorderColor, InputBg, InputBorderColor } from '@/interfaces/colors'
import { useInputBg } from '@/hooks/useInputBg'

interface AccordionChild {
  header?: ReactNode
  body?: ReactNode
}

const animationConfig = {
  duration: 300,
  easing: Easing.inOut(Easing.ease),
}
const layoutTransition = LinearTransition.duration(animationConfig.duration).easing(animationConfig.easing)

/**
 * Accordion Item Component
 * @param active {boolean} Active Accordion Item
 * @param id {string} id for accordion item
 * @param onClick {ClickEvent} onClick Event
 * @param disabled {boolean} Disabled AccordionItem
 * @param children {ReactNode} Accordion item content (AccordionHeader and AccordionContent components)
 * @param testId {string} Test Id for Test Integration
 * @param open {boolean} Open state of the AccordionItem (for controlled behavior)
 */
const AccordionItem = forwardRef<AccordionItemNativeRef, AccordionItemProps>(
  ({ open, id, onClick, disabled, children, testId, ...others }, ref): JSX.Element => {
    const [isActive, setIsActive] = useState(Boolean(open))
    const rotation = useSharedValue(open ? 180 : 0)
    const arrowStyle = useAnimatedStyle(() => ({
      transform: [{ rotateZ: `${rotation.value}deg` }],
    }))

    const childs = useMemo(() => {
      const result: AccordionChild = {}
      Children.forEach(children, (child) => {
        if (!isValidElement(child)) return
        const childType = child.type as JSXElementConstructor<unknown> & {
          displayName?: string
          render?: { displayName?: string }
        }
        const name = childType.displayName || childType.render?.displayName
        if (name === ComponentName.AccordionHeader) result.header = child
        if (name === ComponentName.AccordionBody) result.body = child
      })
      return result
    }, [children])

    const backgroundDisabled = useInputBg(InputBg.DISABLED)
    const borderDisabled = useInputBorderColor(InputBorderColor.DISABLED)
    const backgroundColor = useBackgroundColor(BackgroundColor.PRIMARY)
    const borderColor = useBorderColor(BorderColor.PRIMARY)
    const borderRadius = useThemeSelector((theme) => theme.radius.radiusMd)

    const themeStyles = useMemo(
      () => ({
        item: {
          borderRadius,
          backgroundColor: disabled ? backgroundDisabled : backgroundColor,
          borderColor: disabled ? borderDisabled : borderColor,
        },
        bodyBackground: { borderRadius, backgroundColor },
        titleContainer: { borderColor: backgroundColor },
        bodyContainer: { borderRadius },
      }),
      [backgroundColor, backgroundDisabled, borderDisabled, borderColor, borderRadius, disabled],
    )

    const onPress = useCallback(
      (e: GestureResponderEvent) => {
        if (!disabled) {
          setIsActive((active) => !active)
          if (onClick) onClick(e as any)
        }
      },
      [disabled, onClick],
    )

    useEffect(() => {
      setIsActive(Boolean(open))
    }, [open])

    useEffect(() => {
      rotation.value = withTiming(isActive ? 180 : 0, animationConfig)
    }, [isActive, rotation])

    return (
      <Animated.View layout={layoutTransition} style={[styles.item, themeStyles.item]} ref={ref}>
        <TouchableWithoutFeedback
          disabled={disabled}
          accessibilityRole='button'
          accessibilityState={{ expanded: isActive, disabled: Boolean(disabled) }}
          testID={id || testId || ''}
          onPress={onPress}
          {...others}
        >
          <View style={[styles.titleContainer, themeStyles.titleContainer]}>
            {childs.header && <View>{childs.header}</View>}
            <Animated.View style={arrowStyle}>
              <Icon
                name={IconName.ARROW_DOWN}
                size={IconSize.SMALLER}
                color={disabled ? IconColor.DISABLED : IconColor.PRIMARY}
              />
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
        <Animated.View
          layout={layoutTransition}
          style={[styles.bodyBackground, themeStyles.bodyBackground, !isActive && styles.collapsed]}
          pointerEvents={isActive ? 'auto' : 'none'}
          accessibilityElementsHidden={!isActive}
          importantForAccessibility={isActive ? 'auto' : 'no-hide-descendants'}
        >
          <View style={[styles.bodyContainer, themeStyles.bodyContainer]}>
            {childs.body && <View>{childs.body}</View>}
          </View>
        </Animated.View>
      </Animated.View>
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
  },
  bodyBackground: {
    overflow: 'hidden',
  },
  collapsed: {
    height: 0,
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
  },
})
