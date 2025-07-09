import { Link } from "react-router-dom";
import video2 from "../../assets/tigris_intro_video2.mp4";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { HTTP_ROUTE } from "../../data";

const HeroSection = () => {
  const { t } = useTranslation();
  const video1 = "/assets/video/hero.mp4";
  const img_src = "/logo-mini-removebg.jpg";

  return (
    <motion.div
      className="flex flex-col items-center lg:mt-20 px-4"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.2,
            when: "beforeChildren",
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="sm:w-1/2">
          <motion.h1 className="text-4xl sm:text-6xl lg:text-6xl tracking-wide leading-tight">
            {t("welcomeMessage")}
          </motion.h1>
        </div>

        <motion.span
          className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text inline-block"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img className="w-80 ml-1 h-auto" src={img_src} alt="" />
        </motion.span>
      </motion.div>

      <motion.p
        className="text-lg sm:text-xl text-center mt-4 text-neutral-600 max-w-3xl"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {t("companyDescription")}
      </motion.p>

      <motion.div
        className="flex flex-col md:flex-row mt-10 justify-center w-full max-w-5xl"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <motion.div
          className="w-full md:w-1/2 mx-2 my-4 relative overflow-hidden rounded-xl"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{ aspectRatio: '16 / 9' }}
        >
          <Link to={HTTP_ROUTE.website1.path}>
            <motion.div className="absolute inset-0 z-0">
              <motion.video
                autoPlay
                loop
                muted
                className="h-full w-full object-cover"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <source src={video1} type="video/mp4" />
                {t("videoSupportMessage")}
              </motion.video>
            </motion.div>
            {/* Оверлей */}
            <div className="absolute inset-0 bg-black/30 bg-opacity-20 z-10 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">
                TIGRIS GROUP
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Видео 2 */}
        <motion.div
          className="w-full md:w-1/2 mx-2 my-4 relative overflow-hidden rounded-xl"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{ aspectRatio: '16 / 9' }}
        >
          <Link to={HTTP_ROUTE.website2.path}>
            <motion.div className="absolute inset-0 z-0">
              <motion.video
                autoPlay
                loop
                muted
                className="h-full w-full object-cover"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <source src={video2} type="video/mp4" />
                {t("videoSupportMessage")}
              </motion.video>
            </motion.div>
            {/* Оверлей */}
            <div className="absolute inset-0 bg-black/30 bg-opacity-20 z-10 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">
                TIGRIS HEALTH
              </span>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
