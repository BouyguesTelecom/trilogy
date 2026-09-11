import { ComponentName } from '@/components/enumsComponentsName'
import { Title, TitleLevels } from '@/components/title'
import { isIOS } from '@/helpers/device.native'
import { getColorStyle, TrilogyColor } from '@/objects'
import * as React from 'react'
import { View } from 'react-native'
import { memoStyles } from '@/helpers/memoStyles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ModalContext } from '../context'
import { ModalFooterProps, ModalFooterNativeRef } from './ModalFooterProps'

/**
 * Modal Footer Component
 * @param children {React.ReactNode}
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 */
const ModalFooter = React.forwardRef<ModalFooterNativeRef, ModalFooterProps>(({ children, testId, ...others }, ref): JSX.Element => {
  const { setIsFooter } = React.useContext(ModalContext)
  const insets = useSafeAreaInsets()
  const bottomPadding = isIOS ? Math.max(40, insets.bottom) : 18

  React.useEffect(() => {
    setIsFooter(true)

    return () => {
      setIsFooter(false)
    }
  }, [])

  return (
    <View ref={ref} style={[styles.container, { paddingBottom: bottomPadding }]} testID={testId} {...others}>
      <View style={[{ backgroundColor: getColorStyle(TrilogyColor.BACKGROUND) }]}>
        {(typeof children === 'string' && (
          <Title level={TitleLevels.THREE} style={styles.title}>
            {children}
          </Title>
        )) ||
          children}
      </View>
    </View>
  )
})

ModalFooter.displayName = ComponentName.ModalFooter

export default ModalFooter

const styles = memoStyles({
  container: {
    paddingBottom: isIOS ? 40 : 18,
    paddingTop: 16,
  },
  title: { width: '100%', textAlign: 'center' },
})
