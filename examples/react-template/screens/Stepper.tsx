import * as React from 'react'
import {
  Button,
  Divider,
  IconName,
  Section,
  Spacer,
  Stepper,
  StepperStep,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'

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
      <Spacer size={30}></Spacer>
      <Stepper>
        <StepperStep done={1 < activeStep} current={activeStep === 1} iconName={IconName.EYE} label='Recup' />
        <StepperStep done={2 < activeStep} current={activeStep === 2} label='Compléments' />
        <StepperStep
          error
          done={3 < activeStep}
          current={activeStep === 3}
          iconName={IconName.SEARCH}
          label='Coordonate'
          step={3}
        />
        <StepperStep done={4 < activeStep} current={activeStep === 4} label='Livraison' />
        <StepperStep
          done={5 < activeStep}
          current={activeStep === 5}
          iconName={IconName.EYE}
          label='Confirm'
        />
      </Stepper>
      <Spacer size={30}></Spacer>
      <Button onClick={handleClickNext} variant={'PRIMARY'}>
        Next
      </Button>
    </Section>
  )
}
