import {
  forwardRef,
  type CSSProperties,
  type ElementType,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type Ref,
  type RefAttributes,
} from "react"
import { clsx } from "@/utils/clsx"

import { useHashClass } from "@/hooks/useHashClass.web"

import { AlertMarkup, type AlertProps } from "./alert.types"

export type AlertRef = HTMLElement
type Props = PropsWithChildren<AlertProps>

/**
 * Alert Component
 * @param children {ReactNode} Alert content
 * @param status {AlertStatus} Status variant: `information`, `warning`, `success`, or `error`; unset by default on Web
 * @param testId {string} Test identifier
 * @param id {string} Custom element identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Inline CSS style on Web or React Native style on Native
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * @param markup {AlertMarkup} HTML element: `p`, `h2`, `h3`, `h4`, `h5`, or `h6`; defaults to `div`
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const Alert: ForwardRefExoticComponent<Props & RefAttributes<AlertRef>> =
  forwardRef<AlertRef, Props>(
    (
      { status, testId, className, id, markup, style, children, ...others },
      ref
    ) => {
      const classes = useHashClass(clsx("alert", status && status, className))

      const Component: ElementType =
        markup && Object.values(AlertMarkup).includes(markup as AlertMarkup)
          ? (markup as ElementType)
          : "div"

      return (
        <Component
          data-testid={testId}
          ref={ref as Ref<any>}
          id={id}
          className={classes}
          style={{ backgroundColor: "", ...(style as CSSProperties) }}
          {...others}
        >
          {children}
        </Component>
      )
    }
  )

Alert.displayName = "Alert"
