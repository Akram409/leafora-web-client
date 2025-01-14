import { MdOutlineFileDownload } from "react-icons/md";

const Banner = () => {
    return (
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(/b3.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=""></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="">
              <h1 className="mb-5 text-6xl font-bold max-w-2xl">Welcome to <span className="text-green-500 font-serif">Leafora</span></h1>
              <p className="mb-5 max-w-xl">
                Empowering plant enthusiasts with AI-driven solutions. Diagnose plant diseases, identify genus, and get expert advice for healthier plants. Join us in revolutionizing plant care.
              </p>
              <a target="_blank" href="https://drive.google.com/file/d/1leLIeT8MAH5hjKy4l5HGTRvD7q1jASuf/view?usp=sharing"><button className="btn text-white btn-success"><div className="flex items-center gap-1">Get the App <MdOutlineFileDownload size="1.6em"/></div>
              </button></a>
              
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  