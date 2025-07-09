const DummyContent = ({ text, src }) => {
    return (
        <div
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
        >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                {text}
            </p>
        </div>
    );
};

const Radiology = () => {
    return (
        <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
            <h2 className="text-neutral-900 text-base md:text-2xl font-bold max-w-3xl mb-1">
                Что такое радиология?
            </h2>
            <div>
                Радиология — это медицинская специальность, которая исследует структуры организма с помощью методов визуализации и помогает ставить диагнозы. Радиологи — это медицинские работники, которые специализируются на выявлении заболеваний, диагностике и управлении процессом лечения с использованием методов радиологической визуализации. Основная цель радиологии — визуально оценить анатомические и патологические особенности организма, чтобы лучше понять и диагностировать заболевания.
            </div>
            <h2 className="text-neutral-900 text-base md:text-2xl font-bold max-w-3xl mb-1">
                Какую практику выполняет радиология?
            </h2>
            <div>
                Рентгенологи используют различные методы визуализации. Мы можем перечислить эти методы радиологической визуализации следующим образом:
            </div>
            <ul className="mt-1">
                <li>
                    <span className="text-black font-semibold">Рентген</span>: Рентгеновские лучи используются для осмотра костей и некоторых мягких тканей тела. Этот метод широко используют для диагностики переломов, заболеваний легких и многих других заболеваний.
                </li>
                <li>
                    <span className="text-black font-semibold">Компьютерная томография (КТ или КТ)</span>: Компьютерная томография использует рентгеновские лучи для получения детальных трехмерных изображений. Этот метод используется для детальной визуализации органов, кровеносных сосудов и других внутренних структур.
                </li>
                <li>
                    <span className="text-black font-semibold">Рентген</span>: Рентгеновские лучи используются для осмотра костей и некоторых мягких тканей тела. Этот метод широко используют для диагностики переломов, заболеваний легких и многих других заболеваний.
                </li>
            </ul>
        </div>
    )
}

