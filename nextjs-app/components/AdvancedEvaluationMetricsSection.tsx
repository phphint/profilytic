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
                <li>Generates an overall score that reflects the AI’s assessment of each candidate's suitability for the job role, based on a holistic analysis rather than a sum of individual metrics. This score helps prioritize candidates who best match the job criteria according to AI-driven insights.</li>
              </ul>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="md:flex-1 p-2.5 mb-4 md:mb-0">
            <div className="bg-[#1a222d] p-10">
              <h4 className="font-semibold text-xl mb-3">Professional Experience Metric</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Analyzes professional history to provide a score, highlights alignment with the job's needs, and points out any experience gaps or discrepancies.</li>
              </ul>
            </div>
          </div>

          {/* Educational Background */}
          <div className="md:flex-1 p-2.5 mb-4 md:mb-0">
            <div className="bg-[#1a222d] p-10">
              <h4 className="font-semibold text-xl mb-3">Educational Background Metric</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Evaluates academic qualifications, providing a score, and highlights both the alignment and discrepancies of education in relevance to the job role.</li>
              </ul>
            </div>
          </div>

          {/* Skillset Profiling */}
          <div className="md:flex-1 p-2.5 mb-4 md:mb-0">
            <div className="bg-[#1a222d] p-10">
              <h4 className="font-semibold text-xl mb-3">Skillset Profiling Metric</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Provides a score based on skill relevance and proficiency, detailing strengths and pinpointing skills that need improvement relative to the job requirements.</li>
              </ul>
            </div>
          </div>

          {/* Employment Consistency */}
          <div className="md:flex-1 p-2.5 mb-4 md:mb-0">
            <div className="bg-[#1a222d] p-10">
              <h4 className="font-semibold text-xl mb-3">Employment Consistency Metric</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Provides a score assessing employment history stability, highlights employment patterns that align with the job's demands, and discusses potential concerns.</li>
              </ul>
            </div>
          </div>

          {/* Project and Industry Experience */}
          <div className="md:flex-1 p-2.5">
            <div className="bg-[#1a222d] p-10">
              <h4 className="font-semibold text-xl mb-3">Project and Industry Experience Metric</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Provides a score evaluating the relevance of project and industry experience, discusses how well past experience aligns with the job role, and identifies any shortcomings.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ScoreMatchMetricsInsightsSection;
