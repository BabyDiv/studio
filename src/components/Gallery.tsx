

'use client';

import Image from 'next/image';
import { useState } from 'react';
import Modal from 'react-modal';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const galleries = [
  {
    cover: "/bg-hero.jpg",
    slides: [
      "/1.jpg",
      "/2.jpg",
      "/3.jpg",
      "/4.jpg",
      "/5.jpg",
    ],
  },
  {
    cover: "/bg-hero.jpg",
    slides: [
      "/6.jpg",
      "/7.jpg",
      "/8.jpg",
      "/9.jpg",
      "/10.jpg",
    ],
  },
  {
    cover: "/teachers.jpg",
    slides: [
      "/11.jpg",
      "/12.jpg",
      "/13.jpg",
      "/14.jpg",
      "/15.jpg",
    ],
  },
];

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentImageIndex(slider.track.details.rel);
    },
  });

  const openModal = (galleryIndex: number) => {
    setCurrentGalleryIndex(galleryIndex);
    setCurrentImageIndex(0);
    setModalOpen(true);

    setTimeout(() => {
      instanceRef.current?.moveToIdx(0, true);
    }, 0);
  };

  const closeModal = () => setModalOpen(false);

  const prevSlide = () => instanceRef.current?.prev();
  const nextSlide = () => instanceRef.current?.next();

  return (
    <section className="gallery flex flex-col px-[8%]">
      <h2 className="gallery__title text-[#5DBFD0] text-[48px] font-bold text-center">
        Галерея
      </h2>

      <ul className="flex flex-col gallery__list justify-between gap-[32px] list-none pl-[0px]">
        {galleries.map((gallery, index) => (
          <li key={index}>
            <button onClick={() => openModal(index)} 
              className="w-full text-left bg-transparent border-none"
            >
              <article className="relative gallery__article w-full overflow-hidden">
                <Image
                  src={gallery.cover}
                  alt={`Галерея ${index + 1}`}
                  width={400}
                  height={200}
                  className="object-cover w-full h-auto"
                  priority={index < 2}
                />
                <h3 className="mt-[0px] p-[32px] text-[#FFFFFF] text-[18px]">
                  Спортивный пилон 
                  <span className="directions__name">(Pole Sport)</span>
                </h3>
              </article>
            </button>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel="Просмотр изображений"
        className="modal"
        overlayClassName="overlay"
        ariaHideApp={false}
      >
        <button
          onClick={closeModal}
          className="absolute top-[20px] right-[20px] w-[42px] h-[42px] p-[0] text-[#FFFFFF] cursor-pointer border-none bg-transparent text-2xl font-bold z-10 absolute transition z-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-white transition-all duration-400 ease-in-out" viewBox="0 0 42 42" fill="none">
            <path
              d="M10 10L32 32M32 10L10 32"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </button>

        <div className="relative">

          <div ref={sliderRef} className="keen-slider">
            {galleries[currentGalleryIndex].slides.map((src, index) => (
              <div key={index} className="keen-slider__slide flex justify-center items-center">
                <Image
                  src={src}
                  alt={`Слайд ${index + 1}`}
                  width={800}
                  height={500}
                  className="object-cover rounded-md max-h-[80vh]"
                />
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute swiper-button-prev left-[0] top-1/2 -translate-y-1/2 bg-transparent text-[#FFFFFF] border-none"
          >
            <svg className="swiper-navigation-icon" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.617 20.076a.696.696 0 0 0 0-.982L1.802 10.28l8.815-8.815a.695.695 0 0 0-.982-.982l-9.07 9.07a1.029 1.029 0 0 0 0 1.454l9.07 9.07a.694.694 0 0 0 .982-.001Z" fill="currentColor"/>
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute swiper-button-next right-[0] top-1/2 -translate-y-1/2 bg-transparent text-[#FFFFFF] border-none"
          >
            <svg className="swiper-navigation-icon" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor">
              </path>
            </svg>
          </button>
        </div>
      </Modal>
    </section>
  );
}

