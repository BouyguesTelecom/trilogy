import React, { useEffect, useState } from 'react'
import { DropdownWebProps } from './DropdownProps'
import { is } from '../../services/classify'
import clsx from 'clsx'
import { hashClass } from '../../helpers'
import { useTrilogyContext } from '../../context'

interface IContextropdown {
  displayDropdown: boolean
}

const ContextDropdown = React.createContext<IContextropdown>({
  displayDropdown: false,
})

export const useDrodownContext = () => {
  const context = React.useContext(ContextDropdown)
  if (context === undefined) {
    throw new Error('useDropdownContext must be used within a DropdownProvider')
  }
  return context
}

/**
 * Dropdown Component
 * @param className {string} Additionnal CSS Classes
 * @param children {React.ReactNode} Dropdown Children
 * @param active {boolean} Activated Dropdown
 */
const Dropdown = ({ className, children, active, ...others }: DropdownWebProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const [displayDropdown, setDisplayDropdown] = useState<boolean>(active || false)
  const classes = hashClass(styled, clsx('dropdown', displayDropdown && is('active'), className))

  useEffect(() => {
    setDisplayDropdown(active || false)
  }, [active])

  return (
    <ContextDropdown.Provider value={{ displayDropdown }}>
      <div className={hashClass(styled, clsx('field'))}>
        <div className={hashClass(styled, clsx('control'))}>
          <div
            onClick={() => {
              setDisplayDropdown(!displayDropdown)
            }}
            className={classes}
            {...others}
          >
            {children}
          </div>
        </div>
      </div>
    </ContextDropdown.Provider>
  )
}

export default Dropdown
