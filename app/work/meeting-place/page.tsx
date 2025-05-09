'use client';


import Navbar from "@/components/Navbar";
import Image from "next/image"

export default function ProjectDetailPage() {

  const project = {
    title: "만남의 장",
    brand: "만남의 장",
    description: "유튜브 만남의 장 '관계의 기술' 콘텐츠 영상",
    thumbnailUrl: "/thumbnails/만남의 장.jpg", // ✅ 썸네일 경로 (파일명 확인)
    videoUrls: [
      "https://www.youtube.com/embed/QYdGTZdkQfw", 
      "https://www.youtube.com/embed/Nzj4WHbu4hE",
      "https://www.youtube.com/embed/cdngnc7ebzs",
      "https://www.youtube.com/embed/GWe0DpqztlI"
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
          <Image
            src={project.thumbnailUrl}
            alt={project.title}
            width={1280}
            height={720}
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