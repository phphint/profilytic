import Head from "next/head";
import GeneralLayout from "../components/GeneralLayout/GeneralLayoutPricing";
import PricingBenefitsSection from "../components/PricingBenefitsSection";
import PricePlanSection from "../components/PricePlanSection";
 

import Image from "next/image";

// Import the image
import img from "../components/GeneralLayout/features-graph.png";

export default function Features() {
  return (
    <>
      <Head>
      <title>Pricing - Proflytic</title>
<meta
  name="description"
  content="Explore Proflytic's flexible pricing options. Discover how our innovative token-based system can streamline your recruitment process and fit your budget."
/>
        {/* Add any additional relevant meta tags for the about page */}
      </Head>
      <GeneralLayout>
        <PricePlanSection />

        <PricingBenefitsSection />
       </GeneralLayout>
    </>
  );
}
