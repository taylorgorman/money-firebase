import Competitors from '../../components/content/Competitors'
import Layout from '../../components/Layout'
import PageHeading from '../../components/ui/PageHeading'
import Section from '../../components/ui/Section'
import HeadingSubheading from '../../components/ui/HeadingSubheading'

export default function Home() {
  return (
    <Layout>
      <Section>
        <PageHeading subheading="Organize your money like fancy swine.">
          Sir Pigglesworth
        </PageHeading>
        <HeadingSubheading
          heading="Competitors"
          subheading="These people are cool. We're cooler."
        />
        <Competitors />
      </Section>
    </Layout>
  )
}
