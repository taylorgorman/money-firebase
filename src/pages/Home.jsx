
export default function Home() {
  const data = [
    {
      'Name': <><a href="https://mint.intuit.com">Mint</a><br/>F these guys..</>,
      'Budgets': 'Yes?',
      'Recurring costs': '',
      'Bills': '',
      'Cost/mo.': 'Free?',
    },
    {
      'Name': <a href="https://www.youneedabudget.com">YNAB</a>,
      'Budgets': '',
      'Recurring costs': '',
      'Bills': '',
      'Cost/mo.': '$11.99',
    },
    {
      'Name': <a href="https://www.ramseysolutions.com/ramseyplus/everydollar">Every Dollar</a>,
      'Budgets': '',
      'Recurring costs': '',
      'Bills': '',
      'Cost/mo.': 'Free?',
    },
    {
      'Name': <a href="https://www.pocketsmith.com">Pocketsmith</a>,
      'Budgets': '',
      'Recurring costs': '',
      'Bills': '',
      'Cost/mo.': 'Free, $9.95, $19.95',
    },
    {
      'Name': <a href="https://www.monarchmoney.com">Monarch</a>,
      'Budgets': 'Yes?',
      'Recurring costs': '',
      'Bills': '',
      'Cost/mo.': '$9.99',
    },
    {
      'Name': <a href="https://www.truebill.com">Truebill</a>,
      'Budgets': 'Yes?',
      'Recurring costs': '',
      'Bills': '',
      'Cost/mo.': 'Free?',
    },
  ]
  return (<>
    <h1>Competitors</h1>
    <table>
      <tr>
        {Object.keys(data[0]).map(title => <th>{title}</th>)}
      </tr>
      {data.map(platform => (
          <tr>
          {Object.values(platform).map(content => <td>{content}</td>)}
          </tr>
        ))}
    </table>
  </>)
}
