import * as React from "react"
import clsx from "clsx"
import { InfoBlockContentProps } from "./InfoBlockContentProps"
import { is, has } from "../../../services"
import { Columns, ColumnsItem } from "../../columns"
import { Text } from "../../text"
import { hashClass } from "../../../helpers"
import { useTrilogyContext } from "../../../context"

/**
 * Info Block Content
 * @param children {React.ReactNode} Children content
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param size {number} Sizes available => 1 - 12
 */
const InfoBlockContent = ({
  className,
  size,
  children,
  ...others
}: InfoBlockContentProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(
    styled,
    clsx("info-block-content", has("text-centered"), className)
  )

  return (
    <div className={classes} {...others}>
      <Columns className={is("vcentered")} centered>
        <ColumnsItem size={size || 8}>
          <div style={{ marginTop: "1rem", marginBottom: "2rem" }}>
            {children && typeof children.valueOf() === "string" ? (
              <Text>{String(children)}</Text>
            ) : (
              children
            )}
          </div>
        </ColumnsItem>
      </Columns>
    </div>
  )
}

export default InfoBlockContent
