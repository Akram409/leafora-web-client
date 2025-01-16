import { useState } from "react";
import SectionTitleTwo from "../../Components/SectionTitleTwo";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The AI diagnosis saved my orchid! Incredibly accurate and fast.",
      role: "Home Gardener",
      avatar:
        "https://i.ibb.co.com/nBkVwq0/austin-distel-7uo-Mmz-Pd2-JA-unsplash.jpg",
    },
    {
      name: "Mike Chen",
      text: "Expert chat support helped me create a thriving indoor garden.",
      role: "Plant Enthusiast",
      avatar:
        "https://i.ibb.co.com/HPFVsyF/foto-sushi-6anudmp-ILw4-unsplash.jpg",
    },
    {
      name: "Emma Davis",
      text: "The multilingual support makes it accessible for everyone.",
      role: "Professional Botanist",
      avatar:
        "https://i.ibb.co.com/9V3R9Fx/willian-souza-p5-Bo-BF0-XJUA-unsplash.jpg",
    },
  ];

  return (
    <div>
      <section >
        <div className="container mx-auto px-4">
          <SectionTitleTwo text="What Our" second="Users Say" />
          <div className="flex justify-center overflow-hidden relative w-full md:w-3/4 lg:w-1/2   border-b-4 border-green-500 rounded-2xl mx-auto">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="avatar mb-4">
                      <div className="ring-success ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                        <img
                          src={testimonial.avatar}
                          alt={`${testimonial.name}'s avatar`}
                        />
                      </div>
                    </div>
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
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-green-500" : "bg-gray-300"
                }`}
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
