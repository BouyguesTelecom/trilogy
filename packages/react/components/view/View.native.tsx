import { ComponentName } from '@/components/enumsComponentsName'
import { getColorStyle } from '@/objects/facets/Color'
import { getAlignStyle, getJustifyStyle, TrilogyColor } from '@/objects/index'
import * as React from 'react'
import { ImageBackground, StyleSheet, TouchableOpacity, View as ViewNative } from 'react-native'
import { ViewNativeRef, ViewProps } from './ViewProps'

/**
 * View Component (DIV EQUIVALENT)
 * @param children {ReactNode} View child
 * @param flexable {boolean} Flexable view
 * @param style {CSSProperties} View custom style
 * @param onClick {Function} Click Event
 * @param backgroundColor {TrilogyColor} View backgroud color
 * @param backgroundSrc {string} View backgroud image source
 * @param id {string} Id for Web / TestID for Native
 * @param fullwidth {boolean} true by default
 * @param justify {JustifiableProps.justify?} Justifiable | "JUSTIFIED_CENTER" | "JUSTIFIED_START" | "JUSTIFIED_END" | "SPACE_BETWEEN" | undefined
 * @param align {AlignableProps.center?} AlignableProps | "ALIGNED_CENTER" | "ALIGNED_START" | "ALIGNED_END" | undefined
 * @param bottom {boolean} Bottom position
 */
const View = React.forwardRef<ViewNativeRef, ViewProps>(
  (
    {
      children,
      style,
      onClick,
      flexable,
      bottom,
      backgroundColor,
      backgroundSrc,
      id,
      justify,
      fullwidth = true,
      align,
      ...others
    },
    ref,
  ): JSX.Element => {
    const viewColor = (backgroundColor && getColorStyle(backgroundColor as TrilogyColor)) || 'transparent'

    const styles = StyleSheet.create({
      view: {
        flex: flexable ? 1 : 0,
        backgroundColor: viewColor,
        width: fullwidth ? '100%' : 'auto',
        ...(justify && { justifyContent: getJustifyStyle(justify) }),
        ...(align && { alignItems: getAlignStyle(align) }),
      },
      bottom: {
        position: 'absolute',
        bottom: 0,
        width: fullwidth ? '100%' : 'auto',
      },
      sectionImage: {
        flex: flexable ? 1 : 0,
        width: '100%',
        height: 'auto',
      },
    })

    let returnView = (
      <ViewNative ref={ref} testID={id} nativeID={id} style={[styles.view, bottom && styles.bottom, style]} {...others}>
        {children}
      </ViewNative>
    )
    if (!children) {
      returnView = (
        <ViewNative
          ref={ref}
          testID={id}
          nativeID={id}
          style={[styles.view, bottom && styles.bottom, style]}
          {...others}
        />
      )
    }

    if (onClick) {
      returnView = (
        <ViewNative
          ref={ref}
          testID={id}
          nativeID={id}
          style={[styles.view, bottom && styles.bottom, style]}
          {...others}
        >
          <TouchableOpacity activeOpacity={1} onPress={onClick}>
            {children}
          </TouchableOpacity>
        </ViewNative>
      )
    }

    return backgroundSrc ? (
      <ImageBackground
        style={styles.sectionImage}
        source={typeof backgroundSrc === 'number' ? backgroundSrc : { uri: backgroundSrc }}
      >
        {returnView}
      </ImageBackground>
    ) : (
      returnView
    )
  },
)

View.displayName = ComponentName.View

export default View
