import { IconStatus } from '@/components/icon/IconEnum'
import { IconName } from '@/components/icon/IconNameEnum'
import { IconProps } from '@/components/icon/IconProps'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { has, is } from '@/services/index'
import clsx from 'clsx'
import * as React from 'react'

const StatusIcon = ({ className, name, status, statusPosition, size, testId }: IconProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const ancestorClasses = hashClass(clsx('icon', size && is(`${size}`), is('ancestor'), has('status'), className))
  const descendantClasses = hashClass(
    clsx(
      'icon is-circled is-descendant',
      status && is(`${status.toLowerCase()}`),
      statusPosition && is(`${statusPosition}`),
    ),
  )
  const descendantIcon = hashClass(clsx(status === IconStatus.SUCCESS ? IconName.CHECK_CIRCLE : IconName.TIMES))

  return (
    <span className={ancestorClasses} aria-hidden='true' data-testid={testId}>
      <span className={hashClass(clsx(name))}></span>
      <span className={descendantClasses}>
        <i className={descendantIcon} />
      </span>
    </span>
  )
}

export default StatusIcon
