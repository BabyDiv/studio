'use client';
import { useState } from 'react';

const schedule = {
  Пн: [
    '10:00 Pole Sport (детская группа) — Илона',
    '11:00 Pole Sport (mix группа) — Илона',
    '12:00 Pole Exotic (взрослая группа) — Александра',
    '15:00 Pole Sport (детская группа) — Ева',
    '16:00 Pole Sport (продолжающая группа) — Ева',
    '18:00 Pole Exotic (взрослая группа) — Дана',
    '19:00 Pole Exotic (взрослая группа) — Дана',
    '20:00 Pole Exotic (взрослая группа) — Камила',
  ],
  Вт: [
    '09:30 Pole Sport (детская группа) — Камила',
    '17:00 Pole Sport (детская группа) — Мария',
    '18:00 Pole Sport (mix группа) — Мария',
    '19:00 Pole Exotic (взрослая группа) — Мария',
    '20:00 Pole Exotic / Pole Sport (взрослая группа) — Дана',
  ],
  Ср: [
    '10:00 Pole Sport (детская группа) — Илона',
    '11:00 Pole Sport (mix группа) — Илона',
    '12:00 Pole Sport (взрослая группа) — Александра',
    '15:00 Aerial Sport (детская группа) — Ева',
    '16:00 Aerial Sport (продолжающая группа) — Ева',
    '18:00 Pole Sport (взрослая группа) — Дана',
    '19:00 Pole Sport (взрослая группа) — Дана',
    '20:00 Pole Exotic (взрослая группа) — Камила',
  ],
  Чт: [
    '09:30 Aerial Sport (детская группа) — Камила',
    '17:00 Aerial Sport (детская группа) — Мария',
    '18:00 Aerial Sport (mix группа) — Мария',
    '19:00 Aerial Sport (взрослая группа) — Мария',
    '20:00 Aerial Sport (взрослая группа) — Дана',
  ],
  Пт: [
    '10:00 Aerial Sport (детская группа) — Илона',
    '11:00 Aerial Sport (mix группа) — Илона',
    '12:00 Aerial Sport (взрослая группа) — Александра',
    '15:00 Aerial Sport (детская группа) — Ева',
    '16:00 Aerial Sport (продолжающая группа) — Ева',
    '18:00 Aerial Sport (взрослая группа) — Дана',
    '19:00 Aerial Sport (взрослая группа) — Дана',
    '20:00 Aerial Sport (взрослая группа) — Камила',
  ],
  Сб: [
    '10:00 Aerial Sport (детская группа) — Илона',
    '11:30 Aerial Sport (mix группа) — Илона',
    '12:30 Aerial Sport (взрослая группа) — Илона',
  ],
  Вс: [
    '10:00 Aerial Sport (детская группа) — Илона',
    '11:30 Aerial Sport (mix группа) — Илона',
    '12:30 Aerial Sport (взрослая группа) — Илона',
  ],
};

export default function Schedule() {

  const days = Object.keys(schedule);

  const [activeDay, setActiveDay] = useState(days[0]);

  return (
    // <section className="schedule px-[8%] py-[2%] max-w-4xl mx-auto">
    //   <div className="flex flex-wrap justify-center gap-2 mb-6">
    //     {days.map(day => (
    //       <button
    //         key={day}
    //         onClick={() => setActiveDay(day)}
    //         className={`px-4 py-2 rounded border transition-all duration-300
    //           ${
    //             activeDay === day
    //               ? 'bg-[#5DBFD0] text-white border-[#5DBFD0]'
    //               : 'bg-white text-black border-gray-300 hover:border-[#5DBFD0]'
    //           }
    //         `}
    //       >
    //         {day}
    //       </button>
    //     ))}
    //   </div>

    //   <div className="bg-white p-6 rounded shadow-md border border-gray-200">
    //     <ul className="space-y-2 list-disc pl-6 text-[16px] text-gray-800">
    //       {schedule[activeDay].length > 0 ? (
    //         schedule[activeDay].map((item, index) => <li key={index}>{item}</li>)
    //       ) : (
    //         <li>Нет занятий</li>
    //       )}
    //     </ul>
    //   </div>
    // </section>

    <section className="schedule flex flex-col px-[8%] max-w-4xl mx-auto">

      <h2 className="schedule__title text-[#5DBFD0] text-[48px] font-bold text-center">
        Расписание
      </h2>
  {/* Таб-кнопки */}
      <div className="flex flex-row schedule__tabs flex-nowrap mb-[42px] justify-between w-full">
        {Object.keys(schedule).map(day => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`text-[18px] text-[#FFFFFF] whitespace-nowrap w-[15%] py-[12px] 
              transition-all duration-300
              focus:outline-none focus:ring-0 active:outline-none active:ring-0 border-none
              ${
                activeDay === day
                  ? 'bg-[#716F6F] text-white'
                  : 'bg-transparent text-[#FFFFFF] hover:bg-[#716F6F]'
              }
            `}
          >
            {day}
          </button>
        ))}
      </div>

  {/* Контент выбранного дня */}
      <div className="bg-white">
        {schedule[activeDay].length > 0 ? (
          <div className="space-y-4 flex flex-col gap-[16px]">
            {schedule[activeDay].map((item, index) => {
              const match = item.match(/^([\d:]+)\s+(.+?)\s+—\s+(.+)$/);
              const time = match?.[1] || '';
              const title = match?.[2] || item;
              const coach = match?.[3] || '';

              return (
                <div key={index}>
                  <div
                    className="flex flex-row tablet-screen justify-between px-[42px] py-[18px] border border-[#716F6F]"
                  >
                    <div className="flex flex-row items-center gap-[4px]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B0B0B0" width="24" height="24" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <span className="font-medium min-w-[60px] text-[#FFFFFF]">{time}</span>
                    </div>
                    <div className="flex flex-col flex-1 text-left">
                      <span className="text-[#FFFFFF]">{title}</span>
                    </div>
                    <div className="flex flex-row flex-1 text-left gap-[4px]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B0B0B0" width="24" height="24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                      <span className="text-[#FFFFFF]">{coach}</span>
                    </div>
                    <div>
                      <a
                        href="https://wa.me/77000000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          mt-4
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
                  </div>


                  <div
                    className="flex flex-col mobile-screen justify-between px-[24px] py-[18px] border border-[#716F6F]"
                  >
                    {/* Время + Тренер (мобилка: в одной строке, тренер справа) */}
                    <div className="flex justify-between items-center mb-2">
                      {/* Время */}
                      <div className="flex items-center gap-[4px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="#B0B0B0"
                          width="20"
                          height="20"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                        <span className="font-medium min-w-[60px] text-[#FFFFFF]">{time}</span>
                      </div>
                
                      {/* Тренер */}
                      <div className="flex items-center gap-[4px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="#B0B0B0"
                          width="20"
                          height="20"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                          />
                        </svg>
                        <span className="text-[#FFFFFF]">{coach}</span>
                      </div>
                    </div>
                
                    {/* Название занятия */}
                    <div className="flex text-left">
                      <span className="text-[#FFFFFF]">{title}</span>
                    </div>
                
                    {/* Кнопка */}
                    <div className="flex flex-1">
                      <a
                        href="https://wa.me/77000000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          block w-full text-center
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
                  </div>            
                </div>
                
              );
            })}
          </div>
        ) : (
          <p className="text-gray-600">Нет занятий</p>
        )}
      </div>
    </section>
  )
}