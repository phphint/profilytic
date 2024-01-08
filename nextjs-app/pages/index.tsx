import Head from 'next/head';
import LandingPageLayout from '../components/LandingPageLayout/LandingPageLayout';
import ThreeColumnSection from '../components/ThreeColumnSection';
import FourColumnSection from '../components/FourColumnSection';

export default function Home() {
  return (
    <>
<Head>
  <title>Profilytic - Revolutionizing Recruitment with AI-Driven Solutions</title>
  <meta name="description" content="Profilytic reshapes recruitment with cutting-edge AI technology. Specializing in AI resume/CV screening, our platform accelerates candidate evaluation, offering in-depth insights for recruiters and businesses." />
  <meta name="keywords" content="AI recruitment, AI resume screening, AI CV analysis, recruitment technology, AI in hiring, efficient candidate evaluation" />
  {/* Other meta tags */}
</Head>

      <LandingPageLayout>
      <ThreeColumnSection></ThreeColumnSection>
      <FourColumnSection></FourColumnSection>
      </LandingPageLayout>
    </>
  );
}
