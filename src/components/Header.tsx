'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);


  return (
    <header className={`header w-full fixed top-0 left-0 z-[100] box-border ${menuOpen ? 'px-[0] py-[0]' : 'px-[3%] py-[2%]'}`}>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-[95]"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div className={`flex header__wrapper flex-col justify-start gap-[100px] ${menuOpen ? 'bg-[rgba(0,0,0,0.95)] px-[3%] pt-[2%] pb-[5%] h-screen' : ''}`}>

        <div className="flex flex-row justify-between">
          <Link href="/" aria-label="Логотип">
            <Image src="/logo.svg" alt="Логотип" width={180} height={40} />
          </Link>

          <button
            className="burger w-[42px] h-[42px] cursor-pointer bg-transparent border-none z-[40] relative"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Открыть меню"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute top-[0] left-[0] w-full h-full stroke-white transition-all duration-400 ease-in-out ${
                menuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-45 scale-75'
              }`}
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

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute top-[0] left-[0] w-full h-full stroke-white transition-all duration-400 ease-in-out ${
                menuOpen ? 'opacity-0 rotate-45 scale-75' : 'opacity-100 rotate-0 scale-100'
              }`}
              viewBox="0 0 42 42"
              fill="none"
            >
              <path
                d="M8 12H34M8 21H34M8 30H34"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>


        <div
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } nav-wrapper top-full w-full flex-col items-center px-[5vw] py-[4vw] bg-[rgba(0,0,0,0.95)]`}
        >

          <nav className="flex nav flex-col items-center gap-[18px] p-[24px]">
            <Link href="#hero" className="nav__item text-[18px] py-1 no-underline">Направления</Link>
            <Link href="#services" className="nav__item text-[18px] py-1 no-underline">Расписание</Link>
            {/* <div className="relative group nav__item">
              <Link href="#services" className="text-[18px] py-1 text-[#FFFFFF] no-underline block">
                Расписание
              </Link>
              <div className="absolute left-0 top-[32px] mt-1 hidden group-hover:flex flex-col bg-black bg-opacity-90 px-4 py-2 rounded shadow-md z-50 min-w-[160px]">
                <Link href="#reviews" className="text-[18px] py-1 text-[#FFFFFF] no-underline hover:underline">
                  Тренеры
                </Link>
              </div>
            </div> */}
            <Link href="#gallery" className="nav__item text-[18px] py-1 no-underline">Цены</Link>
            <Link href="#reviews" className="nav__item text-[18px] py-1 no-underline">Тренеры</Link>
            <Link href="#galery" className="nav__item text-[18px] py-1 no-underline">Галерея</Link>
            {/* <Link href="#reviews" className="nav__item text-[18px] py-1 no-underline">Отзывы</Link> */}
            <Link href="#contact" className="nav__item text-[18px] py-1 no-underline">Контакты</Link>
          </nav>

          <a
            href="https://wa.me/77000000000"
            target="_blank"
            rel="noopener noreferrer"
            className={` mt-4 nav__subscribe button-radius bg-transparent px-[24px] py-[6px] text-[18px] font-[600] cursor-pointer no-underline border-2 border-[#5DBFD0] hover:rounded-none 
              relative overflow-hidden transition-all duration-700 ease-in-out ${menuOpen ? 'mt-[8px]' : 'mt-[0px]'} `}
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
                e.currentTarget.parentElement.style.borderImage = 'linear-gradient(90deg, #66FFFF 0%, #5DBFD0 50%, #00E5FF 100%) 1';
                e.currentTarget.parentElement.style.borderImageSlice = '1';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundPosition = 'left';
                e.currentTarget.parentElement.style.borderImage = 'none';
              }}
            >
              Записаться
            </span>
          </a>

        </div>
      </div>

    </header>
  );
}
