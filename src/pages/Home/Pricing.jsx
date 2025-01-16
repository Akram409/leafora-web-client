
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
      // Pricing plans
  const plans = [
    {
      name: "Basic",
      price: "Free",
      features: [
        "Limited AI diagnoses",
        "Basic plant database",
        "Community support",
        "Ad-supported"
      ]
    },
    {
      name: "Pro",
      price: "$9.99/month",
      features: [
        "Unlimited AI diagnoses",
        "Expert chat support 24/7",
        "Full plant database",
        "Ad-free experience",
        "Priority support"
      ]
    }
  ];
    return (
        <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className="border rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold text-green-500 mb-6">{plan.price}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center justify-center">
                      <FaCheck className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">
                  {plan.name === "Basic" ? "Get Started" : "Upgrade Now"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Pricing;