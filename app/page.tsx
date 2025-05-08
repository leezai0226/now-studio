'use client';

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

function Button({ children, className = "", ...props }: any) {
  return (
    <button
      className={`bg-white text-black font-semibold py-2 px-4 rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function Card({ children, className = "" }: any) {
  return <div className={`rounded-lg shadow-md bg-white ${className}`}>{children}</div>;
}
function CardContent({ children, className = "" }: any) {
  return <div className={className}>{children}</div>;
}

export default function Home() {
  useEffect(() => {
    document.title = "now studio";
  }, []);

  return (
    <main className="min-h-screen bg-black text-white pt-40">
      <Navbar />

      <section className="mt-[16px]">
        <div className="max-w-[1920px] mx-auto px-6 grid grid-cols-12">
          <div className="col-span-12 relative w-full h-0 pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/lVG4NO2QjgM?autoplay=1&mute=1&loop=1&playlist=qZT5gUXeB18&modestbranding=1"
              title="Now Studio"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      
    </main>
  );
}
