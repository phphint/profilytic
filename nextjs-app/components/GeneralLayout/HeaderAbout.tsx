import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header
        className="bg-cover bg-bottom min-h-[100vh] mb-0 pb-0 bg-white border-b border-white text-white"
        style={{ backgroundImage: "url('/media/about-header.png')" }}
      >
   <div className="container mx-auto flex flex-col justify-center items-center h-full px-4 py-8 text-center">
  <h1 className="text-3xl md:text-6xl font-semibold mb-2 md:mb-2">
    About Proflytic
  </h1>
  <h2 className="text-lg md:text-xl mb-4">
    Pioneering AI Resume/CV Screening
  </h2>
  <p className="mb-4 font-thin text-sm md:text-base">
    Revolutionizing candidate evaluation with cutting-edge AI technology.
  </p>
  <Link href="/features" passHref>
    <button className="bg-[#0ec7c2] text-white py-2 px-4 rounded text-sm md:text-base">
      Explore Features
    </button>
  </Link>
</div>


        <div className="container mx-auto px-4 py-4 md:p-4">
          <div className="shadow-2xl rounded-lg overflow-hidden mx-auto ">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 bg-[#292e4e] text-white p-4">
                {/* Content for the left column */}
                        {/* Left Column */}

     
  <div className="grid grid-cols-2 gap-4">
    {/* Row 1 */}
    <div className="border-r border-[#393858] pr-4">
      <h3 className="text-lg font-bold mb-2">AI-Powered Matching</h3>
      <p className="font-thin">Proflytic's AI engine offers unmatched precision in job-to-candidate alignment.</p>
    </div>
    <div>
      <h3 className="text-lg font-bold mb-2">Data-Driven Insights</h3>
      <p className="font-thin">In-depth candidate profiling for informed hiring decisions.</p>
    </div>

    {/* Horizontal Separator */}
    <div className="col-span-2">
      <hr className="my-4 border-t border-[#393858]" />
    </div>

    {/* Row 2 */}
    <div className="border-r border-[#393858] pr-4">
      <h3 className="text-lg font-bold mb-2">Automated Screening</h3>
      <p className="font-thin">Quickly identify top candidates with our efficient AI screening.</p>
    </div>
    <div>
      <h3 className="text-lg font-bold mb-2">Scalable Infrastructure</h3>
      <p className="font-thin">Effortlessly manage and analyze large numbers of resumes.</p>
    </div>

    {/* Horizontal Separator */}
    <div className="col-span-2">
      <hr className="my-4 border-t border-[#393858]" />
    </div>

    {/* Row 3 */}
    <div className="border-r border-[#393858] pr-4">
      <h3 className="text-lg font-bold mb-2">Intuitive UI/UX</h3>
      <p className="font-thin">A user-friendly interface that streamlines recruitment tasks.</p>
    </div>
    <div>
      <h3 className="text-lg font-bold mb-2">Secure Data Handling</h3>
      <p className="font-thin">Ensuring the highest level of security for your recruitment data.</p>
    </div>

    {/* Horizontal Separator */}
    <div className="col-span-2">
      <hr className="my-4 border-t border-[#393858]" />
    </div>

    {/* Row 4 */}
    <div className="border-r border-[#393858] pr-4">
      <h3 className="text-lg font-bold mb-2">Comprehensive Candidate Evaluation</h3>
      <p className="font-thin">Adaptable processes tailored to specific hiring needs.</p>
    </div>
    <div>
      <h3 className="text-lg font-bold mb-2">Real-time Analytics</h3>
      <p className="font-thin">In-depth analysis for a holistic view of each candidate's potential.</p>
    </div>
  </div>
 

              </div>

              <div className="w-full md:w-1/2 bg-white p-4">
  <h1 className="text-xl font-bold mb-4 text-proflytic-primary">Our Story</h1>
  <p className="text-gray-700 text-base mb-4 proflytic-secondary">
    At Proflytic, our journey began with a simple yet profound goal: to revolutionize the way resumes and CVs are screened in the recruitment process. Recognizing the challenges faced by recruiters in handling vast numbers of applications, we set out to create a solution focused solely on this critical aspect.
  </p>
  <p className="text-gray-700 text-base mb-4 proflytic-secondary">
    We crafted our platform with a laser focus on leveraging AI for the efficient and accurate screening of resumes. This dedication led us to develop an AI Engine, a core component that transforms traditional screening methods. Our solution is designed to quickly process and analyze resumes, identifying the most suitable candidates based on job descriptions.
  </p>
  <p className="text-gray-700 text-base mb-4 proflytic-secondary">
    Our platform stands out in its ability to reduce the time and effort significantly required in the initial stages of recruitment. By automating the screening process, we empower recruiters to focus on more strategic aspects of hiring. This approach has not only streamlined the recruitment workflow but also enhanced the quality of candidate shortlisting.
  </p>
  <p className="text-gray-700 text-base mb-4 proflytic-secondary">
    Our journey is driven by a passion for innovation and a commitment to simplifying recruitment processes. We continually refine our AI Engine to ensure it remains at the forefront of recruitment technology, providing an indispensable tool for recruiters and businesses alike.
  </p>
</div>




            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
