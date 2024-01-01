import Head from "next/head";
import GeneralLayout from "../components/GeneralLayout/GeneralLayoutTerms";

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
        {/* Content of the Terms and Conditions Page */}
        <div className="container mx-auto p-4">
  <h1 className="text-6xl font-bold mb-4 text-proflytic-primary">Terms and Conditions</h1>
  <h3 className="text-xl font-bold mb-4 proflytic-secondary">Understanding Your Rights and Responsibilities</h3>
  <p className="text-gray-700 text-base mb-4 proflytic-secondary">
    Welcome to Proflytic.com. By using our platform, you agree to these terms and conditions. Please read them carefully.
  </p>

  <h2 className="text-lg font-bold mb-2 proflytic-secondary">Acceptance of Terms</h2>
  <p className="text-gray-700 text-base mb-4 proflytic-secondary">
    By accessing and using Proflytic.com, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
  </p>

  <h2 className="text-lg font-bold mb-2 proflytic-secondary">Use of Our Service</h2>
  <p className="text-gray-700 text-base mb-4 proflytic-secondary">
    Proflytic.com provides a platform for resume and job description parsing, candidate shortlisting, and scoring. Users are not permitted to misuse our services, and any unauthorized use or distribution of our content and intellectual property is strictly prohibited.
  </p>

  <h2 className="text-lg font-bold mb-2 proflytic-secondary">Limitation of Liability</h2>
  <p className="text-gray-700 text-base mb-4 proflytic-secondary">
    Proflytic.com and its affiliates will not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the service; (ii) any conduct or content of any third party on the service; (iii) any content obtained from the service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
  </p>

  <h2 className="text-lg font-bold mb-2 proflytic-secondary">Disclaimer</h2>
  <p className="text-gray-700 text-base mb-4 proflytic-secondary">
    Your use of the service is at your sole risk. The service is provided on an "AS IS" and "AS AVAILABLE" basis. Proflytic.com expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to the implied warranties of merchantability, fitness for a particular purpose and non-infringement.
  </p>

  <h2 className="text-lg font-bold mb-2 proflytic-secondary">Amendments to Terms</h2>
  <p className="text-gray-700 text-base mb-4 proflytic-secondary">
    Proflytic.com reserves the right, at its sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
  </p>

  <h2 className="text-lg font-bold mb-2 proflytic-secondary">Contact Information</h2>
  <p className="text-gray-700 text-base mb-4 proflytic-secondary">
    If you have any questions about these Terms, please contact us.
  </p>
  {/* Additional content sections as needed */}
</div>

      </GeneralLayout>
    </>
  );
}
