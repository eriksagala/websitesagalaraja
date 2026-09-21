import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='flex items-center gap-4'>
  <Image
    src='/images/Logo/Logo.png'
    alt='Logo Sagalaraja'
    width={75}
    height={75}
    className='w-auto h-20 object-contain bg-transparent'
    quality={100}
  />
  <p className='text-black text-xl lg:text-3xl font-bold tracking-wide'>
    SAGALARAJA SE-DUNIA
  </p>
</Link>
  )
}

export default Logo