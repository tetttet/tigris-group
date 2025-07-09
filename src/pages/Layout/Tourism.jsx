import Breadcrumb from "../../components/elements/Breadcrumb"
import Footer from "../../components/Footer/Footer"
import Hero from "../../components/Hero/Hero"
import MedNavbar from "../../components/Navbar/MedNavbar"
import { BannerSection } from "../../components/Sections/Feature"
import ProjectGrid from "../../components/Grid/ProjectGrid"
import ReferenceGrid from "../../components/Grid/ReferenceGrid"
import TopGrid from "../../components/Grid/TopGrid"

const Tourism = () => {
  return (
    <>
        <MedNavbar />

        <Breadcrumb pageName='TIGRIS GROUP' pageDescription='TIGRIS GROUP: A Leader in National and International Events' />
        <BannerSection />
        <Hero />
        <TopGrid />
        <ProjectGrid />
        <ReferenceGrid />
        
        <Footer />
    </>
  )
}

export default Tourism