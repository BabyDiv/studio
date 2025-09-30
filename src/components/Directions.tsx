'use client';
import Image from 'next/image';

export default function Directions() {
  return (
    <section className="directions flex flex-col px-[8%]">
      <h2 className="directions__title text-[#5DBFD0] text-[48px] font-bold text-center">
        Направления
      </h2>
      <ul className="flex flex-col directions__list justify-between gap-[32px] list-none pl-[0px]">
        <li>         
          <article className="relative directions__article w-full overflow-hidden">
            <Image
              src="/bg-hero.jpg"
              alt="Pole Sport"
              width={400}
              height={200}
              className="object-cover w-full h-auto"
              priority
            />
            <div className="p-[32px]">
              <h3 className="mt-[0px] text-[#FFFFFF] text-[18px]">Спортивный пилон <span className="directions__name">(Pole Sport)</span></h3>
              <p className="directions__text text-[#B0B0B0]">
              A graceful and dynamic discipline where you create figures and perform tricks using long silk sheets.
              </p>
              <div className="flex flex-row gap-[2px] flex-wrap">
                <span className="flex bg-[#716F6F] text-[#FFFFFF] text-[12px] px-[18px] py-[4px]">Grace</span>
                <span className="flex bg-[#716F6F] text-[#FFFFFF] text-[12px] px-[18px] py-[4px]">Flexibility</span>
                <span className="flex bg-[#716F6F] text-[#FFFFFF] text-[12px] px-[18px] py-[4px]">Health</span>
              </div>
            </div>
          </article>
        </li>
        <li>
          <article className="relative directions__article w-full overflow-hidden border">
            <Image
              src="/bg-hero.jpg"
              alt="Pole Sport"
              width={400}
              height={200}
              className="object-cover w-full h-auto"
              priority
            />
            <div className="p-[32px]">
              <h3 className="mt-[0px] text-[#FFFFFF] text-[18px]">Спортивный пилон <span className="directions__name">(Pole Sport)</span></h3>
              <p className="directions__text text-[#B0B0B0]">
              A graceful and dynamic discipline where you create figures and perform tricks using long silk sheets.
              </p>
              <div className="flex flex-row gap-[2px] flex-wrap">
                <span className="flex bg-[#716F6F] text-[#FFFFFF] text-[12px] px-[18px] py-[4px]">Grace</span>
                <span className="flex bg-[#716F6F] text-[#FFFFFF] text-[12px] px-[18px] py-[4px]">Flexibility</span>
                <span className="flex bg-[#716F6F] text-[#FFFFFF] text-[12px] px-[18px] py-[4px]">Health</span>
              </div>
            </div>
          </article>
        </li>
        <li>
          <article className="relative directions__article w-full overflow-hidden border">
            <Image
              src="/bg-hero.jpg"
              alt="Pole Sport"
              width={400}
              height={200}
              className="object-cover w-full h-auto"
              priority
            />
            <div className="p-[32px]">
              <h3 className="mt-[0px] text-[#FFFFFF] text-[18px]">Спортивный пилон <span className="directions__name">(Pole Sport)</span></h3>
              <p className="directions__text text-[#B0B0B0]">
              A graceful and dynamic discipline where you create figures and perform tricks using long silk sheets.
              </p>
              <div className="flex flex-row gap-[2px] flex-wrap">
                <span className="flex bg-[#716F6F] text-[#FFFFFF] text-[12px] px-[18px] py-[4px]">Grace</span>
                <span className="flex bg-[#716F6F] text-[#FFFFFF] text-[12px] px-[18px] py-[4px]">Flexibility</span>
                <span className="flex bg-[#716F6F] text-[#FFFFFF] text-[12px] px-[18px] py-[4px]">Health</span>
              </div>
            </div>
          </article>
        </li>
      </ul>

    </section>
  )
}