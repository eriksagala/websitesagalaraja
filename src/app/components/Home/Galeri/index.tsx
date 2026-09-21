'use client'
import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { FadeInWhenVisible } from '@/app/components/Common/MotionWrapper'

const GallerySection = () => {
  const sliderRef = useRef<HTMLDivElement>(null)

  // Data galeri beserta deskripsi lengkapnya
  const galleryItems = [
    {
      id: 1,
      title: "Cinema Pesta Bolon Sagalaraja 2026",
      category: "Acara Utama",
      youtubeId: "CUwTRt6iQis",
      imgSrc: "",
      description: "Dokumentasi eksklusif pelaksanaan Pesta Bolon Sagalaraja 2026 yang diselenggarakan pada 3-5 Juli 2026 di Huta Ginolat, Samosir. Acara ini diisi dengan ritual kebudayaan, penanaman pohon durian, pertunjukan Tor-Tor, dan mempererat tali persaudaraan Punguan Sagalaraja Boru-Bere-Ibebere (PSBBI) Se-Dunia.",
    },
    {
      id: 2,
      title: "Musyarwarah Besar Punguan Sagalaraja Se-Dunia 2026",
      category: "Pemilihan BPH Baru",
      youtubeId: "",
      imgSrc: "/images/gallery/mubes/ketupat.jpg",
      description: "Kegiatan ini merupakan forum resmi untuk membahas dan memutuskan arah organisasi Punguan Sagalaraja Se-Dunia, termasuk pemilhan pengurus baru untuk periode 2026-2030. Acara ini dihadiri dari beberapa perwakilan Punguan Sagalaraja daerah dan sebagian mengikuiti via zoom.",
    },
    {
      id: 3,
      title: "Musyawarah Besar Sedunia",
      category: "Acara Punguan",
      youtubeId: "",
      imgSrc: "/images/gallery/kegiatan2.jpg",
      description: "Pertemuan akbar jajaran pengurus dan perwakilan Punguan Sagalaraja dari berbagai daerah dan manca negara guna merumuskan program kerja strategis serta pemilihan kepengurusan baru.",
    },
    {
      id: 4,
      title: "Ziarah & Kunjungan Tugu Sagalaraja",
      category: "Budaya & Sejarah",
      youtubeId: "",
      imgSrc: "/images/gallery/kegiatan3.jpg",
      description: "Momen penghormatan dan ziarah bersama keluarga besar ke Tugu Sagalaraja di Samosir sebagai bentuk pelestarian warisan nilai leluhur dan pengingat asal-usul silsilah keturunan.",
    },
    {
      id: 5,
      title: "Perayaan Natal & Tahun Baru Punguan",
      category: "Acara Tahunan",
      youtubeId: "",
      imgSrc: "/images/gallery/kegiatan4.jpg",
      description: "Ibadah dan perayaan syukuran akhir tahun bersama seluruh keluarga besar Sagalaraja yang dimeriahkan dengan hiburan lagu daerah, pembagian hadiah, dan makan bersama.",
    },
  ]

  // State untuk menyimpan media utama yang sedang aktif diputar/ditampilkan di atas
  const [activeMedia, setActiveMedia] = useState(galleryItems[0])

  // Navigation slider bawah
  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current
      const scrollAmount = clientWidth * 0.75
      sliderRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  // Autoplay slider bawah
  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const intervalTime = 6000 
    
    const autoScroll = setInterval(() => {
      if (slider) {
        const isAtEnd = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 20

        if (isAtEnd) {
          slider.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          slider.scrollBy({ left: 340, behavior: 'smooth' })
        }
      }
    }, intervalTime)

    return () => clearInterval(autoScroll)
  }, [])

  return (
    <section id='galeri' className='relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-[#A9A9A9] via-[#D8E4EC] to-[#121110] text-white'>
      <div className='container mx-auto px-4 relative z-10 max-w-6xl'>
        
        {/* Header Teks Utama */}
        <FadeInWhenVisible>
          <div className='text-center max-w-3xl mx-auto mb-10'>
            <span className='text-amber-700 text-sm sm:text-base font-bold tracking-[0.2em] uppercase mb-2 block'>
              DOKUMENTASI EKSKLUSIF
            </span>
            <h2 className='text-3xl sm:text-5xl font-extrabold tracking-tight text-black'>
              Galeri Momen Kebersamaan
            </h2>
            <p className='text-neutral-700 text-sm sm:text-base mt-2'>
              Saksikan tayangan dokumentasi dan kebersamaan keluarga besar Punguan Sagalaraja Se-Dunia.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* 1. MEDIA UTAMA (VIDEO / FOTO BESAR DI ATAS) */}
        <FadeInWhenVisible delay={0.1}>
          <div className='w-full mb-16 rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-neutral-900/90 backdrop-blur-md p-3 sm:p-5'>
            
            {/* Player / Display Frame */}
            <div className='relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg bg-neutral-950'>
              {activeMedia.youtubeId ? (
                <iframe
                  className='w-full h-full border-0'
                  src={`https://www.youtube.com/embed/${activeMedia.youtubeId}?autoplay=0&rel=0&vq=hd1080`}
                  title={activeMedia.title}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              ) : activeMedia.imgSrc ? (
                <div className='relative w-full h-full'>
                  <Image
                    src={activeMedia.imgSrc}
                    alt={activeMedia.title}
                    fill
                    className='object-cover'
                  />
                </div>
              ) : null}
            </div>
            
            {/* Informasi & Deskripsi Kegiatan */}
          <div className='mt-5 p-2 sm:p-4 border-t border-white/10 w-full'>
            <div className='flex items-center gap-3 mb-2'>
              <span className='bg-amber-500/20 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider'>
                {activeMedia.category}
              </span>
              {activeMedia.youtubeId && (
                <span className='flex items-center gap-1 text-xs text-red-400 font-medium bg-red-950/50 border border-red-500/20 px-2.5 py-1 rounded-full'>
                  <Icon icon='tabler:brand-youtube-filled' width='14' height='14' /> Video YouTube
                </span>
              )}
            </div>
            
            <h3 className='text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3'>
              {activeMedia.title}
            </h3>

            {/* Deskripsi Penjelasan Kegiatan (Full Width & Justify Sempurna) */}
            <p 
              className='text-neutral-300 text-sm sm:text-base leading-relaxed w-full text-justify'
              style={{ textJustify: 'inter-word' }}
            >
              {activeMedia.description}
            </p>
          </div>
          </div>
        </FadeInWhenVisible>

        {/* Header Slider Foto Bawah & Tombol Panah */}
        <FadeInWhenVisible delay={0.2}>
          <div className='flex items-center justify-between mb-6'>
            <h4 className='text-xl font-bold text-black tracking-tight'>
              Pilih Dokumen & Kegiatan Lainnya
            </h4>

            {/* Tombol Navigasi Kiri-Kanan */}
            <div className='flex items-center gap-3'>
              <button
                onClick={() => scroll('left')}
                className='p-3 rounded-full bg-neutral-900/40 hover:bg-amber-600 text-white backdrop-blur-md border border-neutral-800/20 transition-all duration-300 cursor-pointer shadow-lg'
                aria-label='Geser Kiri'
              >
                <Icon icon='tabler:arrow-narrow-left' width='20' height='20' />
              </button>
              <button
                onClick={() => scroll('right')}
                className='p-3 rounded-full bg-neutral-900/40 hover:bg-amber-600 text-white backdrop-blur-md border border-neutral-800/20 transition-all duration-300 cursor-pointer shadow-lg'
                aria-label='Geser Kanan'
              >
                <Icon icon='tabler:arrow-narrow-right' width='20' height='20' />
              </button>
            </div>
          </div>
        </FadeInWhenVisible>

        {/* 2. SLIDER FOTO / VIDEO DI BAGIAN BAWAH */}
        <FadeInWhenVisible delay={0.3}>
          <div
            ref={sliderRef}
            className='flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-2 px-1'
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveMedia(item)}
                className={`min-w-[260px] sm:min-w-[300px] flex-shrink-0 snap-start bg-neutral-900/80 backdrop-blur-md rounded-2xl p-3 shadow-xl border transition-all duration-300 cursor-pointer hover:-translate-y-1 ${
                  activeMedia.id === item.id 
                    ? 'border-amber-500 ring-2 ring-amber-500/50' 
                    : 'border-white/10 hover:border-amber-500/50'
                }`}
              >
                {/* Thumbnail */}
                <div className='relative w-full aspect-video rounded-xl overflow-hidden bg-neutral-800 group'>
                  {item.youtubeId ? (
                    <Image
                      src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                      alt={item.title}
                      fill
                      className='object-cover group-hover:scale-105 transition-transform duration-500'
                    />
                  ) : item.imgSrc ? (
                    <Image
                      src={item.imgSrc}
                      alt={item.title}
                      fill
                      className='object-cover group-hover:scale-105 transition-transform duration-500'
                    />
                  ) : null}

                  {/* Icon Play Overlay Jika Item Adalah Video */}
                  {item.youtubeId && (
                    <div className='absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all'>
                      <div className='w-10 h-10 rounded-full bg-amber-500/90 flex items-center justify-center text-black shadow-lg group-hover:scale-110 transition-transform'>
                        <Icon icon='tabler:player-play-filled' width='18' height='18' />
                      </div>
                    </div>
                  )}

                  {/* Badge Category */}
                  <div className='absolute top-2 left-2 bg-neutral-950/80 px-2.5 py-1 rounded-full text-amber-400 text-[10px] font-semibold border border-white/10'>
                    {item.category}
                  </div>
                </div>

                {/* Judul Kecil */}
                <div className='mt-3 px-1'>
                  <h5 className='text-sm font-semibold text-white truncate'>
                    {item.title}
                  </h5>
                  <p className='text-[11px] text-amber-500 mt-0.5 font-medium'>
                    Klik untuk melihat detail
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeInWhenVisible>

      </div>

      {/* Ornamen Cahaya Background */}
      <div className='absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none'></div>
    </section>
  )
}

export default GallerySection