import './globals.css';

export const metadata = {
  title: 'Kamila Kim Studio',
  description: 'Студия воздушной гимнастики и танцев на пилоне в Алматы',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap&subset=latin,cyrillic"
          rel="stylesheet"
        /> */}
      </head>
      <body className="bg-[#2E2E2E]">
        {children}     
      </body>
    </html>
  )
}