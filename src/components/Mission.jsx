import { useTranslation } from "react-i18next";

const MissionSection = () => {
  const { t } = useTranslation("translation");

  const missions = [
    {
      img: "https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      title: t("missions.0.title"),
      description: t("missions.0.description"),
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661757221486-183030ef8670?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      title: t("missions.1.title"),
      description: t("missions.1.description"),
    },
    {
      img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      title: t("missions.2.title"),
      description: t("missions.2.description"),
    },
    {
      img: "https://images.unsplash.com/photo-1623854766464-c3645e6841d8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      title: t("missions.3.title"),
      description: t("missions.3.description"),
    },
    {
      img: "https://images.unsplash.com/photo-1666214277730-e9c7e755e5a3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      title: t("missions.4.title"),
      description: t("missions.4.description"),
    },
    {
      img: "https://images.unsplash.com/photo-1550831106-0994fe8abcfe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      title: t("missions.5.title"),
      description: t("missions.5.description"),
    },
  ];

  return (
    <div className="py-16 max-w-7xl mx-auto text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 mx-auto max-w-5xl">
        {missions.map((mission, index) => (
          <div key={index} className="relative group h-64 overflow-hidden rounded-lg">
            <img
              src={mission.img}
              alt="Mission"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-white text-lg font-bold">{mission.title}</h4>
              <p className="text-white text-sm text-center mt-2 px-4">
                {mission.description}
              </p>
              <div className="mt-4 flex space-x-4">
                <p className="bg-blue-500 text-white px-4 py-2 rounded">
                  {t("missions.learnMore")}
                </p>
                <p className="bg-green-500 text-white px-4 py-2 rounded">
                  {t("missions.support")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionSection;
