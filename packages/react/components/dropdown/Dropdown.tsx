import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { ComponentName } from '../enumsComponentsName'
import { DropdownProps, DropdownRef } from './DopdownProps'

const Dropdown = React.forwardRef<DropdownRef, DropdownProps>(
  ({ className, id, trigger, children, ...others }, ref): JSX.Element => {
    const [visible, setVisible] = useState<boolean>(false)
    const { styled } = useTrilogyContext()
    const classes = hashClass(styled, clsx('dropdown', className))
    const classesContent = hashClass(styled, clsx('dropdown-content', visible && 'open'))
    const portalClasses = hashClass(styled, 'dropdown-portal')

    return (
      <>
        <div ref={ref} id={id} className={classes} {...others}>
          {trigger && React.cloneElement(trigger as React.ReactElement, { onClick: () => setVisible(true) })}
          <div className={classesContent} tabIndex={0}>
            {children}
          </div>
        </div>
        {visible &&
          ReactDOM.createPortal(
            <div role='presentation' className={portalClasses} onClick={() => setVisible(false)} />,
            document.body,
          )}
      </>
    )
  },
)
Dropdown.displayName = ComponentName.Dropdown
export default Dropdown
