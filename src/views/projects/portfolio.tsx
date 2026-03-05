import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CheckCircle2 } from "lucide-react";
import ImageViewDialog from "../../components/ImageViewDialog";

const portImages = [
  "images/port1.png", "images/port2.png", "images/port3.png", "images/port4.png",
];

const Portfolio = () => {
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
        <h3 className="text-xl font-semibold text-white">웹 포트폴리오</h3>
        <p className="text-zinc-500 text-sm mt-1">2023.04</p>
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
            {portImages.map((src, i) => (
              <SwiperSlide key={src}>
                <img
                  src={src}
                  className="w-full object-contain cursor-zoom-in"
                  alt={`port${i + 1}`}
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
              <span className="text-white text-sm font-medium">GitHub</span>
              <p className="text-zinc-400 text-sm">
                <a
                  href="https://github.com/JeongEEE/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white hover:underline cursor-pointer"
                >
                  https://github.com/JeongEEE/portfolio
                </a>
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <CheckCircle2 className="text-white w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-white text-sm font-medium">URL</span>
              <p className="text-zinc-400 text-sm">
                <a
                  href="https://portfolio.purplediary.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white hover:underline cursor-pointer"
                >
                  https://portfolio.purplediary.kr
                </a>
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <CheckCircle2 className="text-white w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-white text-sm font-medium">기술스택</span>
              <p className="text-zinc-400 text-sm">React, Typescript, Vite, Recoil, Material UI, Emotion, Firebase, Three.js</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <CheckCircle2 className="text-white w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-white text-sm font-medium">주요기능</span>
              <p className="text-zinc-400 text-sm">자기소개, 인적사항, 기술 스택, 프로젝트 경험, 업무 경력, 모바일 지원</p>
            </div>
          </div>
          <div className="border-b border-[#333] my-1"></div>
          <p className="text-zinc-400 text-sm">제출과 열람이 편리하도록 개발한 포트폴리오 웹사이트 입니다.</p>
          <p className="text-zinc-400 text-sm">Vite를 사용하여 React로 개발하였습니다.</p>
        </div>
      </div>

      <ImageViewDialog
        images={portImages}
        initialIndex={dialogIndex}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </div>
  );
};

export default Portfolio;
