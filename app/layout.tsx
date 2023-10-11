import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'


export const metadata: Metadata = {
  title: 'Componentes DaniTSOFT',
  description: 'Repositorio de componentes, desarrollo de paginas web componentadas a su necesidad. componentes publicos, utilizacion de tecnologias como Tailwindcss, Nextjs y Typescript, lo mejor del mercado de la programacion web.',
  keywords: 'web, paginas web, creacion, dicen~o, seo, ',
}

export default function RootLayout({
  children,
  classprops,
  
}: {
  children: React.ReactNode;
  classprops: string;
}) {
  return (
    <html lang="es">
      <Navbar/>
      <body className={classprops}>{children}</body>
      <Footer/>
    </html>
  )
}
