'use client'

import React, { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Logo from '../Header/Logo'
import { FooterLinkType } from '@/app/types/footerlink'
import { FadeInWhenVisible } from '@/app/components/Common/MotionWrapper'

const Footer: FC = () => {
  const [footerlink, SetFooterlink] = useState<FooterLinkType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        SetFooterlink(data.FooterLinkData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <footer 
      className='pt-12 border-t border-gray-200/60 w-full overflow-hidden'
      style={{
        // Ganti kode HEX di bawah ini sesuai selera gradasi latar belakang yang kamu inginkan
        background: 'linear-gradient(to bottom, #ffffff, #d6a79c, #98b9be)'
      }}
    >
      <div className='max-w-7xl mx-auto px-6 lg:px-12'>
        
        {/* Bagian Utama Footer dengan Animasi FadeIn */}
        <FadeInWhenVisible>
          <div className='grid grid-cols-1 sm:grid-cols-6 lg:gap-20 md:gap-24 sm:gap-12 gap-12 pb-10'>
            
            {/* Kolom 1: Logo, Visi/Misi, & Sosial Media */}
            <div className='col-span-2'>
              <Logo />
              <p className='text-base font-medium text-gray-600 my-5 max-w-[85%] leading-relaxed'>
                Menjalin tali silaturahmi, melestarikan budaya, dan memperkuat persaudaraan keturunan Ompu Sagala Raja di seluruh dunia.
              </p>
              
              {/* Judul Ikuti Kami dengan Teks Gradasi */}
              <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-primary text-xl font-bold mb-4'>
                Ikuti Kami
              </h3>

              <div className='flex flex-wrap gap-3 items-center'>
                <Link
                  href='https://www.tiktok.com/@sagalaraja.sedunia?_r=1&_t=ZS-99luBuqJmBs'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group bg-white hover:bg-primary rounded-full shadow-md p-3 transition-colors border border-gray-100'
                  aria-label='TikTok'>
                  <Icon
                    icon='fa6-brands:tiktok'
                    width='18'
                    height='18'
                    className='group-hover:text-white text-black'
                  />
                </Link>
                {/* Facebook */}
                <Link
                  href='https://www.facebook.com/share/19P3r4MjHw/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group bg-white hover:bg-primary rounded-full shadow-md p-3 transition-colors border border-gray-100'
                  aria-label='Facebook'>
                  <Icon
                    icon='fa6-brands:facebook-f'
                    width='18'
                    height='18'
                    className='group-hover:text-white text-black'
                  />
                </Link>
                {/* Instagram */}
                <Link
                  href='https://www.instagram.com/sagalarajasedunia?stkn=MW14dmpncGZiMjgyOA=='
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group bg-white hover:bg-primary rounded-full shadow-md p-3 transition-colors border border-gray-100'
                  aria-label='Instagram'>
                  <Icon
                    icon='fa6-brands:instagram'
                    width='18'
                    height='18'
                    className='group-hover:text-white text-black'
                  />
                </Link>
                {/* YouTube */}
                <Link
                  href='https://www.youtube.com/@Sagalaraja_Sedunia_Official'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group bg-white hover:bg-primary rounded-full shadow-md p-3 transition-colors border border-gray-100'
                  aria-label='YouTube'>
                  <Icon
                    icon='fa6-brands:youtube'
                    width='18'
                    height='18'
                    className='group-hover:text-white text-black'
                  />
                </Link>
              </div>
            </div>

            {/* Kolom 2: Menu Navigasi Dinamis dari API */}
            <div className='col-span-2'>
              <div className='flex gap-20'>
                {footerlink.map((product, i) => (
                  <div key={i} className='group relative col-span-2'>
                    {/* Judul Section Navigasi dengan Gradasi */}
                    <p className='text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-primary text-xl font-bold mb-6'>
                      {product.section}
                    </p>
                    <ul className='space-y-3'>
                      {product.links.map((item, j) => (
                        <li key={j}>
                          <Link
                            href={item.href}
                            className='text-gray-600 hover:text-primary text-base font-medium transition-colors'>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Kolom 3: Kontak & Alamat Sekretariat */}
            <div className='col-span-2 sm:col-span-6 md:col-span-2'>
              <div className='flex flex-col gap-4'>
                {/* Judul Hubungi Kami dengan Gradasi */}
                <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-primary text-xl font-bold mb-2'>
                  Hubungi Kami
                </h3>
                
                {/* 1. Alamat Sekretariat */}
                <div className='flex items-start gap-3'>
                  <Icon
                    icon='solar:map-point-bold'
                    className='text-primary text-2xl flex-shrink-0 mt-1'
                  />
                  <div>
                    <h4 className='text-black font-semibold text-base'>Alamat Sekretariat</h4>
                    <p className='text-gray-600 text-base leading-relaxed mb-1'>
                      Jalan Hankam Raya No.89, RT.7/RW.4, Cilangkap, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13870
                    </p>
                  </div>
                </div>

                {/* Embed Google Maps Mini */}
                <div className='w-full h-36 rounded-lg overflow-hidden shadow-sm border border-gray-200 relative'>
                  <iframe
                    title="Lokasi Sekretariat"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.4748678015053!2d106.89464377659372!3d-6.332471161963857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed2681bc7c67%3A0x777152b1d3f74a62!2sSMA%20%26%20SMK%20Prestasi%20Prima!5e0!3m2!1sen!2sid!4v1789534151539!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  ></iframe>
                  <a 
                    href="https://maps.app.goo.gl/tzWEyQPAq3WM1Gr4A" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-2 right-2 bg-white text-xs font-semibold px-2.5 py-1.5 rounded shadow hover:bg-primary hover:text-white transition-colors"
                  >
                    Open in Maps ↗
                  </a>
                </div>

                {/* 2. No HP / WhatsApp */}
                <Link href='https://wa.me/6285959695028' target='_blank' rel='noopener noreferrer' className='mt-1'>
                  <div className='flex items-center gap-3'>
                    <Icon
                      icon='solar:phone-bold'
                      className='text-primary text-2xl flex-shrink-0'
                    />
                    <p className='text-gray-700 hover:text-primary text-base font-medium'>
                      0859-5969-5028
                    </p>
                  </div>
                </Link>

                {/* 3. Email */}
                <Link href='mailto:sagalaraja.dunia@gmail.com'>
                  <div className='flex items-center gap-3'>
                    <Icon
                      icon='solar:letter-bold'
                      className='text-primary text-2xl flex-shrink-0'
                    />
                    <p className='text-gray-700 hover:text-primary text-base font-medium'>
                      sagalaraja.dunia@gmail.com
                    </p>
                  </div>
                </Link>

              </div>
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Bagian Bawah Footer (Copyright & Policy) dengan Animasi Penyelaras */}
        <FadeInWhenVisible delay={0.2}>
          <div className='border-t border-gray-200 py-6 flex flex-col sm:flex-row justify-between sm:items-center gap-5'>
            <p className='text-sm text-gray-600 font-medium'>
              © 2026 Punguan Sagalaraja Sedunia. All Rights Reserved.
            </p>

            <div className='flex items-center'>
              <Link
                href='#'
                className='text-sm text-gray-600 px-5 border-r border-gray-300 hover:text-primary hover:underline font-medium'>
                Privacy policy
              </Link>
              <Link
                href='#'
                className='text-sm text-gray-600 ps-5 hover:text-primary hover:underline font-medium'>
                Terms & conditions
              </Link>
            </div>
          </div>
        </FadeInWhenVisible>

      </div>
    </footer>
  )
}

export default Footer