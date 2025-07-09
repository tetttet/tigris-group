import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";

const events = [
    {
        name: "HABITAT II - BM Insan Yerlesimleri Toplantisi",
        location: "Istanbul",
        year: 1996,
        attendees: 10000
    },
    {
        name: "IBM EMA SERVER Dünya Konferansi",
        location: "Antalya",
        year: 1998,
        attendees: 2800
    },
    {
        name: "CLASS I - Dünya Offshore Sampiyonasi Türkiye G.P.si",
        location: "Istanbul",
        year: 1998,
        attendees: 1480
    },
    {
        name: "Peace Boat Seyahat Gemisi, Sportif ve X Külürel Organizasyonlari",
        location: "Various",
        year: "1999-2010",
        attendees: "1200-1800"
    },
    {
        name: "Japon Saglik Bakanligi Organizasyonu",
        location: "Istanbul",
        year: 1999,
        attendees: 300
    },
    {
        name: "CLASS I - Dünya Offshore Sampiyonasi Türkiye G.P.si",
        location: "Istanbul",
        year: 1999,
        attendees: 1400
    },
    {
        name: "CLASS I - Dünya Offshore Sampiyonasi EGE G.P.si",
        location: "Bodrum",
        year: 1999,
        attendees: 1400
    },
    {
        name: "CLASS I - Dünya Offshore Sampiyonasi Türkiye G.P.si",
        location: "Istanbul",
        year: 2000,
        attendees: 1450
    },
    {
        name: "CLASS I - Dünya Offshore Sampiyonasi Akdeniz G.P.si",
        location: "Marmaris",
        year: 2000,
        attendees: 1450
    },
    {
        name: "UIM (Union International Motonautique) General Assembly",
        location: "Istanbul",
        year: 2000,
        attendees: 1250
    },
    {
        name: "TELECOM ITALY Organizasyonu",
        location: "Antalya",
        year: 2000,
        attendees: 2000
    },
    {
        name: "JAPAN JEF UNITED Futbol Takimi, 1. Lig Turnuvasi",
        location: "Antalya",
        year: 2001,
        attendees: "N/A"
    },
    {
        name: "T.C. Kültür Bakanligi, Güzel Sanatlar Genel Müdürlügü, Cumhuriyet Coskusu Organizasyonu",
        location: "12 separate cities",
        year: 2004,
        attendees: 30000
    },
    {
        name: "5. Akdeniz Fiziksel Tip ve Rehabilitasyon Kongresi",
        location: "Antalya",
        year: 2004,
        attendees: 1200
    },
    {
        name: "Avrupa Tiroid Birligi 30. Yillik Kongresi",
        location: "Istanbul",
        year: 2004,
        attendees: 800
    },
    {
        name: "Islam Konferansi Teskilati, Ekonomi Konferansi, is Forumu",
        location: "Istanbul",
        year: 2004,
        attendees: 400
    },
    {
        name: "Dünya Halkla Iliskiler Birligi Kongresi",
        location: "Istanbul",
        year: 2005,
        attendees: 1500
    },
    {
        name: "Samsung Türkiye Organizasyonu",
        location: "Istanbul",
        year: 2005,
        attendees: "N/A"
    },
    {
        name: "TCMB Konferanslar",
        location: "Istanbul",
        year: "2005-2006",
        attendees: 500
    },
    {
        name: "Bodrum Uluslararasi Bale Festivali",
        location: "Bodrum",
        year: "2005-2006",
        attendees: "N/A"
    },
    {
        name: "Barclays Bank Türkiye Organizasyonu",
        location: "N/A",
        year: 2007,
        attendees: "N/A"
    },
    {
        name: "Hyundai Türkiye Toplantisi",
        location: "N/A",
        year: 2007,
        attendees: 300
    },
    {
        name: "Uluslararasi Hidrojen Enerjisi Kongresi",
        location: "Istanbul",
        year: 2007,
        attendees: 1000
    },
    {
        name: "Fenerbahçe 100. Yil Spor ve Bilim Kongresi",
        location: "Istanbul",
        year: 2007,
        attendees: 1500
    },
    {
        name: "OECD Uluslararasi Anahtar Göstergeler II. Dünya Forumu",
        location: "Istanbul",
        year: 2007,
        attendees: 1000
    },
    {
        name: "Uluslararasi Hava Trafik Kontrolörleri Kongresi",
        location: "Istanbul",
        year: 2007,
        attendees: 1500
    },
    {
        name: "53. Distripress Kongresi",
        location: "N/A",
        year: 2008,
        attendees: "N/A"
    },
    {
        name: "Asian Paints Türkiye Organizasyonu",
        location: "Istanbul",
        year: 2008,
        attendees: 1500
    },
    {
        name: "Maruti Yillik Kongresi",
        location: "Hindistan",
        year: 2008,
        attendees: "N/A"
    },
    {
        name: "Tata Yillik Kongresi",
        location: "N/A",
        year: "2008-2009",
        attendees: "N/A"
    },
    {
        name: "Suzuki Istanbul Toplantisi",
        location: "Istanbul",
        year: 2008,
        attendees: 1300
    },
    {
        name: "13. Avrupa Neroendokrin Dernegi Kongresi",
        location: "Antalya",
        year: 2008,
        attendees: 1000
    },
    {
        name: "Novartis Japonya Kongre Organizasyonu",
        location: "N/A",
        year: "2008-2009",
        attendees: "N/A"
    },
    {
        name: "Turkcell Gönül Köprüsü Projesi Turistik Hizmetleri",
        location: "N/A",
        year: 2009,
        attendees: 11000
    },
    {
        name: "Romanya Telekom Germanos Sunmadair",
        location: "N/A",
        year: 2009,
        attendees: "N/A"
    },
    {
        name: "Türkiye-Suriye Tip Günleri Organizasyonu",
        location: "N/A",
        year: 2009,
        attendees: "N/A"
    }
];

