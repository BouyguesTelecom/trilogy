import { AlignableProps } from '@/objects/facets/Alignable'
import { CommonProps } from '@/objects/facets/CommonProps'
import { View } from 'react-native'

/**
 * Columns Item Interface
 */
export interface RadioTilesProps extends AlignableProps, CommonProps {
  children: React.ReactNode;
  accessibilityLabelledBy?: string;
}

export type RadioTilesRef = HTMLDivElement
export type RadioTilesNativeRef = View
