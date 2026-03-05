'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {


  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: 'easeOut',
      },
    },
  };

  const images = ['/bg-hero.jpg', '/teachers-kamila.jpg', '/teachers-victoria2.jpg', '/teachers-sofia.jpg', '/teachers-elizabeth.jpg', '/teachers-alina2.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero relative z-20 w-full min-h-screen box-border !pl-[0] py-[0] overflow-hidden">
      
      {images.map((image, index) => (
        <motion.div
          key={image}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 1.5 }}
        />
      ))}

      <div className="hero__blackout absolute inset-0 z-10" />

      <motion.div
        className="hero__content relative z-20 flex flex-col justify-center items-start h-full w-full mx-[6%] mt-[16%]"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3, delayChildren: 0.4 } },
        }}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
          }}
          className="hero__title text-[#5DBFD0] leading-none text-[48px] font-bold m-0"
        >
          Студия Pole Dance и воздушной гимнастики
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
          }}
          className="hero__text text-[16px] text-[#FFFFFF] pb-[16px] m-0 max-w-[700px]"
        >
          Приглашаем вас в Kamila Kim Studio — место, где профессионализм встречается с вдохновением.
          Мы поможем вам найти невероятную силу и грацию в каждом движении, научиться летать и покорять высоту.
          Начните свое преображение с нами и почувствуйте абсолютную уверенность и свободу!
        </motion.p>

        <motion.a
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          href="https://wa.me/77003334010"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.97 }}
          className="
            mt-4 hero__subscribe
            text-[var(--background)] border border-[#5DBFD0] 
            text-[18px] font-[700] px-[24px] py-[8px] 
            cursor-pointer no-underline
            bg-[#5DBFD0]
            transition-all duration-500 ease-in-out shadow-lg
            hover:bg-gradient-to-r hover:from-[#66FFFF] hover:via-[#5DBFD0] hover:to-[#00E5FF]
          "
        >
          Записаться
        </motion.a>
      </motion.div>
    </section>
  );
}