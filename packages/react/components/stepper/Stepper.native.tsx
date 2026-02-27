import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName, IconSize } from '@/components/icon'
import { Text, TextLevels } from '@/components/text'
import { TypographyBold, TypographyColor } from '@/objects'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Title, TitleLevels } from '../title'
import { StepperNativeRef, StepperProps } from './StepperProps'

interface ICurrentStep {
  step: number
  name: string
  iconName?: string | IconName
}

/**
 * Stepper Component
 * @param centered {boolean} Center the stepper
 * @param children {ReactNode}
 */
const Stepper = React.forwardRef<StepperNativeRef, StepperProps>(({ children, ...others }, ref): JSX.Element => {
  const [currentStep, setCurrentStep] = React.useState<ICurrentStep>({
    step: 0,
    name: '',
    iconName: '',
  })

  const styles = StyleSheet.create({
    steppers: {
      flexDirection: 'row',
      flex: 1,
      marginTop: 12,
    },
    hasIcon: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    counter: {
      marginBottom: 8,
    },
  })

  const nbChild = React.useMemo<number>(() => {
    if (children && Array.isArray(children)) return children.length
    if (children && !Array.isArray(children)) return 1
    return 0
  }, [children])

  React.useEffect(() => {
    if (children) {
      if (Array.isArray(children)) {
        let haveCurrentStep = false

        children.forEach((child, index) => {
          if (child.props.current) {
            haveCurrentStep = true
            setCurrentStep({
              step: index + 1,
              name: child.props.label,
              iconName: child.props.iconName,
            })
          }
        })

        if (!haveCurrentStep && children.length > 0) {
          setCurrentStep({
            step: 1,
            name: children[0].props.label,
            iconName: children[0].props.iconName,
          })
        }
      } else {
        const child = children as React.ReactElement
        setCurrentStep({
          step: 1,
          name: child.props.label,
          iconName: child.props.iconName,
        })
      }
    }
  }, [children])

  return (
    <View ref={ref}>
      <Text style={styles.counter} level={TextLevels.TWO} typo={[TypographyColor.TEXT_MAIN_FADE]}>
        Étape {currentStep.step} sur {nbChild}
      </Text>
      <View style={styles.hasIcon}>
        {currentStep.iconName && (
          <View>
            <Icon name={currentStep.iconName as IconName} size={IconSize.SMALL} />
          </View>
        )}
        <Title level={TitleLevels.FIVE} typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}>
          {currentStep.name}
        </Title>
      </View>
      <View style={styles.steppers} {...others}>
        {children}
      </View>
    </View>
  )
})

Stepper.displayName = ComponentName.Stepper

export default Stepper
