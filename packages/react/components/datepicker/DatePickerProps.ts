import { DatePickerFormatEnum, DatePickerFormatValues, DatePickerModeEnum, DatePickerModeValues, DatePickerVariantEnum, DatePickerVariantValues } from './DatePickerEnum'
import { Accessibility, Dev } from '../../objects'
import { CommonProps } from '../../objects/facets/CommonProps'

export interface DatePickerProps extends Accessibility, Dev, CommonProps {
  /**
   * La valeur actuelle du DatePicker
   */
  value?: Date | null

  /**
   * Callback appelé quand la date change
   */
  onChange?: (date: Date | null) => void

  /**
   * Date minimum sélectionnable
   */
  minDate?: Date

  /**
   * Date maximum sélectionnable
   */
  maxDate?: Date

  /**
   * Si le composant est désactivé
   */
  disabled?: boolean

  /**
   * Si le composant est en lecture seule
   */
  readOnly?: boolean

  /**
   * Texte de placeholder
   */
  placeholder?: string

  /**
   * Format d'affichage de la date
   */
  format?: DatePickerFormatEnum | DatePickerFormatValues

  /**
   * Label du champ
   */
  label?: string

  /**
   * Mode du DatePicker (date, datetime, time, etc.)
   */
  mode?: DatePickerModeEnum | DatePickerModeValues

  /**
   * Variante du composant
   */
  variant?: DatePickerVariantEnum | DatePickerVariantValues

  /**
   * Si le champ est requis
   */
  required?: boolean

  /**
   * Message d'erreur à afficher
   */
  error?: string

  /**
   * Texte d'aide
   */
  helperText?: string

  /**
   * Si le composant doit s'ouvrir automatiquement
   */
  autoFocus?: boolean

  /**
   * Callback appelé à l'ouverture du picker
   */
  onOpen?: () => void

  /**
   * Callback appelé à la fermeture du picker
   */
  onClose?: () => void

  /**
   * Si le picker est ouvert
   */
  open?: boolean

  /**
   * Nom du champ pour les formulaires
   */
  name?: string
}

export type DatePickerRef = HTMLInputElement
