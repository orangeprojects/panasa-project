import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-2 py-4 grid grid-cols-12 items-center">
        {/* Logo en la parte izquierda (columna 1-2) */}
        <div className="col-span-2 flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo de Panasa"
              width={50}
              height={50}
              priority
            />
          </Link>
        </div>

        {/* Espacio vacío entre logo y el menú */}
        <div className="col-span-3"></div>

        {/* Menú y carrito en la parte derecha (columna 5-12) */}
        <div className="col-span-7 flex items-center justify-between gap-8">
          {/* Menú */}
          <ul className="flex items-center gap-6">
            {['HOME', 'PRODUCTOS', 'NOSOTROS', 'CONTÁCTANOS'].map((item) => (
              <li key={item}>
                <Link
                  href={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                  className={`text-[#2200CC] hover:text-white hover:bg-[#2200CC] px-4 py-2 rounded transition duration-300 ${
                    item === 'HOME' ? 'font-bold' : ''
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Carrito */}
          <Link
            href="/carrito"
            className="text-[#2200CC] hover:text-white hover:bg-[#2200CC] px-4 py-2 rounded flex items-center transition duration-300"
          >
            <ShoppingCart className="w-6 h-6" />
          </Link>
        </div>
      </nav>
    </header>
  )
}
