import React, { createContext, useContext, useState, ReactNode } from 'react'

interface DropdownContextType {
  isOpen: boolean
  toggle: () => void
  open: () => void
  close: () => void
}

const DropdownContext = createContext<DropdownContextType | undefined>(undefined)

export const useDropdownContext = () => {
  const context = useContext(DropdownContext)
  if (!context) {
    throw new Error('useDropdownContext must be used within a DropdownProvider')
  }
  return context
}

interface DropdownProviderProps {
  children: ReactNode
  defaultOpen?: boolean
  onToggle?: (isOpen: boolean) => void
}

export const DropdownProvider: React.FC<DropdownProviderProps> = ({
  children,
  defaultOpen = false,
  onToggle,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const toggle = () => {
    const newState = !isOpen
    setIsOpen(newState)
    onToggle?.(newState)
  }

  const open = () => {
    setIsOpen(true)
    onToggle?.(true)
  }

  const close = () => {
    setIsOpen(false)
    onToggle?.(false)
  }

  const value = {
    isOpen,
    toggle,
    open,
    close,
  }

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  )
}
