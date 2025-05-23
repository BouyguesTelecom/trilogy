import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { ComponentName } from '../enumsComponentsName'
import { CountdownFormat, CountdownUnite } from './CountdownEnum'
import { CountdownProps, CountdownRef } from './CountdownProps'

const calculateTimer = (timeDifference: number) => {
  const seconds = Math.floor((timeDifference / 1000) % 60)
  const minutes = Math.floor((timeDifference / 1000 / 60) % 60)
  const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24)
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

  return { days, hours, minutes, seconds }
}

/**
 * Countdown Component
 * @param deadline {Date} Date to reach before the end of the countdown
 * @param format {CountdownFormat} Format of countdown
 * @param inverted {Boolean} White countdown on darked background
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param event
 * @param small
 * @param others
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 * @param centered
 */
const Countdown = React.forwardRef<CountdownRef, CountdownProps>(
  ({ deadline, className, id, format, event, small, inverted, ...others }, ref): JSX.Element => {
    const { styled } = useTrilogyContext()
    const [timeLeft] = useState(deadline)
    const initialTimeDifference = deadline.getTime() - new Date().getTime()
    const initialTimer = calculateTimer(initialTimeDifference)
    const [timer, setTimer] = useState(initialTimer)
    const [init, setInit] = useState(false)
    const show = [timer.days != 0, timer.hours != 0, timer.minutes != 0, timer.seconds != 0]
    const parsedFormat = format?.split('-')

    const classes = hashClass(styled, clsx('countdown', inverted && is('inverted'), small && is('small'), className))

    if (parsedFormat) {
      parsedFormat.forEach((item) => {
        switch (item) {
          case 'dd':
            show[CountdownUnite.DAY] = true
            break
          case 'hh':
            show[CountdownUnite.HOUR] = true
            break
          case 'mm':
            show[CountdownUnite.MIN] = true
            break
          case 'ss':
            show[CountdownUnite.SEC] = true
            break
          default:
            break
        }
      })
    } else {
      show[CountdownUnite.DAY] = true
      show[CountdownUnite.HOUR] = true
      show[CountdownUnite.MIN] = true
      show[CountdownUnite.SEC] = true
    }

    useEffect(() => {
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

    useEffect(() => {
      if (timer.days + timer.hours + timer.minutes + timer.seconds === 0 && event && init) {
        event(null)
        setInit(false)
      }
    }, [timer, event, init])

    return (
      <ul ref={ref} id={id} className={classes} {...others}>
        {(show[CountdownUnite.DAY] || timer.days != 0) && (
          <li className={hashClass(styled, clsx('count'))}>
            <span className={hashClass(styled, clsx('value'))}>{timer.days ? timer.days : 0}</span>j
          </li>
        )}
        {(show[CountdownUnite.HOUR] || timer.hours != 0) && (
          <li className={hashClass(styled, clsx('count'))}>
            <span className={hashClass(styled, clsx('value'))}>{timer.hours ? timer.hours : 0}</span>h
          </li>
        )}
        {(show[CountdownUnite.MIN] || timer.minutes != 0) && (
          <li className={hashClass(styled, clsx('count'))}>
            <span className={hashClass(styled, clsx('value'))}>{timer.minutes ? timer.minutes : 0}</span>m
          </li>
        )}
        {(show[CountdownUnite.SEC] || timer.seconds != 0) && (
          <li className={hashClass(styled, clsx('count'))}>
            <span className={hashClass(styled, clsx('value'))}>{timer.seconds ? timer.seconds : 0}</span>s
          </li>
        )}
      </ul>
    )
  },
)
Countdown.displayName = ComponentName.Countdown
export default Countdown
