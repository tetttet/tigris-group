import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const companies = [
    {
        src: '/assets/company/international-forum-on-accreditation.png',
        alt: 'International Forum on Accreditation',
        link: '#',
        width: 'w-11',
        height: 'h-11',
    },
    {
        src: '/assets/company/international-accreditation-service-removebg.png',
        alt: 'International Accreditation Service',
        link: '',
        width: 'w-28',
        height: 'h-10',
    },
    {
        src: '/assets/company/international-organization-for-standardization.png',
        alt: 'International Organization for Standardization',
        link: '#',
        width: 'w-32',
        height: 'h-10',
    },
    {
        src: '/assets/company/tursab-removebg.png',
        alt: 'TURSAB',
        link: '',
        width: 'w-20',
        height: 'h-10',
    },
    {
        src: '/assets/company/asta-removebg.png',
        alt: 'ASTA',
        link: '',
        width: 'w-20',
        height: 'h-10',
    },
    {
        src: '/assets/company/jata-removebg.png',
        alt: 'JATA',
        link: '',
        width: 'w-20',
        height: 'h-12',
    },
    {
        src: '/assets/company/uftaa-removebg.png',
        alt: 'UFTAA',
        link: '',
        width: 'w-15',
        height: 'h-18',
    },
    {
        src: '/assets/company/iata-removebg.png',
        alt: 'IATA',
        link: '',
        width: 'w-20',
        height: 'h-18',
    },
];

