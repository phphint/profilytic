import Head from "next/head";
import GeneralLayout from "../components/GeneralLayout/GeneralLayout";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Proflytic</title>
        <meta
          name="description"
          content="Read our Privacy Policy to understand how we handle your data."
        />
        {/* Add any additional relevant meta tags for the privacy page */}
      </Head>
      <GeneralLayout>
        {/* Content of the Privacy Policy Page */}
        <div className="container mx-auto p-4">
          <h1 className="text-6xl font-bold mb-4 text-proflytic-primary">Privacy Policy</h1>
          <h3 className="text-xl font-bold mb-4 proflytic-secondary">  Our privacy policy is designed to transparently explain how we collect, use, and protect your personal information.</h3>
          <p className="text-gray-700 text-base mb-4 proflytic-secondary">
            Proflytic.com is an AI-driven platform focusing on enhancing the
            recruitment process. We specialize in resume and job description
            parsing, candidate shortlisting, and scoring with the aid of
            advanced artificial intelligence technologies.
          </p>

          <h2 className="text-lg font-bold mb-2 proflytic-secondary">Data Usage</h2>
          <p className="text-gray-700 text-base mb-4 proflytic-secondary">
            We are committed to protecting your privacy. The data we collect is
            solely used to improve our services. At no point do we share your
            personal data with third parties for any purpose. Our AI algorithms
            are designed to utilize your data to enhance your experience on our
            platform, ensuring more efficient and effective recruitment
            processes.
          </p>

          <h2 className="text-lg font-bold mb-2 proflytic-secondary">Cookies</h2>
          <p className="text-gray-700 text-base mb-4 proflytic-secondary">
            Proflytic.com operates without the use of cookies. We respect your
            privacy and autonomy, ensuring that your experience on our platform
            is both secure and private. You can use our services without
            concerns regarding unwanted data tracking or storage.
          </p>

          <h2 className="text-lg font-bold mb-2 proflytic-secondary">Data Improvement</h2>
          <p className="text-gray-700 text-base mb-4 proflytic-secondary">
            Our AI systems are continuously learning to better serve your needs.
            However, this improvement process is conducted with the utmost
            respect for your privacy. We use anonymized and aggregated data to
            refine our algorithms, ensuring that your personal information is
            never compromised.
          </p>

          <h2 className="text-lg font-bold mb-2 text-proflytic-secondary">Your Privacy</h2>
          <p className="text-gray-700 text-base mb-4 text-proflytic-secondary">
            Protecting your privacy is our top priority. We are dedicated to
            maintaining the confidentiality and security of your information.
            Should you have any questions regarding our privacy practices,
            please feel free to contact us.
          </p>
          {/* Additional content sections as needed */}
        </div>
      </GeneralLayout>
    </>
  );
}
