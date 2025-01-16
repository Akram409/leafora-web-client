import { GiBrain, GiSpy } from "react-icons/gi";
import { IoChatboxEllipses, IoLibraryOutline } from "react-icons/io5";
import { LuBookMarked } from "react-icons/lu";
import { MdOutlineSupportAgent } from "react-icons/md";
import SectionTitle from "../../Components/SectionTitle";

const KeyFeature = () => {
  const features = [
    {
      icon: <GiBrain size="3em" />,
      title: "AI Diagnosis",
      description: "AI Diagnosis for plant diseases and genus detection.",
    },
    {
      icon: <IoChatboxEllipses size="3em" />,
      title: "Expert Chat",
      description: "Expert Chat for plant consultations.",
    },
    {
      icon: <IoLibraryOutline size="3em" />,
      title: "Educational Hub",
      description: "Educational Hub for articles and plant databases.",
    },
    {
      icon: <LuBookMarked size="3em" />,
      title: "Bookmarking",
      description: "Bookmarking for quick access.",
    },
    {
      icon: <MdOutlineSupportAgent size="3em" />,
      title: "Secure Support",
      description: "Secure and multilingual support.",
    },
    {
      icon: <GiSpy size="3em" />,
      title: "Secure Access",
      description:
        "Enjoy secure access to all app features with advanced encryption.",
    },
  ];

  const getAnimationClass = (index) => {
    if (index === 2) return "animate-fadeInUp";
    if (index < 2) return "animate-fadeInLeft";
    return "animate-fadeInRight";
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle text="Key Features" />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-full mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`card border-2 border-green-400 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:bg-green-500 group ${getAnimationClass(
              index
            )}`}
          >
            <div className="card-body flex flex-col items-center text-center p-6">
              <div className="text-green-500 group-hover:text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="card-title text-xl mb-1 group-hover:text-white">
                {feature.title}
              </h3>
              <p className="font-serif group-hover:text-white">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeature;
