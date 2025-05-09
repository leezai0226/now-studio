'use client';

import Navbar from "@/components/Navbar";
import Image from "next/image"

export default function ProjectDetailPage() {

  const project = {
    title: "더클래스-청담",
    brand: "더클래스-청담",
    description: "더클래스-청담 웨딩홀 홍보영상 제작",
    thumbnailUrl: "/thumbnails/더클래스-청담.jpg", // 썸네일
    videoUrl: "https://www.youtube.com/embed/cWcAa7Y9q0Q", // 유튜브 링크
    captureFolder: "/captures/company/the-class/", // ✅ 캡쳐 폴더 경로
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="max-w-screen-2xl mx-auto px-6 py-10 grid grid-cols-12 gap-6">
        
        {/* 프로젝트 메인 타이틀 */}
        <div className="col-start-4 col-span-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold">{project.title}</h1>
        </div>

        {/* 썸네일 제목 */}
        <div className="col-start-4 col-span-6 mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold">{project.brand}</h2>
        </div>

        {/* 썸네일 */}
        <div className="col-start-3 col-span-8 mb-12">
          <Image
            src={project.thumbnailUrl}
            alt={project.title}
            width={1280}
            height={720}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* 브랜드 */}
        <div className="col-start-4 col-span-2 flex flex-col justify-end mb-12">
          <h3 className="text-2xl font-semibold mb-2">Brand</h3>
          <p className="text-lg">{project.brand}</p>
        </div>

        {/* 설명 */}
        <div className="col-start-7 col-span-6 flex flex-col justify-end mb-12">
          <p className="text-base leading-relaxed">{project.description}</p>
        </div>

        {/* DATE */}
        <div className="col-start-4 col-span-2 flex flex-col justify-end mb-12">
          <h3 className="text-2xl font-semibold mb-2">DATE</h3>
          <p className="text-lg">{"JULY 2024"}</p>
        </div>

        {/* CATEGORI */}
        <div className="col-start-7 col-span-6 flex flex-col justify-end mb-12">
            <h3 className="text-2xl font-semibold mb-2">CATEGORI</h3>
            <p className="text-base leading-relaxed">{"AD"}</p>
        </div>

        {/* 영상 */}
        <div className="col-start-3 col-span-8 mt-12 mb-20">
          <div className="relative w-full pt-[56.25%]">
            <iframe
              src={project.videoUrl}
              title="Project Video"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full object-cover"
            ></iframe>
          </div>
        </div>

        {/* 캡처 이미지 3x3 그리드 */}
        <div className="col-start-3 col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className="relative w-full pt-[56.25%] overflow-hidden">
                <img
                  src={`${project.captureFolder}${index + 1}.jpg`}
                  alt={`Capture ${index + 1}`}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}