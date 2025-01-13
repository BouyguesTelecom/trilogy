import { IconName } from '@trilogy-ds/react/lib/components/icon'
import { Step, Stepper } from '@trilogy-ds/react/lib/components/stepper'

export default function StepperScreen() {
  return (
    <>
      <Stepper>
        <Step current iconName={IconName.EYE} label='Recup' />
        <Step label='Compléments' />
        <Step error iconName={IconName.SEARCH} label='Coordonate' />
        <Step label='Livraison' />
        <Step iconName={IconName.EYE} label='Confirm' />
      </Stepper>

      <Stepper>
        <Step current data-testid='test-step-1' label='Step 1' />
        <Step data-testid='test-step-2' label='Step 2' />
        <Step data-testid='test-step-3' label='Step 3' />
      </Stepper>
    </>
  )
}
