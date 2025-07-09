import { FaUserMd, FaAccusoft } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import video1 from "../../assets/tigris_intro_video2.mp4";

const MedAbout = () => {
    const { t } = useTranslation("about");

    const listItems1 = [
        t("list1.item1"),
        t("list1.item2"),
        t("list1.item3"),
    ];

    const listItems2 = [
        t("list2.item1"),
        t("list2.item2"),
        t("list2.item3"),
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-semibold text-gray-900 tracking-tight">
                        <span className="text-blue-500 font-bold">{t("title")}</span>{" "}
                        {t("sectionTitle")}
                    </h2>
                    <p className="text-lg text-gray-500 mt-4">{t("sectionDescription")}</p>
                </div>

                <div className="flex flex-wrap items-center justify-center">
                    <div className="lg:w-1/2 w-full px-4 sm:px-6 mb-12">
                        <div className="overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
                            <video
                                autoPlay
                                loop
                                muted
                                className="rounded-2xl w-full object-cover"
                            >
                                <source src={video1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full px-4 sm:px-6">
                        <div className="p-6 sm:p-10 rounded-3xl">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                {t("whoWeAre.title")}
                            </h3>
                            <p className="text-gray-600 text-base mb-4">
                                {t("whoWeAre.description1")}
                            </p>
                            <p className="text-gray-600 text-base mb-6">
                                {t("whoWeAre.description2")}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <ul className="space-y-3">
                                    {listItems1.map((item, index) => (
                                        <li key={index} className="flex items-center text-gray-700">
                                            <FaUserMd className="text-gray-500 w-5 h-5 mr-3" />
                                            <span className="text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <ul className="space-y-3">
                                    {listItems2.map((item, index) => (
                                        <li key={index} className="flex items-center text-gray-700">
                                            <FaAccusoft className="text-gray-500 w-5 h-5 mr-3" />
                                            <span className="text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MedAbout;
