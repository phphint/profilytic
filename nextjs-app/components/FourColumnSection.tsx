import React from 'react';
import Link from 'next/link';


const FourColumnSection = () => {
  return (
    <section className="bg-custom-light text-custom-dark py-8 pt-10 pb-10">
      <div className="container mx-auto px-4 pt-10 pb-10">
        <h2 className="text-2xl font-bold mb-6">Why Choose Proflytic?</h2>
        <div className="flex flex-wrap justify-between">
          {/* First Column - User-Friendly Interface */}
          <div className="w-full md:w-1/4 px-2 mb-6 md:mb-0 md:pr-10">
            <h3 className="text-xl font-bold mb-2">User-Friendly Interface</h3>
            <p className="mb-4 font-light">
              Experience seamless recruitment with our intuitive platform, designed for efficiency and ease of use.
            </p>
            <Link href="/features/our-technology" passHref>
              <button className="w-full px-4 py-2 bg-button-color text-custom-dark rounded">
                Explore Platform
              </button>
            </Link>
          </div>

          {/* Second Column - Advanced Analytics */}
          <div className="w-full md:w-1/4 px-2 mb-6 md:mb-0 md:px-10">
            <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
            <p className="mb-4 font-light">
              Leverage powerful data-driven insights to make informed hiring decisions and optimize your recruitment strategy.
            </p>
          </div>

{/* Third Column - AI-Driven Customization */}
<div className="w-full md:w-1/4 px-2 mb-6 md:mb-0 md:px-10">
  <h3 className="text-xl font-bold mb-2">AI-Driven Analysis</h3>
  <p className="mb-4 font-light">
  Enhance your recruitment with AI that accurately scores resumes against job descriptions, offering clear, data-driven insights for informed hiring decisions.
  </p>
</div>




          {/* Fourth Column - Reliable Support */}
          <div className="w-full md:w-1/4 px-2 md:pl-10">
            <h3 className="text-xl font-bold mb-2">Reliable Support</h3>
            <p className="mb-4 font-light">
              Our dedicated team is here to ensure your success, providing expert support every step of the way.
            </p>
            <a href="mailto:info@proflilytic.com">
              <button className="w-full px-4 py-2 bg-button-color text-custom-dark rounded">
                Get Support
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FourColumnSection;
