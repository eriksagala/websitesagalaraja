'use client'

import Slider from 'react-slick'
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
// @ts-expect-error CSS imports are handled by the Next.js bundler
import 'slick-carousel/slick/slick.css'
// @ts-expect-error CSS imports are handled by the Next.js bundler
import 'slick-carousel/slick/slick-theme.css'
import { ExpertChiefType } from '@/app/types/expertchief'
import ChiefDetailSkeleton from '../../Skeleton/ChiefDetail'
import { FadeInWhenVisible } from '@/app/components/Common/MotionWrapper'

const Expert = () => {
  const [chiefDetail, setChiefDetail] = useState<ExpertChiefType[]>([])
  const [loading, setLoading] = useState(true)
  
  // State untuk mengontrol Pop-up (Menyimpan data pengurus yang diklik)
  const [selectedChief, setSelectedChief] = useState<ExpertChiefType | null>(null)
  
  // Ref untuk mengontrol slider react-slick menggunakan tombol kustom
  const sliderRef = useRef<Slider | null>(null)

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
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Kita matikan panah bawaan, pakai tombol kustom di bawah
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
    <section id='organisasi' className='bg-gradient-to-b from-[#F4F7F5] via-[#E6EDE8] to-[#D4DFD7] py-20 relative overflow-hidden'>
      <div className='container mx-auto px-4'>
        
        {/* Bagian Judul (Dibungkus Animasi) */}
        <FadeInWhenVisible>
          <div className='text-center mb-10'>
            <p className='text-primary text-xl sm:text-2xl font-bold mb-2 tracking-widest uppercase'>
              STRUKTUR ORGANISASI
            </p>
            <h2 className='text-3xl font-bold text-black'>Pengurus Pusat Sagala Raja</h2>
          </div>
        </FadeInWhenVisible>

        {/* Wrapper relative agar slider dan tombol panah ikut teranimasi */}
        <FadeInWhenVisible delay={0.2}>
          <div className='relative px-2 sm:px-8'>
            
            {/* Tombol Panah Kiri Kustom */}
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className='absolute left-0 top-[45%] -translate-y-1/2 z-10 bg-white hover:bg-neutral-100 text-neutral-800 p-3 rounded-full shadow-lg border border-neutral-200 transition-all cursor-pointer hidden md:flex items-center justify-center'
              aria-label="Previous Slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Slider Component */}
            <Slider ref={sliderRef} {...settings}>
              {loading
                ? Array.from({ length: 4 }).map((_, i) => (
                    <ChiefDetailSkeleton key={i} />
                  ))
                : chiefDetail.map((items, i) => (
                    <div key={i} className='px-2'>
                      {/* Kartu diklik untuk membuka modal biodata */}
                      <div 
                        onClick={() => setSelectedChief(items)}
                        className='my-4 p-5 text-center backdrop-blur-md bg-gradient-to-br from-white via-white/90 to-primary/10 border border-stone-200/50 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer'
                      >
                        {/* Frame Foto Persegi Panjang Elegan */}
                        <div className='relative w-full h-[360px] rounded-2xl overflow-hidden bg-stone-100 border border-amber-900/10 group-hover:border-amber-600/30 transition-colors duration-300'>
                          {items.imgSrc ? (
                            <Image
                              src={items.imgSrc}
                              alt={items.name}
                              fill
                              style={{ objectPosition: '50% 45%' }}
                              className='object-cover transition-transform duration-500 group-hover:scale-105'
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
                          <h3 className='text-lg font-bold text-stone-900 leading-snug line-clamp-1 group-hover:text-amber-700 transition-colors'>
                            {items.name}
                          </h3>
                          <p className='text-sm font-medium text-amber-700 mt-1 line-clamp-1'>
                            {items.profession}
                          </p>
                        </div>
                        {/* Tombol Selengkapnya */}
                      </div>
                    </div>
                  ))}
            </Slider>

            {/* Tombol Panah Kanan Kustom */}
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className='absolute right-0 top-[45%] -translate-y-1/2 z-10 bg-white hover:bg-neutral-100 text-neutral-800 p-3 rounded-full shadow-lg border border-neutral-200 transition-all cursor-pointer hidden md:flex items-center justify-center'
              aria-label="Next Slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

          </div>
        </FadeInWhenVisible>
        {/* ================= TOMBOL SELENGKAPNYA DI LUAR KOTAK ================= */}
        <FadeInWhenVisible delay={0.3}>
          <div className='mt-12 text-center'>
            <a
              href='/struktur-organisasi' // Sesuaikan dengan route halaman lengkap struktur organisasi Anda
              className='inline-flex items-center gap-2.5 px-8 py-4 bg-amber-800 hover:bg-amber-900 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer text-base'
            >
              <span>Lihat Struktur Organisasi Selengkapnya</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </FadeInWhenVisible>
      </div>

      {/* ================= MODAL / POP-UP BIODATA ================= */}
      {selectedChief && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden relative border border-stone-100">
            
            {/* Tombol Close (X) di Pojok Kanan Atas */}
            <button
              onClick={() => setSelectedChief(null)}
              className="absolute top-4 right-4 z-10 bg-stone-100 hover:bg-stone-200 text-stone-700 p-2 rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Isi Konten Modal */}
            <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
              {/* Foto Profil di Modal */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-2xl overflow-hidden shadow-md bg-stone-100 border border-stone-200 mb-5">
                {selectedChief.imgSrc ? (
                  <Image
                    src={selectedChief.imgSrc}
                    alt={selectedChief.name}
                    fill
                    style={{ objectPosition: '50% 45%' }}
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-stone-200 text-stone-400">
                    <svg className="w-10 h-10 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                )}
              </div>

              {/* Identitas */}
              <div className="text-center mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-stone-900">{selectedChief.name}</h3>
                <p className="text-base sm:text-lg font-semibold text-amber-700 mt-1">{selectedChief.profession}</p>
              </div>

              {/* Biografi / Detail Dinamis per Pengurus */}
              <div className="border-t border-stone-100 pt-5 text-stone-600 text-base space-y-4">
                <div>
                  <h4 className="font-semibold text-stone-800 mb-2.5">Tentang Pengurus:</h4>
                  <ul className="space-y-2 text-stone-600 text-left list-disc list-inside bg-stone-50/50 p-4 rounded-2xl border border-stone-100">
                    <li>
                      <span className="font-medium text-stone-800">TTL:</span> {selectedChief.ttl || "Belum diisi"}
                    </li>
                    <li>
                      <span className="font-medium text-stone-800">Profesi:</span> {selectedChief.jobProfession || selectedChief.profession}
                    </li>
                    <li>
                      <span className="font-medium text-stone-800">Komitmen:</span> {selectedChief.commitment || "Aktif dalam kepengurusan Pengurus Pusat Sagala Raja serta berkomitmen penuh dalam memajukan organisasi."}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Tombol Tutup di Bawah */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => setSelectedChief(null)}
                  className="w-full py-3.5 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-xl transition-colors cursor-pointer text-base"
                >
                  Tutup
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  )
}

export default Expert