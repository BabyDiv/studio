'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [ showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero relative z-20 w-full h-[100vh] box-border px-[8%] py-[2%]">
      <Image
        src="/bg-hero.jpg"
        alt="Hero Background"
        layout="fill"
        priority
        className="z-0 object-cover"
      />
      <div className="hero__blackout">
      </div>

      <div className={`hero__content relative z-20 flex flex-col justify-center items-start h-full w-[100%] transition-all duration-2000 ease-in-out transform ${showContent ? 'translate-y-0 opacity-100': '-translate-y-full opacity-0'}`}>
        <h1 className="hero__title text-[#5DBFD0] text-[48px] font-bold pb-[16px] m-[0]">
          Студия воздушной гимнастики
        </h1>
        <p className="hero__text text-[16px] text-[#FFFFFF] pb-[32px] m-[0]">
          Prep students with love learning at our dance studio Prep students with love learning at our dance studio Prep students with love 
          learning at our dance studio Prep students with love learning at our dance studio Prep students with love learning at our dance studio Prep students with love learning 
          at our dance studio Prep students with love learning at our dance studio
        </p>

        <a
          href="https://wa.me/77000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-4 hero__subscribe
            text-[var(--background)] border border-[#5DBFD0] text-[18px] font-[600] px-[24px] py-[4px] cursor-pointer no-underline
            bg-[#5DBFD0]
            transition-all duration-1200 ease-in-out shadow-lg
            bg-[length:300%_100%] bg-left
            hover:bg-gradient-to-r hover:from-[#66FFFF] hover:via-[#5DBFD0] hover:to-[#00E5FF]
            hover:bg-right
          "
        >
          Записаться
        </a>
      </div>
    </section>
  );
}
