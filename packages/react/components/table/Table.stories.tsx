import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Table, TableBody, TableBorderEnum, TableHead, TableTd, TableTh, TableTr } from './index'
import { TableProps } from './TableProps'
import { View } from '../view'
import { Text, TextLevels, TextMarkup } from '../text'
import { Icon, IconName } from '../icon'

const meta = {
  title: 'Components/Table',
  component: Table,
  subcomponents: { TableBody, TableHead, TableTd, TableTh, TableTr },
} satisfies Meta<TableProps>

export default meta
type Story = StoryObj<typeof meta>

const childrenTable = (
  <>
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
  </>
)

export const Base: Story = {
  args: {
    children: childrenTable,
  },
}

export const AvecBordures: Story = {
  args: {
    border: TableBorderEnum.ALL,
    children: childrenTable,
  },
}

export const PleineLargeur: Story = {
  args: {
    fullwidth: true,
    border: TableBorderEnum.ALL,
    children: childrenTable,
  },
}

export const LignesAffichéesOuMasquées: Story = {
  args: {
    border: TableBorderEnum.ALL,
    children: (
      <>
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
              <Icon name={IconName.ARROW_DOWN} />
              <Text markup={TextMarkup.SPAN}>Afficher</Text>
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
      </>
    ),
  },
}

export const LignesEnSurbrillance: Story = {
  args: {
    border: TableBorderEnum.ALL,
    children: (
      <>
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
              <Icon name={IconName.ARROW_DOWN} />
              <Text markup={TextMarkup.SPAN}>Afficher</Text>
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
      </>
    ),
  },
}
