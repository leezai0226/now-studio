"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import VideoGallery from "@/components/VideoGallery";

export default function WorkPage() {
  return (
    <main className="max-w-[1920px] mx-auto px-6 pt-32 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Projects 헤더 */}
      <section className="grid grid-cols-12 gap-6 pt-16 pb-16 items-end">
        <div className="col-start-4 col-span-3">
          <h1 className="text-4xl md:text-6xl font-bold">PROJECTS</h1>
          <p className="text-[18px] mt-8 leading-snug tracking-tight">
            Now Studio와 함께 협업한 브랜드 & 프로젝트들을 소개합니다
          </p>
        </div>
        <div className="col-start-7 col-span-4 flex flex-col justify-end">
          <p className="text-[18px] leading-snug tracking-tight">
            It’s a collaboration with Now Studio
            <br />
            Introducing brands and projects
          </p>
        </div>
      </section>

      {/* 구분선 */}
      <div className="grid grid-cols-12">
        <div className="col-start-4 col-span-5">
          <div className="border-t-[0.5px] border-white w-full my-9"></div>
        </div>
      </div>

      {/* 기획영상 섹션 */}
      <section className="space-y-10 pb-20">
        <div className="grid grid-cols-12">
          <div className="col-start-4 col-span-6">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">기획영상</h2>
            <p className="text-base md:text-lg">
              이제 스튜디오가 기획 및 촬영을 도맡아서 진행했던 프로젝트
            </p>
          </div>
        </div>

        {/* 카드 리스트 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[{
            href: "/work/kia-green-supporters",
            img: "/thumbnails/기아그린서포터즈.jpg",
            title: "기아 그린서포터즈",
            desc: "기아 그린 서포터즈 공유회"
          }, {
            href: "/work/red-cross-campaign",
            img: "/thumbnails/대한적십자사경기도지사.jpg",
            title: "대한적십자사경기도지사",
            desc: "희망나눔캠페인 수상소감"
          }, {
            href: "/work/rural-development",
            img: "/thumbnails/농촌진흥청.jpg",
            title: "농촌진흥청",
            desc: "농업인 치유 농업 운영 사례"
          }, {
            href: "/work/meeting-place",
            img: "/thumbnails/만남의 장.jpg",
            title: "만남의 장",
            desc: "유튜브 만남의 장 '관계의 기술'"
          }, {
            href: "/work/xylophone-investment",
            img: "/thumbnails/실로폰 투자.jpg",
            title: "실로폰",
            desc: "음악저작권 투자 인터뷰 영상"
          }].map((card, index) => (
            <Link key={index} href={card.href} className="relative group block w-full pt-[56.25%] overflow-hidden bg-black">
              <Image src={card.img} alt={card.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" unoptimized />
              <div className="absolute top-0 left-0 w-full h-full bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#fbff64] mb-2">{card.title}</h3>
                  <p className="text-white text-sm md:text-base">{card.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 유튜브 섹션 */}
      <section className="mt-16">
        <div className="grid grid-cols-12">
          <div className="col-start-4 col-span-6 mb-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">유튜브</h2>
            <p className="mt-2 text-lg mb-4">
              다양한 카테고리의 콘텐츠로 이제 스튜디오의 독창적인 편집 기술을 더한 영상
            </p>
          </div>
        </div>

        <VideoGallery videos={[
          "xPmE2OM6mZk",
          "S5DEL-Qjxdc",
          "CsiiLQfQL-Q",
          "rVNcRgOKMJs",
          "CBd4LSPPMfY",
          "2tmUp8TnVv4",
          "tMk9_hS4JkA",
          "AFaGESSYgiw",
          "n_5JVus_rZY",
          "dJhndOTLdBs",
          "cMW_fxWZSGk",
          "C4oqtg-LWik"
        ]} />
      </section>

      {/* 병원 섹션 */}
      <section className="mt-32">
        <div className="grid grid-cols-12">
          <div className="col-start-4 col-span-6 mb-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">병원</h2>
            <p className="mt-2 text-lg mb-16">
              병원에서 운영하는 유튜브 콘텐츠를 전문으로 작업한 콘텐츠 영상
            </p>
          </div>
        </div>

        <VideoGallery videos={[
          "yp7Dw4RRFlY",
          "WmvuQc7vFjo",
          "b5pGyqV-0Xg",
          "E9dK7P72J0k",
          "XkeE3o4Jc2I",
          "W1OoLLdowxo"
        ]} />
      </section>

      {/* 기업 섹션 */}
      <section className="mt-32 mb-32">
        <div className="grid grid-cols-12">
          <div className="col-start-4 col-span-6 mb-10">
            <h2 className="text-3xl font-bold">기업</h2>
            <p className="mt-2 text-lg">
              기업에서 광고 형태의 영상을 의뢰하여 진행한 프로젝트
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[{
            href: "/work/michelin",
            img: "/thumbnails/미쉐린.jpg",
            title: "미쉐린",
            desc: "미쉐린 프라이머시5 타이어 사용후기 영상"
          }, {
            href: "/work/theclass-wedding",
            img: "/thumbnails/더클래스-청담.jpg",
            title: "더클래스 청담",
            desc: "더클래스 청담 웨딩 홍보영상"
          }, {
            href: "/work/mitha",
            img: "/thumbnails/미다.jpg",
            title: "MITHA",
            desc: "미다 화장품 인스타 광고영상"
          }].map((card, index) => (
            <Link key={index} href={card.href} className="relative group block w-full pt-[56.25%] overflow-hidden bg-black">
              <Image src={card.img} alt={card.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" unoptimized />
              <div className="absolute top-0 left-0 w-full h-full bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#fbff64] mb-2">{card.title}</h3>
                  <p className="text-white text-sm md:text-base">{card.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}