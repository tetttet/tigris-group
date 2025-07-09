import { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import { FaAmbulance, FaCapsules, FaStethoscope } from 'react-icons/fa';
import { X } from "lucide-react";

import img from "../../assets/about/features.jpg"
import img4 from "../../assets/hero/hero5.jpg";
import { useTranslation } from "react-i18next";

export const Feature = () => {
    const { t } = useTranslation("tigris.web.page");
    const agency = "/assets/block/agency.jpg";
    return (
        <div className="bg-gray-50">
            <div className="max-w-screen-2xl mx-auto md:px-16">
                <div className="lg:flex items-center gap-x-12">
                    <div className=" ml-15 mr-48">
                        <img src={agency} className="hidden lg:block md:max-w-md sm:rounded-lg" alt="" />
                    </div>
                    <div className="max-w-xl px-4 mt-6 sm:px-0 lg:max-w-2xl">
                        <h3 className="primary-text-blue font-semibold text-2xl">
                            {t("feature.title1")}
                        </h3>
                        <p className="text-gray-800 text-2xl font-semibold sm:text-3xl">
                            {t("feature.title2")}
                        </p>
                        <p className="mt-3 text-gray-600">
                            {t("feature.desc1")}
                        </p>
                        <br />
                        <h3 className="primary-text-blue font-semibold text-2xl">
                            {t("feature.title3")}
                        </h3>
                        <p className="mt-3 text-gray-600">
                            {t("feature.desc2")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const FeaturesSection = () => {
    const img_feature_1 = "https://plus.unsplash.com/premium_vector-1745409708587-7507675d0a1a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY3fHxkb2N0b3J8ZW58MHx8MHx8fDA%3D"
    const img_feature_2 = "https://plus.unsplash.com/premium_vector-1745409708533-5d4bf86d87ef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg5fHxkb2N0b3J8ZW58MHx8MHx8fDA%3D"
    const img_feature_3 = "https://plus.unsplash.com/premium_vector-1682269614096-0d0ec6e4f848?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzEzfHxkb2N0b3J8ZW58MHx8MHx8fDA%3D"

    return (
        <section className="features py-20 bg-gradient-to-b from-white to-[#f4f6fa]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold text-gray-800 mb-4 tracking-tight">
                        We Are Always Ready to Help You & Your Family
                    </h2>
                    <p className="text-lg text-gray-500">
                        Compassionate care, innovative service, and trusted support — always within reach.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Card Template */}
                    {[{
                        title: "Emergency Help",
                        description: "Quick and reliable response whenever you need it most — 24/7 care and attention.",
                        image: img_feature_1,
                        alt: "Emergency Help"
                    }, {
                        title: "Enriched Pharmacy",
                        description: "Trusted medicine and expert advice — all in one modern, clean experience.",
                        image: img_feature_2,
                        alt: "Enriched Pharmacy"
                    }, {
                        title: "Medical Treatment",
                        description: "High-quality care delivered with precision, empathy, and the latest technology.",
                        image: img_feature_3,
                        alt: "Medical Treatment"
                    }].map(({ title, description, image, alt }) => (
                        <div
                            key={title}
                            className="bg-white/70 backdrop-blur-md border border-gray-200 p-8 rounded-2xl shadow-lg transition-all hover:shadow-xl"
                        >
                            <div className="w-full h-48 mb-6 flex items-center justify-center overflow-hidden">
                                <img
                                    src={image}
                                    alt={alt}
                                    className="h-full object-contain"
                                />
                            </div>
                            <h3 className="text-2xl font-medium text-gray-800 mb-2">{title}</h3>
                            <p className="text-gray-600">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

};

export const PortfolioSection = () => {
    const portfolioItems = [
        {
            id: 1, imgSrc:
                "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lZGljaW5lfGVufDB8fDB8fHww", link: "portfolio-details.html"
        },
        {
            id: 2, imgSrc:
                "https://plus.unsplash.com/premium_photo-1676035056089-41dc34558ac6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1lZGljaW5lfGVufDB8fDB8fHww", link: "portfolio-details.html"
        },
        {
            id: 3, imgSrc:
                "https://plus.unsplash.com/premium_photo-1674499074438-8f611a3569f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG1lZGljaW5lfGVufDB8fDB8fHww", link: "portfolio-details.html"
        },
        {
            id: 4, imgSrc:
                "https://images.unsplash.com/photo-1639772823849-6efbd173043c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fG1lZGljaW5lfGVufDB8fDB8fHww", link: "portfolio-details.html"
        },
        {
            id: 5, imgSrc:
                "https://images.unsplash.com/photo-1639772823907-a716be4bdecc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fG1lZGljaW5lfGVufDB8fDB8fHww", link: "portfolio-details.html"
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className="w-full py-20 px-6">
            <div className="max-w-11/12 mx-auto">
                <div className="rounded-3xl bg-white/50 backdrop-blur-md p-6">
                    <Slider {...settings}>
                        {portfolioItems.map(item => (
                            <div key={item.id} className="px-4">
                                <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                    <img
                                        src={item.imgSrc}
                                        alt={`portfolio-item-${item.id}`}
                                        className="w-full object-cover h-72 rounded-2xl"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export const Banner = () => {
    const { t } = useTranslation("header");
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <section className="w-full border-b bg-white px-4 py-3 shadow-sm">
            <div className="flex items-center justify-between gap-2">
                <div className="flex-1 text-center">
                    <span className="text-sm">
                        <span className="font-medium">{t("banner.text")}</span>{" "}
                        <span className="text-muted-foreground">
                            {t("banner.check")}{" "}
                            <a
                                href="#"
                                className="underline underline-offset-4 hover:text-foreground"
                                target="_blank"
                            >
                                {t("banner.policy")}
                            </a>
                            .
                        </span>
                    </span>
                </div>

                <button
                    size="icon"
                    className="-mr-2 h-8 w-8 flex-none"
                    onClick={handleClose}
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        </section>
    );
};

export const BannerSection = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <section className="w-full border-b bg-white px-4 py-3 shadow-sm">
            <div className="flex items-center justify-between gap-2">
                <div className="flex-1 text-center">
                    <span className="text-sm">
                        <span className="font-medium">Tigris Group use Cookies!</span>{" "}
                        <span className="text-muted-foreground">
                            Check out all the{" "}
                            <a
                                href="#"
                                className="underline underline-offset-4 hover:text-foreground"
                                target="_blank"
                            >
                                our policy
                            </a>
                            .
                        </span>
                    </span>
                </div>

                <button
                    size="icon"
                    className="-mr-2 h-8 w-8 flex-none"
                    onClick={handleClose}
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        </section>
    );
};

export const CastIronInfo = () => {
    return (
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-6 gap-6">
            <div className="md:w-2/3 space-y-4">
                <h1 className="text-3xl font-bold">
                    Tigris Group - это профессиональные услуги
                </h1>
                <p>
                    At Tigris, our mission is to empower individuals and organizations by providing top-tier educational experiences that drive success. We strive to bridge the gap between theoretical knowledge and practical application, ensuring that our users gain real-world skills that translate into meaningful career and personal development.
                </p>
                <p>
                    We believe that knowledge should be accessible, engaging, and tailored to real-world applications. That’s why we continuously innovate to bring you the best tools and content to facilitate your learning and growth.
                </p>
                <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
                        Delivering high-quality, industry-relevant courses
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
                        Creating an interactive and engaging learning environment
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
                        Supporting lifelong learning and career advancement
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
                        Utilizing advanced technology to enhance education
                    </li>
                </ul>
                <img
                    src={img4}
                    alt=""
                    className="w-full rounded-lg shadow-md"
                />
            </div>

            {/* Правая часть для текста */}
            <div className="md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold">Дополнительная информация</h2>
                <p className="mt-2 text-gray-700">

                </p>
                <p className="mt-2 text-gray-700">
                    Tigris is a forward-thinking company dedicated to revolutionizing the way individuals and businesses access high-quality educational resources and professional development opportunities. Our platform is built with cutting-edge technology to provide seamless and immersive learning experiences. Whether you are looking to upskill, explore new fields, or enhance your workforce’s capabilities, Tigris is your trusted partner on this journey.
                </p>
            </div>
        </div>
    );
}

export const Clients = () => {
    return (
        <section className="my-20 mt-20 bg-gray-50">
            <div className="container mx-auto px-4"> <div className="flex flex-wrap items-center mt-32">
                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                    <h3 className="text-3xl mb-2 font-semibold leading-normal">
                        Работать с {" "}
                        <span className="primary-tx-blue-whiter font-bold">
                            TIGRIS HEALTH</span> — это просто
                    </h3>
                    <p className="text-gray-600 text-lg font-light leading-relaxed mt-4 mb-4">
                        В {" "}
                        <span className="primary-tx-blue-whiter font-semibold">
                            TIGRIS HEALTH</span> мы ставим здоровье пациентов на первое место. Наша команда врачей и специалистов использует современные технологии, чтобы обеспечить точную диагностику и эффективное лечение.
                    </p>
                    <p className="text-gray-600 text-lg font-light leading-relaxed mt-0 mb-8">
                        Мы предлагаем комплексный подход к каждому пациенту, начиная с консультаций и заканчивая реабилитацией. Нам доверяют тысячи людей за профессионализм, заботу и индивидуальный подход.
                        <br />
                        <span className="primary-tx-blue-whiter font-semibold">
                            TIGRIS HEALTH</span> — ваш надёжный партнёр в заботе о здоровье.
                    </p>
                    <Link to="/" className="font-bold border p-2 primary-br-blue-whiter mt-10 rounded-lg text-gray-600 hover:bg-gray-100">
                        Ознакомьтесь с нашими услугами
                    </Link>
                </div>

                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto pt-7">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 ">
                        <img
                            alt="..."
                            src={img}
                            className="w-full align-middle rounded-3xl"
                        />
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export const ContactSection = () => {
    const { t } = useTranslation("tigris.web.page");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const closeModalOnClickOutside = (e) => {
        if (e.target === e.currentTarget) {
            setIsModalOpen(false);
        }
    };

    const locations = [
        {
            title: t("gettouch.location.title1"),
            address: t("gettouch.location.desc1"),
            image: "/assets/block/contact1.jpg",
        },
        {
            title: t("gettouch.location.title2"),
            address: t("gettouch.location.desc2"),
            image: "/assets/block/contact2.jpg",
        },
        {
            title: t("gettouch.location.title3"),
            address: t("gettouch.location.desc3"),
            image: "/assets/block/contact3.jpg",
        },
        {
            title: t("gettouch.location.title4"),
            address: t("gettouch.location.desc4"),
            image: "/assets/block/contact4.jpg",
        },
    ];

    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="md:flex gap-x-24 clear-left md:mb-16 mb-10">
                    <div className="md:mb-0 mb-4">
                        <h2 className="text-black font-manrope text-4xl font-semibold leading-10 mb-5 md:text-left text-center">
                            {t("gettouch.title")}
                        </h2>
                        <p className="text-gray-600 text-lg font-normal leading-7 mb-7 md:text-left text-center">
                            {t("gettouch.desc")}
                        </p>
                        <div className="flex md:items-center md:justify-start justify-center">
                            <button
                                onClick={toggleModal}
                                className="w-36 h-12 rounded-lg primary-bg-blue-header transition-all duration-700 hover:bg-indigo-800 shadow text-white text-center text-base font-semibold leading-6"
                            >
                                {t("gettouch.contactus")}
                            </button>
                        </div>
                    </div>
                    <div className="border-l-2 md:border-blue-600 border-white px-10 py-6">
                        <div className="mb-8">
                            <h6 className="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center">
                                {t("gettouch.email")}
                            </h6>
                            <h3 className="text-black text-xl font-semibold leading-8 md:text-start text-center">
                                pagedone@gmail.com
                            </h3>
                        </div>
                        <div>
                            <h6 className="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center">
                                {t("gettouch.phone")}
                            </h6>
                            <h3 className="text-black text-xl font-semibold leading-8 md:text-start text-center">
                                470-601-1911
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
                    {locations.map((location, index) => (
                        <div key={index} className="h-96 relative flex justify-center">
                            <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>
                            <img
                                src={location.image}
                                alt={`${location.title} image`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 mb-6 text-center px-6">
                                <h5 className="text-white text-lg font-semibold leading-7 mb-2">{location.title}</h5>
                                <p className="text-white text-base font-medium leading-6">{location.address}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <div
                    onClick={closeModalOnClickOutside}
                    className="fixed inset-0 transparent-background flex justify-center items-center z-50"
                >
                    <div
                        className="bg-white p-8 rounded-lg w-96 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="text-xl font-semibold text-center mb-4">
                            {t("gettouch.contactus")}
                        </h3>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    {t("gettouch.modal.firstname")}
                                </label>
                                <input type="text" className="w-full px-4 py-2 border rounded-md border-gray-400" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    {t("gettouch.modal.lastname")}
                                </label>
                                <input type="text" className="w-full px-4 py-2 border rounded-md border-gray-400" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    {t("gettouch.modal.email")}
                                </label>
                                <input type="email" className="w-full px-4 py-2 border rounded-md border-gray-400" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    {t("gettouch.modal.phone")}
                                </label>
                                <input type="text" className="w-full px-4 py-2 border rounded-md border-gray-400" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    {t("gettouch.modal.message")}
                                </label>
                                <textarea className="w-full px-4 py-2 border rounded-md border-gray-400" rows="4"></textarea>
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="w-full py-2 primary-bg-blue-header text-white rounded-md hover:bg-indigo-700">
                                    {t("gettouch.modal.send")}
                                </button>
                            </div>
                        </form>
                        <button
                            onClick={toggleModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export const PortSection = () => {
    const { t } = useTranslation("tigris.web.page");
    const items = [
        {
            image: '/assets/block/gallery1.jpg',
            title: t("port.items.title1"),
            description: t("port.items.desc1"),
            bgPosition: 'end',
            isMainImage: true,
        },
        {
            image: '/assets/block/gallery2.jpg',
            title: '',
            description: '',
            isMainImage: false,
        },
        {
            image: '/assets/block/gallery5.jpg',
            title: '',
            description: '',
            isMainImage: false,
        },
        {
            image: '/assets/block/gallery4.jpg',
            title: '',
            description: '',
            isMainImage: false,
        },
        {
            image: '/assets/block/gallery6.jpg',
            title: t("port.items.title2"),
            description: t("port.items.desc2"),
            bgPosition: 'start',
            isMainImage: true,
        },
        {
            image: '/assets/block/gallery3.jpg',
            title: '',
            description: '',
            isMainImage: false,
        },
        {
            image: '/assets/block/gallery9.jpg',
            title: t("port.items.title3"),
            description: t("port.items.desc3"),
            bgPosition: 'end',
            isMainImage: true,
        },
        {
            image: '/assets/block/gallery8.jpg',
            title: t("port.items.title4"),
            description: t("port.items.desc4"),
            bgPosition: 'end',
            isMainImage: true,
        },
    ];

    return (
        <section className="mb-20 relative">
            <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto">
                <div className="flex items-center justify-center flex-col gap-5 mb-14">
                    <span className="bg-indigo-50 primary-text-blue text-xs font-medium px-3.5 py-1 rounded-full">
                        {t("port.title")}
                    </span>
                    <h2 className="font-manrope font-bold text-4xl text-gray-900 text-center">
                        <span className="primary-text-blue">{t("tigris")}</span>{t("port.subtitle")}
                    </h2>
                    <p className="text-lg font-normal text-gray-500 max-w-3xl mx-auto text-center">
                        {t("port.desc")}
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-14">
                    {items.map((item, index) => (
                        item.isMainImage ? (
                            <div
                                key={index}
                                className={`sm:col-span-2 bg-cover bg-center max-md:h-80 rounded-lg flex justify-${item.bgPosition} flex-col px-7 py-6`}
                                style={{ backgroundImage: `url(${item.image})` }}
                            >
                                <h6 className="font-semibold text-xl leading-8 text-white mb-4">{item.title}</h6>
                                <p className="text-base font-normal text-white/70">{item.description}</p>
                            </div>
                        ) : (
                            <div key={index} className="block">
                                <img
                                    src={item.image}
                                    alt="Building structure image"
                                    className="w-full rounded-lg object-cover"
                                />
                            </div>
                        )
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Gallery = () => {
    const data = [
        {
            cover: "/assets/company/tursab.png",
        },
        {
            cover: "/assets/company/international-accreditation-service.png",
        },
        {
            cover: "/assets/company/international-organization-for-standardization.png",
        },
        {
            cover: "/assets/company/international-forum-on-accreditation.png",
        },
        {
            cover: "/assets/company/asta-removebg.png",
        },
        {
            cover: "/assets/company/iata-removebg.png",
        },
        {
            cover: "/assets/company/jata-removebg.png",
        },
        {
            cover: "/assets/company/uftaa-removebg.png",
        },
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 2,
        autoplay: true,
    };
    return (
        <div>
            <section className="collection">
                <div className="max-w-[60%] m-auto mx-auto py-8">
                    <Slider {...settings}>
                        {data.map((value, index) => {
                            return (
                                <div key={index} className="p-4">
                                    <img
                                        src={value.cover}
                                        alt=""
                                        className="h-18 w-22 grayscale-0 transition duration-500 ease-in-out hover:grayscale"
                                    />
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </section>
        </div>
    );
};



