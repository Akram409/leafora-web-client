import Banner from "./Banner";
import HowItWork from "./HowItWork";
import KeyFeature from "./KeyFeature";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <div className="container mx-auto px-16 space-y-24">
        <KeyFeature />
        <HowItWork />
      </div>
    </div>
  );
};

export default Home;
