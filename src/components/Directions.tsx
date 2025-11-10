'use client';
import Image from 'next/image';

export default function Directions() {
  return (
    <section id="directions" className="directions flex flex-col px-[8%]">
      <h2 className="directions__title text-[#5DBFD0] text-[48px] font-bold text-center">
        Направления
      </h2>
      <ul className="flex flex-col directions__list justify-between gap-[32px] list-none pl-[0px]">
        <li>         
          <article className="relative directions__article h-full overflow-hidden">
            <Image
              src="/bg-hero.jpg"
              alt="Pole Sport"
              width={400}
              height={200}
              className="object-cover w-full h-auto"
              priority
            />
            <div className="p-[32px]">
              <h3 className="mt-[0px] text-[#FFFFFF] text-[18px]">Aerial Sport</h3>
              <p className="directions__text text-[#B0B0B0]">
                Занятия на воздушном кольце и полотнах, развивающие силу и гибкость воздухе.
              </p>
              <div className="flex flex-row gap-[2px] flex-wrap">
                <span className="flex bg-[#716F6F] text-[#FFFFFF] text-[12px] px-[18px] py-[4px]">Грация</span>
                <span className="flex bg-[#716F6F] text-[#FFFFFF] text-[12px] px-[18px] py-[4px]">Гибкость</span>
                <span className="flex bg-[#716F6F] text-[#FFFFFF] text-[12px] px-[18px] py-[4px]">Выносливость</span>
              </div>
            </div>
          </article>
        </li>
        <li>
          <article className="relative directions__article h-full overflow-hidden border">
            <Image
              src="/bg-hero.jpg"
              alt="Pole Sport"
              width={400}
              height={200}
              className="object-cover w-full h-auto"
              priority
            />
            <div className="p-[32px]">
              <h3 className="mt-[0px] text-[#FFFFFF] text-[18px]">Pole Sport</h3>
              <p className="directions__text text-[#B0B0B0]">
                Спортивные тренировки на пилоне, направленные на развитие выносливости, силы и растяжки.
              </p>
              <div className="flex flex-row gap-[2px] flex-wrap">
                <span className="flex bg-[#716F6F] text-[#FFFFFF] text-[12px] px-[18px] py-[4px]">Сила</span>
                <span className="flex bg-[#716F6F] text-[#FFFFFF] text-[12px] px-[18px] py-[4px]">Энергия</span>
                <span className="flex bg-[#716F6F] text-[#FFFFFF] text-[12px] px-[18px] py-[4px]">Движение</span>
              </div>
            </div>
          </article>
        </li>
        <li>
          <article className="relative directions__article h-full overflow-hidden border">
            <Image
              src="/bg-hero.jpg"
              alt="Pole Sport"
              width={400}
              height={200}
              className="object-cover w-full h-auto"
              priority
            />
            <div className="p-[32px]">
              <h3 className="mt-[0px] text-[#FFFFFF] text-[18px]">Pole Exotic</h3>
              <p className="directions__text text-[#B0B0B0]">
                Танцевальное направление на пилоне с акцентом на пластику, женственность и уверенность (только для взрослых).
              </p>
              <div className="flex flex-row gap-[2px] flex-wrap">
                <span className="flex bg-[#716F6F] text-[#FFFFFF] text-[12px] px-[18px] py-[4px]">Уверенность</span>
                <span className="flex bg-[#716F6F] text-[#FFFFFF] text-[12px] px-[18px] py-[4px]">Свобода</span>
                <span className="flex bg-[#716F6F] text-[#FFFFFF] text-[12px] px-[18px] py-[4px]">Творчество</span>
              </div>
            </div>
          </article>
        </li>
      </ul>

    </section>
  )
}