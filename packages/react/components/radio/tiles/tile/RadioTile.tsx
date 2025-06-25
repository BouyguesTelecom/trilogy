import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconSize } from '@/components/icon'
import { RadioTileProps, RadioTileRef } from '@/components/radio/tiles/tile/RadioTileProps'
import { Sticker } from '@/components/sticker'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { VariantState } from '@/objects/facets/Variant'
import { is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'

/**
 * radioTile Component
 * @param checked {boolean} Checked radio
 * @param disabled {boolean} Disabled
 * @param readOnly {boolean} readonly radio
 * @param id {string} Id for button, by default id is generate
 * @param label {string} Label for radio
 * @param description {ReactNode} Description for radio
 * @param onChange {ChangeEvent}
 * @param name {string} Name for radio
 * @param value {string} Value for radio
 * @param icon {IconName} icon for radio
 * @param horizontal Horizontal radio
 * @param sticker {string} sticker label
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional css classes (ONLY FOR WEB)
 * @param required {boolean} Required radio
 */
const RadioTile = React.forwardRef<RadioTileRef, RadioTileProps>(
  (
    {
      checked,
      className,
      disabled,
      readonly,
      id = React.useId(),
      label,
      onChange,
      name,
      value,
      description,
      icon,
      horizontal,
      required,
      sticker,
      ...others
    },
    ref,
  ): JSX.Element => {
    return (
      <div ref={ref} className={hashClass(clsx('radio-tile', horizontal && is('horizontal'), className))}>
        <input
          type='radio'
          readOnly={readonly}
          id={id}
          disabled={disabled}
          name={name}
          value={value}
          checked={checked}
          required={required}
          onChange={(e) => {
            if (onChange && !disabled && !readonly) {
              onChange({
                radioId: e.target.id,
                radioValue: e.target.value,
                radioName: e.target.name,
                radioChecked: e.target.checked,
              })
            }
          }}
          {...others}
        />
        <label htmlFor={id} className={hashClass(clsx('radio-label'))}>
          {icon && <Icon name={icon} size={IconSize.MEDIUM} />}
          {horizontal ? (
            <span>
              <span className={hashClass(clsx('radio-title'))}>{label}</span>
              {description && <span className={hashClass(clsx('radio-description'))}>{description}</span>}
            </span>
          ) : (
            <>
              <span className={hashClass(clsx('radio-title'))}>{label}</span>
              {description && <span className={hashClass(clsx('radio-description'))}>{description}</span>}
            </>
          )}
        </label>
        {sticker && <Sticker label={sticker} variant={VariantState.ACCENT} className='radio-sticker' small />}
      </div>
    )
  },
)

RadioTile.displayName = ComponentName.RadioTile
export default RadioTile
