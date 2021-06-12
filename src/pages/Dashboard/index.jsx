import Layout from '../../components/Layout'
import Section from '../../components/ui/Section'
import PageHeading from '../../components/PageHeading'

export default function Dashboard() {
  return (
    <Layout>
      <Section>
        <PageHeading hasSettings>Dashboard</PageHeading>
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
