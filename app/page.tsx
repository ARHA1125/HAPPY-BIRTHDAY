"use client";
import React, { useState } from 'react';

export default function BirthdayCard() {
  const [isOpen, setIsOpen] = useState(false);

  const stripePattern = "repeating-linear-gradient(45deg, #ef4444, #ef4444 10px, #ffffff 10px, #ffffff 20px)";
  const gridPattern = "linear-gradient(to right, #9ca3af 1px, transparent 1px), linear-gradient(to bottom, #9ca3af 1px, transparent 1px)";

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-amber-50 p-4 font-sans overflow-hidden [perspective:1500px] select-none">
      
      {/* Container Utama Kartu */}
      <div 
        className={`relative w-full max-w-sm h-[80vh] max-h-[700px] transition-all duration-1000 ease-in-out cursor-pointer ${
          isOpen ? 'translate-y-0' : '-translate-y-1/4 hover:scale-[1.02]'
        }`}
        onClick={() => setIsOpen(!isOpen)}
        style={{ transformStyle: 'preserve-3d' }}
      >
        
        {/* =======================================
            1. BAGIAN ATAS KARTU (Flap yang membuka ke atas)
            ======================================= */}
        <div 
          className="absolute top-0 w-full h-1/2 origin-bottom transition-transform duration-1000 ease-in-out z-20"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: isOpen ? 'rotateX(0deg)' : 'rotateX(-180deg)' 
          }}
        >
          
          {/* HALAMAN DALAM ATAS (Tanpa bingkai bawah agar menyatu ke bawah) */}
          <div 
            className="absolute inset-0 rounded-t-2xl overflow-hidden shadow-sm"
            style={{ 
              background: stripePattern,
              paddingTop: '10px',
              paddingLeft: '10px',
              paddingRight: '10px',
              paddingBottom: '0px', // Tidak ada bingkai di bagian bawah
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateX(0deg) translateZ(1px)'
            }}
          >
             <div className="w-full h-full bg-[#fdfbf7] rounded-t-xl relative flex flex-col items-center justify-center overflow-hidden">
                {/* Latar Kertas Kotak */}
                <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: gridPattern, backgroundSize: '20px 20px' }}></div>
                
                {/* Judul & Hiasan Hati */}
                <div className="relative z-10 w-full text-center px-4 pt-2">
                   <h1 className="text-2xl sm:text-3xl font-bold text-red-600 tracking-wider mb-1" style={{ fontFamily: 'cursive' }}>
                      SELAMAT ULANG TAHUN
                   </h1>
                   <h2 className="text-5xl sm:text-6xl text-red-600 font-bold mb-3 flex items-center justify-center gap-2" style={{ fontFamily: 'cursive' }}>
                      MAMA
                   </h2>
                   <div className="flex justify-center gap-8 text-red-500 text-2xl font-serif opacity-80 mt-2">
                      <span>♡</span><span>♡</span><span>♡</span>
                   </div>
                </div>
                {/* Gambar Kue Ulang Tahun */}
                <div className="w-[100%] max-w-[145px] bg-white p-2 shadow-md rotate-2 rounded-md border border-gray-200 mt-1 flex items-center justify-center min-h-[145px]">
                    <img 
                      src="/hbd.jpg" 
                      alt="Kue Ulang Tahun" 
                      className="w-full h-auto rounded object-cover"
                      onError={(e) => {
                        // Jika foto hbd.jpg belum dimasukkan ke folder public, tampilkan emoji kue
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerHTML = '<span class="text-2xl py-1">🎂</span>';
                        }
                      }}
                    />
                </div>
             </div>
          </div>

          {/* HALAMAN SAMPUL / COVER (Terlihat saat kartu ditutup) */}
          <div 
            className="absolute inset-0 rounded-t-2xl overflow-hidden bg-red-600 border-[8px] border-white flex flex-col items-center justify-center shadow-2xl"
            style={{ 
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateX(180deg) translateZ(1px)'
            }}
          >
             <div className="border-2 border-white/50 border-dashed rounded-lg w-[85%] h-[85%] flex flex-col items-center justify-center text-white">
                <p className="flex justify-center items-center p-4">
                  <img
                    src="/mama.jpg"  // Pastikan foto mama.jpg sudah dimasukkan ke folder public
                    alt="Deskripsi Gambar"
                    width={130}  // Ukuran lebar dalam piksel yang diinginkan
                    height={130} // Ukuran tinggi dalam piksel yang diinginkan
                    className="rounded-md object-cover border-4 border-white shadow-lg"
                  />
                </p>
                <p className="text-3xl font-bold font-serif text-center mb-2">Selamat Ulang Tahun, MAMA!</p>
                <p className="text-[13px] bg-white/20 px-4 py-2 rounded-full mt-8 animate-pulse">
                  Ketuk untuk membuka
                </p>
             </div>
          </div>

        </div>

        {/* =======================================
            2. BAGIAN BAWAH KARTU (Pondasi bawah)
            ======================================= */}
        <div 
          className="absolute bottom-0 w-full h-1/2 rounded-b-2xl overflow-hidden z-10 shadow-xl"
          style={{ 
            background: stripePattern,
            paddingTop: '0px', // Tidak ada bingkai di bagian atas
            paddingLeft: '10px',
            paddingRight: '10px',
            paddingBottom: '10px',
          }}
        >
           <div className="w-full h-full bg-[#fdfbf7] rounded-b-xl relative flex flex-col items-center justify-between p-4 overflow-hidden">
              {/* Latar Kertas Kotak */}
              <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: gridPattern, backgroundSize: '20px 20px' }}></div>
              
              <div className="relative z-10 flex-1 w-full flex flex-col items-center justify-between pt-1">
                 
                 {/* Pesan Ucapan */}
                 <div className="w-full text-left bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-gray-200 mt-3 shadow-sm">
                    <p className="text-[14px] sm:text-[16px] text-gray-800 leading-relaxed font-semibold" style={{ fontFamily: 'cursive' }}>
                       Terima kasih atas segala cinta, kesabaran, dan doamu yang tak pernah putus. Semoga ibu selalu diberi kesehatan, kebahagiaan, dan umur yang panjang. ❤️
                    </p>
                    <p className="text-right text-sm mt-2 text-red-600 font-bold" style={{ fontFamily: 'cursive' }}>
                       — Anakmu, 2026
                    </p>
                 </div>

              </div>
           </div>
        </div>
        
        {/* Garis Lipatan Tipis (Crease) di tengah */}
        <div className="absolute top-1/2 left-3 right-3 h-0 border-t border-dashed border-gray-300/80 z-30 pointer-events-none"></div>

      </div>
    </div>
  );
}