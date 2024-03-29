import React from 'react'

import { Meta, Story } from '@storybook/react'

import { Table, TableBody, TableHead, TableTd, TableTh, TableTr } from './index'
import { TableProps } from './TableProps'
import { View } from '../view'
import { Text, TextLevels } from '../text'
import { Icon, IconName } from '../icon'

export default {
  title: 'Components/Table',
  component: Table,
  subcomponents: { TableBody, TableHead, TableTd, TableTh, TableTr },
} as Meta

export const Base: Story<TableProps> = (args) => (
  <Table {...args}>
    <TableHead>
      <TableTr>
        <TableTh>Title 1</TableTh>
        <TableTh>Title 2</TableTh>
        <TableTh>Title 3</TableTh>
      </TableTr>
    </TableHead>
    <TableBody>
      <TableTr>
        <TableTd>Donnée 1</TableTd>
        <TableTd>Donnée 2</TableTd>
        <TableTd>Donnée 3</TableTd>
      </TableTr>
      <TableTr>
        <TableTd>Donnée 4</TableTd>
        <TableTd>Donnée 5</TableTd>
        <TableTd>Donnée 6</TableTd>
      </TableTr>
    </TableBody>
  </Table>
)
export const AvecBordures: Story<TableProps> = (args) => (
  <Table {...args}>
    <TableHead>
      <TableTr>
        <TableTh>Title 1</TableTh>
        <TableTh>Title 2</TableTh>
        <TableTh>Title 3</TableTh>
      </TableTr>
    </TableHead>
    <TableBody>
      <TableTr>
        <TableTd>Donnée 1</TableTd>
        <TableTd>Donnée 2</TableTd>
        <TableTd>Donnée 3</TableTd>
      </TableTr>
      <TableTr>
        <TableTd>Donnée 4</TableTd>
        <TableTd>Donnée 5</TableTd>
        <TableTd>Donnée 6</TableTd>
      </TableTr>
    </TableBody>
  </Table>
)
AvecBordures.args = {
  bordered: true,
}
export const PleineLargeur: Story<TableProps> = (args) => (
  <Table {...args}>
    <TableHead>
      <TableTr>
        <TableTh>Title 1</TableTh>
        <TableTh>Title 2</TableTh>
        <TableTh>Title 3</TableTh>
      </TableTr>
    </TableHead>
    <TableBody>
      <TableTr>
        <TableTd>Donnée 1</TableTd>
        <TableTd>Donnée 2</TableTd>
        <TableTd>Donnée 3</TableTd>
      </TableTr>
      <TableTr>
        <TableTd>Donnée 4</TableTd>
        <TableTd>Donnée 5</TableTd>
        <TableTd>Donnée 6</TableTd>
      </TableTr>
    </TableBody>
  </Table>
)
PleineLargeur.args = {
  fullwidth: true,
  bordered: true,
}
export const TableauComparatif: Story<TableProps> = (args) => (
  <Table {...args}>
    <TableHead>
      <TableTr>
        <TableTh>Title 1</TableTh>
        <TableTh>Title 2</TableTh>
        <TableTh>Title 3</TableTh>
      </TableTr>
    </TableHead>
    <TableBody>
      <TableTr>
        <TableTd>Donnée 1</TableTd>
        <TableTd>Donnée 2</TableTd>
        <TableTd>Donnée 3</TableTd>
      </TableTr>
      <TableTr>
        <TableTd>Donnée 4</TableTd>
        <TableTd>Donnée 5</TableTd>
        <TableTd>Donnée 6</TableTd>
      </TableTr>
    </TableBody>
  </Table>
)
TableauComparatif.args = {
  bordered: true,
  fullwidth: true,
  comparative: true,
}
export const LignesAffichéesOuMasquées: Story<TableProps> = (args) => (
  <Table {...args}>
    <TableHead>
      <TableTr>
        <TableTh>Date</TableTh>
        <TableTh>Libellé opération</TableTh>
        <TableTh>Montant</TableTh>
        <TableTh>Solde client</TableTh>
        <TableTh>Opérations associées</TableTh>
      </TableTr>
    </TableHead>
    <TableBody>
      <TableTr expandable expanded data-expandable-row=''>
        <TableTd>09/11/2018</TableTd>
        <TableTd>
          <Text>Prélèvement PAPGPXXXXXXXXXX</Text>
          <Text>Réf. paiement : 28268</Text>
        </TableTd>
        <TableTd>-100,00 €</TableTd>
        <TableTd>0,00 €</TableTd>
        <TableTd data-expandable-trigger=''>
          <Icon name={IconName.ARROW_DOWN} content='Afficher' />
        </TableTd>
      </TableTr>
      <TableTr className='is-expansion'>
        <TableTd colSpan={7}>
          <View className='subtable' backgroundSrc={'https://design.bouyguestelecom.fr/bg-sensation.421f50d9.png'}>
            <Text level={TextLevels.FOUR}>
              Dolore fugiat reprehenderit nostrud velit voluptate dolor irure ullamco exercitation nulla eiusmod in
            </Text>
            <Text>Laboris cupidatat culpa nisi ad consectetur ex ea laboris est nostrud aliquip.</Text>
          </View>
        </TableTd>
      </TableTr>
    </TableBody>
  </Table>
)
LignesAffichéesOuMasquées.args = {
  bordered: true,
}
export const LignesEnSurbrillance: Story<TableProps> = (args) => (
  <Table {...args}>
    <TableHead>
      <TableTr>
        <TableTh>Date</TableTh>
        <TableTh>Libellé opération</TableTh>
        <TableTh>Montant</TableTh>
        <TableTh>Solde client</TableTh>
        <TableTh>Opérations associées</TableTh>
      </TableTr>
    </TableHead>
    <TableBody>
      <TableTr expandable expanded data-expandable-row=''>
        <TableTd>09/11/2018</TableTd>
        <TableTd>
          <Text>Prélèvement PAPGPXXXXXXXXXX</Text>
          <Text>Réf. paiement : 28268</Text>
        </TableTd>
        <TableTd>-100,00 €</TableTd>
        <TableTd>0,00 €</TableTd>
        <TableTd data-expandable-trigger=''>
          <Icon name={IconName.ARROW_DOWN} content='Afficher' />
        </TableTd>
      </TableTr>
      <TableTr className='is-expansion'>
        <TableTd colSpan={7}>
          <View className='subtable' backgroundSrc={'https://design.bouyguestelecom.fr/bg-sensation.421f50d9.png'}>
            <Text level={TextLevels.FOUR}>
              Dolore fugiat reprehenderit nostrud velit voluptate dolor irure ullamco exercitation nulla eiusmod in
            </Text>
            <Text>Laboris cupidatat culpa nisi ad consectetur ex ea laboris est nostrud aliquip.</Text>
          </View>
        </TableTd>
      </TableTr>
    </TableBody>
  </Table>
)
LignesEnSurbrillance.args = {
  bordered: true,
}
