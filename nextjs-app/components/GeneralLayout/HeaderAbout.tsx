import React from "react";

const Header = () => {
  return (
    <>
      <header
        className="bg-cover bg-bottom min-h-[100vh] mb-0 pb-0 bg-white border-b border-white text-white"
        style={{ backgroundImage: "url('/media/about-header.png')" }}
      >
        <div className="container mx-auto flex flex-col justify-center items-center h-full px-4 py-8 text-center">
          {/* Content centered */}
          <h1 className="text-6xl font-semibold mb-2 w-1/3">
            About Proflytic
          </h1>{" "}
          {/* Main Title */}
          <h2 className="text-xl mb-4 w-1/3">
            AI-Driven Recruitment, Redefined
          </h2>{" "}
          {/* Subtitle */}
          <p className="mb-4 w-1/3 font-thin">
            Streamlining hiring with advanced technology.
          </p>{" "}
          {/* Brief Description */}
          <button className="bg-[#0ec7c2] text-white py-2 px-4 rounded">
            Learn More
          </button>{" "}
          {/* Button */}
        </div>

        <div className="container mx-auto p-4">
          <div className="shadow-2xl rounded-lg overflow-hidden w-3/4 mx-auto ">
            <div className="flex">
              {/* Left Column */}

              <div className="w-1/2 bg-[#292e4e] text-white p-4">
  <div className="grid grid-cols-2 gap-4">
    {/* Row 1 */}
    <div className="border-r border-[#393858] pr-4">
      <h3 className="text-lg font-bold mb-2">AI-Powered Matching</h3>
      <p className="font-thin">Advanced algorithms for precise job-to-candidate matching.</p>
    </div>
    <div>
      <h3 className="text-lg font-bold mb-2">Data-Driven Insights</h3>
      <p className="font-thin">Analytics that provide deep insights into candidate profiles.</p>
    </div>

    {/* Horizontal Separator */}
    <div className="col-span-2">
      <hr className="my-4 border-t border-[#393858]" />
    </div>

    {/* Row 2 */}
    <div className="border-r border-[#393858] pr-4">
      <h3 className="text-lg font-bold mb-2">Automated Screening</h3>
      <p className="font-thin">Efficiently filter candidates to find the best fits.</p>
    </div>
    <div>
      <h3 className="text-lg font-bold mb-2">Scalable Infrastructure</h3>
      <p className="font-thin">Robust systems that grow with your recruitment needs.</p>
    </div>

    {/* Horizontal Separator */}
    <div className="col-span-2">
      <hr className="my-4 border-t border-[#393858]" />
    </div>

    {/* Row 3 */}
    <div className="border-r border-[#393858] pr-4">
      <h3 className="text-lg font-bold mb-2">Intuitive UI/UX</h3>
      <p className="font-thin">User-friendly interfaces for seamless recruitment processes.</p>
    </div>
    <div>
      <h3 className="text-lg font-bold mb-2">Secure Data Handling</h3>
      <p className="font-thin">Top-notch security protocols to protect sensitive information.</p>
    </div>

    {/* Horizontal Separator */}
    <div className="col-span-2">
      <hr className="my-4 border-t border-[#393858]" />
    </div>

    {/* Row 4 */}
    <div className="border-r border-[#393858] pr-4">
      <h3 className="text-lg font-bold mb-2">Customizable Workflows</h3>
      <p className="font-thin">Adaptable processes tailored to specific hiring needs.</p>
    </div>
    <div>
      <h3 className="text-lg font-bold mb-2">Real-time Analytics</h3>
      <p className="font-thin">Up-to-date data insights for informed decision-making.</p>
    </div>
  </div>
</div>


              {/* Right Column */}
              <div className="w-1/2 bg-white p-4">
                <h1 className="text-xl font-bold mb-4 text-proflytic-primary">
                  Our Story
                </h1>
                <p className="text-gray-700 text-base mb-4 proflytic-secondary">
                  Born from a vision to revolutionize the recruitment landscape,
                  Proflytic emerged as a beacon of innovation in a field ripe
                  for transformation. We saw the potential of AI to change how
                  companies interact with talent, making the process more
                  efficient, fair, and insightful.
                </p>
                <p className="text-gray-700 text-base mb-4 proflytic-secondary">
                  Our platform is not just technology; it's the culmination of
                  expertise in AI, machine learning, and a deep understanding of
                  the recruitment process. We bridge the gap between talent and
                  opportunity, ensuring the best matches are made with precision
                  and speed.
                </p>
                <p className="text-gray-700 text-base mb-4 proflytic-secondary">
                  The heart of Proflytic lies in its advanced algorithms that
                  parse resumes and job descriptions, matching them with
                  unparalleled accuracy. Our tools empower recruiters to
                  shortlist and rank candidates, not just on credentials, but on
                  a nuanced understanding of their potential.
                </p>
                <p className="text-gray-700 text-base mb-4 proflytic-secondary">
                  We're a team driven by the belief that great talent shouldn't
                  go unnoticed, and hiring shouldn't be a maze. Our mission is
                  to make recruitment a seamless, transparent journey for all
                  involved - companies, recruiters, and job seekers alike.
                </p>
                {/* ... Rest of the existing content */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
