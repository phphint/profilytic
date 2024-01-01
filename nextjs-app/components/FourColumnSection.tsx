import React from 'react';

const FourColumnSection = () => {
  return (
    <section className="bg-custom-light text-custom-dark py-8 pt-10 pb-10">
      <div className="container mx-auto px-4 pt-10 pb-10">
        <h2 className="text-2xl font-bold mb-6">Why Choose Proflytic?</h2>
        <div className="flex justify-between">
          {/* First Column - User-Friendly Interface */}
          <div className="w-1/4 px-2 pr-10">
            <h3 className="text-xl font-bold mb-2">User-Friendly Interface</h3>
            <p className="mb-4 font-light">
              Experience seamless recruitment with our intuitive platform, designed for efficiency and ease of use.
            </p>
            <button className="w-full px-4 py-2 bg-button-color text-custom-dark rounded">
              Explore Platform
            </button>
          </div>

          {/* Second Column - Advanced Analytics */}
          <div className="w-1/4 px-2 pl-10 pr-10">
            <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
            <p className="mb-4 font-light">
              Leverage powerful data-driven insights to make informed hiring decisions and optimize your recruitment strategy.
            </p>
          </div>

          {/* Third Column - Customizable Solutions */}
          <div className="w-1/4 px-2 pl-10 pr-10">
            <h3 className="text-xl font-bold mb-2">Customizable Solutions</h3>
            <p className="mb-4 font-light">
              Tailor our tools to fit your unique hiring needs, ensuring a perfect match between technology and process.
            </p>
          </div>

          {/* Fourth Column - Reliable Support */}
          <div className="w-1/4 px-2 pl-10 pr-10">
            <h3 className="text-xl font-bold mb-2">Reliable Support</h3>
            <p className="mb-4 font-light">
              Our dedicated team is here to ensure your success, providing expert support every step of the way.
            </p>
            <button className="w-full px-4 py-2 bg-button-color text-custom-dark rounded">
              Get Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FourColumnSection;
