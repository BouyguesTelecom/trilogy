import { fireEvent, render } from '@testing-library/react'
import * as React from 'react'
import Slider from '../Slider'
import SliderItem from '../slider-item/SliderItem'
import { SliderRadiusValues } from '@/components/slider/SliderEnum'

// jsdom doesn't implement these browser APIs the Slider relies on.
beforeAll(() => {
  // ResizeObserver
  ;(globalThis as any).ResizeObserver =
    (globalThis as any).ResizeObserver ||
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    }
  // DOMMatrix (used to read the current translate during drag)
  ;(globalThis as any).DOMMatrix =
    (globalThis as any).DOMMatrix ||
    class {
      m41 = 0
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      constructor(_init?: string) {}
    }
})

// Baseline renders use loop={false} so structural assertions aren't affected by
// clone slides. Loop-specific behavior is covered explicitly below.
const renderSlider = (props: Partial<React.ComponentProps<typeof Slider>> = {}) =>
  render(
    <Slider loop={false} {...props}>
      <SliderItem>
        <div>Slide A</div>
      </SliderItem>
      <SliderItem>
        <div>Slide B</div>
      </SliderItem>
      <SliderItem>
        <div>Slide C</div>
      </SliderItem>
    </Slider>,
  )

describe('Slider component (web)', () => {
  it('renders a carousel region with the given aria-label', () => {
    const { container } = renderSlider({ accessibilityLabel: 'Content slider' })
    const section = container.querySelector('.slider') as HTMLElement
    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('aria-roledescription', 'carousel')
    expect(section).toHaveAttribute('aria-label', 'Content slider')
  })

  it('forwards testId to the root element', () => {
    const { getByTestId } = renderSlider({ testId: 'my-slider' })
    expect(getByTestId('my-slider')).toBeInTheDocument()
  })

  it('renders one slide wrapper per child and each has slide semantics', () => {
    const { container } = renderSlider()
    const slides = container.querySelectorAll('.slide')
    expect(slides).toHaveLength(3)
    slides.forEach((slide) =>
      expect(slide).toHaveAttribute('aria-roledescription', 'slide'),
    )
    expect(slides[0]).toHaveAttribute('aria-label', 'Slide 1 of 3')
    expect(slides[2]).toHaveAttribute('aria-label', 'Slide 3 of 3')
  })

  it('renders one bullet per real slide and navigation controls', () => {
    const { container } = renderSlider()
    expect(container.querySelectorAll('.bullet')).toHaveLength(3)
    expect(
      container.querySelector('[aria-label="Previous slide"]'),
    ).toBeInTheDocument()
    expect(
      container.querySelector('[aria-label="Next slide"]'),
    ).toBeInTheDocument()
  })

  it('marks the first bullet active by default', () => {
    const { container } = renderSlider()
    const bullets = container.querySelectorAll('.bullet')
    expect(bullets[0].className).toContain('is-active')
    expect(bullets[1].className).not.toContain('is-active')
  })

  it('renders all children content', () => {
    const { getByText } = renderSlider()
    expect(getByText('Slide A')).toBeInTheDocument()
    expect(getByText('Slide B')).toBeInTheDocument()
    expect(getByText('Slide C')).toBeInTheDocument()
  })

  it('does not render controls for a single slide', () => {
    const { container } = render(
      <Slider>
        <SliderItem>
          <div>Only slide</div>
        </SliderItem>
      </Slider>,
    )
    expect(container.querySelector('.controls')).not.toBeInTheDocument()
    expect(container.querySelectorAll('.slide')).toHaveLength(1)
  })

  it('returns null when there are no children', () => {
    const { container } = render(<Slider>{null}</Slider>)
    expect(container.querySelector('.slider')).not.toBeInTheDocument()
  })

  describe('rounded via radius', () => {
    it('rounds the viewport by default (LARGE → 24px)', () => {
      const { container } = renderSlider()
      const viewport = container.querySelector('.viewport') as HTMLElement
      expect(viewport.style.borderRadius).toBe('24px')
    })

    it('applies SMALL radius (8px) when radius=SMALL', () => {
      const { container } = renderSlider({ radius: SliderRadiusValues.SMALL })
      const viewport = container.querySelector('.viewport') as HTMLElement
      expect(viewport.style.borderRadius).toBe('8px')
    })

    it('applies MEDIUM radius (16px) when radius=MEDIUM', () => {
      const { container } = renderSlider({ radius: SliderRadiusValues.MEDIUM })
      const viewport = container.querySelector('.viewport') as HTMLElement
      expect(viewport.style.borderRadius).toBe('16px')
    })
  })

  describe('loop', () => {
    it('renders clone slides on each side when loop enabled', () => {
      const { container } = renderSlider({ loop: true })
      const slides = container.querySelectorAll('.slide')
      expect(slides.length).toBeGreaterThanOrEqual(5)
      expect(slides[0]).toHaveAttribute('aria-hidden', 'true')
      expect(slides[slides.length - 1]).toHaveAttribute('aria-hidden', 'true')
      expect(container.querySelectorAll('.bullet')).toHaveLength(3)
    })

    it('renders without throwing when loop + multi-slide views', () => {
      const { container } = renderSlider({ loop: true, slidesPerView: 2 as any })
      expect(container.querySelectorAll('.slide').length).toBeGreaterThan(0)
    })
  })

  describe('interactions', () => {
    it('activates a bullet when clicked and calls onSlideChange', () => {
      const onSlideChange = jest.fn()
      const { container } = renderSlider({ onSlideChange })

      const bullets = container.querySelectorAll('.bullet')
      fireEvent.click(bullets[2])

      expect(onSlideChange).toHaveBeenCalledWith(2)
      expect(bullets[2].className).toContain('is-active')
      expect(bullets[0].className).not.toContain('is-active')
    })

    it('advances the active slide when next is clicked', () => {
      const onSlideChange = jest.fn()
      const { container } = renderSlider({ onSlideChange })

      fireEvent.click(
        container.querySelector('[aria-label="Next slide"]') as HTMLElement,
      )

      const bullets = container.querySelectorAll('.bullet')
      expect(bullets[1].className).toContain('is-active')
      expect(onSlideChange).toHaveBeenLastCalledWith(1)
    })
  })

  describe('accessibility', () => {
    it('exposes the carousel as a focusable region', () => {
      const { container } = renderSlider()
      const section = container.querySelector('.slider') as HTMLElement
      expect(section).toHaveAttribute('role', 'region')
      expect(section).toHaveAttribute('tabindex', '0')
    })

    it('is not focusable when there is a single slide', () => {
      const { container } = render(
        <Slider>
          <SliderItem>
            <div>Only slide</div>
          </SliderItem>
        </Slider>,
      )
      const section = container.querySelector('.slider') as HTMLElement
      expect(section).not.toHaveAttribute('tabindex')
    })

    it('renders prev/next as real, focusable buttons', () => {
      const { container } = renderSlider()
      const prev = container.querySelector(
        '[aria-label="Previous slide"]',
      ) as HTMLElement
      const next = container.querySelector(
        '[aria-label="Next slide"]',
      ) as HTMLElement
      expect(prev.tagName).toBe('BUTTON')
      expect(next.tagName).toBe('BUTTON')
      expect(prev).not.toHaveAttribute('aria-hidden')
    })

    it('exposes bullets to assistive tech with aria-current on the active one', () => {
      const { container } = renderSlider()
      const pagination = container.querySelector('.dots') as HTMLElement
      expect(pagination).not.toHaveAttribute('aria-hidden')

      const bullets = container.querySelectorAll('.bullet')
      expect(bullets[0]).toHaveAttribute('aria-current', 'true')
      expect(bullets[1]).not.toHaveAttribute('aria-current')
    })

    it('moves to the next slide on ArrowRight and back on ArrowLeft', () => {
      const onSlideChange = jest.fn()
      const { container } = renderSlider({ onSlideChange })
      const section = container.querySelector('.slider') as HTMLElement
      const bullets = container.querySelectorAll('.bullet')

      fireEvent.keyDown(section, { key: 'ArrowRight' })
      expect(bullets[1].className).toContain('is-active')
      expect(onSlideChange).toHaveBeenLastCalledWith(1)

      fireEvent.keyDown(section, { key: 'ArrowLeft' })
      expect(bullets[0].className).toContain('is-active')
      expect(onSlideChange).toHaveBeenLastCalledWith(0)
    })

    it('jumps to first/last slide on Home/End', () => {
      const { container } = renderSlider()
      const section = container.querySelector('.slider') as HTMLElement
      const bullets = container.querySelectorAll('.bullet')

      fireEvent.keyDown(section, { key: 'End' })
      expect(bullets[2].className).toContain('is-active')

      fireEvent.keyDown(section, { key: 'Home' })
      expect(bullets[0].className).toContain('is-active')
    })

    it('ignores unrelated keys', () => {
      const onSlideChange = jest.fn()
      const { container } = renderSlider({ onSlideChange })
      const section = container.querySelector('.slider') as HTMLElement

      onSlideChange.mockClear()
      fireEvent.keyDown(section, { key: 'Enter' })
      fireEvent.keyDown(section, { key: 'a' })
      expect(onSlideChange).not.toHaveBeenCalled()
    })
  })
})
