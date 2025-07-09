import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Faq, Doctors, About, Contact, Services, Home } from "../../hooks/header.hooks";
import Topbar from "../Sections/Topbar";
import { FaGlobe } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
    HTTP_ROUTE_MED_ABOUT,
    HTTP_ROUTE_MED_CONTACT,
    HTTP_ROUTE_MED_DOCTORS,
    HTTP_ROUTE_MED_FAQ,
    HTTP_ROUTE_MED_HOME,
    HTTP_ROUTE_MED_SERVICES
} from "./../../data.js";

const lang = [
    { code: 'en', label: 'English', icon: '🇬🇧' },
    { code: 'ru', label: 'Russian', icon: '🇷🇺' },
    { code: 'kz', label: 'Kazakh', icon: '🇰🇿' },
    { code: 'fr', label: 'French', icon: '🇫🇷' },
    { code: 'tr', label: 'Turkish', icon: '🇹🇷' },
];


const Navbar = () => {
    const logo = "/tigrisgrouplogo-removebg.png";
    const { t } = useTranslation("header");

    const navItems = [
        { to: HTTP_ROUTE_MED_ABOUT, label: t("med-navbar.about") },
        { to: HTTP_ROUTE_MED_DOCTORS, label: t("med-navbar.doctors") },
        { to: HTTP_ROUTE_MED_SERVICES, label: t("med-navbar.services") },
        { to: HTTP_ROUTE_MED_CONTACT, label: t("med-navbar.contact") },
        { to: HTTP_ROUTE_MED_FAQ, label: t("med-navbar.faq") },
    ];

    const TABS = [
        {
            title: t("med-navbar.home"),
            Component: Home,
            Link: HTTP_ROUTE_MED_HOME,
        },
        {
            title: t("med-navbar.about"),
            Component: About,
            Link: HTTP_ROUTE_MED_ABOUT,
        },
        {
            title: t("med-navbar.doctors"),
            Component: Doctors,
            Link: HTTP_ROUTE_MED_DOCTORS,
        },
        {
            title: t("med-navbar.contact"),
            Component: Contact,
            Link: HTTP_ROUTE_MED_CONTACT,
        },
        {
            title: t("med-navbar.services"),
            Component: Services,
            Link: HTTP_ROUTE_MED_SERVICES,
        },
        {
            title: t("med-navbar.faq"),
            Component: Faq,
            Link: HTTP_ROUTE_MED_FAQ,
        }
    ].map((n, idx) => ({ ...n, id: idx + 1 }));

    const { i18n } = useTranslation();
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const [dir, setDir] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedLang, setSelectedLang] = useState(lang[0].code);

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 10); // можно поменять порог
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleSetSelected = (val) => {
        if (typeof selected === "number" && typeof val === "number") {
            setDir(selected > val ? "r" : "l");
        } else if (val === null) {
            setDir(null);
        }
        setSelected(val);
    };

    const handleLanguageChange = (e) => {
        setSelectedLang(e.target.value);
        i18n.changeLanguage(e.target.value);
        console.log(`Selected language: ${e.target.value}`);
    };

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <>
            <div className="bg-gradient-to-r from-gray-100 to-gray-50">
                <Topbar />
            </div>
            <nav
                className={`border-b border-gray-300 sticky top-0 z-50 py-2 backdrop-blur-lg transition-colors duration-300 ${isScrolled ? 'bg-white/60' : 'bg-white'
                    }`}
            >
                <div className="container px-4 mx-auto relative flex justify-between items-center lg:text-sm">
                    {/* Логотип */}
                    <div className="flex items-center flex-shrink-0">
                        <Link to="/">
                            <img className="w-52 h-14 mr-2" src={logo} alt="Logo" />
                        </Link>
                    </div>

                    {/* Навигационные вкладки (для десктопа) */}
                    <div onMouseLeave={() => handleSetSelected(null)} className="relative gap-4 hidden lg:flex">
                        {TABS.map((t) => (
                            <Link to={t.Link} key={t.id}>
                                <Tab
                                    selected={selected}
                                    handleSetSelected={handleSetSelected}
                                    tab={t.id}
                                >
                                    {t.title}
                                </Tab>
                            </Link>
                        ))}
                        <AnimatePresence>
                            {selected && <Content dir={dir} selected={selected} TABS={TABS} />}
                        </AnimatePresence>
                    </div>

                    {/* Язык (для десктопа) */}
                    <div className="hidden lg:flex justify-center items-center p-2 rounded-lg">
                        <div className="flex items-center">
                            <FaGlobe className="mr-3" />
                            <select
                                onChange={handleLanguageChange}
                                value={selectedLang}
                                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                            >
                                {lang.map((language) => (
                                    <option key={language.code} value={language.code}>
                                        {language.icon} {language.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Меню для мобильных устройств */}
                    <div className="lg:hidden flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Мобильное меню */}
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-white text-black w-full p-6 flex flex-col justify-center items-center lg:hidden shadow-lg">
                        <ul className="w-full">
                            {navItems.map((item, index) => (
                                <li key={index} className="py-5 border-b border-gray-200">
                                    <Link
                                        to={item.to}
                                        className="block text-center text-gray-900 text-xl font-medium hover:text-black transition"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>

        </>
    );
};


const Tab = ({ children, tab, handleSetSelected, selected }) => {
    return (
        <button
            id={`shift-tab-${tab}`}
            onMouseEnter={() => handleSetSelected(tab)}
            onClick={() => handleSetSelected(tab)}
            className={`flex items-center gap-1 px-1.5 py-1.5 text-sm transition-colors font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 `}
        >
            <span>{children}</span>
        </button>
    );
};

const Content = ({ selected, dir, TABS }) => {
    return (
        <motion.div
            id="overlay-content"
            initial={{
                opacity: 0,
                y: 8,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            exit={{
                opacity: 0,
                y: 8,
            }}
            className="absolute left-0 top-[calc(100%_+_24px)] rounded-lg border border-neutral-300 bg-white"
        >
            <Bridge />
            <Nub selected={selected} />

            {TABS.map((t) => {
                return (
                    <div className="overflow-hidden" key={t.id}>
                        {selected === t.id && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                                }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                            >
                                <t.Component />
                            </motion.div>
                        )}
                    </div>
                );
            })}
        </motion.div>
    );
};

const Bridge = () => (
    <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }) => {
    const [left, setLeft] = useState(0);

    useEffect(() => {
        moveNub();
    }, [selected]);

    const moveNub = () => {
        if (selected) {
            const hoveredTab = document.getElementById(`shift-tab-${selected}`);
            const overlayContent = document.getElementById("overlay-content");

            if (!hoveredTab || !overlayContent) return;

            const tabRect = hoveredTab.getBoundingClientRect();
            const { left: contentLeft } = overlayContent.getBoundingClientRect();

            const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

            setLeft(tabCenter);
        }
    };

    return (
        <motion.span
            style={{
                clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
            }}
            animate={{ left }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-none primary-bg-blue-whiter"
        />
    );
};


export default Navbar;
