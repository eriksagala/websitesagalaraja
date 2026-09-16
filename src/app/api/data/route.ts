import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { FeaturesType } from '@/app/types/features'
import { ExpertChiefType } from '@/app/types/expertchief'
import { GalleryImagesType } from '@/app/types/galleryimage'
import { FooterLinkType } from '@/app/types/footerlink'
import { FullMenuType } from '@/app/types/fullmenu'

const HeaderData: HeaderItem[] = [
  { label: 'Beranda', href: '/#beranda' },
  { label: 'Tentang Sagalaraja', href: '/#aboutus' },
  { label: 'Organisasi', href: '/#organisasi' }, // UBAH INI (sebelumnya /#menu)
  { label: 'Informasi', href: '/#informasi' },  // UBAH INI (sebelumnya /#reserve)
  { label: 'Galeri', href: '/#galeri' },
]

const FeaturesData: FeaturesType[] = [
  {
  imgSrc: '/images/Features/tugupolos.png', // Mengarahkan langsung ke gambar tugu
  heading: 'Tugu Sagalaraja',
  subheading:
    'Monumen megah sebagai simbol pemersatu, penghormatan kepada leluhur, dan identitas fisik keluarga besar Sagalaraja se-dunia.',
},
  {
    imgSrc: '/images/Features/tarombo.png',
    heading: 'Tarombo Sagalaraja',
    subheading:
      'Pendataan dan pemetaan silsilah keturunan Sagalaraja yang tersusun sistematis untuk menjaga histori serta garis keturunan generasi ke generasi.',
  },
  {
    imgSrc: '/images/Features/beasiswa.png',
    heading: 'Beasiswa & Pendidikan',
    subheading:
      'Bantuan dana pendidikan dan apresiasi bagi generasi muda Sagalaraja yang berprestasi di bidang akademik maupun non-akademik.',
  },
  {
    imgSrc: '/images/Features/adat.png',
    heading: 'Pelestarian Adat dan Budaya',
    subheading:
      'Edukasi tata cara adat, makna Ulos, dan pelestarian bahasa Batak bagi generasi penerus agar tradisi luhur Sagalaraja tetap lestari.',
  },
  {
    imgSrc: '/images/Features/umkm.png',
    heading: 'Pemberdayaan Ekonomi & UMKM',
    subheading:
      'Pemberdayaan usaha lokal, bantuan modal, dan promosi produk unggulan dari Huta Sagala ke tingkat nasional hingga global.',
  }
]

const ExpertChiefData: ExpertChiefType[] = [
  {
    profession: 'Ketua Umum',
    name: 'Drs. Maringan Sagala',
    imgSrc: '/images/Expert/boyone.png',
  },
  {
    profession: 'Ketua I',
    name: 'Brigjen TNI (Purn) Hotman Sagala',
    imgSrc: '/images/Expert/girl.png',
  },
  {
    profession: 'Ketua II',
    name: 'Reinhard Erwin Sagala',
    imgSrc: '/images/Expert/placeholder.png', // Gambar siluet netral
  },
  {
    profession: 'Wakil Ketua II',
    name: 'Dr. Wannen Pakpahan',
    imgSrc: '/images/Expert/placeholder.png',
  },
  {
    profession: 'Ketua III',
    name: 'Ir. Joakim Sagala',
    imgSrc: '/images/Expert/placeholder.png',
  },
  {
    profession: 'Ketua IV',
    name: 'Dr. MJP Sagala',
    imgSrc: '/images/Expert/placeholder.png',
  },
  {
    profession: 'Ketua V',
    name: 'Hasan Basri Sagala',
    imgSrc: '/images/Expert/placeholder.png',
  },
  {
    profession: 'Ketua VI',
    name: 'Joni Sagala',
    imgSrc: '/images/Expert/placeholder.png',
  },
  {
    profession: 'Sekretaris Jenderal',
    name: 'Josua Sagala, S.Sos',
    imgSrc: '/images/Expert/placeholder.png',
  },
  {
    profession: 'Sekretaris I',
    name: 'Erik Sagala, S.Kom',
    imgSrc: '/images/Expert/placeholder.png',
  },
  {
    profession: 'Sekretaris II',
    name: 'Herdin Sagala',
    imgSrc: '/images/Expert/placeholder.png',
  },
  {
    profession: 'Sekretaris III',
    name: 'Jaharap Sagala',
    imgSrc: '/images/Expert/placeholder.png',
  },
  {
    profession: 'Sekretaris IV',
    name: 'Flores Sagala, SE',
    imgSrc: '/images/Expert/placeholder.png',
  },
  {
    profession: 'Bendahara Umum',
    name: 'Dr. Wannen Pakpahan',
    imgSrc: '/images/Expert/placeholder.png',
  },
  {
    profession: 'Wakil Bendahara Umum',
    name: 'Winter Sigiro',
    imgSrc: '/images/Expert/placeholder.png',
  },

]

