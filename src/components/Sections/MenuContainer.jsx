import { useState } from "react"
import { IoHeart, IoFlask, IoPulse, IoGitBranch, IoFemale, IoEye, IoColorPalette, IoMedkit } from "react-icons/io5"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import MenuDetail from "../elements/MenuDetail";
import { HTTP_ROUTE_MENU_SERVICE } from "../../data";
import { useTranslation } from "react-i18next";

const iconMap = {
  "anesthesia-reanimation": <IoHeart className="w-8 h-8" />,
  "biochemistry": <IoFlask className="w-8 h-8" />,
  "chest-diseases": <IoPulse className="w-8 h-8" />,
  "gastroenterology": <IoGitBranch className="w-8 h-8" />,
  "gynecology": <IoFemale className="w-8 h-8" />,
  "eye-diseases": <IoEye className="w-8 h-8" />,
  "dermatology": <IoColorPalette className="w-8 h-8" />,
  "medical-research": <IoMedkit className="w-8 h-8" />
};

export const MenuContainer = () => {
  const { t } = useTranslation("menu");
  const [filter, setFilter] = useState("anesthesia-reanimation");
  const categories = t("categories", { returnObjects: true });
  const selectedCategory = categories.find(cat => cat.urlParamName === filter);

  return (
    <section className='w-full bg-white' id='menu'>
      <div className='w-full my-6 px-4 flex max-w-7xl mx-auto flex-col items-center justify-center'>
        <p className='text-[22px] font-semibold text-gray-800 mb-4'>
          {t("title")}
        </p>

        <div className="w-full overflow-hidden">
          <div className='w-full flex items-center justify-start lg:justify-center gap-4 py-4 overflow-x-auto scrollbar-none snap-x snap-mandatory'>
            {categories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.95 }}
                key={category.urlParamName}
                className={`group ${filter === category.urlParamName ? "bg-[#007fc3] text-white" : "bg-[#f5f5f7]"} 
                w-28 h-32 min-w-[94px] cursor-pointer rounded-2xl shadow-sm flex flex-col gap-2 items-center justify-center transition-all duration-200`}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div className={`w-14 h-14 rounded-full shadow-md 
                ${filter === category.urlParamName ? "bg-white text-[#007fc3]" : "bg-[#e1e1e1] text-gray-700"} 
                group-hover:bg-white flex items-center justify-center text-2xl`}>
                    {iconMap[category.urlParamName] || <IoMedkit className="w-8 h-8" />}
                </div>
                <p className='text-[14px] text-center font-medium px-1'>
                  {category.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <Link to={HTTP_ROUTE_MENU_SERVICE} className="mt-4 text-sm font-medium text-white bg-[#007fc3] px-4 py-2 rounded-xl shadow-md hover:bg-[#006aad] transition-all">
          {t("button")}
        </Link>

        <div className="text-[15px] font-normal mt-6 text-gray-600 w-full">
          <MenuDetail category={selectedCategory} />
        </div>
      </div>
    </section>
  );
};

