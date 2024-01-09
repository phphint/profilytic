import Head from "next/head";
import GeneralLayout from "../components/GeneralLayout/GeneralLayoutFeatures";
import Image from "next/image";
import img from "../components/GeneralLayout/features-graph.png";

export default function Features() {
  return (
    <>
      <Head>
        <title>AI Resume Screening Features - Proflytic</title>
        <meta
          name="description"
          content="Explore Proflytic's AI Resume/CV Screening features - the advanced solution for efficient and accurate candidate evaluation. Discover how our AI-driven technology accelerates the recruitment process, offering detailed insights into candidate suitability for specific job roles."
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
                <h3 className="text-lg font-bold text-title-color">
                  AI Resume Screening
                </h3>
                <h4 className="text-md font-semibold text-subtitle-color">
                  Advanced Candidate Matching
                </h4>
                <p className="text-description-color">
                  Proflytic's AI technology excels in resume and CV analysis,
                  ensuring precision in matching candidates with job
                  requirements.
                </p>
                <div className="border-b border-5c8c80 my-2"></div>
              </div>

              {/* Feature 2 - Automated Screening */}
              <div className="w-full md:w-1/2 p-2">
                <h3 className="text-lg font-bold text-title-color">
                  Automated CV Analysis
                </h3>
                <h4 className="text-md font-semibold text-subtitle-color">
                  Efficient Talent Identification
                </h4>
                <p className="text-description-color">
                  Streamline the hiring process with our AI-driven candidate
                  screening, quickly identifying top talent.
                </p>
                <div className="border-b border-5c8c80 my-2"></div>
              </div>

              {/* Feature 3 - Comprehensive Candidate Analysis */}
              <div className="w-full md:w-1/2 p-2">
                <h3 className="text-lg font-bold text-title-color">
                  Intelligent Resume Parsing
                </h3>
                <h4 className="text-md font-semibold text-subtitle-color">
                  In-depth Candidate Insights
                </h4>
                <p className="text-description-color">
                  Gain comprehensive insights with our AI's in-depth analysis of
                  resumes, driving informed recruitment decisions.
                </p>
                <div className="border-b border-5c8c80 my-2"></div>
              </div>

              {/* Feature 4 */}
              <div className="w-full md:w-1/2 p-2">
                <h3 className="text-lg font-bold text-title-color">
                  Scalable Infrastructure
                </h3>
                <h4 className="text-md font-semibold text-subtitle-color">
                  Grow with Confidence
                </h4>
                <p className="text-description-color">
                  Our robust and scalable platform effortlessly adapts to your
                  evolving business needs, ensuring consistent performance.
                </p>
                <div className="border-b border-5c8c80 my-2"></div>
              </div>
              {/* Feature 5 */}
              <div className="w-full md:w-1/2 p-2">
                <h3 className="text-lg font-bold text-title-color">
                  Intuitive UI/UX
                </h3>
                <h4 className="text-md font-semibold text-subtitle-color">
                  Seamless User Experience
                </h4>
                <p className="text-description-color">
                  Designed with user experience in mind, our platform offers an
                  intuitive interface that simplifies recruitment tasks.
                </p>
                <div className="border-b border-5c8c80 my-2"></div>
              </div>
              {/* Feature 6 */}
              <div className="w-full md:w-1/2 p-2">
                <h3 className="text-lg font-bold text-title-color">
                  Secure Data Handling
                </h3>
                <h4 className="text-md font-semibold text-subtitle-color">
                  Uncompromised Data Protection
                </h4>
                <p className="text-description-color">
                  Prioritizing data security, we employ stringent measures to
                  safeguard sensitive information throughout the hiring process.
                </p>
                <div className="border-b border-5c8c80 my-2"></div>
              </div>
            </div>

            {/* Right Column */}
            <div className="md:w-1/2 p-4">
            <p className="text-description-color mb-4">
    Discover the power of Proflytic's AI-driven technology in transforming the recruitment landscape. Our platform offers cutting-edge solutions for resume and CV analysis, enabling efficient and accurate candidate evaluation.
  </p>

  <Image
    src={img}
    alt="Innovative recruitment solutions"
    layout="responsive"
  />

  {/* Paragraph below the image */}
  <p className="text-description-color mt-4">
    With Proflytic, experience the ease of automating the recruitment process. Our intuitive platform streamlines candidate screening, ensuring you find the right talent quickly and effectively.
  </p>
            </div>
          </div>
        </div>
      </GeneralLayout>
    </>
  );
}
