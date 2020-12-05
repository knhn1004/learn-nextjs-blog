import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Dolor in non voluptatibus voluptatibus eaque officiis. Numquam
          corrupti error deserunt labore sed Nam obcaecati id laudantium
          doloribus dolores Quibusdam quae illum cumque nobis iure. Magnam
          beatae eaque perferendis assumenda.
        </p>
        <p>
          (This is a sample website)
        </p>
      </section>
    </Layout>
  );
}
