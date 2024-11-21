'use client'
import React from 'react'

import { ToasterShowContext } from '@/components/alert/context/ToasterContextProps'

const emptyFn = () => 0

const ToasterContext = React.createContext<{ show: ToasterShowContext; hide:() => void }>({
  show: emptyFn,
  hide: emptyFn,
})

export default ToasterContext
