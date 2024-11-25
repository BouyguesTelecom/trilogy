import clsx from 'clsx'
import React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconSize } from '@/components/icon'
import { RadioProps } from '@/components/radio/RadioProps'
import { useRadio } from '@/components/radio/hook/useRadio'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

/**
 * Radio Component
 * @param checked {boolean} Checked Radio
 * @param disabled {boolean} Disabled
 * @param readOnly {boolean} readonly Radio
 * @param id {string} Id for button, by default id is generate
 * @param label {string|ReactNode} Label for Radio
 * @param onClick {ClickEvent}
 * @param onChange {ChangeEvent}
 * @param name {string} Name for radio
 * @param value {string} Value for radio
 * @param iconTile {IconName} Icon for Radio
 * @param narrow {boolean} Apply narrow
 * @param children {React.ReactNode} If Children is provided, don't use label / Icon / Description
 * @param tile {boolean} Radio Tile
 * @param description {string} Description for Radio tile
 * @param horizontalTile {boolean} display horizontal Radio tile
 * -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param testId {string} Test Id for Test Integration
 * @param marginless {boolean} delete margin
 */
const Radio = React.forwardRef(
  (
    {
      checked,
      className,
      disabled,
      readonly,
      id = React.useId(),
      label,
      onChange,
      onClick,
      name,
      value,
      tile,
      description,
      iconTile,
      horizontalTile,
      children,
      narrow,
      marginless,
      testId,
      ...others
    }: RadioProps,
    ref: React.Ref<HTMLDivElement>,
  ): JSX.Element => {
    const { inputState, handleClick, handleChange } = useRadio({ checked, readonly, onChange, onClick, value })
    return (
      <div
        ref={ref}
        tabIndex={0}
        className={hashClass(
          clsx(
            tile ? 'radio-tile' : 'radio',
            narrow && is('narrow'),
            marginless && is('marginless'),
            horizontalTile && is('horizontal'),
            className,
          ),
        )}
      >
        <input
          data-testid={testId}
          type='radio'
          readOnly={readonly}
          id={id}
          disabled={disabled}
          name={name}
          value={value}
          checked={readonly ? checked : inputState.checked}
          onChange={handleChange}
          onClick={handleClick}
          {...others}
        />

        <label htmlFor={id} className={hashClass(clsx('radio-label'))}>
          {children ? (
            children
          ) : (
            <>
              {iconTile && <Icon name={iconTile} size={IconSize.MEDIUM} />}
              {horizontalTile ? (
                <span>
                  {tile ? <span className={hashClass(clsx('radio-title'))}>{label}</span> : label}
                  {tile && description && <span className={hashClass(clsx('radio-description'))}>{description}</span>}
                </span>
              ) : (
                <>
                  {tile ? <span className={hashClass(clsx('radio-title'))}>{label}</span> : label}
                  {tile && description && <span className={hashClass(clsx('radio-description'))}>{description}</span>}
                </>
              )}
            </>
          )}
        </label>
      </div>
    )
  },
)

Radio.displayName = ComponentName.Radio
export default Radio
