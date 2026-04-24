import { ComponentName } from '@/components/enumsComponentsName'
import { Text, TextLevels } from '@/components/text'
import { Title, TitleLevels } from '@/components/title'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text as TextNative, View } from 'react-native'
import { getTypographyBoldStyle, TypographyBold } from '../../objects/Typography'
import { CountdownFormat, CountdownUnite } from './CountdownEnum'
import { CountdownNativeRef, CountdownProps } from './CountdownProps'

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
 * @param event
 * @param small
 * @param centered
 * @param others
 */
const Countdown = React.forwardRef<CountdownNativeRef, CountdownProps>(
  ({ deadline, format, event, small, inverted, ...others }, ref): JSX.Element => {
    const [init, setInit] = useState(false)
    const [timeLeft, setTimeLeft] = useState(deadline)
    const initialTimeDifference = deadline.getTime() - new Date().getTime()
    const initialTimer = calculateTimer(initialTimeDifference)
    const [timer, setTimer] = useState(initialTimer)
    const show = [timer.days != 0, timer.hours != 0, timer.minutes != 0, timer.seconds != 0]
    const parsedFormat = format?.split('-')

    const centered = false

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

    const styles = StyleSheet.create({
      countdown: {
        alignSelf: centered ? 'center' : 'flex-start',
        backgroundColor: getColorStyle(TrilogyColor.ACCENT_FADE),
        borderRadius: small ? 8 : 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
      },
      text: {
        color: getColorStyle(TrilogyColor.MAIN),
        fontSize: small ? 16 : 20,
        fontWeight: '600',
        fontFamily: getTypographyBoldStyle(TypographyBold.TEXT_WEIGHT_SEMIBOLD),
        minWidth: small ? 28 : 34,
        textAlign: 'center',
      },
      date: {
        fontSize: 12,
        fontWeight: '400',
        fontFamily: getTypographyBoldStyle(TypographyBold.TEXT_WEIGHT_NORMAL),
      },
      separator: {
        color: getColorStyle(TrilogyColor.MAIN),
        fontWeight: '400',
        fontFamily: getTypographyBoldStyle(TypographyBold.TEXT_WEIGHT_NORMAL),
        fontSize: 12,
        lineHeight: 16,
        marginHorizontal: 4,
        textAlignVertical: 'center',
        includeFontPadding: false,
      },
    })

    return (
      <View ref={ref} style={styles.countdown} {...others}>
        {(show[CountdownUnite.DAY] || timer.days != 0) && (
          <Title style={styles.text} level={TitleLevels.FOUR}>
            {String(timer.days ? timer.days : 0).padStart(2, '0')}
            <Text style={styles.date} level={TextLevels.THREE}>
              J
            </Text>
          </Title>
        )}
        {show[CountdownUnite.DAY] && show[CountdownUnite.HOUR] && (
          <TextNative style={styles.separator} testID='hour-day-id'>
            {':'}
          </TextNative>
        )}
        {(show[CountdownUnite.HOUR] || timer.hours != 0) && (
          <Title style={styles.text} level={TitleLevels.FOUR}>
            {String(timer.hours ? timer.hours : 0).padStart(2, '0')}
            <Text style={styles.date} level={TextLevels.THREE}>
              H
            </Text>
          </Title>
        )}
        {show[CountdownUnite.HOUR] && show[CountdownUnite.MIN] && (
          <TextNative style={styles.separator} testID='hour-min-id'>
            {':'}
          </TextNative>
        )}
        {(show[CountdownUnite.MIN] || timer.minutes != 0) && (
          <Title style={styles.text} level={TitleLevels.FOUR}>
            {String(timer.minutes ? timer.minutes : 0).padStart(2, '0')}
            <Text style={styles.date} level={TextLevels.THREE}>
              M
            </Text>
          </Title>
        )}
        {show[CountdownUnite.SEC] && show[CountdownUnite.MIN] && (
          <TextNative style={styles.separator} testID='sec-min-id'>
            {':'}
          </TextNative>
        )}
        {(show[CountdownUnite.SEC] || timer.seconds != 0) && (
          <Title style={styles.text} level={TitleLevels.FOUR}>
            {String(timer.seconds ? timer.seconds : 0).padStart(2, '0')}
            <Text style={styles.date} level={TextLevels.THREE}>
              S
            </Text>
          </Title>
        )}
      </View>
    )
  },
)

Countdown.displayName = ComponentName.Countdown

export default Countdown
