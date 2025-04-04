
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/HowItWorks";
import Sponsors from "../components/home/Sponsors";
import Subjects from "../components/home/Subjects";
import Footer from "../components/Footer";
// import "../index.css";

function HomePage() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Hero />
        <HowItWorks />
        <Subjects />
        <Sponsors />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
