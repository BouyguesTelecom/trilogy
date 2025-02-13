import { ComponentName } from '@/components/enumsComponentsName'
import { Title, TitleLevels } from '@/components/title'
import { getColorStyle, TrilogyColor } from '@/objects'
import * as React from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { ModalContext } from '../context'
import { ModalFooterProps } from './ModalFooterProps'

/**
 * Modal Footer Component
 * @param children {React.ReactNode}
 */
const ModalFooter = ({ children, ...others }: ModalFooterProps): JSX.Element => {
  const { setIsFooter } = React.useContext(ModalContext)

  React.useEffect(() => {
    setIsFooter(true)

    return () => {
      setIsFooter(false)
    }
  }, [])

  return (
    <View style={[styles.container]} {...others}>
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
}

ModalFooter.displayName = ComponentName.ModalFooter

export default ModalFooter

const styles = StyleSheet.create({
  container: {
    paddingBottom: Platform.OS === 'ios' ? 40 : 10,
    paddingTop: 16,
  },
  title: { width: '100%', textAlign: 'center' },
})
