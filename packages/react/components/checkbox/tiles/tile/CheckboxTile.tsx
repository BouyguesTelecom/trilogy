import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconSize } from '@/components/icon'
import { Sticker } from '@/components/sticker'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { VariantState } from '@/objects'
import { is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { CheckboxTileProps, CheckboxTileRef } from './CheckboxTileProps'

/**
 * CheckboxTile
 * @param id {string} Custom id attribute
 * @param checked {Boolean} Checked state of the checkbox
 * @param disabled {Boolean} Disabled state of the checkbox
 * @param readonly {Boolean} Readonly state of the checkbox
 * @param label {string} Label for the checkbox tile
 * @param onChange {Function} Change event handler for the checkbox
 * @param name {string} Name attribute for the checkbox input
 * @param description {string} Description text for the checkbox tile
 * @param icon {IconName} Icon to display in the checkbox tile
 * @param horizontal {boolean} Horizontal layout for the checkbox tile
 * @param sticker {string} Sticker label for the checkbox tile
 * @param stickerVariant {VariantState} Sticker variant for the checkbox tile
 * @param required {boolean} Required input checkboxes
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param value {string} Value attribute for the checkbox input
 * @param required {boolean} Required input checkboxes
 */
const CheckboxTile = React.forwardRef<CheckboxTileRef, CheckboxTileProps>(
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
      stickerVariant = VariantState.ACCENT,
      testId,
      ...others
    },
    ref,
  ): JSX.Element => {
    const { styled } = useTrilogyContext()
    const [_checked, setChecked] = useState<boolean>(checked || false)
    const refInput = React.useRef<HTMLInputElement>(null)

    useEffect(() => {
      if (!readonly) {
        setChecked(checked || false)
      }
    }, [checked, readonly])

    return (
      <div
        ref={ref}
        className={hashClass(styled, clsx('checkbox-tile', horizontal && is('horizontal'), className))}
        role='button'
        onClick={(e) => {
          if (disabled || readonly) return
          const target = e.target as HTMLElement
          if (target.closest('input, label')) return
          refInput.current?.click()
        }}
      >
        <input
          data-testid={testId}
          ref={refInput}
          type='checkbox'
          readOnly={readonly}
          required={required}
          id={id}
          disabled={disabled}
          name={name}
          value={value}
          checked={readonly ? checked : _checked}
          onChange={(e) => (onChange ? onChange : setChecked(e.target.checked))}
          {...others}
        />
        <div className={hashClass(styled, clsx('checkbox-container'))}>
          {icon && <Icon name={icon} size={IconSize.MEDIUM} />}
          {horizontal ? (
            <span>
              <label htmlFor={id} className={hashClass(styled, clsx('checkbox-title'))}>
                {label}
              </label>
              {description && <span className={hashClass(styled, clsx('checkbox-description'))}>{description}</span>}
            </span>
          ) : (
            <>
              <label htmlFor={id} className={hashClass(styled, clsx('checkbox-title'))}>
                {label}
              </label>
              {description && <span className={hashClass(styled, clsx('checkbox-description'))}>{description}</span>}
            </>
          )}
        </div>
        {sticker && <Sticker label={sticker} variant={stickerVariant} className='checkbox-sticker' small />}
      </div>
    )
  },
)

CheckboxTile.displayName = ComponentName.CheckboxTiles
export default CheckboxTile
