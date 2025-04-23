import {
  AutoComplete,
  Button,
  ButtonList,
  ButtonVariant,
  Column,
  Columns,
  Divider,
  IconName,
  Item,
  Section,
  Text,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'
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
  const [data] = [['name the song', 'age', 'car', 'test', 'trilogy']]

  const onChange = (e) => {
    console.log('OnChange Autocomplete : ', e)
    setValue(e.inputValue)
  }

  return (
    <Section>
      <Title level={TitleLevels.THREE}>Autocomplete With Debounce Suggests</Title>

      <Columns>
        <Column>
          <AutoComplete
            label='Label'
            sample='sample'
            disabled
            required
            getSuggestions={async (search) => {
              const res = await fetch(`https://v3.sg.media-imdb.com/suggestion/x/${search}.json`)
              const data = await res.json()
              return data.d.map((item: any) => ({
                label: item.l,
                data: { description: item.s },
              }))
            }}
            data={[]}
            placeholder='Marque ssset modèle de votre ancien téléphone'
            onItemSelected={({ value }) => {
              console.log('value : ', value)
            }}
            value={autoCompleteInputValue}
            onChange={({ inputValue }) => setAutoCompleteInputValue(inputValue)}
            debounceSuggestionsTimeout={500}
            onFocus={(e) => console.log('FOCUS : ', e)}
            onBlur={(e) => console.log('BLUR : ', e)}
          />
        </Column>
      </Columns>
      <Divider />
      <Title level={TitleLevels.THREE}>Autocomplete custom data</Title>
      <AutoComplete<Item<{ info: number }>>
        iconNameLeft={IconName.INFOS_CIRCLE}
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
      <Divider />
      <Title level={TitleLevels.THREE}>Autocomplete with getSuggestions function</Title>
      <AutoComplete
        iconNameLeft={IconName.INFOS_CIRCLE}
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
      <Divider />
      <Title level={TitleLevels.THREE}>Autocomplete</Title>
      <Columns>
        <Column>
          <Text>value: {JSON.stringify(value)}</Text>
        </Column>
        <Column>
          <ButtonList>
            <Button variant={ButtonVariant.SECONDARY} onClick={() => setValue('')}>
              reset
            </Button>
            <Button variant={ButtonVariant.PRIMARY} onClick={() => setStatus(!status)}>
              {status ? 'enable' : 'disable'}
            </Button>
          </ButtonList>
        </Column>
      </Columns>
      <AutoComplete
        iconNameLeft={IconName.INFOS_CIRCLE}
        displayMenu={false}
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
        onFocus={(e) => console.log('FOCUS : ', e)}
        onBlur={(e) => console.log('BLUR : ', e)}
      />
    </Section>
  )
}
