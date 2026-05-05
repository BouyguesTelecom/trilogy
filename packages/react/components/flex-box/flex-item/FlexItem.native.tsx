import { ComponentName } from '@/components/enumsComponentsName'
import { FlexItemNativeRef, FlexItemProps } from '@/components/flex-box/flex-item/FlexItemProps'
import { getAlignStyle } from '@/objects/facets/Alignable'
import React from 'react'
import { View, ViewStyle } from 'react-native'
import { FlexBoxContext } from '../context'

/**
 * FlexItem Component - FlexBox Child
 * @param size {FlexItemSize} Size 1-12
 * @param children {React.ReactNode}
 * @param testId {string} Test Id for Test Integration
 * @param id {string} Custom id attribute
 * @param narrow {boolean} Narrow item
 * @param verticalAlign { 'start' | 'end' | 'center' | 'stretch' | 'baseline' } Vertical alignment of the item
 */
const FlexItem = React.forwardRef<FlexItemNativeRef, FlexItemProps>(
  ({ id, size, narrow, verticalAlign, children, testId, ...others }, ref) => {
    const { width, realGap, scrollable, childrenLength } = React.useContext(FlexBoxContext)
    const realSize = (size && typeof size === 'number' && size) || (size && size?.mobile) || 0

    const scrollableStyle: ViewStyle = React.useMemo(
      () => ({
        width: realSize
          ? (realSize / 12) * width - realGap * ((childrenLength - 1) / childrenLength)
          : narrow
          ? 'auto'
          : width - 2 * realGap,
      }),
      [realSize, narrow, width, realGap, childrenLength, realSize],
    )

    const noScrollableStyle: ViewStyle = React.useMemo(
      () => ({
        flex: narrow ? 0 : 1,
        flexGrow: realSize || narrow ? 0 : 1,
        flexShrink: narrow ? 1 : 0,
        flexBasis: realSize ? (realSize / 12) * width - realGap * ((childrenLength - 1) / childrenLength) : 'auto',
      }),
      [realSize, narrow, width, realGap, childrenLength, realSize],
    )

    return (
      <View
        testID={testId}
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
