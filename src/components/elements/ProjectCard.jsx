import React from 'react'
import { useTranslation } from 'react-i18next'

const ProjectCard = ({ image, title, description, participants }) => {
    const { t } = useTranslation("events")
    return (
        <div className="rounded-2xl shadow-md bg-white p-6 max-w-sm transition hover:shadow-xl">
            <img
                src={image}
                alt={title}
                className="rounded-xl mb-4 object-cover w-full h-48"
            />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {title}
            </h2>
            <p className="text-gray-600 mb-4">
                {description}
            </p>
            <p className="text-sm text-gray-500">
                {t("participants")}: {participants}
            </p>
        </div>
    )
}

export default ProjectCard
