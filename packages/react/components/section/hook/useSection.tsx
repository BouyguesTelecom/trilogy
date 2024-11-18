import React from 'react'

interface IParams {
  skeleton?: boolean
}

export const useSection = ({ skeleton }: IParams) => {
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
