import Navbar from "../components/Navbar"
import About from '../components/About'
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import "../index.css";



const AboutPage = () => {
  return (
    <div className="about">
       <Navbar />
       <About />
       <Contact/>
       <Footer />

    </div>
  )
}

export default AboutPage