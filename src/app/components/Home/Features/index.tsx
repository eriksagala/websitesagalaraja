'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import { FeaturesType } from '@/app/types/features'
import FeaturesSkeleton from '../../Skeleton/Features'

const Features = () => {
  const [features, setFeatures] = useState<FeaturesType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFeatures(data.FeaturesData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='features' className='py-20'>
      {/* Menggunakan w-full dan px-4 sm:px-8 agar membentang penuh ke kanan-kiri */}
      <div className='w-full max-w-[1440px] mx-auto px-4 sm:px-8'>
        <div className='text-center mb-14'>
          <p className='text-primary text-lg font-semibold tracking-widest uppercase'>
            MAHAKARYA & PROGRAM
          </p>
          <h2 className='font-semibold text-3xl sm:text-4xl lg:max-w-[60%] mx-auto mt-4 text-black'>
            Pilar Utama Punguan Sagalaraja
          </h2>
        </div>

        {/* Grid 5 kolom dengan gap ringkas agar kartu makin lebar */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-4 mt-20'>
          {loading
            ? Array.from({ length: 5 }).map((_, i) => (
                <FeaturesSkeleton key={i} />
              ))
            : features.map((items, i) => (
                <div
                  key={i}
                  className='p-5 pt-14 relative rounded-3xl bg-gradient-to-b from-primary/10 to-white shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out hover:cursor-pointer flex flex-col items-center justify-start h-full'
                >
                  {/* Container Lingkaran Gambar */}
                  <div className='w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 p-3 absolute -top-12 left-1/2 -translate-x-1/2'>
                    <Image
                      src={items.imgSrc}
                      alt={items.heading}
                      width={80}
                      height={80}
                      className='object-contain max-h-full w-auto'
                    />
                  </div>

                  <p className='text-lg font-semibold text-black text-center mt-2 leading-snug'>
                    {items.heading}
                  </p>
                  <p className='text-xs sm:text-sm font-normal text-black/60 text-center mt-3 leading-relaxed'>
                    {items.subheading}
                  </p>
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}

export default Features