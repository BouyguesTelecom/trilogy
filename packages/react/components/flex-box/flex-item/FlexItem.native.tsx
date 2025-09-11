import { ComponentName } from '@/components/enumsComponentsName'
import { FlexItemNativeRef, FlexItemProps } from '@/components/flex-box/flex-item/FlexItemProps'
import { getAlignStyle } from '@/objects/facets/Alignable'
import React from 'react'
import { View, ViewStyle } from 'react-native'
import { FlexBoxContext } from '../context'

/**
 * FlexItem Component - FlexBox Child
 * @param size {FlexItemSize} Size 1-12
 * @param verticalCentered {boolean} Vertical center item
 * @param centered {boolean} center item
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param narrow {boolean} Narrow item
 * @param className {string} Additional CSS Classes
 * @param mobileSize {FlexItemSize} Apply => is-size-mobile
 * @param tabletSize {FlexItemSize} Apply => is-size-tablet
 * @param touchSize {FlexItemSize} Apply => is-size-touch
 * @param desktopSize {FlexItemSize} Apply => is-size-desktop
 * @param widescreenSize {FlexItemSize} Apply => is-size-widescreen
 * @param fullhdSize {FlexItemSize} Apply => is-size-fullhd
 * @param offset {FlexItemSize} Apply => is-offset
 * @param mobileOffset {FlexItemSize} Apply => is-offset-mobile
 * @param tabletOffset {FlexItemSize} Apply => is-offset-tablet
 * @param touchOffset {FlexItemSize} Apply => is-offset-touch
 * @param desktopOffset {FlexItemSize} Apply => is-offset-desktop
 * @param widescreenOffset {FlexItemSize} Apply => is-offset-widescreen
 * @param fullhdOffset {FlexItemSize} Apply => is-offset-fullhd
 * @param align { Alignable | AlignableValues} align content
 */

const FlexItem = React.forwardRef<FlexItemNativeRef, FlexItemProps>(
  ({ id, size, narrow, verticalAlign, children, ...others }, ref) => {
    const { width, realGap, scrollable, childrenLength } = React.useContext(FlexBoxContext)

    const realSize = (size && typeof size === 'number' && size) || (size && size?.mobile) || 0

    const scrollableStyle: ViewStyle = React.useMemo(
      () => ({
        width: size
          ? (realSize / 12) * width - realGap * ((childrenLength - 1) / childrenLength)
          : narrow
          ? 'auto'
          : width - 2 * realGap,
      }),
      [size, narrow, width, realGap, childrenLength],
    )

    const noScrollableStyle: ViewStyle = React.useMemo(
      () => ({
        flex: narrow ? 0 : 1,
        flexGrow: size || narrow ? 0 : 1,
        flexShrink: narrow ? 1 : 0,
        flexBasis: size ? (realSize / 12) * width - realGap * ((childrenLength - 1) / childrenLength) : 'auto',
      }),
      [size, narrow, width, realGap, childrenLength],
    )

    return (
      <View
        id={id}
        ref={ref}
        style={[
          scrollable && scrollableStyle,
          !scrollable && noScrollableStyle,
          { justifyContent: getAlignStyle(verticalAlign) },
        ]}
        {...others}
      >
        {children}
      </View>
    )
  },
)
FlexItem.displayName = ComponentName.FlexItem
export default FlexItem
