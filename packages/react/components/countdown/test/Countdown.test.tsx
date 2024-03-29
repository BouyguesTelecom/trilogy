import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Countdown from '../Countdown'
import { CountdownFormat, getFormatWidth } from '../CountdownEnum'

describe('Countdown', () => {
  let container: HTMLDivElement | null = null

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    if (container) {
      unmountComponentAtNode(container)
      container.remove()
      container = null
    }
  })

  it('renders countdown component', () => {
    act(() => {
      render(<Countdown deadline={new Date()} />, container)
    })

    const countdown = container?.querySelector('.countdown')

    expect(countdown).toBeTruthy()
  })

  it('renders countdown with specified format', () => {
    act(() => {
      render(<Countdown deadline={new Date()} format={CountdownFormat.DAY_HOUR_MIN_SEC} />, container)
    })

    const countdownDays = container?.querySelector('.countdown li:nth-child(1) .value')
    const countdownHours = container?.querySelector('.countdown li:nth-child(2) .value')
    const countdownMinutes = container?.querySelector('.countdown li:nth-child(3) .value')
    const countdownSeconds = container?.querySelector('.countdown li:nth-child(4) .value')

    expect(countdownDays).toBeTruthy()
    expect(countdownHours).toBeTruthy()
    expect(countdownMinutes).toBeTruthy()
    expect(countdownSeconds).toBeTruthy()
  })
})

describe('getFormatWidth', () => {
  it('returns the correct width for HOUR_MIN_SEC format', () => {
    expect(getFormatWidth(CountdownFormat.HOUR_MIN_SEC)).toBe('60%')
  })

  it('returns the correct width for DAY_HOUR_MIN format', () => {
    expect(getFormatWidth(CountdownFormat.DAY_HOUR_MIN)).toBe('60%')
  })

  it('returns the correct width for MIN_SEC format', () => {
    expect(getFormatWidth(CountdownFormat.MIN_SEC)).toBe('40%')
  })

  it('returns the correct width for DAY_HOUR format', () => {
    expect(getFormatWidth(CountdownFormat.DAY_HOUR)).toBe('40%')
  })

  it('returns the correct width for SEC format', () => {
    expect(getFormatWidth(CountdownFormat.SEC)).toBe('20%')
  })

  it('returns the correct width for DAY format', () => {
    expect(getFormatWidth(CountdownFormat.DAY)).toBe('20%')
  })
})
