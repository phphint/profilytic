const PricingBenefitsSection = () => {
  return (
    <section className="bg-[#24273a] text-white min-h-[34vh] pb-16">
      <h3 className="bg-[#111b27] text-[#c3d7de] w-full p-4 text-center mb-5">
        Benefits
      </h3>

      <div className="container mx-auto px-4">
        {/* Row */}
        <div className="flex flex-col md:flex-row justify-around mb-5">
          {/* Column 1 */}
          <div className="md:flex-1 p-2.5 mb-4 md:mb-0">
            <div className="bg-[#1a222d] p-10">
              <h4 className="font-semibold text-xl mb-3">Cost-Effective Solutions</h4>
              <p className="font-thin">Maximize your recruitment budget with our token-based pricing.</p>
            </div>
          </div>
          {/* Column 2 */}
          <div className="md:flex-1 p-2.5 mb-4 md:mb-0">
            <div className="bg-[#1a222d] p-10">
              <h4 className="font-semibold text-xl mb-3">Complimentary Tokens</h4>
              <p className="font-thin">Start with 10 free tokens to explore our platform.</p>
            </div>
          </div>
          {/* Column 3 */}
          <div className="md:flex-1 p-2.5 mb-4 md:mb-0">
            <div className="bg-[#1a222d] p-10">
              <h4 className="font-semibold text-xl mb-3">Bulk Token Discounts</h4>
              <p className="font-thin">Enjoy a 20% discount on bulk token purchases.</p>
            </div>
          </div>
          {/* Column 4 */}
          <div className="md:flex-1 p-2.5">
            <div className="bg-[#1a222d] p-10">
              <h4 className="font-semibold text-xl mb-3">Transparent Token Pricing</h4>
              <p className="font-thin">No hidden costs, pay for what you need.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingBenefitsSection;
