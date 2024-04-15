import clsx from 'clsx'
import React from 'react'
import { has } from '../../../services/classify'
import { Icon, IconName } from '../../icon'
import { InfoBlockStatus } from '../InfoBlockEnum'
import { InfoBlockHeaderProps } from './InfoBlockHeaderProps'
import { hashClass } from '../../../helpers/hashClassesHelpers'
import { useTrilogyContext } from '../../../context/index'
import { Text, TextLevels } from '../../text'
import { TypographyBold } from '../../../objects/Typography/TypographyBold'

/**
 * Info Block Header
 * @param children {string} Header title content
 * @param status {InfoBlockStatus} Icon + status for header => SUCCESS|WARNING|ERROR
 * @param customIcon {IconName} Custom Icon for Info Block Header, if CustomIcon status props wont work
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const InfoBlockHeader = ({ className, status, children, customIcon, ...others }: InfoBlockHeaderProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx('info-block-header', has('text-centered'), className))

  const _iconName = React.useMemo(() => {
    if (customIcon != null) return customIcon
    else if (status === InfoBlockStatus.WARNING) return IconName.EXCLAMATION_CIRCLE
    else if (status === InfoBlockStatus.ERROR) return IconName.TIMES
    else return IconName.CHECK_CIRCLE
  }, [status, customIcon])

  return (
    <header className={classes} {...others}>
      {customIcon && !status ? (
        customIcon
      ) : (
        <Icon
          name={_iconName as IconName}
          className={clsx(
            'is-large',
            status === InfoBlockStatus.ERROR && 'is-error',
            status === InfoBlockStatus.WARNING && 'is-warning',
            status === InfoBlockStatus.SUCCESS && 'is-success',
          )}
        />
      )}

      <span>
        {children && typeof children.valueOf() === 'string' ? (
          <Text level={TextLevels.ONE} typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}>
            {children}
          </Text>
        ) : (
          children
        )}
      </span>
    </header>
  )
}

export default InfoBlockHeader
