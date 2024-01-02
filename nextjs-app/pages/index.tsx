import Head from 'next/head';
import LandingPageLayout from '../components/LandingPageLayout/LandingPageLayout';
import ThreeColumnSection from '../components/ThreeColumnSection';
import FourColumnSection from '../components/FourColumnSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Profilytic - Revolutionizing Recruitment with AI-Driven Solutions</title>
        <meta name="description" content="Profilytic offers advanced AI-driven recruitment solutions to empower talent acquisition and streamline the hiring process. Explore efficient analytics, data security, and customizable recruitment tools." />
        <meta name="keywords" content="AI recruitment, talent acquisition, recruitment analytics, data security in recruitment, customizable recruitment tools, efficient hiring solutions" />
        {/* Other meta tags */}
      </Head>
      <LandingPageLayout>
      <ThreeColumnSection></ThreeColumnSection>
      <FourColumnSection></FourColumnSection>
      </LandingPageLayout>
    </>
  );
}
