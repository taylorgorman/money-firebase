import { Badge, Table } from 'react-bootstrap'
import data from './data.json'
import Currency from '../../components/ui/Currency'

export default function AccountsTable( { showNetWorth } ) {
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
        { data.map( ( account, key ) => (
          <tr key={ key }>
            <td className="name">{ account.name }</td>
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
          <th />
          <th />
          <th />
          <th>
            <Currency amount={ data.reduce( ( total, account ) => total + account.balance, 0 ) } />
          </th>
        </tr>
      </tfoot>
      ) }
    </Table>
  )
}
