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
    content="View Proflytic's clear, per-resume pricing for AI-driven screening. See how our cost-effective approach, with no hidden fees, makes AI resume evaluation accessible for businesses and recruiters of all sizes."
  />
</Head>
      <GeneralLayout>
        <PricePlanSection />

        <PricingBenefitsSection />
       </GeneralLayout>
    </>
  );
}
