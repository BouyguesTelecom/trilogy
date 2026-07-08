import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName } from '@/components/icon'
import { SliderContext } from '@/components/slider/context'
import { SLIDER_BREAKPOINT_PX, SliderDefaults } from '@/components/slider/SliderEnum'
import { SliderProps, SliderRef } from '@/components/slider/SliderProps'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'

/**
 * Slider (carousel) Component
 *
 * A self-contained carousel supporting drag/swipe, autoplay, infinite loop,
 * responsive breakpoints, pagination dots and prev/next navigation.
 *
 * @param children {ReactNode} Slider items (`<SliderItem>`)
 * @param autoplay {boolean} Auto-advance slides
 * @param autoplayDelay {number} Delay between transitions (ms)
 * @param slidesPerView {number} Number of slides visible at once
 * @param spaceBetween {number} Gap between slides (px)
 * @param breakpoints {SliderResponsive} Responsive overrides keyed by named breakpoints (mobile/tablet/desktop/widescreen/fullhd)
 * @param loop {boolean} Infinite loop
 * @param rounded {boolean} Round the viewport corners (24px). Default true.
 * @param onSlideChange {(index:number)=>void} Fired when the active slide changes
 * @param accessibilityLabel {string} Accessible label for the carousel region
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param id {string} Custom id attribute
 * @param testId {string} Test id for integration tests
 */
