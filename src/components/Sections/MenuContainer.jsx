import { useState } from "react"
import { IoHeart, IoFlask, IoPulse, IoGitBranch, IoFemale, IoEye, IoColorPalette, IoMedkit } from "react-icons/io5"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import MenuDetail from "../elements/MenuDetail";
import { HTTP_ROUTE_MENU_SERVICE } from "../../data";

const categories = [
    {
        id: 1,
        name: "Анестезия и реанимация",
        urlParamName: "anesthesia-reanimation",
        icon: <IoHeart className="w-8 h-8" />,
        description: "Анестезия и реанимация — это область медицины, занимающаяся обезболиванием и поддержанием жизненно важных функций организма во время хирургических вмешательств, а также лечением пациентов, находящихся в критическом состоянии."
    },
    {
        id: 2,
        name: "Биохимия и клиническая биохимия",
        urlParamName: "biochemistry",
        icon: <IoFlask className="w-8 h-8" />,
        description: "Биохимия и клиническая биохимия исследуют химические процессы, происходящие в организме человека, и применяют эти знания для диагностики заболеваний, а также для разработки методов лечения."
    },
    {
        id: 3,
        name: "Болезни грудной клетки",
        urlParamName: "chest-diseases",
        icon: <IoPulse className="w-8 h-8" />,
        description: "Болезни грудной клетки охватывают заболевания легких, сердца и сосудов, такие как пневмония, бронхит, эмфизема, а также болезни, связанные с дыхательной и сердечно-сосудистой системами."
    },
    {
        id: 4,
        name: "Гастроэнтерология",
        urlParamName: "gastroenterology",
        icon: <IoGitBranch className="w-8 h-8" />,
        description: "Гастроэнтерология изучает заболевания желудочно-кишечного тракта, включая заболевания желудка, кишечника, печени, поджелудочной железы и желчевыводящих путей."
    },
    {
        id: 5,
        name: "Гинекология и акушерство",
        urlParamName: "gynecology",
        icon: <IoFemale className="w-8 h-8" />,
        description: "Гинекология и акушерство занимаются здоровьем женской репродуктивной системы, включая диагностику, лечение заболеваний и проведение родов."
    },
    {
        id: 6,
        name: "Глазные болезни",
        urlParamName: "eye-diseases",
        icon: <IoEye className="w-8 h-8" />,
        description: "Глазные болезни охватывают заболевания органов зрения, такие как катаракта, глаукома, заболевания сетчатки и другие патологии, влияющие на зрение."
    },
    {
        id: 7,
        name: "Дерматология (Дерматология)",
        urlParamName: "dermatology",
        icon: <IoColorPalette className="w-8 h-8" />,
        description: "Дерматология изучает заболевания кожи, волос и ногтей, включая акне, экзему, псориаз, а также инфекционные заболевания, поражающие кожу."
    },
    {
        id: 8,
        name: "Медицинские исследования",
        urlParamName: "medical-research",
        icon: <IoMedkit className="w-8 h-8" />,
        description: "Медицинские исследования включают научные работы, направленные на улучшение здоровья и диагностики, разработку новых методов лечения и терапевтических подходов."
    },
]


export const MenuContainer = () => {
    const [filter, setFilter] = useState("anesthesia-reanimation");
    const selectedCategory = categories.find(cat => cat.urlParamName === filter);

    return (
        <section className='w-full my-6 max-w-7xl mx-auto px-4' id='menu'>
            <div className='w-full flex flex-col items-center justify-center'>
                <p className='text-[22px] font-semibold text-gray-800 mb-4'>
                    Наши Специализированные Услуги
                </p>

                <div className="w-full overflow-hidden">
                    <div className='w-full flex items-center justify-start lg:justify-center gap-4 py-4 overflow-x-auto scrollbar-none snap-x snap-mandatory'>
                        {categories.map((category) => (
                            <motion.div
                                whileTap={{ scale: 0.95 }}
                                key={category.id}
                                className={`group ${filter === category.urlParamName ? "bg-[#007fc3] text-white" : "bg-[#f5f5f7]"} 
                                w-28 h-32 min-w-[94px] cursor-pointer rounded-2xl shadow-sm flex flex-col gap-2 items-center justify-center transition-all duration-200`}
                                onClick={() => setFilter(category.urlParamName)}
                            >
                                <div className={`w-14 h-14 rounded-full shadow-md 
                                ${filter === category.urlParamName ? "bg-white text-[#007fc3]" : "bg-[#e1e1e1] text-gray-700"} 
                                group-hover:bg-white flex items-center justify-center text-2xl`}>
                                    {category.icon}
                                </div>
                                <p className='text-[14px] text-center font-medium px-1'>
                                    {category.name}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <Link to={HTTP_ROUTE_MENU_SERVICE} className="mt-4 text-sm font-medium text-white bg-[#007fc3] px-4 py-2 rounded-xl shadow-md hover:bg-[#006aad] transition-all">
                    Больше Наших Услуг
                </Link>

                <div className="text-[15px] font-normal mt-6 text-gray-600 w-full">
                    <MenuDetail category={selectedCategory} />
                </div>
            </div>
        </section>
    );

};
