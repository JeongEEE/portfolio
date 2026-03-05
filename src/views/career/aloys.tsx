import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImageViewDialog from "../../components/ImageViewDialog";

const megaliveImages = [
  "images/megalive1.png", "images/megalive2.png", "images/megalive3.png",
  "images/megalive4.png", "images/megalive5.png", "images/megalive6.png",
  "images/megalive7.png", "images/megalive8.png", "images/megalive9.png",
  "images/megalive10.png", "images/megalive11.png", "images/megalive12.png",
  "images/megalive13.png",
];

const hoverlightImages = [
  "images/hoverlight1.png", "images/hoverlight2.png",
  "images/hoverlight3.png", "images/hoverlight4.png",
];

const Aloys = () => {
  const [dialogImages, setDialogImages] = useState<string[]>([]);
  const [dialogIndex, setDialogIndex] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = (images: string[], index: number) => {
    setDialogImages(images);
    setDialogIndex(index);
    setDialogOpen(true);
  };

  return (
    <div className="border border-[#222] rounded-xl overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* 좌측: 로고 + 회사 정보 */}
        <div className="w-full md:w-1/4 p-6 border-b md:border-b-0 md:border-r border-[#222] flex flex-col items-center gap-2">
          <div className="border border-[#333] rounded-xl bg-white p-3 mb-2">
            <img src="images/aloys_logo.png" className="w-28 h-auto object-contain" alt="알로이스 로고" loading="lazy" />
          </div>
          <p className="text-white font-semibold text-center">(주)알로이스</p>
          <p className="text-zinc-400 text-sm">2023.12 ~ 2024.12</p>
          <p className="text-zinc-500 text-sm">앱개발 팀</p>
        </div>

        {/* 우측: 프로젝트 목록 */}
        <div className="w-full md:w-3/4 p-6 flex flex-col gap-8">
          {/* 프로젝트 1: Mega Live Studio */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">⭐️ Mega Live Studio</h3>
            <div className="space-y-1 text-sm text-zinc-400 mb-4 pl-2">
              <p>► 담당 역할 : 풀스택 개발 전체</p>
              <p>► 업무 기간 : 2024.02 ~ 2024.12</p>
              <p>► 기술 스택 : React 18, Next.js 14, Typescript, React-query, Recoil, Material UI, Emotion, Lottie, fabric, i18n, Node.js, Express, Mysql, Redis, Websocket, AWS Amplify, AWS EC2</p>
              <p>► 업무 내용</p>
              <p className="pl-4">➢ 라이브 방송 스트리머를 위한 실시간 모션 그래픽 플랫폼 개발</p>
              <p className="pl-4">➢ 미리 생성된 Lottie 모션, Image 디자인 템플릿을 사용자가 추가, 편집 및 실시간 방송에 오버레이로 송출할 수 있도록 개발</p>
              <p className="pl-4">➢ Lottie 모션 오버레이를 편집하고 실시간 제어하며 방송기기에 송출하는 기능 개발</p>
              <p className="pl-4">➢ 방송 큐시트를 직접 또는 AI로 작성하고 큐시트에 오버레이를 추가하여 큐시트 내용에 맞게 편집, 제어, 송출하는 기능 개발</p>
              <p className="pl-4">➢ 메가라이브 방송기기와 웹소켓으로 실시간 통신</p>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="w-full rounded-lg overflow-hidden"
              style={{ "--swiper-theme-color": "#ffffff" } as React.CSSProperties}
            >
              {megaliveImages.map((src, i) => (
                <SwiperSlide key={src}>
                  <img
                    src={src}
                    className="w-full object-contain cursor-zoom-in"
                    alt={`megalive${i + 1}`}
                    loading={i === 0 ? undefined : "lazy"}
                    onClick={() => openDialog(megaliveImages, i)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* 프로젝트 2: 스마트 접현등 관제 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">⭐️ 스마트 접현등 관제</h3>
            <div className="space-y-1 text-sm text-zinc-400 mb-4 pl-2">
              <p>► 담당 역할 : 풀스택 개발 전체(기여도 100%)</p>
              <p>► 업무 기간 : 2023.12 ~ 2024.02</p>
              <p>► 기술 스택 : React 18, Next.js 14, Typescript, React-query, Recoil, Material UI, Emotion, Pixi.js, Node.js, Express, Mysql, Redis, Websocket, Swagger</p>
              <p>► 업무 내용</p>
              <p className="pl-4">➢ 정부과제 스마트 접현등 관제 서비스 개발</p>
              <p className="pl-4">➢ Express 서버 API 구현, 정의서 작성</p>
              <p className="pl-4">➢ 선박 접안 상태 실시간 통신, Pixi.js로 선박 상태 표시</p>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="w-full rounded-lg overflow-hidden"
              style={{ "--swiper-theme-color": "#ffffff" } as React.CSSProperties}
            >
              {hoverlightImages.map((src, i) => (
                <SwiperSlide key={src}>
                  <img
                    src={src}
                    className="w-full object-contain cursor-zoom-in"
                    alt={`hoverlight${i + 1}`}
                    loading={i === 0 ? undefined : "lazy"}
                    onClick={() => openDialog(hoverlightImages, i)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <ImageViewDialog
        images={dialogImages}
        initialIndex={dialogIndex}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </div>
  );
};

export default Aloys;
