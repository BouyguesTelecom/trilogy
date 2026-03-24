import { render } from '@testing-library/react'
import * as React from 'react'
import { createRoot, Root } from 'react-dom/client'
import { act } from 'react-dom/test-utils'
import Countdown from '../Countdown'
import { CountdownFormat, getFormatWidth } from '../CountdownEnum'

describe('Countdown', () => {
  let container: HTMLDivElement | null = null
  let root: Root | null = null

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    root = createRoot(container)
  })

  afterEach(() => {
    if (container && root) {
      act(() => {
        root?.unmount()
      })
      container.remove()
      container = null
    }
  })

  it('renders countdown component', () => {
    const { getByTestId } = render(<Countdown testId='countdown' deadline={new Date()} />)
    expect(getByTestId('countdown')).toBeTruthy()
  })

  it('renders countdown with specified format', () => {
    const { getByTestId } = render(
      <Countdown testId='countdown' deadline={new Date()} format={CountdownFormat.DAY_HOUR_MIN_SEC} />,
    )

    expect(getByTestId('countdown-days')).toBeTruthy()
    expect(getByTestId('countdown-hours')).toBeTruthy()
    expect(getByTestId('countdown-minutes')).toBeTruthy()
    expect(getByTestId('countdown-seconds')).toBeTruthy()
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
