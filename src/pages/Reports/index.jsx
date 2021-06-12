import Layout from '../../components/Layout'
import PageHeading from '../../components/PageHeading'
import Section from '../../components/ui/Section'

export default function Reports() {
  return (
    <Layout>
      <Section>
        <PageHeading hasSettings>Reports</PageHeading>
        <ul>
          <li>Net worth over time</li>
          <li>Income and expense over time</li>
        </ul>
      </Section>
    </Layout>
  )
}
