import TopLinks from '@/components/TopLinks/TopLinks'
import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation/Navigation'
import "./layout.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='screenSize'>
        <TopLinks></TopLinks>
        </div>
        <Navigation></Navigation>
        {children}
      </body>
    </html>
  )
}
