import { OverlayTrigger, Popover, Table } from 'react-bootstrap'

import './styles.scss'
import Section from '../../components/Section'
import { dashed } from '../../utilities/formatString'
import { QuestionCircleFill } from 'react-bootstrap-icons'

export default function Competitors() {

  const headings = [
    {
      name: <p className="m-0" style={{ lineHeight: '1.7' }}>
        ✅ <i>— Fully supported</i><br />
        🚫 <i>— Not supported</i><br />
        👋 <i>— Partially supported</i><br />
      </p>
    },
    {
      isSectionHeading: true,
      dataKey: 'pricing',
      name: 'Price/mo.',
      description: 'If pricing is only annual, this is amortized',
    },
    {
      isSectionHeading: true,
      dataKey: 'budgets',
      name: 'Budgets',
      description: 'Set monthly spending per category',
    },
    {
      isSectionHeading: false,
      dataKey: 'budgetsCustomCats',
      name: 'Custom categories',
      description: 'Rename, delete, and create categories',
    },
    {
      isSectionHeading: false,
      dataKey: 'budgetsAlt',
      name: 'Alternate scenarios',
      description: 'Create temporary alternate budgets to plan for potential changes like big savings or a mortgage change',
    },
    {
      isSectionHeading: false,
      dataKey: 'budgetMethodologies',
      name: 'Popular methodologies',
      description: 'Set your profile to follow a popular personal finance methodology like Financial Peace, Barefoot Investor, and more',
    },
    {
      isSectionHeading: true,
      dataKey: 'accounts',
      name: 'Accounts',
      description: '',
    },
    {
      isSectionHeading: false,
      dataKey: 'cashAccount',
      name: 'Cash',
      description: 'A separate account for cash transactions, entered manually',
    },
    {
      isSectionHeading: false,
      dataKey: 'fetchTransactions',
      name: 'Fetch transactions',
      description: 'Connect to your bank and automatically create transactions',
    },
    {
      isSectionHeading: false,
      dataKey: 'currencies',
      name: 'Multiple currencies',
      description: 'Add accounts with different currencies and see amounts in your profile\'s default currency',
    },
    {
      isSectionHeading: false,
      dataKey: 'allocations',
      name: 'Allocations',
      description: 'Set aside and spend money from one or more amounts of money in accounts; almost like sub-accounts',
    },
    {
      isSectionHeading: false,
      dataKey: 'safeToSpend',
      name: 'Safe to spend',
      description: 'Show account balances and net worth minus selected budgets and allocations (like Simple, RIP)',
    },
    {
      isSectionHeading: false,
      dataKey: 'future',
      name: 'Future Balances',
      description: 'Uses budgets and spending trends to predict account balances in the future',
    },
    {
      isSectionHeading: true,
      dataKey: 'transactions',
      name: 'Transactions',
    },
    {
      isSectionHeading: false,
      dataKey: 'recurring',
      name: 'Manual entry',
      description: 'Add transactions manually',
    },
    {
      isSectionHeading: false,
      dataKey: 'recurring',
      name: 'Recurring transactions',
      description: 'Define repeat transactions which automatically create or set data on transactions each period',
    },
    {
      isSectionHeading: false,
      dataKey: 'recurringDetection',
      name: 'Recurring detection',
      description: 'Detects repeat transactions and asks if you want to create a recurring transaction from it',
    },
    {
      isSectionHeading: false,
      dataKey: 'dataRules',
      name: 'Data rules',
      description: 'Automatically set category, merchant, and all other transaction data from customizable filtering rules',
    },
    {
      isSectionHeading: true,
      dataKey: 'reports',
      name: 'Reports',
      description: 'Charts and spreadsheets to visualize your finances over time',
    },
    {
      isSectionHeading: false,
      dataKey: 'standardReports',
      name: 'Standard reports',
      description: 'Comes with standard finance reports i.e. ?',
    },
    {
      isSectionHeading: false,
      dataKey: 'customReports',
      name: 'Custom reports',
      description: 'Create reports that work like your brain does',
    },
    {
      isSectionHeading: true,
      dataKey: 'management',
      name: 'Management',
    },
    {
      isSectionHeading: false,
      dataKey: 'multipleLogins',
      name: 'Multiple Logins',
      description: 'Add other users to your account to manage finances together',
    },
  ]

  const platforms = [
    {
      name: 'Sir Pigglesworth',
      pricing: 'Free, lol',
      budgets: '✅',
      budgetsCustomCats: '✅',
      budgetsAlt: '✅',
      budgetMethodologies: '✅',
      cashAccount: '✅',
      fetchTransactions: '🚫',
      currencies: '✅',
      allocations: '✅',
      safeToSpend: '✅',
      recurring: '✅',
      recurringDetection: '✅',
      dataRules: '✅',
      standardReports: '✅',
      customReports: '✅',
      future: '✅',
      multipleLogins: '✅',
    },
    {
      name: 'Mint',
      url: 'https://mint.intuit.com',
      description: 'F these guys..',
      budgets: '✅',
      budgetsCustomCats: '✅',
      budgetsAlt: '🚫',
      fetchTransactions: '✅',
      allocations: '🚫',
      safeToSpend: '🚫',
      recurring: '🚫',
      recurringDetection: '🚫',
      pricing: 'Free?',
      future: '🚫',
    },
    {
      name: 'YNAB',
      url: 'https://www.youneedabudget.com',
      description: 'Native app only',
      budgets: '✅',
      budgetsCustomCats: '✅',
      budgetsAlt: '🚫',
      allocations: '🚫',
      safeToSpend: '🚫',
      recurring: '🚫',
      recurringDetection: '🚫',
      pricing: '$11.99',
      future: '🚫',
    },
    {
      name: 'Every Dollar',
      url: 'https://www.ramseysolutions.com/ramseyplus/everydollar',
      description: 'Dave Ramsey',
      budgets: '✅',
      budgetsCustomCats: '✅',
      budgetsAlt: '🚫',
      budgetMethodologies: '👋',
      allocations: '🚫',
      safeToSpend: '🚫',
      recurring: '🚫',
      recurringDetection: '🚫',
      pricing: 'Free?',
      future: '🚫',
    },
    {
      name: 'Pocketsmith',
      url: 'https://www.pocketsmith.com',
      description: 'Closest to what I want',
      budgets: '✅',
      budgetsCustomCats: '✅',
      budgetsAlt: '✅',
      cashAccount: '✅',
      currencies: '✅',
      fetchTransactions: '✅',
      allocations: '🚫',
      safeToSpend: '🚫',
      recurring: '🚫',
      recurringDetection: '🚫',
      dataRules: '👋',
      standardReports: '✅',
      customReports: '✅',
      pricing: 'Free, $9.95, $19.95',
      future: '✅',
    },
    {
      name: 'Monarch',
      url: 'https://www.monarchmoney.com',
      description: 'Haven\'t tried yet',
      budgets: '✅',
      budgetsCustomCats: '',
      budgetsAlt: '🚫',
      allocations: '🚫',
      safeToSpend: '🚫',
      recurring: '🚫',
      recurringDetection: '🚫',
      pricing: '$9.99',
      future: '🚫',
      customReports: '✅',
      multipleLogins: '✅',
    },
    {
      name: 'Truebill',
      url: 'https://www.truebill.com',
      description: 'Haven\'t tried yet',
      budgets: '✅',
      budgetsCustomCats: '',
      budgetsAlt: '🚫',
      allocations: '🚫',
      safeToSpend: '🚫',
      recurring: '🚫',
      recurringDetection: '✅',
      customReports: '🚫',
      pricing: 'Free?',
      future: '🚫',
    },
  ]

  return (
    <Section>
      <h2>Competitors</h2>
      <Table responsive className="competitors">
        <thead>
        <tr>
          <th>{ headings[0].name }</th>
          { platforms.map(( platform, key ) => (
            <th key={ key } className={ dashed( platform.name ) }>
              <CompetitorName name={ platform.name } url={ platform.url } description={ platform.description } />
            </th>
          )) }
        </tr>
        </thead>
        <tbody>
        { headings.map(( heading, key ) => (
          heading.dataKey && (
            <tr key={ key } className={ heading.isSectionHeading ? 'is-section-heading' : '' }>
              <Th
                text={ heading.name }
                description={ heading.description }
              />
              { platforms.map(( platform, key ) => (
                <td
                  key={ key }
                  className={ dashed( platform.name ) }
                >
                  { platform[ heading.dataKey ] }
                </td>
              )) }
            </tr>
          )
        )) }
        </tbody>
      </Table>
    </Section>
  )
}

const CompetitorName = ({ name, url, description }) => {
  
  const nameLinkedOrNot = url
    ? <a href={ url } target="_blank" rel="noreferrer">{ name }</a>
    : name

  return (
    <>
      <h3 className="h6">{ nameLinkedOrNot }</h3>
      { description && (
        <span className="line2">{ description }</span>
      ) }
    </>
  )

}

const Th = ({ text, description, className }) => (
  <th className={ className }>
    { text }
    { description && (
      <OverlayTrigger
        rootClose={ true }
        placement="right"
        overlay={
          <Popover id={ dashed( text ) }>
            <Popover.Content>
              { description }
            </Popover.Content>
          </Popover>    
        }
      >
        <QuestionCircleFill />
      </OverlayTrigger>
  ) }
  </th>
)
