import { Textarea } from '@trilogy-ds/react/lib/components/textarea'

export default function TextareaScreen() {
  return (
    <main>
      <Textarea
        label='Textarea label not dynamic with sample'
        sample='Textarea sample'
        help='Search helper textarea'
        required
        rows={10}
        iconNameLeft='tri-check'
        iconNameRight='tri-exclamation-circle'
        dynamicPlaceholder={false}
        status='error'
      />

      <Textarea
        label='Textarea label not dynamic without sample'
        help='Search helper textarea'
        required
        iconNameLeft='tri-check'
        dynamicPlaceholder={false}
      />

      <Textarea disabled placeholder='placeholder' label='Dynamic label' />

      <Textarea placeholder='placeholder' label='No Dynamic label' dynamicPlaceholder={false} />

      <Textarea placeholder='placeholder' label='With Max Lenght ' dynamicPlaceholder={false} maxLength={150} />
      <Textarea placeholder='Disabled' label='Label' disabled />

      <Textarea placeholder='With icon' label='With maxlength' maxLength={150} iconNameLeft='tri-check' />

      <Textarea
        placeholder='With status icon success'
        label='Iam a label'
        maxLength={150}
        iconNameLeft='tri-check'
        iconNameRight='tri-check-circle'
        status='success'
      />

      <Textarea
        placeholder='With status icon error'
        label='Label'
        iconNameLeft='tri-check'
        iconNameRight='tri-exclamation-circle'
        status='error'
        help='This is a help message'
      />
    </main>
  )
}
