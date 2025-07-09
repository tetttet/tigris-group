import { useTranslation } from "react-i18next";


const AboutTig = () => {
    const img1 = "/assets/images/about/about-1.jpg";
    const img2 = "/assets/images/about/about-2.jpg";
    const img3 = "/assets/images/about/about-3.jpg";
    const { t } = useTranslation("tigris.web.page");
    return (
        <section
            id="about"
            className="bg-slate-100 pb-8 pt-8 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
        >
            <div className="container">
                <div className="ml-0 lg:ml-20 mr-0 lg:mr-20" data-wow-delay=".2s">
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-4 lg:w-1/2">
                            <div className="mb-12 max-w-[540px] lg:mb-0">
                                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark text-slate-800 sm:text-[40px] sm:leading-[1.2]">
                                    <span className="primary-text-blue">{t("intro.logo")}</span>
                                </h2>
                                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                                    {t("intro.text1")}
                                    <br />
                                    {t("intro.text2")}
                                </p>
                            </div>
                        </div>

                        <div className="w-full px-4 lg:w-1/2">
                            <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                                    <div
                                        className={`relative mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px] `}
                                    >
                                        <img
                                            src={img1}
                                            alt="about image"
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                </div>

                                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                                    <div className="relative mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                                        <img
                                            src={img2}
                                            alt="about image"
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>

                                    <div className="relative mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:h-[225px] xl:h-[310px]">
                                        <img
                                            src={img3}
                                            alt="about image"
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTig;
