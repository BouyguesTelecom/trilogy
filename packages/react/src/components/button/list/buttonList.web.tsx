import {
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithChildren,
  RefAttributes,
  type CSSProperties,
} from "react"
import { clsx } from "@/utils/clsx"
import { getClassName } from "@/utils/getClassName"

import { useHashClass } from "@/hooks/useHashClass.web"

import {
  ButtonListAlignItems,
  ButtonListDirection,
  ButtonListJustifyContent,
  ButtonListProps,
} from "./buttonList.types"

export type ButtonListRef = HTMLDivElement
type Props = PropsWithChildren<ButtonListProps>

/**
 * ButtonList Component
 * @param children {ReactNode} Actions arranged in the list
 * @param alignItems {ButtonListAlignItems} Cross-axis alignment; defaults to `center` on Web
 * @param justifyContent {ButtonListJustifyContent} Main-axis distribution; defaults to `center` on Web
 * @param direction {ButtonListDirection} Layout direction: `column` or `row`; defaults to `column`
 * @param wrap {"wrap" | "nowrap"} Whether children wrap; defaults to `nowrap`
 * @param accessibilityLabel {string} Accepted by the type but not forwarded on either platform
 * @param id {string} Custom element identifier
 * @param testId {string} Test identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Inline CSS style on Web or React Native style on Native
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const ButtonList: ForwardRefExoticComponent<
  Props & RefAttributes<ButtonListRef>
> = forwardRef<ButtonListRef, Props>(
  (
    {
      alignItems = ButtonListAlignItems.center,
      direction = ButtonListDirection.column,
      justifyContent = ButtonListJustifyContent.center,
      className,
      style,
      id,
      testId,
      children,
      wrap,
    },
    ref
  ) => {
    const classes = useHashClass(
      clsx(
        "buttonList",
        alignItems && getClassName("align-items", alignItems),
        direction && getClassName("flex-direction", direction),
        justifyContent && getClassName("justify-content", justifyContent),
        wrap && getClassName("flex-wrap", wrap),
        className
      )
    )

    return (
      <div
        data-testid={testId}
        ref={ref}
        id={id}
        className={classes}
        style={style as CSSProperties}
      >
        {children}
      </div>
    )
  }
)

ButtonList.displayName = "ButtonList"
