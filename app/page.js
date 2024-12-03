'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import DynamicSwiper from '../components/DynamicSwiper'
import Categorias from '@/components/Categorias'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6">
      <DynamicSwiper />
      <Categorias />
    </div>
    
  )
}

