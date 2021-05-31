import { Badge, Table } from 'react-bootstrap'
import Currency from '../../components/Currency'
import Layout from '../../components/Layout'
import Section from '../../components/Section'

import './styles.scss'

export default function Transactions() {

  const data = [
    {
      "date": "May 24",
      "merchant": "PayPal - Preemptive Love",
      "category": "Giving / Donations",
      "description": "dnation",
      "amount": -2.06,
      "account": "Regular Expenses",
    },
    {
      "date": "May 24",
      "merchant": "Coinbase",
      "category": "Investments ..or Gambling",
      "description": "",
      "amount": -20,
      "account": "Regular Expenses",
    },
  ]

  const Category = ({ className, category }) => (
    <Badge className={ className } variant="light">{ category }</Badge>
  )

  return (
    <Layout>
    <Section>

      <h1>Transactions</h1>

      <Table responsive>
      <thead>
        <tr>
          <th>Merchant</th>
          <th className="d-none d-sm-table-cell">Category</th>
          <th className="d-none d-md-table-cell">Account</th>
          <th className="text-right">Amount</th>
        </tr>
      </thead>
      <tbody>
      { data.map(( transaction, key ) => (
        <tr key={ key }>
          <td>
            { transaction.merchant }
            <span className="line2">
              { transaction.description && (
                <span className="description">{ transaction.description }</span>
              ) }
            </span>
          </td>
          <td className="category d-none d-sm-table-cell"><Category category={ transaction.category } /></td>
          <td className="account d-none d-md-table-cell">{ transaction.account }</td>
          <td className="amount">
            <Currency amount={ transaction.amount } />
          </td>
        </tr>
      )) }
      </tbody>
      </Table>

    </Section>
    </Layout>
  )
}
