"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 pt-32">

        {/* ABOUT US */}
        <section className="grid grid-cols-12 gap-6 pt-16 pb-16 items-end">
          {/* 왼쪽 한글 */}
          <div className="col-span-12 md:col-start-4 md:col-span-3 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold">ABOUT US</h1>

            <p className="text-2xl font-bold pt-12">&quot;Here and Now&quot;</p>

            <p className="text-[18px] mt-8 leading-snug tracking-tight">
              당신의 소중한 &apos;지금&apos;을 함께 기록하고 완성합니다.<br />
              Now Studio는 오늘의 이야기를 내일의 가치로 바꿉니다.
            </p>
          </div>

          {/* 오른쪽 영어 */}
          <div className="col-span-12 md:col-start-7 md:col-span-4 text-center md:text-left">
            <p className="text-[18px] leading-snug tracking-tight">
              We capture your precious &apos;now&apos;<br />
              and turn it into tomorrow&apos;s treasure.
            </p>
          </div>
        </section>

        {/* MISSION */}
        <section className="grid grid-cols-12 gap-6 mb-24 pt-12">
          <h2 className="col-span-12 md:col-start-4 md:col-span-6 text-4xl font-bold mb-8 text-center md:text-left">MISSION</h2>

          <div className="col-span-12 md:col-start-4 md:col-span-6 flex flex-col md:flex-row justify-between items-start gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col justify-between items-center w-full md:w-1/3">
                <div className="flex justify-center items-center h-24">
                  <Image src={`/about/about-${i}.png`} alt={`Mission ${i}`} width={80} height={80} unoptimized />
                </div>
                <h3 className="text-lg font-bold mt-4">
                  {i === 1 ? "Embrace the present" : i === 2 ? "Capture fleeting moments" : "Shape dreams for tomorrow"}
                </h3>
                <p className="text-sm text-white text-center leading-snug mt-2">
                  {i === 1
                    ? "지금 이 순간을 잡아야,\n진짜 이야기가 시작된다"
                    : i === 2
                    ? "찰나를 기록하는 것이,\n시간을 넘어서는 힘이 된다"
                    : "내일을 꿈꾸는 당신의 이야기들,\n지금 설계하여 현실로 이끈다"}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY NOW STUDIO */}
        <section className="bg-black text-white py-8">
          <div className="max-w-[1920px] mx-auto grid grid-cols-12 gap-6 px-4 sm:px-6">
            
            {/* 섹션 타이틀 */}
            <h2 className="col-span-12 md:col-start-4 md:col-span-6 text-4xl font-bold mb-12 text-center md:text-left">
              Why Now Studio?
            </h2>

            {/* 경험이 검증된 전문가 */}
            <div className="col-span-12 md:col-start-4 md:col-span-6 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 mb-16">
              <Image src="/about/why-1.png" alt="전문가" width={120} height={120} unoptimized />
              <div>
                <h3 className="text-xl font-bold mb-2">경험이 검증된 전문가</h3>
                <p className="text-base leading-relaxed">
                  Now Studio는 영상 제작 경력 8년 이상의 PD와 숙련된 팀원들이 함께합니다.
                  <br />
                  우리는 단순히 영상을 만드는 것을 넘어, 마음을 움직이는 스토리를 완성합니다.
                </p>
              </div>
            </div>

            {/* 평범함을 넘어서는 접근 */}
            <div className="col-span-12 md:col-start-4 md:col-span-6 flex flex-col md:flex-row-reverse items-center md:items-start text-center md:text-right gap-6 mb-16">
              <Image src="/about/why-2.png" alt="차별화" width={120} height={120} unoptimized />
              <div>
                <h3 className="text-xl font-bold mb-2">평범함을 넘어서는 접근</h3>
                <p className="text-base leading-relaxed">
                  Now Studio는 단순한 촬영과 편집에 머물지 않습니다.
                  <br />
                  창의적인 방향성과 차별화된 스토리텔링을 통해,
                  <br />
                  브랜드만의 독창성을 담아냅니다.
                </p>
              </div>
            </div>

            {/* Now Studio만의 특별한 지원 */}
            <div className="col-span-12 md:col-start-4 md:col-span-6 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 mb-16">
              <Image src="/about/why-3.png" alt="Now Studio 아이콘" width={120} height={120} unoptimized />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-6">Now Studio만의 특별한 지원</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <ul className="text-base space-y-2">
                    <li>✔️ 대본 작성 및 인터뷰 지원</li>
                    <li>✔️ 유튜브 채널 운영을 위한 전략 PDF 제공</li>
                    <li>✔️ 콘텐츠 컨설팅 및 컨펌팀 지원</li>
                  </ul>
                  <ul className="text-base space-y-2">
                    <li>✔️ 유튜브 SEO 최적화 자료 제공</li>
                    <li>✔️ 결과 성과 리뷰 미팅(온라인)</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}