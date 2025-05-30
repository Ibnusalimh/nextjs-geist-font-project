import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo2.png"
              alt="Logo Agendakota"
              width={150}
              height={40}
              className="h-10 w-[150px] object-contain"
            />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/register" className="text-gray-700 hover:text-gray-900">
              Daftar
            </Link>
            <Link 
              href="/login"
              className="bg-[#E6286E] text-white px-6 py-2 rounded-md hover:bg-[#d41f61]"
            >
              Login
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fokus ke Acara, Biar Kami Urus Tiket & Promosinya
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Jual tiket lebih cepat, kelola peserta lebih mudah, tanpa potongan komisi
          </p>
          
          {/* Search Inputs */}
          <div className="max-w-2xl mx-auto space-y-4 mb-8">
            <div className="relative">
              <input 
                type="text"
                placeholder="Cari event/pesHeader/event.."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6286E]"
              />
            </div>
            <div className="relative">
              <input 
                type="text"
                placeholder="Cari event atau atraksi lain"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6286E]"
              />
            </div>
          </div>

          {/* Event Type Filters */}
          <div className="flex justify-center gap-4 mb-12">
            <button className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50">
              Online
            </button>
            <button className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50">
              Onsite
            </button>
            <button className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50">
              Hybrid
            </button>
          </div>

          <button className="bg-[#E6286E] text-white px-8 py-3 rounded-lg text-lg hover:bg-[#d41f61]">
            Explore Event
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Satu Platform untuk Semua Kebutuhan Eventmu!
              </h2>
              <p className="text-gray-600">
                Agendakota.id memberikan solusi lengkap untuk membuat, mengelola, dan mempromosikan acara. Dari acara gratis hingga berbayar, semua bisa dilakukan di sini.
              </p>
              <button className="mt-8 bg-[#E6286E] text-white px-8 py-3 rounded-lg text-lg hover:bg-[#d41f61]">
                Create Event
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative w-full h-[400px]">
                <Image 
                  src="/images/FrontCover2.png"
                  alt="Platform Features"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="relative w-full h-[400px]">
                <Image 
                  src="/images/FrontCover1.png"
                  alt="Platform Features"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <Image 
                src="/images/logo2.png"
                alt="Logo Agendakota"
                width={180}
                height={50}
                className="mb-6 w-[180px] h-[50px] object-contain"
              />
              <p className="text-gray-600 mb-4">
                Koridor Co-Working Space, Gedung Siola lt.3 Jl. Tunjungan No. 1 Surabaya
              </p>
              <div className="space-y-2">
                <Link href="https://wa.me/+6288990079999" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <Image 
                    src="/images/WhatsApp_icon.png" 
                    alt="WhatsApp" 
                    width={24} 
                    height={24}
                    className="w-6 h-6 object-contain" 
                  />
                  +6288990079999
                </Link>
                <Link href="mailto:halo@agendakota.id" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <Image 
                    src="/images/email.png" 
                    alt="Email" 
                    width={24} 
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                  halo@agendakota.id
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-4">Perusahaan</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Tentang Agendakota</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Jadi Partner Kami</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Fitur</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Harga</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Media</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Pilih Kota</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Surabaya</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Jakarta</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Bandung</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Yogyakarta</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Malang</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Kategori Event</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Seminar</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Talkshow</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Workshop</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Exhibition, Expo, Pameran</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Pertunjukan</Link></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600">© 2024 Agendakota. All rights reserved.</p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-600 hover:text-gray-900">Refund & Cancel Event</Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">Kebijakan Privasi</Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">Syarat & Ketentuan</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
