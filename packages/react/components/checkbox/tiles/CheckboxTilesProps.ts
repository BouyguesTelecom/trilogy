import { View } from 'react-native'
import { AlignableProps } from '../../../objects/facets/Alignable'
import { CommonProps } from '../../../objects/facets/CommonProps'

/**
 * Columns Item Interface
 */
export interface CheckboxTilesProps extends AlignableProps, CommonProps {
  children: React.ReactNode;
  accessibilityLabelledBy?: string;
}

export type CheckboxTilesRef = HTMLDivElement
export type CheckboxTilesNativeRef = View
