import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import HeroSection from "../../components/Sections/Hero"
import { motion } from "motion/react";
import Line from "../../components/Font/Line";
import Loader from "../../components/elements/Loader";

const Main = () => {

    return (
        <>
            <Loader />
            <Line>
                <Navbar />
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className=""
                >
                    <div className="max-w-7xl mx-auto px-6 pb-0 pt-10 lg:pt-0 lg:pb-30">
                        <HeroSection />
                    </div>
                    <div className="w-full border-t border-gray-300 my-4"></div>
                </motion.div>
                <Footer />
            </Line>
        </>
    )
}

export default Main