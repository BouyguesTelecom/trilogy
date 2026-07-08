import React from 'react'
import { SkeletonProps } from './SkeletonProps'

/**
 * Skeleton Component - Loading placeholder with animated shimmer effect
 * @note Web implementation is a stub — the full implementation is in Skeleton.native.tsx
 * - -------------------------- NATIVE PROPERTIES ----------------------------
 * @param width {DimensionValue} Width of the skeleton placeholder (default: '100%')
 * @param height {DimensionValue} Height of the skeleton placeholder (default: 20)
 * @param backgroundColor {string} Background color (default: '#E1E9EE')
 * @param shimmerColor {string} Color of the shimmer animation (default: '#F7F8F8')
 * @param duration {number} Shimmer animation duration in milliseconds (default: 1200)
 * @param borderRadius {number} Border radius of the container (default: 4)
 * @param children {React.ReactNode} Optional children to render inside the skeleton
 * @param testID {string} Test identifier (React Native)
 * @param style {ViewStyle} Custom container style (React Native)
 */
const Skeleton: React.FC<SkeletonProps> = () => {
  return (
    <></>
  )
}

export default Skeleton
