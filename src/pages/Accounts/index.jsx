import { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'

import Layout from '../../components/Layout'
import PageHeading from '../../components/PageHeading'
import Section from '../../components/Section'
import { dashed } from '../../utilities/formatString'
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

      <PageHeading hasSettings>Accounts</PageHeading>

      <Row>
      <Col md>
      <h5>Layout</h5>
        <p>
        { [
          'Rows',
          'Cards',
          'Table',
        ].map(( label, key) => (
          <Form.Check
            type="radio"
            id={ dashed( label ) }
            name="layout"
            label={ label }
            key={ key }
            checked={ layout === label }
            onChange={ () => setLayout( label ) }
          />
        )) }
        </p>
      </Col>
      <Col>
      <h5>Sort by</h5>
        <p>
        { [
          'Amount',
          'Name',
          'Type',
        ].map(( label, key) => (
          <Form.Check
            type="radio"
            id={ dashed( label ) }
            name="sort-by"
            label={ label }
            key={ key }
            checked={ sortBy === label }
            onChange={ () => setSortBy( label ) }
          />
        )) }
        </p>
      </Col>
      <Col>
        <h5>Net worth</h5>
        <p>
          <Form.Check
            type="checkbox"
            id="show-net-worth"
            name="show-net-worth"
            label="Show net worth"
            checked={ showNetWorth }
            onChange={ () => setShowNetWorth( ! showNetWorth ) }
          />
        </p>
      </Col>
      </Row>

      { layout === 'Rows' && <AccountsRows showNetWorth={ showNetWorth } /> }
      { layout === 'Cards' && <AccountsCards showNetWorth={ showNetWorth } /> }
      { layout === 'Table' && <AccountsTable showNetWorth={ showNetWorth } /> }

    </Section>
    </Layout>
  )
}
