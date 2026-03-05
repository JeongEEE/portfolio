import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CheckCircle2 } from "lucide-react";
import ImageViewDialog from "../../components/ImageViewDialog";

const diaryBackendImages = [
  "images/diary_backend1.png", "images/diary_backend2.png", "images/diary_backend3.png",
];

const DiaryBackend = () => {
  const [dialogIndex, setDialogIndex] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = (index: number) => {
    setDialogIndex(index);
    setDialogOpen(true);
  };

  return (
    <div className="bg-[#111] border border-[#222] rounded-xl overflow-hidden mb-6">
      {/* 헤더 */}
      <div className="p-6 border-b border-[#222]">
        <h3 className="text-xl font-semibold text-white">다이어리 서버</h3>
        <p className="text-zinc-500 text-sm mt-1">2024.01 ~ 유지보수 중</p>
      </div>
      {/* 본문: 좌측 이미지 슬라이더 + 우측 텍스트 */}
      <div className="flex flex-col md:flex-row">
        {/* 이미지 슬라이더 */}
        <div className="w-full md:w-1/2">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="w-full"
            style={{ "--swiper-theme-color": "#ffffff" } as React.CSSProperties}
          >
            {diaryBackendImages.map((src, i) => (
              <SwiperSlide key={src}>
                <img
                  src={src}
                  className="w-full object-contain cursor-zoom-in"
                  alt={`diary_backend${i + 1}`}
                  loading={i === 0 ? undefined : "lazy"}
                  onClick={() => openDialog(i)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* 텍스트 정보 */}
        <div className="w-full md:w-1/2 p-6 flex flex-col gap-3">
          <div className="flex gap-3 items-start">
            <CheckCircle2 className="text-white w-5 h-5 mt-0.5 shrink-0" />
            <div>
              <span className="text-white text-sm font-medium">기술스택</span>
              <p className="text-zinc-400 text-sm">Express.js 5, TypeScript 5.x, Prisma 7.x (MariaDB), Redis (ioredis), MinIO, JWT, Socket.io 4.x, web-push, nodemailer, sharp, winston, ssh2, Mocha / Chai / Supertest, Google GenAI</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <CheckCircle2 className="text-white w-5 h-5 mt-0.5 shrink-0" />
            <div>
              <span className="text-white text-sm font-medium">주요기능</span>
              <p className="text-zinc-400 text-sm">다이어리 서버, DB 관리, 외부 API 호출</p>
            </div>
          </div>
          <div className="border-b border-[#333] my-1"></div>
          <p className="text-zinc-400 text-sm">Express.js 5 + TypeScript 기반 RESTful API 서버 설계 및 개발(메모, 가계부, 달력, 차계부, 게시판, 지도, 게임 등 전 도메인 API 구현)</p>
          <p className="text-zinc-400 text-sm">JWT 기반 일반 인증과 SimpleWebAuthn 서버 라이브러리를 활용한 WebAuthn(패스키) 인증 흐름 설계 및 구현</p>
          <p className="text-zinc-400 text-sm">API Key 발급·권한 체크·사용량 쿼터 미들웨어 설계로 외부 연동용 인증 레이어 구축</p>
          <p className="text-zinc-400 text-sm">Prisma ORM을 통한 DB 스키마 관리 및 트랜잭션 처리, MariaDB + Redis 이중 저장소 아키텍처 운영</p>
          <p className="text-zinc-400 text-sm">MinIO 오브젝트 스토리지 연동으로 메모 첨부파일·이미지 업로드/다운로드 처리, sharp를 이용한 서버사이드 이미지 리사이징</p>
          <p className="text-zinc-400 text-sm">Web Push(web-push) 및 nodemailer를 이용한 푸시 알림·이메일 발송 기능 구현</p>
          <p className="text-zinc-400 text-sm">Google GenAI SDK 연동 AI 서비스 API 개발</p>
          <p className="text-zinc-400 text-sm">express-rate-limit 기반 요청 제한, winston + winston-daily-rotate-file을 이용한 구조화 로깅 시스템 구축</p>
          <p className="text-zinc-400 text-sm">Mocha / Chai / Supertest 기반 단위·E2E 테스트 작성</p>
        </div>
      </div>

      <ImageViewDialog
        images={diaryBackendImages}
        initialIndex={dialogIndex}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </div>
  );
};

export default DiaryBackend;
