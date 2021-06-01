import { Badge, Table } from 'react-bootstrap'
import Currency from '../../components/Currency'

import Layout from '../../components/Layout'
import Section from '../../components/Section'

export default function Accounts() {

  const data = [
    {
      "name": "Regular Expenses",
      "bank": "Bank of America",
      "type": "checking",
      "balance": 522.39,
    },
    {
      "name": "Sapphire Reserve",
      "bank": "Chase",
      "type": "credit",
      "balance": -1162.87,
    },
    {
      "name": "Fun",
      "bank": "Bank of America",
      "type": "checking",
      "balance": 33.94,
    },
    {
      "name": "Big Adventures",
      "bank": "Bank of America",
      "type": "savings",
      "balance": 1243.16,
    },
    {
      "name": "Debts and Irregular",
      "bank": "Bank of America",
      "type": "savings",
      "balance": 82.94,
    },
    {
      "name": "Emergencies",
      "bank": "Bank of America",
      "type": "savings",
      "balance": 1649.25,
    },
    {
      "name": "Venmo",
      "bank": "Venmo",
      "type": "checking",
      "balance": -30,
    },
    {
      "name": "Rewards Credit",
      "bank": "Bank of America",
      "type": "credit",
      "balance": 0,
    },
    {
      "name": "Travel Credit",
      "bank": "Bank of America",
      "type": "credit",
      "balance": 0,
    },
  ]

  return (
    <Layout>
    <Section>

      <h1>Accounts</h1>

      <Table>
      <thead>
        <tr>
          <th>Name, Bank</th>
          <th>Type</th>
          <th className="text-right">Balance</th>
        </tr>
      </thead>
      <tbody>
      { data.map(( account, key ) => (
        <tr key={ key }>
          <td className="name">
            { account.name }
            <span className="line2">{ account.bank }</span>
          </td>
          <td className="type"><Badge variant="light">{ account.type }</Badge></td>
          <td className="balance" style={{ maxWidth: "5em" }}>
            <Currency amount={ account.balance } />
          </td>
        </tr>
      )) }
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th></th>
          <th>
            <Currency amount={ data.reduce( ( total, account ) => total + account.balance, 0 ) } />
          </th>
        </tr>
      </tfoot>
      </Table>

    </Section>
    </Layout>
  )
}
