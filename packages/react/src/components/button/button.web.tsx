import {
  forwardRef,
  useCallback,
  type ElementType,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type Ref,
  type RefAttributes,
} from "react"

import { useHashClass } from "../../hooks/useHashClass.web"
import { clsx } from "../../utils/clsx"
import { ButtonMarkup, type ButtonProps } from "./button.types"

export type ButtonRef =
  HTMLAnchorElement | HTMLElement | HTMLInputElement | HTMLButtonElement
type Props = PropsWithChildren<ButtonProps>

export const Button: ForwardRefExoticComponent<
  Props & RefAttributes<ButtonRef>
> = forwardRef<ButtonRef, Props>(
  (
    {
      markup,
      loading,
      variant = "primary",
      disabled = false,
      href,
      id,
      fullwidth,
      children,
      className,
      to,
      accessibilityLabel,
      onClick,
      name,
      routerLink,
      type,
      testId,
      ...others
    },
    ref
  ) => {
    const classes = useHashClass(
      clsx(
        "button",
        variant && variant,
        loading && "loading",
        fullwidth && "fullwidth",
        className
      )
    )

    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLElement>) => {
        if (disabled) {
          event.preventDefault()
          event.stopPropagation()
          return
        }
        onClick?.(event)
        event.stopPropagation()
      },
      [disabled, onClick]
    )

    // Balise <input> : élément auto-fermant avec value
    if (markup === ButtonMarkup.input) {
      return (
        <input
          data-testid={testId}
          ref={ref as Ref<HTMLInputElement>}
          id={id}
          name={name}
          className={classes}
          aria-label={accessibilityLabel}
          disabled={disabled}
          type={type ?? "submit"}
          value={
            typeof children === "string" || typeof children === "number"
              ? String(children)
              : undefined
          }
          onClick={
            handleClick as unknown as React.MouseEventHandler<HTMLInputElement>
          }
          {...others}
        />
      )
    }

    // Résolution polymorphique du composant conteneur
    const Component: ElementType =
      routerLink && to && !disabled
        ? routerLink
        : href || to
          ? "a"
          : markup &&
              Object.values(ButtonMarkup).includes(markup as ButtonMarkup)
            ? (markup as ElementType)
            : "button"

    const isButton = Component === "button"
    const isAnchor = Component === "a"

    return (
      <Component
        data-testid={testId}
        ref={ref as Ref<any>}
        id={id}
        name={name}
        className={classes}
        aria-label={accessibilityLabel}
        disabled={isButton ? disabled : undefined}
        aria-disabled={!isButton && disabled ? true : undefined}
        tabIndex={!isButton && disabled ? -1 : undefined}
        type={isButton ? (type ?? "button") : undefined}
        href={isAnchor ? (href ?? to) : undefined}
        to={Component === routerLink ? to : undefined}
        onClick={handleClick}
        {...others}
      >
        {children}
      </Component>
    )
  }
)

Button.displayName = "Button"
