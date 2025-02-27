import Footer from "../components/Footer";
import HeroFind from "@/components/HeroFind";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

import Tutors from "@/components/Tutors";
import { TutorFaqs } from "@/components/TutorFaqs";
import TutorInfo from "@/components/TutorInfo";

const FindPage = () => {
  return (
    <div className="container p-7">
      <Navbar />
      <HeroFind />
      <TutorInfo />
      <Tutors />
      <div className=" p-10 sm:p-12 md:p-16">
        <TutorFaqs />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default FindPage;
