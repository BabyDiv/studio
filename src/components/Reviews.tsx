'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

type Review = {
  name: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: 'Анна Васильева',
    text: 'Замечательная студия, лучшая в городе',
  },
  {
    name: 'Ирина Смирнова',
    text: 'Очень уютная атмосфера и профессиональные тренеры',
  },
  {
    name: 'Ольга Петрова',
    text: 'Долго искала подобную студию — наконец-то нашла!',
  },
  {
    name: 'Мария Иванова',
    text: 'Занятия приносят огромное удовольствие!',
  },
  {
    name: 'Татьяна Кузнецова',
    text: 'Рекомендую всем своим подругам!',
  },
]

export default function Reviews() {
  const [ showContent, setShowContent] = useState(false);

  const [selectedReviewIndex, setSelectedReviewIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="reviews" className="reviews relative w-full box-border">
      <h2 className="reviews__title text-[#5DBFD0] text-[48px] font-bold text-center py-12">
        Отзывы
      </h2>

      <div className="relative w-full h-[100vh]">
        <Image
          src="/bg-hero.jpg"
          alt="Reviews Background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute reviews__blackout inset-0 bg-black"></div>

        <div className="absolute inset-0 z-10 left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]">

          <div className="w-[70vw] max-w-[900px]">
            <Swiper
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              className="relative"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="text-[#FFFFFF] reviews__content bg-[#2E2E2E] w-full h-[50vh] flex flex-col gap-[16px] items-center justify-center px-8 pb-[24px]">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#FFD65C"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="#FFD65C"
                          className="w-[24px] h-[24px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                          />
                        </svg>
                      ))}
                    </div>
                    <h3 className="m-[0] text-center font-semibold">{review.name}</h3>
                    <p className="text-center reviews__text m-[0] max-w-[140px]">&quot;{review.text}&quot;</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}