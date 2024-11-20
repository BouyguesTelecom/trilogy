import React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import { ModalTitleProps } from '@/components/modal/title/ModalTitleProps'
import { Title, TitleLevels } from '@/components/title'
import { View } from '@/components/view'

const styles = {
  padding: 8,
  position: 'sticky',
  top: '0px',
  width: '100%',
}

/**
 * Modal Title Component
 * @param children {string}
 * @param iconName {IconName} IconName for icon title
 * @param iconColor {IconColor} IconColor for icon title
 */
const ModalTitle = ({ children, iconName, iconColor, ...others }: ModalTitleProps): JSX.Element => {
  return (
    <View style={styles} {...others}>
      {(typeof children === 'string' && (
        <Title level={TitleLevels.THREE}>
          {iconName && <Icon color={iconColor} size={'large'} name={iconName} />}
          {children}
        </Title>
      )) ||
        children}
    </View>
  )
}

ModalTitle.displayName = ComponentName.ModalTitle

export default ModalTitle
