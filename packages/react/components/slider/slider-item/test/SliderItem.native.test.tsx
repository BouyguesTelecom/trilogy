import { render, screen } from '@testing-library/react-native'
import * as React from 'react'
import { Text } from 'react-native'
import SliderItem from '../SliderItem'

describe('SliderItem component (native)', () => {
  it('renders its children', () => {
    render(
      <SliderItem>
        <Text>Slide content</Text>
      </SliderItem>,
    )
    expect(screen.getByText('Slide content')).toBeOnTheScreen()
  })

  it('wraps children in a full-width View', () => {
    const { toJSON } = render(
      <SliderItem>
        <Text>Slide content</Text>
      </SliderItem>,
    )
    const tree = toJSON() as { type: string; props: { style?: Record<string, unknown> } }
    expect(tree?.type).toBe('View')
    expect(tree?.props.style).toEqual({ width: '100%' })
  })

  it('renders null content gracefully', () => {
    const { toJSON } = render(<SliderItem>{null}</SliderItem>)
    const tree = toJSON() as { type: string; children: unknown }
    expect(tree?.type).toBe('View')
    expect(tree?.children).toBeNull()
  })

  it('sets the correct displayName', () => {
    expect(SliderItem.displayName).toBe('SliderItem')
  })
})