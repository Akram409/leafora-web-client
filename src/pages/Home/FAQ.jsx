const FAQ = () => {
  const faqs = [
    {
      question: "How does AI diagnosis work?",
      answer:
        "Our AI uses advanced computer vision to analyze plant photos, identifying diseases and species with high accuracy.",
    },
    {
      question: "What is included in the free plan?",
      answer:
        "The free plan includes limited AI diagnoses, access to basic plant database, and community support.",
    },
    {
      question: "How do I upgrade to Pro?",
      answer:
        "Simply click the upgrade button in your profile and choose your preferred payment method.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We use industry-standard encryption and never share your personal data with third parties.",
    },
  ];
  return (
    <div>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
