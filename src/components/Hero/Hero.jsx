import { useState } from "react"
import "./hero.css"
import Card from "./Card"
import { useTranslation } from "react-i18next"

const Hero = () => {
  const { t } = useTranslation("events")
  const hero = [
    {
      id: 1,
      cover: "https://www.yereldeab.org.tr/Portals/0/EasyDNNNews/971/400400p1810EDNmainDSC01053.JPG",
      category: t("hero.1.category"),
      title: t("hero.1.title"),
      authorName: "Tigris Group",
      time: "2014 year",
    },
    {
      id: 2,
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmbBW6ru0NNJYFyppQ3P1hJmOd8WTMBdAAgA&s",
      category: t("hero.2.category"),
      title: t("hero.2.title"),
      authorName: "Tigris Group",
      time: "",
    },
    {
      id: 3,
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbdK4lBnkou3XBwAgQQJoCybKK8jUSEa4UiQ&s",
      category: t("hero.3.category"),
      title: t("hero.3.title"),
      authorName: "Tigris Group",
      time: "",
    },
    {
      id: 4,
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKWHtkObtqIcU4EcEhwYcK7axmxwVrnyFR5A&s",
      category: t("hero.4.category"),
      title: t("hero.4.title"),
      authorName: "Tigris Group",
      time: "",
    },
  ]

  const [items, setItems] = useState(hero)

  return (
    <>
      <section className='hero'>
        <div className='container lg:ml-25'>
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Hero
