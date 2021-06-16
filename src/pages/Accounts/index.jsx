import { useState, useEffect } from 'react'

import './index.scss'
import { Button } from 'react-bootstrap'
import { SlashCircle } from 'react-bootstrap-icons'
import Layout from '../../components/Layout'
import PageHeading from '../../components/ui/PageHeading'
import Section from '../../components/ui/Section'
import AccountsRows from './AccountsRows'
import AccountsCards from './AccountsCards'
import AccountsTable from './AccountsTable'
import { useData } from '../../utilities/DataContext'
import IconContentBlock from '../../components/ui/IconContentBlock'

const Loading = () => (
  <p>Loading accounts...</p>
)

const Error = ( error ) => (
  <>
    <p>
      Error loading accounts:
      { ' ' }
    </p>
    <pre><code>{ JSON.stringify( error ) }</code></pre>
  </>
)

export default function Accounts() {
  const { settings, updateSetting } = useData()
  const [layout, setLayout] = useState( settings['accounts-layout'] || 'Rows' )
  const [sortBy, setSortBy] = useState( settings['accounts-sortBy'] || 'Amount' )
  const [showNetWorth, setShowNetWorth] = useState( settings['accounts-showNetWorth'] || true )
  const { retrieveData } = useData()
  const [accounts, loading, error] = retrieveData( 'accounts' )

  useEffect( () => {
    updateSetting( { value: layout }, 'accounts-layout' )
  }, [layout] )
  useEffect( () => {
    updateSetting( { value: sortBy }, 'accounts-sortBy' )
  }, [sortBy] )
  useEffect( () => {
    updateSetting( { value: showNetWorth }, 'accounts-showNetWorth' )
  }, [showNetWorth] )

  function handleAddAccount() {
    alert( 'add account' )
  }

  const accountsLayoutProps = {
    handleAddAccount,
    showNetWorth,
    sortBy,
    accounts,
    loading,
    error,
  }

  return (
    <Layout>
      <Section>

        <PageHeading
          buttonOnClick={ handleAddAccount }
          settings={ [
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
          ] }
        >
          Accounts
        </PageHeading>

        { loading && <Loading /> }
        { error && <Error /> }
        { ! loading && ! error && (
          accounts && accounts.length > 0 ? (
            <>
              { layout === 'Rows' && <AccountsRows { ...accountsLayoutProps } /> }
              { layout === 'Cards' && <AccountsCards { ...accountsLayoutProps } /> }
              { layout === 'Table' && <AccountsTable { ...accountsLayoutProps } /> }
            </>
          ) : (
            <IconContentBlock Icon={ SlashCircle }>
              <p>
                You have no accounts yet.
                { ' ' }
                <Button variant="link" onClick={ handleAddAccount }>Add one now</Button>
                .
              </p>
            </IconContentBlock>
          )
        ) }

      </Section>
    </Layout>
  )
}
