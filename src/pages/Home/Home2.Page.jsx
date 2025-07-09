import { motion } from "framer-motion"
import ChatBot from "../../components/ChatBot/ChatBot"
import RunningSlogan from "../../components/elements/RunningSlogan"
import { MedFooter } from "../../components/Footer/MedFooter"
import Card from "../../components/Grid/Card"
import Social from "../../components/Item/Social"
import Navbar from "../../components/Navbar/Navbar"
import Loader from "../../components/elements/Loader"
import {
    Banner,
    Clients,
    FeaturesSection,
    PortfolioSection
} from "../../components/Sections/Feature"
import MedAbout from "../../components/Sections/MedAbout"
import { MenuContainer } from "../../components/Sections/MenuContainer"
import MedSlider from "../../components/Slider/MedSlider"
import { CarouselDemo } from "../../components/Carousel"
import MissionSection from "../../components/Mission"
import Company from "../../components/Company"

const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
}
const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}
const slideLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 }
}
const slideRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 }
}
const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 }
}

const Home2 = () => {

    return (
        <>
            <Loader />
            <Navbar />

            <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7 }}
            >
                <Banner />
            </motion.div>

            <motion.div
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <MedSlider />
            </motion.div>

            <motion.div
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <Company />
            </motion.div>

            <CarouselDemo />

            <motion.div
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <MedAbout />
            </motion.div>

            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <FeaturesSection />
            </motion.div>

            <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <PortfolioSection />
            </motion.div>

            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <Card />
            </motion.div>

            <motion.div
                variants={slideRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <MenuContainer />
            </motion.div>

            <Clients />

            <MissionSection />

            <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <RunningSlogan />
            </motion.div>

            <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <MedFooter />
            </motion.div>

            <motion.div
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7 }}
            >
                <ChatBot />
            </motion.div>

            <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <Social />
            </motion.div>
        </>
    )
}

export default Home2
