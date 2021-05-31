import { Badge, Table } from 'react-bootstrap'
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
      "amount": "-$2.06",
      "account": "Regular Expenses",
    },
    {
      "date": "May 24",
      "merchant": "Coinbase",
      "category": "Investments ..or Gambling",
      "description": "",
      "amount": "-$20.00",
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

        <Table className="transactions">
        <tbody>
          { data.map(( transaction, key ) => (
            <tr key={ key }>
              <td>
                { transaction.merchant }
                <span className="second-line">
                  <Category className="d-md-none" category={ transaction.category } />
                  { transaction.description && <span className="description">{ transaction.description }</span> }
                </span>
              </td>
              <td className="category">
                <Category className="d-none d-md-inline-block" category={ transaction.category } />
              </td>
              <td className="account">
                { transaction.account }
              </td>
              <td className="amount">
                { transaction.amount }
              </td>
            </tr>
          )) }
        </tbody>
        </Table>

      </Section>
    </Layout>
  )
}
