'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

type Trainer = {
  name: string;
  image: string;
  description: string;
}

const trainers: Trainer[] = [
  {
    name: "Ким Камила",
    image: "/teachers.jpg",
    description: `Основатель студии, тренер с опытом работы более 10 лет.

      Образование:
      Высшее спортивное образование — Физическая культура.
      Сертифицированный детский инструктор.
      Профессионал в направлениях: Aerial Sport, Pole Sport, Pole Exotic.

      Достижения:
      2 место в соло на чемпионате (2016).

      1 место в дуэте (Aerial Sport, 2016).

      2 место в дуэте (Aerial Sport, 2017).

      Чемпионка «Valkyrie Pole Exotic Profi» (1 место).

      Тренерская деятельность:
      Основатель студии.

      Подготовила множество учениц, которые становились призёрами и победителями чемпионатов различного уровня.`,
  },
  {
    name: "Шаравина Мария",
    image: "/teachers.jpg",
    description: `Генеральный директор ОФ «Federation Pole Sport Kazakhstan». 10 лет опыта.

      Образование:
      Республиканский эстрадно-цирковой колледж — артист цирка.
      Международный инновационный институт — «Физическая культура и спорт».

      Достижения:

      Многократный призёр и чемпион Центральной Азии, Европы и Мира по воздушной гимнастике.

      Серебряный призёр Чемпионата Мира (Рига).

      Победительница международных турниров Fest Elite (Москва, Санкт-Петербург).

      Многократная золотая медалистка открытых чемпионатов Центральной Азии.


      Проф. деятельность:
      Сертифицированный инструктор по направлениям: Pole Sport, Aerial Sport, Stretching, Strip Plastic, Water Aerobics.

      Аккредитованный судья Pole & Aerial Sport.

      Презентор международных конвенций: воздушное кольцо (III, IV), воздушные петли (V–VII), воздушное полотно (IX).

      Включена в международную энциклопедию «Лучшие в образовании» («Наша гордость») — диплом I степени и медаль.`,
  },
  {
    name: "Уразбаева Александра",
    image: "/teachers.jpg",
    description: `Тренер и действующая спортсменка Казахстанской Федерации по бодибилдингу и фитнесу.
      Стаж — 12 лет.

      Достижения:
      Воздушно-силовая атлетика: многократная чемпионка Казахстана и Азии с 2013 г.; золото International Athletic Fest ELITE (Москва, 2016); серебро European Championship (Прага, 2016) и World Championship (Рига, 2016).

      Бодибилдинг и фитнес: неоднократная чемпионка Казахстана и Азии с 2016 г.; серебряный призёр мировых чемпионатов WBPF 2022 (Пхукет) и 2023 (Сеул); бронза/топ-5 на ЧМ 2024 (Мальдивы); серебро и топ-5 Perfect Body Classic 2025 (Будапешт).

      Пауэрлифтинг: золото в дисциплине стритлифтинг (2024); золото в упражнении «подъём штанги на бицепс» (2025).

      Звания:
      Мастер спорта по бодибилдингу и фитнесу (WBPF)

      Мастер спорта (НАП)

      Мастер спорта международного класса`,
  },
  {
    name: "Толстых Илона",
    image: "/teachers.jpg",
    description: `Тренер с опытом работы — 6 лет.

      Достижения:
      Чемпионка Казахстана по воздушно-силовой атлетике (WAAPA, 2017, 2018).

      Серебряный призёр 9-го Кубка России и СНГ по воздушно-спортивному эквилибру.

      Победительница Кубка РК (KASEF) 2022.

      Серебро на чемпионате «The Power of Valkyrie» 2024.

      Участница чемпионата «Art Evo» 2025 (номинация Hard Style Lover).`,
  },
  {
    name: "Аракелова Ева",
    image: "/teachers.jpg",
    description: `Тренер с опытом работы 2,5 года.

      Достижения:
      Мастер спорта Республики Казахстан

      9-кратная чемпионка мира

      Член Национальной сборной Казахстана по спорту на пилоне

      Многократная чемпионка и призёр чемпионатов РК`,
  },
];


