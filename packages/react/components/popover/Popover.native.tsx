import { ComponentName } from '@/components/enumsComponentsName'
import { getColorStyle, TrilogyColor } from '@/objects/index.native'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { PopoverDirection } from './PopoverEnum'
import { PopoverNativeRef, PopoverProps } from './PopoverProps'

/**
 * Popover Component
 * @param children {ReactNode} Popover children
 * @param direction {PopoverDirection} Popover direction (DOWN|LEFT|RIGHT)
 * @param content {ReactNode} Content of the popover (hidden popover if null|undefined)
 * @param active {boolean} Is the popover active
 */
const Popover = React.forwardRef<PopoverNativeRef, PopoverProps>(
  ({ children, active = false, direction }, ref): JSX.Element => {
    const styles = StyleSheet.create({
      container: {
        alignItems: 'center',
      },
      popover: {
        minWidth: 50,
        minHeight: 30,
        backgroundColor: getColorStyle(TrilogyColor.MAIN),
        borderRadius: 6,
        justifyContent: 'center',
        padding: 5,
      },
      arrow: {
        width: 10,
        height: 10,
      },
      arrowBottom: {
        borderTopColor: getColorStyle(TrilogyColor.MAIN),
        borderTopWidth: 10,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
      },
      arrowTop: {
        borderBottomColor: getColorStyle(TrilogyColor.MAIN),
        borderBottomWidth: 10,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
      },
      arrowLeft: {
        borderTopWidth: 8,
        borderBottomWidth: 8,
        borderLeftWidth: 0,
        borderRightWidth: 8,
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: getColorStyle(TrilogyColor.MAIN),
      },
      arrowRight: {
        borderTopWidth: 8,
        borderBottomWidth: 8,
        borderLeftWidth: 8,
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
