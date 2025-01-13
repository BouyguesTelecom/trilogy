import React from 'react'

interface IParams {
  children?: React.ReactNode
}

export const useStepper = ({ children }: IParams) => {
  try {
    const [currentStep, setCurrentStep] = React.useState<number>(1)

    const nbChild = React.useMemo<number>(() => {
      return getNbChilds(children)
    }, [children])

    React.useEffect(() => {
      getCurrentStep(children, setCurrentStep)
    }, [children])

    return {
      currentStep,
      nbChild,
    }
  } catch {
    return {
      currentStep: getCurrentStep(children),
      nbChild: getNbChilds(children),
    }
  }
}

const getNbChilds = (children: React.ReactNode) => {
  if (children && Array.isArray(children)) return children.length
  if (children && !Array.isArray(children)) return 1
  return 0
}

const getCurrentStep = (children: React.ReactNode, setCurrentStep?: React.Dispatch<React.SetStateAction<number>>) => {
  if (children) {
    let currentStep = 1
    if (Array.isArray(children)) {
      let haveCurrentStep = false
      children.map((child, index) => {
        if (child?.props?.current) {
          haveCurrentStep = true
          currentStep = index + 1
          setCurrentStep && setCurrentStep(index + 1)
        }
      })
      if (!haveCurrentStep) setCurrentStep && setCurrentStep(1)
      return currentStep
    } else {
      setCurrentStep && setCurrentStep(1)
      return currentStep
    }
  }
}
