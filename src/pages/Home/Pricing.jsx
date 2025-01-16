import { FaCheck, FaTimes } from 'react-icons/fa'; 
import SectionTitle from '../../Components/SectionTitle';

const Pricing = () => {
  
  const plans = [
    {
      name: "Leafora Basic",
      price: "Free",
      features: [
        { text: "Daily 5 credit for disease and genus check", available: true },
        { text: "Limited access to pro features", available: true },
        { text: "24/7 Expert Support Service", available: false },
        { text: "Exclusive content and updated", available: false },
        { text: "Ad-free experience", available: false }
      ]
    },
    {
      name: "Leafora Pro",
      price: "৳১/month",
      features: [
        { text: "Unlimited AI diagnoses", available: true },
        { text: "Expert chat support 24/7", available: true },
        { text: "Full plant database", available: true },
        { text: "Ad-free experience", available: true },
        { text: "Priority support", available: true }
      ]
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle text="Pricing Plans" />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border-2 rounded-lg p-6 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-600"
            >
              <h3 className="text-2xl font-bold mb-4 font-serif">{plan.name}</h3>
              <p className="text-4xl font-bold text-green-500 mb-6">{plan.price}</p>
              <ul className="space-y-3">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center justify-center">
                    {feature.available ? (
                      <FaCheck className="text-green-500 mr-2" />
                    ) : (
                      <FaTimes className="text-red-500 mr-2" />
                    )}
                    {feature.text}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">
                {plan.name === "Leafora Basic" ? "Current Plan" : "Upgrade Now"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
