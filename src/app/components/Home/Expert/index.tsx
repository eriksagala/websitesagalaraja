'use client'
import Slider from 'react-slick'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
// @ts-expect-error CSS imports are handled by the Next.js bundler
import 'slick-carousel/slick/slick.css'
// @ts-expect-error CSS imports are handled by the Next.js bundler
import 'slick-carousel/slick/slick-theme.css'
import { ExpertChiefType } from '@/app/types/expertchief'
import ChiefDetailSkeleton from '../../Skeleton/ChiefDetail'

const Expert = () => {
  const [chiefDetail, setChiefDetail] = useState<ExpertChiefType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setChiefDetail(data.ExpertChiefData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    speed: 800,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <section id='organisasi' className='bg-primary/10 py-16'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-10'>
          <p className='text-primary text-xl sm:text-2xl font-bold mb-2 tracking-widest uppercase'>
            STRUKTUR ORGANISASI
          </p>
          <h2 className='text-3xl font-bold text-black'>Pengurus Pusat Sagala Raja</h2>
        </div>
        <Slider {...settings}>
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <ChiefDetailSkeleton key={i} />
              ))
            : chiefDetail.map((items, i) => (
                <div key={i} className='px-2'>
                  <div className='my-4 p-5 text-center backdrop-blur-md bg-white/70 border border-stone-200/50 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group'>
                    {/* Frame Foto Persegi Panjang Elegan */}
                    <div className='relative w-full h-[260px] rounded-2xl overflow-hidden bg-stone-100 border border-amber-900/10 group-hover:border-amber-600/30 transition-colors duration-300'>
                      {items.imgSrc ? (
                        <Image
                          src={items.imgSrc}
                          alt={items.name}
                          fill
                          className='object-cover object-top transition-transform duration-500 group-hover:scale-105'
                        />
                      ) : (
                        <div className='w-full h-full flex flex-col items-center justify-center bg-stone-200/50 text-stone-400'>
                          <svg className="w-12 h-12 mb-2 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                          </svg>
                          <span className='text-xs font-medium uppercase tracking-wider opacity-60'>Foto Belum Ada</span>
                        </div>
                      )}
                    </div>

                    {/* Teks Nama & Jabatan */}
                    <div className='mt-5 mb-2'>
                      <h3 className='text-lg font-bold text-stone-900 leading-snug line-clamp-1'>
                        {items.name}
                      </h3>
                      <p className='text-sm font-medium text-amber-700 mt-1 line-clamp-1'>
                        {items.profession}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </Slider>
      </div>
    </section>
  )
}

export default Expert