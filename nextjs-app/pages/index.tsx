import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page - Your Site Name</title>
        <meta name="description" content="Welcome to the Home Page of our website." />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        {/* Other meta tags */}
      </Head>
      <Layout>
        <h1>Welcome to the Home Page</h1>
        {/* Other page content */}
      </Layout>
    </>
  );
}
