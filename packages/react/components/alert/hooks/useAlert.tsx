import { ToasterStatusProps } from '@/components/alert/AlertProps'
import ToasterContext from '@/components/alert/context'
import { ClickEvent } from '@/events/OnClickEvent'
import { isServer } from '@/helpers/isServer'
import React from 'react'

interface IParams {
  onClick?: ClickEvent
}

export const useAlert = ({ onClick }: IParams) => {
  if (isServer) return {}

  const handleClick = React.useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClick?.(e)
    e.stopPropagation()
  }, [])

  return { handleClick }
}

export const useToasterAlertProvider = () => {
  if (isServer) {
    return {
      ToasterProvider: ({ children }: { children?: React.ReactNode }) => <>{children}</>,
    }
  }

  const [toasterState, setToasterState] = React.useState<ToasterStatusProps | null>(null)
  const [duration, setDuration] = React.useState(5000)
  const timeRef = React.useRef<ReturnType<typeof setInterval> | null>(null)

  const showToast = (params: ToasterStatusProps) => {
    setToasterState(params)
    params.duration && params.duration > 0 && setDuration(params.duration)
    timeRef.current && clearTimeout(timeRef.current)
  }

  React.useEffect(() => {
    timeRef.current = setTimeout(() => {
      setToasterState(null)
    }, duration)
  }, [toasterState, toasterState?.title])

  const ToasterProvider = ({ children }: { children?: React.ReactNode }) => {
    return <ToasterContext.Provider value={{ show: showToast, hide: () => null }}>{children}</ToasterContext.Provider>
  }

  return { ToasterProvider, toasterState }
}
