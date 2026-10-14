import { fireEvent, render, screen } from '@testing-library/react-native'
import * as React from 'react'
import { Text } from 'react-native'
import Slider from '../Slider'
import SliderItem from '../slider-item/SliderItem'

jest.useFakeTimers()

const renderSlider = (props: Partial<React.ComponentProps<typeof Slider>> = {}) =>
  render(
    <Slider {...props}>
      <SliderItem>
        <Text>Slide A</Text>
      </SliderItem>
      <SliderItem>
        <Text>Slide B</Text>
      </SliderItem>
      <SliderItem>
        <Text>Slide C</Text>
      </SliderItem>
    </Slider>,
  )

describe('Slider component (native)', () => {
  it('renders all slide content', () => {
    renderSlider()
    expect(screen.getByText('Slide A')).toBeOnTheScreen()
    expect(screen.getByText('Slide B')).toBeOnTheScreen()
    expect(screen.getByText('Slide C')).toBeOnTheScreen()
  })

  it('renders navigation controls and one bullet per slide when multiple slides', () => {
    renderSlider()
    expect(screen.getByLabelText('Previous slide')).toBeOnTheScreen()
    expect(screen.getByLabelText('Next slide')).toBeOnTheScreen()
    expect(screen.getByLabelText('Go to slide 1')).toBeOnTheScreen()
    expect(screen.getByLabelText('Go to slide 2')).toBeOnTheScreen()
    expect(screen.getByLabelText('Go to slide 3')).toBeOnTheScreen()
  })

  it('does not render controls for a single slide', () => {
    render(
      <Slider>
        <SliderItem>
          <Text>Only slide</Text>
        </SliderItem>
      </Slider>,
    )
    expect(screen.queryByLabelText('Next slide')).toBeNull()
    expect(screen.queryByLabelText('Go to slide 1')).toBeNull()
  })

  it('does not crash when pressing navigation before layout', () => {
    renderSlider()
    // No width measured yet (no onLayout in the test env) — goTo is a no-op, must not throw.
    expect(() => {
      fireEvent.press(screen.getByLabelText('Next slide'))
      fireEvent.press(screen.getByLabelText('Go to slide 3'))
    }).not.toThrow()
  })

  it('returns null when there are no children', () => {
    const { toJSON } = render(<Slider>{null as unknown as React.ReactNode}</Slider>)
    expect(toJSON()).toBeNull()
  })

  it('does not call onSlideChange on initial render', () => {
    const onSlideChange = jest.fn()
    renderSlider({ onSlideChange })
    expect(onSlideChange).not.toHaveBeenCalled()
  })

  it('does not render autoplay-driven crashes for a single slide', () => {
    expect(() =>
      render(
        <Slider autoplay autoplayDelay={100}>
          <SliderItem>
            <Text>Only slide</Text>
          </SliderItem>
        </Slider>,
      ),
    ).not.toThrow()
  })

  it('sets the correct displayName', () => {
    expect(Slider.displayName).toBe('Slider')
  })

  describe('rounded', () => {
    it('applies rounded viewport styles by default', () => {
      const { toJSON } = renderSlider()
      const tree = toJSON() as { children: Array<{ props: { style?: Record<string, unknown> } }> }
      const viewportView = tree.children[0]
      expect(viewportView.props.style).toEqual(expect.objectContaining({ borderRadius: 24, overflow: 'hidden' }))
    })

    it('does not apply rounded styles when rounded is false', () => {
      const { toJSON } = renderSlider({ rounded: false })
      const tree = toJSON() as { children: Array<{ props: { style?: Record<string, unknown> } }> }
      const viewportView = tree.children[0]
      expect(viewportView.props.style).toBeUndefined()
    })
  })
})
