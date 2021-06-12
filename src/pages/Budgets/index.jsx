import Layout from '../../components/Layout'
import PageHeading from '../../components/ui/PageHeading'
import Section from '../../components/ui/Section'

export default function Budgets() {
  return (
    <Layout>
      <Section>
        <PageHeading hasSettings>Budgets</PageHeading>
        <ul>
          <li>Budgets per category by fixed amount or percentage of income</li>
          <li>Create extra temp budgets for potential scenarios</li>
        </ul>
      </Section>
    </Layout>
  )
}
