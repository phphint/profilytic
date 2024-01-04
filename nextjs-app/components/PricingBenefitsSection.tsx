// PricingBenefitsSection.js

const PricingBenefitsSection = () => {
    return (
      <section className="bg-[#24273a]  text-white min-h-[34vh] pb-16 ">
        <h3 className="bg-[#111b27] text-[#c3d7de] w-full p-4  text-center mb-5">
  Benefits
</h3>

        <div className="container mx-auto">
          {/* Row 1 */}
          <div className="flex justify-around mb-5">
            {/* Each Column */}
            <div className="flex-1 p-2.5">
              <div className="bg-[#1a222d] p-10">
                <h4 className="font-semibold text-xl mb-3">Cost-Effective Solutions</h4>
                <p className="font-thin">Get the best value for your recruitment budget.</p>
              </div>
            </div>
            <div className="flex-1 p-2.5">
              <div className="bg-[#1a222d] p-10">
                <h4 className="font-semibold text-xl mb-3">Risk-Free Trial</h4>
                <p className="font-thin">Explore our features with a complimentary trial period.</p>
              </div>
            </div>
            <div className="flex-1 p-2.5">
              <div className="bg-[#1a222d] p-10">
                <h4 className="font-semibold text-xl mb-3">Adaptable Plans</h4>
                <p className="font-thin">Choose a plan that scales with your business growth.</p>
              </div>
            </div>
            <div className="flex-1 p-2.5">
              <div className="bg-[#1a222d] p-10">
                <h4 className="font-semibold text-xl mb-3">Transparent Pricing</h4>
                <p className="font-thin">Clear and straightforward pricing, with no hidden costs.</p>
              </div>
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex justify-around">
            {/* Each Column */}
            <div className="flex-1 p-2.5">
              <div className="bg-[#1a222d] p-10">
                <h4 className="font-semibold text-xl mb-3">Effortless Upgrades</h4>
                <p className="font-thin">Upgrade your plan effortlessly as your hiring needs evolve.</p>
              </div>
            </div>
            <div className="flex-1 p-2.5">
              <div className="bg-[#1a222d] p-10">
                <h4 className="font-semibold text-xl mb-3">Streamlined Bulk Hiring</h4>
                <p className="font-thin">Efficiently manage high-volume recruitment needs.</p>
              </div>
            </div>
            <div className="flex-1 p-2.5">
              <div className="bg-[#1a222d] p-10">
                <h4 className="font-semibold text-xl mb-3">Data-Driven Insights</h4>
                <p className="font-thin">Make informed hiring decisions with powerful analytics.</p>
              </div>
            </div>
            <div className="flex-1 p-2.5">
              <div className="bg-[#1a222d] p-10 ">
                <h4 className="font-semibold text-xl mb-3">User-Friendly Design</h4>
                <p className="font-thin">Enjoy an intuitive platform that simplifies recruitment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default PricingBenefitsSection;
  