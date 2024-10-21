import { ButtonList, Section } from '@trilogy-ds/react'
import {
  Button,
  ButtonVariant,
  Columns,
  ColumnsItem,
  Divider,
  IconName,
  Text,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'
// import {Item} from '@trilogy-ds/react/components/autocomplete/AutoCompleteProps'
import { AutoComplete, Item } from '@trilogy-ds/react/components/autocomplete'
import { InputClickEvent } from '@trilogy-ds/react/components/input/InputProps'
import React, { useState } from 'react'

const getSuggestions = async () => {
  return [
    { label: 'name', data: { info: 1 } },
    { label: 'age', data: { info: 2 } },
    { label: 'car', data: { info: 3 } },
    { label: 'test', data: { info: 4 } },
    { label: 'trilogy', data: { info: 5 } },
  ]
}

export const AutoCompleteScreen = (): JSX.Element => {
  const [value, setValue] = useState<string>('')
  const [autoCompleteInputValue, setAutoCompleteInputValue] = useState<string>('')
  const [status, setStatus] = useState<boolean>(false)
  const [data] = [['name', 'age', 'car', 'test', 'trilogy']]

  const onChange = (e) => {
    console.log('OnChange Autocomplete : ', e)
    setValue(e.inputValue)
  }

  const onIconClick = (e: InputClickEvent) => {
    console.log('onIconClick Autocomplete : ', e)
  }

  return (
    <>
      <Section>
        <Title level={TitleLevels.THREE}>Autocomplete With Debounce Suggests</Title>

        <AutoComplete
          status='success'
          getSuggestions={async (search) => {
            const res = await fetch(`https://v3.sg.media-imdb.com/suggestion/x/${search}.json`)
            const data = await res.json()
            return data.d.map((item: any) => ({
              label: item.l,
              data: { description: item.s },
            }))
          }}
          data={[]}
          placeholder='Marque et modèle de votre ancien téléphone'
          onItemSelected={({ value }) => {
            console.log('value : ', value)
          }}
          value={autoCompleteInputValue}
          onChange={({ inputValue }) => setAutoCompleteInputValue(inputValue)}
          debounceSuggestionsTimeout={500}
          onFocus={(e) => console.log('FOCUS : ', e)}
          onBlur={(e) => console.log('BLUR : ', e)}
        />
      </Section>
      <Divider />
      <Section>
        <Title level={TitleLevels.THREE}>Autocomplete custom data</Title>
        <AutoComplete<Item<{ info: number }>>
          customIcon={IconName.INFOS_CIRCLE}
          displayMenu={false}
          data={[
            { label: 'name', data: { info: 1 } },
            { label: 'age', data: { info: 2 } },
            { label: 'car', data: { info: 3 } },
            { label: 'test', data: { info: 4 } },
            { label: 'trilogy', data: { info: 5 } },
          ]}
          placeholder='Autocomplete'
          onItemSelected={(e) => console.log('itemSelected => ', e)}
          onChange={(e) => console.log('OnChange Autocomplete : ', e)}
          onFocus={(e) => console.log('FOCUS : ', e)}
          onBlur={(e) => console.log('BLUR : ', e)}
        >
          {(item) => <Text>La super info : {item.data.info}</Text>}
        </AutoComplete>
      </Section>
      <Divider />
      <Section>
        <Title level={TitleLevels.THREE}>Autocomplete with getSuggestions function</Title>
        <AutoComplete<Item<{ info: number }>>
          customIcon={IconName.INFOS_CIRCLE}
          displayMenu={false}
          data={[]}
          getSuggestions={getSuggestions}
          placeholder='Autocomplete'
          onItemSelected={(e) => console.log('itemSelected => ', e)}
          onChange={(e) => console.log('OnChange Autocomplete : ', e)}
          onFocus={(e) => console.log('FOCUS : ', e)}
          onBlur={(e) => console.log('BLUR : ', e)}
        >
          {(item) => <Text>La super info : {item.data.info}</Text>}
        </AutoComplete>
      </Section>
      <Divider />
      <Section>
        <Title level={TitleLevels.THREE}>Autocomplete</Title>
        <Columns>
          <ColumnsItem>
            <Text>value: {JSON.stringify(value)}</Text>
          </ColumnsItem>
          <ColumnsItem>
            <ButtonList>
              <Button variant={ButtonVariant.SECONDARY} onClick={() => setValue('')}>
                reset
              </Button>
              <Button variant={ButtonVariant.PRIMARY} onClick={() => setStatus(!status)}>
                {status ? 'enable' : 'disable'}
              </Button>
            </ButtonList>
          </ColumnsItem>
        </Columns>
        <AutoComplete
          customIcon={IconName.INFOS_CIRCLE}
          displayMenu={true}
          value={value}
          data={data}
          absoluteMenu
          fullwidthMenu
          disabled={status}
          placeholder='Autocomplete'
          onItemSelected={(e) => {
            setValue(e.value || '')
            console.log('onItemSelected : ', e.value)
          }}
          onChange={onChange}
          onIconClick={onIconClick}
          onFocus={(e) => console.log('FOCUS : ', e)}
          onBlur={(e) => console.log('BLUR : ', e)}
        />
      </Section>
    </>
  )
}
