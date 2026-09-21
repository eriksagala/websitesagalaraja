'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FadeInWhenVisible } from '@/app/components/Common/MotionWrapper'
import BackToAgendaButton from '@/app/components/BackToAgendaButton'

// Data Lengkap Seluruh Pengurus Pusat Sagala Raja
const dataDewanPenasihat = [
  { no: 1, jabatan: 'Ketua', nama: 'Drs. Charles Sagala, M.M. / br. Napitupulu' },
  { no: 2, jabatan: 'Sekretaris', nama: 'St. Drs. Kalman Sagala / br. Habiahan' },
  { no: 3, jabatan: 'Anggota', nama: 'Rimson Sagala, S.H. / br. Sinurat' },
  { no: 4, jabatan: 'Anggota', nama: 'Jacobus Jarliman Sagala / br. Sijabat' },
  { no: 5, jabatan: 'Anggota', nama: 'Drs. Jabiat Sagala / br. Panggabean' },
  { no: 6, jabatan: 'Anggota', nama: 'Lundak Sagala, S.E. / br. Gultom' },
  { no: 7, jabatan: 'Anggota', nama: 'Guntur Sagala / br. Nainggolan' },
  { no: 8, jabatan: 'Anggota', nama: 'Raja Sagalaraja' },
  { no: 9, jabatan: 'Anggota', nama: 'Simon Sagala / br. Napitupulu' },
  { no: 10, jabatan: 'Anggota', nama: 'Jayadi Sagala / br. Marbun' },
  { no: 11, jabatan: 'Anggota', nama: 'Sangap Sagala, S.T. / br. Limbong' },
  { no: 12, jabatan: 'Anggota', nama: 'Paiman Sagala S.H. / br. Lumbanraja' },
]

const dataBPH = [
  { no: 13, jabatan: 'Ketua Umum', nama: 'St. Drs. Maringan Sagala / br. Situmorang, S.H. (Op. Anastasia)' },
  { no: 14, jabatan: 'Ketua 1', nama: 'Brigjen (Purn. AD) Hotman Sagala / br. Sirat (Op. Misela)' },
  { no: 15, jabatan: 'Ketua 2', nama: 'Erwin Sagala, S.E. / br. Simanjuntak (A. Josua)' },
  { no: 16, jabatan: 'Ketua 3', nama: 'Ir. Darlin Sagala, M.Si. / br. Sianturi (†A. Indah)' },
  { no: 17, jabatan: 'Ketua 4', nama: 'Ir. Joakim Sagala / Br. Sigalingging (Op. Esra)' },
  { no: 18, jabatan: 'Ketua 5', nama: 'H. Hasan Basri Sagala, S.E. / Linda Sahfirti Hasibuan' },
  { no: 19, jabatan: 'Ketua 6', nama: 'Joni Sagala, S.E. / Br. Naibaho (A. Sefania)' },
  { no: 20, jabatan: 'Sekretaris Jenderal', nama: 'Josua Sagala, S.Sos / Br. Simanjuntak (A. Joses)' },
  { no: 21, jabatan: 'Sekretaris 1', nama: 'Erik Sagala, S.Kom. / Br. Simbolon (A. Erina)' },
  { no: 22, jabatan: 'Sekretaris 2', nama: 'Herdin Sagala, S.Sos., M.Si. / Br. Saragi Sitio' },
  { no: 23, jabatan: 'Sekretaris 3', nama: 'Drs. Jaharap Sagala / Br. Purba (A. Bangga)' },
  { no: 24, jabatan: 'Sekretaris 4', nama: 'Ny. Flores Pakpahan Br. Sagala, S.E.' },
  { no: 25, jabatan: 'Bendahara Umum', nama: 'Dr. Wannen Pakpahan, M.M. / Br. Sagala (Op. Kenzie)' },
  { no: 26, jabatan: 'Bendahara 1', nama: 'Pnt. Winter Sigiro, S.H., M.H. / Br. Sagala, S.Pd. (A. Grace)' },
]