const Slider = React.forwardRef<SliderRef, SliderProps>(
  (
    {
      children,
      autoplay = false,
      autoplayDelay = SliderDefaults.AUTOPLAY_DELAY,
      slidesPerView = SliderDefaults.SLIDES_PER_VIEW,
      spaceBetween = SliderDefaults.SPACE_BETWEEN,
      breakpoints,
      loop = true,
      rounded = true,
      onSlideChange,
      className,
      id,
      accessibilityLabel,
      testId,
    },
    ref,
  ) => {
    const { styled } = useTrilogyContext()

    const viewportRef = React.useRef<HTMLDivElement | null>(null)
    const wrapperRef = React.useRef<HTMLDivElement | null>(null)
    const slideRefs = React.useRef<Array<HTMLDivElement | null>>([])
    // Navigation actions, populated by the effect and called by the controls.
    const controlsRef = React.useRef<{ next: () => void; prev: () => void; goTo: (i: number) => void } | null>(null)

    const slidesArray = React.Children.toArray(children)
    const total = slidesArray.length

    const isLoop = loop && total > 1

    // The largest slides-per-view the slider can ever show, taking responsive
    // breakpoints into account. If a breakpoint can widen the view beyond 1, the
    // single-clone loop is never valid (it only works for a strict 1-up view).
    const maxPossiblePerView = Math.max(
      slidesPerView,
      ...(breakpoints ? Object.values(breakpoints).map((b) => b?.slidesPerView ?? 0) : [0]),
    )

    // Normalise the named breakpoints ({ tablet, desktop, ... }) into an ascending
    // list of { minWidth, slidesPerView, spaceBetween } the responsive engine reads.
    const pxBreakpoints = React.useMemo(() => {
      if (!breakpoints) return [] as Array<{ minWidth: number; slidesPerView?: number; spaceBetween?: number }>
      return (Object.keys(breakpoints) as Array<keyof typeof breakpoints>)
        .filter((name) => name in SLIDER_BREAKPOINT_PX)
        .map((name) => ({
          minWidth: SLIDER_BREAKPOINT_PX[name as keyof typeof SLIDER_BREAKPOINT_PX],
          slidesPerView: breakpoints[name]?.slidesPerView,
          spaceBetween: breakpoints[name]?.spaceBetween,
        }))
        .sort((a, b) => a.minWidth - b.minWidth)
    }, [JSON.stringify(breakpoints)])

    // The seamless single-clone loop (clone last before first, first after last)
    // only yields a gap-free wrap for a single-slide view. Multi-slide views loop
    // by wrapping the index instead, so no clones are rendered.
    const useClones = isLoop && maxPossiblePerView <= 1

    const rendered = useClones
      ? [slidesArray[total - 1], ...slidesArray, slidesArray[0]]
      : slidesArray
    const totalWithClones = rendered.length

    const [activeIndex, setActiveIndex] = React.useState<number>(0)
    // Live slides-per-view (may change with responsive breakpoints). Drives the
    // number of pagination dots so no more dots than reachable pages are rendered.
    const [currentPerView, setCurrentPerView] = React.useState<number>(Math.max(1, Math.floor(slidesPerView)))

    // Keep the latest onSlideChange without re-running the main effect.
    const onSlideChangeRef = React.useRef(onSlideChange)
    React.useEffect(() => {
      onSlideChangeRef.current = onSlideChange
    }, [onSlideChange])

    React.useEffect(() => {
      const viewport = viewportRef.current
      const wrapper = wrapperRef.current
      if (!viewport || !wrapper) return

      const slides = slideRefs.current.filter(Boolean) as HTMLDivElement[]
      const totalSlides = slides.length
      if (totalSlides === 0) return

      const realTotal = total
      const baseSlidesPerView = slidesPerView
      const baseSpaceBetween = spaceBetween

      let perView = baseSlidesPerView
      let gap = baseSpaceBetween

      // Whether to use the single-clone loop. Kept in sync with the rendered
      // clones; the effect re-runs when perView changes via breakpoints.
      const cloneLoop = useClones

      let currentIndex = cloneLoop ? 1 : 0

      let isDragging = false
      let wasDragged = false
      let startX = 0
      let startY = 0
      let currentTranslate = 0
      let prevTranslate = 0
      let dragDirection: 'horizontal' | 'vertical' | null = null
      let activePointerId: number | null = null

      let lastTick = Date.now()
      let autoplayLoopId = 0
      let cancelPendingJump: (() => void) | null = null
      let slideStep = 0

      const getRealIndex = () => {
        // With the single-clone loop, real slides start at DOM index 1.
        if (cloneLoop) return (currentIndex - 1 + realTotal) % realTotal
        return currentIndex
      }

      // Highest valid page-start index so a full `perView` of slides stays visible
      // (prevents scrolling into empty trailing slots when slidesPerView > 1).
      const maxIndex = () => Math.max(0, realTotal - Math.max(1, Math.floor(perView)))

      const emitChange = () => {
        setActiveIndex(getRealIndex())
        onSlideChangeRef.current?.(getRealIndex())
      }

      const updateResponsiveConfig = () => {
        perView = baseSlidesPerView
        gap = baseSpaceBetween
        const width = window.innerWidth
        // pxBreakpoints is pre-sorted ascending; the largest matching one wins.
        pxBreakpoints.forEach((bp) => {
          if (width >= bp.minWidth) {
            if (bp.slidesPerView !== undefined) perView = bp.slidesPerView
            if (bp.spaceBetween !== undefined) gap = bp.spaceBetween
          }
        })
        // Sync live perView to render state so the dot count stays correct.
        setCurrentPerView(Math.max(1, Math.floor(perView)))
      }

      const recomputeSlideStep = () => {
        if (slides.length === 0) {
          slideStep = 0
          return
        }
        const first = slides[0].getBoundingClientRect()
        slideStep = slides.length > 1 ? slides[1].getBoundingClientRect().left - first.left : first.width
      }

      const applyLayoutStyles = () => {
        updateResponsiveConfig()

        wrapper.style.display = 'flex'
        wrapper.style.gap = `${gap}px`
        wrapper.style.width = '100%'

        viewport.style.overflow = 'hidden'
        viewport.style.width = '100%'
        viewport.style.cursor = 'grab'
        viewport.style.userSelect = 'none'

        slides.forEach((slide) => {
          slide.style.flexShrink = '0'
          slide.style.boxSizing = 'border-box'
          slide.style.width = `calc(${100 / perView}% - ${(gap * (perView - 1)) / perView}px)`

          slide.querySelectorAll('img').forEach((img) => {
            img.style.pointerEvents = 'none'
            img.style.userSelect = 'none'
            img.setAttribute('draggable', 'false')
          })
        })

        recomputeSlideStep()
      }

      const setSliderPosition = () => {
        wrapper.style.transform = `translate3d(${currentTranslate}px, 0, 0)`
      }

      const jumpToRealSlide = () => {
        if (!cloneLoop || isDragging) return
        let targetIndex = -1
        if (currentIndex === 0) targetIndex = realTotal
        else if (currentIndex === totalSlides - 1) targetIndex = 1
        else return

        currentIndex = targetIndex
        currentTranslate = -currentIndex * slideStep
        prevTranslate = currentTranslate
        wrapper.style.transition = 'none'
        void wrapper.offsetWidth
        setSliderPosition()
      }

      const scheduleLoopJump = () => {
        if (!cloneLoop) return
        cancelPendingJump?.()
        cancelPendingJump = null

        const fallbackId = window.setTimeout(() => {
          wrapper.removeEventListener('transitionend', onEnd)
          cancelPendingJump = null
          jumpToRealSlide()
        }, SliderDefaults.TRANSITION_MS + 100)

        const onEnd = (e: TransitionEvent) => {
          if (e.target !== wrapper || e.propertyName !== 'transform') return
          wrapper.removeEventListener('transitionend', onEnd)
          window.clearTimeout(fallbackId)
          cancelPendingJump = null
          jumpToRealSlide()
        }

        wrapper.addEventListener('transitionend', onEnd)
        cancelPendingJump = () => {
          window.clearTimeout(fallbackId)
          wrapper.removeEventListener('transitionend', onEnd)
        }
      }

      const updateSliderPosition = (animate = true) => {
        if (!slideStep) recomputeSlideStep()
        currentTranslate = -currentIndex * slideStep
        prevTranslate = currentTranslate
        if (animate) {
          wrapper.style.transition = `transform ${SliderDefaults.TRANSITION_MS / 1000}s ease-out`
          scheduleLoopJump()
        } else {
          wrapper.style.transition = 'none'
        }
        setSliderPosition()
        emitChange()
      }

      const nextSlide = () => {
        if (cloneLoop) {
          // move onto the trailing clone; scheduleLoopJump snaps back seamlessly
          currentIndex = Math.min(currentIndex + 1, totalSlides - 1)
        } else if (isLoop) {
          // multi-view loop: wrap back to the first page after the last full page
          currentIndex = currentIndex >= maxIndex() ? 0 : Math.min(currentIndex + 1, maxIndex())
        } else {
          // no loop: stop at the last full page, never on empty trailing slots
          currentIndex = Math.min(currentIndex + 1, maxIndex())
        }
        updateSliderPosition()
      }

      const prevSlide = () => {
        if (cloneLoop) {
          currentIndex = Math.max(currentIndex - 1, 0)
        } else if (isLoop) {
          currentIndex = currentIndex <= 0 ? maxIndex() : currentIndex - 1
        } else {
          currentIndex = Math.max(currentIndex - 1, 0)
        }
        updateSliderPosition()
      }

      const goToSlide = (index: number) => {
        if (cloneLoop) {
          currentIndex = index + 1
        } else {
          // bullets map to real slides; clamp so the last bullet shows a full page
          currentIndex = Math.min(Math.max(index, 0), maxIndex())
        }
        updateSliderPosition()
      }

      const cleanup = (resetPos: boolean) => {
        document.removeEventListener('pointermove', onDragMove)
        document.removeEventListener('pointerup', onDragEnd)
        document.removeEventListener('pointercancel', onDragCancel)
        isDragging = false
        activePointerId = null
        dragDirection = null
        viewport.style.cursor = 'grab'
        if (resetPos) {
          wrapper.style.transition = 'none'
          currentTranslate = prevTranslate
          setSliderPosition()
        }
      }

      const dragStart = (e: PointerEvent) => {
        // Ignore drags that start on an interactive control (e.g. a link/button)
        if ((e.target as HTMLElement)?.closest('a,button')) return
        if (activePointerId !== null) return
        cancelPendingJump?.()
        cancelPendingJump = null

        try {
          const t = window.getComputedStyle(wrapper).transform
          if (t && t !== 'none') currentTranslate = new DOMMatrix(t).m41
        } catch {
          /* noop */
        }

        prevTranslate = currentTranslate
        activePointerId = e.pointerId
        isDragging = true
        wasDragged = false
        dragDirection = null
        startX = e.clientX
        startY = e.clientY
        wrapper.style.transition = 'none'

        document.addEventListener('pointermove', onDragMove)
        document.addEventListener('pointerup', onDragEnd)
        document.addEventListener('pointercancel', onDragCancel)
      }

      const onDragMove = (e: PointerEvent) => {
        if (e.pointerId !== activePointerId) return
        const dx = e.clientX - startX
        const dy = e.clientY - startY
        const threshold = SliderDefaults.DRAG_THRESHOLD
        if (!dragDirection && (Math.abs(dx) > threshold || Math.abs(dy) > threshold)) {
          dragDirection = Math.abs(dx) >= Math.abs(dy) ? 'horizontal' : 'vertical'
          if (dragDirection === 'vertical') {
            cleanup(true)
            return
          }
        }
        if (dragDirection !== 'horizontal') return
        wasDragged = true
        currentTranslate = prevTranslate + dx
        setSliderPosition()
      }

      const onDragEnd = (e: PointerEvent) => {
        if (e.pointerId !== activePointerId) return
        const movedBy = currentTranslate - prevTranslate
        const threshold = slideStep ? slideStep / 4 : viewport.clientWidth / 6
        const didDrag = wasDragged
        const direction = dragDirection
        cleanup(false)

        if (didDrag && direction === 'horizontal') {
          // Reuse the same bounded navigation as the arrows so dragging can never
          // land on empty trailing slots and wraps correctly when looping.
          if (movedBy < -threshold) {
            nextSlide()
            lastTick = Date.now()
            return
          }
          if (movedBy > threshold) {
            prevSlide()
            lastTick = Date.now()
            return
          }
        }
        // Not a committed swipe: snap back to the current slide.
        updateSliderPosition()
        lastTick = Date.now()
      }

      const onDragCancel = (e: PointerEvent) => {
        if (e.pointerId !== activePointerId) return
        cleanup(true)
      }

      const preventClickOnDrag = (e: MouseEvent) => {
        if (wasDragged) {
          e.preventDefault()
          e.stopPropagation()
          wasDragged = false
        }
      }

      const runAutoplayFrame = () => {
        if (!autoplay || realTotal <= 1) return
        const now = Date.now()
        if (!isDragging && now - lastTick >= autoplayDelay) {
          nextSlide()
          lastTick = now
        }
        autoplayLoopId = requestAnimationFrame(runAutoplayFrame)
      }

      const startAutoplay = () => {
        if (autoplay) {
          lastTick = Date.now()
          runAutoplayFrame()
        }
      }

      const relayoutAndPosition = () => {
        applyLayoutStyles()
        updateSliderPosition(false)
      }

      // Expose navigation actions to the rendered controls.
      controlsRef.current = {
        next: () => {
          wasDragged = false
          nextSlide()
          lastTick = Date.now()
        },
        prev: () => {
          wasDragged = false
          prevSlide()
          lastTick = Date.now()
        },
        goTo: (i: number) => {
          wasDragged = false
          goToSlide(i)
          lastTick = Date.now()
        },
      }

      viewport.addEventListener('pointerdown', dragStart)
      viewport.addEventListener('click', preventClickOnDrag, true)
      const onNativeDragStart = (e: Event) => e.preventDefault()
      viewport.addEventListener('dragstart', onNativeDragStart)

      // Keyboard navigation: Left/Right (and Home/End) move slides when focus is
      // anywhere within the carousel region.
      const section = viewport.parentElement
      const onKeyDown = (e: KeyboardEvent) => {
        if (realTotal <= 1) return
        // Don't hijack keys meant for a focused control inside a slide.
        switch (e.key) {
          case 'ArrowLeft':
            e.preventDefault()
            wasDragged = false
            prevSlide()
            lastTick = Date.now()
            break
          case 'ArrowRight':
            e.preventDefault()
            wasDragged = false
            nextSlide()
            lastTick = Date.now()
            break
          case 'Home':
            e.preventDefault()
            wasDragged = false
            goToSlide(0)
            lastTick = Date.now()
            break
          case 'End':
            e.preventDefault()
            wasDragged = false
            goToSlide(maxIndex())
            lastTick = Date.now()
            break
          default:
            break
        }
      }
      section?.addEventListener('keydown', onKeyDown)

      const onResize = () => relayoutAndPosition()
      window.addEventListener('resize', onResize)

      let ro: ResizeObserver | null = null
      if ('ResizeObserver' in window) {
        ro = new ResizeObserver(() => relayoutAndPosition())
        ro.observe(viewport)
        ro.observe(wrapper)
      }

      // Re-layout when images finish loading (they may change slide widths).
      const imgLoadCleanups: Array<() => void> = []
      slides.forEach((slide) => {
        slide.querySelectorAll('img').forEach((img) => {
          if (img.complete) return
          const onLoad = () => relayoutAndPosition()
          img.addEventListener('load', onLoad, { once: true })
          imgLoadCleanups.push(() => img.removeEventListener('load', onLoad))
        })
      })

      // Initial layout after fonts/images settle.
      let rafId = 0
      const initialInit = () => {
        relayoutAndPosition()
        startAutoplay()
      }
      const onWindowLoad = () => {
        rafId = requestAnimationFrame(initialInit)
      }
      if (document.readyState === 'complete') {
        rafId = requestAnimationFrame(initialInit)
      } else {
        window.addEventListener('load', onWindowLoad, { once: true })
      }

      return () => {
        cancelAnimationFrame(autoplayLoopId)
        cancelAnimationFrame(rafId)
        cancelPendingJump?.()
        controlsRef.current = null
        window.removeEventListener('resize', onResize)
        window.removeEventListener('load', onWindowLoad)
        ro?.disconnect()
        viewport.removeEventListener('pointerdown', dragStart)
        viewport.removeEventListener('click', preventClickOnDrag, true)
        viewport.removeEventListener('dragstart', onNativeDragStart)
        section?.removeEventListener('keydown', onKeyDown)
        document.removeEventListener('pointermove', onDragMove)
        document.removeEventListener('pointerup', onDragEnd)
        document.removeEventListener('pointercancel', onDragCancel)
        imgLoadCleanups.forEach((fn) => fn())
      }
      // Re-run when structural inputs change.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [total, isLoop, slidesPerView, spaceBetween, autoplay, autoplayDelay, JSON.stringify(breakpoints)])

    const classes = hashClass(styled, clsx('slider', className))

    // One dot per reachable page: with N slides showing `perView` at a time there
    // are (N - perView + 1) pages. Clamped to at least 1.
    const pageCount = Math.max(1, total - Math.min(total, Math.max(1, currentPerView)) + 1)

    if (total === 0) return null

    return (
      <SliderContext.Provider value={{ activeIndex }}>
        <section
          ref={ref}
          id={id}
          className={classes}
          role='region'
          aria-label={accessibilityLabel ?? 'Content slider'}
          aria-roledescription='carousel'
          tabIndex={total > 1 ? 0 : undefined}
          data-testid={testId}
        >
          <div
            ref={viewportRef}
            className={hashClass(styled, 'viewport')}
            style={rounded ? { borderRadius: 24 } : undefined}
          >
            <div ref={wrapperRef} className={hashClass(styled, 'wrapper')}>
              {rendered.map((child, i) => {
                const isClone = useClones && (i === 0 || i === totalWithClones - 1)
                const realIndex = useClones ? i - 1 : i
                const displayIndex = realIndex < 0 ? total : realIndex >= total ? 1 : realIndex + 1
                return (
                  <div
                    key={i}
                    ref={(el) => {
                      slideRefs.current[i] = el
                    }}
                    className={hashClass(styled, 'slide')}
                    aria-roledescription='slide'
                    aria-label={`Slide ${displayIndex} of ${total}`}
                    aria-hidden={isClone ? 'true' : undefined}
                  >
                    {child}
                  </div>
                )
              })}
            </div>
          </div>

          {total > 1 && (
            <div className={hashClass(styled, 'controls')}>
              <button
                type='button'
                aria-label='Previous slide'
                className={hashClass(styled, 'nav')}
                onClick={() => controlsRef.current?.prev()}
              >
                <Icon circled size='small' name={IconName.ARROW_LEFT} />
              </button>

              <div role='group' aria-label='Choose slide to display' className={hashClass(styled, 'dots')}>
                {Array.from({ length: pageCount }).map((_, i) => (
                  <button
                    key={i}
                    type='button'
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === activeIndex ? 'true' : undefined}
                    className={hashClass(styled, clsx('bullet', { 'is-active': i === activeIndex }))}
                    onClick={() => controlsRef.current?.goTo(i)}
                  />
                ))}
              </div>

              <button
                type='button'
                aria-label='Next slide'
                className={hashClass(styled, 'nav')}
                onClick={() => controlsRef.current?.next()}
              >
                <Icon circled size='small' name={IconName.ARROW_RIGHT} />
              </button>
            </div>
          )}
        </section>
      </SliderContext.Provider>
    )
  },
)

Slider.displayName = ComponentName.Slider
export default Slider
