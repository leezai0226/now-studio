'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 z-50 py-2 md:py-4">
      <div className="max-w-[1920px] mx-auto grid grid-cols-12 gap-6 px-4 md:px-6 items-center relative">

        {/* 모바일 로고: 가운데 */}
        <div className="col-span-6 col-start-4 flex md:hidden justify-center items-center">
          <Link href="/" className="relative h-[60px] w-[140px]">
            <Image
              src="/logo.svg"
              alt="now studio logo"
              fill
              className="object-contain"
            />
          </Link>
        </div>

        {/* 햄버거 버튼: 6번 컬럼에 위치 */}
        <div className="col-span-1 col-start-11 flex md:hidden justify-end">
          <button
            className="text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* 데스크탑 로고 */}
        <div className="hidden md:flex col-span-3 relative h-[100px]">
          <Link href="/" className="block w-full h-full relative">
            <Image
              src="/logo.svg"
              alt="now studio logo"
              fill
              className="object-contain w-full h-full"
            />
          </Link>
        </div>

        {/* 메뉴: 6~7 컬럼 */}
        <div className="hidden md:flex col-start-6 col-span-3 justify-center items-center space-x-12 text-white text-lg font-medium">
          <Link href="/about" className="hover:text-gray-400">About Us</Link>
          <Link href="/work" className="hover:text-gray-400">Project</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {menuOpen && (
        <div className="md:hidden w-full bg-black bg-opacity-90 text-white text-center py-6 space-y-4">
          <Link href="/about" onClick={() => setMenuOpen(false)} className="block text-xl">About</Link>
          <Link href="/work" onClick={() => setMenuOpen(false)} className="block text-xl">Project</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="block text-xl">Contact</Link>
        </div>
      )}
    </header>
  );
}