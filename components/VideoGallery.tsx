"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoGalleryProps {
  videos: string[];
}

export default function VideoGallery({ videos }: VideoGalleryProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="relative">
      {/* 썸네일 리스트 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((id, index) => (
          <div
            key={index}
            className="relative w-full aspect-video cursor-pointer overflow-hidden rounded-md bg-black"
            onClick={() => setSelectedVideo(id)}
          >
            <Image
              src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
              alt={`Video ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              unoptimized
            />
          </div>
        ))}
      </div>

      {/* 모달 */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6">
          <div className="grid grid-cols-12 w-full max-w-7xl relative">
            {/* X 버튼 */}
            <div className="col-span-12 flex justify-end mb-4">
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-white text-4xl font-bold"
              >
                ×
              </button>
            </div>

            {/* 영상 */}
            <div className="col-start-2 col-span-10 relative w-full pt-[56.25%]">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube Video Player"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-md"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}