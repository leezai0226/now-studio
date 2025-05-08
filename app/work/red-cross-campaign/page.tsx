'use client';

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function ProjectDetailPage() {
  const params = useParams();

  const project = {
    title: "대한적십자사 경기도지사",
    brand: "대한적십자사 경기도지사",
    description: "희망나눔캠페인 수상소감 영상을 제작한 프로젝트",
    thumbnailUrl: "/thumbnails/대한적십자사경기도지사.jpg",
    videoUrls: [
      "https://www.youtube.com/embed/KqBe90Td4Qk", 
      "https://www.youtube.com/embed/oR2Dd3HWd0Q",
      "https://www.youtube.com/embed/i0-Mj5auWtg",
      
    ],
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
        <div className="col-start-4 col-span-2 flex flex-col justify-end">
          <h3 className="text-2xl font-semibold mb-2">Brand</h3>
          <p className="text-lg">{project.brand}</p>
        </div>

        {/* 설명 */}
        <div className="col-start-7 col-span-6 flex flex-col justify-end">
          <p className="text-base leading-relaxed">{project.description}</p>
        </div>

        {/* 영상 그리드 */}
        <div className="col-span-12 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.videoUrls.map((url, index) => (
            <div key={index} className="aspect-video w-full">
              <iframe
                src={url}
                title={`Project Video ${index + 1}`}
                allow="autoplay; fullscreen"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}