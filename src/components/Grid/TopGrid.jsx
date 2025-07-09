import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Card = ({ image, title, description, date }) => {
    const { t } = useTranslation("events");
    const [showFull, setShowFull] = useState(false);
    const toggleShow = () => setShowFull(!showFull);

    const truncated = description.length > 120 && !showFull;

    return (
        <div className="rounded-3xl bg-white shadow-sm hover:shadow-md transition-all duration-300 ease-in-out p-6 max-w-sm border border-neutral-200">
            <img
                src={image}
                alt={title}
                className="rounded-2xl mb-5 object-cover w-full h-48"
            />
            <h2 className="text-[22px] font-semibold text-neutral-900 mb-2 tracking-tight">
                {title}
            </h2>
            <p className="text-[15px] text-neutral-600 mb-2 leading-relaxed">
                {truncated ? `${description.slice(0, 120)}...` : description}
            </p>

            {description.length > 120 && (
                <button
                    onClick={toggleShow}
                    className="text-sm text-blue-500 hover:underline mb-2"
                >
                    {showFull ? t("showLess") : t("showMore")}
                </button>
            )}

            <p className="text-sm text-neutral-400">{date}</p>
        </div>
    );
};


const projects = [
    {
        image: "https://www.innova.com.tr/medias/c8e2bbb1-4603-41d7-934c-da7acdcccd61.c8e2bbb1-4603-41d7-934c-da7acdcccd61",
        title: "Erzurum Universiade 2011",
        description: `Erzurum'da düzenlenen 25.Dünya Üniversiteler Kış Oyunları (Universiade) için Doğu Anadolu'nun en büyük bilişim projesine imza atan İnnova, organizasyonun tüm bilişim altyapı ve çözümlerini tek elden sağladı.
Tüm dünyanın yakından takip ettiği ve kış olimpiyatları için adeta bir prova niteliğinde olan Universiade – Üniversiteler Kış Oyunları 2011 yılında Erzurum’un ev sahipliğinde yapıldı. 56 ülkeden 3 bin sporcuya ev sahipliği yapan bu organizasyonun mükemmel biçimde işletilebilmesi bilişim teknolojileri tarafında da oldukça kapsamlı bir hazırlık gerekiyordu. Yapılan ihale sonucunda 25. Dünya Üniversiteler Kış Oyunları (Universiade) Yönetimi, tüm bilişim altyapısını İnnova’nın çözüm ve hizmetleri ile yapılandırdı.`,
        date: '11 Ara 2003'
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/tr/f/f8/Universiade_2005_izmir.jpg",
        title: "Erzurum Universiade 2011",
        description: `2005 yılında İzmir'de organize edilen Universiade spor organizasyonudur.
Yirmi birincisi 2001 yılında, Çin'in Pekin kentinde, yirmi ikincisi 2003 yılında Güney Kore'nin Daegu kentinde yapılan Üniversite Yaz Oyunları'nın yirmi üçüncüsü 11 - 21 Ağustos 2005 tarihleri arasında İzmir'de gerçekleştirmiştir.`,
        date: 'XXIII Yaz Üniversite Oyunları'
    },
    {
        image: "https://img.donanimhaber.com/images//haber/21409/GKO.jpg",
        title: "İSTANBUL/SELANİK - Turkcell",
        description: `İSTANBUL/SELANİK- Turkcell ve Milli Eğitim Bakanlığı işbirliğiyle 2008 yılında hayata geçirilen ve üçüncü yılında yurt dışına da uzanan "Gönül Köprüsü" projesi kapsamında 200 çocuk Selanik'e giderek, Atatürk'ün evini ziyaret etti.
Selanik treni, 100 öğrencinin Anıtkabir ziyareti sonrası, Ankara Garı'ndan yola çıktı. İstanbul'da Sirkeci Garı'nda da 100 öğrenci alan tren, uğurlama töreninin ardından Selanik'e doğru hareket etti.
Tren yolculuğuna Turkcell Genel Müdürü Süreyya Ciliv ve Milli Eğitim Bakanlığı Ticaret ve Turizm Öğretimi Genel Müdürü Murat Bey Balta da katıldı.`,
        date: '2008 yılında Gönül Köprüsü projesi'
    },
]

const TopGrid = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
            <div className="px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        date={project.date}
                    />
                ))}
            </div>
            <div className='w-100% bg-gray-300 h-[1px]'></div>
        </div>
    )
}

export default TopGrid
