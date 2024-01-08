import React from 'react';

const ScoreMatchMetricsInsightsSection = () => {
  return (
    <section className="bg-[#24273a] text-white pb-5 ">
      <h3 className="bg-[#111b27] text-[#c3d7de] w-full p-4 text-center ">
        Profilytic Engine: AI ScoreMatch Metrics & Insights System
      </h3>

      <div className="container mx-auto px-4 pt-5">
        <div className="grid md:grid-cols-2 gap-4">

          {/* Professional Experience  */}
          <div className="md:flex-1 p-2.5 mb-4 md:mb-0">
            <div className="bg-[#1a222d] p-10">
              <h4 className="font-semibold text-xl mb-3">Professional Experience Metric</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Analyzes professional history, offering balanced insights on its alignment and discrepancies with the job role</li>
              </ul>
            </div>
          </div>

          {/* Educational Background  */}
          <div className="md:flex-1 p-2.5 mb-4 md:mb-0">
            <div className="bg-[#1a222d] p-10">
              <h4 className="font-semibold text-xl mb-3">Educational Background Metric</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Evaluates academic qualifications, highlighting congruences and gaps in relation to the job's educational needs.</li>
              </ul>
            </div>
          </div>

          {/* Skillset Profiling */}
          <div className="md:flex-1 p-2.5 mb-4 md:mb-0">
            <div className="bg-[#1a222d] p-10">
              <h4 className="font-semibold text-xl mb-3">Skillset Profiling Metric</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Provides insights on skill relevance and proficiency, pinpointing strengths and areas needing improvement in context with the job.</li>
              </ul>
            </div>
          </div>

          {/* Achievements and Accomplishments  */}
          <div className="md:flex-1 p-2.5 mb-4 md:mb-0">
            <div className="bg-[#1a222d] p-10">
              <h4 className="font-semibold text-xl mb-3">Achievements and Accomplishments Metric</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Assesses the impact of achievements, offering insights on their relevance and areas where they may fall short for the job role.</li>
              </ul>
            </div>
          </div>

          {/* Employment Consistency  */}
          <div className="md:flex-1 p-2.5 mb-4 md:mb-0">
            <div className="bg-[#1a222d] p-10">
              <h4 className="font-semibold text-xl mb-3">Employment Consistency Metric</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Examines employment history for stability, providing insights on both consistent patterns and potential concerns for the role.</li>
              </ul>
            </div>
          </div>

          {/* Project and Industry Experience  */}
          <div className="md:flex-1 p-2.5">
            <div className="bg-[#1a222d] p-10">
              <h4 className="font-semibold text-xl mb-3">Project and Industry Experience Metric</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Evaluates project and industry experience, highlighting both its applicability and any areas lacking depth for the job role.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ScoreMatchMetricsInsightsSection;
