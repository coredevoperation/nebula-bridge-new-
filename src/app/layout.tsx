
import type { Metadata } from 'next'
import { Exo, Orbitron } from "next/font/google"
import './globals.css'
import { Header, Socials, TermsPopup } from "@/components"
import ReduxProvider from "@/redux/Provider" 

const orbitron = Orbitron({
   subsets: ['latin'],
   display: 'swap',
   variable: "--font-orbitron"
})

const exo = Exo({
   subsets: ['latin'],
   display: 'swap',
   variable: "--font-exo"
})

export const metadata: Metadata = {
  title: 'Nebula Bridge',
  description: 'nebula website',
  keywords: ['nebula bridge', 'bridge nebula']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <ReduxProvider>
      <html lang="en" className={`${orbitron.variable} ${exo.variable}`}>
        <body className={`main_bg transition-all font-exo duration-[1.5s] delay-300 md:bg-center bg-cover bg-no-repeat w-full`}>
          <TermsPopup />
          
          <>
            <Header />
              {children}
            <Socials />
          </>
        </body>
      </html>
    </ReduxProvider>
  )
}
