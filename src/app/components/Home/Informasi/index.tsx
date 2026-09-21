'use client'
import Image from 'next/image'
import Masonry from 'react-masonry-css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import GalleryImagesSkeleton from '../../Skeleton/GalleryImages'
import { Icon } from '@iconify/react'
import { GalleryImagesType } from '@/app/types/galleryimage'
import { FullMenuType } from '@/app/types/fullmenu'
import { FadeInWhenVisible } from '@/app/components/Common/MotionWrapper'

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImagesType[]>([])
  const [fullMenu, setFullMenu] = useState<FullMenuType[]>([])
  const [loading, setLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => setIsMenuOpen(true)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setGalleryImages(data.GalleryImagesData)
        setFullMenu(data.FullMenuData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='informasi' className='scroll-mt-20 py-20 overflow-hidden'>
      <div className='container mx-auto px-4'>
        
        {/* Bagian Judul (Dibungkus Animasi) */}
        <FadeInWhenVisible>
          <div className='text-center'>
            <p className='text-primary text-lg md:text-2xl font-normal mb-3 tracking-widest uppercase'>
              AGENDA KEGIATAN
            </p>
            <h2 className='text-3xl font-bold text-black'>Buletin Punguan Sagalaraja</h2>
          </div>
        </FadeInWhenVisible>

        {/* Bagian Grid Masonry Gambar (Dibungkus Animasi dengan Jeda) */}
        <FadeInWhenVisible delay={0.2}>
          <div className='my-16 px-2 sm:px-6'>
            <Masonry
              breakpointCols={{ default: 2, '700': 2, '500': 1 }}
              className='flex gap-6'
              columnClassName='masonry-column'>
              {/* Map through images */}
              {loading
                ? Array.from({ length: 4 }).map((_, i) => (
                    <GalleryImagesSkeleton key={i} />
                  ))
                : galleryImages.map((item, index) => (
                    <div
                      key={index}
                      className='overflow-hidden rounded-3xl mb-6 relative group shadow-md hover:shadow-xl transition-all duration-300'>
                      <Image
                        src={item.src}
                        alt={item.name}
                        width={600}
                        height={500}
                        className='object-cover w-full h-full'
                      />
                      <div className='w-full h-full absolute bg-black/40 top-0 lg:top-full lg:group-hover:top-0 duration-500 lg:p-12 md:p-8 p-3.5 flex flex-col items-start lg:gap-8 gap-4 justify-end'>
                        <p className='text-white lg:text-2xl text-xl font-semibold'>
                          {item.name}
                        </p>
                        <div className='flex items-center justify-between w-full'>
                          <div className='flex justify-center'>
                            <Link
                              href={`/berita/detail?title=${encodeURIComponent(item.name)}&image=${encodeURIComponent(item.src)}`}
                              className='text-white rounded-full bg-primary border duration-300 border-primary py-2 lg:px-6 md:px-4 px-3 hover:bg-primary/40 md:text-base text-sm cursor-pointer'>
                              Selengkapnya
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
            </Masonry>
          </div>
        </FadeInWhenVisible>

        {/* Tombol Lihat Selengkapnya Agenda (Dibungkus Animasi) */}
        <FadeInWhenVisible delay={0.3}>
          <div className='flex justify-center'>
            <Link
              href='/berita'
              className='px-6 py-3 border border-primary rounded-full text-base font-medium text-white bg-primary hover:bg-primary/20 hover:text-primary hover:cursor-pointer transition ease-in-out duration-300 inline-block text-center shadow-md'>
              Selengkapnya Agenda Kegiatan
            </Link>
          </div>
        </FadeInWhenVisible>

      </div>
    </section>
  )
}

export default Gallery