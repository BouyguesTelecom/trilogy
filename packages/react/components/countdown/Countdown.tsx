import clsx from 'clsx'
import React from 'react'

import { CountdownUnite } from '@/components/countdown/CountdownEnum'
import { CountdownProps } from '@/components/countdown/CountdownProps'
import { useCountdown } from '@/components/countdown/hook/useCountdown'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

/**
 * Countdown Component
 * @param deadline {Date} Date to reach before the end of the countdown
 * @param format {CountdownFormat} Format of countdown
 * @param inverted {Boolean} White countdown on darked background
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param event
 * @param small
 * @param others
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 * @param centered
 */
const Countdown = ({ deadline, className, format, event, small, inverted, ...others }: CountdownProps): JSX.Element => {
  const { timer } = useCountdown({ event, format, deadline })
  const classes = hashClass(clsx('countdown', inverted && is('inverted'), small && is('small'), className))
  const show = [timer.days != 0, timer.hours != 0, timer.minutes != 0, timer.seconds != 0]
  const parsedFormat = format?.split('-')

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

  return (
    <ul className={classes} {...others}>
      {(show[CountdownUnite.DAY] || timer.days != 0) && (
        <li className={hashClass(clsx('count'))}>
          <span className={hashClass(clsx('value'))}>{timer.days ? timer.days : 0}</span>j
        </li>
      )}
      {(show[CountdownUnite.HOUR] || timer.hours != 0) && (
        <li className={hashClass(clsx('count'))}>
          <span className={hashClass(clsx('value'))}>{timer.hours ? timer.hours : 0}</span>h
        </li>
      )}
      {(show[CountdownUnite.MIN] || timer.minutes != 0) && (
        <li className={hashClass(clsx('count'))}>
          <span className={hashClass(clsx('value'))}>{timer.minutes ? timer.minutes : 0}</span>m
        </li>
      )}
      {(show[CountdownUnite.SEC] || timer.seconds != 0) && (
        <li className={hashClass(clsx('count'))}>
          <span className={hashClass(clsx('value'))}>{timer.seconds ? timer.seconds : 0}</span>s
        </li>
      )}
    </ul>
  )
}

export default Countdown
