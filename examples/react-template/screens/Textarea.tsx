import * as React from 'react'
import { Divider, InputStatus, Section, Textarea } from '@trilogy-ds/react/components'
import { IconName } from '@trilogy-ds/react'

export const TextareaScreen = (): JSX.Element => {
  return (
    <Section>
      <Textarea
        label='Textarea label not dynamic with sample'
        sample='Textarea sample'
        help='Search helper textarea'
        onKeyUp={(e) => console.log(e)}
        required
        rows={10}
        iconNameLeft={IconName.CHECK}
        iconNameRight='tri-exclamation-circle'
        dynamicPlaceholder={false}
        status={InputStatus.ERROR}
      />

      <Divider />

      <Textarea
        label='Textarea label not dynamic without sample'
        help='Search helper textarea'
        onKeyUp={(e) => console.log(e)}
        required
        iconNameLeft={IconName.CHECK}
        dynamicPlaceholder={false}
      />

      <Divider />

      <Textarea disabled placeholder='placeholder' label='Dynamic label' />

      <Divider />

      <Textarea placeholder='placeholder' label='No Dynamic label' dynamicPlaceholder={false} />

      <Divider />

      <Textarea placeholder='placeholder' label='With Max Lenght ' dynamicPlaceholder={false} maxLength={150} />
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
        typo='has-text-error'
      />
    </Section>
  )
}
