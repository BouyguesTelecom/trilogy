import { Button, Column, Columns, DatePicker, Section, Text } from '@trilogy-ds/react/components'
import { DatePickerFormatEnum, DatePickerModeEnum, DatePickerVariantEnum } from '@trilogy-ds/react/components/datepicker'
import { useState } from 'react'

const minDate = new Date(2020, 0, 1)
const maxDate = new Date(2030, 11, 31)

export const DatePickerScreen = (): JSX.Element => {
  const [basicValue, setBasicValue] = useState<Date | null>(null)
  const [requiredValue, setRequiredValue] = useState<Date | null>(null)
  const [disabledValue, setDisabledValue] = useState<Date | null>(new Date())
  const [readOnlyValue, setReadOnlyValue] = useState<Date | null>(new Date())
  const [errorValue, setErrorValue] = useState<Date | null>(null)

  return (
    <Section>
      <Columns align='ALIGNED_CENTER'>
        <Column narrow>
          <Text>DatePicker Basique</Text>
          <DatePicker
            value={basicValue}
            onChange={setBasicValue}
            placeholder="Sélectionner une date"
            label="Date de naissance"
            format={DatePickerFormatEnum.DD_MM_YYYY}
            mode={DatePickerModeEnum.DATE}
            variant={DatePickerVariantEnum.OUTLINED}
          />

          <Text>DatePicker avec contraintes</Text>
          <DatePicker
            value={basicValue}
            onChange={setBasicValue}
            placeholder="Entre 2020 et 2030"
            label="Date avec limites"
            minDate={minDate}
            maxDate={maxDate}
            helperText="Sélectionnez une date entre 2020 et 2030"
          />

          <Text>DatePicker requis</Text>
          <DatePicker
            value={requiredValue}
            onChange={setRequiredValue}
            placeholder="Champ obligatoire"
            label="Date requise"
            required
            error={!requiredValue ? "Ce champ est obligatoire" : undefined}
          />
        </Column>

        <Column narrow>
          <Text>Formats différents</Text>
          <DatePicker
            value={basicValue}
            onChange={setBasicValue}
            placeholder="MM/DD/YYYY"
            label="Format américain"
            format={DatePickerFormatEnum.MM_DD_YYYY}
          />

          <DatePicker
            value={basicValue}
            onChange={setBasicValue}
            placeholder="YYYY-MM-DD"
            label="Format ISO"
            format={DatePickerFormatEnum.YYYY_MM_DD}
          />

          <Text>États spéciaux</Text>
          <DatePicker
            value={disabledValue}
            onChange={setDisabledValue}
            placeholder="Désactivé"
            label="DatePicker désactivé"
            disabled
          />

          <DatePicker
            value={readOnlyValue}
            onChange={setReadOnlyValue}
            placeholder="Lecture seule"
            label="DatePicker en lecture seule"
            readOnly
          />

          <DatePicker
            value={errorValue}
            onChange={setErrorValue}
            placeholder="Avec erreur"
            label="DatePicker avec erreur"
            error="Format de date invalide"
          />
        </Column>
      </Columns>

      <Section>
        <Text>Actions de test</Text>
        <Button onClick={() => setBasicValue(new Date())} variant='CONVERSION'>
          Définir date actuelle
        </Button>
        <Button onClick={() => setBasicValue(null)} variant='SECONDARY'>
          Effacer la date
        </Button>
        <Button onClick={() => setRequiredValue(new Date(2025, 5, 15))} variant='PRIMARY'>
          Définir date requise
        </Button>
      </Section>
    </Section>
  )
}