const GalleryImagesData: GalleryImagesType[] = [
  {
    src: '/images/Gallery/tugupolos.png',
    name: 'Salad Caesar (187 Kcal)',
    price: 35,
  },
  {
    src: '/images/Gallery/foodtwo.webp',
    name: 'Salad Natal (118 Kcal)',
    price: 17,
  },
  {
    src: '/images/Gallery/foodthree.webp',
    name: 'Tumis Jamur Mangkuk Labu (238 Kcal)',
    price: 45,
  },
  {
    src: '/images/Gallery/foodfour.webp',
    name: 'Piza Ayam Barbekyu (272 Kcal)',
    price: 27,
  },
]

const FullMenuData: FullMenuType[] = [
  {
    name: 'Salmon Panggang',
    price: 'Rp 185.000',
    description: 'Disajikan dengan saus mentega lemon dan sayuran panggang.',
  },
  {
    name: 'Salad Caesar',
    price: 'Rp 95.000',
    description: 'Selada renyah dengan keju parmesan, remahan roti panggang, dan saus Caesar.',
  },
  {
    name: 'Piza Margherita',
    price: 'Rp 135.000',
    description: 'Piza klasik dengan saus tomat, keju mozarila, dan daun kemangi segar.',
  },
  {
    name: 'Sup Tomat Kemangi',
    price: 'Rp 65.000',
    description: 'Sup tomat kental dengan aroma bawang putih dan kemangi segar.',
  },
  {
    name: 'Kue Cokelat Lava',
    price: 'Rp 75.000',
    description:
      'Kue cokelat hangat dengan lelehan cokelat di dalamnya, disajikan bersama es krim vanila.',
  },
  {
    name: 'Spageti Carbonara',
    price: 'Rp 150.000',
    description:
      'Spageti lezat yang dimasak dengan telur, daging asap, keju parmesan, dan lada hitam.',
  },
  {
    name: 'Tiramisu',
    price: 'Rp 85.000',
    description:
      'Kue lapis biskuit kopi disiram saus mascarpone halus dan taburan bubuk kakao.',
  },
]

const FooterLinkData: FooterLinkType[] = [
  {
    section: 'Navigasi',
    links: [
      { label: 'Beranda', href: '/' },
      { label: 'Tentang Sagalaraja', href: '/#aboutus' },
      { label: 'Organisasi', href: '/#organisasi' }, // UBAH INI JUGA
      { label: 'Informasi', href: '/#informasi' },
      { label: 'Galeri', href: '/documentation' }
    ],
  },
  // {
  //   section: 'Bantuan',
  //   links: [
  //     { label: 'Bantuan & FAQ', href: '/' },
  //     { label: 'Rilis Pers', href: '/' },
  //     { label: 'Program Afiliasi', href: '/' },
  //     { label: 'Mitra Hotel', href: '/' },
  //     { label: 'Kemitraan', href: '/' },
  //   ],
  // },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    FeaturesData,
    ExpertChiefData,
    GalleryImagesData,
    FullMenuData,
    FooterLinkData,
  })
}