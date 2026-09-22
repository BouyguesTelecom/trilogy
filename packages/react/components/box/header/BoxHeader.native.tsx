import { ComponentName } from '@/components/enumsComponentsName'
import { StatesContext } from '@/context/providerStates'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import * as React from 'react'
import { useContext } from 'react'
import { Text, View } from 'react-native'
import { memoStyles } from '@/helpers/memoStyles'
import { BoxContext } from '../context/boxContext'
import { BoxHeaderNativeRef, BoxHeaderProps } from './BoxHeaderProps'
import { Theme } from '@/constants/theme'

/**
 * Box Header Component
 * @param children {React.ReactNode} Children
 * @param variant {TrilogyColor} Box Header backgroundColor
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 */
const BoxHeader = React.forwardRef<BoxHeaderNativeRef, BoxHeaderProps>(
  ({ children, variant, testId, ...others }, ref): JSX.Element => {
    const statesContext = useContext(StatesContext)
    const boxContext = useContext(BoxContext)
    const headerBgc = variant ? getColorStyle(variant) : getColorStyle(TrilogyColor.MAIN)
    const textColor = getColorStyle(TrilogyColor.BACKGROUND)

    const styles = memoStyles({
      boxHeader: {
        width: '100%',
        backgroundColor: headerBgc,
        padding: 10,
        paddingLeft: 16,
        borderTopLeftRadius: boxContext?.highlighted ? 4 : Theme.radius.lg,
        borderTopRightRadius: Theme.radius.lg,
        marginTop: (statesContext.active && -2) || (statesContext.flat && -1) || 0,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
      },
      text: {
        color: textColor,
        fontSize: 15,
        fontWeight: '600',
      },
      helpContainer: {
        alignSelf: 'center',
      },
      help: {
        fontSize: 12,
        color: textColor,
        fontWeight: '600',
        lineHeight: 15,
      },
    })

    return (
      <View style={[styles.boxHeader]} ref={ref} testID={testId} {...others}>
        {children && typeof children.valueOf() === 'string' ? (
          <Text style={styles.text}>{String(children)}</Text>
        ) : (
          children
        )}
      </View>
    )
  },
)

BoxHeader.displayName = ComponentName.BoxHeader

export default BoxHeader
