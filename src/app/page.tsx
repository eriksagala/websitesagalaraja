import React from 'react'
import Hero from '@/app/components/Home/Beranda'
import About from '@/app/components/Home/About'
import Features from '@/app/components/Home/Features'
import Expert from '@/app/components/Home/Organisasi'
import Gallery from '@/app/components/Home/Informasi'
import Newsletter from '@/app/components/Home/Galeri'
import { Metadata } from 'next'
import ContactForm from './components/Contact/Form'
export const metadata: Metadata = {
  title: 'Sagalaraja Se-Dunia',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <Expert />
      <Gallery />
      <ContactForm />
      <Newsletter />
    </main>
  )
}