// Pengelompokan Bidang-Bidang secara spesifik agar terpisah rapi
const dataBidangList = [
  {
    namaBidang: 'Hubungan Antarinstansi / Lembaga',
    items: [
      { no: 27, jabatan: 'Ketua', nama: 'Rodoasi Sagala, S.H.' },
    ],
  },
  {
    namaBidang: 'Bidang Adat',
    items: [
      { no: 28, jabatan: 'Ketua', nama: 'Drs. Togar Sagala / Br. Siregar (A. David)' },
      { no: 29, jabatan: 'Anggota', nama: 'Guntur Sagala / Br. Nainggolan' },
      { no: 30, jabatan: 'Anggota', nama: 'Jaraya Sagala / Br. Tanjung (Op. Usaha)' },
      { no: 31, jabatan: 'Anggota', nama: 'Fransiskus Sagala / Br. Saing (Op. Handoko)' },
      { no: 32, jabatan: 'Anggota', nama: 'Samiantar Sagala / Br. Sihaloho (Op. Natania)' },
      { no: 33, jabatan: 'Anggota', nama: 'Wilson Sagala / br. Panjaitan (Op. Ernauli)' },
    ],
  },
  {
    namaBidang: 'Seni & Budaya',
    items: [
      { no: 34, jabatan: 'Ketua', nama: 'Jarliman Sagala / Br. Sijabat' },
      { no: 35, jabatan: 'Anggota', nama: 'Raden Sagala / Br. Situmorang' },
      { no: 36, jabatan: 'Anggota', nama: 'Ny. Feri Nainggolan Boru Sagala' },
    ],
  },
  {
    namaBidang: 'Advokasi, Hukum & HAM',
    items: [
      { no: 37, jabatan: 'Ketua', nama: 'Leonardus Sagala, S.H., M.H.' },
      { no: 38, jabatan: 'Anggota', nama: 'Dr. Jimmy Simanjuntak, SH., MH.' },
      { no: 39, jabatan: 'Anggota', nama: 'Gokmauli Sagala, S.H., M.H.' },
      { no: 40, jabatan: 'Anggota', nama: 'Edi Wijaya Sagala, S.H., M.H.' },
      { no: 41, jabatan: 'Anggota', nama: 'Budiman Sagala, S.H., M.H.' },
      { no: 42, jabatan: 'Anggota', nama: 'Fredy Sagala, S.H.' },
    ],
  },
  {
    namaBidang: 'Organisasi & Keanggotaan',
    items: [
      { no: 43, jabatan: 'Ketua', nama: 'Saut Parulian Sagala, S.H., M.H. / Br. Manurung' },
      { no: 44, jabatan: 'Anggota', nama: 'Jean Madon Sagala, S.H. / Br. Tampubolon' },
    ],
  },
  {
    namaBidang: 'Penguatan Kelembagaan',
    items: [
      { no: 45, jabatan: 'Ketua', nama: 'Letjend. (Purn. AD) Cornel Simbolon / br. Sagala' },
      { no: 46, jabatan: 'Anggota', nama: 'Rico Marpaung, S.H.' },
    ],
  },
  {
    namaBidang: 'Kaderisasi & Generasi Muda',
    items: [
      { no: 47, jabatan: 'Ketua', nama: 'Luhut Sagala, S.H. / Br. Sitanggang' },
      { no: 48, jabatan: 'Anggota', nama: 'Hotman Sagala, S.E., M.M. / Br. Simbolon' },
    ],
  },
  {
    namaBidang: 'Olahraga',
    items: [
      { no: 49, jabatan: 'Ketua', nama: 'Manguji Matias Sagala, S.E. / Br. Situmorang' },
      { no: 50, jabatan: 'Anggota', nama: 'Mardel Sagala / br. Sinaga' },
      { no: 51, jabatan: 'Anggota', nama: 'Samuel Sagala, S.E. / Br. Lumbanraja' },
      { no: 52, jabatan: 'Anggota', nama: 'Maruan Sagala, S.T., M.S.Tr. / Br. Sinaga' },
    ],
  },
  {
    namaBidang: 'Pemberdayaan Perempuan & Anak',
    items: [
      { no: 53, jabatan: 'Ketua', nama: 'Ny. Sumihar Sagala Br. Napitupulu (Op. Javier Boru)' },
      { no: 54, jabatan: 'Anggota', nama: 'Ny. Linda Sagala br. Manihuruk, S.H., M.H.' },
      { no: 55, jabatan: 'Anggota', nama: 'Ny. Rayun Sinaga Br. Sagala (Op. Jesika)' },
    ],
  },
  {
    namaBidang: 'Pengembangan Tugu Monumen Sagalaraja',
    items: [
      { no: 56, jabatan: 'Ketua', nama: 'Lundak Sagala, S.E. / Br. Gultom' },
      { no: 57, jabatan: 'Anggota', nama: 'Hitler Sagala / Br. Sihotang' },
      { no: 58, jabatan: 'Anggota', nama: 'Usmar Sagala / Br. Limbong' },
    ],
  },
  {
    namaBidang: 'Pelestarian Situs Tarombo',
    items: [
      { no: 59, jabatan: 'Ketua', nama: 'Pdt. Bonar Sagala / Br. Hutahayan' },
      { no: 60, jabatan: 'Anggota', nama: 'Sunggu Sagala / Br. Nadeak' },
      { no: 61, jabatan: 'Anggota', nama: 'Halomoan Sagala / Br. Panggabean' },
      { no: 62, jabatan: 'Anggota', nama: 'Amron Sagala / Br. Sinurat' },
    ],
  },
  {
    namaBidang: 'Pemeliharaan',
    items: [
      { no: 63, jabatan: 'Ketua', nama: 'Hemat Sagala / Br. Manurung' },
    ],
  },
  {
    namaBidang: 'Pendidikan',
    items: [
      { no: 64, jabatan: 'Ketua', nama: 'Drs. Mardi Sagala / Br. Simanjuntak' },
      { no: 65, jabatan: 'Anggota', nama: 'Berlin Sitanggang, S.T., M.Kes. / Br. Sagala' },
      { no: 66, jabatan: 'Anggota', nama: 'Drs. Toga Balasius Sagala / Br. Sirait' },
    ],
  },
  {
    namaBidang: 'Pelatihan Ketenagakerjaan',
    items: [
      { no: 67, jabatan: 'Ketua', nama: 'Ir. Jatar Sagala / Br. Sialagan' },
      { no: 68, jabatan: 'Anggota', nama: 'Drs. Edi Markus Sagala / Br. Sitanggang' },
      { no: 69, jabatan: 'Anggota', nama: 'Huntal Sagala / Br. Simamora' },
    ],
  },
  {
    namaBidang: 'Kesehatan',
    items: [
      { no: 70, jabatan: 'Ketua', nama: 'dr. Junaedi Sagala / Br. Manurung' },
      { no: 71, jabatan: 'Anggota', nama: 'dr. Manahap Pardosi Br. Sagala' },
      { no: 72, jabatan: 'Anggota', nama: 'dr. Subarta Sagala' },
      { no: 73, jabatan: 'Anggota', nama: 'dr. Frans Sagala, Sp. OT.' },
    ],
  },
  {
    namaBidang: 'Humas, Dokumentasi & Publikasi',
    items: [
      { no: 74, jabatan: 'Ketua', nama: 'Ir. Guntar Sagala / br. Tambunan' },
      { no: 75, jabatan: 'Anggota', nama: 'Drs. Hisar Mt Sagala / Br. Limbong' },
      { no: 76, jabatan: 'Anggota', nama: 'Antang Sagala, S.Pd. / Br. Sipayung' },
      { no: 77, jabatan: 'Anggota', nama: 'Ny. Anna Siburian Boru Sagala' },
    ],
  },
  {
    namaBidang: 'Kerukunan Umat Beragama',
    items: [
      { no: 78, jabatan: 'Ketua', nama: 'H. Zainal Sagala' },
      { no: 79, jabatan: 'Anggota', nama: 'H. Dahlan Bukhori Sagala' },
      { no: 80, jabatan: 'Anggota', nama: 'H. Birean Darma Sagala' },
      { no: 81, jabatan: 'Anggota', nama: 'Ahmad Sagala' },
      { no: 82, jabatan: 'Anggota', nama: 'Barmawi Sagala' },
      { no: 83, jabatan: 'Anggota', nama: 'H. Hermanto Sagala' },
      { no: 84, jabatan: 'Anggota', nama: 'Budiman Sagala / Br. Sitorus' },
      { no: 85, jabatan: 'Anggota', nama: 'Bidin Sagala / br. Kesogihan' },
      { no: 86, jabatan: 'Anggota', nama: 'Gilbert Sagala' },
      { no: 87, jabatan: 'Anggota', nama: 'Daulat Sagala / br. Turnip' },
    ],
  },
  {
    namaBidang: 'Pengembangan Aktivitas PSBBI Di Luar Negeri',
    items: [
      { no: 88, jabatan: 'Ketua (Kuwait)', nama: 'Hartono Sagala, S.T. / Br. Sitanggang (A. Hosana)' },
      { no: 89, jabatan: 'Anggota (California)', nama: 'Timbul Sagala / br. Bangun' },
      { no: 90, jabatan: 'Anggota (California)', nama: 'Sahat Sagala / br. Rajagukguk' },
      { no: 91, jabatan: 'Anggota (Colorado)', nama: 'Erikson Sagala / br. China' },
      { no: 92, jabatan: 'Anggota (California)', nama: 'Washington Sagala' },
      { no: 93, jabatan: 'Anggota (Jerman)', nama: 'Parlindungan Gorila Sagala' },
      { no: 94, jabatan: 'Anggota (California)', nama: 'Anto Sagala / br. Siregar' },
      { no: 95, jabatan: 'Anggota (California)', nama: 'Marben Sagala' },
      { no: 96, jabatan: 'Anggota (Sacramento)', nama: 'Ir. Poltak Sagala / br. Sitorus' },
    ],
  },
  {
    namaBidang: 'Pariwisata',
    items: [
      { no: 97, jabatan: 'Ketua', nama: 'Gorman Sagala, S.E.' },
      { no: 98, jabatan: 'Anggota', nama: 'Immanuel T.P. Sitanggang S.E.' },
      { no: 99, jabatan: 'Anggota', nama: 'Dedis Kartono Sagala, S.E.' },
      { no: 100, jabatan: 'Anggota', nama: 'Marjuki Sagala, S.E.' },
    ],
  },
  {
    namaBidang: 'Ekonomi Kreatif',
    items: [
      { no: 101, jabatan: 'Ketua', nama: 'Ny. Johana Rosmauli Sagala Br. Sitanggang' },
      { no: 102, jabatan: 'Anggota', nama: 'Janer Sagala, S.E., M.Pp. / Br. Gultom' },
      { no: 103, jabatan: 'Anggota', nama: 'Midian Petra Sagala, S.T., M.T. / Br. Simbolon' },
    ],
  },
  {
    namaBidang: 'Pengembangan Sumber Daya Alam',
    items: [
      { no: 104, jabatan: 'Ketua', nama: 'Ir. Walson Sagala / Br. Naibaho' },
      { no: 105, jabatan: 'Anggota', nama: 'Paul Sagala, S.T. / Br. Hutagaol' },
      { no: 106, jabatan: 'Anggota', nama: 'Agus Sagala / Br. Hutabarat' },
    ],
  },
]

