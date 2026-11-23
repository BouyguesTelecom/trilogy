import {
  forwardRef,
  type ElementType,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type Ref,
  type RefAttributes,
} from "react"
import { clsx } from "@/utils/clsx"

import { useHashClass } from "@/hooks/useHashClass.web"

import { TitleColor, TitleSize, type TitleProps } from "./title.types"

export type TitleRef = HTMLHeadingElement
type Props = PropsWithChildren<TitleProps>

export const Title: ForwardRefExoticComponent<Props & RefAttributes<TitleRef>> =
  forwardRef<TitleRef, Props>(
    (
      {
        children,
        size = TitleSize.xxxxl,
        color = TitleColor.primary,
        fontWeight,
        accessibilityLabel,
        className,
        id,
        testId,
        markup,
      },
      ref
    ) => {
      const safeSize = Object.values(TitleSize).includes(size)
        ? size
        : TitleSize.xxxxl
      const Component: ElementType = markup ?? "h1"
      const fontFamily =
        safeSize === TitleSize.xxxxl || safeSize === TitleSize.xxxl
          ? "font-family-secondary"
          : "font-family-primary"
      const effectiveFontWeight =
        fontWeight ??
        (safeSize === TitleSize.xxxxl || safeSize === TitleSize.xxxl
          ? "medium"
          : "semibold")
      const classes = useHashClass(
        clsx(
          "title",
          `font-size-${safeSize}`,
          fontFamily,
          `text-${color}`,
          `font-weight-${effectiveFontWeight}`,
          className
        )
      )

      return (
        <Component
          data-testid={testId}
          ref={ref as Ref<HTMLHeadingElement>}
          id={id}
          className={classes}
          aria-label={accessibilityLabel}
        >
          {children}
        </Component>
      )
    }
  )

Title.displayName = "Title"
