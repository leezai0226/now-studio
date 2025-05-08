"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function ProjectDetailPage() {
  const params = useParams();

  const project = {
    title: "기아 그린서포터즈",
    brand: "기아그린서포터즈",
    description: "기아그린서포터즈 공유회에서 총 4팀이 각자의 개성에 맞게 제작한 영상",
    thumbnailUrl: "/thumbnails/기아그린서포터즈.jpg",
    videoUrl: "https://www.youtube.com/embed/cIGaBwhbQlg",
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="max-w-screen-2xl mx-auto px-6 py-10 grid grid-cols-12 gap-6">
        {/* 제목 */}
        <h1 className="col-span-12 text-4xl font-bold mb-6">{project.title}</h1>

        {/* 썸네일 */}
        <div className="col-start-3 col-span-8 mb-10">
          <img
            src={project.thumbnailUrl}
            alt={project.title}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* 브랜드 */}
        <div className="col-start-4 col-span-2 flex flex-col justify-end">
          <h2 className="text-2xl font-semibold mb-2">Brand</h2>
          <p className="text-lg">{project.brand}</p>
        </div>

        {/* 설명 */}
        <div className="col-start-7 col-span-6 flex flex-col justify-end">
          <p className="text-base leading-relaxed">{project.description}</p>
        </div>

        {/* 영상 2x2 그리드 */}
        <div className="col-span-12 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            project.videoUrl,
            "https://www.youtube.com/embed/t0LxBtyr2IA",
            "https://www.youtube.com/embed/Ba97E7pEGoI",
            "https://www.youtube.com/embed/FZ9zop3MZ7c",
          ].map((url, index) => (
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