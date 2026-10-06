import { ComponentName } from '@/components/enumsComponentsName'
import { getColorStyle } from '@/objects/facets/Color'
import { forwardRef, useContext } from 'react'
import { Text, View } from 'react-native'
import { memoStyles } from '@/helpers/memoStyles'
import { BoxFooterNativeRef, BoxFooterProps } from '@/components/box/footer/BoxFooterProps'
import { BoxContext } from '@/components/box/context/boxContext'
import { getPaddingStyle } from '@/objects/facets/Padding'

/**
 * Box Footer Component
 * @param children {ReactNode} Children
 * @param backgroundColor {TrilogyColor} Background for BoxFooter
 * @param testId {string} Test Id for Test Integration
 * @param id {string} Custom id attribute
 */
const BoxFooter = forwardRef<BoxFooterNativeRef, BoxFooterProps>(
  ({ children, backgroundColor, testId, ...others }, ref): JSX.Element => {
    const { padding } = useContext(BoxContext)

    const styles = memoStyles({
      boxFooter: {
        padding: getPaddingStyle(padding ?? 'md'),
        justifyContent: 'center',
        backgroundColor: backgroundColor ? getColorStyle(backgroundColor) : 'transparent',
      },
    })

    return (
      <View ref={ref} style={[styles.boxFooter]} testID={testId} {...others}>
        {children && typeof children.valueOf() === 'string' ? <Text>{String(children)}</Text> : children}
      </View>
    )
  },
)

BoxFooter.displayName = ComponentName.BoxFooter

export default BoxFooter
