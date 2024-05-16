import React from 'react';

const ScoreMatchMetricsInsightsSection = () => {
  return (
    <section className="bg-[#24273a] text-white pb-5">
      <h3 className="bg-[#111b27] text-[#c3d7de] w-full p-4 text-center">
        Profilytic Engine: AI ScoreMatch Metrics & Insights System
      </h3>

      <div className="container mx-auto px-4 pt-5">
        <div className="grid md:grid-cols-2 gap-4">

          {/* ScoreMatch Overview */}
          <div className="md:flex-1 p-2.5 mb-4 md:mb-0">
            <div className="bg-[#1a222d] p-10">
              <h4 className="font-semibold text-xl mb-3">ScoreMatch Overall Metric</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Provides a comprehensive score to prioritize top candidates.</li>
              </ul>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="md:flex-1 p-2.5 mb-4 md:mb-0">
            <div className="bg-[#1a222d] p-10">
              <h4 className="font-semibold text-xl mb-3">Professional Experience Metric</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Scores and highlights alignment with job needs and experience gaps.</li>
              </ul>
            </div>
          </div>

          {/* Educational Background */}
          <div className="md:flex-1 p-2.5 mb-4 md:mb-0">
            <div className="bg-[#1a222d] p-10">
              <h4 className="font-semibold text-xl mb-3">Educational Background Metric</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Evaluates academic qualifications and job relevance.</li>
              </ul>
            </div>
          </div> 

          {/* Skillset Profiling */}
          <div className="md:flex-1 p-2.5 mb-4 md:mb-0">
            <div className="bg-[#1a222d] p-10">
              <h4 className="font-semibold text-xl mb-3">Skillset Profiling Metric</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Assesses skill relevance and proficiency for the job.</li>
              </ul>
            </div>
          </div>

          {/* Employment Consistency */}
          <div className="md:flex-1 p-2.5 mb-4 md:mb-0">
            <div className="bg-[#1a222d] p-10">
              <h4 className="font-semibold text-xl mb-3">Employment Consistency Metric</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Analyzes employment history stability and patterns.</li>
              </ul>
            </div>
          </div>

          {/* Project and Industry Experience */}
          <div className="md:flex-1 p-2.5">
            <div className="bg-[#1a222d] p-10">
              <h4 className="font-semibold text-xl mb-3">Projects and Industries Experience Metric</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Evaluates the relevance of projects and industries experience.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ScoreMatchMetricsInsightsSection;
