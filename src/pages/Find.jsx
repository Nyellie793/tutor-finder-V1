import Footer from "../components/Footer";
import HeroFind from "@/components/HeroFind";
import Navbar from "../components/Navbar";

import Tutors from "@/components/Tutors";
import { TutorFaqs } from "@/components/TutorFaqs";
import TutorInfo from "@/components/TutorInfo";
import TestimonialCards from "@/components/cards.jsx/TestimonialCards";

const FindPage = () => {
  return (
    <div className="container p-7">
      <Navbar />
      <HeroFind />
      <TutorInfo />
      <Tutors />
      < TestimonialCards />
      <div className=" p-10 sm:p-12 md:p-16">
        <TutorFaqs />
      </div>
      <Footer />
    </div>
  );
};

export default FindPage;
