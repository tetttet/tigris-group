import Breadcrumb from "../../components/elements/Breadcrumb"
import Footer from "../../components/Footer/Footer"
import MedNavbar from "../../components/Navbar/MedNavbar"
import {  PortSection } from "../../components/Sections/Feature"
import Testimonial from "../../components/Sections/Testimonial"

const Service = () => {
    return (
        <>
            <MedNavbar />
            <Breadcrumb pageName='TIGRIS GROUP Services' pageDescription='Services Page' />
            <div className="mt-10"></div>
            <PortSection />
            <Testimonial />
            <Footer />
        </>
    )
}

export default Service