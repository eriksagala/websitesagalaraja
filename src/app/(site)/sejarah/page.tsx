'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function SejarahPage() {
  return (
    <main className='min-h-screen bg-white pt-24 sm:pt-28 pb-20'>
      <div className='max-w-4xl mx-auto px-4 sm:px-8 lg:px-16'>
        {/* Judul Halaman */}
        <h1 className='text-3xl sm:text-4xl font-bold text-black text-center mb-6'>
          Sejarah dan Silsilah Sagalaraja
        </h1>

        {/* Gambar Hero Tugu */}
        <div className='relative w-full h-[320px] sm:h-[480px] rounded-3xl overflow-hidden mb-6 shadow-xl bg-gray-100'>
          <Image
            src='/images/Features/sejarah.png' // Ganti ke nama file gambar barumu jika perlu
            alt='Tugu Sagala Raja'
            fill
            className='object-cover'
            priority
          />
        </div>

        {/* Tombol Kembali */}
        <Link
          href='/'
          className='inline-flex items-center text-primary font-medium mb-8 hover:underline text-base transition duration-300'
        >
          ← Kembali ke Beranda
        </Link>

        {/* Konten Artikel Sejarah */}
        <div className='space-y-8 text-black/80 text-base sm:text-lg leading-relaxed text-justify'>
          <section>
            <p className='first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3'>
              Marga Sagala merupakan salah satu bagian dari garis keturunan Batak Toba yang memiliki sejarah panjang dan erat kaitannya dengan kawasan Sianjur Mula-Mula, Samosir, yang dalam tradisi Batak dikenal sebagai salah satu wilayah awal perjalanan leluhur bangsa Batak. Dalam tarombo Batak yang diwariskan secara turun-temurun, garis keturunan Sagala berawal dari Si Raja Batak melalui putranya, Guru Tatea Bulan.
            </p>
          </section>

          <section>
            <h2 className='text-2xl sm:text-3xl font-bold text-black mb-3 text-left'>
              Garis Keturunan & Posisi Tarombo
            </h2>
            <p>
              Guru Tatea Bulan merupakan salah satu tokoh penting dalam tarombo Batak. Dari garis keturunannya lahirlah beberapa keturunan yang kemudian berkembang menjadi berbagai kelompok marga Batak. Salah satunya adalah Sagala Raja. Dengan demikian, Sagala Raja menempati posisi penting dalam silsilah Batak Toba dan secara genealogis berada pada generasi awal setelah Si Raja Batak.
            </p>
            <p className='mt-4'>
              Sagala Raja kemudian menurunkan beberapa garis keturunan yang dalam berbagai versi tarombo dikenal antara lain sebagai Raja Bangun Rea atau Sagala Hutaruar, Raja Margurgur atau Sagala Hutabagas, serta Raja Sungkunon atau Sagala Hutaurat. Dari garis-garis keturunan inilah kemudian berkembang pomparan Sagala yang menyebar ke berbagai wilayah, membentuk keluarga-keluarga dan komunitas Sagala di berbagai daerah.
            </p>
          </section>

          <section>
            <h2 className='text-2xl sm:text-3xl font-bold text-black mb-3 text-left'>
              Sianjur Mula-Mula & Ginolat
            </h2>
            <p>
              Sianjur Mula-Mula dan kawasan sekitarnya memiliki arti yang sangat penting bagi pomparan Sagala. Wilayah ini bukan hanya dipandang sebagai bagian dari tanah leluhur, tetapi juga menjadi pengingat akan perjalanan panjang generasi terdahulu dalam membangun kehidupan, mempertahankan adat, serta meneruskan nilai-nilai persaudaraan kepada keturunannya. Salah satu kawasan yang memiliki hubungan erat dengan sejarah Sagala adalah Ginolat, Sianjur Mula-Mula, Samosir, yang hingga kini menjadi salah satu tempat penting bagi identitas dan penghormatan terhadap leluhur Sagala Raja.
            </p>
          </section>

          <section>
            <h2 className='text-2xl sm:text-3xl font-bold text-black mb-3 text-left'>
              Identitas & Dalihan Na Tolu
            </h2>
            <p>
              Seiring perjalanan waktu, pomparan Sagala menyebar ke berbagai wilayah di Indonesia bahkan ke berbagai penjuru dunia. Walaupun jarak dan tempat tinggal memisahkan, ikatan darah, tarombo, adat istiadat, dan nilai-nilai Dalihan Na Tolu tetap menjadi dasar yang menghubungkan setiap keturunan. Karena itu, bagi pomparan Sagala, marga bukan sekadar nama keluarga, melainkan identitas genealogis yang mengingatkan setiap generasi akan asal-usul, hubungan kekerabatan, tanggung jawab, dan persaudaraan.
            </p>
            <p className='mt-4'>
              Dalam perjalanan perkembangan masyarakat Batak, punguan menjadi salah satu wadah penting untuk menjaga hubungan antarketurunan. Demikian pula dengan Punguan Sagala Raja yang menjadi ruang untuk mempererat tali persaudaraan, menjaga adat dan budaya, mengenal kembali sejarah leluhur, serta membangun kepedulian antarsesama pomparan Sagala Raja, baik yang berada di tanah leluhur maupun yang telah tersebar di berbagai daerah dan negara.
            </p>
          </section>

          <section>
  <h2 className='text-2xl sm:text-3xl font-bold text-black mb-3 text-left'>
    Sejarah Singkat Berdirinya Punguan Sagalaraja Boru Bere Ibebere Se-Dunia (PSBBID)
  </h2>

  <p>
    Keberadaan Tugu Sagala Raja di Ginolat, Sianjur Mula-Mula, Samosir,
    menjadi salah satu simbol penting dalam perjalanan pomparan Sagala Raja.
    Tugu tersebut bukan hanya menjadi penanda penghormatan kepada leluhur,
    tetapi juga menjadi simbol persatuan dan pengingat bahwa sejauh apa pun
    keturunan Sagala melangkah, selalu ada akar sejarah yang menyatukan.
  </p>

  <p className='mt-4'>
    Gagasan untuk membangun Tugu Opu Sagala Raja telah menjadi cita-cita
    pomparan Sagala Raja sejak lama. Dalam perjalanan waktu, muncul kesadaran
    bahwa cita-cita tersebut membutuhkan wadah persatuan yang mampu menghimpun
    seluruh pomparan Sagala Raja, Boru, Bere, dan Ibebere yang tersebar di
    berbagai daerah di Indonesia maupun mancanegara.
  </p>

  <p className='mt-4'>
    Gagasan pembentukan Punguan Sagala Raja Boru Bere Ibebere Se Dunia
    (PSBBI Se Dunia) mulai menguat melalui berbagai pertemuan. Pada 18 April
    2020, dalam pertemuan Punguan Sagala Raja se-Jabodetabek, kembali
    disampaikan cita-cita pembangunan Tugu Opu Sagala Raja sekaligus
    pentingnya membangun wadah persatuan bagi seluruh pomparan Sagala Raja.
  </p>

  <p className='mt-4'>
    Setelah melalui sejumlah pertemuan dan pembahasan, pada 12 Agustus 2020
    secara resmi dibentuk Punguan Sagala Raja Boru Bere Ibebere Se Dunia
    (PSBBI Se Dunia) melalui rapat yang dilaksanakan secara hybrid. Dalam
    rapat tersebut, St. Drs. Maringan Sagala/Br. Situmorang ditunjuk sebagai
    Pelaksana Tugas (PLT) Ketua Umum PSBBI Se Dunia hingga terselenggaranya
    Musyawarah Besar.
  </p>

  <p className='mt-4'>
    Selanjutnya, pada 22 Agustus 2020, kepengurusan PSBBI Se Dunia secara
    resmi dikukuhkan di Partukohan Huta Sagala, Sianjur Mula-Mula, oleh Bius
    Bangun Rea, Bius Tuan Mula, dan Bius Raja Oloan. Pengukuhan tersebut
    menjadi salah satu tonggak penting dalam sejarah PSBBI Se Dunia sebagai
    wadah pemersatu seluruh pomparan Opu Sagala Raja di seluruh dunia.
  </p>

  <p className='mt-4'>
    Sejak berdirinya, PSBBI Se Dunia terus membawa semangat persatuan,
    kekeluargaan, marsiadapari, dan marsitunguan. Organisasi ini hadir untuk
    menjaga hubungan kekeluargaan, melestarikan adat dan budaya Batak,
    menghormati leluhur, serta menjadi wadah bersama untuk membangun masa
    depan dan mewariskan nilai-nilai luhur kepada generasi berikutnya.
  </p>

  <p className='mt-4'>
    Dari tanah leluhur di Sianjur Mula-Mula, perjalanan generasi demi generasi
    terus berkembang hingga membentuk komunitas Sagala Raja yang semakin luas.
    Tugu Sagala Raja menjadi simbol yang mengingatkan seluruh pomparan bahwa
    di mana pun berada, kita tetap memiliki satu akar sejarah, satu
    persaudaraan, dan satu semangat untuk menjaga nama Sagala Raja.
  </p>
</section>

          <section>
            <p>
              Bagi pomparan Sagala Raja, sejarah bukan sekedar cerita tentang masa lalu. Sejarah adalah identitas yang harus dikenal, dijaga, dan diwariskan. Tarombo menjadi pengingat akan asal-usul; adat menjadi pedoman dalam kehidupan; persaudaraan menjadi kekuatan; dan tanah leluhur menjadi simbol akar yang tidak pernah terputus.
            </p>
            <p className='mt-4'>
              Dari Sianjur Mula-Mula, dari tanah leluhur para generasi terdahulu, pomparan Sagala Raja terus melangkah dan berkembang ke berbagai penjuru dunia. Perbedaan tempat dan zaman tidak menghapus hubungan darah dan persaudaraan. Sebaliknya, perjalanan panjang tersebut menjadi bukti bahwa sebuah keturunan dapat terus bertumbuh tanpa kehilangan akar sejarahnya.
            </p>
            <p className='mt-4 font-medium italic text-black'>
              Sagala Raja bukan hanya tentang siapa leluhur kita, tetapi juga tentang bagaimana kita menjaga warisan mereka dan meneruskannya kepada generasi yang akan datang.
            </p>
          </section>

        
<div className='relative overflow-hidden rounded-3xl my-16 shadow-2xl border border-white/10'>
          {/* 1. Gambar Background Pemandangan */}
          <div 
            className='absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105'
            style={{ backgroundImage: "url('/images/Features/tugupolos.png')" }} // Sesuaikan path gambar pemandanganmu
          />

          {/* 2. Gradasi Overlay */}
          <div className='absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/80 to-primary/80 backdrop-blur-[2px]' />

          {/* 3. Konten Teks */}
          <div className='relative z-10 px-6 py-12 sm:px-12 sm:py-16 text-center max-w-2xl mx-auto'>
            <span className='inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-amber-400 mb-3 drop-shadow-sm'>
              Sagala Raja Sedunia
            </span>

            <h3 className='text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md'>
              Satu Sagalaraja, <span className='text-amber-400 italic font-serif'>Semua Saudara</span>
            </h3>

            <div className='w-16 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto my-5' />

            <p className='text-stone-200 text-sm sm:text-base font-light tracking-wide italic drop-shadow-sm'>
              "Di manapun kita berada, akar sejarah dan ikatan darah menyatukan kita."
            </p>
          </div>
        </div>
        </div>
      </div>
    </main>
  )
}