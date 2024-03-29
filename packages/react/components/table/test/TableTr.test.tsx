import React from 'react'
import { render } from '@testing-library/react'
import TableTr from '../tr'
import { getBackgroundClassName, getColorClassName, TrilogyColor } from '../../../objects'
import { has, is } from '../../../services'
import Table from '../Table'
import TableBody from '../body'
import TableTd from '../td'

describe('TableTr', () => {
  it('renders without error', () => {
    render(
      <Table>
        <TableBody>
          <TableTr>
            <TableTd>tr</TableTd>
          </TableTr>
        </TableBody>
      </Table>,
    )
  })

  it('renders with additional CSS classes', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableTr className='custom-class'>
            <TableTd>tr</TableTd>
          </TableTr>
        </TableBody>
      </Table>,
    )
    const tr = container.querySelector('tr')
    expect(tr).toHaveClass('custom-class')
  })

  it('renders with expandable class when expandable prop is true', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableTr expandable>
            <TableTd>tr</TableTd>
          </TableTr>
        </TableBody>
      </Table>,
    )
    const tr = container.querySelector('tr')
    expect(tr).toHaveClass(is('expandable'))
  })

  it('renders with expanded class when expanded prop is true', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableTr expanded>
            <TableTd>tr</TableTd>
          </TableTr>
        </TableBody>
      </Table>,
    )
    const tr = container.querySelector('tr')
    expect(tr).toHaveClass(is('expanded'))
  })

  it('renders with expansion class when expansion prop is true', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableTr expansion>
            <TableTd>tr</TableTd>
          </TableTr>
        </TableBody>
      </Table>,
    )
    const tr = container.querySelector('tr')
    expect(tr).toHaveClass(is('expansion'))
  })
})
