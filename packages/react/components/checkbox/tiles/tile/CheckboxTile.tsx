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
 * @param id {string}
 * @param checked {Boolean}
 * @param disabled {Boolean}
 * @param readonly {Boolean}
 * @param label {string}
 * @param onChange {Function}
 * @param name {string}
 * @param value {string}
 * @param description {string}
 * @param icon {IconName}
 * @param horizontal {boolean}
 * @param sticker {string} sticker label
 * @param stickerVariant {VariantState} Sticker variant
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
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
