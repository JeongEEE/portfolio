import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImageViewDialog from "../../components/ImageViewDialog";

const blurmeEnterpriseImages = [
  "images/blurme_enterprise1.png", "images/blurme_enterprise2.png", "images/blurme_enterprise3.png",
  "images/blurme_enterprise4.png", "images/blurme_enterprise5.png", "images/blurme_enterprise6.png",
  "images/blurme_enterprise7.png", "images/blurme_enterprise8.png", "images/blurme_enterprise9.png",
  "images/blurme_enterprise10.png", "images/blurme_enterprise11.png", "images/blurme_enterprise12.png",
  "images/blurme_enterprise13.png", "images/blurme_enterprise14.png", "images/blurme_enterprise15.png",
  "images/blurme_enterprise16.png",
];

const blurmeImages = [
  "images/blurme1.png", "images/blurme2.png", "images/blurme3.png", "images/blurme4.png",
  "images/blurme5.png", "images/blurme6.png", "images/blurme7.png", "images/blurme8.png",
  "images/blurme9.png", "images/blurme10.png", "images/blurme11.png", "images/blurme12.png",
  "images/blurme13.png", "images/blurme14.png", "images/blurme15.png", "images/blurme16.png",
  "images/blurme17.png"
];

const Jarasoft = () => {
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
            <img src="images/jarasoft_logo_black_ver.svg" className="w-28 h-auto object-contain" alt="자라소프트 로고" loading="lazy" />
          </div>
          <p className="text-white font-semibold text-center">(주)자라소프트</p>
          <p className="text-zinc-400 text-sm">2025.02 ~ 현재</p>
          <p className="text-zinc-500 text-sm">응용기술팀</p>
        </div>

        {/* 우측: 프로젝트 목록 */}
        <div className="w-full md:w-3/4 p-6 flex flex-col gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">⭐️ Blur.me Enterprise</h3>
            <div className="space-y-1 text-sm text-zinc-400 mb-4 pl-2">
              <p>► 담당 역할 : 웹 프론트엔드 개발</p>
              <p>► 업무 기간 : 2025.08 ~ 현재</p>
              <p>► 기술 스택 : React 18, Next.js 14, Typescript, Recoil, Material UI, Tailwind, i18n, Canvas, Docker</p>
              <p>► 업무 내용</p>
              <p className="pl-4">➢ 동영상/이미지를 자동으로 블러/모자이크 처리해주는 AI 비식별화 기업용 솔루션 개발 및 유지보수</p>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="w-full rounded-lg overflow-hidden"
              style={{ "--swiper-theme-color": "#ffffff" } as React.CSSProperties}
            >
              {blurmeEnterpriseImages.map((src, i) => (
                <SwiperSlide key={src}>
                  <img
                    src={src}
                    className="w-full object-contain cursor-zoom-in"
                    alt={`blurme_enterprise${i + 1}`}
                    loading={i === 0 ? undefined : "lazy"}
                    onClick={() => openDialog(blurmeEnterpriseImages, i)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">⭐️ Blur.me</h3>
            <div className="space-y-1 text-sm text-zinc-400 mb-4 pl-2">
              <p>► 담당 역할 : 웹 프론트엔드 개발</p>
              <p>► 업무 기간 : 2025.02 ~ 현재</p>
              <p>► 기술 스택 : React 18, Next.js 14, Typescript, Recoil, Material UI, Tailwind, i18n, Canvas, AWS Amplify, AWS EC2, AWS S3</p>
              <p>► 업무 내용</p>
              <p className="pl-4">➢ 동영상/이미지를 자동으로 블러/모자이크 처리해주는 AI 비식별화 글로벌 솔루션 개발 및 유지보수</p>
              <p className="pl-4">➢ 블러미 관리자 서비스 개발</p>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="w-full rounded-lg overflow-hidden"
              style={{ "--swiper-theme-color": "#ffffff" } as React.CSSProperties}
            >
              {blurmeImages.map((src, i) => (
                <SwiperSlide key={src}>
                  <img
                    src={src}
                    className="w-full object-contain cursor-zoom-in"
                    alt={`blurme${i + 1}`}
                    loading={i === 0 ? undefined : "lazy"}
                    onClick={() => openDialog(blurmeImages, i)}
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

export default Jarasoft;
