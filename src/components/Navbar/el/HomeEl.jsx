import { useTranslation } from "react-i18next";
import AboutTig from "../../Sections/About";
import MedContact from "../../Contact";
import RunningSlogan from "../../elements/RunningSlogan";
import ScheduleSection from "../../Sections/Schedule";
import Item from "../../Grid/DoctorList";
import Hero from "../../Hero/Hero";
import { Feature } from "../../Sections/Feature";

const history_img = "/assets/images/about/about-2.jpg";

export const HomeEl = () => {
  return (
    <Feature />
  );
};

export const HistoryEl = () => {
  const { t } = useTranslation("tigris.web.page");

  return (
    <div className="flex w-full h-[240px]">
      <div className="w-1/2 h-full">
        <img
          src={history_img}
          alt="About"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-1/2 h-full p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl primary-text-blue font-bold mb-2">
            {t("promote.title1")}
          </h2>
          <p className="text-sm text-gray-600">
            {t("promote.desc1")}
          </p>
          <h2 className="text-xl primary-text-blue font-bold mt-2">
            {t("promote.title1")}
          </h2>
          <p className="text-sm text-gray-600">
            {t("promote.desc2_1")}
          </p>
          <p className="text-sm text-gray-600">
            {t("promote.desc2_2")}
          </p>
        </div>
      </div>
    </div>
  );
}

export const TourismEl = () => {
  return (
    <></>
  );
};

export const ServiceEl = () => {
  return (
    <Item />
  )
}

export const MedicalEl = () => {
  return (
    <>
      <RunningSlogan />
      <ScheduleSection />
    </>
  )
}

export const AboutEl = () => {
  return (
    <AboutTig />
  )
}

export const ContactEl = () => {
  return (
    <MedContact />
  )
}