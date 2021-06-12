import { useState, useEffect } from 'react'

import './index.scss'
import Layout from '../../components/Layout'
import PageHeading from '../../components/ui/PageHeading'
import Section from '../../components/ui/Section'
import AccountsRows from './AccountsRows'
import AccountsCards from './AccountsCards'
import AccountsTable from './AccountsTable'
import { useData } from '../../utilities/DataContext'

export default function Accounts() {

  const { settings, updateSetting } = useData()
  const [ layout, setLayout ] = useState( settings['accounts-layout'] || 'Rows' )
  const [ sortBy, setSortBy ] = useState( settings['accounts-sortBy'] || 'Amount' )
  const [ showNetWorth, setShowNetWorth ] = useState( settings['accounts-showNetWorth'] || true )

  useEffect(() => {
    updateSetting( { value: layout }, 'accounts-layout' )
  }, [layout])
  useEffect(() => {
    updateSetting( { value: sortBy }, 'accounts-sortBy' )
  }, [sortBy])
  useEffect(() => {
    updateSetting( { value: showNetWorth }, 'accounts-showNetWorth' )
  }, [showNetWorth])

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
