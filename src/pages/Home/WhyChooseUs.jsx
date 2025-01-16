
import { FaCheck } from 'react-icons/fa';
import { MdTranslate, MdSupport } from 'react-icons/md';

const WhyChooseUs = () => {
    return (
        <div>
            <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg text-center">
              <FaCheck className="mx-auto text-green-500 text-3xl mb-4" />
              <h3 className="text-xl font-bold mb-2">AI-Powered</h3>
              <p>Accurate plant diagnosis using advanced AI technology</p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <MdSupport className="mx-auto text-green-500 text-3xl mb-4" />
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p>Expert assistance whenever you need it</p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <MdTranslate className="mx-auto text-green-500 text-3xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Multilingual</h3>
              <p>Access in your preferred language</p>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default WhyChooseUs;