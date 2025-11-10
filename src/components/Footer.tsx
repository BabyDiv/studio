import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section id="footer" className="footer bg-[#5DBFD0] flex flex-col items-center justify-between text-[#000000] mt-[54px] py-[3%] px-[8%]">
      <div className="w-1/3">
        <ul className="pl-[0] list-none">
          <li className="my-[22px]">
            <Link href="/" aria-label="Логотип">
              <Image src="/logo-footer.svg" alt="Логотип" width={120} height={40} className="footer__logo text-black" />
            </Link>
          </li>
          <li>
            <ul className="flex flex-col gap-[8px] pl-[0] list-none">
              <li>
                <Link href="/" aria-label="Адрес" className="text-[#000000] flex flex-col align-start gap-[8px] no-underline">
                  <span>Улица Маметовой, 67226, офис, 2 этаж,</span>
                  <span> Алмалинский район, Алматы, 050004.</span>
                </Link>
              </li>
              <li>
                <Link href="/" aria-label="Номер телефона" className="text-[#000000] no-underline">
                  <span className="break-words">+7‒700‒333‒40‒10</span>
                </Link>
              </li>
              <li>
                <Link href="/" aria-label="Номер телефона" className="text-[#000000] no-underline">
                  <span className="break-words">+7‒775‒835‒56‒13</span>
                </Link>
              </li>
              <li>
                <Link href="/" aria-label="Почта" className="flex flex-wrap text-[#000000] no-underline">
                  <span className="break-all">info@kamilakimstudio.com</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="w-1/3">
        <ul className="flex flex-col footer__links items-start pl-[0] list-none">
          <li>
            <h4>Быстрые ссылки</h4>
          </li>
          <li>
            <ul className="flex flex-col gap-[8px] pl-[0] list-none">
              <li>
                <Link href="#directions" className="text-[#000000] no-underline">
                  <span>Направления</span>
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="text-[#000000] no-underline">
                  <span>Расписание</span>
                </Link>
              </li>
              <li>
                <Link href="#teachers" className="text-[#000000] no-underline">
                  <span>Тренеры</span>
                </Link>
              </li>
              <li>
                <Link href="#price" className="text-[#000000] no-underline">
                  <span>Стоимость</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="w-1/3">
        <ul className="flex flex-col footer__social-media items-start pl-[0] list-none">
          <li>
            <h4>Мы в соцсетях</h4>
          </li>
          <li>
            <ul className="flex flex-row gap-[12px] list-none pl-[0]">
              <li>
              <Link href="/" aria-label="Логотип">
                <Image src="/instagram.svg" alt="Логотип" width={20} height={20} className="text-black" />
              </Link>      
              </li>
              <li>
                <Link href="/" aria-label="Логотип">
                  <Image src="/telegram.svg" alt="Логотип" width={20} height={20} className="text-black" />
                </Link>
              </li>
              <li>
                <Link href="/" aria-label="Логотип">
                  <Image src="/whatsapp.svg" alt="Логотип" width={20} height={20} className="text-black" />
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}