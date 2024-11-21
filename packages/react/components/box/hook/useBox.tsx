import React from 'react'

interface IParams {
  skeleton?: boolean
}

export const useBox = ({ skeleton }: IParams) => {
  try {
    const [isLoading, setIsLoading] = React.useState<boolean>(skeleton || false)

    React.useEffect(() => {
      setIsLoading(skeleton || false)
    }, [skeleton])

    return { isLoading }
  } catch {
    return { isLoading: skeleton }
  }
}