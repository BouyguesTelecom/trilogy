import { Button, ButtonVariant } from '@/components/button'
import { GapSize } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import { FlexBox } from '@/components/flex-box'
import Input from '@/components/input/Input.native'
import ModalFooter from '@/components/modal/footer/ModalFooter.native'
import Modal from '@/components/modal/Modal.native'
import { Spacer, SpacerSize } from '@/components/spacer'
import { Text, TextLevels } from '@/components/text'
import { Align, Justify, TypographyAlign, TypographyBold } from '@/objects'
import React, { useCallback, useMemo, useState } from 'react'
import { Pressable, TextInput, View } from 'react-native'
import { TimepickerSelector } from './selector/TimepickerSelector.native'
import { TimepickerDefaultProps } from './TimepickerDefaultProps'

const generateItems = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    value: i,
    label: i.toString().padStart(2, '0'),
  }))

const TimepickerDefault = React.forwardRef<View, Omit<TimepickerDefaultProps, 'circular'>>(
  (
    { disabled, id, value = '00:00', onChange, step = 1, label, sample, help, required, testId, ...others },
    ref,
  ): JSX.Element => {
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
        onClose={handleOpenCloseModal}
        trigger={
          <Pressable onPress={handleOpenCloseModal}>
            <Input
              testId={testId}
              label={label}
              sample={sample}
              help={help}
              required={required}
              onIconClick={handleOpenCloseModal}
              disabled={disabled}
              iconNameRight={'tri-clock'}
              placeholder='--:--'
              value={inputValue}
              ref={ref as React.RefObject<TextInput>}
              {...{ editable: false, pointerEvents: 'none', id }}
              {...others}
            />
          </Pressable>
        }
      >
        <View style={{ paddingBottom: 20 }}>
          <FlexBox justify={Justify.SPACE_BETWEEN} align={Align.CENTER}>
            <Text
              level={TextLevels.TWO}
              typo={[TypographyBold.TEXT_WEIGHT_SEMIBOLD, TypographyAlign.TEXT_CENTERED, TypographyAlign.TEXT_CENTERED]}
              style={{ flex: 1 }}
            >
              Heures
            </Text>
            <Text
              level={TextLevels.TWO}
              typo={[TypographyBold.TEXT_WEIGHT_SEMIBOLD, TypographyAlign.TEXT_CENTERED]}
              style={{ flex: 1 }}
            >
              Minutes
            </Text>
          </FlexBox>
          <FlexBox align={Align.CENTER} gap={GapSize.FOUR}>
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
          </FlexBox>
        </View>
        <ModalFooter>
          <Button onClick={handleValidate}>Valider</Button>
          <Spacer size={SpacerSize.FOUR} />
          <Button variant={ButtonVariant.SECONDARY} onClick={handleCancel}>
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    )
  },
)

TimepickerDefault.displayName = ComponentName.Timepicker
export default TimepickerDefault
