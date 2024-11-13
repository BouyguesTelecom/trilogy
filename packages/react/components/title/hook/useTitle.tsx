import clsx from 'clsx'
import React from 'react'

import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

interface IParams {
  skeleton?: boolean
}

export const useTitle = ({ skeleton }: IParams) => {
  try {
    const [isLoading, setIsLoading] = React.useState<boolean>(skeleton || false)
    const classes = hashClass(clsx(isLoading ? is('loading') : is('loaded')))

    React.useEffect(() => {
      setIsLoading(skeleton || false)
    }, [skeleton])

    return { classes }
  } catch {
    return { classes: hashClass(clsx(skeleton ? is('loading') : is('loaded'))) }
  }
}
