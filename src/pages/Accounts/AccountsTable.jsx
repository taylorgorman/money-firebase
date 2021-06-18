import { Badge, Table } from 'react-bootstrap'
import Currency from '../../components/ui/Currency'

export default function AccountsTable( {
  showNetWorth,
  accounts,
  // sortBy,
} ) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Bank</th>
          <th>Type</th>
          <th className="text-right">Balance</th>
        </tr>
      </thead>
      <tbody>
        { accounts.map( ( account ) => (
          <tr key={ account.name }>
            <td className="name">{ account.nickname }</td>
            <td className="bank">{ account.bank }</td>
            <td className="type"><Badge variant="light">{ account.type }</Badge></td>
            <td className="balance" style={ { maxWidth: '5em' } }>
              <Currency amount={ account.balance } />
            </td>
          </tr>
        ) ) }
      </tbody>
      { showNetWorth && (
      <tfoot>
        <tr>
          <th aria-label="no content" />
          <th aria-label="no content" />
          <th aria-label="no content" />
          <th>
            <Currency
              amount={ accounts.reduce( ( total, account ) => total + account.balance, 0 ) }
            />
          </th>
        </tr>
      </tfoot>
      ) }
    </Table>
  )
}
