import { TabsContext } from '@/components/tabs/context'
import React from 'react'

export const useTabPanel = () => {
  try {
    const { activeIndex } = React.useContext(TabsContext)
    return { activeIndex }
  } catch {
    return {
      activeIndex: 0,
    }
  }
}
