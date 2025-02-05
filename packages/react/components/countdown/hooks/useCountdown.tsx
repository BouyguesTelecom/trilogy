import React from 'react'

import { CountdownFormat } from '@/components/countdown/CountdownEnum'
import { ClickEvent } from '@/events/OnClickEvent'

interface IParams {
  deadline: Date
  format?: CountdownFormat
  event?: ClickEvent
}

export const useCountdown = ({ event, format, deadline }: IParams) => {
  const initialTimeDifference = deadline.getTime() - new Date().getTime()
  const initialTimer = calculateTimer(initialTimeDifference)

  try {
    const [timeLeft] = React.useState(deadline)
    const [timer, setTimer] = React.useState(initialTimer)
    const [init, setInit] = React.useState(false)

    React.useEffect(() => {
      setInterval(() => {
        const difference = timeLeft.getTime() - new Date().getTime()
        if (difference > 0) {
          switch (format) {
            case CountdownFormat.DAY:
              setTimer({
                days: Math.ceil(difference / (1000 * 60 * 60 * 24)),
                hours: 0,
                minutes: 0,
                seconds: 0,
              })
              break
            case CountdownFormat.DAY_HOUR:
              setTimer({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.ceil((difference / (1000 * 60 * 60)) % 24),
                minutes: 0,
                seconds: 0,
              })
              break
            case CountdownFormat.DAY_HOUR_MIN:
              setTimer({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.ceil((difference / 1000 / 60) % 60),
                seconds: 0,
              })
              break
            default:
              setTimer({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
              })
              break
          }
        }
        setInit(true)
      }, 1000)
    }, [timeLeft, format])

    React.useEffect(() => {
      if (timer.days + timer.hours + timer.minutes + timer.seconds === 0 && event && init) {
        event(null)
        setInit(false)
      }
    }, [timer, event, init])

    return {
      timer,
    }
  } catch {
    return {
      timer: initialTimer,
    }
  }
}

const calculateTimer = (timeDifference: number) => {
  const seconds = Math.floor((timeDifference / 1000) % 60)
  const minutes = Math.floor((timeDifference / 1000 / 60) % 60)
  const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24)
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

  return { days, hours, minutes, seconds }
}
