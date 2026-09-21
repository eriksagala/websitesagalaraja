'use client'

import { useRouter } from 'next/navigation'

export default function BackToAgendaButton() {
  const router = useRouter()

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back()
    }
  }

  return (
    <button
      type="button"
      onClick={handleBack}
      className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-primary transition duration-300 text-sm font-medium"
    >
      ← Kembali ke Halaman Sebelumnya
    </button>
  )
}