const ReferenceGrid = () => {
    const { t } = useTranslation("events");
    const [visibleCount, setVisibleCount] = useState(8); // 2 строки * 3 колонки
    const [sortOrder, setSortOrder] = useState("desc");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredEvents = useMemo(() => {
        return events
            .filter(event =>
                event.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .sort((a, b) =>
                sortOrder === "asc" ? a.year - b.year : b.year - a.year
            );
    }, [events, sortOrder, searchQuery]);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 8); // показывать ещё 2 строки
    };

    return (
        <div className="p-4 max-w-10/12 mx-auto space-y-4">
            {/* Поиск и сортировка */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <input
                    type="text"
                    placeholder={t("searchByName")}
                    className="w-full sm:w-1/2 px-4 py-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-blue-500 transition"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="px-4 py-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-blue-500 transition"
                >
                    <option value="desc">{t("newEvents")}</option>
                    <option value="asc">{t("oldEvents")}</option>
                </select>
            </div>

            {/* Сетка карточек */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredEvents.slice(0, visibleCount).map((event, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition duration-300 space-y-3"
                    >
                        <h2 className="text-lg font-semibold text-gray-800 mb-1">{event.name}</h2>
                        <div className="space-y-1 text-sm text-gray-700">
                            <div className="flex justify-between border-b pb-1 border-gray-200">
                                <span className="text-gray-500">
                                    {t("location")}
                                </span>
                                <span>{event.location}</span>
                            </div>
                            <div className="flex justify-between border-b pb-1 border-gray-200">
                                <span className="text-gray-500">
                                    {t("year")}
                                </span>
                                <span>{event.year}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">
                                    {t("attendees")}
                                </span>
                                <span>{event.attendees.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Кнопка "Показать больше" */}
            {visibleCount < filteredEvents.length && (
                <div className="text-center pt-4">
                    <button
                        onClick={handleLoadMore}
                        className="px-6 py-2 text-sm font-medium text-white primary-bg-blue-lighter rounded-3xl transition"
                    >
                        {t("showMore")}
                    </button>
                </div>
            )}
        </div>
    );
};



export default ReferenceGrid