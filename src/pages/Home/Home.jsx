import Banner from "./Banner";
import DownloadApp from "./DownloadApp";
import FAQ from "./FAQ";
import HowItWork from "./HowItWork";
import KeyFeature from "./KeyFeature";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <div className="container mx-auto px-16 lg:space-y-28">
        <KeyFeature />
        <HowItWork />
        <WhyChooseUs />
        <Testimonial />
        <Pricing />
        <FAQ />
        <DownloadApp />
      </div>
    </div>
  );
};

export default Home;
