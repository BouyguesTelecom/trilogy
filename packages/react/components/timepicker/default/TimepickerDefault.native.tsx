import { Button, ButtonVariant } from '@/components/button'
import { ComponentName } from '@/components/enumsComponentsName'
import Input from '@/components/input/Input.native'
import ModalFooter from '@/components/modal/footer/ModalFooter.native'
import Modal from '@/components/modal/Modal.native'
import { Spacer, SpacerSize } from '@/components/spacer'
import { Text, TextLevels } from '@/components/text'
import { TimepickerProps } from '@/components/timepicker/TimepickerProps'
import { TypographyAlign, TypographyBold } from '@/objects'
import React, { useCallback, useMemo, useState } from 'react'
import { Pressable, View } from 'react-native'
import { TimepickerSelector } from './selector/TimepickerSelector.native'

const generateItems = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    value: i,
    label: i.toString().padStart(2, '0'),
  }))

const TimepickerDefault = React.forwardRef<View, Omit<TimepickerProps, 'circular'>>(
  ({ disabled, id, value = '00:00', onChange, step = 1, ...others }, ref): JSX.Element => {
    const [display, setDisplay] = useState<boolean>(false)

    const parseTime = (timeStr: string) => {
      const [h, m] = timeStr.split(':')
      return {
        hours: parseInt(h || '0', 10) || 0,
        minutes: parseInt(m || '0', 10) || 0,
      }
    }

    const { hours, minutes } = parseTime(value)
    const [selectedHours, setSelectedHours] = useState(hours)
    const [selectedMinutes, setSelectedMinutes] = useState(minutes)
    const [inputValue, setInputValue] = useState<string | undefined>(value !== '00:00' ? value : undefined)

    const hourItems = useMemo(() => generateItems(24), [])
    const minuteItems = useMemo(() => {
      const items = []
      for (let i = 0; i < 60; i += step) {
        items.push({ value: i, label: i.toString().padStart(2, '0') })
      }
      return items
    }, [step])

    const handleOpenCloseModal = useCallback(() => {
      if (!disabled) {
        setDisplay((prev) => !prev)
      }
    }, [disabled])

    const handleValidate = useCallback(() => {
      const formatted = `${selectedHours.toString().padStart(2, '0')}:${selectedMinutes.toString().padStart(2, '0')}`
      setInputValue(formatted)
      onChange?.(formatted)
      setDisplay(false)
    }, [selectedHours, selectedMinutes, onChange])

    const handleCancel = useCallback(() => {
      setSelectedHours(hours)
      setSelectedMinutes(minutes)
      setDisplay(false)
    }, [hours, minutes])

    // Sync local state when value prop changes from parent
    React.useEffect(() => {
      const { hours: h, minutes: m } = parseTime(value)
      setSelectedHours(h)
      setSelectedMinutes(m)
      setInputValue(value !== '00:00' ? value : undefined)
    }, [value])

    return (
      <Modal
        hideCloseButton
        active={display}
        trigger={
          <Pressable onPress={handleOpenCloseModal}>
            <Input
              onIconClick={handleOpenCloseModal}
              disabled={disabled}
              iconNameRight={'tri-clock'}
              placeholder='--:--'
              value={inputValue}
              {...{ editable: false, pointerEvents: 'none', id }}
              {...others}
            />
          </Pressable>
        }
      >
        <View style={{ paddingBottom: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', paddingBottom: 8 }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text level={TextLevels.TWO} typo={[TypographyBold.TEXT_WEIGHT_SEMIBOLD, TypographyAlign.TEXT_CENTERED]}>
                Heures
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text level={TextLevels.TWO} typo={[TypographyBold.TEXT_WEIGHT_SEMIBOLD, TypographyAlign.TEXT_CENTERED]}>
                Minutes
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{ flex: 1 }}>
              <TimepickerSelector
                items={hourItems}
                value={selectedHours}
                onValueChange={(v) => setSelectedHours(Number(v))}
              />
            </View>
            <View style={{ flex: 1 }}>
              <TimepickerSelector
                items={minuteItems}
                value={selectedMinutes}
                onValueChange={(v) => setSelectedMinutes(Number(v))}
              />
            </View>
          </View>
        </View>
        <ModalFooter>
          <Button onClick={handleValidate}>Valider</Button>
          <Spacer size={SpacerSize.FOUR} />
          <Button variant={ButtonVariant.SECONDARY} onClick={handleCancel}>Annuler</Button>
        </ModalFooter>
      </Modal>
    )
  },
)

TimepickerDefault.displayName = ComponentName.Timepicker
export default TimepickerDefault