const HeroTig = () => {
    const { t } = useTranslation();

    return (
        <section
            id="home"
            className="relative mb-10 lg:mb-0 overflow-hidden bg-slate-400 pt-[120px] md:pt-[130px] lg:pt-[100px]"
        >
            <div className="container">
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4">
                        <div
                            className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                            data-wow-delay=".2s"
                        >
                            <h1 className="mb-6 text-3xl font-bold leading-snug text-black sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                                {t("welcomeMessage")}{" "}<span className="bg-gradient-to-r from-blue-700 to-blue-900 text-transparent bg-clip-text">
                                    {t("companyName")}
                                </span>
                            </h1>
                            <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-gray-900 sm:text-lg sm:leading-[1.44]">
                                {t("companyDescription")}
                            </p>

                            <div>
                                <p className="mb-4 text-center text-base font-medium text-white/60">
                                    {t("subtitle")}
                                </p>
                                <div className="wow fadeInUp flex items-center justify-center gap-4 text-center" data-wow-delay=".3s">
                                    {companies.map((company, index) => (
                                        <Link
                                            key={index}
                                            to={company.link}
                                            className="text-white/60 duration-300 ease-in-out hover:text-white"
                                        >
                                            <img
                                                className={`fill-current ${company.width} ${company.height}`}
                                                src={company.src}
                                                alt={company.alt}
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full px-4">
                        <div
                            className="wow fadeInUp relative z-10 mx-auto max-w-[845px]"
                            data-wow-delay=".25s"
                        >
                            <div className="mt-16">
                                <img
                                    src="/assets/images/hero/hero.jpg"
                                    alt="hero"
                                    className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                                    width={845}
                                    height={316}
                                />
                            </div>
                            <div className="absolute -left-9 bottom-0 z-[-1]">
                                <svg
                                    width="134"
                                    height="106"
                                    viewBox="0 0 134 106"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="1.66667"
                                        cy="104"
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 104)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="16.3333"
                                        cy="104"
                                        r="1.66667"
                                        transform="rotate(-90 16.3333 104)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="31"
                                        cy="104"
                                        r="1.66667"
                                        transform="rotate(-90 31 104)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="45.6667"
                                        cy="104"
                                        r="1.66667"
                                        transform="rotate(-90 45.6667 104)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="60.3333"
                                        cy="104"
                                        r="1.66667"
                                        transform="rotate(-90 60.3333 104)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="88.6667"
                                        cy="104"
                                        r="1.66667"
                                        transform="rotate(-90 88.6667 104)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="117.667"
                                        cy="104"
                                        r="1.66667"
                                        transform="rotate(-90 117.667 104)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="74.6667"
                                        cy="104"
                                        r="1.66667"
                                        transform="rotate(-90 74.6667 104)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="103"
                                        cy="104"
                                        r="1.66667"
                                        transform="rotate(-90 103 104)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="132"
                                        cy="104"
                                        r="1.66667"
                                        transform="rotate(-90 132 104)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="1.66667"
                                        cy="89.3333"
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 89.3333)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="16.3333"
                                        cy="89.3333"
                                        r="1.66667"
                                        transform="rotate(-90 16.3333 89.3333)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="31"
                                        cy="89.3333"
                                        r="1.66667"
                                        transform="rotate(-90 31 89.3333)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="45.6667"
                                        cy="89.3333"
                                        r="1.66667"
                                        transform="rotate(-90 45.6667 89.3333)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="60.3333"
                                        cy="89.3338"
                                        r="1.66667"
                                        transform="rotate(-90 60.3333 89.3338)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="88.6667"
                                        cy="89.3338"
                                        r="1.66667"
                                        transform="rotate(-90 88.6667 89.3338)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="117.667"
                                        cy="89.3338"
                                        r="1.66667"
                                        transform="rotate(-90 117.667 89.3338)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="74.6667"
                                        cy="89.3338"
                                        r="1.66667"
                                        transform="rotate(-90 74.6667 89.3338)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="103"
                                        cy="89.3338"
                                        r="1.66667"
                                        transform="rotate(-90 103 89.3338)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="132"
                                        cy="89.3338"
                                        r="1.66667"
                                        transform="rotate(-90 132 89.3338)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="1.66667"
                                        cy="74.6673"
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 74.6673)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="1.66667"
                                        cy="31.0003"
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 31.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="16.3333"
                                        cy="74.6668"
                                        r="1.66667"
                                        transform="rotate(-90 16.3333 74.6668)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="16.3333"
                                        cy="31.0003"
                                        r="1.66667"
                                        transform="rotate(-90 16.3333 31.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="31"
                                        cy="74.6668"
                                        r="1.66667"
                                        transform="rotate(-90 31 74.6668)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="31"
                                        cy="31.0003"
                                        r="1.66667"
                                        transform="rotate(-90 31 31.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="45.6667"
                                        cy="74.6668"
                                        r="1.66667"
                                        transform="rotate(-90 45.6667 74.6668)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="45.6667"
                                        cy="31.0003"
                                        r="1.66667"
                                        transform="rotate(-90 45.6667 31.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="60.3333"
                                        cy="74.6668"
                                        r="1.66667"
                                        transform="rotate(-90 60.3333 74.6668)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="60.3333"
                                        cy="31.0001"
                                        r="1.66667"
                                        transform="rotate(-90 60.3333 31.0001)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="88.6667"
                                        cy="74.6668"
                                        r="1.66667"
                                        transform="rotate(-90 88.6667 74.6668)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="88.6667"
                                        cy="31.0001"
                                        r="1.66667"
                                        transform="rotate(-90 88.6667 31.0001)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="117.667"
                                        cy="74.6668"
                                        r="1.66667"
                                        transform="rotate(-90 117.667 74.6668)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="117.667"
                                        cy="31.0001"
                                        r="1.66667"
                                        transform="rotate(-90 117.667 31.0001)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="74.6667"
                                        cy="74.6668"
                                        r="1.66667"
                                        transform="rotate(-90 74.6667 74.6668)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="74.6667"
                                        cy="31.0001"
                                        r="1.66667"
                                        transform="rotate(-90 74.6667 31.0001)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="103"
                                        cy="74.6668"
                                        r="1.66667"
                                        transform="rotate(-90 103 74.6668)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="103"
                                        cy="31.0001"
                                        r="1.66667"
                                        transform="rotate(-90 103 31.0001)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="132"
                                        cy="74.6668"
                                        r="1.66667"
                                        transform="rotate(-90 132 74.6668)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="132"
                                        cy="31.0001"
                                        r="1.66667"
                                        transform="rotate(-90 132 31.0001)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="1.66667"
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 60.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="1.66667"
                                        cy="16.3336"
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 16.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="16.3333"
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 16.3333 60.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="16.3333"
                                        cy="16.3336"
                                        r="1.66667"
                                        transform="rotate(-90 16.3333 16.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="31"
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 31 60.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="31"
                                        cy="16.3336"
                                        r="1.66667"
                                        transform="rotate(-90 31 16.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="45.6667"
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 45.6667 60.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="45.6667"
                                        cy="16.3336"
                                        r="1.66667"
                                        transform="rotate(-90 45.6667 16.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="60.3333"
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 60.3333 60.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="60.3333"
                                        cy="16.3336"
                                        r="1.66667"
                                        transform="rotate(-90 60.3333 16.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="88.6667"
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 88.6667 60.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="88.6667"
                                        cy="16.3336"
                                        r="1.66667"
                                        transform="rotate(-90 88.6667 16.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="117.667"
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 117.667 60.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="117.667"
                                        cy="16.3336"
                                        r="1.66667"
                                        transform="rotate(-90 117.667 16.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="74.6667"
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 74.6667 60.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="74.6667"
                                        cy="16.3336"
                                        r="1.66667"
                                        transform="rotate(-90 74.6667 16.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="103"
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 103 60.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="103"
                                        cy="16.3336"
                                        r="1.66667"
                                        transform="rotate(-90 103 16.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="132"
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 132 60.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="132"
                                        cy="16.3336"
                                        r="1.66667"
                                        transform="rotate(-90 132 16.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="1.66667"
                                        cy="45.3336"
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 45.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="1.66667"
                                        cy="1.66683"
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 1.66683)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="16.3333"
                                        cy="45.3336"
                                        r="1.66667"
                                        transform="rotate(-90 16.3333 45.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="16.3333"
                                        cy="1.66683"
                                        r="1.66667"
                                        transform="rotate(-90 16.3333 1.66683)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="31"
                                        cy="45.3336"
                                        r="1.66667"
                                        transform="rotate(-90 31 45.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="31"
                                        cy="1.66683"
                                        r="1.66667"
                                        transform="rotate(-90 31 1.66683)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="45.6667"
                                        cy="45.3336"
                                        r="1.66667"
                                        transform="rotate(-90 45.6667 45.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="45.6667"
                                        cy="1.66683"
                                        r="1.66667"
                                        transform="rotate(-90 45.6667 1.66683)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="60.3333"
                                        cy="45.3338"
                                        r="1.66667"
                                        transform="rotate(-90 60.3333 45.3338)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="60.3333"
                                        cy="1.66707"
                                        r="1.66667"
                                        transform="rotate(-90 60.3333 1.66707)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="88.6667"
                                        cy="45.3338"
                                        r="1.66667"
                                        transform="rotate(-90 88.6667 45.3338)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="88.6667"
                                        cy="1.66707"
                                        r="1.66667"
                                        transform="rotate(-90 88.6667 1.66707)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="117.667"
                                        cy="45.3338"
                                        r="1.66667"
                                        transform="rotate(-90 117.667 45.3338)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="117.667"
                                        cy="1.66707"
                                        r="1.66667"
                                        transform="rotate(-90 117.667 1.66707)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="74.6667"
                                        cy="45.3338"
                                        r="1.66667"
                                        transform="rotate(-90 74.6667 45.3338)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="74.6667"
                                        cy="1.66707"
                                        r="1.66667"
                                        transform="rotate(-90 74.6667 1.66707)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="103"
                                        cy="45.3338"
                                        r="1.66667"
                                        transform="rotate(-90 103 45.3338)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="103"
                                        cy="1.66707"
                                        r="1.66667"
                                        transform="rotate(-90 103 1.66707)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="132"
                                        cy="45.3338"
                                        r="1.66667"
                                        transform="rotate(-90 132 45.3338)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="132"
                                        cy="1.66707"
                                        r="1.66667"
                                        transform="rotate(-90 132 1.66707)"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <div className="absolute -right-6 -top-6 z-[-1]">
                                <svg
                                    width="134"
                                    height="106"
                                    viewBox="0 0 134 106"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="1.66667"
                                        cy="104"
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 104)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="16.3333"
                                        cy="104"
                                        r="1.66667"
                                        transform="rotate(-90 16.3333 104)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="31"
                                        cy="104"
                                        r="1.66667"
                                        transform="rotate(-90 31 104)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="45.6667"
                                        cy="104"
                                        r="1.66667"
                                        transform="rotate(-90 45.6667 104)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="60.3333"
                                        cy="104"
                                        r="1.66667"
                                        transform="rotate(-90 60.3333 104)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="88.6667"
                                        cy="104"
                                        r="1.66667"
                                        transform="rotate(-90 88.6667 104)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="117.667"
                                        cy="104"
                                        r="1.66667"
                                        transform="rotate(-90 117.667 104)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="74.6667"
                                        cy="104"
                                        r="1.66667"
                                        transform="rotate(-90 74.6667 104)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="103"
                                        cy="104"
                                        r="1.66667"
                                        transform="rotate(-90 103 104)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="132"
                                        cy="104"
                                        r="1.66667"
                                        transform="rotate(-90 132 104)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="1.66667"
                                        cy="89.3333"
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 89.3333)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="16.3333"
                                        cy="89.3333"
                                        r="1.66667"
                                        transform="rotate(-90 16.3333 89.3333)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="31"
                                        cy="89.3333"
                                        r="1.66667"
                                        transform="rotate(-90 31 89.3333)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="45.6667"
                                        cy="89.3333"
                                        r="1.66667"
                                        transform="rotate(-90 45.6667 89.3333)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="60.3333"
                                        cy="89.3338"
                                        r="1.66667"
                                        transform="rotate(-90 60.3333 89.3338)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="88.6667"
                                        cy="89.3338"
                                        r="1.66667"
                                        transform="rotate(-90 88.6667 89.3338)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="117.667"
                                        cy="89.3338"
                                        r="1.66667"
                                        transform="rotate(-90 117.667 89.3338)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="74.6667"
                                        cy="89.3338"
                                        r="1.66667"
                                        transform="rotate(-90 74.6667 89.3338)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="103"
                                        cy="89.3338"
                                        r="1.66667"
                                        transform="rotate(-90 103 89.3338)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="132"
                                        cy="89.3338"
                                        r="1.66667"
                                        transform="rotate(-90 132 89.3338)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="1.66667"
                                        cy="74.6673"
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 74.6673)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="1.66667"
                                        cy="31.0003"
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 31.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="16.3333"
                                        cy="74.6668"
                                        r="1.66667"
                                        transform="rotate(-90 16.3333 74.6668)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="16.3333"
                                        cy="31.0003"
                                        r="1.66667"
                                        transform="rotate(-90 16.3333 31.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="31"
                                        cy="74.6668"
                                        r="1.66667"
                                        transform="rotate(-90 31 74.6668)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="31"
                                        cy="31.0003"
                                        r="1.66667"
                                        transform="rotate(-90 31 31.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="45.6667"
                                        cy="74.6668"
                                        r="1.66667"
                                        transform="rotate(-90 45.6667 74.6668)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="45.6667"
                                        cy="31.0003"
                                        r="1.66667"
                                        transform="rotate(-90 45.6667 31.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="60.3333"
                                        cy="74.6668"
                                        r="1.66667"
                                        transform="rotate(-90 60.3333 74.6668)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="60.3333"
                                        cy="31.0001"
                                        r="1.66667"
                                        transform="rotate(-90 60.3333 31.0001)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="88.6667"
                                        cy="74.6668"
                                        r="1.66667"
                                        transform="rotate(-90 88.6667 74.6668)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="88.6667"
                                        cy="31.0001"
                                        r="1.66667"
                                        transform="rotate(-90 88.6667 31.0001)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="117.667"
                                        cy="74.6668"
                                        r="1.66667"
                                        transform="rotate(-90 117.667 74.6668)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="117.667"
                                        cy="31.0001"
                                        r="1.66667"
                                        transform="rotate(-90 117.667 31.0001)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="74.6667"
                                        cy="74.6668"
                                        r="1.66667"
                                        transform="rotate(-90 74.6667 74.6668)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="74.6667"
                                        cy="31.0001"
                                        r="1.66667"
                                        transform="rotate(-90 74.6667 31.0001)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="103"
                                        cy="74.6668"
                                        r="1.66667"
                                        transform="rotate(-90 103 74.6668)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="103"
                                        cy="31.0001"
                                        r="1.66667"
                                        transform="rotate(-90 103 31.0001)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="132"
                                        cy="74.6668"
                                        r="1.66667"
                                        transform="rotate(-90 132 74.6668)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="132"
                                        cy="31.0001"
                                        r="1.66667"
                                        transform="rotate(-90 132 31.0001)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="1.66667"
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 60.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="1.66667"
                                        cy="16.3336"
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 16.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="16.3333"
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 16.3333 60.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="16.3333"
                                        cy="16.3336"
                                        r="1.66667"
                                        transform="rotate(-90 16.3333 16.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="31"
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 31 60.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="31"
                                        cy="16.3336"
                                        r="1.66667"
                                        transform="rotate(-90 31 16.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="45.6667"
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 45.6667 60.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="45.6667"
                                        cy="16.3336"
                                        r="1.66667"
                                        transform="rotate(-90 45.6667 16.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="60.3333"
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 60.3333 60.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="60.3333"
                                        cy="16.3336"
                                        r="1.66667"
                                        transform="rotate(-90 60.3333 16.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="88.6667"
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 88.6667 60.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="88.6667"
                                        cy="16.3336"
                                        r="1.66667"
                                        transform="rotate(-90 88.6667 16.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="117.667"
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 117.667 60.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="117.667"
                                        cy="16.3336"
                                        r="1.66667"
                                        transform="rotate(-90 117.667 16.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="74.6667"
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 74.6667 60.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="74.6667"
                                        cy="16.3336"
                                        r="1.66667"
                                        transform="rotate(-90 74.6667 16.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="103"
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 103 60.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="103"
                                        cy="16.3336"
                                        r="1.66667"
                                        transform="rotate(-90 103 16.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="132"
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 132 60.0003)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="132"
                                        cy="16.3336"
                                        r="1.66667"
                                        transform="rotate(-90 132 16.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="1.66667"
                                        cy="45.3336"
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 45.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="1.66667"
                                        cy="1.66683"
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 1.66683)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="16.3333"
                                        cy="45.3336"
                                        r="1.66667"
                                        transform="rotate(-90 16.3333 45.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="16.3333"
                                        cy="1.66683"
                                        r="1.66667"
                                        transform="rotate(-90 16.3333 1.66683)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="31"
                                        cy="45.3336"
                                        r="1.66667"
                                        transform="rotate(-90 31 45.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="31"
                                        cy="1.66683"
                                        r="1.66667"
                                        transform="rotate(-90 31 1.66683)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="45.6667"
                                        cy="45.3336"
                                        r="1.66667"
                                        transform="rotate(-90 45.6667 45.3336)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="45.6667"
                                        cy="1.66683"
                                        r="1.66667"
                                        transform="rotate(-90 45.6667 1.66683)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="60.3333"
                                        cy="45.3338"
                                        r="1.66667"
                                        transform="rotate(-90 60.3333 45.3338)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="60.3333"
                                        cy="1.66707"
                                        r="1.66667"
                                        transform="rotate(-90 60.3333 1.66707)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="88.6667"
                                        cy="45.3338"
                                        r="1.66667"
                                        transform="rotate(-90 88.6667 45.3338)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="88.6667"
                                        cy="1.66707"
                                        r="1.66667"
                                        transform="rotate(-90 88.6667 1.66707)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="117.667"
                                        cy="45.3338"
                                        r="1.66667"
                                        transform="rotate(-90 117.667 45.3338)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="117.667"
                                        cy="1.66707"
                                        r="1.66667"
                                        transform="rotate(-90 117.667 1.66707)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="74.6667"
                                        cy="45.3338"
                                        r="1.66667"
                                        transform="rotate(-90 74.6667 45.3338)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="74.6667"
                                        cy="1.66707"
                                        r="1.66667"
                                        transform="rotate(-90 74.6667 1.66707)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="103"
                                        cy="45.3338"
                                        r="1.66667"
                                        transform="rotate(-90 103 45.3338)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="103"
                                        cy="1.66707"
                                        r="1.66667"
                                        transform="rotate(-90 103 1.66707)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="132"
                                        cy="45.3338"
                                        r="1.66667"
                                        transform="rotate(-90 132 45.3338)"
                                        fill="white"
                                    />
                                    <circle
                                        cx="132"
                                        cy="1.66707"
                                        r="1.66667"
                                        transform="rotate(-90 132 1.66707)"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroTig;