'use client';

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function ProjectDetailPage() {
  const params = useParams();

  const project = {
    title: "MITHA",
    brand: "MITHA",
    description: "미다 화장품 인스타 광고영상",
    thumbnailUrl: "/thumbnails/미다.jpg", // ✅ 썸네일 경로
    videoUrl: "https://www.youtube.com/embed/mp5vQdufj4I", // ✅ 영상 링크 추가 필요
    captureFolder: "/captures/company/mitha/", // ✅ 캡쳐 폴더 경로
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="max-w-screen-2xl mx-auto px-6 py-10 grid grid-cols-12 gap-6">
        
        {/* 프로젝트 메인 타이틀 */}
        <div className="col-start-4 col-span-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            {project.title}
          </h1>
        </div>

        {/* 썸네일 제목 */}
        <div className="col-start-4 col-span-6 mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            {project.brand}
          </h2>
        </div>

        {/* 썸네일 이미지 */}
        <div className="col-start-3 col-span-8 mb-12">
          <img
            src={project.thumbnailUrl}
            alt={project.title}
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
          <p className="text-lg">{"NOVEMBER 2023"}</p>
        </div>

        {/* CATEGORI */}
        <div className="col-start-7 col-span-6 flex flex-col justify-end mb-12">
            <h3 className="text-2xl font-semibold mb-2">CATEGORI</h3>
            <p className="text-base leading-relaxed">{"AD"}</p>
        </div>

        {/* 영상 */}
        <div className="col-start-3 col-span-8 mt-12">
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
        {/* 캡처 이미지 1:1 그리드 */}
        <div className="col-start-3 col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="relative w-full pt-[100%] overflow-hidden">
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