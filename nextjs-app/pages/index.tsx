import Head from 'next/head';
import LandingPageLayout from '../components/LandingPageLayout/LandingPageLayout';
import ThreeColumnSection from '../components/ThreeColumnSection';
import FourColumnSection from '../components/FourColumnSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page - Your Site Name</title>
        <meta name="description" content="Welcome to the Home Page of our website." />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        {/* Other meta tags */}
      </Head>
      <LandingPageLayout>
      <ThreeColumnSection></ThreeColumnSection>
      <FourColumnSection></FourColumnSection>
      </LandingPageLayout>
    </>
  );
}
