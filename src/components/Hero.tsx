'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';

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

  return (
    <section className="hero relative z-20 w-full h-[100vh] box-border px-[8%] py-[2%] overflow-hidden">
      
      <Image
        src="/bg-hero.jpg"
        alt="Hero Background"
        fill
        priority
        className="z-0 object-cover"
      />

      <div className="hero__blackout absolute inset-0 z-10" />

      <motion.div
        className="hero__content relative z-20 flex flex-col justify-center items-start h-full w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="hero__title text-[#5DBFD0] text-[48px] font-bold pb-[16px] m-0"
        >
          Студия воздушной гимнастики
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="hero__text text-[16px] text-[#FFFFFF] pb-[32px] m-0 max-w-[700px]"
        >
          Приглашаем вас в Kamila Kim Studio — место, где профессионализм встречается с вдохновением.
          Мы поможем вам найти невероятную силу и грацию в каждом движении, научиться летать и покорять высоту.
          Начните свое преображение с нами и почувствуйте абсолютную уверенность и свободу!
        </motion.p>

        <motion.a
          variants={itemVariants}
          href="https://wa.me/77003334010"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
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