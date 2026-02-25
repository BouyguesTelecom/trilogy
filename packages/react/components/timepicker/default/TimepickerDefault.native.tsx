import { Button, ButtonVariant } from '@/components/button'
import { ComponentName } from '@/components/enumsComponentsName'
import { FlexBox } from '@/components/flex-box'
import Input from '@/components/input/Input.native'
import ModalBody from '@/components/modal/body/ModalBody.native'
import ModalFooter from '@/components/modal/footer/ModalFooter.native'
import Modal from '@/components/modal/Modal.native'
import { Spacer, SpacerSize } from '@/components/spacer'
import React, { useCallback, useState } from 'react'
import { Pressable, View } from 'react-native'
import { TimepickerSelector } from './selector/TimepickerSelector.native'

const scores = [
  { value: 0, label: '0' },
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6' },
  { value: 7, label: '7' },
  { value: 8, label: '8' },
  { value: 9, label: '9' },
  { value: 10, label: '10' },
  { value: 11, label: '11' },
  { value: 12, label: '12' },
  { value: 13, label: '13' },
  { value: 14, label: '14' },
  { value: 15, label: '15' },
]

const TimepickerDefault = React.forwardRef<any, any>(({ disabled, others, id, children }, ref): JSX.Element => {
  const [display, setDisplay] = useState<boolean>(false)
  const [values, setValues] = useState<{ home: number; away: number } | null>(null)

  const handleOpenCloseModal = useCallback(() => {
    !disabled && setDisplay((prev) => !prev)
  }, [disabled])

  return (
    <Modal
      hideCloseButton
      active={display}
      trigger={
        <Pressable onPress={handleOpenCloseModal}>
          <Input
            ref={ref}
            onIconClick={handleOpenCloseModal}
            disabled={disabled}
            iconNameRight={'tri-clock'}
            placeholder='--:--'
            {...{ editable: false, pointerEvents: 'none', id }}
            {...others}
          />
        </Pressable>
      }
    >
      <ModalBody>
        <View style={{ paddingBottom: 20 }}>
          <FlexBox>
            <TimepickerSelector
              items={scores}
              value={values?.home ?? 0}
              onValueChange={(e) => {
                setValues((prev) => ({
                  ...(prev ?? { home: 0, away: 0 }),
                  home: Number(e),
                }))
              }}
            />
          </FlexBox>
        </View>
      </ModalBody>
      <ModalFooter>
        <Button>Valider</Button>
        <Spacer size={SpacerSize.FOUR} />
        <Button variant={ButtonVariant.SECONDARY}>Annuler</Button>
      </ModalFooter>
    </Modal>
  )
})

TimepickerDefault.displayName = ComponentName.Timepicker
export default TimepickerDefault
