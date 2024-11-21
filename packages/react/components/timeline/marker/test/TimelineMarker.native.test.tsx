import { render, screen } from '@testing-library/react-native'
import { IconName } from '@trilogy-ds/assets'
import React from 'react'

import TimelineMarker from '@/components/timeline/marker/TimelineMarker.native'
import { TrilogyColor } from '@/objects'

describe('TimelineMarker component', () => {
  it('renders without crashing', () => {
    render(<TimelineMarker testId={'marker'} iconName={IconName.CHECK} iconColor={TrilogyColor.BACKGROUND} />)
    expect(screen.getByTestId('marker')).toBeOnTheScreen()
  })
})