export default function StrukturOrganisasiPage() {
  const [searchTerm, setSearchTerm] = useState('')

  // Filter Penasihat
  const filteredPenasihat = dataDewanPenasihat.filter(
    (item) =>
      item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.jabatan.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Filter BPH
  const filteredBPH = dataBPH.filter(
    (item) =>
      item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.jabatan.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Filter Bidang-Bidang
  const filteredBidang = dataBidangList
    .map((bidang) => ({
      ...bidang,
      items: bidang.items.filter(
        (item) =>
          item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.jabatan.toLowerCase().includes(searchTerm.toLowerCase()) ||
          bidang.namaBidang.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((bidang) => bidang.items.length > 0)

  const totalResults = filteredPenasihat.length + filteredBPH.length + filteredBidang.reduce((acc, b) => acc + b.items.length, 0)

  return (
    // PERUBAHAN UTAMA: pt-28 ditambahkan agar posisi konten turun ke bawah dan tidak menabrak header/navbar atas
    <main className="min-h-screen pt-38 pb-16 px-4 sm:px-6 lg:px-8 text-slate-800 bg-[radial-gradient(ellipse_at_top,#ffffff,#A9A9A9,#F08080)]">
      <div className="max-w-6xl mx-auto">
        
        {/* Tombol Kembali ke Beranda */}
        {/* <FadeInWhenVisible>
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/90 hover:bg-white text-amber-700 hover:text-amber-800 rounded-xl shadow-sm border border-slate-200/80 backdrop-blur-md transition-all font-medium text-sm group"
            >
              <Icon icon="solar:arrow-left-linear" width="18" height="18" className="transition-transform group-hover:-translate-x-1" />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
        </FadeInWhenVisible> */}

        {/* Header Elegan dengan Gradasi Soft */}
        <FadeInWhenVisible>
          <div 
            className="relative overflow-hidden rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl mb-12 text-center"
            style={{
                background: 'linear-gradient(to bottom right, #bd1b1b, #f8fafc, #131010)'
            }}
        >
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10">
              <span className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-semibold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-4">
                Dokumen Resmi Organisasi
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-amber-800 mb-4">
                Struktur Organisasi Pengurus Pusat <br className="hidden sm:inline" /> Sagala Raja
              </h1>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Direktori resmi Dewan Penasihat, Badan Pengurus Harian (BPH), serta unit bidang-bidang khusus yang terpisah secara terstruktur dan elegan.
              </p>
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Kotak Pencarian Mewah (Floating Glass) */}
        <FadeInWhenVisible>
          <div className="sticky top-6 z-30 mb-12">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-3 shadow-lg border border-slate-200/80 flex items-center gap-3">
              <div className="relative w-full">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-amber-600/70">
                  <Icon icon="solar:magnifer-bold" width="22" height="22" />
                </span>
                <input
                  type="text"
                  placeholder="Cari nama pengurus, jabatan, atau bidang (contoh: Hotman, Adat, Hukum)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50/80 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20 text-slate-800 placeholder-slate-400 font-medium transition-all"
                />
              </div>
            </div>
          </div>
        </FadeInWhenVisible>

        <div className="space-y-16">
          
          {/* 1. KATEGORI: DEWAN PENASIHAT */}
          {filteredPenasihat.length > 0 && (
            <FadeInWhenVisible>
              <section className="bg-white/70 backdrop-blur-md rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm">
                <div className="bg-gradient-to-r from-slate-100 via-white to-amber-50/50 px-8 py-5 border-b border-slate-200/80 flex items-center justify-between">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-wide flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    A. Dewan Penasihat / Pembina
                  </h2>
                  <span className="text-xs font-semibold text-slate-600 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
                    {filteredPenasihat.length} Personil
                  </span>
                </div>
                <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredPenasihat.map((person) => (
                    <div key={person.no} className="group bg-white hover:bg-amber-50/30 border border-slate-200/70 hover:border-amber-400/50 rounded-2xl p-5 transition-all duration-300 flex items-start gap-4 shadow-2xs">
                      <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-amber-500/10 border border-slate-200 group-hover:border-amber-400/40 flex items-center justify-center text-xs font-bold text-slate-600 group-hover:text-amber-700 transition-colors">
                        {person.no}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-semibold tracking-wider text-amber-700/90 uppercase block mb-1">
                          {person.jabatan}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-slate-950 transition-colors leading-snug">
                          {person.nama}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </FadeInWhenVisible>
          )}

          {/* 2. KATEGORI: BADAN PENGURUS HARIAN (BPH) */}
          {filteredBPH.length > 0 && (
            <FadeInWhenVisible>
              <section className="bg-white/70 backdrop-blur-md rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm">
                <div className="bg-gradient-to-r from-slate-100 via-white to-amber-50/50 px-8 py-5 border-b border-slate-200/80 flex items-center justify-between">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-wide flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    B. Badan Pengurus Harian (BPH)
                  </h2>
                  <span className="text-xs font-semibold text-slate-600 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
                    {filteredBPH.length} Personil
                  </span>
                </div>
                <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredBPH.map((person) => (
                    <div key={person.no} className="group bg-white hover:bg-amber-50/30 border border-slate-200/70 hover:border-amber-400/50 rounded-2xl p-5 transition-all duration-300 flex items-start gap-4 shadow-2xs">
                      <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-amber-500/10 border border-slate-200 group-hover:border-amber-400/40 flex items-center justify-center text-xs font-bold text-slate-600 group-hover:text-amber-700 transition-colors">
                        {person.no}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-xs font-semibold tracking-wider text-amber-700/90 uppercase">
                            {person.jabatan}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 border border-amber-500/20">
                            Utama
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-slate-950 transition-colors leading-snug">
                          {person.nama}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </FadeInWhenVisible>
          )}

          {/* 3. KATEGORI: BIDANG-BIDANG */}
          <div className="space-y-6">
            <FadeInWhenVisible>
              <div className="border-b border-slate-200 pb-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-wide flex items-center gap-3">
                  <Icon icon="solar:layers-minimalistic-bold-duotone" width="28" height="28" className="text-amber-600" />
                  C. Bidang-Bidang Kepengurusan Terpisah
                </h2>
                <p className="text-slate-600 text-sm mt-1">Daftar divisi dan bidang fungsional kepengurusan Pusat Sagala Raja.</p>
              </div>
            </FadeInWhenVisible>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredBidang.map((bidang, index) => (
                <FadeInWhenVisible key={index}>
                  <div className="bg-white/70 backdrop-blur-md rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm flex flex-col justify-between hover:border-amber-400/50 transition-all h-full">
                    
                    {/* Header Nama Bidang */}
                    <div className="bg-gradient-to-r from-slate-100 via-white to-amber-50/40 px-6 py-4 border-b border-slate-200/80 flex items-center justify-between">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-wide flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                        {bidang.namaBidang}
                      </h3>
                      <span className="text-[11px] font-semibold text-slate-600 bg-white px-2.5 py-0.5 rounded-full border border-slate-200">
                        {bidang.items.length} Anggota
                      </span>
                    </div>

                    {/* List Anggota di dalam Bidang Tersebut */}
                    <div className="p-5 space-y-3 flex-1">
                      {bidang.items.map((person) => {
                        const isKetuaBidang = person.jabatan.toLowerCase().includes('ketua')
                        return (
                          <div key={person.no} className="bg-white hover:bg-amber-50/30 border border-slate-200/60 hover:border-amber-400/40 rounded-xl p-3.5 transition-all flex items-start gap-3 shadow-2xs">
                            <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-[11px] font-bold text-slate-600">
                              {person.no}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2 mb-0.5">
                                <span className={`text-[11px] font-semibold uppercase ${isKetuaBidang ? 'text-amber-700 font-bold' : 'text-slate-500'}`}>
                                  {person.jabatan}
                                </span>
                                {isKetuaBidang && (
                                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-700 border border-amber-500/20">
                                    Koordinator
                                  </span>
                                )}
                              </div>
                              <h4 className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                                {person.nama}
                              </h4>
                            </div>
                          </div>
                        )
                      })}
                    </div>
            
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>

          {/* Kondisi Jika Pencarian Kosong */}
          {totalResults === 0 && (
            <FadeInWhenVisible>
              <div className="text-center py-20 bg-white/70 backdrop-blur-md rounded-3xl border border-slate-200 shadow-sm">
                <Icon icon="solar:document-search-linear" width="56" height="56" className="mx-auto text-amber-600/40 mb-4" />
                <h3 className="text-lg font-bold text-slate-800 mb-1">Pencarian Tidak Ditemukan</h3>
                <p className="text-slate-500 text-sm">Tidak ada data pengurus atau bidang yang cocok dengan kata kunci &quot;{searchTerm}&quot;.</p>
              </div>
            </FadeInWhenVisible>
          )}

        </div> {/* Tutup div space-y-16 */}

        {/* TOMBOL KEMBALI DI BAWAH KEDUA KOLOM (FULL WIDTH / CENTER) */}
        <FadeInWhenVisible>
          <div className="mt-16 pt-6 border-t border-slate-200/80 flex justify-center">
            <BackToAgendaButton />
          </div>
        </FadeInWhenVisible>

      </div>
    </main>
  )
}