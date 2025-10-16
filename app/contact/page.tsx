"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function ContactPage() {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 pt-32">

        {/* HEADER */}
        <section className="grid grid-cols-12 gap-6 pt-16 pb-16 items-end">
          {/* Left */}
          <div className="col-span-12 md:col-start-4 md:col-span-3 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold">CONTACT</h1>
            <p className="text-xl font-semibold pt-12">
              당신의 이야기를 만들고 싶다면 지금 연락하세요.
            </p>
          </div>

          {/* Right */}
          <div className="col-span-12 md:col-start-7 md:col-span-4 text-center md:text-left">
            <p className="text-[18px] leading-snug tracking-tight">
              If you want to create your story, contact us now.
            </p>
          </div>
        </section>

        {/* FORM */}
        <section className="max-w-3xl mx-auto py-16">
          {submitted ? (
            <p className="text-green-400 text-center">문의가 성공적으로 전송되었습니다!</p>
          ) : (
            <form
              action="https://formspree.io/f/your-id" // ✅ Formspree로 변경
              method="POST"
              onSubmit={() => setSubmitted(true)}
              className="space-y-6"
            >
              <div>
                <label className="block mb-1">이름</label>
                <input type="text" name="name" required className="w-full p-2 text-black rounded" />
              </div>
              <div>
                <label className="block mb-1">연락처</label>
                <input type="text" name="phone" required className="w-full p-2 text-black rounded" />
              </div>
              <div>
                <label className="block mb-1">이메일</label>
                <input type="email" name="email" required className="w-full p-2 text-black rounded" />
              </div>
              <div>
                <label className="block mb-1">회사명 & 지역</label>
                <input type="text" name="company" className="w-full p-2 text-black rounded" />
              </div>
              <div>
                <label className="block mb-1">영상 카테고리</label>
                <select name="category" className="w-full p-2 text-black rounded">
                  <option>브랜디드 콘텐츠</option>
                  <option>인터뷰</option>
                  <option>병원</option>
                  <option>웨딩</option>
                  <option>기타</option>
                </select>
              </div>
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  required
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                />
                <label className="text-sm">
                  개인정보 수집 및 이용에 동의합니다.
                </label>
              </div>
              <button
                type="submit"
                disabled={!agreed}
                className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded disabled:opacity-50"
              >
                문의하기
              </button>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}