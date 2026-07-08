import { fireEvent, render } from '@testing-library/react'
import * as React from 'react'
import Slider from '../Slider'
import SliderItem from '../slider-item/SliderItem'

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

describe('Slider component', () => {
  it('renders a carousel region with the given aria-label', () => {
    const { container } = renderSlider({ ariaLabel: 'Content slider' })
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
    slides.forEach((slide) => expect(slide).toHaveAttribute('aria-roledescription', 'slide'))
    expect(slides[0]).toHaveAttribute('aria-label', 'Slide 1 of 3')
    expect(slides[2]).toHaveAttribute('aria-label', 'Slide 3 of 3')
  })

  it('renders one bullet per real slide and navigation controls', () => {
    const { container } = renderSlider()
    expect(container.querySelectorAll('.bullet')).toHaveLength(3)
    expect(container.querySelector('[aria-label="Previous slide"]')).toBeInTheDocument()
    expect(container.querySelector('[aria-label="Next slide"]')).toBeInTheDocument()
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

  describe('rounded', () => {
    it('rounds the viewport by default (24px inline)', () => {
      const { container } = renderSlider()
      const viewport = container.querySelector('.viewport') as HTMLElement
      expect(viewport.style.borderRadius).toBe('24px')
    })

    it('does not round the viewport when rounded is false', () => {
      const { container } = renderSlider({ rounded: false })
      const viewport = container.querySelector('.viewport') as HTMLElement
      expect(viewport.style.borderRadius).toBe('')
    })
  })

  describe('loop', () => {
    it('renders clone slides on each side when loop + single view', () => {
      const { container } = renderSlider({ loop: true })
      // 3 real + 2 clones
      const slides = container.querySelectorAll('.slide')
      expect(slides).toHaveLength(5)
      // first and last are clones (aria-hidden)
      expect(slides[0]).toHaveAttribute('aria-hidden', 'true')
      expect(slides[4]).toHaveAttribute('aria-hidden', 'true')
      // still only one bullet per real slide
      expect(container.querySelectorAll('.bullet')).toHaveLength(3)
    })

    it('does not render clones for multi-slide views even with loop', () => {
      const { container } = renderSlider({ loop: true, slidesPerView: 2 })
      expect(container.querySelectorAll('.slide')).toHaveLength(3)
    })

    it('does not render clones when a breakpoint can widen the view beyond 1', () => {
      // base slidesPerView is 1, but breakpoints can raise it to 2/3 -> no clones,
      // so navigation pages by view instead of stepping through a leading clone.
      const { container } = render(
        <Slider
          loop
          slidesPerView={1}
          breakpoints={{ tablet: { slidesPerView: 2 }, desktop: { slidesPerView: 3 } }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <SliderItem key={i}>
              <div>Slide {i + 1}</div>
            </SliderItem>
          ))}
        </Slider>,
      )
      // 6 real slides, no clones
      expect(container.querySelectorAll('.slide')).toHaveLength(6)
      const slides = container.querySelectorAll('.slide')
      slides.forEach((s) => expect(s).not.toHaveAttribute('aria-hidden'))
    })
  })

  describe('pagination dots', () => {
    const renderMany = (props: Partial<React.ComponentProps<typeof Slider>>) =>
      render(
        <Slider loop={false} {...props}>
          {Array.from({ length: 6 }).map((_, i) => (
            <SliderItem key={i}>
              <div>Slide {i + 1}</div>
            </SliderItem>
          ))}
        </Slider>,
      )

    it('renders one dot per slide when slidesPerView = 1', () => {
      const { container } = renderMany({ slidesPerView: 1 })
      expect(container.querySelectorAll('.bullet')).toHaveLength(6)
    })

    it('renders one dot per page (slides - perView + 1), not per slide', () => {
      // 6 slides, 3 per view => 4 pages => 4 dots (no extra unused dots)
      const { container } = renderMany({ slidesPerView: 3 })
      expect(container.querySelectorAll('.bullet')).toHaveLength(4)
    })

    it('renders a single dot when all slides fit in one view', () => {
      const { container } = renderMany({ slidesPerView: 6 })
      expect(container.querySelectorAll('.bullet')).toHaveLength(1)
    })
  })

  describe('loop by default', () => {
    const renderMany = (props: Partial<React.ComponentProps<typeof Slider>> = {}) =>
      render(
        <Slider slidesPerView={3} {...props}>
          {Array.from({ length: 6 }).map((_, i) => (
            <SliderItem key={i}>
              <div>Slide {i + 1}</div>
            </SliderItem>
          ))}
        </Slider>,
      )

    it('wraps from the last page back to the first on next (multi-view)', () => {
      const onSlideChange = jest.fn()
      // 6 slides / 3 per view => pages 0..3 (4 dots)
      const { container } = renderMany({ onSlideChange })
      const next = container.querySelector('[aria-label="Next slide"]') as HTMLElement

      // advance to the last page
      fireEvent.click(next) // 1
      fireEvent.click(next) // 2
      fireEvent.click(next) // 3 (last)
      expect(onSlideChange).toHaveBeenLastCalledWith(3)

      // one more should wrap back to the first page
      fireEvent.click(next)
      expect(onSlideChange).toHaveBeenLastCalledWith(0)

      const bullets = container.querySelectorAll('.bullet')
      expect(bullets[0].className).toContain('is-active')
    })

    it('wraps from the first page to the last on prev (multi-view)', () => {
      const onSlideChange = jest.fn()
      const { container } = renderMany({ onSlideChange })
      const prev = container.querySelector('[aria-label="Previous slide"]') as HTMLElement

      fireEvent.click(prev)
      expect(onSlideChange).toHaveBeenLastCalledWith(3) // last page
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

      fireEvent.click(container.querySelector('[aria-label="Next slide"]') as HTMLElement)

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
      const prev = container.querySelector('[aria-label="Previous slide"]') as HTMLElement
      const next = container.querySelector('[aria-label="Next slide"]') as HTMLElement
      expect(prev.tagName).toBe('BUTTON')
      expect(next.tagName).toBe('BUTTON')
      // native buttons are keyboard-focusable and operable by default
      expect(prev).not.toHaveAttribute('aria-hidden')
    })

    it('exposes bullets to assistive tech (not hidden) with aria-current on the active one', () => {
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
