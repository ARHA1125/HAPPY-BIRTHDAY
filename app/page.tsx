"use client";
import React, { useState } from 'react';
import { Caveat, Playfair_Display } from 'next/font/google';

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
});

export default function BirthdayCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [cakeError, setCakeError] = useState(false);

  const stripePattern =
    "repeating-linear-gradient(45deg, #ef4444, #ef4444 10px, #ffffff 10px, #ffffff 20px)";
  const gridPattern =
    "linear-gradient(to right, #9ca3af 1px, transparent 1px), linear-gradient(to bottom, #9ca3af 1px, transparent 1px)";

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-amber-50 p-4 font-sans overflow-hidden [perspective:1500px] select-none">
      
      {/* Container Utama Kartu */}
      <div
        className={`relative w-full max-w-sm h-[82vh] max-h-[700px] transition-all duration-1000 ease-in-out cursor-pointer ${
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
            transform: isOpen ? 'rotateX(0deg)' : 'rotateX(-180deg)',
          }}
        >
          
          {/* HALAMAN DALAM ATAS */}
          <div 
            className="absolute inset-0 rounded-t-2xl overflow-hidden shadow-sm"
            style={{ 
              background: stripePattern,
              paddingTop: '10px',
              paddingLeft: '10px',
              paddingRight: '10px',
              paddingBottom: '0px',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateX(0deg) translateZ(1px)'
            }}
          >
            <div className="w-full h-full bg-[#fdfbf7] rounded-t-xl relative flex flex-col items-center justify-start pt-2 px-3 overflow-hidden">
              {/* Latar Kertas Kotak */}
              <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: gridPattern, backgroundSize: '20px 20px' }}></div>
              
              {/* Judul & Hiasan Hati */}
              <div className="relative z-10 w-full text-center">
                <h1 className={`${caveat.className} text-2xl sm:text-3xl font-bold text-red-600 tracking-wider leading-none`}>
                  SELAMAT ULANG TAHUN
                </h1>
                <h2 className={`${playfair.className} text-4xl sm:text-5xl text-red-600 font-bold my-0.5 tracking-tight`}>
                  MAMA
                </h2>
                <div className="flex justify-center gap-4 text-red-500 text-lg opacity-80 mb-1">
                  <span>♡</span><span>♡</span><span>♡</span>
                </div>
              </div>

              {/* Foto Kue Polaroid */}
              <div className="relative z-10 w-[82%] max-w-[250px] bg-white p-2 pb-4 shadow-md -rotate-1 rounded border border-gray-200/90 flex flex-col items-center mt-0.5">
                <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden rounded-sm flex items-center justify-center">
                  {!cakeError ? (
                    <img 
                      src="/hbd.jpg" 
                      alt="Kue Ulang Tahun" 
                      className="w-full h-full object-cover"
                      onError={() => setCakeError(true)}
                    />
                  ) : (
                    <span className="text-5xl">🎂</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* HALAMAN SAMPUL / COVER */}
          {/* HALAMAN SAMPUL / COVER */}
          <div
            className="absolute inset-0 rounded-t-2xl overflow-hidden bg-red-600 border-[8px] border-white flex flex-col items-center justify-center shadow-2xl"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateX(180deg) translateZ(1px)',
            }}
          >
            <div className="border-2 border-white/50 border-dashed rounded-lg w-[88%] h-[88%] flex flex-col items-center justify-between p-4 text-white">
              <div className="flex flex-col items-center gap-2.5">
                <img
                  src="/mama.jpg"
                  alt="Foto Mama"
                  width={120}
                  height={120}
                  className="w-28 h-28 rounded-md object-cover border-4 border-white shadow-lg"
                />
                <p className={`${playfair.className} text-2xl sm:text-3xl font-bold text-center leading-snug px-2`}>
                  Happy Birthday 42<sup className="text-base sm:text-lg font-medium lowercase ml-0.5">th</sup> Mama
                </p>
              </div>

              <p className={`${caveat.className} text-lg bg-white/20 px-4 py-1 rounded-full animate-pulse tracking-wider`}>
                Ketuk untuk membuka ✨
              </p>
            </div>
          </div>
        </div>

        {/* =======================================
            2. BAGIAN BAWAH KARTU (Pondasi bawah yang diperbaiki)
            ======================================= */}
        <div
          className="absolute bottom-0 w-full h-1/2 rounded-b-2xl overflow-hidden z-10 shadow-xl"
          style={{
            background: stripePattern,
            paddingTop: '0px',
            paddingLeft: '10px',
            paddingRight: '10px',
            paddingBottom: '10px',
          }}
        >
          <div className="w-full h-full bg-[#fdfbf7] rounded-b-xl relative flex flex-col items-center justify-between pt-3 pb-2 px-3 overflow-hidden">
            {/* Latar Kertas Kotak */}
            <div
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{ backgroundImage: gridPattern, backgroundSize: '20px 20px' }}
            />

            {/* Kotak Pesan Ucapan (Desain Note Kertas Elegan & Fit) */}
            <div className="relative z-10 w-[94%] bg-white/95 backdrop-blur-sm p-3.5 sm:p-4 rounded-lg shadow-sm border border-gray-200/80 rotate-[0.5deg]">
              <p className={`${caveat.className} text-[17px] sm:text-[19px] text-gray-800 leading-snug font-semibold text-center sm:text-left`}>
                Selamat ulang tahun mama, semoga Allah SWT senantiasa melimpahkan rahmat, keberkahan, kesehatan, dan umur yang panjang serta bahagia, aamiin. Tahun ini belum bisa ngado karena gaada duit hehe. Insyaallah tahun depan akan ada kado menarik.
              </p>
            </div>

            {/* Area Tanda Tangan di Kanan Bawah */}
            <div className="relative z-10 w-[94%] flex justify-end pb-1 pr-1">
              <p className={`${caveat.className} text-lg sm:text-xl text-red-600 font-bold tracking-wide`}>
                — Al 1
              </p>
            </div>
          </div>
        </div>

        {/* Garis Lipatan Tipis (Crease) di tengah */}
        <div className="absolute top-1/2 left-3 right-3 h-0 border-t border-dashed border-gray-300/70 z-30 pointer-events-none" />

      </div>
    </div>
  );
}