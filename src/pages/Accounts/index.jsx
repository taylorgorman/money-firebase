import { useState, useEffect } from 'react'
import * as Yup from 'yup'
import { Button, Modal } from 'react-bootstrap'
import { SlashCircle } from 'react-bootstrap-icons'

import './index.scss'
import Layout from '../../components/Layout'
import PageHeading from '../../components/ui/PageHeading'
import Section from '../../components/ui/Section'
import AccountsRows from './AccountsRows'
import AccountsCards from './AccountsCards'
import AccountsTable from './AccountsTable'
import { useData } from '../../utilities/DataContext'
import IconContentBlock from '../../components/ui/IconContentBlock'
import Form from '../../components/ui/Form'

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
  const { settings, updateSetting, retrieveData } = useData()
  const [layout, setLayout] = useState( settings['accounts-layout'] || 'Rows' )
  const [sortBy, setSortBy] = useState( settings['accounts-sortBy'] || 'Amount' )
  const [showNetWorth, setShowNetWorth] = useState( settings['accounts-showNetWorth'] || true )
  const [showModalAddAccount, setShowModalAddAccount] = useState( false )
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
    setShowModalAddAccount( true )
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

        <ModalAddAccount
          show={ showModalAddAccount }
          onHide={ () => setShowModalAddAccount( false ) }
        />

      </Section>
    </Layout>
  )
}

function ModalAddAccount( { show, onHide } ) {
  const { createData } = useData()
  return (
    <Modal { ...{ show, onHide } }>
      <Modal.Header closeButton>
        <Modal.Title>Add Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          fields={ [
            {
              id: 'type',
              label: 'Account type',
              type: 'select',
              options: [
                'Checking',
                'Savings',
                'Credit',
              ],
              validation: Yup.string().required( 'Required' ),
            },
            {
              label: 'Nickname',
              validation: Yup.string().required( 'Required' ),
            },
            {
              label: 'Bank',
              validation: Yup.string().required( 'Required' ),
            },
            {
              label: 'Description',
              validation: Yup.string().max( 50, 'Maximum description length is 40 characters' ),
            },
            {
              type: 'number',
              label: 'Closing balance',
              validation: Yup.number()
                .typeError( 'Balance must a number' )
                .required( 'Required' ),
            },
            {
              id: 'closing-balance-date',
              label: 'On date',
              validation: Yup.date().required( 'Required' ),
            },
          ] }
          submitButtonText="Save"
          onSubmit={ async ( values, setFormMessage ) => {
            try {
              await createData( 'accounts', values )
              onHide()
            } catch ( error ) {
              setFormMessage( 'danger', error )
            }
          } }
        />
      </Modal.Body>
    </Modal>
  )
}
