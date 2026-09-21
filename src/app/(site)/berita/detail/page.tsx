import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BackToAgendaButton from '@/app/components/BackToAgendaButton';

interface DetailPageProps {
  searchParams: Promise<{ title?: string; image?: string }>;
}

function getDetailContent(title: string) {
  const t = (title || "").toLowerCase();

  if (t.includes('pelantikan')) {
    return {
      kategori: "Organisasi Punguan",
      subjudul: "Konsolidasi dan Pengukuhan Pengurus Baru Punguan Periode 2026–2030",
      paragraf: "Acara pelantikan Badan Pengurus Harian (BPH) ini berlangsung dengan khidmat, lancar, dan penuh kekeluargaan. Jajaran pengurus yang baru resmi dikukuhkan dengan komitmen kuat untuk membawa perubahan positif, meningkatkan pelayanan, serta mempererat persatuan seluruh anggota punguan.",
      kutipan: `"Amanah kepengurusan ini adalah tanggung jawab bersama untuk memajukan punguan dengan semangat gotong royong."`
    };
  } else if (t.includes('martumba') || t.includes('tari')) {
    return {
      kategori: "Seni & Budaya Tradisional",
      subjudul: "Pergelaran Seni dan Pelestarian Budaya Leluhur",
      paragraf: "Pergelaran Martumba dan Tari Sawan ini menampilkan kepiawaian serta antusiasme tinggi dari generasi muda dalam membawakan tarian tradisional warisan leluhur. Gelak tawa dan tepuk tangan meriah dari para penonton memenuhi area acara sepanjang pergelaran berlangsung.",
      kutipan: `"Generasi muda adalah garda terdepan dalam menjaga akar kebudayaan agar terus hidup."`
    };
  } else if (t.includes('pohon') || t.includes('penanaman')) {
    return {
      kategori: "Sosial & Lingkungan Hidup",
      subjudul: "Aksi Nyata Penghijauan dan Kepedulian Lingkungan",
      paragraf: "Kegiatan penanaman pohon serentak ini merupakan wujud nyata kepedulian keluarga besar punguan terhadap kelestarian alam dan lingkungan sekitar. Aksi hijau ini melibatkan para pengurus senior bersama seluruh elemen warga punguan.",
      kutipan: `"Menanam pohon hari ini adalah investasi masa depan untuk kelestarian alam."`
    };
  } else if (t.includes('pesta bolon') || t.includes('bolon')) {
    return {
      kategori: "Pesta Adat Akbar",
      subjudul: "Perayaan Besar Keturunan Marga Bersatu",
      paragraf: "Kegiatan Pesta Bolon Sagalaraja Se-Dunia ini dihadiri oleh ribuan keturunan marga dari berbagai penjuru daerah. Acara diisi dengan prosesi adat sakral, pemberian ulos, pergelaran musik tradisional, serta ramah tamah.",
      kutipan: `"Persatuan dan kebersamaan di dalam ikatan marga adalah kekuatan utama kita."`
    };
  } else {
    return {
      kategori: "Agenda Kegiatan Punguan",
      subjudul: `Laporan Utama Pelaksanaan ${title}`,
      paragraf: `Kegiatan ${title} ini terlaksana dengan sukses dan dihadiri oleh para pengurus serta anggota keluarga besar Punguan dengan penuh antusias dan semangat kekeluargaan.`,
      kutipan: `"Partisipasi aktif seluruh anggota adalah kunci utama kemajuan punguan kita bersama."`
    };
  }
}

export default async function DetailBeritaPage({ searchParams }: DetailPageProps) {
  const resolvedParams = await searchParams;
  const judul = resolvedParams.title ? decodeURIComponent(resolvedParams.title) : 'Detail Kegiatan Punguan';
  const gambar = resolvedParams.image ? decodeURIComponent(resolvedParams.image) : 'https://images.unsplash.com/photo-1529156069898-49953e39b3c3?q=80&w=1200&auto=format&fit=crop';

  const konten = getDetailContent(judul);

  return (
    <main className="bg-white min-h-screen pt-32 md:pt-40 pb-20">
      <div className="bg-gray-50 py-4 border-b border-gray-200 mb-8">
        <div className="container mx-auto px-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary">Beranda</Link> / 
          <Link href="/berita" className="hover:text-primary"> Berita</Link> / 
          <span className="text-primary font-medium truncate"> {judul}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wide">
          {konten.kategori}
        </span>
        
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {judul}
        </h1>

        <div className="flex items-center text-gray-500 text-sm mb-8 pb-6 border-b border-gray-100">
          <span>Dipublikasikan oleh Admin</span>
          <span className="mx-2">•</span>
          <span>Dokumentasi Resmi Punguan</span>
        </div>

        <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-10 shadow-lg bg-gray-100">
          <Image 
            src={gambar} 
            alt={judul} 
            fill 
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p className="lead text-xl font-medium text-gray-800">
            {konten.subjudul}
          </p>
          <p>{konten.paragraf}</p>
          <blockquote className="border-l-4 border-primary pl-4 italic text-gray-800 bg-primary/5 py-4 rounded-r-lg">
            {konten.kutipan}
          </blockquote>
          <p>Seluruh rangkaian acara ditutup dengan sesi foto bersama dan ramah tamah guna mempererat tali silaturahmi.</p>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 flex gap-4">
          <BackToAgendaButton />
        </div>
      </div>
    </main>
  );
}