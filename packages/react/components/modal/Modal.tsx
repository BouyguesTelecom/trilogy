import React, {useEffect, useRef, useState} from "react"
import {is} from "@/services"
import {CloseButtonProps, ModalContentButtonProps, ModalProps,} from "./ModalProps"
import {Button, ButtonList, ButtonType, ButtonVariant} from "@/components/button"
import {Text} from "@/components/text"
import {ModalMarkup, ModalMarkupValues} from "./ModalEnum"
import ModalTitle from "./title/ModalTitle"
import ModalFooter from "./footer/ModalFooter"
import {ClickEvent, OnClickEvent} from "@/events/OnClickEvent"
import {hashClass} from "@/helpers/hashClassesHelpers"
import clsx from "clsx"
import {useTrilogyContext} from "@/context/index"

/**
 * Modal Component
 * @param active {boolean} Activated Modal
 * @param title {string} Title Modal
 * @param content {string} Content text for modal
 * @param triggerContent {string} Trigger custom element
 * @param iconName IconName for icon title
 * @param iconColor IconColor for icon title
 * @param ctaCancelOnClick {Function} function for cancel button (appear when set)
 * @param ctaOnClick {Function} On Click Event CTA
 * @param onClose {Function} Additionnal close custom function
 * @param onOpen {Function} Additionnal open custom function
 * @param closeIcon {boolean} Display close icon for Modal
 * @param children {React.ReactNode}
 * @param ctaContent {string} Content cta
 * @param fullwidth {boolean} Fullwidth Modal
 * @param disableHandlingClickOutside {boolean} Disable the handling on outside click event
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param contentClassNames {string} Additionnal CSS Classes for modal content
 * @param triggerMarkup {ModalMarkup} h1|h2|h3|h4|h5|h6|p|span|div|button|a
 * @param triggerClassNames {string} Additionnal CSS Classes for trigger element
 * @param panel {boolean} Panel Side Modal
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 * @param bottom {boolean} If bottom
 * @param swipable {boolean} Swipable Native Modal
 */
const Modal = ({
  children,
  className,
  contentClassNames,
  active,
  title,
  content,
  triggerMarkup,
  triggerContent,
  triggerClassNames = "button is-primary",
  ctaContent,
  ctaOnClick,
  onClose,
  onOpen,
  iconName,
  ctaCancelOnClick,
  closeIcon,
  iconColor,
  panel,
  footerClassNames,
  footer,
  fullwidth,
  disableHandlingClickOutside = false,
  testId,
  ...others
}: ModalProps): JSX.Element => {
  const modal = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState<boolean>(active || false)
  const { styled } = useTrilogyContext()

  const handleClickOutside = (e: Event) => {
    if (modal?.current?.contains(e.target as Node)) {
      return
    } else {
      handleClose(onClose, e)
    }
  }

  useEffect(() => {
    setDisplay(active || false)
  }, [active])

  useEffect(() => {
    if (display && !disableHandlingClickOutside) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [display, disableHandlingClickOutside])

  const classes = React.useMemo(
    () =>
      hashClass(
        styled,
        clsx(
          "modal",
          display && is("active"),
          panel && is("panel"),
          fullwidth && is("fullwidth"),
          className
        )
      ),
    [active, display, panel, className, styled]
  )
  const contentClasses = React.useMemo(
    () => hashClass(styled, clsx("modal-content", contentClassNames)),
    [contentClassNames, styled]
  )
  const footerClasses = React.useMemo(
    () => clsx("modal-footer", footerClassNames),
    [footerClassNames, styled]
  )

  function handleClose(onCloseFunc: ClickEvent | undefined, e: OnClickEvent) {
    setDisplay(false)
    if (onCloseFunc) {
      onCloseFunc(e)
    }
  }

  function handleOpen(onOpenFunc: ClickEvent | undefined, e: OnClickEvent) {
    setDisplay(true)
    if (onOpenFunc) {
      onOpenFunc(e)
    }
  }

  /**
   * key in Enum works only in TS or with number enum for JS
   * for string enum (as in this case) we need to use Object.values.includes for JS usage
   * string enum aren't reverse mapped so the first solution doesn't work
   */
  const isCorrectMarkup = (stringMarkup: ModalMarkup | ModalMarkupValues) => {
    if (
      stringMarkup in ModalMarkup ||
      Object.values(ModalMarkup).includes(stringMarkup as ModalMarkup)
    )
      return true
  }
  const TriggerTag = React.useMemo(
    () =>
      (triggerMarkup && isCorrectMarkup(triggerMarkup)
        ? triggerMarkup
        : "button"),
    [triggerMarkup]
  )

  const ModalContentButton = ({
    ...props
  }: ModalContentButtonProps): JSX.Element => (
    <Button markup={"button"} className={is("PRIMARY")} {...props} />
  )

  const ModalCancelButton = ({
    onCloseFunc,
  }: CloseButtonProps): JSX.Element => (
    <Button
      variant={ButtonVariant.SECONDARY}
      onClick={(e) => {
        handleClose(onCloseFunc, e)
      }}
      type={ButtonType.BUTTON}
    >
      Annuler
    </Button>
  )

  const CloseButton = ({ onCloseFunc }: CloseButtonProps): JSX.Element => (
    <button
      onClick={(e: React.MouseEvent) => {
        handleClose(onCloseFunc, e)
      }}
      className={hashClass(styled, clsx("modal-close", is("large")))}
      aria-label='close'
      type={ButtonType.BUTTON}
    />
  )

  return (
    <div data-testid={testId}>
      {triggerContent && (
        <TriggerTag
          onClick={(e: React.MouseEvent) => {
            handleOpen(onOpen, e)
          }}
          className={hashClass(styled, clsx(triggerClassNames))}
        >
          {triggerContent}
        </TriggerTag>
      )}
      <div className={classes} {...others}>
        <div ref={modal} className={contentClasses}>
          {closeIcon && <CloseButton onCloseFunc={onClose} />}
          {(title || iconName) && (
            <ModalTitle iconColor={iconColor} iconName={iconName}>
              {title}
            </ModalTitle>
          )}
          {content && typeof content === "string" ? (
            <Text>{content}</Text>
          ) : (
            content
          )}
          {children != null && children}
          <ModalFooter className={footerClasses}>
            {(ctaOnClick != null || ctaCancelOnClick != null) && (
            <ButtonList centered className={is("flex")}>
              {ctaCancelOnClick && (
                <ModalCancelButton onCloseFunc={ctaCancelOnClick} />
              )}
              {ctaOnClick && (
                <ModalContentButton onClick={ctaOnClick}>
                  {ctaContent}
                </ModalContentButton>
              )}
            </ButtonList>
            ) || footer }
          </ModalFooter>
        </div>
      </div>
    </div>
  )
}

export default Modal
