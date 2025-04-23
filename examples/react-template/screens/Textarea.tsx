import { IconName, InputStatus } from '@trilogy-ds/react'
import { Divider, Section, Textarea } from '@trilogy-ds/react/components'
import * as React from 'react'

export const TextareaScreen = (): JSX.Element => {
  return (
    <Section>
      <Textarea
        label='Textarea label not dynamic with sample'
        sample='Textarea sample'
        help='Search helper textarea'
        required
        rows={10}
        iconNameLeft={IconName.CHECK}
        iconNameRight='tri-exclamation-circle'
        status={InputStatus.ERROR}
      />

      <Divider />

      <Textarea
        label='Textarea label not dynamic without sample'
        sample='Textarea sample'
        help='Search helper textarea'
        required
        iconNameLeft={IconName.CHECK}
      />

      <Divider />

      <Textarea
        disabled
        placeholder='placeholder'
        label='Dynamic label'
        iconNameLeft='tri-alert'
        iconNameRight='tri-alert'
      />

      <Divider />

      <Textarea placeholder='placeholder' label='No Dynamic label' />

      <Divider />

      <Textarea placeholder='placeholder' label='With Max Lenght ' maxLength={150} />
      <Divider />
      <Textarea placeholder='Disabled' label='Label' disabled />

      <Textarea placeholder='With icon' label='With maxlength' maxLength={150} iconNameLeft={IconName.CHECK} />
      <Divider />

      <Textarea
        placeholder='With status icon success'
        label='Iam a label'
        maxLength={150}
        iconNameLeft={IconName.CHECK}
        iconNameRight='tri-check-circle'
        status='success'
      />
      <Divider />

      <Textarea
        placeholder='With status icon error'
        label='Label'
        iconNameLeft={IconName.CHECK}
        iconNameRight='tri-exclamation-circle'
        status='error'
        help='This is a help message'
      />
    </Section>
  )
}
