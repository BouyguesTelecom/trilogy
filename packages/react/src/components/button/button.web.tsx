import {
  forwardRef,
  useCallback,
  type CSSProperties,
  type ElementType,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type Ref,
  type RefAttributes,
} from "react"
import { clsx } from "@/utils/clsx"

import { useHashClass } from "@/hooks/useHashClass.web"

import { ButtonMarkup, type ButtonProps } from "./button.types"

export type ButtonRef =
  HTMLAnchorElement | HTMLElement | HTMLInputElement | HTMLButtonElement
type Props = PropsWithChildren<ButtonProps>

/**
 * Button Component
 * @param children {ReactNode} Button label or content
 * @param variant {ButtonVariant} Visual variant: `primary`, `secondary`, `ghost`, or `conversion`; defaults to `primary`
 * @param disabled {boolean} Prevents activation; defaults to `false`
 * @param onClick {(event: ClickEvent) => void} Activation handler
 * @param accessibilityLabel {string} Accessible label announced by assistive technology
 * @param testId {string} Test identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Inline CSS style on Web or React Native style on Native
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param markup {ButtonMarkup} HTML element: `button`, `input`, `a`, or `div`; defaults to `button` unless `href` or `to` selects a link
 * @param loading {boolean} Adds a `loading` class without disabling activation; defaults to `false`
 * @param fullwidth {boolean} Adds a `fullwidth` class; defaults to `false`
 * @param href {string} Link destination
 * @param to {string} Router destination
 * @param name {string} HTML element name
 * @param routerLink {ElementType} Router link component used with `to`
 * @param type {ButtonType} HTML button type: `button`, `reset`, or `submit`; defaults to `button` (`submit` for `input`)
 * @param id {string} Custom element identifier
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
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
      style,
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
          style={style as CSSProperties}
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
        style={style as CSSProperties}
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
