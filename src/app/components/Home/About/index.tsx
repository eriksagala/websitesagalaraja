'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FadeInWhenVisible } from '@/app/components/Common/MotionWrapper'

const Cook = () => {
  return (
    <section id='aboutus' className='bg-primary/10 py-16 relative overflow-hidden'>
      <div className='container px-4'>
        
        {/* Ornamen Gorga */}
        <div className='absolute right-0 bottom-[10%] xl:block hidden pointer-events-none'>
          <Image
            src='/images/Cook/gorga.png'
            alt='gorga-image'
            width={263}
            height={322}
          />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 my-16 gap-8 lg:gap-0 lg:space-x-5 items-center'>
          
          {/* Kolom Kiri: Gambar Tokoh Batak (Animasi muncul dari bawah) */}
          <FadeInWhenVisible className='lg:col-span-6 flex lg:justify-start justify-center'>
            <div className='relative'>
              <Image
                src='/images/Cook/tokohbatak.png'
                alt='tokohbatak'
                width={636}
                height={808}
                className='rounded-3xl shadow-lg'
              />
            </div>
          </FadeInWhenVisible>

          {/* Kolom Kanan: Teks Konten (Animasi muncul dengan sedikit jeda) */}
          <FadeInWhenVisible delay={0.2} className='lg:col-span-6 flex flex-col justify-center items-center lg:items-start'>
            <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase lg:text-start text-center'>
              Tentang Sagalaraja
            </p>
            <h2 className='lg:text-start text-center text-3xl sm:text-4xl font-bold text-stone-900'>
              Satu Sagalaraja, Semua Bersaudara
            </h2>
            <p className='text-black/60 text-lg font-normal my-5 text-start leading-relaxed'>
              Punguan Sagalaraja, Boru, Bere, Ibebere Se-Dunia adalah wadah pemersatu 
              seluruh keluarga besar marga Sagalaraja di mana pun berada. 
              Berawal dari warisan silsilah leluhur, perkumpulan ini terus berkembang 
              menjadi organisasi tingkat dunia yang mempererat tali silaturahmi serta 
              menjaga identitas budaya Batak dari generasi ke generasi.
            </p>
            <p className='text-black/60 text-lg font-normal mb-10 text-start leading-relaxed'>
              Dilandasi semangat gotong royong dan kepedulian sosial, 
              kami berkomitmen melestarikan nilai-nilai adat, mendukung pendidikan generasi muda, 
              serta merawat warisan leluhur seperti Gorga, Ulos, dan Tugu Sagalaraja sebagai pilar keberlanjutan marga kita.
            </p>

            {/* Tombol dibungkus dengan komponen Link Next.js */}
            <Link href='/sejarah'>
              <button className='relative z-10 pointer-events-auto text-xl font-medium rounded-full text-white py-3 px-8 duration-300 bg-primary w-fit border border-primary hover:bg-transparent hover:text-primary hover:cursor-pointer shadow-lg'>
                Sejarah
              </button>
            </Link>
          </FadeInWhenVisible>

        </div>
      </div>
    </section>
  )
}

export default Cook