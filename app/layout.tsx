import './globals.css'
import ThemeProvider from './modules/themeProvider'
import { Metadata } from 'next'

const metadata: Metadata = {
  title: 'Punkies y Cerebro'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}