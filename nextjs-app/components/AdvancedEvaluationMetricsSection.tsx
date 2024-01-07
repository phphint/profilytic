import React from 'react';

const ScoreMatchMetricsInsightsSection = () => {
  return (
    <section className="bg-[#24273a] text-white pb-5 ">
      <h3 className="bg-[#111b27] text-[#c3d7de] w-full p-4 text-center ">
        Profilytic Engine: AI ScoreMatch Metrics & Insights System
      </h3>

      <div className="container mx-auto px-4 pt-5">
        <div className="grid md:grid-cols-2 gap-4">

          {/* Professional Experience Analysis */}
          <div className="md:flex-1 p-2.5 mb-4 md:mb-0">
            <div className="bg-[#1a222d] p-10">
              <h4 className="font-semibold text-xl mb-3">Professional Experience Metric</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Provides a weighted score for professional history relevance and delivers both positive and negative AI insights for job alignment.</li>
              </ul>
            </div>
          </div>

          {/* Educational Background Evaluator */}
          <div className="md:flex-1 p-2.5 mb-4 md:mb-0">
            <div className="bg-[#1a222d] p-10">
              <h4 className="font-semibold text-xl mb-3">Educational Background Metric</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Assigns a score to academic qualifications and provides AI insights highlighting both strengths and gaps in relation to job requirements.</li>
              </ul>
            </div>
          </div>

          {/* Skillset Profiling */}
          <div className="md:flex-1 p-2.5 mb-4 md:mb-0">
            <div className="bg-[#1a222d] p-10">
              <h4 className="font-semibold text-xl mb-3">Skillset Profiling Metric</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Delivers a score for skill relevance and proficiency with AI insights that identify key skill strengths and potential areas for development.</li>
              </ul>
            </div>
          </div>

          {/* Achievements and Accomplishments Highlighter */}
          <div className="md:flex-1 p-2.5 mb-4 md:mb-0">
            <div className="bg-[#1a222d] p-10">
              <h4 className="font-semibold text-xl mb-3">Achievements and Accomplishments Metric</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Scores achievements based on their industry relevance and offers insights into how these achievements enhance the candidate's suitability.</li>
              </ul>
            </div>
          </div>

          {/* Employment Consistency Tracker */}
          <div className="md:flex-1 p-2.5 mb-4 md:mb-0">
            <div className="bg-[#1a222d] p-10">
              <h4 className="font-semibold text-xl mb-3">Employment Consistency Metric</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Evaluates career stability with a score and provides insights on employment patterns and their implications for the desired role.</li>
              </ul>
            </div>
          </div>

          {/* Project and Industry Experience Detector */}
          <div className="md:flex-1 p-2.5">
            <div className="bg-[#1a222d] p-10">
              <h4 className="font-semibold text-xl mb-3">Project and Industry Experience Metric</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Provides a comprehensive score for project and industry experience, accompanied by insights on relevance and depth in context to the job role.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ScoreMatchMetricsInsightsSection;
