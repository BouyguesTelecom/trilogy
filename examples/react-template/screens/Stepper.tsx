import { Button, IconName, Section, Spacer, Step, Stepper } from '@trilogy-ds/react/components'
import * as React from 'react'

export const StepperScreen = (): JSX.Element => {
  const [activeStep, setActiveStep] = React.useState<number>(1)

  const handleClickNext = React.useCallback(() => {
    if (activeStep === 5) {
      setActiveStep(1)
    } else {
      setActiveStep((curr) => curr + 1)
    }
  }, [activeStep])

  return (
    <Section>
      <Stepper>
        <Step done={1 < activeStep} current={activeStep === 1} iconName={IconName.EYE} label='Recup' />
        <Step done={2 < activeStep} current={activeStep === 2} label='Compléments' iconName={IconName.BELL} />
        <Step error done={3 < activeStep} current={activeStep === 3} iconName={IconName.SEARCH} label='Coordonate' />
        <Step done={4 < activeStep} current={activeStep === 4} label='Livraison' iconName={IconName.INFOS_CIRCLE} />
        <Step done={5 < activeStep} current={activeStep === 5} iconName={IconName.EYE} label='Confirm' />
      </Stepper>
      <Spacer size={12} />

      <Button onClick={handleClickNext} variant={'PRIMARY'}>
        Next
      </Button>

      <Spacer size={12} />

      <Stepper>
        <Step current data-testid='test-step-1' label='Step 1' />
        <Step data-testid='test-step-2' label='Step 2' />
        <Step data-testid='test-step-3' label='Step 3' />
      </Stepper>
    </Section>
  )
}
