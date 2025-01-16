import { FaApple, FaGooglePlay } from "react-icons/fa";
import SectionTitleTwo from "../../Components/SectionTitleTwo";
import { MdOutlineFileDownload } from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";
import { FaUserDoctor } from "react-icons/fa6";

const DownloadApp = () => {
  return (
    <section className=" text-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side - Phone mockup */}
          <div className="lg:w-2/5 relative">
            <div className="relative w-[250px] h-[500px] mx-auto">
              {/* Phone screen */}
              <div className="absolute inset-2 bg-white rounded-[2.75rem] overflow-hidden">
                {/* App screenshot */}
                <img
                  src="/d1.png"
                  alt="App Interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating elements around phone */}
            <div className="absolute left-10 top-[10%] transform -translate-x-1/2 bg-green-600 backdrop-blur-sm p-4 rounded-lg animate-float-slow">
              <MdOutlineFileDownload  size="3em" color="white" />
            </div>
            <div className="absolute left-10 top-[40%] transform -translate-x-1/2 bg-green-600 backdrop-blur-sm p-4 rounded-lg animate-float-slow">
              <PiPlantFill  Brain size="3em" color="white" />
            </div>
            <div className="absolute left-10 bottom-[15%] transform -translate-x-1/2 bg-green-600 backdrop-blur-sm p-4 rounded-lg animate-float-slow">
              <FaUserDoctor  size="3em" color="white" />
            </div>
          </div>

          {/* Right side - Download options */}
          <div className="lg:w-[60%] text-center lg:text-left">
            <SectionTitleTwo text="Download Our" second="App" />
            <p className="text-xl mb-8 text-black/90 text-center">
              Take expert plant care with you everywhere. Get instant AI-powered
              plant diagnosis and expert advice right from your pocket.
            </p>

            <div className="flex gap-4 justify-center">
              <button className="w-full sm:w-64 border-2 border-green-500 text-green-700 px-8 py-4 rounded-xl flex items-center justify-center hover:bg-green-50 transition-colors group">
                <FaApple className="text-2xl mr-3 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </button>

              <button className="w-full sm:w-64 border-2 border-green-500 text-green-700 px-8 py-4 rounded-xl flex items-center justify-center hover:bg-green-50 transition-colors group">
                <FaGooglePlay className="text-2xl mr-3 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add floating animation
const style = document.createElement("style");
style.textContent = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(-6deg);
    }
    50% {
      transform: translateY(-10px) rotate(-6deg);
    }
  }

  @keyframes float-slow {
    0%, 100% {
      transform: translateY(0px) rotate(6deg);
    }
    50% {
      transform: translateY(-15px) rotate(6deg);
    }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-float-slow {
    animation: float-slow 4s ease-in-out infinite;
  }
`;
document.head.appendChild(style);

export default DownloadApp;