const Neurology = () => {
    return (
        <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-[28px] mb-4 shadow-sm">
            <div className="text-neutral-600 text-base md:text-[21px] leading-[1.5] font-sans max-w-3xl mx-auto space-y-8">
                <p className="font-medium text-black">
                    <strong className="font-semibold">Неврологические болезни</strong> — это патологические состояния головного, спинного мозга, позвоночника (включая сосудистые нарушения), а также периферической нервной системы.
                    <span className="text-purple-800 font-semibold"> Наука, которая занимается диагностикой и лечением этих заболеваний — неврология.</span>
                </p>

                <div className="space-y-4">
                    <h3 className="text-[22px] font-semibold text-black tracking-tight">Основные причины неврологических болезней</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-5">
                        <li className="list-disc list-inside pl-1 leading-relaxed">травмы;</li>
                        <li className="list-disc list-inside pl-1 leading-relaxed">наследственный фактор;</li>
                        <li className="list-disc list-inside pl-1 leading-relaxed">организмная интоксикация;</li>
                        <li className="list-disc list-inside pl-1 leading-relaxed">патологии органов;</li>
                        <li className="list-disc list-inside pl-1 leading-relaxed">малоподвижный образ жизни;</li>
                        <li className="list-disc list-inside pl-1 leading-relaxed">хронические патологические процессы в организме;</li>
                        <li className="list-disc list-inside pl-1 leading-relaxed">переутомление, стрессовые состояния;</li>
                        <li className="list-disc list-inside pl-1 leading-relaxed">нарушение обмена веществ и гормональный дисбаланс;</li>
                        <li className="list-disc list-inside pl-1 leading-relaxed">отравление токсинами, радиоактивное облучение;</li>
                        <li className="list-disc list-inside pl-1 leading-relaxed">инфекционный, опухолевый процесс;</li>
                        <li className="list-disc list-inside pl-1 leading-relaxed">прием определенных медикаментов.</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-[22px] font-semibold text-black tracking-tight">Симптомы и признаки неврологических заболеваний у взрослых</h3>
                    <p className="leading-relaxed">
                        Симптоматика зависит от причины, локализации патологии, общего состояния пациента. Стандартно симптомы классифицируют на следующие синдромы: болевой, общий, вегетативный и двигательный.
                    </p>

                    <div className="bg-white rounded-xl p-5 shadow-xs">
                        <h4 className="font-semibold text-black mb-2">Признаки общего синдрома:</h4>
                        <ul className="space-y-2 pl-1">
                            <li className="flex items-start before:content-['•'] before:mr-2 before:text-gray-500">нарушение сна;</li>
                            <li className="flex items-start before:content-['•'] before:mr-2 before:text-gray-500">фобии;</li>
                            <li className="flex items-start before:content-['•'] before:mr-2 before:text-gray-500">снижение работоспособности, постоянная усталость;</li>
                            <li className="flex items-start before:content-['•'] before:mr-2 before:text-gray-500">расстройства речи;</li>
                            <li className="flex items-start before:content-['•'] before:mr-2 before:text-gray-500">раздражительность, резкие перепады настроения.</li>
                        </ul>
                    </div>

                    <p className="leading-relaxed">Для неврологических заболеваний характерна мышечная слабость в ногах, руках, боли головы, головокружения.</p>

                    <div className="bg-white rounded-xl p-5 shadow-xs">
                        <h4 className="font-semibold text-black mb-2">Для двигательного синдрома характерны:</h4>
                        <ul className="space-y-2 pl-1">
                            <li className="flex items-start before:content-['•'] before:mr-2 before:text-gray-500">судороги;</li>
                            <li className="flex items-start before:content-['•'] before:mr-2 before:text-gray-500">парезы (частичная потеря двигательной способности);</li>
                            <li className="flex items-start before:content-['•'] before:mr-2 before:text-gray-500">параличи (полная потеря двигательной способности);</li>
                            <li className="flex items-start before:content-['•'] before:mr-2 before:text-gray-500">тики;</li>
                            <li className="flex items-start before:content-['•'] before:mr-2 before:text-gray-500">тремор;</li>
                            <li className="flex items-start before:content-['•'] before:mr-2 before:text-gray-500">онемение определенных участков.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Terapy = () => {
    return (
        <div className="bg-[#F5F5F7] p-6 md:p-8 rounded-[28px] shadow-sm">
            <div className="max-w-3xl mx-auto">
                {/* Картинка в стиле iOS */}
                <div className="mb-6 overflow-hidden rounded-2xl bg-white shadow-xs">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1663050739359-a4261779f6ba?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVyYXB5fGVufDB8fDB8fHww" // Замените на реальный путь к изображению
                        alt="Химиотерапия"
                        className="w-full h-auto object-cover"
                        width={1200}
                        height={630}
                    />
                    <div className="p-4 md:p-5">
                        <p className="text-sm text-gray-500 font-medium">Онкологическое лечение</p>
                    </div>
                </div>

                {/* Текстовый контент */}
                <div className="space-y-6 text-[#1C1C1E]">
                    <h2 className="text-2xl md:text-[28px] font-semibold leading-tight tracking-tight">
                        При каких видах рака эффективна химиотерапия
                    </h2>

                    <p className="text-base md:text-[17px] leading-relaxed">
                        Эффективность химиотерапии определяется чувствительностью опухоли к вводимым препаратам, которая зависит от ее морфологического типа и локализации:
                    </p>

                    <div className="space-y-5">
                        {/* Блок с высокой чувствительностью */}
                        <div className="bg-white rounded-xl p-5 shadow-xs">
                            <h3 className="font-semibold text-lg mb-3 flex items-center">
                                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                                Высокая чувствительность
                            </h3>
                            <p className="text-[15px] md:text-[16px] leading-relaxed">
                                Наблюдается при лимфоме Ходжкина и Беркитта, герминогенных опухолях яичка и яичников, раке анального канала, хориокарциноме матки, хроническом миелолейкозе и остром лимфобластном лейкозе у детей. <span className="font-medium">При данных видах рака существует возможность полного излечения.</span>
                            </p>
                        </div>

                        {/* Блок с хорошей чувствительностью */}
                        <div className="bg-white rounded-xl p-5 shadow-xs">
                            <h3 className="font-semibold text-lg mb-3 flex items-center">
                                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                                Хорошая чувствительность
                            </h3>
                            <p className="text-[15px] md:text-[16px] leading-relaxed">
                                Отмечается при злокачественных новообразованиях в гортани, мочевом пузыре, яичнике у женщин, предстательной железе у мужчин, мелкоклеточном раке легкого, саркоме Юинга, миеломной болезни, ретинобластоме. <span className="font-medium">При таких диагнозах химиотерапия позволяет уменьшить опухоль и продлить жизнь пациента.</span> Полное излечение возможно, но маловероятно — оно происходит менее чем в 10% случаев.
                            </p>
                        </div>

                        {/* Блок с умеренной чувствительностью */}
                        <div className="bg-white rounded-xl p-5 shadow-xs">
                            <h3 className="font-semibold text-lg mb-3 flex items-center">
                                <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                                Умеренная чувствительность
                            </h3>
                            <p className="text-[15px] md:text-[16px] leading-relaxed">
                                Наблюдается при колоректальном раке, злокачественном поражении пищевода, желудка, тела матки, молочных желез, меланоме, саркоме (остеогенной, мягких тканей), немелкоклеточном раке легкого. <span className="font-medium">При этих заболеваниях химиотерапия позволяет уменьшить опухоль у 20–50% пациентов, продлить жизнь, улучшить ее качество.</span>
                            </p>
                        </div>

                        {/* Блок с малой чувствительностью */}
                        <div className="bg-white rounded-xl p-5 shadow-xs">
                            <h3 className="font-semibold text-lg mb-3 flex items-center">
                                <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                                Малая чувствительность
                            </h3>
                            <p className="text-[15px] md:text-[16px] leading-relaxed">
                                При формах рака, малочувствительных к действию противоопухолевых препаратов, химиотерапия имеет минимальную эффективность. Ее проводят после операций для профилактики рецидивов. Как самостоятельный метод лечения к ней прибегают, чтобы не допустить прогрессирования, повысить качество жизни больного, улучшить его самочувствие. <span className="font-medium">Малочувствительными являются печеночно-клеточный рак, злокачественные опухоли с локализацией в почках, щитовидной или поджелудочной железе, влагалище, шейке матки.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Gastroenterology = () => {
    return (
        <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-[32px] mb-4 shadow-sm border border-[#E5E5E7]">
            <h2 className="text-[#1D1D1F] text-2xl md:text-3xl font-semibold mb-6 font-sans">
                Гастроэнтерология
            </h2>

            <p className="text-[#3A3A3C] text-base md:text-xl font-sans mb-8 leading-relaxed">
                Диагностика и лечение заболеваний таких органов, как желудок, кишечник, печень,
                желчный пузырь, поджелудочная железа и пищевод выполняется гастроэнтерологами.
                Поэтому можно смело утверждать, что гастроэнтерология связана с широким спектром заболеваний.
            </p>

            <h3 className="text-[#1D1D1F] text-xl md:text-2xl font-semibold mb-4 font-sans">
                Какие заболевания лечит гастроэнтерология?
            </h3>

            <p className="text-[#3A3A3C] text-base md:text-xl font-sans mb-6 leading-relaxed">
                Гастроэнтерология – это раздел медицины, связанный с пищеварительной системой
                и связанными с ней органами.
            </p>

            <div className="space-y-6">
                {/* Заболевания желудка */}
                <div className="bg-white p-5 rounded-2xl shadow-xs border border-[#E5E5E7]">
                    <h4 className="text-[#1D1D1F] font-semibold text-lg mb-3">Желудок и двенадцатиперстная кишка</h4>
                    <ul className="text-[#3A3A3C] space-y-2 pl-5 list-disc">
                        <li>Язва желудка</li>
                        <li>Гастрит</li>
                        <li>Полипы желудка</li>
                    </ul>
                </div>

                {/* Пищевод */}
                <div className="bg-white p-5 rounded-2xl shadow-xs border border-[#E5E5E7]">
                    <h4 className="text-[#1D1D1F] font-semibold text-lg mb-3">Пищевод</h4>
                    <ul className="text-[#3A3A3C] space-y-2 pl-5 list-disc">
                        <li>Рефлюксная болезнь (ГЭРБ)</li>
                        <li>Эзофагит</li>
                        <li>Эзофагит Барретта</li>
                    </ul>
                </div>

                {/* Кишечник */}
                <div className="bg-white p-5 rounded-2xl shadow-xs border border-[#E5E5E7]">
                    <h4 className="text-[#1D1D1F] font-semibold text-lg mb-3">Кишечные заболевания</h4>
                    <ul className="text-[#3A3A3C] space-y-2 pl-5 list-disc">
                        <li>Синдром раздраженного кишечника (СРК)</li>
                        <li>Болезнь Крона</li>
                        <li>Язвенный колит</li>
                        <li>Дивертикулит</li>
                        <li>Кишечные полипы</li>
                    </ul>
                </div>

                {/* Печень */}
                <div className="bg-white p-5 rounded-2xl shadow-xs border border-[#E5E5E7]">
                    <h4 className="text-[#1D1D1F] font-semibold text-lg mb-3">Печень</h4>
                    <ul className="text-[#3A3A3C] space-y-2 pl-5 list-disc">
                        <li>Цирроз печени</li>
                        <li>Гепатит (вирусный, алкогольный)</li>
                        <li>Жировая дистрофия печени</li>
                        <li>Кисты и опухоли печени</li>
                    </ul>
                </div>

                {/* Желчный пузырь */}
                <div className="bg-white p-5 rounded-2xl shadow-xs border border-[#E5E5E7]">
                    <h4 className="text-[#1D1D1F] font-semibold text-lg mb-3">Желчный пузырь и желчные пути</h4>
                    <ul className="text-[#3A3A3C] space-y-2 pl-5 list-disc">
                        <li>Камни в желчном пузыре</li>
                        <li>Воспаления желчного пузыря</li>
                        <li>Обструкция желчных протоков</li>
                    </ul>
                </div>

                {/* Поджелудочная железа */}
                <div className="bg-white p-5 rounded-2xl shadow-xs border border-[#E5E5E7]">
                    <h4 className="text-[#1D1D1F] font-semibold text-lg mb-3">Поджелудочная железа</h4>
                    <ul className="text-[#3A3A3C] space-y-2 pl-5 list-disc">
                        <li>Панкреатит (острый и хронический)</li>
                        <li>Опухоли поджелудочной железы</li>
                    </ul>
                </div>

                {/* Рак */}
                <div className="bg-white p-5 rounded-2xl shadow-xs border border-[#E5E5E7]">
                    <h4 className="text-[#1D1D1F] font-semibold text-lg mb-3">Рак пищеварительной системы</h4>
                    <ul className="text-[#3A3A3C] space-y-2 pl-5 list-disc">
                        <li>Рак желудка</li>
                        <li>Рак кишечника</li>
                        <li>Рак поджелудочной железы</li>
                        <li>Рак печени</li>
                    </ul>
                </div>

                {/* Синдромы мальабсорбции */}
                <div className="bg-white p-5 rounded-2xl shadow-xs border border-[#E5E5E7]">
                    <h4 className="text-[#1D1D1F] font-semibold text-lg mb-3">Синдромы мальабсорбции</h4>
                    <ul className="text-[#3A3A3C] space-y-2 pl-5 list-disc">
                        <li>Целиакия</li>
                        <li>Непереносимость лактозы</li>
                        <li>Синдромы тонкой кишки</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

const ChildhoodDiseases = () => {
    return (
        <div className="bg-[#F5F5F7] p-6 md:p-10 rounded-[32px] mb-6 shadow-sm border border-[#E5E5E7]">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-[#1D1D1F] text-2xl md:text-3xl font-semibold mb-6 font-sans text-center">
                    Детские заболевания
                </h2>
                
                {/* Блок 1 - Инфекционные заболевания */}
                <div className="bg-white p-6 rounded-2xl shadow-xs border border-[#E5E5E7] mb-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                            {/* Вставить фото ребенка с температурой или сыпью */}
                            <div className="bg-gray-200 rounded-xl h-48 md:h-full flex items-center justify-center text-gray-400">
                                <img src="https://plus.unsplash.com/premium_photo-1661610844642-83cabcea4d52?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUQwJTk4JUQwJUJEJUQxJTg0JUQwJUI1JUQwJUJBJUQxJTg2JUQwJUI4JUQwJUJFJUQwJUJEJUQwJUJEJUQxJThCJUQwJUI1JTIwJUQwJUI3JUQwJUIwJUQwJUIxJUQwJUJFJUQwJUJCJUQwJUI1JUQwJUIyJUQwJUIwJUQwJUJEJUQwJUI4JUQxJThGfGVufDB8fDB8fHww" alt="" />
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <h3 className="text-[#1D1D1F] text-xl font-semibold mb-3">Инфекционные заболевания</h3>
                            <ul className="text-[#3A3A3C] space-y-2 pl-5 list-disc">
                                <li>Ветряная оспа</li>
                                <li>Корь, краснуха, паротит</li>
                                <li>Скарлатина</li>
                                <li>Ротавирусная инфекция</li>
                                <li>Острые респираторные заболевания</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* Блок 2 - Аллергические реакции */}
                <div className="bg-white p-6 rounded-2xl shadow-xs border border-[#E5E5E7] mb-6">
                    <div className="flex flex-col md:flex-row-reverse gap-6">
                        <div className="md:w-1/3">
                            {/* Вставить фото ребенка с аллергической сыпью */}
                            <div className="bg-gray-200 rounded-xl h-48 md:h-full flex items-center justify-center text-gray-400">
                                <img src="https://images.unsplash.com/photo-1587490039230-dd6a080690ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fCVEMCU5MCVEMCVCQiVEMCVCQiVEMCVCNSVEMSU4MCVEMCVCMyVEMCVCOCVEMSU4NyVEMCVCNSVEMSU4MSVEMCVCQSVEMCVCOCVEMCVCNSUyMCVEMSU4MCVEMCVCNSVEMCVCMCVEMCVCQSVEMSU4NiVEMCVCOCVEMCVCOHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <h3 className="text-[#1D1D1F] text-xl font-semibold mb-3">Аллергические реакции</h3>
                            <ul className="text-[#3A3A3C] space-y-2 pl-5 list-disc">
                                <li>Атопический дерматит</li>
                                <li>Пищевая аллергия</li>
                                <li>Аллергический ринит</li>
                                <li>Бронхиальная астма</li>
                                <li>Крапивница</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* Блок 3 - Желудочно-кишечные проблемы */}
                <div className="bg-white p-6 rounded-2xl shadow-xs border border-[#E5E5E7] mb-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                            {/* Вставить фото ребенка с больным животом */}
                            <div className="bg-gray-200 rounded-xl h-48 md:h-full flex items-center justify-center text-gray-400">
                               <img src="https://images.unsplash.com/photo-1728088734765-1279f310a309?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fCVEMCU5NiVEMCVCNSVEMCVCQiVEMSU4MyVEMCVCNCVEMCVCRSVEMSU4NyVEMCVCRCVEMCVCRSUyMCVEMCVCQSVEMCVCOCVEMSU4OCVEMCVCNSVEMSU4NyVEMCVCRCVEMSU4QiVEMCVCNSUyMCVEMCVCRiVEMSU4MCVEMCVCRSVEMCVCMSVEMCVCQiVEMCVCNSVEMCVCQyVEMSU4QnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <h3 className="text-[#1D1D1F] text-xl font-semibold mb-3">Желудочно-кишечные проблемы</h3>
                            <ul className="text-[#3A3A3C] space-y-2 pl-5 list-disc">
                                <li>Колики у новорожденных</li>
                                <li>Дисбактериоз</li>
                                <li>Гастроэнтерит</li>
                                <li>Запоры</li>
                                <li>Лактазная недостаточность</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* Блок 4 - Неврологические нарушения */}
                <div className="bg-white p-6 rounded-2xl shadow-xs border border-[#E5E5E7]">
                    <div className="flex flex-col md:flex-row-reverse gap-6">
                        <div className="md:w-1/3">
                            {/* Вставить фото ребенка у невролога */}
                            <div className="bg-gray-200 rounded-xl h-48 md:h-full flex items-center justify-center text-gray-400">
                                <img src="https://images.unsplash.com/photo-1566669419640-ae09e20a18d8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUQwJTlEJUQwJUI1JUQwJUIyJUQxJTgwJUQwJUJFJUQwJUJCJUQwJUJFJUQwJUIzJUQwJUI4JUQxJTg3JUQwJUI1JUQxJTgxJUQwJUJBJUQwJUI4JUQwJUI1JTIwJUQwJUJEJUQwJUIwJUQxJTgwJUQxJTgzJUQxJTg4JUQwJUI1JUQwJUJEJUQwJUI4JUQxJThGfGVufDB8fDB8fHww" alt="" />
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <h3 className="text-[#1D1D1F] text-xl font-semibold mb-3">Неврологические нарушения</h3>
                            <ul className="text-[#3A3A3C] space-y-2 pl-5 list-disc">
                                <li>Перинатальная энцефалопатия</li>
                                <li>Синдром дефицита внимания (СДВГ)</li>
                                <li>Задержка речевого развития</li>
                                <li>Тики и навязчивые движения</li>
                                <li>Головные боли напряжения</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* Рекомендации по фото */}
                <div className="mt-8 p-4 bg-[#E8F4FF] rounded-xl border border-[#D0E3FF]">
                    <h4 className="text-[#1D1D1F] font-medium mb-2">Рекомендации по подбору фотографий:</h4>
                    <ul className="text-[#3A3A3C] text-sm space-y-1 pl-5 list-disc">
                        <li>Используйте качественные фото с хорошим освещением</li>
                        <li>Выбирайте изображения с нейтральным или медицинским фоном</li>
                        <li>Фото должны вызывать доверие и спокойствие</li>
                        <li>Лучше использовать реальные фото, а не стоковые изображения</li>
                        <li>Сохраняйте конфиденциальность - не показывайте лица детей без разрешения</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export const data = [
    {
        category: "Неврологические заболевания",
        title: "Первый шаг к здоровью",
        src: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG1lZGljaW5lfGVufDB8fDB8fHww",
        content: <Neurology />,
    },
    {
        category: "Радиология",
        title: "Современная визуальная диагностика",
        src: "https://images.unsplash.com/photo-1693264882139-6a308957c9ae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUQwJUEwJUQwJUIwJUQwJUI0JUQwJUI4JUQwJUJFJUQwJUJCJUQwJUJFJUQwJUIzJUQwJUI4JUQxJThGJTIwJUQwJUJDJUQwJUI1JUQwJUI0JUQwJUI4JUQxJTg2JUQwJUI4JUQwJUJEJUQwJUIwfGVufDB8fDB8fHww",
        content: <Radiology />,
    },
    {
        category: "Химия терапия",
        title: "Борьба с болезнью на клеточном уровне",
        src: "https://plus.unsplash.com/premium_photo-1661391820050-aa156ffa51af?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fCVEMCVBNSVEMCVCOCVEMCVCQyVEMCVCOCVEMSU4RiUyMCVEMSU4MiVEMCVCNSVEMSU4MCVEMCVCMCVEMCVCRiVEMCVCOCVEMSU4RiUyMCVEMCVCQyVEMCVCNSVEMCVCNCVEMCVCOCVEMSU4NiVEMCVCOCVEMCVCRCVEMCVCMHxlbnwwfHwwfHx8MA%3D%3D",
        content: <Terapy />,
    },
    {
        category: "Гастроэнтерология",
        title: "Здоровье пищеварительной системы",
        src: "https://plus.unsplash.com/premium_photo-1673953510107-d5aee40d80a7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8JUQwJTkzJUQwJUIwJUQxJTgxJUQxJTgyJUQxJTgwJUQwJUJFJUQxJThEJUQwJUJEJUQxJTgyJUQwJUI1JUQxJTgwJUQwJUJFJUQwJUJCJUQwJUJFJUQwJUIzJUQwJUI4JUQxJThGJTIwJUQwJUJDJUQwJUI1JUQwJUI0JUQwJUI4JUQxJTg2JUQwJUI4JUQwJUJEJUQwJUIwfGVufDB8fDB8fHww",
        content: <Gastroenterology />,
    },
    {
        category: "Детские заболевания",
        title: "Забота о здоровье ребёнка",
        src: "https://images.unsplash.com/photo-1538856627859-2a35dbc87d3a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fCVEMCU5NCVEMCVCNSVEMSU4MiVEMSU4MSVEMCVCQSVEMCVCOCVEMCVCNSUyMCVEMCVCNyVEMCVCMCVEMCVCMSVEMCVCRSVEMCVCQiVEMCVCNSVEMCVCMiVEMCVCMCVEMCVCRCVEMCVCOCVEMSU4RiUyMCVEMCVCQyVEMCVCNSVEMCVCNCVEMCVCOCVEMSU4NiVEMCVCOCVEMCVCRCVEMCVCMHxlbnwwfHwwfHx8MA%3D%3D",
        content: <ChildhoodDiseases />,
    },
    {
        category: "Интенсивная терапия",
        title: "Жизнь в критических ситуациях",
        src: "https://plus.unsplash.com/premium_photo-1661752834431-68b71f31f9cc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fCVEMCU5OCVEMCVCRCVEMSU4MiVEMCVCNSVEMCVCRCVEMSU4MSVEMCVCOCVEMCVCMiVEMCVCRCVEMCVCMCVEMSU4RiUyMCVEMSU4MiVEMCVCNSVEMSU4MCVEMCVCMCVEMCVCRiVEMCVCOCVEMSU4RiUyMCVEMCVCQyVEMCVCNSVEMCVCNCVEMCVCOCVEMSU4NiVEMCVCOCVEMCVCRCVEMCVCMHxlbnwwfHwwfHx8MA%3D%3D",
        content: <DummyContent text={`
                Интенсивная терапия предназначена для лечения пациентов в критическом состоянии, требующих постоянного мониторинга и жизненно важной поддержки.
            `} />,
    },
    {
        category: "Реабилитация",
        title: "Восстановление после болезни",
        src: "https://plus.unsplash.com/premium_photo-1663045222355-4b1d368e52f3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHwlRDAlQTAlRDAlQjUlRDAlQjAlRDAlQjElRDAlQjglRDAlQkIlRDAlQjglRDElODIlRDAlQjAlRDElODYlRDAlQjglRDElOEYlMjAlRDAlQkMlRDAlQjUlRDAlQjQlRDAlQjglRDElODYlRDAlQjglRDAlQkQlRDAlQjB8ZW58MHx8MHx8fDA%3D",
        content: <DummyContent text={`
                Реабилитация помогает пациентам восстановить здоровье и функции после травм, операций или тяжелых заболеваний, улучшая качество их жизни.
            `} />,
    },
    {
        category: "Пластическая хирургия",
        title: "Эстетика и восстановление",
        src: "https://images.unsplash.com/photo-1551601651-124575cf5969?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fCVEMCU5RiVEMCVCQiVEMCVCMCVEMSU4MSVEMSU4MiVEMCVCOCVEMSU4NyVEMCVCNSVEMSU4MSVEMCVCQSVEMCVCMCVEMSU4RiUyMCVEMSU4NSVEMCVCOCVEMSU4MCVEMSU4MyVEMSU4MCVEMCVCMyVEMCVCOCVEMSU4RiUyMCVEMCVCQyVEMCVCNSVEMCVCNCVEMCVCOCVEMSU4NiVEMCVCOCVEMCVCRCVEMCVCMHxlbnwwfHwwfHx8MA%3D%3D",
        content: <DummyContent text={`
                Пластическая хирургия включает в себя как восстановительные, так и эстетические процедуры, направленные на улучшение внешности и функций тела.
            `} />,
    },
    {
        category: "Онкология",
        title: "Комплексный подход к лечению рака",
        src: "https://plus.unsplash.com/premium_photo-1673953886001-d866feca057f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fCVEMCU5RSVEMCVCRCVEMCVCQSVEMCVCRSVEMCVCQiVEMCVCRSVEMCVCMyVEMCVCOCVEMSU4RiUyMCVEMCVCQyVEMCVCNSVEMCVCNCVEMCVCOCVEMSU4NiVEMCVCOCVEMCVCRCVEMCVCMHxlbnwwfHwwfHx8MA%3D%3D",
        content: <DummyContent text={`
                Онкология занимается изучением и лечением злокачественных новообразований, включая диагностику, химиотерапию, лучевую и хирургическую терапию.
            `} />,
    },
    {
        category: "Нейрохирургия",
        title: "Операции на головном и спинном мозге",
        src: "https://plus.unsplash.com/premium_photo-1661626904179-aadc5727f3af?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUQwJTlEJUQwJUI1JUQwJUI5JUQxJTgwJUQwJUJFJUQxJTg1JUQwJUI4JUQxJTgwJUQxJTgzJUQxJTgwJUQwJUIzJUQwJUI4JUQxJThGJTIwJUQwJUJDJUQwJUI1JUQwJUI0JUQwJUI4JUQxJTg2JUQwJUI4JUQwJUJEJUQwJUIwfGVufDB8fDB8fHww",
        content: <DummyContent text={`
                Нейрохирургия — это область медицины, связанная с хирургическим лечением заболеваний головного и спинного мозга, а также периферической нервной системы.
            `} />,
    },
    {
        category: "Гематология",
        title: "Исследование и лечение заболеваний крови",
        src: "https://images.unsplash.com/photo-1633197551882-b5e2416c9310?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent text={`
                Гематология изучает заболевания крови и кроветворных органов, включая анемии, лейкозы и коагулопатии, обеспечивая эффективные методы диагностики и лечения.
            `} />,
    }
];