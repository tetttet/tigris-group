import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaqItem } from "../layouts/header.layouts";
import { Clients } from '../components/Sections/Feature';
import MissionSection from '../components/Mission';
import Blogs from '../components/Blogs';

export const Home = () => {
  return (
    <div className='w-screen bg-gray-50 flex p-4'>
      <div className='w-2/3'>
        <Clients />
      </div>
    </div>
  );
}

export const About = () => {
  return (
    <div className='w-screen'>
      <div className='w-2/3 h-[665px] overflow-y-auto -mt-20'>
        <MissionSection />
      </div>
    </div>
  );
};

export const Doctors = () => {
  return (
    <div className='w-screen'>
      <div className='w-2/3 h-[665px] overflow-y-auto -ml-20 -mt-10'>
        <Blogs />
      </div>
    </div>
  );
}

export const Contact = () => {
  const contactInfo = [
    {
      name: "Main Office",
      address: "123 Main St, Springfield, IL 62701, USA",
      phone: "+1 555-555-5555",
      email: "info@company.com",
      googleMapsLink: "https://www.google.com/maps?q=39.7817,-89.6501",
    },
  ];

  return (
    <div className="flex w-[680px] border-t-2 primary-br-blue-whiter p-2">
      <div className="w-1/2">
        {contactInfo.map((location, idx) => (
          <div key={idx} className="mb-4">
            <iframe
              width="350px"
              height="350px"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d946.9572860595387!2d28.990068522942018!3d41.06304235817497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab702fda35e09%3A0xa2b109dcc32feac7!2sPlaza%2033!5e0!3m2!1sru!2str!4v1740738410211!5m2!1sru!2str"
            ></iframe>
          </div>
        ))}
      </div>

      <div className="w-1/2 flex flex-col gap-4">
        {contactInfo.map((location, idx) => (
          <div key={idx} className="ml-10 p-4 border-neutral-200 rounded-lg ">
            <h3 className="text-xl font-semibold">{location.name}</h3>
            <p className="flex items-center text-neutral-500">
              <FaMapMarkerAlt className="mr-2 text-red-500" /> {location.address}
            </p>
            <p className="flex items-center text-neutral-500">
              <FaPhoneAlt className="mr-2 text-green-500" /> {location.phone}
            </p>
            <p className="flex items-center text-neutral-500">
              <FaEnvelope className="mr-2 text-blue-500" /> {location.email}
            </p>
            <a href={location.googleMapsLink} target="_blank" className="text-blue-500 hover:underline">
              View on Google Maps
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Faq = () => {
  const faqQuestions = [
    "What is your return policy?",
    "Do you ship internationally?",
    "How can I track my order?",
    "Can I change my order after placing it?",
    "What payment methods do you accept?"
  ];

  return (
    <div className="w-[600px] border-t-2 primary-br-blue-whiter p-4">
      <h3 className="text-sm mb-3 font-bold">Frequently Asked Questions</h3>
      <ul className="list-disc pl-5">
        {faqQuestions.map((question, index) => (
          <FaqItem key={index} question={question} />
        ))}
      </ul>
    </div>
  );
};

export const Services = () => {
  return (
    <></>
  );
}