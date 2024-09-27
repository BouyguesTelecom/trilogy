import { render, screen } from '@testing-library/react-native'
import { IconName } from '@trilogy-ds/assets'
import * as React from 'react'
import { TrilogyColor } from '../../../../objects'
import TimelineMarker from '../TimelineMarker.native'

describe('TimelineMarker component', () => {
  it('renders without crashing', () => {
    render(<TimelineMarker testId={'marker'} iconName={IconName.CHECK} iconColor={TrilogyColor.BACKGROUND} />)
    expect(screen.getByTestId('marker')).toBeOnTheScreen()
  })
})
