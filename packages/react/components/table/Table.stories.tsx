import type { Meta, StoryObj } from '@storybook/react'
import { Section, Table, TableBorderEnum } from '../../lib'
import TableHead from './head'
import TableTr from './tr'
import TableTh from './th'
import TableBody from './body'
import TableTd from './td'

const meta: Meta<typeof Table> = {
  component: Table,
  subcomponents: { TableHead, TableTr, TableTh, TableBody, TableTd },
}

export default meta

type Story = StoryObj<typeof Table>


// @ts-ignore
export const Example: Story = {
  render: () => (
    <Section>
      <Table border={TableBorderEnum.ALL}>
        <TableHead>
          <TableTr>
            <TableTh> Title 1 </TableTh>
            <TableTh> Title 2 </TableTh>
            <TableTh> Title 3 </TableTh>
          </TableTr>
        </TableHead>
        <TableBody>
          <TableTr>
            <TableTd> Donnée 1 </TableTd>
            <TableTd> Donnée 2 </TableTd>
            <TableTd> Donnée 3 </TableTd>
          </TableTr>
          <TableTr>
            <TableTd> Donnée 4 </TableTd>
            <TableTd> Donnée 5 </TableTd>
            <TableTd> Donnée 6 </TableTd>
          </TableTr>
        </TableBody>
      </Table>
    </Section>
  ),
}
