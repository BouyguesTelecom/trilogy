import React from 'react'
import {StyleSheet, View} from 'react-native'
import {TypographyBold, TypographyColor} from '../../objects'
import {Text, TextLevels} from '../text'
import {TitleLevels} from '../title'
import {StepperProps} from './StepperProps'
import {Icon, IconName, IconSize} from '../icon'
import {ComponentName} from '../enumsComponentsName'

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
const Stepper = ({children, centered, ...others}: StepperProps): JSX.Element => {
  const [currentStep, setCurrentStep] = React.useState<ICurrentStep>({step: 0, name: '', iconName: ''})

  const styles = StyleSheet.create({
    steppers: {
      flexDirection: 'row',
      alignSelf: centered ? 'center' : 'flex-start',
    },
    step: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    },
    hasIcon: {
      flexDirection: 'row',
    },
    icon: {
      marginRight: 4,
      marginTop: 3,
    },
    counter: {
      marginRight: 10
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

        children.map((child) => {
          if (child.props.current) {
            haveCurrentStep = true
            setCurrentStep({
              step: child.props.step,
              name: child.props.label,
              iconName: child.props.iconName,
            })
          }
        })

        if (!haveCurrentStep) {
          setCurrentStep({
            step: 1,
            name: children[0].props.label,
          })
        }
      } else {
        const child = children as React.ReactElement
        setCurrentStep({
          step: 1,
          name: child.props.label,
        })
      }
    }
  }, [children])

  return (
    <View>
      <View style={styles.steppers} {...others}>
        {children}
      </View>
      <View style={styles.step}>
        <View style={styles.hasIcon}>

          {currentStep.iconName && (
            <Text style={styles.icon}>
              <Icon name={currentStep.iconName as IconName} size={IconSize.SMALL}/>
            </Text>
          )}
          <Text level={TitleLevels.ONE} typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}>{currentStep.name}</Text>

        </View>
        <Text style={styles.counter} level={TextLevels.THREE}
              typo={[TypographyBold.TEXT_WEIGHT_SEMIBOLD, TypographyColor.TEXT_TERTIARY]}>
          {currentStep.step}/{nbChild}
        </Text>
      </View>
    </View>
  )
}

Stepper.displayName = ComponentName.Stepper

export default Stepper
