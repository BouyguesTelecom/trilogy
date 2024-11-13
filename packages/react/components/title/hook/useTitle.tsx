import React from 'react'

import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services'
import clsx from 'clsx'

export const useTitle = ({ skeleton }) => {
  try {
    const [isLoading, setIsLoading] = React.useState<boolean>(skeleton || false)
    const classes = hashClass(clsx(isLoading ? is('loading') : is('loaded')))

    React.useEffect(() => {
      console.log('je suis client')
      setIsLoading(skeleton || false)
    }, [skeleton])

    return { classes }
  } catch {
    return { classes: hashClass(clsx(skeleton ? is('loading') : is('loaded'))) }
  }
}
