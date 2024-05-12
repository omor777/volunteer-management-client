import OurExperience from "../../components/OurExperience";
import VolunteerNeedNow from "../../components/VolunteerNeedNow";
import WhatWeDo from "../../components/WhatWeDo";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div className="container">
      <div>
        <Banner />
      </div>
      <div className="mt-20">
        <WhatWeDo />
      </div>
      <div className="mt-20">
        <VolunteerNeedNow />
      </div>
      <div className="mt-20">
        <OurExperience />
      </div>
    </div>
  );
};

export default Home;
