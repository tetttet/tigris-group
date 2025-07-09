import { FaUserMd, FaAccusoft } from "react-icons/fa";
import video1 from "../../assets/tigris_intro_video2.mp4";

const title = "TIGRIS HEALTH";
const sectionTitle = "— Your Partner in Better Health";
const sectionDescription = "At TIGRIS HEALTH, we are committed to delivering top-quality medical services tailored to your individual needs. Our mission is to guide you toward a healthier, happier life through expert care and innovative treatment.";

const whoWeAreTitle = "Who We Are";
const whoWeAreDescription1 = "TIGRIS HEALTH is a modern medical organization dedicated to holistic patient care. Our team of certified professionals combines compassion with cutting-edge technology to offer personalized solutions for every stage of life.";
const whoWeAreDescription2 = "We believe in prevention, education, and continuous support — because your health is our priority.";

const listItems1 = [
    "Comprehensive diagnostics and screening programs.",
    "Experienced medical staff across multiple specialties.",
    "Individual treatment plans and wellness tracking."
];

const listItems2 = [
    "Modern facilities with advanced medical equipment.",
    "24/7 patient support and consultation services.",
    "Commitment to excellence, empathy, and integrity."
];


const MedAbout = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-semibold text-gray-900 tracking-tight">
                        <span className="text-blue-500 font-bold">{title}</span>
                        {" "}{sectionTitle}</h2>
                    <p className="text-lg text-gray-500 mt-4">{sectionDescription}</p>
                </div>

                <div className="flex flex-wrap items-center justify-center">
                    <div className="lg:w-1/2 w-full px-4 sm:px-6 mb-12">
                        <div className="overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
                            <video
                                autoPlay
                                loop
                                muted
                                className="rounded-2xl w-full object-cover"
                            >
                                <source src={video1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full px-4 sm:px-6">
                        <div className="p-6 sm:p-10 rounded-3xl">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{whoWeAreTitle}</h3>
                            <p className="text-gray-600 text-base mb-4">{whoWeAreDescription1}</p>
                            <p className="text-gray-600 text-base mb-6">{whoWeAreDescription2}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <ul className="space-y-3">
                                    {listItems1.map((item, index) => (
                                        <li key={index} className="flex items-center text-gray-700">
                                            <FaUserMd className="text-gray-500 w-5 h-5 mr-3" />
                                            <span className="text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <ul className="space-y-3">
                                    {listItems2.map((item, index) => (
                                        <li key={index} className="flex items-center text-gray-700">
                                            <FaAccusoft className="text-gray-500 w-5 h-5 mr-3" />
                                            <span className="text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MedAbout;
