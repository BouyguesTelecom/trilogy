import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName, IconSize } from '@/components/icon/index.native'
import { SpacerSize } from '@/components/spacer/index.native'
import { Sticker } from '@/components/sticker/index.native'
import { Text, TextLevels } from '@/components/text/index.native'
import { View } from '@/components/view/index.native'
import { getColorStyle, TrilogyColor, TypographyAlign, TypographyBold, VariantState } from '@/objects/index.native'
import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View as ViewRN } from 'react-native'
import { CheckboxTileNativeRef, CheckboxTileProps } from './CheckboxTileProps'

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
      ...others
    },
    ref,
  ): JSX.Element => {
    const [_checked, setChecked] = useState<boolean>(checked || false)
    const [stickerHeight, setStickerHeight] = useState<number>(0)

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
        padding: _checked ? SpacerSize.FOUR - 1 : SpacerSize.FOUR,
        maxWidth: '50%',
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
        <TouchableOpacity ref={ref} disabled={disabled} style={styles.horizontal} onPress={() => handleClick()}>
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
            {label && typeof label.valueOf() === 'string' && (
              <Text style={styles.label} level={TextLevels.ONE} typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}>
                {String(label)}
              </Text>
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
      <TouchableOpacity ref={ref} disabled={disabled} style={styles.tile} onPress={handleClick} {...others}>
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
          {label && typeof label.valueOf() === 'string' && (
            <Text
              level={TextLevels.ONE}
              typo={[TypographyBold.TEXT_WEIGHT_SEMIBOLD, TypographyAlign.TEXT_CENTERED]}
              style={[styles.label]}
            >
              {String(label)}
            </Text>
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
