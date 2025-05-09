"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function ProjectDetailPage() {
  const project = {
    title: "실로폰 투자",
    brand: "실로폰",
    description: "음악저작권 투자 인터뷰 영상",
    thumbnailUrl: "/thumbnails/실로폰 투자.jpg",
    videoUrl: "https://www.youtube.com/embed/sBQ3Fa91lug",
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="max-w-screen-2xl mx-auto px-6 py-10 grid grid-cols-12 gap-6">
        {/* 타이틀 */}
        <div className="col-start-4 col-span-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            {project.title}
          </h1>
        </div>

        {/* 브랜드 */}
        <div className="col-start-4 col-span-6 mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            {project.brand}
          </h2>
        </div>

        {/* 썸네일 이미지 */}
        <div className="col-start-3 col-span-8 mb-12">
          <div className="relative w-full h-[400px]">
            <Image
              src={project.thumbnailUrl}
              alt={project.title}
              fill
              className="object-cover rounded-lg"
              unoptimized // 정적 이미지인 경우에는 성능 문제 없도록 설정 가능
            />
          </div>
        </div>

        {/* 브랜드 설명 */}
        <div className="col-start-4 col-span-2 flex flex-col justify-end">
          <h3 className="text-2xl font-semibold mb-2">Brand</h3>
          <p className="text-lg">{project.brand}</p>
        </div>

        <div className="col-start-7 col-span-6 flex flex-col justify-end">
          <p className="text-base leading-relaxed">{project.description}</p>
        </div>

        {/* 영상 */}
        <div className="col-start-4 col-span-6 mt-12">
          <div className="aspect-video w-full">
            <iframe
              src={project.videoUrl}
              title="Project Video"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}