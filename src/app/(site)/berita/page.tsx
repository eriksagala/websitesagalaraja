import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BackToAgendaButton from '@/app/components/BackToAgendaButton';

// Data daftar semua berita disesuaikan dengan gambar lokal website Anda
const daftarSemuaBerita = [
  {
    title: "Pesta Bolon Sagalaraja Se-Dunia",
    image: "/images/Gallery/pestabolon.jpg",
    category: "Pesta Adat"
  },
  {
    title: "Martumba dan Tari Sawan",
    image: "/images/Gallery/martumba.jpg",
    category: "Seni & Budaya"
  },
  {
    title: "Penanaman Durian", // <-- UBAH DARI "Penanaman Pohon Serentak" MENJADI "Penanaman Durian"
    image: "/images/Gallery/penanamandurian.jpg", 
    category: "Sosial & Lingkungan"
  },
  {
    title: "Pelantikan BPH Periode 2026–2030",
    image: "/images/Gallery/pelantikan.jpg",
    category: "Organisasi"
  },
  // {
  //   title: "Musyawarah Besar Pemuda Sagalaraja",
  //   image: "/images/Gallery/pestabolon.jpg", 
  //   category: "Kepemudaan"
  // },
  // {
  //   title: "Bantuan Sosial dan Kunjungan Kasih",
  //   image: "/images/Gallery/martumba.jpg", 
  //   category: "Sosial"
  // }
];

export default function BeritaArsipPage() {
  return (
    <main className="bg-white min-h-screen pt-32 md:pt-40 pb-20">
      {/* Breadcrumb Navigasi */}
      <div className="bg-gray-50 py-4 border-b border-gray-200 mb-10">
        <div className="container mx-auto px-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary">Beranda</Link> / 
          <span className="text-primary font-medium"> Arsip Semua Berita</span>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Header Judul Halaman Arsip */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className='text-primary text-sm md:text-base font-semibold mb-2 tracking-widest uppercase'>
            DOKUMENTASI LENGKAP
          </p>
          <h1 className='text-3xl md:text-5xl font-bold text-gray-900 mb-4'>
            Semua Berita & Agenda Punguan
          </h1>
          <p className='text-gray-600'>
            Kumpulan seluruh arsip kegiatan dan acara keluarga besar Punguan Sagalaraja Se-Dunia.
          </p>
        </div>

        {/* Grid Daftar Kartu Berita */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {daftarSemuaBerita.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 flex flex-col group hover:shadow-xl transition duration-300">
              
              <div className="relative w-full h-[250px] overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium">
                  {item.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-6">
                    Laporan dokumentasi resmi mengenai kegiatan {item.title}.
                  </p>
                </div>

                <div>
                  {/* Tautan mengirimkan parameter judul dan gambar lokal dengan benar */}
                  <Link
                    href={`/berita/detail?title=${encodeURIComponent(item.title)}&image=${encodeURIComponent(item.image)}`}
                    className="inline-block w-full text-center bg-primary/10 text-primary font-medium py-2.5 px-4 rounded-full hover:bg-primary hover:text-white transition duration-300 text-sm">
                    Baca Selengkapnya →
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Tombol Kembali ke Agenda Kegiatan di Beranda */}
        {/* <div className='mt-16 text-center'>
          <Link 
           href='/#informasi'
           className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-primary transition duration-300 text-sm font-medium">
           ← Kembali ke Agenda Kegiatan
         </Link>
        </div> */}
        <div className="mt-16 text-center">
          <BackToAgendaButton />
        </div>
      </div>
    </main>
  );
}