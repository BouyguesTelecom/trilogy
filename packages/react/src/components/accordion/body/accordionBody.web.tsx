import {
  forwardRef,
  useEffect,
  type CSSProperties,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { clsx } from "@/utils/clsx"

import { useHashClass } from "@/hooks/useHashClass.web"

import { useAccordionItem } from "../accordionContext"
import type { AccordionBodyProps } from "./accordionBody.types"

/**
 * AccordionBody Component
 * @param children {ReactNode} Expandable content
 * @param testId {string} Test identifier
 * @param id {string} Element identifier, generated when omitted
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Inline style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const AccordionBody: ForwardRefExoticComponent<
  PropsWithChildren<AccordionBodyProps> & RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, PropsWithChildren<AccordionBodyProps>>(
  ({ children, id, testId, className, style }, ref) => {
    const state = useAccordionItem()
    const classes = useHashClass(clsx("accordionBody", className))
    const { defaultBodyId, setBodyId } = state
    useEffect(() => {
      setBodyId(id ?? defaultBodyId)
      return () => setBodyId(defaultBodyId)
    }, [id, defaultBodyId, setBodyId])
    return (
      <div
        ref={ref}
        id={id ?? state.bodyId}
        data-testid={testId}
        className={classes}
        style={style as CSSProperties}
        hidden={!state.open}
      >
        {children}
      </div>
    )
  }
)
AccordionBody.displayName = "AccordionBody"
