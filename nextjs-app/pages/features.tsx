import Head from "next/head";

import GeneralLayout from "../components/GeneralLayout/GeneralLayoutFeatures";
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
      <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-6 text-title-color text-center mt-10">
        Proflytic Features Overview
      </h1>
      <div className="flex">
        {/* Left Column */}
        <div className="w-1/2 flex flex-wrap">
          {/* Feature 1 */}
          <div className="w-1/2 p-2 pr-14">
            <h3 className="text-lg font-bold text-title-color">AI-Powered Matching</h3>
            <h4 className="text-md font-semibold text-subtitle-color">
              Precision in Candidate Selection
            </h4>
            <p className="text-description-color">
              Leveraging advanced algorithms to ensure the most accurate match between job requirements and candidate profiles.
            </p>
            <div className="border-b border-5c8c80 my-2"></div>
          </div>
          {/* Feature 2 */}
          <div className="w-1/2 p-2 pr-14">
            <h3 className="text-lg font-bold text-title-color">Automated Screening</h3>
            <h4 className="text-md font-semibold text-subtitle-color">
              Efficient Candidate Filtering
            </h4>
            <p className="text-description-color">
              Streamlining the initial stages of hiring by automating the candidate screening process, saving time and resources.
            </p>
            <div className="border-b border-5c8c80 my-2"></div>
          </div>
  {/* Feature 3 */}
<div className="w-1/2 p-2 pr-14">
  <h3 className="text-lg font-bold text-title-color">Real-time Analytics & Reporting</h3>
  <h4 className="text-md font-semibold text-subtitle-color">
    Actionable Recruitment Insights
  </h4>
  <p className="text-description-color">
    Access comprehensive analytics and reports in real-time, enabling data-driven decision-making in your recruitment process.
  </p>
  <div className="border-b border-5c8c80 my-2"></div>
</div>

{/* Feature 4 */}
<div className="w-1/2 p-2 pr-14">
  <h3 className="text-lg font-bold text-title-color">Scalable Infrastructure</h3>
  <h4 className="text-md font-semibold text-subtitle-color">
    Grow with Confidence
  </h4>
  <p className="text-description-color">
    Our robust and scalable platform effortlessly adapts to your evolving business needs, ensuring consistent performance.
  </p>
  <div className="border-b border-5c8c80 my-2"></div>
</div>

{/* Feature 5 */}
<div className="w-1/2 p-2 pr-14">
  <h3 className="text-lg font-bold text-title-color">Intuitive UI/UX</h3>
  <h4 className="text-md font-semibold text-subtitle-color">
    Seamless User Experience
  </h4>
  <p className="text-description-color">
    Designed with user experience in mind, our platform offers an intuitive interface that simplifies recruitment tasks.
  </p>
  <div className="border-b border-5c8c80 my-2"></div>
</div>

{/* Feature 6 */}
<div className="w-1/2 p-2 pr-14">
  <h3 className="text-lg font-bold text-title-color">Secure Data Handling</h3>
  <h4 className="text-md font-semibold text-subtitle-color">
    Uncompromised Data Protection
  </h4>
  <p className="text-description-color">
    Prioritizing data security, we employ stringent measures to safeguard sensitive information throughout the hiring process.
  </p>
  <div className="border-b border-5c8c80 my-2"></div>
</div>

        </div>

        {/* Right Column */}
        <div className="w-1/2 p-4">
          <h3 className=" font-bold text-title-color">Data-Driven Insights</h3>
          <p className="text-description-color font-thin ">
            Gain valuable insights with real-time analytics, helping you make informed decisions throughout the recruitment process.
          </p>
          <h3 className=" font-bold text-title-color mt-10">Customizable Workflows</h3>
          <p className="text-description-color font-thin mb-10">
            Tailor the recruitment experience to your company's specific needs with flexible and adaptable tools.
          </p>
          <Image src={img} alt="Innovative recruitment solutions" />
          <h3 className=" font-bold text-title-color mt-10">User-Friendly Interface</h3>
          <p className="text-description-color font-thin">
            Navigate the recruitment journey with ease, thanks to our intuitive and user-friendly platform.
          </p>
          <h3 className=" font-bold text-title-color mt-10">Secure Data Handling</h3>
          <p className="text-description-color font-thin">
            Rest assured with our commitment to data security, ensuring the utmost protection of sensitive information.
          </p>
        </div>
      </div>
    </div>
      </GeneralLayout>
    </>
  );
}
