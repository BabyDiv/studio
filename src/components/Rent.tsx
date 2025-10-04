export default function Rent() {
  return (  
    <section className="rent flex flex-col px-[8%]">
      <h2 className="rent__title text-[#5DBFD0] text-[48px] font-bold text-center">
        Аренда
      </h2>

      <ul className="flex flex-col rent__list justify-between gap-[32px] list-none pl-[0px] m-[0px]">
        <li>         
          <article className="relative rent__article w-full overflow-hidden">
            <div className="p-[32px]">
              <div className="mt-[0px] mb-[24px] text-[#FFFFFF] flex justify-between text-[18px]">
                <span className="text-[#FFFFFF] text-[18px] mb-4">Аренда студии</span>
                <span className="text-[#5DBFD0]">10.000тг / час</span>
              </div>
              <div className="rent__text text-[14px]">
                <div className="flex justify-between py-[6px] text-[#B0B0B0] border-b-[0.5px] border-b-[#B0B0B0]">
                  Наша студия оборудована всем необходимым для проведения тренировок, фотосессий, 
                  видеосъёмок и мероприятий. Профессиональное освещение, зеркала и качественное воздушное оборудование.
                </div>
                <div className="flex justify-between py-[6px]">
                  <span className="text-[#B0B0B0] font-[100]">+ 4 человека</span>
                  <span className="text-[#5DBFD0]">Цена договорная</span>
                </div>
              </div>

            </div>
          </article>
        </li>
        <li>
          <article className="relative rent__article w-full overflow-hidden">
            <div className="p-[32px]">
              <div className="mt-[0px] mb-[24px] text-[#FFFFFF] flex justify-between text-[18px]">
                <span className="text-[#FFFFFF] text-[18px] mb-4">Аренда оборудования</span>
                <span className="text-[#5DBFD0] text-right">20.000тг / сутки</span>
              </div>
              <div className="rent__text text-[14px]">
                <div className="flex justify-between py-[6px] text-[#B0B0B0] border-b-[0.5px] border-b-[#B0B0B0]">
                  <span className="text-[#B0B0B0] font-[100]">Воздушное кольцо</span>
                  <span className="text-[#5DBFD0] text-right">Диаметр от 80 см до 1 м</span>
                </div>
                <div className="flex justify-between py-[6px] border-b-[0.5px] border-b-[#B0B0B0]">
                  <span className="text-[#B0B0B0] font-[100]">Воздушное полотно</span>
                  <span className="text-[#5DBFD0] text-right">Длина 6 м, габардин</span>
                </div>
                <div className="flex justify-between py-[6px] border-b-[0.5px] border-b-[#B0B0B0]">
                  <span className="text-[#B0B0B0] font-[100]">Воздушный куб</span>
                  <span className="text-[#5DBFD0] text-right">Проф оборудование</span>
                </div>
                <div className="flex justify-between py-[6px]">
                  <span className="text-[#B0B0B0] font-[100]">Воздушные петли</span>
                  <span className="text-[#5DBFD0] text-right">Для всех уровней подготовки</span>
                </div>
              </div>

            </div>
          </article>
        </li>
      </ul>

    </section>
  );
}