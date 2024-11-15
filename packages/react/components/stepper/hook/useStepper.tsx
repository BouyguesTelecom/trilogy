import React from 'react'

interface IParams {
  children: React.ReactNode
}

export const useStepper = ({ children }: IParams) => {
  try {
    const [currentStep, setCurrentStep] = React.useState<number>(0)
    const nbChild = React.useMemo<number>(() => getNbChild(children), [children])

    React.useEffect(() => {
      getCurrentStep(children, setCurrentStep)
    }, [children])

    return { currentStep, nbChild }
  } catch {
    return {
      currentStep: getCurrentStep(children),
      nbChild: getNbChild(children),
    }
  }
}

const getNbChild = (element: React.ReactNode) => {
  if (element && Array.isArray(element)) return element.length
  if (element && !Array.isArray(element)) return 1
  return 0
}

const getCurrentStep = (element: React.ReactNode, dispatch?: React.Dispatch<React.SetStateAction<number>>) => {
  if (element) {
    if (Array.isArray(element)) {
      let haveCurrentStep = false
      element.map((child) => {
        if (child?.props?.current) {
          haveCurrentStep = true
          dispatch && dispatch(child.props.step)
          return child.props.step
        }
      })
      if (!haveCurrentStep) {
        dispatch && dispatch(1)
        return 1
      }
    } else {
      dispatch && dispatch(1)
      return 1
    }
  }
}
