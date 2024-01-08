// PricePlanSection.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const PricePlanSection = () => {
  return (
    <section className="bg-white py-5 min-h-[33vh]">
      <div className="container mx-auto flex flex-col md:flex-row justify-around">
        {/* Column 1: Flexible Plans for Every Business */}
        <div className="md:flex-1 p-10 mb-6 md:mb-0">
        <h4 className="font-bold mb-3 text-2xl">
        Candidate Token Flexibility
      </h4>
      <p>
      Leverage our token-based system tailored for diverse hiring needs, offering the adaptability to scale with your business growth.
      </p>
      <ul className="mt-5">
        <li className="flex items-center mb-2">
          <FontAwesomeIcon
          width='2rem'
          height='2rem'
          size='2x'
            icon={faCheckCircle}
            className="mr-2 text-27c2d4"
          />
                       Pay-as-you-go with individual resume tokens

        </li>
        <li className="flex items-center mb-2">
          <FontAwesomeIcon
             width='2rem'
             height='2rem'
             size='2x'
            icon={faCheckCircle}
            className="mr-2 text-27c2d4"
          />
              Bulk token packages for high-volume hiring
        </li>
        <li className="flex items-center">
          <FontAwesomeIcon
             width='2rem'
             height='2rem'
             size='2x'
            icon={faCheckCircle}
            className="mr-2 text-27c2d4"
          />
          Scalable features to grow with your needs
        </li>
      </ul>
        </div>

        {/* Column 2: AI-Powered Recruitment */}
        <div className="md:flex-1 p-10 mb-6 md:mb-0">
          <h4 className="font-bold mb-3 text-2xl">Pay-Per-Resume Pricing</h4>
          <p>
            Simple, per-resume pricing suitable for all hiring scales. No subscriptions, just straightforward costs.
          </p>
          <ul className="mt-5">
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-27c2d4" />
              Pay per resume for precise cost control
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-27c2d4" />
              Bulk discounts for larger hiring needs
            </li>
          </ul>
        </div>

        {/* Column 3: Pricing Plans */}
        <div className="md:flex-1 p-10">
        <h4 className="font-bold mb-3 text-2xl">Candidate Token Pricing</h4>
          <p className="mb-4">
            Each resume token allows processing of one resume, application, or
            CV.
          </p>
          <ul>
            <li className="mb-2">
              <strong>Individual Tokens:</strong> $1.20 per token.
            </li>
            <li className="mb-2">
              <strong>Bulk Purchase:</strong> 20% discount on orders over 1000
              tokens.
            </li>
          </ul>
          <p className="mt-4">
            Tokens offer the flexibility to pay as you go, ideal for businesses
            of all sizes and hiring frequencies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricePlanSection;
