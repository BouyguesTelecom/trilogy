import { ComponentName } from '@/components/enumsComponentsName'
import { Title, TitleLevels } from '@/components/title/index.native'
import { isIOS } from '@/helpers/device/index.native'
import { getColorStyle, TrilogyColor } from '@/objects/index.native'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { ModalContext } from '../context'
import { ModalFooterNativeRef, ModalFooterProps } from './ModalFooterProps'

/**
 * Modal Footer Component
 * @param children {React.ReactNode}
 */
const ModalFooter = React.forwardRef<ModalFooterNativeRef, ModalFooterProps>(
  ({ children, ...others }, ref): JSX.Element => {
    const { setIsFooter } = React.useContext(ModalContext)

    React.useEffect(() => {
      setIsFooter(true)

      return () => {
        setIsFooter(false)
      }
    }, [])

    return (
      <View ref={ref} style={[styles.container]} {...others}>
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
  },
)

ModalFooter.displayName = ComponentName.ModalFooter

export default ModalFooter

const styles = StyleSheet.create({
  container: {
    paddingBottom: isIOS ? 40 : 18,
    paddingTop: 16,
  },
  title: { width: '100%', textAlign: 'center' },
})
