import {
  Button,
  Divider,
  IconName,
  Section,
  Spacer,
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
      <Title level={TitleLevels.ONE}>New</Title>
      <Spacer size={30}></Spacer>
      <Stepper>
        <Step done={1 < activeStep} current={activeStep === 1} iconName={IconName.EYE} label='Recup' />
        <Step done={2 < activeStep} current={activeStep === 2} label='Compléments' iconName={IconName.EYE} />
        <Step
          error
          done={3 < activeStep}
          current={activeStep === 3}
          iconName={IconName.SEARCH}
          label='Coordonate'
          step={3}
        />
        <Step done={4 < activeStep} current={activeStep === 4} label='Livraison' iconName={IconName.EYE} />
        <Step done={5 < activeStep} current={activeStep === 5} iconName={IconName.EYE} label='Confirm' />
      </Stepper>
      <Spacer size={30}></Spacer>
      <Button onClick={handleClickNext} variant={'PRIMARY'}>
        Next
      </Button>

      <Divider />

      <Stepper>
        <Step current data-testid='test-step-1' label='Step 1' />
        <Step data-testid='test-step-2' label='Step 2' />
        <Step data-testid='test-step-3' label='Step 3' />
      </Stepper>

      {/* <Title level={TitleLevels.ONE}>OLD</Title>
      <div className='stepper-wrapper_410'>
        <div className='stepper-item_410 is-current_410' data-label='Recup'>
          <div className='step-label_410'>
            Recup
            <span className='icon_410 is-medium_410 step-icon_410'>
              <i className='tri-eye_410' aria-hidden='true'></i>
            </span>
          </div>
        </div>
        <div className='stepper-item_410' data-label='Compléments'>
          <div className='step-label_410'>Compléments</div>
        </div>
        <div className='stepper-item_410 is-error_410' data-label='Coordonate'>
          <div className='step-label_410'>
            Coordonate
            <span className='icon_410 is-medium_410 step-icon_410'>
              <i className='tri-search_410' aria-hidden='true'></i>
            </span>
          </div>
        </div>
        <div className='stepper-item_410' data-label='Livraison'>
          <div className='step-label_410'>Livraison</div>
        </div>
        <div className='stepper-item_410' data-label='Confirm'>
          <div className='step-label_410'>
            Confirm
            <span className='icon_410 is-medium_410 step-icon_410'>
              <i className='tri-eye_410' aria-hidden='true'></i>
            </span>
          </div>
        </div>
        <div className='step-count'>
          <p className='text_410'>1/5</p>
        </div>
      </div> */}
    </Section>
  )
}
