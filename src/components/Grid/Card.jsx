import { Link } from 'react-router-dom'
import img1 from '../../assets/features/urology-treatments_mobile.png'
import img2 from '../../assets/features/ear-nose-or-throat-treatment.jpg'
import img3 from '../../assets/features/dental_care.jpg'

const industries = [
    {
        title: "Urology Treatments",
        image: img1,
        description: "As Tigris Group, we offer intermediary healthcare services, facilitating urology procedures for our patients with expert medical guidance and seamless coordination."
    },
    {
        title: "Ear Nose Throat treatments",
        image: img2,
        description: "As Tigris Group, we serve as an intermediary healthcare provider, ensuring our guests receive the highest quality care for ENT treatments through our trusted medical network."
    },
    {
        title: "Dental Care",
        image: img3,
        description: "As Tigris Group, we provide intermediary healthcare services, ensuring safe, comfortable, and high-quality oral and dental treatments for our guests."
    }
]

const Card = () => {
    return (
        <section className="bg-gradient-to-r from-white to-blue-50 py-20">
            <div className="w-full border-t border-gray-200 mb-12"></div>

            <div className="relative mx-auto max-w-screen-xl px-6 lg:px-12">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-800">Intermediary Health Services</h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Comprehensive support for international patients, connecting them with expert medical care and tailored treatment solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, index) => (
                        <Link
                            to="#"
                            key={index}
                            className="group rounded-2xl bg-white/60 backdrop-blur-md p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/30"
                        >
                            <div className="overflow-hidden rounded-xl h-48 mb-6">
                                <img
                                    src={industry.image}
                                    alt={industry.title}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">{industry.title}</h3>
                            <p className="mt-3 text-gray-600 text-base leading-relaxed">
                                {industry.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="w-full border-t border-gray-200 mt-16"></div>
        </section>
    );
};


export default Card
