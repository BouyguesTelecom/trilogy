import React from 'react'
import {
  Section,
  Title,
  TitleLevels,
  Divider,
  Box,
  BoxContent,
  IconName,
  Stepper,
  StepperStep,
  Spacer,
  Button,
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

      <Box>
        <BoxContent>
          <Title level={TitleLevels.ONE}>Mon panier</Title>
          <Spacer size={30}></Spacer>
          <Stepper>
            <StepperStep
              error
              done={1 < activeStep}
              current={activeStep === 1}
              iconName={IconName.CREDIT_CARD}
              label='Récapitulatif'
              step={1}
            />
            <StepperStep done={2 < activeStep} current={activeStep === 2} label='Compléments' step={2} />
            <StepperStep
              done={3 < activeStep}
              current={activeStep === 3}
              iconName={IconName.SEARCH}
              label='Coordonnées'
              step={3}
            />
            <StepperStep done={4 < activeStep} current={activeStep === 4} label='Livraison' step={4} />
            <StepperStep
              done={5 < activeStep}
              current={activeStep === 5}
              iconName={IconName.FACEID}
              label='Confirmation'
              step={5}
            />
          </Stepper>
        </BoxContent>
      </Box>
      <Spacer size={30}></Spacer>
      <Button onClick={handleClickNext} variant={'PRIMARY'}>
        Next
      </Button>
    </Section>
  )
}
