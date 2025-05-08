// index.tsx
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Home() {
  useEffect(() => {
    document.title = "now studio";
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-70 z-50 py-4 px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 md:space-x-3">
          <Image src="/logo.svg" alt="Studio Logo" width={32} height={32} className="md:w-10 md:h-10" />
          <span className="text-lg md:text-xl font-bold">now studio</span>
        </div>
        <nav className="hidden sm:flex space-x-4 text-xs md:text-base">
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/work" className="hover:text-gray-400">Project</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact Us</Link>
        </nav>
        <button
          className="sm:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {menuOpen && (
        <div className="sm:hidden fixed top-16 left-0 w-full bg-black bg-opacity-90 text-white text-center py-4 space-y-4 z-40">
          <Link href="/about" onClick={() => setMenuOpen(false)} className="block text-lg">About</Link>
          <Link href="/work" onClick={() => setMenuOpen(false)} className="block text-lg">Project</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="block text-lg">Contact Us</Link>
        </div>
      )}

      <section className="h-screen flex flex-col items-center justify-center px-4 pt-32 relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/main-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 leading-tight">
            We Make Films That Move
          </h1>
          <p className="text-base md:text-xl max-w-md md:max-w-2xl mb-6 mx-auto">
            Creative video production studio crafting impactful stories through motion.
          </p>
          <Button className="text-sm md:text-lg px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-white text-black hover:bg-gray-300">
            View Our Work
          </Button>
        </div>
      </section>
    </main>
  );
}