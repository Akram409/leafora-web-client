
import  { useState } from 'react';

const Testimonial = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The AI diagnosis saved my orchid! Incredibly accurate and fast.",
      role: "Home Gardener"
    },
    {
      name: "Mike Chen",
      text: "Expert chat support helped me create a thriving indoor garden.",
      role: "Plant Enthusiast"
    },
    {
      name: "Emma Davis",
      text: "The multilingual support makes it accessible for everyone.",
      role: "Professional Botanist"
    }
  ];
    return (
        <div>
            <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="flex overflow-hidden relative">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <p className="mb-4 italic">{testimonial.text}</p>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-green-500' : 'bg-gray-300'}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>
        </div>
    );
};

export default Testimonial;