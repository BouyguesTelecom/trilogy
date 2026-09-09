import * as React from 'react'
import { render } from '@testing-library/react'
import Table from '@/components/table/Table'
import TableHead from '@/components/table/head'
import TableTr from '@/components/table/tr'
import TableTh from '@/components/table/th'
import TableBody from '@/components/table/body'
import TableTd from '@/components/table/td'
import Text from '@/components/text/Text'
import Icon from '@/components/icon/Icon'
import { IconName } from '@/components/icon'
import View from '@/components/view/View'
import { TextLevels } from '@/components/text'
import { TableBorderEnum } from '@/components/table/TableProps'

describe('Table component', () => {
  it('renders a table element', () => {
    const { container } = render(
      <Table>
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
      </Table>,
    )
    expect(container.querySelector('table')).toBeInTheDocument()
  })

  it('applies the fullwidth class when the prop is set', () => {
    const { container } = render(
      <Table fullwidth>
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
      </Table>,
    )
    expect(container.firstChild).toHaveClass('is-fullwidth')
  })

  it('applies the bordered class when the prop is set', () => {
    const { container } = render(
      <Table border={TableBorderEnum.ALL}>
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
      </Table>,
    )
      expect(container.firstChild).toHaveClass('has-border-all')
  })

  it('applies the comparative class when the prop is set', () => {
    const { container } = render(
      <Table border={TableBorderEnum.INNER}>
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
      </Table>,
    )
    expect(container.firstChild).toHaveClass('has-border-inner')
  })

  it('applies the striped class when the prop is set', () => {
    const { container } = render(
      <Table striped>
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
      </Table>,
    )
    expect(container.firstChild).toHaveClass('is-striped')
  })
})
