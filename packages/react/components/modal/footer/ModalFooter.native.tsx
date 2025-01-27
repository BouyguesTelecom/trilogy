import { ComponentName } from '@/components/enumsComponentsName'
import { Title, TitleLevels } from '@/components/title'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import * as React from 'react'
import { View } from 'react-native'
import { ModalFooterProps } from './ModalFooterProps'

/**
 * Modal Footer Component
 * @param children {React.ReactNode}
 */
const ModalFooter = ({ children, ...others }: ModalFooterProps): JSX.Element => {
  return (
    <View
      {...others}
      style={{
        bottom: 0,
        width: '100%',
        paddingBottom: 40,
      }}
    >
      <View
        style={{ width: '100%', height: 16, marginTop: -16, backgroundColor: getColorStyle(TrilogyColor.BACKGROUND) }}
      />
      <View style={{ paddingHorizontal: 16 }}>
        {(typeof children === 'string' && (
          <Title level={TitleLevels.THREE} style={{ width: '100%', textAlign: 'center' }}>
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
