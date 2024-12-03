import Image from 'next/image'
import { useState } from 'react'

export default function Categorias() {
  // Creamos un estado separado para cada categoría
  const [hoveredIcon1, setHoveredIcon1] = useState(null)
  const [hoveredIcon2, setHoveredIcon2] = useState(null)
  const [hoveredIcon3, setHoveredIcon3] = useState(null)

  return (
    <div className="w-full mb-8">
      <div className="relative w-full h-[150px] mb-4">
        {/* Banner Categorías */}
        <Image
          src="/placeholder.png"
          alt="Categorías banner"
          layout="fill"
          objectFit="cover"
        />
        <h2 className="absolute bottom-2 left-4 text-[#2200CC] text-8xl font-semibold tracking-wide">
          Categorías
        </h2>
      </div>
      <div className="flex justify-between space-x-4 px-8">
        {/* Categoría 1 */}
        <div className="w-1/3 max-w-[350px]">
          <Image
            src="/placeholder.png" // Imagen de la categoría 1
            alt="Categoría 1"
            width={350}
            height={200}
            layout="responsive"
          />
          <div className="relative -mt-8 bg-white rounded-lg shadow-md p-2 mx-auto w-[90%]">
            <div className="flex justify-center items-center space-x-4">
              {/* Iconos para la categoría 1 */}
              {["/placeholder.png", "/placeholder.png", "/placeholder.png"].map((icono, iconIndex) => (
                <div
                  key={iconIndex}
                  className="relative"
                  onMouseEnter={() => setHoveredIcon1(iconIndex)}
                  onMouseLeave={() => setHoveredIcon1(null)}
                >
                  <Image
                    src={icono}
                    alt={`Icono ${iconIndex + 1}`}
                    width={70}
                    height={40}
                    className={`transition-all duration-300 ${
                      hoveredIcon1 === iconIndex ? 'scale-125 shadow-lg' : ''
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categoría 2 */}
        <div className="w-1/3 max-w-[350px]">
          <Image
            src="/placeholder.png" // Imagen de la categoría 2
            alt="Categoría 2"
            width={350}
            height={200}
            layout="responsive"
          />
          <div className="relative -mt-8 bg-white rounded-lg shadow-md p-2 mx-auto w-[90%]">
            <div className="flex justify-center items-center space-x-4">
              {/* Iconos para la categoría 2 */}
              {["/placeholder.png", "/placeholder.png", "/placeholder.png"].map((icono, iconIndex) => (
                <div
                  key={iconIndex}
                  className="relative"
                  onMouseEnter={() => setHoveredIcon2(iconIndex)}
                  onMouseLeave={() => setHoveredIcon2(null)}
                >
                  <Image
                    src={icono}
                    alt={`Icono ${iconIndex + 1}`}
                    width={70}
                    height={40}
                    className={`transition-all duration-300 ${
                      hoveredIcon2 === iconIndex ? 'scale-125 shadow-lg' : ''
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categoría 3 */}
        <div className="w-1/3 max-w-[350px]">
          <Image
            src="/placeholder.png" // Imagen de la categoría 3
            alt="Categoría 3"
            width={350}
            height={200}
            layout="responsive"
          />
          <div className="relative -mt-8 bg-white rounded-lg shadow-md p-2 mx-auto w-[90%]">
            <div className="flex justify-center items-center space-x-4">
              {/* Iconos para la categoría 3 */}
              {["/placeholder.png", "/placeholder.png", "/placeholder.png"].map((icono, iconIndex) => (
                <div
                  key={iconIndex}
                  className="relative"
                  onMouseEnter={() => setHoveredIcon3(iconIndex)}
                  onMouseLeave={() => setHoveredIcon3(null)}
                >
                  <Image
                    src={icono}
                    alt={`Icono ${iconIndex + 1}`}
                    width={70}
                    height={40}
                    className={`transition-all duration-300 ${
                      hoveredIcon3 === iconIndex ? 'scale-125 shadow-lg' : ''
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
