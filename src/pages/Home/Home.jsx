import OurExperience from "../../components/OurExperience";
import WhatWeDo from "../../components/WhatWeDo";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div className="container">
      <div>
        <Banner />
      </div>
      <div className="mt-16">
        <WhatWeDo/>
      </div>
      <div className="mt-16">
        <OurExperience />
      </div>
    </div>
  );
};

export default Home;
