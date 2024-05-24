import Head from "next/head";
import GeneralLayout from "../components/GeneralLayout/GeneralLayoutTerms";
import TermsContent from "../components/TermsContent/TermsContent"; // Import the TermsContent component

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms and Conditions - Proflytic</title>
        <meta
          name="description"
          content="Read our Terms and Conditions to understand the terms of using our services."
        />
        {/* Add any additional relevant meta tags for the terms page */}
      </Head>
      <GeneralLayout>
        <TermsContent /> {/* Use the TermsContent component */}
      </GeneralLayout>
    </>
  );
}
