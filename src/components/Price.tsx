export default function Price() {
  return (   
    <section className="price flex flex-col px-[8%] py-[2%]">
      <h2 className="price__title text-[#5DBFD0] text-[48px] font-bold pb-[16px] text-center">
        Цены
      </h2>

      <ul className="flex flex-col price__list--general justify-between gap-[32px] list-none pl-[0px]">
        <li>         
          <article className="relative price__article w-full overflow-hidden">
            <div className="p-[32px]">
              <h3 className="mt-[0px] text-[#FFFFFF] text-[18px]">Пробное занятие</h3>
              <div className="price__text">
                <div className="flex justify-between py-[6px] border-b border-b-[#B0B0B0]">
                  <span className="text-[#B0B0B0] font-[100]">1 пробное занятие</span>
                  <span className="text-[#5DBFD0]">3.000тг</span>
                </div>
                <div className="flex justify-between py-[6px] border-b-[0.5px] border-b-[#B0B0B0]">
                  <span className="text-[#B0B0B0] font-[100]">3 пробных занятия</span>
                  <span className="text-[#5DBFD0]">9.000тг</span>
                </div>
                <div className="flex justify-between py-[6px] border-b-[0.5px] border-b-[#B0B0B0]">
                  <span className="text-[#B0B0B0] font-[100]">Разовое занятие взрослый 1 час</span>
                  <span className="text-[#5DBFD0]">6.000тг</span>
                </div>
                <div className="flex justify-between py-[6px] border-b-[0.5px] border-b-[#B0B0B0]">
                  <span className="text-[#B0B0B0] font-[100]">Разовое занятие взрослый 1,5 часа</span>
                  <span className="text-[#5DBFD0]">7.500тг</span>
                </div>
                <div className="flex justify-between py-[6px] border-b-[0.5px] border-b-[#B0B0B0]">
                  <span className="text-[#B0B0B0] font-[100]">Разовое занятие для детей 1 час</span>
                  <span className="text-[#5DBFD0]">5.000тг</span>
                </div>
                <div className="flex py-[6px] justify-between">
                  <span className="text-[#B0B0B0] font-[100]">Разовое занятие для детей 1,5 часа</span>
                  <span className="text-[#5DBFD0]">6.500тг</span>
                </div>
              </div>

            </div>
          </article>
        </li>
        <li>
          <article className="relative price__article w-full overflow-hidden">
            <div className="p-[32px]">
              <h3 className="mt-[0px] text-[#FFFFFF] text-[18px]">Индивидуальные занятия</h3>
              <div className="price__text">
                <div className="flex justify-between py-[6px] border-b-[0.5px] border-b-[#B0B0B0]">
                  <span className="text-[#B0B0B0] font-[100]">1 занятие (1-3 человека)</span>
                  <span className="text-[#5DBFD0]">15.000тг</span>
                </div>
                <div className="flex justify-between py-[6px] border-b-[0.5px] border-b-[#B0B0B0]">
                  <span className="text-[#B0B0B0] font-[100]">10 занятий на 2 месяца (1-3 человека)</span>
                  <span className="text-[#5DBFD0]">130.000тг</span>
                </div>
                <div className="flex justify-between py-[6px]">
                  <span className="text-[#B0B0B0] font-[100]">20 посещений к разным тренерам в течение месяца</span>
                  <span className="text-[#5DBFD0]">45.000тг</span>
                </div>
              </div>

            </div>
          </article>
        </li>
      </ul>

      <div>
        <h3 className="text-[#5DBFD0] price__subscription text-[32px] font-bold mb-6 text-center">
          Взрослый абонемент
        </h3>
        <ul className="flex flex-col price__list--adults justify-between gap-[32px] list-none pl-[0px]">
          <li>         
            <article className="relative price__article w-full overflow-hidden">
              <div className="p-[32px]">
                <h4 className="mt-[0px] text-[#FFFFFF] text-[18px]">1 раз в неделю</h4>
                <div className="price__text">
                  <div className="flex justify-between py-[6px] border-b-[0.5px] border-b-[#B0B0B0]">
                    <span className="text-[#B0B0B0] font-[100]">4 занятия (1 час) - 1 месяц</span>
                    <span className="text-[#5DBFD0]">20.000тг</span>
                  </div>
                  <div className="flex justify-between py-[6px]">
                    <span className="text-[#B0B0B0] font-[100]">4 занятия (1,5 часа) - 1 месяц</span>
                    <span className="text-[#5DBFD0]">24.000тг</span>
                  </div>
                </div>

              </div>
            </article>
          </li>
          <li>
            <article className="relative price__article w-full overflow-hidden">
              <div className="p-[32px]">
                <h4 className="mt-[0px] text-[#FFFFFF] text-[18px]">2 раза в неделю</h4>
                <div className="price__text">
                  <div className="flex justify-between py-[6px] border-b-[0.5px] border-b-[#B0B0B0]">
                    <span className="text-[#B0B0B0] font-[100]">8 занятий - 1 месяц (1 заморозка в подарок)</span>
                    <span className="text-[#5DBFD0]">29.000тг</span>
                  </div>
                  <div className="flex justify-between py-[6px] border-b-[0.5px] border-b-[#B0B0B0]">
                    <span className="text-[#B0B0B0] font-[100]">24 занятия - 3 месяца (3 заморозки в подарок)</span>
                    <span className="text-[#5DBFD0]">70.000тг</span>
                  </div>
                  <div className="flex justify-between py-[6px] border-b-[0.5px] border-b-[#B0B0B0]">
                    <span className="text-[#B0B0B0] font-[100]">48 занятий - 6 месяцев (6 заморозок в подарок)</span>
                    <span className="text-[#5DBFD0]">147.000тг</span>
                  </div>
                  <div className="flex justify-between py-[6px]">
                    <span className="text-[#B0B0B0] font-[100]">96 занятий - 12 месяцев (12 заморозок в подарок)</span>
                    <span className="text-[#5DBFD0]">229.500тг</span>
                  </div>
                </div>
              </div>
            </article>
          </li>
          <li>
            <article className="relative price__article w-full overflow-hidden">
              <div className="p-[32px]">
                <h4 className="mt-[0px] text-[#FFFFFF] text-[18px]">3 раза в неделю</h4>
                <div className="price__text">
                  <div className="flex justify-between py-[6px] border-b-[0.5px] border-b-[#B0B0B0]">
                    <span className="text-[#B0B0B0] font-[100]">12 занятий - 1 месяц (1 заморозка в подарок)</span>
                    <span className="text-[#5DBFD0]">32.000тг</span>
                  </div>
                  <div className="flex justify-between py-[6px] border-b-[0.5px] border-b-[#B0B0B0]">
                    <span className="text-[#B0B0B0] font-[100]">36 занятий - 3 месяца (3 заморозки в подарок)</span>
                    <span className="text-[#5DBFD0]">78.000тг</span>
                  </div>
                  <div className="flex justify-between py-[6px] border-b-[0.5px] border-b-[#B0B0B0]">
                    <span className="text-[#B0B0B0] font-[100]">72 занятия - 6 месяцев (10 заморозок в подарок)</span>
                    <span className="text-[#5DBFD0]">162.000тг</span>
                  </div>
                  <div className="flex justify-between py-[6px]">
                    <span className="text-[#B0B0B0] font-[100]">144 занятий - 12 месяцев (20 заморозок в подарок)</span>
                    <span className="text-[#5DBFD0]">246.500тг</span>
                  </div>
                </div>
              </div>
            </article>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-[#5DBFD0] price__subscription text-[32px] font-bold mb-6 text-center">
          Детский абонемент <span className="text-[#B0B0B0] text-sm">(до 15 лет)</span>
        </h3>
        <ul className="flex flex-col price__list--children justify-between gap-[32px] list-none pl-[0px]">
          <li>
            <article className="relative price__article w-full overflow-hidden">
              <div className="p-[32px]">
                <h4 className="text-[#FFFFFF] text-[18px] mb-4">1 раз в неделю</h4>
                <div className="flex justify-between py-[6px] border-b-[0.5px] border-b-[#B0B0B0]">
                  <span className="text-[#B0B0B0] font-[100]">4 занятия (1 час) - 1 месяц</span>
                  <span className="text-[#5DBFD0]">18.000тг</span>
                </div>
                <div className="flex justify-between py-[6px]">
                  <span className="text-[#B0B0B0] font-[100]">4 занятия (1,5 часа) - 1 месяц</span>
                  <span className="text-[#5DBFD0]">22.000тг</span>
                </div>
              </div>
            </article>
          </li>

          <li>
            <article className="relative price__article w-full overflow-hidden">
              <div className="p-[32px]">
                <h4 className="text-[#FFFFFF] text-[18px] mb-4">2 раза в неделю</h4>
                <div className="flex justify-between py-[6px] border-b-[0.5px] border-b-[#B0B0B0]">
                  <span className="text-[#B0B0B0] font-[100]">8 занятий - 1 месяц (1 заморозка в подарок)</span>
                  <span className="text-[#5DBFD0]">27.000тг</span>
                </div>
                <div className="flex justify-between py-[6px] border-b-[0.5px] border-b-[#B0B0B0]">
                  <span className="text-[#B0B0B0] font-[100]">24 занятия - 3 месяца (3 заморозки в подарок)</span>
                  <span className="text-[#5DBFD0]">68.000тг</span>
                </div>
                <div className="flex justify-between py-[6px] border-b-[0.5px] border-b-[#B0B0B0]">
                  <span className="text-[#B0B0B0] font-[100]">48 занятий - 6 месяцев (6 заморозок в подарок)</span>
                  <span className="text-[#5DBFD0]">138.000тг</span>
                </div>
                <div className="flex justify-between py-[6px]">
                  <span className="text-[#B0B0B0] font-[100]">96 занятий - 12 месяцев (12 заморозок в подарок)</span>
                  <span className="text-[#5DBFD0]">217.000тг</span>
                </div>
              </div>
            </article>
          </li>

          <li>
            <article className="relative price__article w-full overflow-hidden">
              <div className="p-[32px]">
                <h4 className="text-[#FFFFFF] text-[18px] mb-4">3 раза в неделю</h4>
                <div className="flex justify-between py-[6px] border-b-[0.5px] border-b-[#B0B0B0]">
                  <span className="text-[#B0B0B0] font-[100]">12 занятий - 1 месяц (1 заморозка в подарок)</span>
                  <span className="text-[#5DBFD0]">30.000тг</span>
                </div>
                <div className="flex justify-between py-[6px] border-b-[0.5px] border-b-[#B0B0B0]">
                  <span className="text-[#B0B0B0] font-[100]">36 занятий - 3 месяца (5 заморозок в подарок)</span>
                  <span className="text-[#5DBFD0]">73.000тг</span>
                </div>
                <div className="flex justify-between py-[6px] border-b-[0.5px] border-b-[#B0B0B0]">
                  <span className="text-[#B0B0B0] font-[100]">72 занятия - 6 месяцев (10 заморозок в подарок)</span>
                  <span className="text-[#5DBFD0]">153.000тг</span>
                </div>
                <div className="flex justify-between py-[6px]">
                  <span className="text-[#B0B0B0] font-[100]">144 занятий - 12 месяцев (20 заморозок в подарок)</span>
                  <span className="text-[#5DBFD0]">225.000тг</span>
                </div>
              </div>
            </article>
          </li>
        </ul>
      </div>

    </section>
  );
}