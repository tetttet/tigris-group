import { motion } from "framer-motion"
import Faq from "../../components/Faq/Faq"
import Footer from "../../components/Footer/Footer"
import Item from "../../components/Grid/DoctorList"
import HeroTig from "../../components/Hero/HeroTig"
import MedNavbar from "../../components/Navbar/MedNavbar"
import AboutTig from "../../components/Sections/About"
import { Gallery, ContactSection, Feature } from "../../components/Sections/Feature"
import Promote from "../../components/Sections/Promote"
import Slider from "../../components/Slider/Slider"
import Loader from "../../components/elements/Loader"

const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
}

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
}

const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
}

const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
}

const Home1 = () => {
    return (
        <>
        <Loader />
            <MedNavbar />

            <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <HeroTig />
            </motion.div>

            <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <Slider />
            </motion.div>

            <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <AboutTig />
            </motion.div>

            <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <Promote />
            </motion.div>

            <motion.div
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <Feature />
            </motion.div>

            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <Item />
            </motion.div>

            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <ContactSection />
            </motion.div>

            <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3 }}
            >
                <Gallery />
            </motion.div>

            <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <Faq />
            </motion.div>

            <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <Footer />
            </motion.div>
        </>
    )
}

export default Home1
