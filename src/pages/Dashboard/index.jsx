import Layout from '../../components/Layout'
import Section from '../../components/Section'

export default function Dashboard() {
  return (
    <Layout>
      <Section>
        <h1>Dashboard</h1>
        <ul>
          <li>Accounts balances and total</li>
          <li>Most recent transactions</li>
          <li>This month's budget amounts and percentages, bar chart</li>
          <li>This month's pending, donut chart</li>
        </ul>
      </Section>
    </Layout>
  )
}
