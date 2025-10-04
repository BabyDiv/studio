'use client';

import { useState } from 'react';

type Question = {
  question: string;
  answer: string;
};

type Section = {
  title: string;
  items: Question[];
};

const faqSections: Section[] = [
  {
    title: 'Воздушная гимнастика',
    items: [
      { question: 'С какого возраста можно начинать?', answer: 'С 6–7 лет и взрослым без ограничений.' },
      { question: 'Нужна ли специальная подготовка?', answer: 'Нет, сила и гибкость развиваются на занятиях.' },
      { question: 'Есть ли ограничения по здоровью?', answer: 'Людям с серьёзными травмами или сердечно-сосудистыми проблемами — консультация врача.' },
      { question: 'Как быстро освоить базовые элементы', answer: 'Обычно 1–2 месяца регулярных тренировок.' },
    ],
  },
  {
    title: 'Спортивный пилон (Pole Sport)',
    items: [
      { question: 'Можно ли заниматься без танцевального опыта?', answer: 'Да, подходит для новичков любого уровня.' },
      { question: 'Какая одежда нужна?', answer: 'Шорты и обтягивающий топ для контакта кожи с пилоном.' },
      { question: 'Сколько нужно тренироваться, чтобы увидеть результат?', answer: 'Начальные результаты заметны уже через 1–2 месяца.' },
    ],
  },
  {
    title: 'Pole Exotic',
    items: [
      { question: 'Чем отличается от Pole Sport?', answer: 'Сочетает технику пилона с танцевальной пластикой и артистизмом.' },
      { question: 'Нужна ли подготовка?', answer: 'Не обязательно, но сила и гибкость помогают быстрее прогрессировать.' },
      { question: 'Можно ли совмещать с Pole Sport?', answer: 'Да, направления дополняют друг друга.' },
      { question: 'Какая одежда и обувь?', answer: 'Облегающая одежда; часто используются каблуки или специальные платформы.' },
      { question: 'С какого возраста можно начинать?', answer: 'Обычно с 16 лет, есть адаптированные программы для подростков.' },
    ],
  },
];

export default function Questions() {

  const [openIndexes, setOpenIndexes] = useState<(number | null)[]>(faqSections.map(() => null));

  const toggleQuestion = (sectionIndex: number, questionIndex: number) => {
    setOpenIndexes(prev =>
      prev.map((openIndex, i) =>
        i === sectionIndex ? (openIndex === questionIndex ? null : questionIndex) : openIndex
      )
    );
  };

  return (
    <section className="questions flex flex-col px-[8%]">
      <h2 className="questions__title text-[#5DBFD0] text-[48px] font-bold text-center">
        Часто задаваемые вопросы
      </h2>
      <p className="text-[#FFFFFF] questions__description m-[0] text-center">
        Собрали ответы на самые популярные вопросы о воздушной гимнастике и нашей студии. Не нашли ответ? Напишите нам!
      </p>



      <div className="flex flex-col gap-12">
        {faqSections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <div className="flex items-center gap-[8px] mb-4">
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[24px] h-[24px] fill-[#5DBFD0]">
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clipRule="evenodd"
                />
              </svg> */}
              <svg width="800px" height="800px" viewBox="0 0 24 24" className="w-[24px] h-[24px] fill-[#5DBFD0]" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3C7.04 3 3 7.04 3 12C3 16.96 7.04 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3ZM12 19.5C7.86 19.5 4.5 16.14 4.5 12C4.5 7.86 7.86 4.5 12 4.5C16.14 4.5 19.5 7.86 19.5 12C19.5 16.14 16.14 19.5 12 19.5ZM14.3 7.7C14.91 8.31 15.25 9.13 15.25 10C15.25 10.87 14.91 11.68 14.3 12.3C13.87 12.73 13.33 13.03 12.75 13.16V13.5C12.75 13.91 12.41 14.25 12 14.25C11.59 14.25 11.25 13.91 11.25 13.5V12.5C11.25 12.09 11.59 11.75 12 11.75C12.47 11.75 12.91 11.57 13.24 11.24C13.57 10.91 13.75 10.47 13.75 10C13.75 9.53 13.57 9.09 13.24 8.76C12.58 8.1 11.43 8.1 10.77 8.76C10.44 9.09 10.26 9.53 10.26 10C10.26 10.41 9.92 10.75 9.51 10.75C9.1 10.75 8.76 10.41 8.76 10C8.76 9.13 9.1 8.32 9.71 7.7C10.94 6.47 13.08 6.47 14.31 7.7H14.3ZM13 16.25C13 16.8 12.55 17.25 12 17.25C11.45 17.25 11 16.8 11 16.25C11 15.7 11.45 15.25 12 15.25C12.55 15.25 13 15.7 13 16.25Z" fill="#5DBFD0"/>
              </svg>
              <h3 className="text-[#5DBFD0] text-xl text-[32px] font-semibold">{section.title}</h3>
            </div>

            <ul className="flex flex-col divide-y divide-[#716F6F] border border-[#716F6F] px-[24px] m-[0] list-none text-white">
              {section.items.map((item, questionIndex) => (
                <li key={questionIndex}>
                  <button
                    className="w-full text-left bg-transparent flex justify-between items-center py-[18px] px-[0] cursor-pointer bg-transparent border-none"
                    onClick={() => toggleQuestion(sectionIndex, questionIndex)}
                  >
                    <p className="text-[#FFFFFF] text-[16px] m-[0]">{item.question}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="[#FFFFFF]"
                      className={`w-[24px] h-[24px] fill-[#716F6F] shrink-0 transition-transform duration-300 ${
                        openIndexes[sectionIndex] === questionIndex ? 'rotate-180' : ''
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {openIndexes[sectionIndex] === questionIndex && (
                    <p className="px-6 pb-4 mt-[0] questions__answer text-[#FFFFFF] text-[16px]">{item.answer}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  )
}