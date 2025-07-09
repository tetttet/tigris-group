import { useTranslation } from "react-i18next";

const Company = () => {
    const { t } = useTranslation("about");
    const partners = [
        {
            src: "/assets/med-company/acibadem-clinics.png",
            alt: "Acibadem Clinics",
        },
        {
            src: "/assets/med-company/medical-park-clinics.png",
            alt: "Medical Park Clinics",
        },
        {
            src: "/assets/med-company/medipol-clinics.png",
            alt: "Medipol Clinics",
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-[#eff3f8] via-white to-[#eff3f8]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold uppercase text-center text-gray-800 mb-10">
                    {t("partner")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex justify-center items-center p-4 hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={partner.src}
                                alt={partner.alt}
                                className="max-h-36 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Company;
