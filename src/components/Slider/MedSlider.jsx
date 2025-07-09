import Slider from "react-slick";

const Slide = ({ title, description, img, button1Text, button2Text, button1Link, button2Link }) => (
    <div className="single-slider relative bg-cover bg-center" style={{ backgroundImage: `url(${img})`, height: "50vh", borderRadius: '30px' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30 bg-black/10"></div>
        <div className="py-24 h-full flex items-center justify-center lg:items-end relative z-10 px-4 sm:px-6">
            <div className="row flex items-center text-center">
                <div className="col-lg-7">
                   <div className="text text-white w-1/2 ml-auto">
                        <h1 className="pr-text-blue text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
                            {title}
                        </h1>
                        <p className="mt-4 text-sm sm:text-base md:text-lg">
                            {description}
                        </p>
                        <div className="button mt-6 flex justify-center gap-6">
                            <a href={button1Link} className="btn pr-bg-blue text-white px-6 py-3 rounded-full shadow-md transition-all hover:bg-blue-700 focus:outline-none">
                                {button1Text}
                            </a>
                            <a href={button2Link} className="btn border-2 border-white text-white px-6 py-3 rounded-full shadow-md transition-all hover:bg-white hover:text-blue-600 focus:outline-none">
                                {button2Text}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const MedSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const slidesData = [
        {
            title: "Мы предоставляем качественные медицинские услуги",
            description: "Мы предлагаем широкий спектр медицинских услуг, от консультаций до сложных процедур. Наша цель — обеспечить вам наилучший уход в любой ситуации.",
            img: "https://cdn.anatoliahospital.com/main-storage/563/yabanci-slider2.jpeg?class=slider",
            button1Text: "Записаться на приём",
            button2Text: "Узнать больше",
            button1Link: "#",
            button2Link: "#",
        },
        {
            title: "Индивидуальный подход к каждому пациенту",
            description: "Наши специалисты готовы предложить персонализированные решения для лечения и профилактики заболеваний. Мы заботимся о вашем здоровье и комфорте.",
            img: "https://plus.unsplash.com/premium_vector-1682311122960-12a21f777ec0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxkb2N0b3J8ZW58MHx8MHx8fDA%3D",
            button1Text: "Записаться на приём",
            button2Text: "О нас",
            button1Link: "#",
            button2Link: "#",
        },
        {
            title: "Современные методы диагностики и лечения",
            description: "Используя передовые технологии и методы лечения, мы предлагаем вам диагностику, лечение и реабилитацию на самом высоком уровне.",
            img: "https://plus.unsplash.com/premium_vector-1682270091935-677cd4ff2f4e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfHxkb2N0b3J8ZW58MHx8MHx8fDA%3D",
            button1Text: "Записаться на приём",
            button2Text: "Контакты",
            button1Link: "#",
            button2Link: "#",
        }
    ];

    return (
        <section className="slider w-full overflow-hidden">
            <Slider {...settings}>
                {slidesData.map((slide, index) => (
                    <Slide
                        key={index}
                        title={slide.title}
                        description={slide.description}
                        img={slide.img}
                        button1Text={slide.button1Text}
                        button2Text={slide.button2Text}
                        button1Link={slide.button1Link}
                        button2Link={slide.button2Link}
                    />
                ))}
            </Slider>
        </section>
    );
};


export default MedSlider;
