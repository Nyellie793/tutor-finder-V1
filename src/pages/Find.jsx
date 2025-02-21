import Footer from "../components/Footer"
import Find from '../components/Find'
import Contact from "../components/Contact"
import Navbar from "../components/Navbar"
import HowItWorks from "../components/HowItWorks";


const FindPage = () => {
  return (
    <div className="finder">
        <Navbar />
        <HowItWorks />
        <Find />
        <Contact />
        <Footer />

    </div>
  )
}

export default FindPage