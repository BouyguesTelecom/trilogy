// Slider.tsx
import * as React from 'react'
import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName, IconSize } from '@/components'
import { SliderContext } from '@/components/slider/context'
import {
  SliderRadiusValues,
  SLIDER_RADIUS_PIXELS,
  SliderDefaults,
  SLIDER_BREAKPOINT_PX,
  SlidesNum,
  SlidesNumConfig,
} from '@/components/slider/SliderEnum'
import { SliderProps } from '@/components/slider/SliderProps'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { ColumnsGapValue, GapSize } from '@/components/columns/ColumnsTypes'
import clsx from 'clsx'

const FIXED_HEIGHT = 350
const FULLBLEED_PEEK = 32

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      children,
      autoplay,
      gap,
      loop = true,
      radius = SliderRadiusValues.LARGE,
      fullBleed = false,
      onSlideChange,
      className,
      id,
      accessibilityLabel,
      testId,
      slidesPerView,
      snap = false,
    },
    ref,
  ) => {
    const { styled } = useTrilogyContext()

    const viewportRef = React.useRef<HTMLDivElement | null>(null)
    const wrapperRef = React.useRef<HTMLDivElement | null>(null)
    const slideRefs = React.useRef<Array<HTMLDivElement | null>>([])
    const controlsRef = React.useRef<{
      next: () => void
      prev: () => void
      goTo: (i: number) => void
    } | null>(null)

    const slidesArray = React.Children.toArray(children)
    const total = slidesArray.length

    const [slidesPerViewResolved, setSlidesPerViewResolved] = React.useState<number>(1)
    const [cloneCount, setCloneCount] = React.useState<number>(1)
    const [activeIndex, setActiveIndex] = React.useState<number>(0)

    const onSlideChangeRef = React.useRef(onSlideChange)
    React.useEffect(() => {
      onSlideChangeRef.current = onSlideChange
    }, [onSlideChange])

    const autoplayEnabled =
      autoplay === true || (typeof autoplay === 'number' && autoplay > 0)

    const autoplayDelayMs =
      typeof autoplay === 'number' && autoplay > 0
        ? autoplay
        : SliderDefaults.AUTOPLAY_DELAY

    const resolveSlidesPerViewForWidth = React.useCallback(
      (width: number): number => {
        const asNumber =
          typeof slidesPerView === 'number'
            ? (slidesPerView as SlidesNum)
            : undefined
        const asConfig: SlidesNumConfig | undefined =
          typeof slidesPerView === 'object' && slidesPerView !== null
            ? (slidesPerView as SlidesNumConfig)
            : undefined

        const desktopBase: number =
          asConfig?.desktop ??
          (asNumber === SlidesNum.THREE
            ? 3
            : asNumber === SlidesNum.TWO
            ? 2
            : 1)

        const tabletBase: number =
          asConfig?.tablet ??
          (desktopBase === 3 ? 2 : desktopBase)

        const mobileBase: number = asConfig?.mobile ?? 1

        if (width >= SLIDER_BREAKPOINT_PX.desktop) return desktopBase
        if (width >= SLIDER_BREAKPOINT_PX.tablet) return tabletBase
        return mobileBase
      },
      [slidesPerView],
    )

    const computeCloneCount = React.useCallback(
      (perView: number): number => {
        if (!loop || total <= 1) return 0
        if (fullBleed) return 1
        return Math.max(1, Math.min(3, perView || 1))
      },
      [loop, fullBleed, total],
    )

    React.useEffect(() => {
      const viewport = viewportRef.current
      const wrapper = wrapperRef.current
      if (!viewport || !wrapper) return

      const updateSlidesPerView = () => {
        const width = window.innerWidth || viewport.clientWidth
        const perView = resolveSlidesPerViewForWidth(width)
        setSlidesPerViewResolved(perView)
        setCloneCount(computeCloneCount(perView))
      }

      updateSlidesPerView()
      window.addEventListener('resize', updateSlidesPerView)

      return () => {
        window.removeEventListener('resize', updateSlidesPerView)
      }
    }, [resolveSlidesPerViewForWidth, computeCloneCount])

    const useClones = loop && total > 1 && cloneCount > 0

    let rendered = slidesArray
    if (useClones) {
      const n = Math.min(cloneCount, total)
      const head = slidesArray.slice(0, n)
      const tail = slidesArray.slice(total - n)
      rendered = [...tail, ...slidesArray, ...head]
    }
    const totalWithClones = rendered.length

    const isLoop = loop && total > 1

    // Step size: if snap=true, move by current slidesPerViewResolved, else 1
    const stepSize = React.useMemo(() => {
      if (!snap || total <= 1) return 1
      const perView = Math.max(1, slidesPerViewResolved || 1)
      return Math.min(perView, total)
    }, [snap, slidesPerViewResolved, total])

    // Page count for bullets: in snap mode, one bullet per cohort; otherwise one per slide
    const pageCount = React.useMemo(() => {
      if (stepSize <= 1) {
        return Math.max(1, total)
      }
      return Math.max(1, Math.ceil(total / stepSize))
    }, [total, stepSize])

    React.useEffect(() => {
      const viewport = viewportRef.current
      const wrapper = wrapperRef.current
      if (!viewport || !wrapper) return

      viewport.setAttribute('tabindex', '-1')
      viewport.style.outline = 'none'

      const slides = slideRefs.current.filter(Boolean) as HTMLDivElement[]
      const totalSlides = slides.length
      if (totalSlides === 0) return

      const realTotal = total
      const cloneLoop = useClones
      const localCloneCount = useClones ? Math.min(cloneCount, total) : 0

      let gapPx = SliderDefaults.SPACE_BETWEEN
      let currentIndex = cloneLoop ? localCloneCount : 0

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
        if (!cloneLoop) return currentIndex
        return (currentIndex - localCloneCount + realTotal) % realTotal
      }

      const maxIndex = () => Math.max(0, realTotal - 1)

      const emitChange = () => {
        const idx = getRealIndex()
        setActiveIndex(idx)
        onSlideChangeRef.current?.(idx)
      }

      const recomputeSlideStep = () => {
        if (slides.length === 0) {
          slideStep = 0
          return
        }
        const first = slides[0].getBoundingClientRect()
        slideStep =
          slides.length > 1
            ? slides[1].getBoundingClientRect().left - first.left
            : first.width
      }

      const applyLayoutStyles = () => {
        gapPx = gap ? ColumnsGapValue[gap as GapSize] ?? 0 : 0

        wrapper.style.display = 'flex'
        wrapper.style.gap = `${gapPx}px`
        wrapper.style.width = '100%'

        if (fullBleed) {
          wrapper.style.paddingInline = `${FULLBLEED_PEEK}px`
          viewport.style.overflow = 'visible'
        } else {
          wrapper.style.paddingInline = '0px'
          viewport.style.overflow = 'hidden'
        }

        viewport.style.width = '100%'
        viewport.style.cursor = 'grab'
        viewport.style.userSelect = 'none'
        viewport.style.touchAction = 'pan-x'
        viewport.style.outline = 'none'

        const perView = Math.max(1, slidesPerViewResolved || 1)
        const viewportWidth = viewport.clientWidth

        const totalGapWidth = gapPx * (perView - 1)
        const targetSlideWidth =
          perView > 0 && viewportWidth > 0
            ? Math.max(0, (viewportWidth - totalGapWidth) / perView)
            : viewportWidth

        slides.forEach((slide) => {
          slide.style.flexShrink = '0'
          slide.style.boxSizing = 'border-box'
          slide.style.width = `${targetSlideWidth}px`

          slide.querySelectorAll('img').forEach((img) => {
            img.style.pointerEvents = 'none'
            img.style.userSelect = 'none'
            img.setAttribute('draggable', 'false')
          })
        })

        recomputeSlideStep()
      }

      const setSliderPosition = () => {
        const offset = fullBleed ? FULLBLEED_PEEK : 0
        wrapper.style.transform = `translate3d(${currentTranslate - offset}px, 0, 0)`
      }

      const jumpToRealSlide = () => {
        if (!cloneLoop || isDragging) return

        const firstRealIndex = localCloneCount
        const lastRealIndex = localCloneCount + realTotal - 1

        if (currentIndex < firstRealIndex) {
          currentIndex += realTotal
        } else if (currentIndex > lastRealIndex) {
          currentIndex -= realTotal
        } else {
          return
        }

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
          wrapper.style.transition = `transform ${
            SliderDefaults.TRANSITION_MS / 1000
          }s ease-out`
          scheduleLoopJump()
        } else {
          wrapper.style.transition = 'none'
        }
        setSliderPosition()
        emitChange()
      }

      const realStep = stepSize && stepSize > 0 ? stepSize : 1

      const goToRealIndex = (targetReal: number) => {
        const max = maxIndex()
        let clamped = targetReal

        if (isLoop) {
          clamped = ((targetReal % (max + 1)) + (max + 1)) % (max + 1)
        } else {
          clamped = Math.min(Math.max(targetReal, 0), max)
        }

        if (cloneLoop) {
          currentIndex = localCloneCount + clamped
        } else {
          currentIndex = clamped
        }
        updateSliderPosition()
      }

      const nextSlide = () => {
        const currentReal = getRealIndex()
        const targetReal = currentReal + realStep
        goToRealIndex(targetReal)
        lastTick = Date.now()
      }

      const prevSlide = () => {
        const currentReal = getRealIndex()
        const targetReal = currentReal - realStep
        goToRealIndex(targetReal)
        lastTick = Date.now()
      }

      const goToSlide = (pageIndex: number) => {
        if (realStep > 1) {
          const targetReal = pageIndex * realStep
          goToRealIndex(targetReal)
        } else {
          goToRealIndex(pageIndex)
        }
        lastTick = Date.now()
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
        if ((e.target as HTMLElement)?.closest('a,button')) return
        if (activePointerId !== null) return
        cancelPendingJump?.()
        cancelPendingJump = null

        try {
          const t = window.getComputedStyle(wrapper).transform
          if (t && t !== 'none') currentTranslate = new DOMMatrix(t).m41
        } catch {
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
        if (
          !dragDirection &&
          (Math.abs(dx) > threshold || Math.abs(dy) > threshold)
        ) {
          dragDirection =
            Math.abs(dx) >= Math.abs(dy) ? 'horizontal' : 'vertical'
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
        const threshold = slideStep
          ? slideStep / 4
          : viewport.clientWidth / 6
        const didDrag = wasDragged
        const direction = dragDirection
        cleanup(false)

        if (didDrag && direction === 'horizontal') {
          if (movedBy < -threshold) {
            nextSlide()
            return
          }
          if (movedBy > threshold) {
            prevSlide()
            return
          }
        }
        updateSliderPosition()
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
        if (!autoplayEnabled || realTotal <= 1) return
        const now = Date.now()
        if (!isDragging && now - lastTick >= autoplayDelayMs) {
          nextSlide()
          lastTick = now
        }
        autoplayLoopId = requestAnimationFrame(runAutoplayFrame)
      }

      const startAutoplay = () => {
        if (autoplayEnabled) {
          lastTick = Date.now()
          runAutoplayFrame()
        }
      }

      const relayoutAndPosition = () => {
        applyLayoutStyles()
        updateSliderPosition(false)
      }

      controlsRef.current = {
        next: () => {
          wasDragged = false
          nextSlide()
        },
        prev: () => {
          wasDragged = false
          prevSlide()
        },
        goTo: (i: number) => {
          wasDragged = false
          goToSlide(i)
        },
      }

      viewport.addEventListener('pointerdown', dragStart)

      const onTouchMove = (e: TouchEvent) => {
        if (!isDragging) return
        if (dragDirection === 'horizontal') {
          e.preventDefault()
        }
      }
      viewport.addEventListener('touchmove', onTouchMove, { passive: false })

      viewport.addEventListener('click', preventClickOnDrag, true)
      const onNativeDragStart = (e: Event) => e.preventDefault()
      viewport.addEventListener('dragstart', onNativeDragStart)

      const onKeyDown = (e: KeyboardEvent) => {
        if (realTotal <= 1) return

        const target = e.target as HTMLElement | null
        if (
          target &&
          target.closest(
            'input, select, textarea, [role="slider"], [role="spinbutton"], [role="combobox"]',
          )
        ) {
          return
        }

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
            goToRealIndex(0)
            lastTick = Date.now()
            break
          case 'End':
            e.preventDefault()
            wasDragged = false
            goToRealIndex(maxIndex())
            lastTick = Date.now()
            break
          default:
            break
        }
      }
      viewport.addEventListener('keydown', onKeyDown)

      const onResize = () => relayoutAndPosition()
      window.addEventListener('resize', onResize)

      let ro: ResizeObserver | null = null
      if ('ResizeObserver' in window) {
        ro = new ResizeObserver(() => relayoutAndPosition())
        ro.observe(viewport)
        ro.observe(wrapper)
      }

      const imgLoadCleanups: Array<() => void> = []
      slides.forEach((slide) => {
        slide.querySelectorAll('img').forEach((img) => {
          if (img.complete) return
          const onLoad = () => relayoutAndPosition()
          img.addEventListener('load', onLoad, { once: true })
          imgLoadCleanups.push(() =>
            img.removeEventListener('load', onLoad),
          )
        })
      })

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
        viewport.removeEventListener('touchmove', onTouchMove as any)
        viewport.removeEventListener('click', preventClickOnDrag, true)
        viewport.removeEventListener('dragstart', onNativeDragStart)
        viewport.removeEventListener('keydown', onKeyDown)
        document.removeEventListener('pointermove', onDragMove)
        document.removeEventListener('pointerup', onDragEnd)
        document.removeEventListener('pointercancel', onDragCancel)
        imgLoadCleanups.forEach((fn) => fn())
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
      total,
      loop,
      isLoop,
      gap,
      autoplayEnabled,
      autoplayDelayMs,
      slidesPerViewResolved,
      cloneCount,
      fullBleed,
      useClones,
      stepSize,
    ])

    const classes = hashClass(styled, clsx('slider', className))
    const borderRadius = SLIDER_RADIUS_PIXELS[radius]

    if (total === 0) return null

    const isAtStart = !loop && activeIndex === 0
    const isAtEnd = !loop && activeIndex === total - 1

    const currentPage =
      stepSize > 1 ? Math.floor(activeIndex / stepSize) : activeIndex

    return (
      <SliderContext.Provider value={{ activeIndex }}>
        <div
          ref={ref}
          id={id}
          className={classes}
          data-testid={testId}
        >
          <div
            ref={viewportRef}
            className={hashClass(styled, 'viewport')}
            style={{
              height: FIXED_HEIGHT,
              width: '100%',
              borderRadius,
              overflow: fullBleed ? 'visible' : 'hidden',
            }}
          >
            <div
              ref={wrapperRef}
              className={hashClass(styled, 'wrapper')}
              style={{ height: '100%' }}
            >
              {rendered.map((child, i) => {
                const isClone =
                  useClones &&
                  (i < cloneCount || i >= totalWithClones - cloneCount)
                const realIndex = useClones ? i - cloneCount : i
                const displayIndex =
                  realIndex < 0 ? total : realIndex >= total ? 1 : realIndex + 1
                return (
                  <div
                    key={i}
                    ref={(el) => {
                      slideRefs.current[i] = el
                    }}
                    className={hashClass(styled, 'slide')}
                    aria-roledescription="slide"
                    aria-label={`Slide ${displayIndex} of ${total}`}
                    aria-hidden={isClone ? 'true' : undefined}
                    style={{ height: '100%' }}
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
                type="button"
                aria-label="Previous slide"
                className={hashClass(styled, 'nav')}
                onClick={(e) => {
                  e.currentTarget.blur()
                  controlsRef.current?.prev()
                }}
                style={{
                  overflow: 'hidden',
                  borderRadius: '50%',
                }}
                disabled={isAtStart}
              >
                <Icon circled size={IconSize.SMALL} name={IconName.ARROW_LEFT} />
              </button>

              <div
                role="group"
                aria-label={accessibilityLabel ?? 'Content slider'}
                className={hashClass(styled, 'dots')}
              >
                {Array.from({ length: pageCount }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === currentPage ? 'true' : undefined}
                    className={hashClass(
                      styled,
                      clsx('bullet', { 'is-active': i === currentPage }),
                    )}
                    onClick={() => controlsRef.current?.goTo(i)}
                  />
                ))}
              </div>

              <button
                type="button"
                aria-label="Next slide"
                className={hashClass(styled, 'nav')}
                onClick={(e) => {
                  e.currentTarget.blur()
                  controlsRef.current?.next()
                }}
                style={{
                  overflow: 'hidden',
                  borderRadius: '50%',
                }}
                disabled={isAtEnd}
              >
                <Icon circled size={IconSize.SMALL} name={IconName.ARROW_RIGHT} />
              </button>
            </div>
          )}
        </div>
      </SliderContext.Provider>
    )
  },
)

Slider.displayName = ComponentName.Slider
export default Slider
