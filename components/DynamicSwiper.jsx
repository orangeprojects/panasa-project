'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image'

export default function DynamicSwiper() {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
      style={{
        "--swiper-pagination-color": "#2200CC",
      }}
    >
      <SwiperSlide>
        <div className="grid grid-cols-2">
          <Image
            src="/image1.jpg"
            alt="Imagen 1"
            width={500}
            height={300}
            className="w-full h-auto rounded-md shadow-md"
          />
          <Image
            src="/image2.jpg"
            alt="Imagen 2"
            width={500}
            height={300}
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid grid-cols-2">
          <Image
            src="/image1.jpg"
            alt="Imagen 3"
            width={500}
            height={300}
            className="w-full h-auto rounded-md shadow-md"
          />
          <Image
            src="/image2.jpg"
            alt="Imagen 4"
            width={500}
            height={300}
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid grid-cols-2">
          <Image
            src="/image1.jpg"
            alt="Imagen 5"
            width={500}
            height={300}
            className="w-full h-auto rounded-md shadow-md"
          />
          <Image
            src="/image2.jpg"
            alt="Imagen 6"
            width={500}
            height={300}
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

