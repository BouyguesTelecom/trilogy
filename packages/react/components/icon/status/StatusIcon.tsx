import clsx from 'clsx'
import React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { IconStatus } from '@/components/icon/IconEnum'
import { IconName } from '@/components/icon/IconNameEnum'
import { IconProps } from '@/components/icon/IconProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { has, is } from '@/services/index'

const StatusIcon = React.forwardRef(
  (
    { className, name, status, statusPosition, size, testId }: IconProps,
    ref: React.Ref<HTMLDivElement>,
  ): JSX.Element => {
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
      <span className={ancestorClasses} aria-hidden='true' data-testid={testId} ref={ref}>
        <span className={hashClass(clsx(name))}></span>
        <span className={descendantClasses}>
          <i className={descendantIcon} />
        </span>
      </span>
    )
  },
)

StatusIcon.displayName = ComponentName.StatusIcon
export default StatusIcon
