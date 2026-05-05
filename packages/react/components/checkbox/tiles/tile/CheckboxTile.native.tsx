import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName, IconSize } from '@/components/icon'
import { SpacerSize } from '@/components/spacer'
import { Sticker } from '@/components/sticker'
import { Text, TextLevels } from '@/components/text'
import { View } from '@/components/view'
import { getColorStyle, TrilogyColor, TypographyAlign, TypographyBold, VariantState } from '@/objects'
import React, { useContext, useState } from 'react'
import { StyleSheet, TouchableOpacity, View as ViewRN } from 'react-native'
import { CheckboxTilesContext } from '../context'
import { CheckboxTileNativeRef, CheckboxTileProps } from './CheckboxTileProps'

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
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 */
const CheckboxTile = React.forwardRef<CheckboxTileNativeRef, CheckboxTileProps>(
  (
    {
      disabled,
      checked,
      readonly,
      id = React.useId(),
      label,
      onChange,
      name,
      description,
      icon,
      horizontal,
      sticker,
      stickerVariant = VariantState.ACCENT,
      testId,
      ...others
    },
    ref,
  ): JSX.Element => {
    const [_checked, setChecked] = useState<boolean>(checked || false)
    const [stickerHeight, setStickerHeight] = useState<number>(0)
    const { isGrid } = useContext(CheckboxTilesContext)

    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        paddingBottom: 5,
        justifyContent: 'flex-start',
      },
      checkBox: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: getColorStyle(
          disabled ? TrilogyColor.DISABLED_FADE : _checked ? TrilogyColor.MAIN : TrilogyColor.STROKE,
        ),
        borderWidth: 1,
        width: 19,
        height: 19,
        borderRadius: 4,
        backgroundColor: getColorStyle(
          disabled ? TrilogyColor.DISABLED_FADE : _checked ? TrilogyColor.MAIN : 'transparent',
        ),
      },
      label: {
        color: getColorStyle(disabled ? TrilogyColor.DISABLED : TrilogyColor.MAIN),
      },
      tile: {
        flex: isGrid ? 1 : undefined,
        padding: _checked ? SpacerSize.FOUR - 1 : SpacerSize.FOUR,
        maxWidth: isGrid ? '100%' : '50%',
        borderWidth: (_checked && 2) || 1,
        width: 'auto',
        borderColor: getColorStyle(
          disabled ? TrilogyColor.DISABLED_FADE : _checked ? TrilogyColor.MAIN : TrilogyColor.STROKE,
        ),
        borderRadius: 6,
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: getColorStyle(disabled ? TrilogyColor.DISABLED_FADE : 'transparent'),
      },
      tileDescription: {
        color: getColorStyle(disabled ? TrilogyColor.DISABLED_FADE : TrilogyColor.MAIN),
        alignSelf: horizontal ? 'flex-start' : 'center',
      },
      horizontal: {
        flex: isGrid ? 1 : undefined,
        flexDirection: 'row',
        alignItems: 'center',
        gap: SpacerSize.THREE,
        padding: _checked ? SpacerSize.FOUR - 1 : SpacerSize.FOUR,
        width: '100%',
        height: 'auto',
        borderWidth: (_checked && 2) || 1,
        borderColor: getColorStyle(
          disabled ? TrilogyColor.DISABLED_FADE : _checked ? TrilogyColor.MAIN : TrilogyColor.STROKE,
        ),
        borderRadius: 6,
        backgroundColor: getColorStyle(disabled ? TrilogyColor.DISABLED_FADE : 'transparent'),
      },
      sticker: {
        position: 'absolute',
        top: _checked ? -stickerHeight / 2 - 1 : -stickerHeight / 2,
        right: _checked ? 15 : 16,
      },
    })

    const handleClick = () => {
      if (!readonly) {
        setChecked(!_checked)
        if (onChange) {
          onChange({
            checkboxId: id,
            checkboxValue: '',
            checkboxName: name || '',
            checkboxChecked: !_checked,
          })
        }
      }
    }

    if (horizontal) {
      return (
        <TouchableOpacity testID={testId} ref={ref} disabled={disabled} style={styles.horizontal} onPress={() => handleClick()}>
          {sticker && (
            <ViewRN style={styles.sticker} onLayout={(e) => setStickerHeight(e.nativeEvent.layout.height)}>
              <Sticker label={sticker} variant={stickerVariant} className='radio-sticker' small />
            </ViewRN>
          )}

          <TouchableOpacity style={styles.checkBox} disabled={disabled} testID={id} onPressIn={() => handleClick()}>
            {_checked && <Icon size={IconSize.SMALLER} color={TrilogyColor.BACKGROUND} name={IconName.CHECK} />}
          </TouchableOpacity>

          {icon && (
            <ViewRN
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Icon size={IconSize.SMALL} name={icon} color={disabled ? TrilogyColor.DISABLED : TrilogyColor.MAIN} />
            </ViewRN>
          )}

          <View style={{ gap: SpacerSize.ONE, flex: 1 }}>
            {label && typeof label.valueOf() === 'string' ? (
              <Text style={styles.label} level={TextLevels.ONE} typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}>
                {String(label)}
              </Text>
            ) : (
              label
            )}
            {description && typeof description.valueOf() === 'string' ? (
              <Text level={TextLevels.TWO} style={styles.tileDescription}>
                {String(description)}
              </Text>
            ) : (
              description
            )}
          </View>
        </TouchableOpacity>
      )
    }

    return (
      <TouchableOpacity testID={testId} ref={ref} disabled={disabled} style={styles.tile} onPress={handleClick} {...others}>
        {sticker && (
          <ViewRN style={styles.sticker} onLayout={(e) => setStickerHeight(e.nativeEvent.layout.height)}>
            <Sticker label={sticker} variant={stickerVariant} className='radio-sticker' small />
          </ViewRN>
        )}
        <View style={{ gap: SpacerSize.TWO }}>
          <TouchableOpacity style={[styles.checkBox]} disabled={disabled} testID={id} onPressIn={handleClick}>
            {_checked && <Icon size={IconSize.SMALLER} color={TrilogyColor.BACKGROUND} name={IconName.CHECK} />}
          </TouchableOpacity>
          {icon && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon size={IconSize.SMALL} color={disabled ? TrilogyColor.DISABLED : TrilogyColor.MAIN} name={icon} />
            </View>
          )}
          {label && typeof label.valueOf() === 'string' ? (
            <Text
              level={TextLevels.ONE}
              typo={[TypographyBold.TEXT_WEIGHT_SEMIBOLD, TypographyAlign.TEXT_CENTERED]}
              style={[styles.label]}
            >
              {String(label)}
            </Text>
          ) : (
            label
          )}
          {description && typeof description.valueOf() === 'string' && (
            <Text level={TextLevels.TWO} typo={[TypographyAlign.TEXT_CENTERED]}>
              {String(description)}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    )
  },
)

CheckboxTile.displayName = ComponentName.CheckboxTiles

export default CheckboxTile
