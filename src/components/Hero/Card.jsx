import { Link } from "react-router-dom"
import { HTTP_ROUTE_ALL_SERVICES } from "../../data"
import { useTranslation } from "react-i18next"

const Card = ({ item: { id, cover, category, title, authorName, time } }) => {
  const { t } = useTranslation("events")
  return (
    <>
      <div className='box'>
        <div className='img'>
          <img src={cover} alt='' />
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent" />
        </div>
        <div className='text'>
          <span className='category'>{category}</span>
          <Link to={HTTP_ROUTE_ALL_SERVICES}>
            <h1 className='titleBg'>{title}</h1>
          </Link>
          <div className='author flex'>
            <span>{t("by")} {authorName}</span>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
