import Head from "next/head";
import GeneralLayout from "../components/GeneralLayout/GeneralLayoutFeatures";
import Image from "next/image";
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
      </Head>
      <GeneralLayout>
  <div className="container mx-auto p-4">
    <h1 className="text-xl font-bold mb-6 text-title-color text-center mt-10">
      Proflytic Features Overview
    </h1>
    <div className="flex flex-col md:flex-row">
      {/* Left Column */}
      <div className="md:w-1/2 flex flex-wrap">
 {/* Feature 1 */}
<div className="w-full md:w-1/2 p-2">
  <h3 className="text-lg font-bold text-title-color">AI-Powered Matching</h3>
  <h4 className="text-md font-semibold text-subtitle-color">Hyper-Intelligent Candidate Analysis</h4>
  <p className="text-description-color">
    Our AI-driven system delves deeply into candidate qualifications, making hyper-intelligent assessments to align perfectly with job requirements. Experience the future of precision in candidate selection.
  </p>
  <div className="border-b border-5c8c80 my-2"></div>
</div>

{/* Feature 2 */}
<div className="w-full md:w-1/2 p-2">
  <h3 className="text-lg font-bold text-title-color">Automated Screening</h3>
  <h4 className="text-md font-semibold text-subtitle-color">Efficient Candidate Filtering</h4>
  <p className="text-description-color">
    Enhance hiring efficiency with our AI-driven screening, swiftly identifying the most suitable candidates and optimizing your recruitment process.
  </p>
  <div className="border-b border-5c8c80 my-2"></div>
</div>


   {/* Feature 3 */}
<div className="w-full md:w-1/2 p-2">
  <h3 className="text-lg font-bold text-title-color">Comprehensive Candidate Analysis</h3>
  <h4 className="text-md font-semibold text-subtitle-color">In-Depth Recruitment Insights</h4>
  <p className="text-description-color">
    Gain detailed insights from batch-processed analytics, providing thorough candidate evaluations to inform strategic hiring decisions.
  </p>
  <div className="border-b border-5c8c80 my-2"></div>
</div>

        {/* Feature 4 */}
        <div className="w-full md:w-1/2 p-2">
          <h3 className="text-lg font-bold text-title-color">Scalable Infrastructure</h3>
          <h4 className="text-md font-semibold text-subtitle-color">Grow with Confidence</h4>
          <p className="text-description-color">
            Our robust and scalable platform effortlessly adapts to your evolving business needs, ensuring consistent performance.
          </p>
          <div className="border-b border-5c8c80 my-2"></div>
        </div>
        {/* Feature 5 */}
        <div className="w-full md:w-1/2 p-2">
          <h3 className="text-lg font-bold text-title-color">Intuitive UI/UX</h3>
          <h4 className="text-md font-semibold text-subtitle-color">Seamless User Experience</h4>
          <p className="text-description-color">
            Designed with user experience in mind, our platform offers an intuitive interface that simplifies recruitment tasks.
          </p>
          <div className="border-b border-5c8c80 my-2"></div>
        </div>
        {/* Feature 6 */}
        <div className="w-full md:w-1/2 p-2">
          <h3 className="text-lg font-bold text-title-color">Secure Data Handling</h3>
          <h4 className="text-md font-semibold text-subtitle-color">Uncompromised Data Protection</h4>
          <p className="text-description-color">
            Prioritizing data security, we employ stringent measures to safeguard sensitive information throughout the hiring process.
          </p>
          <div className="border-b border-5c8c80 my-2"></div>
        </div>
      </div>

      {/* Right Column */}
      <div className="md:w-1/2 p-4">
        <Image src={img} alt="Innovative recruitment solutions" layout="responsive" />
      </div>
    </div>
  </div>
</GeneralLayout>

    </>
  );
}
