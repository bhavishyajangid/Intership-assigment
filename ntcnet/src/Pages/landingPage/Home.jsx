import { TbMenu } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import HeroSection from "./HeroSection";
import FeaturedCard from "./FeaturedCard";
import ScrollWithImage from "./ScrollWithImage";
import AllCard from "./AllCard";
import FAQ from "./Faq";
import NavbarLanding from "./NavbarLanding";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="bg-black">

   
    <div className="reletive">
      <div className="min-h-screen m-auto overflow-hidden relative max-w-md">

        {/* NAVBAR */}

       <NavbarLanding/>

<HeroSection/>
<FeaturedCard/>
<ScrollWithImage/>
<AllCard/>
<FAQ/>
<Footer/>




      </div>
    </div>
     </div>
  );
};

export default Home;
