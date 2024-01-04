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
        <title>Features - Proflytic</title>
        <meta
          name="description"
          content="Learn more about Proflytic, our mission, and how we are transforming the recruitment process."
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
