import * as React from "react";
import {
  Box,
  BoxContent,
  Button,
  Divider,
  IconName,
  Section,
  Spacer,
  Stepper,
  StepperStep,
  Title,
  TitleLevels,
} from "@trilogy-ds/react/components";

export const StepperScreen = (): JSX.Element => {
  const [activeStep, setActiveStep] = React.useState<number>(1);

  const handleClickNext = React.useCallback(() => {
    if (activeStep === 5) {
      setActiveStep(1);
    } else {
      setActiveStep((curr) => curr + 1);
    }
  }, [activeStep]);

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
              done={1 < activeStep}
              current={activeStep === 1}
              iconName={IconName.EYE}
              label="Recup"
              step={1}
            />
            <StepperStep
              done={2 < activeStep}
              current={activeStep === 2}
              label="Compléments"
              step={2}
            />
            <StepperStep
              error
              done={3 < activeStep}
              current={activeStep === 3}
              iconName={IconName.SEARCH}
              label="Coordonate"
              step={3}
            />
            <StepperStep
              done={4 < activeStep}
              current={activeStep === 4}
              label="Livraison"
              step={4}
            />
            <StepperStep
              done={5 < activeStep}
              current={activeStep === 5}
              iconName={IconName.EYE}
              label="Confirm"
              step={5}
            />
          </Stepper>
        </BoxContent>
      </Box>
      <Spacer size={30}></Spacer>
      <Button onClick={handleClickNext} variant={"PRIMARY"}>
        Next
      </Button>
    </Section>
  );
};