export default function Teachers() {

  const [ showContent, setShowContent] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenModal = (trainer: Trainer) => {
    console.log({trainer})
    setSelectedTrainer(trainer);
  };

  const handleCloseModal = () => {
    setSelectedTrainer(null);
  };

  return (

    <section id="teachers" className="teachers relative z-20 w-full px-[0px] min-h-screen box-border bg-black text-white">
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      <div className={`teachers__content relative z-20 transition-all duration-2000 ease-in-out transform ${showContent ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <h1 className="teachers__title text-[#5DBFD0] text-[48px] font-bold text-center">
          Наши тренеры
        </h1>

        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="mt-8 w-screen h-screen"
          >
            {trainers.map((trainer, index) => (
              <SwiperSlide
                key={index}
                className="relative w-screen h-screen overflow-hidden"
              >

                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="z-0"
                />

                <div className="absolute teachers__blackout inset-0 bg-black bg-opacity-50 z-10" />

                <div className={`absolute right-[20px] top-1/2 transform z-20 flex flex-col justify-center items-end text-[#FFFFFF] text-right p-[8%] pb-[10%] transition-all duration-700 ease-out
                    ${showContent ? 'translate-y-[-50%] translate-x-[-5%] opacity-100' : 'translate-y-[-70%] opacity-0'}`}
                >
                  <h3 className="teachers__name text-[#5DBFD0] text-[48px] font-bold m-[0]">{trainer.name}</h3>
                  <button
                    onClick={() => handleOpenModal(trainer)}
                    className="mt-4 bg-transparent button-radius px-[49px] py-[6px] text-[18px] font-[600] cursor-pointer no-underline border-2 border-[#5DBFD0] hover:rounded-none
                      relative overflow-hidden transition-all duration-700 ease-in-out"
                    style={{ 
                      background: 'none',
                      transition: 'transition-all duration-1200 ease-in-out',

                    }}
                  >
                    <span
                        className="relative z-10"
                        style={{
                          background:
                            'linear-gradient(90deg, #66FFFF 0%, #5DBFD0 50%, #00E5FF 100%)',
                          backgroundSize: '200% 100%',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          color: 'transparent',
                          WebkitTextFillColor: 'transparent',
                          transition: 'background-position 0.7s ease-in-out',
                          backgroundPosition: 'left',
                        }}
                        
                        onMouseEnter={e => {
                          e.currentTarget.style.backgroundPosition = 'right';
                          if (e.currentTarget.parentElement) {
                            e.currentTarget.parentElement.style.borderImage = 'linear-gradient(90deg, #66FFFF 0%, #5DBFD0 50%, #00E5FF 100%) 1';
                            e.currentTarget.parentElement.style.borderImageSlice = '1';
                          }
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.backgroundPosition = 'left';
                          if (e.currentTarget.parentElement) {
                            e.currentTarget.parentElement.style.borderImage = 'none';
                          }
                        }}
                      >
                        Инфо
                    </span>
                  </button>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>

      </div>

      {/* Попап */}
      {selectedTrainer && (
        <>

          <div 
            className="fixed inset-0 bg-[#000000] bg-opacity-10 z-[999] cursor-pointer"
            onClick={handleCloseModal}
          >
          </div>
          <div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#000000] border border-[#716F6F] border-[8px] py-[16px] z-[1000] max-w-[800px] w-[90%] h-[80vh] outline-none"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative w-[90%] h-[90%] overflow-y-auto p-6 mx-auto">
              <button
                onClick={handleCloseModal}
                className="absolute top-[2%] right-[0px] w-[42px] h-[42px] p-[0] bg-transparent cursor-pointer border-none hover:text-[#FFFFFF] transition z-50"
                aria-label="Закрыть"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-full h-full stroke-white transition-all duration-400 ease-in-out`}
                  viewBox="0 0 42 42"
                  fill="none"
                >
                <path
                  d="M10 10L32 32M32 10L10 32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              </button>

              <div className="max-w-5xl mx-auto pt-20">
                <h2 className="teachers__name text-[#5DBFD0] text-[48px] mt-[0]">
                  {selectedTrainer.name}
                </h2>
                <div className="text-[#FFFFFF] font-[100]">
                  {selectedTrainer.description
                    .split('\n\n')
                    .map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

    </section>

  )
}