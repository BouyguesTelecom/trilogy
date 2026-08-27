import * as React from 'react'
import { PopoverNativeRef, PopoverProps } from '@/components/popover/PopoverProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { StyleSheet, View } from 'react-native'
import { PopoverDirection } from '@/components/popover/PopoverEnum'
import { getColorStyle } from "@/helpers/color";
import { TrilogyColor } from "@/interfaces/Color";
import { getRadiusStyle } from "@/helpers/radius";
import { Radius } from "@/interfaces/Radius";

/**
 * Popover Component
 * @param children {ReactNode} Popover content
 * @param direction {PopoverDirection} Popover direction (DOWN|LEFT|RIGHT)
 * @param active {boolean} Is the popover active
 */
const Popover = React.forwardRef<PopoverNativeRef, PopoverProps>(
  ({ children, active = false, direction }, ref): JSX.Element => {
    const borderSmallRadius = getRadiusStyle(Radius.SMALL)
    const borderMediumRadius = getRadiusStyle(Radius.MEDIUM)

    const styles = StyleSheet.create({
      container: {
        alignItems: 'center',
      },
      popover: {
        minWidth: 50,
        minHeight: 30,
        backgroundColor: getColorStyle(TrilogyColor.MAIN),
        borderRadius: borderSmallRadius,
        justifyContent: 'center',
        padding: 5,
      },
      arrow: {
        width: 10,
        height: 10,
      },
      arrowBottom: {
        borderTopColor: getColorStyle(TrilogyColor.MAIN),
        borderTopWidth: borderMediumRadius,
        borderLeftWidth: borderMediumRadius,
        borderRightWidth: borderMediumRadius,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
      },
      arrowTop: {
        borderBottomColor: getColorStyle(TrilogyColor.MAIN),
        borderBottomWidth: borderMediumRadius,
        borderLeftWidth: borderMediumRadius,
        borderRightWidth: borderMediumRadius,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
      },
      arrowLeft: {
        borderTopWidth: borderMediumRadius,
        borderBottomWidth: borderMediumRadius,
        borderLeftWidth: 0,
        borderRightWidth: borderMediumRadius,
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: getColorStyle(TrilogyColor.MAIN),
      },
      arrowRight: {
        borderTopWidth: borderMediumRadius,
        borderBottomWidth: borderMediumRadius,
        borderLeftWidth: borderMediumRadius,
        borderRightWidth: 0,
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: getColorStyle(TrilogyColor.MAIN),
        borderRightColor: 'transparent',
      },
    })

    if (active && (direction === PopoverDirection.LEFT || direction === PopoverDirection.RIGHT)) {
      return (
        <View
          ref={ref}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {direction === PopoverDirection.RIGHT && (
            <>
              {children}
              <View style={active ? [styles.arrow, styles.arrowLeft] : {}} />
            </>
          )}
          {direction === PopoverDirection.LEFT && (
            <>
              <View style={active ? [styles.arrow, styles.arrowRight] : {}} />
              {children}
            </>
          )}
        </View>
      )
    }

    if (active && (direction === PopoverDirection.BOTTOM || !direction)) {
      return (
        <View ref={ref}>
          {direction === PopoverDirection.BOTTOM && <View>{children}</View>}
          <View style={styles.container}>
            {direction === PopoverDirection.BOTTOM && <View style={active ? [styles.arrow, styles.arrowTop] : {}} />}
            {!direction && <View style={active ? [styles.arrow, styles.arrowBottom] : {}} />}
          </View>
          {!direction && <View>{children}</View>}
        </View>
      )
    }

    return <View ref={ref}>{children}</View>
  },
)

Popover.displayName = ComponentName.Popover

export default Popover
