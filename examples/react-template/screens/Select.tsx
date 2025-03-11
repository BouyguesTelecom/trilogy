import { Button, ButtonVariant, Column, Columns, Input, Title } from '@trilogy-ds/react'
import { Section, Select, SelectOption } from '@trilogy-ds/react/components'
import * as React from 'react'
import { useForm } from 'react-hook-form'

export const SelectView = (): JSX.Element => {
  const [options, setOptions] = React.useState<string[]>(['opt_one', 'Venus'])
  const [optionsNullable, setOptionsNullable] = React.useState<string[]>(['opt_one', 'opt_two'])
  const [option, setOption] = React.useState<string | undefined>('opt_two')
  const [optionNullable, setOptionNullable] = React.useState<string | undefined>('opt_one')
  const ref = React.useRef(null)

  React.useEffect(() => {
    console.log(ref.current)
  }, [ref])

  const POSTALCODE = [
    { code: '92300', name: 'haut de cuisse' },
    { code: '91800', name: 'haut de france' },
    { code: '92800', name: 'tome de savoie' },
  ]
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <>
      <Section>
        <Title>Custom select</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Select label={'label'} {...register('gender')} ref={ref}>
            {POSTALCODE.map((postalcode) => (
              <SelectOption
                key={postalcode.code}
                value={postalcode.code}
                label={postalcode.code + ' - ' + postalcode.name}
              />
            ))}
          </Select>
          <input type='submit' />
        </form>
        <Columns verticalAlign='ALIGNED_CENTER'>
          <Column>
            <Input />
          </Column>
          <Column>
            <Button variant={ButtonVariant.PRIMARY}> Modifier</Button>
          </Column>
        </Columns>
      </Section>
    </>
  )
}
