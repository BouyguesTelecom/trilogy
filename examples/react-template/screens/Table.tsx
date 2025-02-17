import * as React from 'react'
import { useState } from 'react'
import {
  Icon,
  IconName,
  Link,
  ScrollView,
  Section,
  Table,
  TableBody,
  TableHead,
  TableTd,
  TableTh,
  TableTr,
  Text,
  TextLevels,
  View,
} from '@trilogy-ds/react/components'
import { TableBorderEnum } from '@trilogy-ds/react/lib/components/table/TableProps'
import { TrilogyColor } from '@trilogy-ds/react'

export const TableScreen = (): JSX.Element => {
  const [expendable, setExpendable] = useState(false)
  return (
    <Section>
      <ScrollView>
        <Table border={TableBorderEnum.ALL} fullwidth>
          <TableHead backgroundColor={TrilogyColor.ERROR}>
            <TableTr>
              <TableTh>Paramètre</TableTh>
              <TableTh>Description</TableTh>
              <TableTh>Défaut</TableTh>
              <TableTh>Recommendation en local</TableTh>
              <TableTh>Recommendation en local</TableTh>
              <TableTh>Recommendation en local</TableTh>
              <TableTh>Recommendation en local</TableTh>
              <TableTh>Recommendation en local</TableTh>
              <TableTh>Recommendation en local</TableTh>
              <TableTh>Recommendation en local</TableTh>
              <TableTh>Recommendation en local</TableTh>
              <TableTh>Recommendation en prod</TableTh>
            </TableTr>
          </TableHead>
          <TableBody>
            <TableTr color={TrilogyColor.WARNING}>
              <TableTd>
                <Text>gateway.introspection.filter.enabled</Text>
              </TableTd>
              <TableTd>Activation / désactivation de l’introspection</TableTd>
              <TableTd>true</TableTd>
              <TableTd>false</TableTd>
              <TableTd>true</TableTd>
            </TableTr>
            <TableTr>
              <TableTd>
                <Text>gateway.context.enabledList</Text>
              </TableTd>
              <TableTd>Liste des contextes à charger</TableTd>
              <TableTd>LEGACY,SWAP_LATEST</TableTd>
              <TableTd>LEGACY ou LEGACY,SWAP_LATEST</TableTd>
              <TableTd> </TableTd>
            </TableTr>
            <TableTr>
              <TableTd>
                <Text>gateway.context.default</Text>
              </TableTd>
              <TableTd>Contexte par default</TableTd>
              <TableTd>LEGACY</TableTd>
              <TableTd>LEGACY</TableTd>
              <TableTd> </TableTd>
            </TableTr>
            <TableTr>
              <TableTd>
                <Text>gateway.context.enabledList</Text>
              </TableTd>
              <TableTd>Liste des contextes à charger</TableTd>
              <TableTd>LEGACY,SWAP_LATEST</TableTd>
              <TableTd>LEGACY ou LEGACY,SWAP_LATEST</TableTd>
              <TableTd> </TableTd>
            </TableTr>
            <TableTr>
              <TableTd>
                <Text>gateway.swap.url</Text>
              </TableTd>
              <TableTd>URL de SWAP</TableTd>
              <TableTd>A compléter</TableTd>
              <TableTd>
                <Link href='https://local.a7.127.0.0.1.sslip.io/'>https://local.a7.127.0.0.1.sslip.io/</Link>
              </TableTd>
              <TableTd> </TableTd>
            </TableTr>
            <TableTr>
              <TableTd>
                <Text>gateway.threading.pool.size</Text>
              </TableTd>
              <TableTd>Nombre de threads</TableTd>
              <TableTd>4</TableTd>
              <TableTd>TBD</TableTd>
              <TableTd> </TableTd>
            </TableTr>
            <TableTr>
              <TableTd>
                <Text>spring.profiles.active</Text>
              </TableTd>
              <TableTd> </TableTd>
              <TableTd> </TableTd>
              <TableTd>DEV</TableTd>
              <TableTd> </TableTd>
            </TableTr>
          </TableBody>
        </Table>
      </ScrollView>

      <Table fullwidth border={TableBorderEnum.ALL}>
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
          <TableTr onClick={() => setExpendable(!expendable)} expandable expanded={expendable} data-expandable-row=''>
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
          <TableTr expansion>
            <TableTd colSpan={7}>
              <View
                backgroundSrc={
                  'https://images.pexels.com/photos/18254878/pexels-photo-18254878/free-photo-of-eau-desert-rochers-source-chaude.jpeg'
                }
              >
                <Text level={TextLevels.FOUR}>
                  Dolore fugiat reprehenderit nostrud velit voluptate dolor irure ullamco exercitation nulla eiusmod in
                </Text>
                <Text>Laboris cupidatat culpa nisi ad consectetur ex ea laboris est nostrud aliquip.</Text>
              </View>
            </TableTd>
          </TableTr>
        </TableBody>
      </Table>

      <Table border={TableBorderEnum.ALL}>
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

      <Table border={TableBorderEnum.INNER}>
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

      <Table border={TableBorderEnum.LINES}>
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
    </Section>
  )
}
