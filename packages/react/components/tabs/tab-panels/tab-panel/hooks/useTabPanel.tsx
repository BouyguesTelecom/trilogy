import { TabsContext } from '@/components/tabs/context'
import { isServer } from '@/helpers/isServer'
import React from 'react'

export const useTabPanel = () => {
  if (isServer) {
    return {
      activeIndex: 0,
    }
  }

  const { activeIndex } = React.useContext(TabsContext)
  return { activeIndex }
}
