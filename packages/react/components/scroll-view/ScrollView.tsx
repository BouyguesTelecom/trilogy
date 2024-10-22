import * as React from "react"
import { ScrollViewProps } from "./ScrollViewProps"
import { useTrilogyContext } from "@/context"
import { hashClass } from "@/helpers"
import clsx from "clsx"
import { is } from "@/services"
import { ScrollDirectionEnum } from "@/objects"

/**
 * Scroll View Component
 * @param children {React.ReactNode} ScrollView child
 * @param id {string} Id for Web / TestID for Native
 * @param scrollDirection {Direction} Scroll vertically or horizontally
 * - -------------- WEB PROPERTIES -----------------
 * @param className {string} Additionnal css classes
 * - -------------- NATIVE PROPERTIES ---------------
 * @param footer {React.ReactNode} ScrollView footer
 * @param bounce {boolean} Bounce effect on scroll
 * @param centerContent {boolean} center content in scrollView
 * @param refresh {boolean} Is Refreshable ScrollView
 * @param refreshControlColor {TrilogyColor} Color Of Refresh Control
 * @param scrollDirection {Direction} Scroll vertically in default
 * @param onRefresh {void} On Refreshing ScrollView
 */
const ScrollView = React.forwardRef<HTMLDivElement, ScrollViewProps>(
  ({ id, scrollDirection, children }, ref): JSX.Element => {
    const { styled } = useTrilogyContext()

    const scrollDirectionClassName = () => {
      switch (scrollDirection) {
        case ScrollDirectionEnum?.HORIZONTAL:
          return is("horizontal")
        case ScrollDirectionEnum?.VERTICAL:
          return is("vertical")
        default:
          return ""
      }
    }

    const classes = hashClass(
      styled,
      clsx("scroll-view", scrollDirection && scrollDirectionClassName())
    )
    return (
      <div ref={ref} className={classes} id={id}>
        {children}
      </div>
    )
  }
)

ScrollView.displayName = "ScrollView"

export default ScrollView
