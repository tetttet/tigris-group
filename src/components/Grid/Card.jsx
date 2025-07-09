
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import img1 from '../../assets/features/urology-treatments_mobile.png';
import img2 from '../../assets/features/ear-nose-or-throat-treatment.jpg';
import img3 from '../../assets/features/dental_care.jpg';

const Card = () => {
    const { t } = useTranslation("intermediary");

    const services = t("services", { returnObjects: true });

    const images = [img1, img2, img3];

    return (
        <section className="bg-gradient-to-b from-[#f7f9fd] to-white py-20">
            <div className="w-full border-t border-gray-200 mb-12"></div>

            <div className="relative mx-auto max-w-screen-xl px-6 lg:px-12">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-800">
                        {t("section.title")}
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">{t("section.description")}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link
                            to="#"
                            key={index}
                            className="group rounded-2xl bg-white/60 backdrop-blur-md p-6 shadow-sm hover:shadow-2xl transition-all duration-300 border border-white/30"
                        >
                            <div className="overflow-hidden rounded-xl h-48 mb-6">
                                <img
                                    src={images[index]}
                                    alt={service.title}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                            <p className="mt-3 text-gray-600 text-base leading-relaxed">
                                {service.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="w-full border-t border-gray-200 mt-16"></div>
        </section>
    );
};

export default Card;
