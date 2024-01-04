import Head from "next/head";
import GeneralLayout from "../../components/GeneralLayout/GeneralLayoutOurTechnology";
import Image from "next/image";
import img from "../components/GeneralLayout/features-graph.png";
import Link from "next/link";

export default function OurTechnology() {
  return (
    <>
      <Head>
        <title>Our Technology - Profilytic</title>
        <meta
          name="description"
          content="Dive deep into the technical workings of Profilytic's AI-driven recruitment technology."
        />
      </Head>
      <GeneralLayout>
        <div className="container mx-auto p-0 shadow-lg mb-10">
          <div className="mx-auto p-0 text-dark bg-white font-thin">
            {/* Top row with three columns */}
            <div
              className="grid md:grid-cols-3 gap-4 mb-6"
              style={{ backgroundColor: "#121627" }}
            >
              {/* Column 1 - Features */}
              <div className="text-left p-7" style={{ color: "#585d71" }}>
                <h2
                  className="text-xl font-semibold"
                  style={{ color: "#7bc4d2" }}
                >
                  Features
                </h2>
                <p className="font-bold">
                  Explore the advanced features of Profilytic that redefine
                  AI-driven recruitment.
                </p>
                <div className="flex justify-center">
                  <Link href="/features">
                    <button className="bg-[#20beca] text-white py-2 px-4 rounded mt-2 font-semibold">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>

              {/* Column 2 - Pricing */}
              <div
                className="text-left p-7 border-l border-r"
                style={{ color: "#585d71", borderColor: "#22283b" }}
              >
                <h2
                  className="text-xl font-semibold"
                  style={{ color: "#7bc4d2" }}
                >
                  Pricing
                </h2>
                <p className="font-bold">
                  Discover flexible pricing plans tailored for diverse
                  recruitment needs.
                </p>
                <div className="flex justify-center">
                  <Link href="/pricing">
                    <button className="bg-[#20beca] text-white py-2 px-4 rounded mt-2 font-semibold">
                      View Plans
                    </button>
                  </Link>
                </div>
              </div>

              {/* Column 3 - About */}
              <div className="text-left p-7" style={{ color: "#585d71" }}>
                <h2
                  className="text-xl font-semibold"
                  style={{ color: "#7bc4d2" }}
                >
                  About
                </h2>
                <p className="font-bold">
                  Learn about Profilytic's mission to transform the recruitment
                  landscape with AI.
                </p>
                <div className="flex justify-center">
                  <Link href="/about">
                    <button className="bg-[#20beca] text-white py-2 px-4 rounded mt-2 font-semibold">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom row with three columns */}
            <div className="grid grid-cols-4 gap-4">
         {/* Left column with customer testimonials */}
<div className="col-span-1 p-10">
  <div className="mb-6  ">
    <p className="text-base font-light mb-2" style={{ color: '#090002' }}>
      "Profilytic's AI-driven approach transformed our recruitment process. The accuracy in matching candidates to roles is outstanding. Highly recommended for any forward-thinking company!"
    </p>
    <div className="flex">
      <span style={{ color: '#099fc4' }}>★★★★★</span>
    </div>
    <p className="text-sm mt-1">- Jordan Smith, HR Manager</p>
  </div>

  <div className="mb-6  ">
    <p className="text-base font-light mb-2" style={{ color: '#090002' }}>
      "The intuitive design and powerful AI analytics of Profilytic have made our hiring process more efficient and effective. It's a game-changer for talent acquisition."
    </p>
    <div className="flex">
      <span style={{ color: '#099fc4' }}>★★★★★</span>
    </div>
    <p className="text-sm mt-1">- Alex Johnson, Recruitment Lead</p>
  </div>
</div>


              {/* Middle column with existing content */}
              <div className="col-span-1 md:col-span-2 pt-5">
              <table className="w-full text-left" style={{ backgroundColor: "#efefef" }}>
  <tbody>
    {/* First row */}
    <tr>
      {/* AI-Powered Candidate Matching */}
      <td className="p-4" style={{ borderColor: "#fcfdfd", borderWidth: "1px", borderStyle: "solid" }}>
        <h2 className="text-md font-semibold mb-2" style={{ color: "#4d9fa9" }}>
          AI-Powered Candidate Matching
        </h2>
        <p className="text-base mb-3 font-light" style={{ color: "#a7a8a7" }}>
          Profilytic leverages state-of-the-art AI technology to create a sophisticated candidate matching system. This approach analyzes vast amounts of data to identify candidates who not only have the required skills and experience but also fit the company culture and ethos. The AI algorithms are designed to learn and adapt, continuously improving the accuracy of candidate recommendations.
        </p>
      </td>

      {/* Data Analytics Dashboard */}
      <td className="p-4" style={{ borderColor: "#fcfdfd", borderWidth: "1px", borderStyle: "solid" }}>
        <h2 className="text-md font-semibold mb-2" style={{ color: "#4d9fa9" }}>
          Data Analytics Dashboard
        </h2>
        <p className="text-base mb-3 font-light" style={{ color: "#a7a8a7" }}>
          The Profilytic Data Analytics Dashboard offers real-time insights into the recruitment process. It provides a comprehensive overview of hiring metrics, candidate tracking, and recruitment trends. This powerful tool allows companies to make data-driven decisions, optimize their recruitment strategies, and track the effectiveness of their hiring processes.
        </p>
      </td>
    </tr>

    {/* Second row */}
    <tr>
      {/* Security and Compliance */}
      <td className="p-4" style={{ borderColor: "#fcfdfd", borderWidth: "1px", borderStyle: "solid" }}>
        <h2 className="text-md font-semibold mb-2" style={{ color: "#4d9fa9" }}>
          Security and Compliance
        </h2>
        <p className="text-base mb-3 font-light" style={{ color: "#a7a8a7" }}>
          In an era of increasing digital threats, Profilytic places utmost importance on the security and privacy of data. Our platform adheres to stringent security protocols and complies with global data protection regulations. We ensure that all candidate and employer information is securely managed, maintaining confidentiality and integrity.
        </p>
      </td>

      {/* Scalability */}
      <td className="p-4" style={{ borderColor: "#fcfdfd", borderWidth: "1px", borderStyle: "solid" }}>
        <h2 className="text-md font-semibold mb-2" style={{ color: "#4d9fa9" }}>
          Scalability
        </h2>
        <p className="text-base mb-3 font-light" style={{ color: "#a7a8a7" }}>
          Profilytic is designed with scalability in mind, capable of growing with your business. Whether you're a small startup or a large corporation, our platform can adapt to your changing needs. The flexible architecture allows for the seamless integration of new features and supports an increasing volume of data and users.
        </p>
      </td>
    </tr>
  </tbody>
</table>

              </div>

       {/* Right column with production content */}
 
<div className="col-span-1 text-center pt-14 p-10">
  <h2 className="text-xl font-semibold mb-5 pt-10" style={{ color: '#099fc4' }}>Revolutionizing Recruitment with AI</h2>
  <p className="font-light" style={{ color: '#090002' }}>
  Profilytic redefines recruitment by harnessing AI to accurately parse resumes and job descriptions, ensuring precise candidate-job alignment. Our advanced algorithms delve beyond keywords to match the intricacies of candidate profiles and job roles. This innovation leads the way in efficient, fair, and insightful recruitment, shaping a future where talent meets opportunity with precision.
  </p>
</div>


            </div>
          </div>
        </div>
      </GeneralLayout>
    </>
  );
}
