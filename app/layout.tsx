import './globals.css'
import { ThemeProvider } from './context/themeProvider'
import { Metadata } from 'next'
import { Inter } from "next/font/google";
import { ThemeSwitcher } from './components/ThemeSwitcher';
import Navbar from './components/Navbar';


export const metadata: Metadata = {
  title: {
    default: 'Punkies y Cerebro',
    template: 'punk rock de la ciudad de Medellín',
  },
  description:
    'Banda activa de punk rock',
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
        <body className={`${inter.className} bg-slate-50 dark:bg-[#0d1117]`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            <main>{children}</main>
          </ThemeProvider>
        </body>
    </html>
  )
}