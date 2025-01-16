import { useState } from "react";
import { MdOutlineCamera } from "react-icons/md";
import { FaMagic } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import { GrChatOption } from "react-icons/gr";
import SectionTitleTwo from "../../Components/SectionTitleTwo";

const HowItWork = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <MdOutlineCamera size="2em" />,
      title: "Upload Photo",
      description: "Take or upload a photo of your disease plant",
      image: "/step/s1.png",
      detail:
        "Simply take a photo of your plant using your smartphone camera or upload an existing image. Make sure the affected area is clearly visible for best results.",
    },
    {
      icon: <BsRobot size="2em" />,
      title: "AI Analysis",
      description: "Get instant diagnosis or genus identification",
      image: "/step/s2.png",
      detail:
        "Our advanced AI system analyzes your plant's image, identifying species, potential diseases, and health issues within seconds.",
    },
    {
      icon: <FaMagic size="2em" />,
      title: "Disease Results",
      description: "Get instant plant disease results and treatment options.",
      image: "/step/s3.png",
      detail: "That’s it! Now you know the issue and how to cure it",
    },
    {
      icon: <GrChatOption size="2em" />,
      title: "Expert Support",
      description: "Chat with experts or browse articles",
      image: "/step/s4.png",
      detail:
        "Connect with professional botanists and garden experts for personalized advice, or browse our extensive knowledge base for care tips.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <SectionTitleTwo text="How to identify" second="a disease" />
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="transition-all duration-500 transform hover:scale-105"
              />
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-6 py-2 rounded-full">
                Step {activeStep + 1}/4
              </div>
            </div>
          </div>

          {/* Right side - Steps */}
          <div className="lg:w-1/2">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg cursor-pointer transition-all duration-300 transform
                    ${
                      activeStep === index
                        ? "bg-white shadow-xl scale-105 border-l-4 border-green-500"
                        : "hover:bg-gray-50"
                    }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-full ${
                        activeStep === index
                          ? "bg-green-500 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          activeStep === index
                            ? " text-green-500"
                            : " text-gray-600"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`transition-all duration-300 ${
                          activeStep === index
                            ? "text-gray-700"
                            : "text-gray-500"
                        }`}
                      >
                        {step.description}
                      </p>
                      {activeStep === index && (
                        <p className="mt-3 text-gray-600 animate-fadeIn">
                          {step.detail}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-12 gap-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 
                ${activeStep === index ? "bg-green-500 w-6" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
