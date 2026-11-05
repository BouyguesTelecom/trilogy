import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconSize } from '@/components/icon'
import { IconName } from '@/components/icon/IconNameEnum'
import { Text } from '@/components/text'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { useEffect, useState, forwardRef, useId, Ref } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { memoStyles } from '@/helpers/memoStyles'
import { CheckboxNativeRef, CheckboxProps } from '@/components/checkbox/CheckboxProps'
import { useAnimatedPressable } from '@/hooks/useAnimatedPressable'
import { AnimatedPressable } from '@/components/animatedPressable/AinmatedPressable.native'

/**
 * Checkbox Component
 * @param checked {boolean} Checked Checkbox
 * @param disabled {boolean} Disabled
 * @param readOnly {boolean} readonly Checkbox
 * @param id {string} Id for button, by default id is generate
 * @param label {string} Label for Checkbox // Incompatible with children
 * @param onChange {ChangeEvent}
 * @param name {string} Name for checkbox
 * @param testId {string} Test Id for Test Integration
 */
const Checkbox = forwardRef<CheckboxNativeRef, CheckboxProps>(
  ({ id = useId(), checked, name, onChange, disabled, readonly, label, testId }, ref): JSX.Element => {
    const [_checked, setChecked] = useState(checked || false)
    const { animatedStyle, handleAnimate } = useAnimatedPressable()
    const borderDisabled = getColorStyle(TrilogyColor.DISABLED)
    const borderMain = getColorStyle(TrilogyColor.MAIN)
    const borderStroke = getColorStyle(TrilogyColor.STROKE)
    const backgroundDisabled = getColorStyle(TrilogyColor.DISABLED_FADE)
    const backgroundMain = getColorStyle(TrilogyColor.MAIN)
    const colorDisabled = getColorStyle(TrilogyColor.DISABLED)
    const colorMain = getColorStyle(TrilogyColor.MAIN)

    useEffect(() => {
      setChecked(checked || false)
    }, [checked])

    const styles = memoStyles({
      container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },
      checkBox: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderColor: disabled ? borderDisabled : _checked ? borderMain : borderStroke,
        borderWidth: 0.6,
        width: 19,
        height: 19,
        borderRadius: 4,
        marginRight: 10,
        marginLeft: 0,
        backgroundColor: disabled ? backgroundDisabled : _checked ? backgroundMain : 'transparent',
      },
      label: {
        marginTop: 2,
        color: disabled ? colorDisabled : colorMain,
      },
    })

    const handleClick = () => {
      if (!readonly) {
        setChecked(!_checked)
        if (onChange) {
          onChange({
            checkboxId: id,
            checkboxValue: '',
            checkboxName: name || '',
            checkboxChecked: !_checked,
          })
        }
      }
    }

    return (
      <AnimatedPressable
        ref={ref as Ref<View>}
        disabled={disabled}
        style={[styles.container, animatedStyle]}
        onPress={() => {
          handleAnimate()
          handleClick()
        }}
      >
        <TouchableOpacity
          style={styles.checkBox}
          disabled={disabled}
          testID={testId || id}
          onPressIn={() => handleClick()}
          activeOpacity={1}
        >
          {_checked && <Icon size={IconSize.SMALLER} color={TrilogyColor.BACKGROUND} name={IconName.CHECK} />}
        </TouchableOpacity>
        {label && typeof label.valueOf() === 'string' ? <Text style={styles.label}>{String(label)}</Text> : label}
      </AnimatedPressable>
    )
  },
)

Checkbox.displayName = ComponentName.Checkbox

export default Checkbox
