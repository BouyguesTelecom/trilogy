import React from 'react'
import { Table, TableTr, TableHead, TableTd, TableBody, TableTh } from './index'

const TableExample: React.ReactNode =

  <Table bordered>
    <TableHead>
      <TableTr>
        <TableTh>
          Title 1
        </TableTh>
        <TableTh>
          Title 2
        </TableTh>
        <TableTh>
          Title 3
        </TableTh>
      </TableTr>
    </TableHead>
    <TableBody>
      <TableTr>
        <TableTd>
          Donnée 1
        </TableTd>
        <TableTd>
          Donnée 2
        </TableTd>
        <TableTd>
          Donnée 3
        </TableTd>
      </TableTr>
      <TableTr>
        <TableTd>
          Donnée 4
        </TableTd>
        <TableTd>
          Donnée 5
        </TableTd>
        <TableTd>
          Donnée 6
        </TableTd>
      </TableTr>
    </TableBody>
  </Table>

export default TableExample
