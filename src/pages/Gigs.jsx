import Footer from "@/components/Footer"
import GigsCreate from "@/components/GigsCreate"
import { GigsFaqs } from "@/components/GigsFaqs"
import Navbar from "@/components/Navbar"

const GigsPage = () => {
  return (
    <div className="container p-7">
        <Navbar />
        < GigsCreate />
        < GigsFaqs />
        <Footer />
        
    </div>
  )
}

export default GigsPage