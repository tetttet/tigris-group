import { Link } from 'react-router-dom';
import logo from '../../assets/tigrisgrouplogo-removebg.png';
import {
  HTTP_ROUTE_TIGRIS_ABOUT,
  HTTP_ROUTE_MED_DOCTORS,
  HTTP_ROUTE_TIGRIS_CONTACT,
  HTTP_ROUTE_MED_FAQ
} from '../../data';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation("footer");

  const LinksToPages = [
    { to: HTTP_ROUTE_TIGRIS_ABOUT, label: t("footer.links.about") },
    { to: HTTP_ROUTE_MED_DOCTORS, label: t("footer.links.services") },
    { to: HTTP_ROUTE_TIGRIS_CONTACT, label: t("footer.links.contact") },
    { to: HTTP_ROUTE_MED_FAQ, label: t("footer.links.faq") },
  ];

  const navItems = [
    { to: HTTP_ROUTE_TIGRIS_ABOUT, label: t("footer.links.company") },
    { to: HTTP_ROUTE_MED_DOCTORS, label: t("footer.links.privacy") },
    { to: HTTP_ROUTE_TIGRIS_CONTACT, label: t("footer.links.terms") },
    { to: HTTP_ROUTE_MED_FAQ, label: t("footer.links.partners") },
  ];

  return (
    <footer className="bg-gray-100 py-10 px-6">
      <div className="lg:mx-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b-2 border-gray-400 pb-8">
        <div className="flex flex-col gap-4 text-gray-600">
          <div className="flex flex-col items-start">
            <img src={logo} alt="logo" className="w-44" />
            <p className="text-sm mt-2">
              {t('footer.description')}
            </p>
          </div>
          <ul className="space-y-2">
            <li className="text-sm">+0213 456 987</li>
            <li className="text-sm">example@gmail.com</li>
            <li className="text-sm">www.youtube.com</li>
          </ul>
        </div>
        <div>
          <h2 className="text-md font-semibold text-black">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-gray-600">
            {LinksToPages.map((link, index) => (
              <li key={index} className="cursor-pointer hover:text-primary">
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-md font-semibold text-black">
            {t('footer.links.subtitle')}
          </h2>
          <ul className="mt-4 space-y-2 text-gray-600">
            {navItems.map((link, index) => (
              <li key={index} className="cursor-pointer hover:text-primary">
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-md font-semibold text-black">
            {t('footer.form.title')}
          </h2>
          <div className="mt-4 flex flex-col gap-3">
            <input
              type="text"
              placeholder={t('footer.form.placeholder')}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="primary-bg-blue-header text-white py-2 rounded-md">
              {t('footer.form.sub')}
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-600 py-4 text-sm">
        Copyright &copy;. Designed by <a href="#" className="text-primary">Tigris Group</a>
      </div>
    </footer>
  );
};

export default Footer;
