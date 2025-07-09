import { Link } from "react-router-dom";
import { HTTP_ROUTE_TIGRIS_CONTACT } from "../../data";

export default function ConsultationBanner() {
    return (
        <div className="primary-bg-blue text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-6 w-full text-center md:text-left">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="border-l-2 border-white h-12 hidden md:block"></div>
                <h2 className="text-lg md:text-xl font-bold">
                    Need a consultation? <br className="hidden md:block" /> Contact us!
                </h2>
                <div className="border-l-2 border-white h-12 hidden md:block"></div>
                <p className="max-w-lg text-sm md:text-base">
                    <span className="font-bold">TIGRIS GROUP</span> - company with a long history and experience in the field of medicine. We are ready to provide you with the best solutions for your health and well-being.
                </p>
            </div>
            <Link to={HTTP_ROUTE_TIGRIS_CONTACT}>
                <button className="bg-white text-[#005582] font-semibold px-6 py-2 rounded-md shadow mt-4 md:mt-0">
                    Ask a question
                </button>
            </Link>
        </div>
    );
}