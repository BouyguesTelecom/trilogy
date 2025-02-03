import {
  Button,
  Divider,
  IconName,
  Section,
  Spacer,
  SpacerSize,
  Step,
  Stepper,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'
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
      <Title level={TitleLevels.THREE}>Etapes</Title>
      <Divider />
      <Title level={TitleLevels.ONE}>Mon panier</Title>
      <Spacer size={SpacerSize.SIX}></Spacer>
      <Stepper>
        <Step done={1 < activeStep} current={activeStep === 1} iconName={IconName.EYE} label='Recup' />
        <Step done={2 < activeStep} current={activeStep === 2} label='Compléments' />
        <Step
          error
          done={3 < activeStep}
          current={activeStep === 3}
          iconName={IconName.SEARCH}
          label='Coordonate'
          step={3}
        />
        <Step done={4 < activeStep} current={activeStep === 4} label='Livraison' />
        <Step done={5 < activeStep} current={activeStep === 5} iconName={IconName.EYE} label='Confirm' />
      </Stepper>
      <Spacer size={SpacerSize.SIX}></Spacer>
      <Button onClick={handleClickNext} variant={'PRIMARY'}>
        Next
      </Button>

      <Divider />

      <Stepper>
        <Step current data-testid='test-step-1' label='Step 1' />
        <Step data-testid='test-step-2' label='Step 2' />
        <Step data-testid='test-step-3' label='Step 3' />
      </Stepper>
    </Section>
  )
}
