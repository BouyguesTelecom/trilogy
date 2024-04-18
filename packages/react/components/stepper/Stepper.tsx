import * as React from "react"
import clsx from "clsx"
import { StepperProps } from "./StepperProps"
import { has } from "../../services/classify"
import { hashClass } from "../../helpers"
import { useTrilogyContext } from "../../context"

/**
 * Stepper Component
 * @param className Additionnal CSS Classes
 * @param centered Center the stepper
 * @param children {ReactNode}
 */
const Stepper = ({
  className,
  centered,
  children,
  ...others
}: StepperProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx("stepper-wrapper", className))
  const centerClasses = hashClass(
    styled,
    clsx("section", has("text-centered"), className)
  )
  const [currentStep, setCurrentStep] = React.useState<number>(0)

  const nbChild = React.useMemo<number>(() => {
    if (children && Array.isArray(children)) return children.length
    if (children && !Array.isArray(children)) return 1
    return 0
  }, [children])

  React.useEffect(() => {
    if (children) {
      if (Array.isArray(children)) {
        let haveCurrentStep = false
        children.map((child) => {
          if (child.props.current) {
            haveCurrentStep = true
            setCurrentStep(child.props.step)
          }
        })
        if (!haveCurrentStep) setCurrentStep(1)
      } else {
        setCurrentStep(1)
      }
    }
  }, [children])

  if (centered) {
    return (
      <section className={centerClasses}>
        <div className={classes} {...others}>
          {children}
          <div className='step-count'>
            {currentStep}/{nbChild}
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className={classes} {...others}>
      {children}
      <div className='step-count'>
        {currentStep}/{nbChild}
      </div>
    </div>
  )
}

export default Stepper
