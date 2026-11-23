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

import { TitleColor, TitleLevel, type TitleProps } from "./title.types"

export type TitleRef = HTMLHeadingElement
type Props = PropsWithChildren<TitleProps>

const levelClasses: Record<TitleLevel, string> = {
  [TitleLevel.one]: "one",
  [TitleLevel.two]: "two",
  [TitleLevel.three]: "three",
  [TitleLevel.four]: "four",
  [TitleLevel.five]: "five",
  [TitleLevel.six]: "six",
}

export const Title: ForwardRefExoticComponent<Props & RefAttributes<TitleRef>> =
  forwardRef<TitleRef, Props>(
    (
      {
        children,
        level = TitleLevel.one,
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
      const safeLevel = levelClasses[level] ? level : TitleLevel.one
      const Component: ElementType = markup ?? `h${safeLevel}`
      const fontFamily =
        safeLevel === TitleLevel.one || safeLevel === TitleLevel.two
          ? "font-family-secondary"
          : "font-family-primary"
      const effectiveFontWeight =
        fontWeight ??
        (safeLevel === TitleLevel.one || safeLevel === TitleLevel.two
          ? "medium"
          : "semibold")
      const classes = useHashClass(
        clsx(
          "title",
          levelClasses[safeLevel],
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
