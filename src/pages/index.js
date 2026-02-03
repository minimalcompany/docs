import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Welcome"
      description={siteConfig.tagline}>
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 'calc(100vh - 60px)',
          textAlign: 'center',
          padding: '2rem',
        }}>
        <Heading as="h1" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          {siteConfig.title}
        </Heading>
        <p style={{ fontSize: '1.25rem', color: 'var(--ifm-color-emphasis-700)', marginBottom: '2rem' }}>
          {siteConfig.tagline}
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Documentation
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            Blog
          </Link>
        </div>
      </main>
    </Layout>
  );
}
