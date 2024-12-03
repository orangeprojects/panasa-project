import { Outfit } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata = {
  title: 'Panasa',
  description: 'Sitio web de Panasa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={outfit.variable}>
      <body className={`font-sans ${outfit.className}`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-white border-t py-4">
          <div className="container mx-auto px-4 text-center text-gray-600">
            © {new Date().getFullYear()} Panasa. Todos los derechos reservados.
          </div>
        </footer>
      </body>
    </html>
  )
}

