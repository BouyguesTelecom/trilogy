import { Divider, IconName, Section, Textarea } from '@trilogy-ds/react/components'
import * as React from 'react'

export default function TextareaScreen(): JSX.Element {
  return (
    <Section>
      <Textarea
        label='Textarea label not dynamic with sample'
        sample='Textarea sample'
        help='Search helper textarea'
        required
        iconName={IconName.CHECK}
        statusIconName='tri-exclamation-circle'
        dynamicPlaceholder={false}
      />

      <Divider />

      <Textarea
        label='Textarea label not dynamic without sample'
        help='Search helper textarea'
        required
        iconName={IconName.CHECK}
        dynamicPlaceholder={false}
      />

      <Divider />

      <Textarea disabled placeholder='placeholder' label='Dynamic label' />

      <Divider />

      <Textarea placeholder='placeholder' label='No Dynamic label' dynamicPlaceholder={false} customHeight={100} />

      <Divider />

      <Textarea placeholder='placeholder' label='With Max Lenght ' dynamicPlaceholder={false} maxLength={150} />
      <Divider />
      <Textarea placeholder='Disabled' label='Label' disabled />

      <Textarea placeholder='With icon' label='With maxlength' maxLength={150} iconName={IconName.CHECK} />
      <Divider />

      <Textarea
        placeholder='With status icon success'
        label='Iam a label'
        maxLength={150}
        iconName={IconName.CHECK}
        statusIconName='tri-check-circle'
        status='success'
      />
      <Divider />

      <Textarea
        placeholder='With status icon error'
        label='Label'
        iconName={IconName.CHECK}
        statusIconName='tri-exclamation-circle'
        status='error'
        help='This is a help message'
        typo='has-text-error'
      />
    </Section>
  )
}
