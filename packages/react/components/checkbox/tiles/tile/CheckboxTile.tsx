import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconSize } from '@/components/icon'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { CheckboxTileProps, CheckboxTileRef } from './CheckboxTileProps'
import { Sticker } from '@/components/sticker'
import { VariantState } from '@/objects'

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

    useEffect(() => {
      if (!readonly) {
        setChecked(checked || false)
      }
    }, [checked, readonly])

    return (
      <div ref={ref} className={hashClass(styled, clsx('checkbox-tile', horizontal && is('horizontal'), className))}>
        <input
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
        <label htmlFor={id} className={hashClass(styled, clsx('checkbox-label'))}>
          {icon && <Icon name={icon} size={IconSize.MEDIUM} />}
          {horizontal ? (
            <span>
              <span className={hashClass(styled, clsx('checkbox-title'))}>{label}</span>
              {description && <span className={hashClass(styled, clsx('checkbox-description'))}>{description}</span>}
            </span>
          ) : (
            <>
              <span className={hashClass(styled, clsx('checkbox-title'))}>{label}</span>
              {description && <span className={hashClass(styled, clsx('checkbox-description'))}>{description}</span>}
            </>
          )}
        </label>
        {sticker && <Sticker label={sticker} variant={stickerVariant} className='checkbox-sticker' small />}
      </div>
    )
  },
)

CheckboxTile.displayName = ComponentName.CheckboxTiles
export default CheckboxTile
