import { Table } from 'react-bootstrap'

const CompetitorName = ({ name, url, description }) => (
  <>
    <h2 className="h5"><a href={url}>{name}</a></h2>
    {description && (
      <p className="m-0"><i>{description}</i></p>
    )}
  </>
)
export default function Home() {
  const data = [
    {
      'Name': <CompetitorName name="Mint" url="https://mint.intuit.com" description="F these guys.." />,
      'Budgets': 'Yes?',
      'Recurring costs': '',
      'Bills': '',
      'Cost/mo.': 'Free?',
    },
    {
      'Name': <CompetitorName name="YNAB" url="https://www.youneedabudget.com" />,
      'Budgets': '',
      'Recurring costs': '',
      'Bills': '',
      'Cost/mo.': '$11.99',
    },
    {
      'Name': <CompetitorName name="Every Dollar" url="https://www.ramseysolutions.com/ramseyplus/everydollar" />,
      'Budgets': '',
      'Recurring costs': '',
      'Bills': '',
      'Cost/mo.': 'Free?',
    },
    {
      'Name': <CompetitorName name="Pocketsmith" url="https://www.pocketsmith.com" />,
      'Budgets': '',
      'Recurring costs': '',
      'Bills': '',
      'Cost/mo.': 'Free, $9.95, $19.95',
    },
    {
      'Name': <CompetitorName name="Monarch" url="https://www.monarchmoney.com" />,
      'Budgets': 'Yes?',
      'Recurring costs': '',
      'Bills': '',
      'Cost/mo.': '$9.99',
    },
    {
      'Name': <CompetitorName name="Truebill" url="https://www.truebill.com" />,
      'Budgets': 'Yes?',
      'Recurring costs': '',
      'Bills': '',
      'Cost/mo.': 'Free?',
    },
  ]
  return (
    <section>
    <h1>Competitors</h1>
    <Table responsive>
      <thead>
      <tr>
        {Object.keys(data[0]).map((title, key) => <th key={key}>{title}</th>)}
        </tr>
      </thead>
      <tbody>
      {data.map((platform, key) => (
          <tr key={key}>
          {Object.values(platform).map((content, key) => <td key={key}>{content}</td>)}
          </tr>
      ))}
      </tbody>
    </Table>
  </section>
  )
}
