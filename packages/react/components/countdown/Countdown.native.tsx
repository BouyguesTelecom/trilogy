import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { CountdownFormat, CountdownUnite } from './CountdownEnum'
import { CountdownProps } from './CountdownProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { Text, TextLevels } from '@/components/text'

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
 * @param event
 * @param small
 * @param centered
 * @param others
 */
const Countdown = ({ deadline, format, event, small, centered, ...others }: CountdownProps): JSX.Element => {
  const [init, setInit] = useState(false)
  const [timeLeft, setTimeLeft] = useState(deadline)
  const initialTimeDifference = deadline.getTime() - new Date().getTime()
  const initialTimer = calculateTimer(initialTimeDifference)
  const [timer, setTimer] = useState(initialTimer)
  const show = [timer.days != 0, timer.hours != 0, timer.minutes != 0, timer.seconds != 0]
  const parsedFormat = format?.split('-')

  useEffect(() => {
    setTimeLeft(deadline)
  }, [deadline, setTimeLeft])

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
  let width = 90

  show.forEach((item) => {
    if (!item) width = width - 20
  })

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
        setInit(true)
      }
    }, 1000)
  }, [timeLeft, format])

  useEffect(() => {
    if (timer.days + timer.hours + timer.minutes + timer.seconds === 0 && event && init) {
      event(null)
      setInit(false)
    }
  }, [timer, event, init])

  const countdownColor = getColorStyle(TrilogyColor.MAIN)

  const styles = StyleSheet.create({
    countdown: {
      alignSelf: centered ? 'center' : 'flex-start',
      borderColor: countdownColor,
      borderWidth: 1,
      borderRadius: small ? 4 : 8,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: small ? 8 : 12,
      paddingVertical: small ? 8 : 12,
    },
    text: {
      color: countdownColor,
      fontWeight: '600',
    },
    date: {
      fontSize: small ? 12 : 14,
      fontWeight: small ? '500' : '400',
    },
    separator: {
      width: 1,
      height: '100%',
      backgroundColor: countdownColor,
      margin: 8,
    },
  })

  return (
    <View style={styles.countdown} {...others}>
      {(show[CountdownUnite.DAY] || timer.days != 0) && (
        <Text style={styles.text} testId='day-id'>
          {timer.days ? timer.days : 0}
          <Text style={styles.date}>j</Text>
        </Text>
      )}
      {show[CountdownUnite.DAY] && show[CountdownUnite.HOUR] && <View style={styles.separator} testID='hour-day-id'></View>}
      {(show[CountdownUnite.HOUR] || timer.hours != 0) && (
        <Text style={styles.text}>
          {timer.hours ? timer.hours : 0}
          <Text style={styles.date}>h</Text>
        </Text>
      )}
      {show[CountdownUnite.HOUR] && show[CountdownUnite.MIN] && <View style={styles.separator} testID='hour-min-id'></View>}
      {(show[CountdownUnite.MIN] || timer.minutes != 0) && (
        <Text style={styles.text}>
          {timer.minutes ? timer.minutes : 0}
          <Text style={styles.date}>m</Text>
        </Text>
      )}
      {show[CountdownUnite.SEC] && show[CountdownUnite.MIN] && <View style={styles.separator} testID='sec-min-id'></View>}
      {(show[CountdownUnite.SEC] || timer.seconds != 0) && (
        <Text style={styles.text} level={TextLevels.ONE}>
          {timer.seconds ? timer.seconds : 0}
          <Text style={styles.date}>s</Text>
        </Text>
      )}
    </View>
  )
}

Countdown.displayName = ComponentName.Countdown

export default Countdown
