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
            <CheckCircle2 className="text-white w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-white text-sm font-medium">기술스택</span>
              <p className="text-zinc-400 text-sm">Nodejs 18, Express, Typescript, Joi, Minio, Mysql, Sequelize, Redis</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <CheckCircle2 className="text-white w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-white text-sm font-medium">주요기능</span>
              <p className="text-zinc-400 text-sm">다이어리 서버, DB 관리, 외부 API 호출</p>
            </div>
          </div>
          <div className="border-b border-[#333] my-1"></div>
          <p className="text-zinc-400 text-sm">Firebase로 구현한 다이어리 서비스에서 Firebase 로직을 제거하고 백엔드를 직접 구축하였습니다.</p>
          <p className="text-zinc-400 text-sm">NodeJS Express로 서버를 구현하였으며 Typescript로 작성하여 유지보수가 수월하도록 코드를 작성하였습니다.</p>
          <p className="text-zinc-400 text-sm">Nosql 기반의 firestore DB에서 관계형 데이터베이스인 Mysql로 마이그레이션 작업을 성공적으로 진행하였습니다.</p>
          <p className="text-zinc-400 text-sm">정적인 Assets은 캐시정책을 설계하고, Redis를 활용하여 빠르게 캐시 데이터를 활용하도록 구축하였습니다.</p>
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
