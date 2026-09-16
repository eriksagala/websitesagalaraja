'use client'
import React, { useState, useEffect } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    namalengkap: '',
    namaistri: '',
    phnumber: '',
    jumlahanak: '',
    alamat: '',
    sektor: '',
    Message: '',
  })
  const [showThanks, setShowThanks] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)

  // Memastikan ke-7 kolom wajib terisi semua
  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => String(value).trim() !== ''
    )
    setIsFormValid(isValid)
  }, [formData])

  const handleChange = (e: any) => {
    const { name, value } = e.target

    // Membatasi input No HP/WA hanya untuk angka
    if (name === 'phnumber') {
      const onlyNums = value.replace(/[^0-9]/g, '')
      setFormData((prevData) => ({
        ...prevData,
        [name]: onlyNums,
      }))
      return
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const reset = () => {
    setFormData({
      namalengkap: '',
      namaistri: '',
      phnumber: '',
      jumlahanak: '',
      alamat: '',
      sektor: '',
      Message: '',
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    // Ganti dengan nomor WhatsApp Admin/Pengurus (Gunakan format 62)
    const nomorWA = "6287896584577" 

    const pesan = `Halo Pengurus Punguan Sagalaraja,%0A` +
      `Saya ingin mendaftar keanggotaan baru dengan data sebagai berikut:%0A%0A` +
      `*Nama Lengkap:* ${formData.namalengkap}%0A` +
      `*Nama Istri:* ${formData.namaistri}%0A` +
      `*No. HP/WA:* ${formData.phnumber}%0A` +
      `*Jumlah Anak:* ${formData.jumlahanak}%0A` +
      `*Alamat Domisili:* ${formData.alamat}%0A` +
      `*Punguan Cabang/Sektor:* ${formData.sektor}%0A` +
      `*Alasan Bergabung:* ${formData.Message}`

    window.open(`https://wa.me/${nomorWA}?text=${pesan}`, '_blank')

    setShowThanks(true)
    reset()

    setTimeout(() => {
      setShowThanks(false)
    }, 5000)
  }

  return (
    <section id='reserve' className='scroll-mt-20'>
      <div className='container'>
        <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase text-center'>
          KEANGGOTAAN
        </p>
        <h2 className='mb-9 font-bold tracking-tight text-center text-3xl md:text-4xl'>
          Gabung Punguan Sagalaraja
        </h2>
        <div className='relative border px-6 py-6 rounded-3xl'>
          <form
            onSubmit={handleSubmit}
            className='flex flex-wrap w-full m-auto justify-between'>
            
            {/* Baris 1 */}
            <div className='sm:flex gap-6 w-full'>
              <div className='mx-0 my-2.5 flex-1'>
                <label htmlFor='namalengkap' className='pb-3 inline-block text-base'>
                  Nama Lengkap <span className='text-red-500'>*</span>
                </label>
                <input
                  id='namalengkap'
                  type='text'
                  name='namalengkap'
                  value={formData.namalengkap}
                  onChange={handleChange}
                  placeholder='Erik Sagala'
                  className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                />
              </div>

              <div className='mx-0 my-2.5 flex-1'>
                <label htmlFor='namaistri' className='pb-3 inline-block text-base'>
                  Nama Istri <span className='text-red-500'>*</span>
                </label>
                <input
                  id='namaistri'
                  type='text'
                  name='namaistri'
                  value={formData.namaistri}
                  onChange={handleChange}
                  placeholder='Rizky Simbolon'
                  className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                />
              </div>

              <div className='mx-0 my-2.5 flex-1'>
                <label htmlFor='phnumber' className='pb-3 inline-block text-base'>
                  No HP/WA <span className='text-red-500'>*</span>
                </label>
                <input
                  id='phnumber'
                  type='text'
                  name='phnumber'
                  placeholder='082374561290'
                  value={formData.phnumber}
                  onChange={handleChange}
                  className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                />
              </div>
            </div>

            {/* Baris 2 */}
            <div className='sm:flex gap-6 w-full'>
              <div className='mx-0 my-2.5 flex-1'>
                <label htmlFor='jumlahanak' className='pb-3 inline-block text-base'>
                  Jumlah Anak <span className='text-red-500'>*</span>
                </label>
                <select
                  name='jumlahanak'
                  id='jumlahanak'
                  value={formData.jumlahanak}
                  onChange={handleChange}
                  className={`w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0 ${
                    formData.jumlahanak === '' ? 'text-gray-400' : 'text-black'
                  }`}>
                  <option value='' disabled hidden className='text-gray-400'>
                    Pilih Jumlah Anak
                  </option>
                  <option value='0' className='text-black'>Belum Ada / 0</option>
                  <option value='1' className='text-black'>1</option>
                  <option value='2' className='text-black'>2</option>
                  <option value='3' className='text-black'>3</option>
                  <option value='4' className='text-black'>4</option>
                  <option value='5' className='text-black'>5</option>
                  <option value='6' className='text-black'>6</option>
                  <option value='7' className='text-black'>7</option>
                  <option value='Lebih dari 7' className='text-black'>Lebih dari 7</option>
                </select>
              </div>

              <div className='mx-0 my-2.5 flex-1'>
                <label htmlFor='alamat' className='pb-3 inline-block text-base'>
                  Alamat Domisili <span className='text-red-500'>*</span>
                </label>
                <input
                  id='alamat'
                  type='text'
                  name='alamat'
                  placeholder='Jln. Mawar Kebon Jeruk, Jakarta Selatan'
                  value={formData.alamat}
                  onChange={handleChange}
                  className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                />
              </div>

              <div className='mx-0 my-2.5 flex-1'>
                <label htmlFor='sektor' className='pb-3 inline-block text-base'>
                  Punguan Cabang / Sektor <span className='text-red-500'>*</span>
                </label>
                <input
                  id='sektor'
                  type='text'
                  name='sektor'
                  value={formData.sektor}
                  onChange={handleChange}
                  placeholder='DPW Medan'
                  className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                />
              </div>
            </div>

            {/* Baris 3 */}
            <div className='w-full mx-0 my-2.5 flex-1'>
              <label htmlFor='message' className='text-base inline-block'>
                Alasan Bergabung <span className='text-red-500'>*</span>
              </label>
              <textarea
                id='message'
                name='Message'
                value={formData.Message}
                onChange={handleChange}
                className='w-full mt-2 rounded-2xl px-5 py-3 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                placeholder='Tuliskan alasan Anda ingin bergabung...'></textarea>
            </div>

            {/* Tombol Submit */}
            <div className='mx-0 my-2.5 w-full'>
              <button
                type='submit'
                disabled={!isFormValid}
                className={`border leading-none px-6 text-lg font-medium py-4 rounded-full transition-all duration-300 ${
                  !isFormValid
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed border-gray-300'
                    : 'bg-primary border-primary text-white hover:bg-transparent hover:text-primary cursor-pointer'
                }`}>
                Daftar
              </button>
            </div>
          </form>

          {showThanks && (
            <div className='text-white bg-primary rounded-full px-6 py-3 text-base mb-4.5 mt-3 absolute bottom-2 left-6 flex items-center gap-2'>
              Mengarahkan ke WhatsApp Pengurus...
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactForm