import { useState } from 'react'

import Layout from '../../components/Layout'
import PageHeading from '../../components/PageHeading'
import Section from '../../components/Section'
import AccountsRows from './AccountsRows'
import AccountsCards from './AccountsCards'
import AccountsTable from './AccountsTable'

export default function Accounts() {

  const [ layout, setLayout ] = useState( 'Rows' )
  const [ sortBy, setSortBy ] = useState( 'Amount' )
  const [ showNetWorth, setShowNetWorth ] = useState( true )

  return (
    <Layout>
    <Section>

      <PageHeading settings={[
        {
          type: 'radio',
          label: 'Layout',
          value: layout,
          options: [
            'Rows',
            'Cards',
            'Table',
          ],
          onChange: ( value ) => setLayout( value ),
        },
        {
          type: 'radio',
          label: 'Sort by',
          value: sortBy,
          options: [
            'Amount',
            'Name',
            'Type',
          ],
          onChange: ( value ) => setSortBy( value ),
        },
        {
          type: 'checkbox',
          label: 'Net worth',
          value: showNetWorth,
          options: [
            'Show net worth',
          ],
          onChange: ( value ) => setShowNetWorth( value ),
        },
      ]}>Accounts</PageHeading>

      { layout === 'Rows' && <AccountsRows {...{ showNetWorth, sortBy }} /> }
      { layout === 'Cards' && <AccountsCards {...{ showNetWorth, sortBy }} /> }
      { layout === 'Table' && <AccountsTable {...{ showNetWorth, sortBy }} /> }

    </Section>
    </Layout>
  )
}
