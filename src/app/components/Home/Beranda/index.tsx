'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  // Menggunakan useState yang benar untuk membuka/menutup modal
  const [isVisiMisiOpen, setIsVisiMisiOpen] = useState(false)

  return (
    <section
      id='home-section'
      className='bg-gradient-to-b from-[#DED2CE] to-[#AD4624] pt-28 pb-22 relative overflow-hidden lg:pt-12'
    >
      <div className='container mx-auto px-4 xl:pt-7'>
        <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8'>
          
          {/* Kolom Teks / Kiri */}
          <div className='lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-start'>
            <h1 className='font-semibold mb-5 text-black text-3xl sm:text-4xl lg:text-5xl leading-tight'>
              Rumah Besar Keluarga Sagalaraja Se-Dunia
            </h1>
            
            <p className='text-black/75 text-base sm:text-lg font-normal mb-8 max-w-xl'>
              Menenun persaudaraan, menjaga nilai adat, dan mempererat tali silaturahmi seluruh keluarga besar Sagalaraja di penjuru dunia.
            </p>
            
            <div className='flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto'>
              <button
                onClick={() => setIsVisiMisiOpen(true)}
                className='w-full sm:w-auto text-base font-medium rounded-full text-white py-3 px-7 bg-primary hover:bg-black transition-all duration-300 shadow-md inline-block text-center cursor-pointer'
              >
                Visi & Misi
              </button>
              
              <Link 
                href='/#informasi' 
                className='w-full sm:w-auto text-base font-medium rounded-full text-white py-3 px-7 bg-primary hover:bg-black transition-all duration-300 shadow-md inline-block text-center'
              >
                Lihat Kegiatan
              </Link>
              
              <Link href='/#reserve' className='w-full sm:w-auto'>
                <button className='w-full sm:w-auto text-base font-medium rounded-full text-white py-3 px-7 border border-white/80 hover:bg-white hover:text-black transition-all duration-300 shadow-md'>
                  Daftar Keanggotaan
                </button>
              </Link>
            </div>
          </div>

          {/* Kolom Gambar Tugu & Stat Card / Kanan */}
          <div className='lg:col-span-5 flex justify-center relative mt-6 lg:mt-0'>
            <Image
              src='/images/hero/ketua.png'
              alt='Tugu Sagalaraja'
              width={460}
              height={510}
              priority
              className='object-contain drop-shadow-xl'
            />

            {/* Compact Floating Card - Dark Grey Premium */}
            <div className='absolute bottom-2 right-2 sm:right-6 bg-neutral-900/90 backdrop-blur-md rounded-xl py-2.5 px-4 shadow-2xl flex items-center gap-4 border border-white/10 z-10'>
              
              {/* Stat 1 */}
              <div className='flex flex-col text-left'>
                <span className='text-base font-bold text-amber-400 leading-none'>
                  1000+
                </span>
                <span className='text-[10px] text-gray-300 font-medium tracking-wide mt-1 whitespace-nowrap'>
                  Anggota
                </span>
              </div>

              {/* Garis Pembatas Vertikal */}
              <div className='w-[1px] h-6 bg-white/20'></div>

              {/* Stat 2 */}
              <div className='flex flex-col text-left'>
                <span className='text-base font-bold text-amber-400 leading-none'>
                  100+
                </span>
                <span className='text-[10px] text-gray-300 font-medium tracking-wide mt-1 whitespace-nowrap'>
                  Wilayah / DPC
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ================================================= */}
      {/* POP-UP / MODAL VISI & MISI (Ditempatkan di luar grid utama) */}
      {/* ================================================= */}
      {isVisiMisiOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 md:p-8 relative">
            
            {/* Tombol Tutup (X) */}
            <button
              onClick={() => setIsVisiMisiOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100"
            >
              &times;
            </button>

            {/* Konten Visi & Misi */}
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center border-b pb-3">
              Visi & Misi Sagalaraja Se-Dunia
            </h2>

            <div className="space-y-6 text-neutral-700 text-left">
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">✨ Visi</h3>
                <p className="text-sm md:text-base leading-relaxed bg-orange-50 p-4 rounded-xl border border-orange-100">
                  Menjadi wadah persatuan yang harmonis, bermartabat, dan berakar pada nilai-nilai leluhur bagi seluruh keturunan Ompu Sagalaraja di tingkat global.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-primary mb-2">🎯 Misi</h3>
                <ul className="text-sm md:text-base space-y-2 list-disc list-inside bg-orange-50 p-4 rounded-xl border border-orange-100">
                  <li>Mempererat tali silaturahmi dan rasa kekeluargaan antar keturunan Sagalaraja di seluruh dunia.</li>
                  <li>Melestarikan dan mempromosikan adat istiadat, budaya, serta sejarah marga Sagalaraja.</li>
                  <li>Mendukung peningkatan kualitas sumber daya manusia melalui bidang pendidikan dan sosial.</li>
                  <li>Memperkuat kerja sama ekonomi dan solidaritas antar anggota punguan.</li>
                </ul>
              </div>
            </div>

            {/* Tombol Tutup di Bawah */}
            <div className="mt-8 text-center">
              <button
                onClick={() => setIsVisiMisiOpen(false)}
                className="bg-neutral-800 hover:bg-neutral-900 text-white font-medium px-6 py-2.5 rounded-xl transition duration-200 w-full"
              >
                Tutup
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  )
}

export default Hero